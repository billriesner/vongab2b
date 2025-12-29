"""
Prospector Agent for Vonga OS.
Customer research and prospecting agent with live strategy reference.
"""

import os
from typing import List, TypedDict, Annotated
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.tools import BaseTool
from langchain_core.messages import AIMessage, SystemMessage, ToolMessage, HumanMessage
from langgraph.graph import StateGraph, END
from langgraph.prebuilt import ToolNode
from langgraph.checkpoint.memory import MemorySaver
from langgraph.graph.message import add_messages
from google.oauth2.credentials import Credentials

from agents.shared import MemoryLogger, run_agent
from tools.sheet_tools import get_sheet_tools
from tools.drive_tools import read_google_doc_by_name
try:
    # Try langchain_community first (more common)
    from langchain_community.tools.tavily_search import TavilySearchResults
except ImportError:
    try:
        # Fallback to langchain_tavily (uses TavilySearch)
        from langchain_tavily import TavilySearch
        TavilySearchResults = TavilySearch  # Alias for compatibility
    except ImportError:
        TavilySearchResults = None


class ProspectorState(TypedDict):
    """State for the Prospector agent graph with ICP context."""
    messages: Annotated[List, add_messages]
    icp_context: str  # Live strategy context loaded from Google Drive


def create_prospector_agent(creds: Credentials, api_key: str = None, tavily_api_key: str = None):
    """
    Create and configure the Prospector agent with live strategy reference.
    
    Args:
        creds: Google credentials for API access
        api_key: Google Gemini API key
        tavily_api_key: Tavily API key (optional, can use env var)
    
    Returns:
        Compiled LangGraph agent and MemoryLogger
    """
    # Initialize LLM with higher temperature for deeper analysis
    llm = ChatGoogleGenerativeAI(
        model="gemini-2.5-flash",
        google_api_key=api_key,
        temperature=0.9,  # Increased for more analytical and creative thinking
        convert_system_message_to_human=True
    )
    
    # Get Tavily API key
    tavily_key = tavily_api_key or os.getenv("TAVILY_API_KEY")
    if not tavily_key:
        print("Warning: TAVILY_API_KEY not found. Tavily search will not be available.")
        tavily_key = None
    
    # Initialize tools
    all_tools = []
    
    # Add Tavily search tool if API key is available
    if tavily_key and TavilySearchResults:
        try:
            tavily_tool = TavilySearchResults(
                api_key=tavily_key,
                max_results=5,
                description="Search the web for companies, their websites, About Us pages, and strategy information. Use this to find companies matching the user's criteria and to research their websites."
            )
            all_tools.append(tavily_tool)
            print("✓ Tavily search tool enabled")
        except Exception as e:
            print(f"⚠️ Tavily search tool not available: {str(e)}")
    else:
        if not tavily_key:
            print("⚠️ Tavily search tool not available (missing TAVILY_API_KEY)")
        else:
            print("⚠️ Tavily search tool not available (TavilySearchResults not found)")
    
    # Add sheet tools for saving prospects
    all_tools.extend(get_sheet_tools(creds))
    print("✓ Sheet tools enabled")
    
    # Bind tools to LLM
    llm_with_tools = llm.bind_tools(all_tools)
    
    # Create tool node
    tool_node = ToolNode(all_tools)
    
    # Initialize memory logger
    memory_logger = MemoryLogger(creds, doc_name="Prospector_Memory_Log")
    
    # Base system prompt (will be enhanced with ICP context)
    base_system_prompt = """You are the Vonga Prospector. You are an expert hunter of business opportunities.

YOUR GOAL:
Research companies (either found through search or provided by the user), conduct deep research, and save them to the database.

TWO MODES OF OPERATION:
1. **SEARCH MODE:** When the user provides search criteria (e.g., "sustainable fashion brands in Austin"):
   - Use Tavily to find companies matching the criteria
   - Research each promising target
   - Save them to the database

2. **RESEARCH MODE:** When the user provides specific company names or a list:
   - Research each company by name using Tavily
   - Find their website, About Us page, team page
   - Conduct deep research on each one
   - Save them to the database

PROCESS (for both modes):
1. **Identify Targets:** Either search for companies OR use the provided company names.
2. **Deep Research Phase:** For each target, conduct MULTI-LAYERED research:
   - **Layer 1 - Company Overview:** Search for "[Company] about us", "[Company] company", "[Company] mission"
   - **Layer 2 - Strategy & News:** Search for "[Company] strategy", "[Company] news 2024", "[Company] expansion", "[Company] rebrand"
   - **Layer 3 - Leadership:** Search for "[Company] leadership", "[Company] team", "[Company] executives", "[Company] founders"
   - **Layer 4 - Contact & Partnerships:** Search for "[Company] contact", "[Company] partnerships", "[Company] press"
   - **Layer 5 - Industry Context:** Search for "[Company] industry", "[Company] competitors", "[Company] market position"
3. **Deep Analysis Phase:** After gathering information, ANALYZE and SYNTHESIZE:
   - **Strategic Fit Analysis:** How does this company align with Vonga's value proposition? What specific pain points does Vonga solve for them?
   - **Timing Analysis:** Are they in a growth phase, rebranding, expanding? What signals indicate they need Vonga NOW?
   - **Decision Maker Mapping:** Who are the key stakeholders? What are their roles and likely priorities?
   - **Competitive Context:** How does this company compare to others in their space? What makes them unique?
   - **Risk Assessment:** What are potential challenges or objections? What would make this a difficult sale?
4. **Synthesis & Insight Generation:** Before saving, provide:
   - A comprehensive analysis paragraph (3-5 sentences) that synthesizes all findings
   - Specific, actionable insights about why Vonga is a fit
   - Strategic angle that goes beyond generic positioning
5. **Save:** ONE BY ONE, use the `save_prospect_to_db` tool to save them with the deep analysis. Do not batch them; save as you find them to ensure data safety.

CRITICAL - DEPTH REQUIREMENTS:
- **NO SURFACE-LEVEL RESEARCH:** You must conduct multi-layered research. Don't just read one page and save. Gather information from multiple sources and perspectives.
- **SYNTHESIS REQUIRED:** Before saving, synthesize all findings into a coherent analysis. Don't just list facts - provide insights, connections, and strategic implications.
- **SPECIFICITY MANDATORY:** Generic descriptions like "tech company" or "fashion brand" are NOT acceptable. Provide specific details: what they do, who they serve, their unique positioning, recent moves, market position.
- **STRATEGIC ANGLE DEPTH:** The "strategy_angle" field must be specific and insightful. Not "Vonga helps with branding" but "Vonga enables [Company] to create tangible connection experiences for their [specific customer segment] during their [specific initiative/expansion], addressing their need to [specific pain point]."
- **CONTEXT-RICH DESCRIPTIONS:** The description field should be 2-3 sentences that paint a complete picture: what they do, who they serve, their stage/scale, and what makes them interesting as a prospect.
- **DECISION MAKER RESEARCH:** Don't just guess titles. Research actual people: search for "[Company] CMO", "[Company] brand director", "[Company] marketing team". Find names, LinkedIn profiles, or at minimum specific roles.
- **CONTACT RESEARCH:** Try multiple approaches: "[Company] contact", "[Company] press email", "[Company] marketing contact", "[Company] LinkedIn". If you can't find direct contact, provide the most relevant contact method you found.

EFFICIENCY:
- After finding 3-5 good prospects and saving them (in search mode), provide a comprehensive summary and stop.
- When given specific company names, research ALL of them thoroughly before stopping.
- Quality over quantity: Better to deeply research 3 companies than surface-research 10.

ANALYSIS FRAMEWORK (use this for each company):
1. **What they do:** Specific business model, products/services, target market
2. **Why they're interesting:** Growth signals, strategic moves, market position, unique factors
3. **Vonga fit:** Specific use case, pain point Vonga solves, timing relevance
4. **Decision makers:** Actual people/roles, their likely priorities, how to reach them
5. **Strategic angle:** Compelling narrative for why this partnership makes sense"""
    
    # Create the graph
    workflow = StateGraph(ProspectorState)
    
    max_iterations = 40  # Increased for research tasks (search, analyze, save)
    
    def load_criteria(state: ProspectorState) -> ProspectorState:
        """Load ICP criteria from Google Drive document."""
        try:
            # Read the customer data document
            icp_content = read_google_doc_by_name(creds, "04_Customer_Data")
            
            # If not found, try Strategy Prime as fallback
            if icp_content.startswith("Error:"):
                icp_content = read_google_doc_by_name(creds, "00_Strategy_Prime")
            
            # Store in state
            state["icp_context"] = icp_content
            
            # Log the loading
            memory_logger.log_action(
                action="Loaded ICP Context",
                details=f"Loaded from Google Drive: {'04_Customer_Data' if not icp_content.startswith('Error:') else '00_Strategy_Prime (fallback)'}",
                agent_name="Prospector"
            )
            
            return state
        except Exception as e:
            # If loading fails, set empty context
            state["icp_context"] = f"Error loading ICP context: {str(e)}"
            return state
    
    def should_continue(state: ProspectorState) -> str:
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
    
    def call_model(state: ProspectorState):
        """Call the LLM with the current state, including ICP context."""
        messages = state["messages"]
        icp_context = state.get("icp_context", "")
        
        # Build enhanced system prompt with ICP context
        if icp_context and not icp_context.startswith("Error"):
            enhanced_prompt = f"""{base_system_prompt}

LIVE STRATEGY CONTEXT (CRITICAL - MUST PRIORITIZE):
You must strictly prioritize companies that match the criteria defined in the following LIVE CONTEXT from the user's strategy documents:

{icp_context}

This context is loaded directly from Google Drive and represents the current Ideal Customer Profile. Use this as your primary filter when searching and evaluating prospects. Only save companies that align with these criteria.

DEEP ANALYSIS MANDATE:
When researching companies, you must provide analysis that matches or exceeds the depth you would get from a senior business analyst or consultant. This means:
- Multi-source research (don't rely on a single search result)
- Synthesis of information into coherent insights
- Strategic thinking about fit, timing, and opportunity
- Specific, actionable details rather than generic descriptions
- Critical evaluation of each prospect's potential value

Your output should demonstrate that you've done comprehensive research and deep thinking, not just surface-level information gathering."""
        else:
            enhanced_prompt = base_system_prompt
            if icp_context.startswith("Error"):
                enhanced_prompt += f"\n\nNote: Could not load ICP context from Google Drive: {icp_context}"
        
        if not messages or not isinstance(messages[0], SystemMessage):
            messages = [SystemMessage(content=enhanced_prompt)] + messages
        else:
            # Replace existing system message with enhanced one
            messages = [SystemMessage(content=enhanced_prompt)] + [msg for msg in messages if not isinstance(msg, SystemMessage)]
        
        response = llm_with_tools.invoke(messages)
        return {"messages": [response]}
    
    def call_tool_with_logging(state: ProspectorState):
        """Execute tool calls with logging."""
        messages = state["messages"]
        last_message = messages[-1]
        
        if hasattr(last_message, 'tool_calls') and last_message.tool_calls:
            for tool_call in last_message.tool_calls:
                memory_logger.log_action(
                    action=f"Tool Called: {tool_call['name']}",
                    details=str(tool_call.get("args", {})),
                    agent_name="Prospector"
                )
        
        return tool_node.invoke(state)
    
    # Add nodes
    workflow.add_node("load_criteria", load_criteria)
    workflow.add_node("agent", call_model)
    workflow.add_node("action", call_tool_with_logging)
    
    # Set entry point
    workflow.set_entry_point("load_criteria")
    
    # After loading criteria, go to agent
    workflow.add_edge("load_criteria", "agent")
    
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
    
    # Create memory/checkpoint store
    memory = MemorySaver()
    
    # Compile the graph
    app = workflow.compile(checkpointer=memory)
    
    return app, memory_logger


def run_prospector(agent, memory_logger: MemoryLogger, user_input: str, thread_id: str = "prospector_default", 
                   progress_callback=None) -> str:
    """Run the prospector agent with initial state."""
    import time
    from langchain_core.messages import HumanMessage
    
    config = {"configurable": {"thread_id": thread_id}}
    timeout_seconds = 120  # Longer timeout for research tasks
    
    if progress_callback:
        progress_callback("Loading ICP criteria from Google Drive...")
    
    start_time = time.time()
    
    try:
        # Initialize state with empty ICP context (will be loaded by load_criteria node)
        initial_state = {
            "messages": [HumanMessage(content=user_input)],
            "icp_context": ""
        }
        
        # Invoke the agent (LangGraph will maintain state per thread_id using checkpointer)
        config["recursion_limit"] = 50  # Increased limit for research tasks (search + save operations)
        result = agent.invoke(initial_state, config)
        
        # Check if we exceeded timeout
        elapsed = time.time() - start_time
        if elapsed > timeout_seconds:
            return "⏱️ The request took too long to process. Please try rephrasing your request or breaking it into smaller parts."
        
    except Exception as e:
        if progress_callback:
            progress_callback(f"❌ Error: {str(e)}")
        raise
    
    # Extract the final response (last non-tool message)
    messages = result["messages"]
    final_response = None
    for msg in reversed(messages):
        if isinstance(msg, AIMessage):
            has_tool_calls = hasattr(msg, 'tool_calls') and msg.tool_calls
            if not has_tool_calls:
                final_response = msg.content
                break
    
    if not final_response:
        final_response = messages[-1].content if messages else "No response generated."
    
    # Log the conversation
    memory_logger.log_conversation(user_input, final_response, agent_name="Prospector")
    
    return final_response
