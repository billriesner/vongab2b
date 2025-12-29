"""
Vonga OS - Multi-Agent Dashboard
Frontend for Chief of Staff and Head of Strategy agents.
"""

import streamlit as st
import os
import uuid
from datetime import datetime
from auth import get_credentials, get_user_email
from agents.chief_of_staff import create_chief_of_staff_agent, run_chief_of_staff
from agents.strategist import create_strategist_agent, run_strategist
from agents.prospector import create_prospector_agent, run_prospector

# Page config
st.set_page_config(
    page_title="Vonga OS",
    page_icon="🚀",
    layout="wide"
)

# Security check - hardcoded email
ALLOWED_EMAIL = "bill@vonga.io"

# Initialize session state
if "authenticated" not in st.session_state:
    st.session_state.authenticated = False
if "creds" not in st.session_state:
    st.session_state.creds = None
if "cos_agent" not in st.session_state:
    st.session_state.cos_agent = None
if "cos_memory_logger" not in st.session_state:
    st.session_state.cos_memory_logger = None
if "strategist_agent" not in st.session_state:
    st.session_state.strategist_agent = None
if "strategist_memory_logger" not in st.session_state:
    st.session_state.strategist_memory_logger = None
if "prospector_agent" not in st.session_state:
    st.session_state.prospector_agent = None
if "prospector_memory_logger" not in st.session_state:
    st.session_state.prospector_memory_logger = None
if "current_mode" not in st.session_state:
    st.session_state.current_mode = "Central Hub"
if "cos_messages" not in st.session_state:
    st.session_state.cos_messages = []
if "strategist_messages" not in st.session_state:
    st.session_state.strategist_messages = []
if "cos_thread_id" not in st.session_state:
    st.session_state.cos_thread_id = f"cos_{uuid.uuid4().hex[:8]}"
if "strategist_thread_id" not in st.session_state:
    st.session_state.strategist_thread_id = f"strategist_{uuid.uuid4().hex[:8]}"
if "cos_chat_history" not in st.session_state:
    st.session_state.cos_chat_history = {}  # {thread_id: {"title": str, "messages": list, "created": datetime}}
if "strategist_chat_history" not in st.session_state:
    st.session_state.strategist_chat_history = {}  # {thread_id: {"title": str, "messages": list, "created": datetime}}
if "prospector_messages" not in st.session_state:
    st.session_state.prospector_messages = []
if "prospector_thread_id" not in st.session_state:
    st.session_state.prospector_thread_id = f"prospector_{uuid.uuid4().hex[:8]}"
if "prospector_log" not in st.session_state:
    st.session_state.prospector_log = []  # Live log of actions
if "prospector_research_running" not in st.session_state:
    st.session_state.prospector_research_running = False
if "current_cos_thread" not in st.session_state:
    st.session_state.current_cos_thread = None
if "current_strategist_thread" not in st.session_state:
    st.session_state.current_strategist_thread = None


def save_chat_to_history(mode: str, thread_id: str, messages: list):
    """Save current chat to history."""
    if mode == "Central Hub":
        if thread_id not in st.session_state.cos_chat_history:
            # Generate title from first user message
            title = "New Chat"
            for msg in messages:
                if msg.get("role") == "user":
                    title = msg.get("content", "New Chat")[:50]
                    if len(msg.get("content", "")) > 50:
                        title += "..."
                    break
            
            st.session_state.cos_chat_history[thread_id] = {
                "title": title,
                "messages": messages.copy(),
                "created": datetime.now()
            }
        else:
            # Update existing chat
            st.session_state.cos_chat_history[thread_id]["messages"] = messages.copy()
    else:  # Strategy Room
        if thread_id not in st.session_state.strategist_chat_history:
            title = "New Chat"
            for msg in messages:
                if msg.get("role") == "user":
                    title = msg.get("content", "New Chat")[:50]
                    if len(msg.get("content", "")) > 50:
                        title += "..."
                    break
            
            st.session_state.strategist_chat_history[thread_id] = {
                "title": title,
                "messages": messages.copy(),
                "created": datetime.now()
            }
        else:
            st.session_state.strategist_chat_history[thread_id]["messages"] = messages.copy()


def load_chat_from_history(mode: str, thread_id: str):
    """Load a chat from history."""
    if mode == "Central Hub":
        if thread_id in st.session_state.cos_chat_history:
            st.session_state.cos_messages = st.session_state.cos_chat_history[thread_id]["messages"].copy()
            st.session_state.cos_thread_id = thread_id
            st.session_state.current_cos_thread = thread_id
    else:  # Strategy Room
        if thread_id in st.session_state.strategist_chat_history:
            st.session_state.strategist_messages = st.session_state.strategist_chat_history[thread_id]["messages"].copy()
            st.session_state.strategist_thread_id = thread_id
            st.session_state.current_strategist_thread = thread_id


def create_new_chat(mode: str):
    """Create a new chat session."""
    if mode == "Central Hub":
        # Save current chat before creating new one
        if st.session_state.cos_messages:
            save_chat_to_history("Central Hub", st.session_state.cos_thread_id, st.session_state.cos_messages)
        
        # Create new chat
        st.session_state.cos_thread_id = f"cos_{uuid.uuid4().hex[:8]}"
        st.session_state.cos_messages = []
        st.session_state.current_cos_thread = None
    else:  # Strategy Room
        if st.session_state.strategist_messages:
            save_chat_to_history("Strategy Room", st.session_state.strategist_thread_id, st.session_state.strategist_messages)
        
        st.session_state.strategist_thread_id = f"strategist_{uuid.uuid4().hex[:8]}"
        st.session_state.strategist_messages = []
        st.session_state.current_strategist_thread = None


def check_authentication():
    """Handle authentication and security check."""
    if not st.session_state.authenticated:
        try:
            st.info("Authenticating with Google... Please complete the OAuth flow if prompted.")
            creds = get_credentials()
            user_email = get_user_email(creds)
            
            # Security check
            if user_email != ALLOWED_EMAIL:
                st.error(f"Access Denied. This application is restricted to {ALLOWED_EMAIL}")
                st.error(f"You are authenticated as: {user_email}")
                st.stop()
            
            # Store credentials
            st.session_state.creds = creds
            st.session_state.authenticated = True
            st.session_state.user_email = user_email
            
            # Initialize agents
            try:
                # Get API key from environment or Streamlit secrets
                api_key = os.getenv("GOOGLE_API_KEY") or st.secrets.get("GOOGLE_API_KEY", None)
                if not api_key:
                    st.warning("GOOGLE_API_KEY not found. Please set it as an environment variable or in Streamlit secrets.")
                    st.info("The agents will still initialize, but Gemini API calls will fail without the key.")
                
                # Get search API credentials from Streamlit secrets and set as environment variables
                search_api_key = st.secrets.get("GOOGLE_SEARCH_API_KEY", None) or os.getenv("GOOGLE_SEARCH_API_KEY")
                search_engine_id = st.secrets.get("GOOGLE_SEARCH_ENGINE_ID", None) or os.getenv("GOOGLE_SEARCH_ENGINE_ID")
                
                if search_api_key:
                    os.environ["GOOGLE_SEARCH_API_KEY"] = search_api_key
                if search_engine_id:
                    os.environ["GOOGLE_SEARCH_ENGINE_ID"] = search_engine_id
                
                # Initialize Head of Strategy first (needed for Chief of Staff consultation tool)
                with st.spinner("Initializing Head of Strategy..."):
                    strategist_agent, strategist_memory_logger = create_strategist_agent(creds, api_key)
                    st.session_state.strategist_agent = strategist_agent
                    st.session_state.strategist_memory_logger = strategist_memory_logger
                
                # Initialize Chief of Staff (with strategist reference for consultation)
                with st.spinner("Initializing Chief of Staff..."):
                    cos_agent, cos_memory_logger = create_chief_of_staff_agent(
                        creds, 
                        api_key,
                        strategist_agent=strategist_agent,
                        strategist_memory_logger=strategist_memory_logger
                    )
                    st.session_state.cos_agent = cos_agent
                    st.session_state.cos_memory_logger = cos_memory_logger
                
                # Initialize Prospector
                tavily_api_key = st.secrets.get("TAVILY_API_KEY", None) or os.getenv("TAVILY_API_KEY")
                with st.spinner("Initializing Prospector..."):
                    prospector_agent, prospector_memory_logger = create_prospector_agent(
                        creds,
                        api_key,
                        tavily_api_key=tavily_api_key
                    )
                    st.session_state.prospector_agent = prospector_agent
                    st.session_state.prospector_memory_logger = prospector_memory_logger
                
                st.success("Vonga OS initialized successfully!")
                
            except Exception as e:
                st.error(f"Error initializing agents: {str(e)}")
                import traceback
                st.code(traceback.format_exc())
                st.stop()
                
        except FileNotFoundError as e:
            st.error(f"{str(e)}")
            st.info("Please download credentials.json from Google Cloud Console and place it in the project root.")
            st.stop()
        except Exception as e:
            st.error(f"Authentication error: {str(e)}")
            st.stop()


def main():
    """Main application."""
    check_authentication()
    
    # Sidebar Navigation
    with st.sidebar:
        st.title("Vonga OS")
        st.caption("Multi-Agent Operating System")
        
        # Status
        if st.session_state.authenticated:
            st.success("Connected")
            st.caption(f"Authenticated as: {st.session_state.user_email}")
        else:
            st.error("Disconnected")
        
        st.divider()
        
        # Mode Selection
        st.subheader("Navigation")
        mode = st.radio(
            "Select Mode:",
            ["Central Hub", "Strategy Room", "Prospector Lab"],
            index=0 if st.session_state.current_mode == "Central Hub" else (1 if st.session_state.current_mode == "Strategy Room" else 2),
            key="mode_selector"
        )
        
        # Update current mode
        st.session_state.current_mode = mode
        
        st.divider()
        
        # Chat History Section
        st.subheader("Chat History")
        
        # Get appropriate history based on mode
        if mode == "Central Hub":
            chat_history = st.session_state.cos_chat_history
            current_thread = st.session_state.current_cos_thread
        elif mode == "Strategy Room":
            chat_history = st.session_state.strategist_chat_history
            current_thread = st.session_state.current_strategist_thread
        else:  # Prospector Lab
            chat_history = {}  # Prospector doesn't use chat history
            current_thread = None
        
        # New Chat button (not for Prospector Lab)
        if mode != "Prospector Lab":
            if st.button("New Chat", use_container_width=True):
                create_new_chat(mode)
                st.rerun()
        
        # Display saved chats (not for Prospector Lab)
        if mode != "Prospector Lab" and chat_history:
            st.caption("Saved Chats")
            # Sort by creation date (newest first)
            sorted_chats = sorted(
                chat_history.items(),
                key=lambda x: x[1]["created"],
                reverse=True
            )
            
            for thread_id, chat_data in sorted_chats:
                title = chat_data["title"]
                created = chat_data["created"].strftime("%m/%d %H:%M")
                is_active = (current_thread == thread_id) or (
                    mode == "Central Hub" and thread_id == st.session_state.cos_thread_id and not current_thread
                ) or (
                    mode == "Strategy Room" and thread_id == st.session_state.strategist_thread_id and not current_thread
                )
                
                # Display chat with active indicator
                button_label = f"{title}" if not is_active else f"● {title}"
                if st.button(
                    button_label,
                    key=f"chat_{thread_id}",
                    use_container_width=True,
                    type="primary" if is_active else "secondary"
                ):
                    load_chat_from_history(mode, thread_id)
                    st.rerun()
                
                # Show timestamp
                st.caption(f"  {created}", help=f"Thread ID: {thread_id}")
        else:
            st.caption("No saved chats yet")
        
        st.divider()
        
        # Mode-specific instructions
        if st.session_state.current_mode == "Central Hub":
            st.subheader("Chief of Staff")
            st.markdown("""
            **Operational Assistant**
            
            Handles:
            - Email management
            - Calendar & scheduling
            - Document management
            - Task management
            - Web search
            - Strategic consultation
            """)
        elif st.session_state.current_mode == "Strategy Room":
            st.subheader("Head of Strategy")
            st.markdown("""
            **Strategic Advisor**
            
            Provides:
            - Strategic audits (Green Light/Red Light)
            - Strategic planning
            - Critical analysis
            - Data-driven recommendations
            
            *Loaded with Strategy Prime, Product Specs, and Customer Data*
            """)
        else:  # Prospector Lab
            st.subheader("Prospector")
            st.markdown("""
            **Customer Research Agent**
            
            Finds and researches:
            - Companies matching ICP
            - Strategic angles
            - Decision makers
            - Contact information
            
            Saves to Vonga_Customer_DB
            """)
    
    # Main content area
    if st.session_state.current_mode == "Central Hub":
        # Chief of Staff Interface
        st.title("Central Hub")
        st.caption("Chief of Staff - Your operational assistant")
        
        # Display chat messages
        for message in st.session_state.cos_messages:
            with st.chat_message(message["role"]):
                st.markdown(message["content"])
        
        # Chat input
        if prompt := st.chat_input("Ask the Chief of Staff..."):
            # Add user message to chat
            st.session_state.cos_messages.append({"role": "user", "content": prompt})
            with st.chat_message("user"):
                st.markdown(prompt)
            
            # Get agent response
            with st.chat_message("assistant"):
                status_container = st.empty()
                status_container.info("Thinking...")
                
                try:
                    def update_status(message):
                        status_container.info(message)
                    
                    response = run_chief_of_staff(
                        st.session_state.cos_agent,
                        st.session_state.cos_memory_logger,
                        prompt,
                        thread_id=st.session_state.cos_thread_id,
                        progress_callback=update_status
                    )
                    
                    status_container.empty()
                    st.markdown(response)
                    st.session_state.cos_messages.append({"role": "assistant", "content": response})
                    
                    # Save chat to history after each exchange
                    save_chat_to_history("Central Hub", st.session_state.cos_thread_id, st.session_state.cos_messages)
                    if not st.session_state.current_cos_thread:
                        st.session_state.current_cos_thread = st.session_state.cos_thread_id
                    
                except Exception as e:
                    status_container.empty()
                    error_msg = f"Error: {str(e)}"
                    st.error(error_msg)
                    st.session_state.cos_messages.append({"role": "assistant", "content": error_msg})
    
    elif st.session_state.current_mode == "Strategy Room":
        # Head of Strategy Interface
        st.title("Strategy Room")
        st.caption("Head of Strategy - Your strategic advisor")
        
        # Display chat messages
        for message in st.session_state.strategist_messages:
            with st.chat_message(message["role"]):
                st.markdown(message["content"])
        
        # Chat input
        if prompt := st.chat_input("Ask the Head of Strategy..."):
            # Add user message to chat
            st.session_state.strategist_messages.append({"role": "user", "content": prompt})
            with st.chat_message("user"):
                st.markdown(prompt)
            
            # Get agent response
            with st.chat_message("assistant"):
                status_container = st.empty()
                status_container.info("Analyzing...")
                
                try:
                    def update_status(message):
                        status_container.info(message)
                    
                    response = run_strategist(
                        st.session_state.strategist_agent,
                        st.session_state.strategist_memory_logger,
                        prompt,
                        thread_id=st.session_state.strategist_thread_id,
                        progress_callback=update_status
                    )
                    
                    status_container.empty()
                    st.markdown(response)
                    st.session_state.strategist_messages.append({"role": "assistant", "content": response})
                    
                    # Save chat to history after each exchange
                    save_chat_to_history("Strategy Room", st.session_state.strategist_thread_id, st.session_state.strategist_messages)
                    if not st.session_state.current_strategist_thread:
                        st.session_state.current_strategist_thread = st.session_state.strategist_thread_id
                    
                except Exception as e:
                    status_container.empty()
                    error_msg = f"Error: {str(e)}"
                    st.error(error_msg)
                    st.session_state.strategist_messages.append({"role": "assistant", "content": error_msg})
    
    elif st.session_state.current_mode == "Prospector Lab":
        # Prospector Lab Interface
        st.title("Prospector Lab")
        st.caption("Customer Research Agent - Find and research prospects")
        
        # Live Strategy Status Indicator
        if st.session_state.prospector_agent:
            st.info("Live Strategy Loaded: 04_Customer_Data (loaded dynamically from Google Drive)")
        
        # Mode Selection
        st.subheader("Research Mode")
        research_mode = st.radio(
            "Select research type:",
            ["Search for Companies", "Research Specific Companies"],
            key="prospector_mode"
        )
        
        if research_mode == "Search for Companies":
            # Target Criteria Input (Search Mode)
            st.subheader("Search Criteria")
            target_criteria = st.text_area(
                "Enter your Ideal Customer Profile criteria:",
                placeholder="e.g., Sustainable fashion brands in Austin, Tech companies with brand partnerships, B2B SaaS companies in healthcare",
                height=100,
                key="prospector_criteria"
            )
            target_companies = None
        else:
            # Company Names Input (Research Mode)
            st.subheader("Target Companies")
            target_companies = st.text_area(
                "Enter company names (one per line or comma-separated):",
                placeholder="e.g.,\nAcme Corp\nTechStart Inc\nBrandCo\n\nOr: Acme Corp, TechStart Inc, BrandCo",
                height=150,
                key="prospector_companies"
            )
            target_criteria = None
        
        # Start Research Run Button
        col1, col2 = st.columns([1, 4])
        with col1:
            if research_mode == "Search for Companies":
                start_research = st.button("Start Search", type="primary", disabled=st.session_state.prospector_research_running)
            else:
                start_research = st.button("Start Research", type="primary", disabled=st.session_state.prospector_research_running)
        
        if start_research:
            if research_mode == "Search for Companies" and target_criteria:
                st.session_state.prospector_research_running = True
                st.session_state.prospector_log = []
                st.session_state.prospector_thread_id = f"prospector_{uuid.uuid4().hex[:8]}"
                st.session_state.prospector_messages = []
                
                # Add initial log entry
                st.session_state.prospector_log.append({
                    "timestamp": datetime.now(),
                    "message": f"Starting search for: {target_criteria}",
                    "type": "info"
                })
                st.rerun()
            elif research_mode == "Research Specific Companies" and target_companies:
                st.session_state.prospector_research_running = True
                st.session_state.prospector_log = []
                st.session_state.prospector_thread_id = f"prospector_{uuid.uuid4().hex[:8]}"
                st.session_state.prospector_messages = []
                
                # Add initial log entry
                st.session_state.prospector_log.append({
                    "timestamp": datetime.now(),
                    "message": f"Starting research for specific companies: {target_companies[:100]}...",
                    "type": "info"
                })
                st.rerun()
        
        # Live Log Display
        if st.session_state.prospector_log:
            st.subheader("Research Log")
            log_container = st.container()
            with log_container:
                for log_entry in st.session_state.prospector_log:
                    timestamp_str = log_entry["timestamp"].strftime("%H:%M:%S")
                    log_type = log_entry["type"]
                    message = log_entry["message"]
                    
                    if log_type == "info":
                        st.info(f"[{timestamp_str}] {message}")
                    elif log_type == "success":
                        st.success(f"[{timestamp_str}] {message}")
                    elif log_type == "warning":
                        st.warning(f"[{timestamp_str}] {message}")
                    elif log_type == "error":
                        st.error(f"[{timestamp_str}] {message}")
                    else:
                        st.text(f"[{timestamp_str}] {message}")
        
        # Display chat messages (if any)
        if st.session_state.prospector_messages:
            st.subheader("Research Output")
            for message in st.session_state.prospector_messages:
                with st.chat_message(message["role"]):
                    st.markdown(message["content"])
        
        # Run research if criteria/companies are set and research is running
        if st.session_state.prospector_research_running:
            # Determine which mode we're in based on what's available
            if target_criteria:
                # Search mode
                research_prompt = f"Find and research companies matching these criteria: {target_criteria}. Research each company deeply, find their strategy angle, decision makers, and contact information. Save each prospect to the database as you find them."
            elif target_companies:
                # Research specific companies mode
                # Parse company names (handle both newline and comma-separated)
                companies_list = []
                for line in target_companies.split('\n'):
                    line = line.strip()
                    if ',' in line:
                        companies_list.extend([c.strip() for c in line.split(',') if c.strip()])
                    elif line:
                        companies_list.append(line)
                
                companies_text = ', '.join(companies_list) if companies_list else target_companies
                research_prompt = f"Research the following specific companies and save them to the database: {companies_text}. For each company, conduct deep research to find: their website, current strategy, how Vonga can help them (strategy angle), decision makers (CMO, Brand Director, Founders, etc.), and contact information. Save each company to the database as you complete research on them."
            else:
                research_prompt = None
            
            if research_prompt:
                # Add to log
                if not any(log.get("message", "").startswith("Running") for log in st.session_state.prospector_log):
                    log_msg = "Running search..." if target_criteria else "Running research..."
                    st.session_state.prospector_log.append({
                        "timestamp": datetime.now(),
                        "message": log_msg,
                        "type": "info"
                    })
                
                # Run the prospector agent
                try:
                    def update_prospector_log(message):
                        """Update the prospector log with status messages."""
                        st.session_state.prospector_log.append({
                            "timestamp": datetime.now(),
                            "message": message,
                            "type": "info"
                        })
                    
                    response = run_prospector(
                        st.session_state.prospector_agent,
                        st.session_state.prospector_memory_logger,
                        research_prompt,
                        thread_id=st.session_state.prospector_thread_id,
                        progress_callback=update_prospector_log
                    )
                
                    # Add response to messages
                    st.session_state.prospector_messages.append({"role": "assistant", "content": response})
                    
                    # Add success log entry
                    st.session_state.prospector_log.append({
                        "timestamp": datetime.now(),
                        "message": "Research run completed",
                        "type": "success"
                    })
                    
                    st.session_state.prospector_research_running = False
                    st.rerun()
                    
                except Exception as e:
                    error_msg = f"Error during research: {str(e)}"
                    st.session_state.prospector_log.append({
                        "timestamp": datetime.now(),
                        "message": error_msg,
                        "type": "error"
                    })
                    st.session_state.prospector_research_running = False
                    st.rerun()


if __name__ == "__main__":
    main()
