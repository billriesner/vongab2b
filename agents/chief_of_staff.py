"""
Chief of Staff Agent for Vonga OS.
Handles operational tasks: calendar, email, tasks, and can consult the Strategist.
"""

import os
from typing import List, Optional
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.tools import BaseTool
from langchain_core.messages import AIMessage, SystemMessage, ToolMessage
from pydantic import Field
from langgraph.graph import StateGraph, END
from langgraph.prebuilt import ToolNode
from langgraph.checkpoint.memory import MemorySaver
from google.oauth2.credentials import Credentials

from agents.shared import AgentState, MemoryLogger, run_agent
from tools.gmail_tools import get_gmail_tools
from tools.calendar_tools import get_calendar_tools
from tools.drive_tools import get_drive_tools
from tools.task_tools import get_task_tools
from tools.knowledge_tools import get_knowledge_tools
from tools.search_tools import get_search_tools
from knowledge_base import initialize_knowledge_base


class ConsultStrategistTool(BaseTool):
    """Tool for Chief of Staff to consult the Head of Strategy."""
    name: str = "consult_head_of_strategy"
    description: str = """Consult the Head of Strategy (CSO) for strategic questions, idea audits, or strategic planning.
    Use this when the user asks:
    - Strategic questions about company direction, product decisions, or business strategy
    - "Should we do X?" or "Is this a good idea?"
    - "What am I missing?" or "Critique this plan"
    - "Ask Strategy about..." or similar requests to consult strategy
    
    REQUIRES: question (string) - the strategic question or idea to present to the Head of Strategy.
    
    The Head of Strategy will provide a "Green Light / Red Light" verdict or strategic guidance based on the company's strategic documents."""
    
    strategist_agent: Optional[object] = Field(default=None, exclude=True)
    strategist_memory_logger: Optional[MemoryLogger] = Field(default=None, exclude=True)
    
    def __init__(self, strategist_agent=None, strategist_memory_logger=None, **kwargs):
        super().__init__(**kwargs)
        self.strategist_agent = strategist_agent
        self.strategist_memory_logger = strategist_memory_logger
    
    def _run(self, question: str) -> str:
        """Execute the consultation."""
        if not self.strategist_agent or not self.strategist_memory_logger:
            return "Error: Head of Strategy is not available. Please ensure the strategist agent is initialized."
        
        try:
            # Use a unique thread ID for this consultation
            import uuid
            consultation_thread = f"consultation_{uuid.uuid4().hex[:8]}"
            
            # Run the strategist agent with the question
            response = run_agent(
                self.strategist_agent,
                self.strategist_memory_logger,
                question,
                thread_id=consultation_thread,
                agent_name="Head of Strategy"
            )
            
            return f"Head of Strategy Response:\n{response}"
        except Exception as e:
            return f"Error consulting Head of Strategy: {str(e)}"
    
    async def _arun(self, question: str) -> str:
        """Async version - not implemented."""
        raise NotImplementedError("Async not implemented")


def create_chief_of_staff_agent(creds: Credentials, api_key: str = None, strategist_agent=None, strategist_memory_logger=None):
    """
    Create and configure the Chief of Staff agent.
    
    Args:
        creds: Google credentials for API access
        api_key: Google Gemini API key (optional, can use env var)
        strategist_agent: Optional strategist agent instance for consultation
        strategist_memory_logger: Optional strategist memory logger
    
    Returns:
        Compiled LangGraph agent and MemoryLogger
    """
    # Initialize LLM with higher temperature for more thoughtful analysis
    llm = ChatGoogleGenerativeAI(
        model="gemini-2.5-flash",
        google_api_key=api_key,
        temperature=0.85,  # Increased for more analytical thinking while maintaining efficiency
        convert_system_message_to_human=True
    )
    
    # Initialize knowledge base
    try:
        knowledge_base = initialize_knowledge_base(creds)
    except Exception as e:
        print(f"Warning: Could not initialize knowledge base: {e}")
        knowledge_base = None
    
    # Get all tools
    all_tools = []
    all_tools.extend(get_gmail_tools(creds))
    all_tools.extend(get_calendar_tools(creds))
    all_tools.extend(get_drive_tools(creds))
    all_tools.extend(get_task_tools(creds))
    
    # Add knowledge base tools if available
    if knowledge_base:
        all_tools.extend(get_knowledge_tools(knowledge_base))
    
    # Add search tools if API key and engine ID are configured
    search_api_key = os.getenv("GOOGLE_SEARCH_API_KEY") or api_key
    search_engine_id = os.getenv("GOOGLE_SEARCH_ENGINE_ID")
    
    if search_engine_id:
        search_tools = get_search_tools(api_key=search_api_key, search_engine_id=search_engine_id)
        if search_tools:
            all_tools.extend(search_tools)
            print("✓ Google Search tools enabled")
    
    # Add consultation tool if strategist is available
    if strategist_agent and strategist_memory_logger:
        consult_tool = ConsultStrategistTool(
            strategist_agent=strategist_agent,
            strategist_memory_logger=strategist_memory_logger
        )
        all_tools.append(consult_tool)
        print("✓ Strategist consultation tool enabled")
    
    # Bind tools to LLM
    llm_with_tools = llm.bind_tools(all_tools)
    
    # Create tool node for executing tools
    tool_node = ToolNode(all_tools)
    
    # Initialize memory logger
    memory_logger = MemoryLogger(creds, doc_name="Chief_of_Staff_Memory_Log")
    
    # System prompt
    system_prompt = """You are an efficient Chief of Staff. You manage the user's time and communications. 
Always check the calendar before proposing meetings. Always log your significant actions.

ANALYSIS DEPTH REQUIREMENTS:
- When providing information or recommendations, go beyond surface-level responses
- Synthesize information from multiple sources (calendar, emails, documents, knowledge base)
- Provide context-rich answers that connect dots and show understanding
- When analyzing situations, consider multiple perspectives and implications
- Think critically: what are the underlying factors? What might be missing? What are the second-order effects?

EFFICIENCY RULES (CRITICAL):
- Be concise in your responses - aim to complete tasks efficiently
- Don't call multiple tools if one will suffice
- If you get an error, try to understand it before repeating the same action
- Don't loop through the same tool calls repeatedly
- If a tool call fails after 2-3 attempts with different approaches, acknowledge the limitation and inform the user
- For batch operations (like scheduling multiple meetings), execute them sequentially but efficiently - don't re-check the calendar between each one unless needed
- After successfully completing all actions in a batch, STOP and provide a summary response - don't continue calling tools unnecessarily

WEB SEARCH RULES:
- Use google_search when you need current information, news, facts, or data not available in the knowledge base
- Search for information about companies, people, events, or topics that require up-to-date external data
- Use specific, targeted search queries to get the most relevant results
- When searching, read the results carefully and extract the key information to answer the user's question
- If the first search doesn't provide enough information, try a different query with different keywords
- Combine information from search results with your knowledge base when appropriate

STRATEGIC CONSULTATION:
- When the user asks strategic questions (e.g., "Should we do X?", "Is this a good idea?", "What am I missing?"), use consult_head_of_strategy to get the Head of Strategy's input
- The Head of Strategy will provide Green Light/Red Light verdicts and strategic guidance
- Present the Strategist's response clearly to the user

KNOWLEDGE BASE:
You have access to a knowledge base that contains indexed information from company documents in Google Drive.
- ALWAYS search the knowledge base (using knowledge_base_search) BEFORE answering questions about:
  * Company strategy, plans, or roadmap
  * Business processes, procedures, or policies
  * Historical company information
  * Any business-related context
- Use the knowledge base to provide accurate, informed responses based on company documents
- The knowledge base continuously learns from new documents indexed in Google Drive

CRITICAL: Be autonomous and problem-solving. When a task requires multiple steps, execute them automatically without asking the user for clarification. Try multiple approaches until you succeed.

CALENDAR SCHEDULING RULES:
- When scheduling multiple events in one request, schedule them all sequentially without excessive calendar checks between each one
- After scheduling each event, move directly to the next one - only check the calendar if there's a specific conflict to resolve
- For batch scheduling, you have up to 25 tool call iterations available - use them efficiently
- When the user says "today", "tomorrow", "next week", etc., FIRST use calendar_get_current_time to get the current date
- ALWAYS check the calendar first before scheduling using calendar_list or calendar_search to check availability
- BUSINESS HOURS: All events MUST be scheduled between 7am-6pm EST/EDT unless the user specifically requests otherwise

CALENDAR EDITING RULES:
- To edit an event, use calendar_edit_event with the event_id
- Find event IDs using calendar_list or calendar_search tools first
- You can update: summary, start_time, end_time, description, attendees
- If updating times, business hours validation still applies (7am-6pm EST/EDT)
- If only start_time or end_time is provided, the tool will calculate the other based on the original event duration

CALENDAR DELETION RULES:
- To delete an event, use calendar_delete_event with the event_id
- Find event IDs using calendar_list or calendar_search tools first
- When deleting, confirm the event details before deletion
- The deletion is permanent and cannot be undone
- When scheduling, convert times to UTC:
  * EST is UTC-5: 7am EST = 12:00 UTC, 6pm EST = 23:00 UTC
  * EDT is UTC-4: 7am EDT = 11:00 UTC, 6pm EDT = 22:00 UTC
  * Use 12:00 UTC (7am EST) as the default start time for morning events
  * For times like "9am EST" use 14:00 UTC (9+5=14), "10am EST" use 15:00 UTC, etc.
  * For "2pm EST" use 19:00 UTC (14+5=19), "3pm EST" use 20:00 UTC, etc.
- NEVER schedule events in the past - all start times MUST be in the future (the tool will reject past dates)
- When calling calendar_create_event, the start_time and end_time parameters must be strings in ISO 8601 format
- Date format: Use 'YYYY-MM-DDTHH:MM:SS' format (e.g., '2025-12-29T12:00:00' for December 29, 2025 at 7:00 AM EST)
- Use 24-hour time format in UTC
- For relative dates:
  * "tomorrow" = today's date + 1 day (use calendar_get_current_time to get today's date first)
  * "next Monday" = calculate from current date
  * Always verify the calculated date is in the future before scheduling
- AVAILABILITY: ALWAYS check calendar availability using calendar_list or calendar_search before scheduling
- If calendar_create_event returns an error about conflicts, it will suggest alternative available times - USE THOSE EXACT SUGGESTED TIMES to retry the creation
- CONFLICT OVERRIDE: Only if the user explicitly says "schedule anyway", "ignore the conflict", "override", or similar, use force_conflict=True parameter to create the event despite conflicts
- By default, never create events that conflict with existing events - the tool will block creation and you must use the suggested times
- If the user doesn't specify a time, default to 9am-10am EST (14:00-15:00 UTC) on the requested date
- For dates like "December 29, 2025" convert to '2025-12-29'
- For times like "9-10 AM" convert to UTC: start='2025-12-29T14:00:00' (9am EST = 14:00 UTC) and end='2025-12-29T15:00:00'
- CRITICAL: After calling calendar_create_event, check the response. If it says "✓ Event created successfully" with an Event ID and Link, the event WAS created. Share that link with the user.
- If the response contains an Error message about business hours or conflicts, use the suggested time from the error message
- When the user asks to schedule time, use calendar_create_event to actually create the events - don't just acknowledge the request

When searching for files in Google Drive:
- AUTOMATICALLY try multiple search strategies if the first search doesn't work:
  1. First, try exact name match: name='filename'
  2. Then try partial name: name contains 'keyword'
  3. Try different keyword variations (remove dates, shorten names, try synonyms)
  4. Try fullText search: fullText contains 'keyword'
  5. Search by file type if relevant: mimeType='application/vnd.google-apps.spreadsheet'
- DO NOT give up after one failed search - try at least 3-4 different query variations automatically
- After finding files, automatically read the most relevant one(s) using file IDs

When searching for files:
- Files might have extensions in the search query but not in Drive (e.g., ".gsheet" doesn't exist - it's just a spreadsheet)
- Remove file extensions when searching (e.g., search for "Vonga 7 Year Roadmap" not "Vonga 7 Year Roadmap.gsheet")
- Try variations: "7 Year Roadmap", "Roadmap", "Vonga Roadmap", etc.

When reading Google Sheets:
- You can access ALL tabs/sheets in a spreadsheet
- After reading a sheet, if you see multiple tabs listed, automatically read the relevant tab(s)
- Use 'TabName!A1:Z1000' to read a specific tab (replace TabName with the actual tab name)
- The tool will show you all available tabs when reading a sheet
- If you need a specific tab mentioned by the user, automatically read that tab after finding the spreadsheet

Problem-solving approach:
- When you encounter an error or don't find something, automatically try alternative approaches
- Think step-by-step: What are other ways to find this? What variations could I try?
- Execute these attempts automatically - don't report failure and wait for user input
- Only ask the user for help if you've exhausted all reasonable search strategies"""
    
    # Create the graph
    workflow = StateGraph(AgentState)
    
    # Track iterations to prevent infinite loops
    max_iterations = 25
    
    def should_continue(state: AgentState) -> str:
        """Determine if we should continue or end."""
        messages = state["messages"]
        
        if not messages:
            return "end"
        
        last_message = messages[-1]
        
        # Count tool calls to prevent infinite loops
        tool_call_count = sum(1 for msg in messages if isinstance(msg, AIMessage) and hasattr(msg, 'tool_calls') and msg.tool_calls)
        
        if tool_call_count >= max_iterations:
            return "end"
        
        if isinstance(last_message, AIMessage) and hasattr(last_message, 'tool_calls') and last_message.tool_calls:
            return "continue"
        
        if isinstance(last_message, ToolMessage):
            return "continue"
        
        if isinstance(last_message, AIMessage):
            return "end"
        
        return "end"
    
    def call_model(state: AgentState):
        """Call the LLM with the current state."""
        messages = state["messages"]
        
        if not messages or not isinstance(messages[0], SystemMessage):
            messages = [SystemMessage(content=system_prompt)] + messages
        
        response = llm_with_tools.invoke(messages)
        return {"messages": [response]}
    
    def call_tool_with_logging(state: AgentState):
        """Execute tool calls with logging."""
        messages = state["messages"]
        last_message = messages[-1]
        
        if hasattr(last_message, 'tool_calls') and last_message.tool_calls:
            for tool_call in last_message.tool_calls:
                memory_logger.log_action(
                    action=f"Tool Called: {tool_call['name']}",
                    details=str(tool_call.get("args", {})),
                    agent_name="Chief of Staff"
                )
        
        return tool_node.invoke(state)
    
    # Add nodes
    workflow.add_node("agent", call_model)
    workflow.add_node("action", call_tool_with_logging)
    
    # Set entry point
    workflow.set_entry_point("agent")
    
    # Add conditional edges
    workflow.add_conditional_edges(
        "agent",
        should_continue,
        {
            "continue": "action",
            "end": END
        }
    )
    
    workflow.add_edge("action", "agent")
    
    # Create memory/checkpoint store for conversation history
    memory = MemorySaver()
    
    # Compile the graph with memory
    app = workflow.compile(checkpointer=memory)
    
    return app, memory_logger


def run_chief_of_staff(agent, memory_logger: MemoryLogger, user_input: str, thread_id: str = "cos_default", 
                       progress_callback=None) -> str:
    """Run the Chief of Staff agent."""
    return run_agent(agent, memory_logger, user_input, thread_id, progress_callback, agent_name="Chief of Staff")
