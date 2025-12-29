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
from agents.cmo import create_cmo_agent
from agents.shared import run_agent

# Page config
st.set_page_config(
    page_title="Vonga OS",
    page_icon=None,
    layout="wide",
    initial_sidebar_state="expanded"
)

# Inject Vonga Branding CSS
st.markdown("""
<style>
    /* Vonga Brand Colors */
    :root {
        --vonga-aqua: #33BECC;
        --vonga-navy: #303E55;
        --vonga-coral: #FF7F50;
        --vonga-deep-navy: #0A1422;
        --vonga-gray: #9BA6B3;
    }
    
    /* Main Background - Deep Navy */
    .stApp {
        background: linear-gradient(135deg, #0A1422 0%, #1B1E25 100%);
        color: #FFFFFF;
    }
    
    /* Sidebar Styling */
    [data-testid="stSidebar"] {
        background: linear-gradient(180deg, #303E55 0%, #1B1E25 100%);
        border-right: 1px solid rgba(51, 190, 204, 0.2);
    }
    
    [data-testid="stSidebar"] .stMarkdown h1 {
        color: var(--vonga-aqua);
        font-weight: 700;
        font-size: 2rem;
        letter-spacing: -0.5px;
        margin-bottom: 0.25rem;
    }
    
    [data-testid="stSidebar"] .stMarkdown p {
        color: var(--vonga-gray);
        font-size: 0.875rem;
    }
    
    /* Vonga OS Title Glow */
    [data-testid="stSidebar"] h1::after {
        content: '';
        display: block;
        width: 60px;
        height: 2px;
        background: linear-gradient(90deg, var(--vonga-aqua), var(--vonga-coral));
        margin-top: 0.5rem;
        border-radius: 2px;
    }
    
    /* Success/Connected Status - Aqua */
    [data-testid="stSidebar"] .stSuccess {
        background-color: rgba(51, 190, 204, 0.15);
        border: 1px solid var(--vonga-aqua);
        border-radius: 6px;
        color: var(--vonga-aqua);
    }
    
    /* Central Hub Button - Make it stand out dramatically */
    button[kind="primary"][data-testid*="nav_central_hub"],
    button[kind="secondary"][data-testid*="nav_central_hub"] {
        background: linear-gradient(135deg, rgba(51, 190, 204, 0.25) 0%, rgba(51, 190, 204, 0.15) 100%) !important;
        border: 2px solid var(--vonga-aqua) !important;
        color: var(--vonga-aqua) !important;
        font-weight: 700 !important;
        font-size: 1rem !important;
        box-shadow: 0 4px 15px rgba(51, 190, 204, 0.4) !important;
        position: relative;
        overflow: visible;
    }
    
    button[kind="primary"][data-testid*="nav_central_hub"] {
        background: linear-gradient(135deg, rgba(51, 190, 204, 0.4) 0%, rgba(51, 190, 204, 0.25) 100%) !important;
        box-shadow: 0 0 25px rgba(51, 190, 204, 0.6), 0 4px 15px rgba(51, 190, 204, 0.4) !important;
        border-width: 3px !important;
    }
    
    
    button[kind="primary"][data-testid*="nav_central_hub"]:hover,
    button[kind="secondary"][data-testid*="nav_central_hub"]:hover {
        background: linear-gradient(135deg, rgba(51, 190, 204, 0.35) 0%, rgba(51, 190, 204, 0.2) 100%) !important;
        box-shadow: 0 0 30px rgba(51, 190, 204, 0.7) !important;
        transform: translateY(-2px);
    }
    
    /* Other nav buttons - subtle */
    button[data-testid*="nav_strategy"],
    button[data-testid*="nav_prospector"] {
        font-weight: 600 !important;
    }
    
    /* Radio buttons styling - not needed but keeping for any other uses */
    .stRadio [role="radiogroup"] {
        display: flex;
        gap: 0.5rem;
    }
    
    /* Buttons - Vonga Styling */
    .stButton > button {
        background-color: var(--vonga-navy);
        color: #FFFFFF;
        border: 1px solid rgba(51, 190, 204, 0.3);
        border-radius: 6px;
        font-weight: 500;
        transition: all 0.3s ease;
    }
    
    .stButton > button:hover {
        background-color: rgba(51, 190, 204, 0.2);
        border-color: var(--vonga-aqua);
        box-shadow: 0 0 10px rgba(51, 190, 204, 0.3);
        transform: translateY(-1px);
    }
    
    .stButton > button[kind="primary"] {
        background: linear-gradient(135deg, var(--vonga-aqua) 0%, rgba(51, 190, 204, 0.8) 100%);
        border-color: var(--vonga-aqua);
        color: #FFFFFF;
        font-weight: 600;
    }
    
    .stButton > button[kind="primary"]:hover {
        box-shadow: 0 0 20px rgba(51, 190, 204, 0.6);
        transform: translateY(-2px);
    }
    
    /* Main Content Area */
    .main .block-container {
        padding-top: 2rem;
        padding-bottom: 2rem;
        max-width: 1200px;
    }
    
    /* Central Hub Title - Special Styling */
    .central-hub-header {
        background: linear-gradient(135deg, rgba(51, 190, 204, 0.1) 0%, rgba(255, 127, 80, 0.05) 100%);
        border-left: 4px solid var(--vonga-aqua);
        padding: 1.5rem 2rem;
        border-radius: 8px;
        margin-bottom: 2rem;
        box-shadow: 0 0 30px rgba(51, 190, 204, 0.15);
    }
    
    .central-hub-header h1 {
        color: var(--vonga-aqua);
        font-weight: 700;
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
        letter-spacing: -0.5px;
    }
    
    .central-hub-header p {
        color: var(--vonga-gray);
        font-size: 1rem;
        margin: 0;
    }
    
    /* Other Agent Titles */
    .agent-header h1 {
        color: #FFFFFF;
        font-weight: 600;
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }
    
    .agent-header p {
        color: var(--vonga-gray);
        font-size: 0.875rem;
    }
    
    /* Chat Messages */
    .stChatMessage {
        background-color: rgba(48, 62, 85, 0.5);
        border-radius: 8px;
        padding: 1rem;
        margin-bottom: 1rem;
        border: 1px solid rgba(51, 190, 204, 0.1);
    }
    
    .stChatMessage[data-testid="user"] {
        background-color: rgba(51, 190, 204, 0.1);
        border-color: rgba(51, 190, 204, 0.3);
    }
    
    .stChatMessage[data-testid="assistant"] {
        background-color: rgba(48, 62, 85, 0.3);
        border-color: rgba(51, 190, 204, 0.2);
    }
    
    /* Dividers - Aqua Accent */
    hr {
        border-color: rgba(51, 190, 204, 0.2);
        margin: 1.5rem 0;
    }
    
    /* Input Fields */
    .stTextInput > label,
    .stTextArea > label {
        color: #FFFFFF !important;
        font-weight: 500;
    }
    
    .stTextInput > div > div > input,
    .stTextArea > div > div > textarea {
        background-color: rgba(48, 62, 85, 0.5);
        border: 1px solid rgba(51, 190, 204, 0.3);
        color: #FFFFFF;
        border-radius: 6px;
    }
    
    .stTextInput > div > div > input:focus,
    .stTextArea > div > div > textarea:focus {
        border-color: var(--vonga-aqua);
        box-shadow: 0 0 10px rgba(51, 190, 204, 0.3);
    }
    
    /* Info/Warning/Success Boxes */
    .stInfo {
        background-color: rgba(51, 190, 204, 0.1);
        border: 1px solid rgba(51, 190, 204, 0.3);
        border-left: 4px solid var(--vonga-aqua);
        border-radius: 6px;
    }
    
    .stSuccess {
        background-color: rgba(47, 181, 116, 0.1);
        border: 1px solid rgba(47, 181, 116, 0.3);
        border-left: 4px solid #2FB574;
        border-radius: 6px;
    }
    
    .stWarning {
        background-color: rgba(242, 169, 59, 0.1);
        border: 1px solid rgba(242, 169, 59, 0.3);
        border-left: 4px solid #F2A93B;
        border-radius: 6px;
    }
    
    .stError {
        background-color: rgba(208, 69, 59, 0.1);
        border: 1px solid rgba(208, 69, 59, 0.3);
        border-left: 4px solid #D0453B;
        border-radius: 6px;
    }
    
    /* Subheader Styling */
    [data-testid="stSidebar"] h3 {
        color: var(--vonga-aqua);
        font-weight: 600;
        font-size: 1.125rem;
        margin-top: 1.5rem;
        margin-bottom: 0.75rem;
    }
    
    /* Caption Styling */
    .stCaption {
        color: var(--vonga-gray);
    }
    
    /* Scrollbar Styling */
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    
    ::-webkit-scrollbar-track {
        background: rgba(27, 30, 37, 0.5);
    }
    
    ::-webkit-scrollbar-thumb {
        background: rgba(51, 190, 204, 0.5);
        border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background: var(--vonga-aqua);
    }
</style>
""", unsafe_allow_html=True)

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
if "cmo_agent" not in st.session_state:
    st.session_state.cmo_agent = None
if "cmo_memory_logger" not in st.session_state:
    st.session_state.cmo_memory_logger = None
if "cmo_messages" not in st.session_state:
    st.session_state.cmo_messages = []
if "cmo_thread_id" not in st.session_state:
    st.session_state.cmo_thread_id = f"cmo_{uuid.uuid4().hex[:8]}"
if "cmo_chat_history" not in st.session_state:
    st.session_state.cmo_chat_history = {}  # {thread_id: {"title": str, "messages": list, "created": datetime}}
if "current_cmo_thread" not in st.session_state:
    st.session_state.current_cmo_thread = None
if "cmo_suggested_prompt" not in st.session_state:
    st.session_state.cmo_suggested_prompt = None
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
    elif mode == "Strategy Room":
        if thread_id in st.session_state.strategist_chat_history:
            st.session_state.strategist_messages = st.session_state.strategist_chat_history[thread_id]["messages"].copy()
            st.session_state.strategist_thread_id = thread_id
            st.session_state.current_strategist_thread = thread_id
    elif mode == "Marketing War Room":
        if thread_id in st.session_state.cmo_chat_history:
            st.session_state.cmo_messages = st.session_state.cmo_chat_history[thread_id]["messages"].copy()
            st.session_state.cmo_thread_id = thread_id
            st.session_state.current_cmo_thread = thread_id


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
    elif mode == "Strategy Room":
        if st.session_state.strategist_messages:
            save_chat_to_history("Strategy Room", st.session_state.strategist_thread_id, st.session_state.strategist_messages)
        
        st.session_state.strategist_thread_id = f"strategist_{uuid.uuid4().hex[:8]}"
        st.session_state.strategist_messages = []
        st.session_state.current_strategist_thread = None
    elif mode == "Marketing War Room":
        if st.session_state.cmo_messages:
            save_chat_to_history("Marketing War Room", st.session_state.cmo_thread_id, st.session_state.cmo_messages)
        
        st.session_state.cmo_thread_id = f"cmo_{uuid.uuid4().hex[:8]}"
        st.session_state.cmo_messages = []
        st.session_state.current_cmo_thread = None


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
                
                # Initialize CMO
                with st.spinner("Initializing CMO..."):
                    cmo_agent, cmo_memory_logger = create_cmo_agent(
                        creds,
                        api_key,
                        tavily_api_key=tavily_api_key
                    )
                    st.session_state.cmo_agent = cmo_agent
                    st.session_state.cmo_memory_logger = cmo_memory_logger
                
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
        st.markdown("### Vonga OS")
        st.caption("From Moment to Memory")
        
        # Status
        if st.session_state.authenticated:
            st.success("Connected")
            st.caption(f"Authenticated as: {st.session_state.user_email}")
        else:
            st.error("Disconnected")
        
        st.divider()
        
        # Mode Selection - Button-based with Central Hub prominence
        st.markdown("#### Navigation")
        
        # Central Hub - Standalone, prominent button
        if st.button("CENTRAL HUB", key="nav_central_hub", use_container_width=True, 
                    type="primary" if st.session_state.current_mode == "Central Hub" else "secondary"):
            st.session_state.current_mode = "Central Hub"
            st.rerun()
        
        st.markdown("<div style='height: 0.5rem;'></div>", unsafe_allow_html=True)
        
        # Strategy Room, Marketing War Room, and Prospector - Two column layout
        col1, col2 = st.columns(2)
        with col1:
            if st.button("Strategy", key="nav_strategy", use_container_width=True,
                        type="primary" if st.session_state.current_mode == "Strategy Room" else "secondary"):
                st.session_state.current_mode = "Strategy Room"
                st.rerun()
        with col2:
            if st.button("Marketing", key="nav_marketing", use_container_width=True,
                        type="primary" if st.session_state.current_mode == "Marketing War Room" else "secondary"):
                st.session_state.current_mode = "Marketing War Room"
                st.rerun()
        
        # Prospector in second row, full width
        if st.button("Prospector", key="nav_prospector", use_container_width=True,
                    type="primary" if st.session_state.current_mode == "Prospector Lab" else "secondary"):
            st.session_state.current_mode = "Prospector Lab"
            st.rerun()
        
        # Use current_mode from session state (set by buttons above)
        mode = st.session_state.current_mode
        
        st.divider()
        
        # Chat History Section
        st.markdown("#### Recent Chats")
        
        # Get appropriate history based on mode
        if mode == "Central Hub":
            chat_history = st.session_state.cos_chat_history
            current_thread = st.session_state.current_cos_thread
        elif mode == "Strategy Room":
            chat_history = st.session_state.strategist_chat_history
            current_thread = st.session_state.current_strategist_thread
        elif mode == "Marketing War Room":
            chat_history = st.session_state.cmo_chat_history
            current_thread = st.session_state.current_cmo_thread
        else:  # Prospector Lab
            chat_history = {}  # Prospector doesn't use chat history
            current_thread = None
        
        # New Chat button (not for Prospector Lab)
        if mode != "Prospector Lab":
            if st.button("New Chat", use_container_width=True):
                create_new_chat(mode)
                st.rerun()
        
        # Display saved chats (not for Prospector Lab)
        if mode != "Prospector Lab":
            if chat_history:
                st.markdown("#### Recent Chats")
                # Sort by updated date (most recently active first), fallback to created
                sorted_chats = sorted(
                    chat_history.items(),
                    key=lambda x: x[1].get("updated", x[1].get("created", datetime.now())),
                    reverse=True
                )
            
                for thread_id, chat_data in sorted_chats:
                    title = chat_data["title"]
                    updated = chat_data.get("updated", chat_data.get("created", datetime.now()))
                    time_str = updated.strftime("%m/%d %H:%M")
                    is_active = (current_thread == thread_id) or (
                        mode == "Central Hub" and thread_id == st.session_state.cos_thread_id and not current_thread
                    ) or (
                        mode == "Strategy Room" and thread_id == st.session_state.strategist_thread_id and not current_thread
                    ) or (
                        mode == "Marketing War Room" and thread_id == st.session_state.cmo_thread_id and not current_thread
                    )
                    
                    # Display chat with active indicator
                    button_style = "primary" if is_active else "secondary"
                    button_label = f"{title}"
                    if st.button(
                        button_label,
                        key=f"chat_{thread_id}",
                        use_container_width=True,
                        type=button_style
                    ):
                        load_chat_from_history(mode, thread_id)
                        st.rerun()
                    
                    # Show timestamp
                    st.caption(f"  {time_str}", help=f"Thread ID: {thread_id}")
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
            st.markdown("#### Head of Strategy")
            st.markdown("""
            <div style='background: rgba(48, 62, 85, 0.5); padding: 0.75rem; border-radius: 4px; margin-bottom: 1rem;'>
            <strong style='color: #FFFFFF;'>Strategic Advisor</strong>
            </div>
            """, unsafe_allow_html=True)
            st.markdown("""
            **Provides:**
            - Strategic audits (Green Light/Red Light)
            - Strategic planning
            - Critical analysis
            - Data-driven recommendations
            
            *Loaded with Strategy Prime, Product Specs, and Customer Data*
            """)
        elif st.session_state.current_mode == "Marketing War Room":
            st.markdown("#### CMO")
            st.markdown("""
            <div style='background: rgba(48, 62, 85, 0.5); padding: 0.75rem; border-radius: 4px; margin-bottom: 1rem;'>
            <strong style='color: #FFFFFF;'>Chief Marketing Officer</strong>
            </div>
            """, unsafe_allow_html=True)
            st.markdown("""
            **Provides:**
            - Strategic marketing research
            - Campaign briefs
            - Competitive analysis
            - Market insights
            
            *Combines internal strategy with external market research*
            """)
        elif st.session_state.current_mode == "Prospector Lab":
            st.markdown("#### Prospector")
            st.markdown("""
            <div style='background: rgba(48, 62, 85, 0.5); padding: 0.75rem; border-radius: 4px; margin-bottom: 1rem;'>
            <strong style='color: #FFFFFF;'>Customer Research Agent</strong>
            </div>
            """, unsafe_allow_html=True)
            st.markdown("""
            **Finds and researches:**
            - Companies matching ICP
            - Strategic angles
            - Decision makers
            - Contact information
            
            Saves to Vonga_Customer_DB
            """)
    
    # Initialize stop flags if not present
    if "stop_requested" not in st.session_state:
        st.session_state.stop_requested = False
    if "processing_mode" not in st.session_state:
        st.session_state.processing_mode = None
    
    # Main content area
    if st.session_state.current_mode == "Central Hub":
        # Chief of Staff Interface - Enhanced Header
        st.markdown("""
        <div class="central-hub-header">
            <h1>Central Hub</h1>
            <p>Chief of Staff · Your primary operational assistant</p>
        </div>
        """, unsafe_allow_html=True)
        
        # Quick Actions Dashboard
        st.markdown("#### Quick Actions Dashboard")
        row1_col1, row1_col2, row1_col3 = st.columns(3)
        
        with row1_col1:
            if st.button("Start My Day", use_container_width=True, key="daily_briefing"):
                if st.session_state.cos_agent:
                    with st.spinner("Chief of Staff is working..."):
                        from agents.chief_of_staff import generate_daily_briefing
                        from auth import get_credentials
                        creds = get_credentials()
                        briefing = generate_daily_briefing(creds)
                        st.info(briefing)
                else:
                    st.warning("Chief of Staff agent not initialized. Please refresh the page.")
        
        with row1_col2:
            if st.button("Block Focus Time", use_container_width=True, key="block_focus"):
                if st.session_state.cos_agent:
                    with st.spinner("Chief of Staff is working..."):
                        from agents.chief_of_staff import find_and_block_focus_time
                        from auth import get_credentials
                        creds = get_credentials()
                        result = find_and_block_focus_time(creds)
                        st.success(result)
                else:
                    st.warning("Chief of Staff agent not initialized. Please refresh the page.")
        
        with row1_col3:
            if st.button("Prep for Next Meeting", use_container_width=True, key="meeting_prep"):
                if st.session_state.cos_agent:
                    with st.spinner("Chief of Staff is working..."):
                        from agents.chief_of_staff import generate_meeting_prep
                        from auth import get_credentials
                        creds = get_credentials()
                        prep = generate_meeting_prep(creds)
                        with st.expander("Meeting Cheat Sheet", expanded=True):
                            st.text(prep)
                else:
                    st.warning("Chief of Staff agent not initialized. Please refresh the page.")
        
        # Row 2: Inbox Triage
        row2_col1, row2_col2, row2_col3 = st.columns(3)
        with row2_col1:
            if st.button("Inbox Triage", use_container_width=True, key="inbox_triage"):
                if st.session_state.cos_agent:
                    with st.spinner("Chief of Staff is working..."):
                        from agents.chief_of_staff import inbox_triage
                        from auth import get_credentials
                        import pandas as pd
                        creds = get_credentials()
                        triage_data = inbox_triage(creds)
                        if triage_data:
                            df = pd.DataFrame(triage_data)
                            st.dataframe(df, use_container_width=True, hide_index=True)
                        else:
                            st.info("No unread emails found.")
                else:
                    st.warning("Chief of Staff agent not initialized. Please refresh the page.")
        
        st.divider()
        
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
            
            # Check if stop was requested before processing
            if st.session_state.stop_requested and st.session_state.processing_mode == "Central Hub":
                # Stop was requested - remove the last user message and reset
                st.session_state.cos_messages.pop()
                st.session_state.stop_requested = False
                st.session_state.processing_mode = None
                st.warning("Processing stopped.")
                st.rerun()
            
            # Get agent response
            with st.chat_message("assistant"):
                status_col1, status_col2 = st.columns([4, 1])
                with status_col1:
                    status_container = st.empty()
                    status_container.info("Thinking...")
                with status_col2:
                    if st.button("Stop", key="stop_cos", use_container_width=True):
                        st.session_state.stop_requested = True
                        st.session_state.processing_mode = "Central Hub"
                        st.rerun()
                
                # Set processing mode
                st.session_state.processing_mode = "Central Hub"
                st.session_state.stop_requested = False
                
                try:
                    def update_status(message):
                        if st.session_state.stop_requested:
                            raise InterruptedError("Stop requested by user")
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
                    st.session_state.processing_mode = None
                    
                    # Save chat to history after each exchange
                    save_chat_to_history("Central Hub", st.session_state.cos_thread_id, st.session_state.cos_messages)
                    if not st.session_state.current_cos_thread:
                        st.session_state.current_cos_thread = st.session_state.cos_thread_id
                    
                except InterruptedError:
                    # Stop was requested - remove the last user message
                    status_container.empty()
                    if st.session_state.cos_messages and st.session_state.cos_messages[-1].get("role") == "user":
                        st.session_state.cos_messages.pop()
                    st.session_state.processing_mode = None
                    st.session_state.stop_requested = False
                    st.warning("Processing stopped.")
                except Exception as e:
                    status_container.empty()
                    error_msg = f"Error: {str(e)}"
                    st.error(error_msg)
                    st.session_state.cos_messages.append({"role": "assistant", "content": error_msg})
                    st.session_state.processing_mode = None
    
    elif st.session_state.current_mode == "Strategy Room":
        # Head of Strategy Interface
        st.markdown("""
        <div class="agent-header">
            <h1>Strategy Room</h1>
            <p>Head of Strategy · Your strategic advisor</p>
        </div>
        """, unsafe_allow_html=True)
        
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
            
            # Check if stop was requested before processing
            if st.session_state.stop_requested and st.session_state.processing_mode == "Strategy Room":
                # Stop was requested - remove the last user message and reset
                st.session_state.strategist_messages.pop()
                st.session_state.stop_requested = False
                st.session_state.processing_mode = None
                st.warning("Processing stopped.")
                st.rerun()
            
            # Get agent response
            with st.chat_message("assistant"):
                status_col1, status_col2 = st.columns([4, 1])
                with status_col1:
                    status_container = st.empty()
                    status_container.info("Analyzing...")
                with status_col2:
                    if st.button("Stop", key="stop_strategist", use_container_width=True):
                        st.session_state.stop_requested = True
                        st.session_state.processing_mode = "Strategy Room"
                        st.rerun()
                
                # Set processing mode
                st.session_state.processing_mode = "Strategy Room"
                st.session_state.stop_requested = False
                
                try:
                    def update_status(message):
                        if st.session_state.stop_requested:
                            raise InterruptedError("Stop requested by user")
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
                    st.session_state.processing_mode = None
                    
                    # Save chat to history after each exchange
                    save_chat_to_history("Strategy Room", st.session_state.strategist_thread_id, st.session_state.strategist_messages)
                    if not st.session_state.current_strategist_thread:
                        st.session_state.current_strategist_thread = st.session_state.strategist_thread_id
                    
                except InterruptedError:
                    # Stop was requested - remove the last user message
                    status_container.empty()
                    if st.session_state.strategist_messages and st.session_state.strategist_messages[-1].get("role") == "user":
                        st.session_state.strategist_messages.pop()
                    st.session_state.processing_mode = None
                    st.session_state.stop_requested = False
                    st.warning("Processing stopped.")
                except Exception as e:
                    status_container.empty()
                    error_msg = f"Error: {str(e)}"
                    st.error(error_msg)
                    st.session_state.strategist_messages.append({"role": "assistant", "content": error_msg})
                    st.session_state.processing_mode = None
    
    elif st.session_state.current_mode == "Marketing War Room":
        # CMO Interface
        st.markdown("""
        <div class="agent-header">
            <h1>Marketing War Room</h1>
            <p>CMO · Strategic Marketing Research & Campaign Briefs</p>
        </div>
        """, unsafe_allow_html=True)
        
        # Quick Actions
        st.markdown("#### Quick Actions")
        col1, col2, col3 = st.columns(3)
        with col1:
            if st.button("Analyze Competitor", use_container_width=True, key="cmo_prompt_1"):
                st.session_state.cmo_suggested_prompt = "competitor"
                st.rerun()
        with col2:
            if st.button("Campaign Brief", use_container_width=True, key="cmo_prompt_2"):
                st.session_state.cmo_suggested_prompt = "brief"
                st.rerun()
        with col3:
            if st.button("Industry Trends", use_container_width=True, key="cmo_prompt_3"):
                st.session_state.cmo_suggested_prompt = "trends"
                st.rerun()
        
        # Second row of Quick Actions
        col4, col5 = st.columns(2)
        with col4:
            if st.button("Performance Metrics", use_container_width=True, key="cmo_prompt_4"):
                st.session_state.cmo_suggested_prompt = "metrics"
                st.rerun()
        with col5:
            if st.button("Brand Audit", use_container_width=True, key="cmo_prompt_5"):
                st.session_state.cmo_suggested_prompt = "brand_audit"
                st.rerun()
        
        # Handle suggested prompts with input
        if st.session_state.get("cmo_suggested_prompt") == "competitor":
            competitor_name = st.text_input("Competitor name:", key="competitor_input", placeholder="e.g., Apple")
            if competitor_name:
                prompt = f"Analyze competitor {competitor_name}'s recent ads and marketing campaigns."
                st.session_state.cmo_messages.append({"role": "user", "content": prompt})
                st.session_state.cmo_suggested_prompt = None
                st.rerun()
        elif st.session_state.get("cmo_suggested_prompt") == "metrics":
            if st.button("View Performance Metrics", type="primary", use_container_width=True, key="metrics_submit"):
                prompt = "How are we doing? Analyze our marketing performance metrics."
                st.session_state.cmo_messages.append({"role": "user", "content": prompt})
                st.session_state.cmo_suggested_prompt = None
                st.rerun()
            if st.button("Cancel", use_container_width=True, key="metrics_cancel"):
                st.session_state.cmo_suggested_prompt = None
                st.rerun()
        elif st.session_state.get("cmo_suggested_prompt") == "brand_audit":
            st.markdown("**Brand Audit: Paste Draft Here**")
            brand_audit_text = st.text_area(
                "Paste the text you want to audit against Vonga's brand voice guidelines:",
                key="brand_audit_input",
                placeholder="Paste your draft email, post, or marketing copy here...",
                height=150,
                label_visibility="collapsed"
            )
            
            col_submit, col_cancel = st.columns(2)
            with col_submit:
                if st.button("Audit Brand Voice", type="primary", use_container_width=True, key="brand_audit_submit"):
                    if brand_audit_text and brand_audit_text.strip():
                        prompt = f"Review this text for brand voice compliance:\n\n{brand_audit_text}"
                        st.session_state.cmo_messages.append({"role": "user", "content": prompt})
                        st.session_state.cmo_suggested_prompt = None
                        st.rerun()
                    else:
                        st.warning("Please paste some text to audit.")
            with col_cancel:
                if st.button("Cancel", use_container_width=True, key="brand_audit_cancel"):
                    st.session_state.cmo_suggested_prompt = None
                    st.rerun()
        elif st.session_state.get("cmo_suggested_prompt") == "brief":
            st.markdown("**Campaign Brief Details**")
            campaign_type = st.selectbox(
                "Campaign Type:",
                ["Brand Awareness", "Lead Generation", "Conversion", "Retention", "Product Launch", "Other"],
                key="brief_type"
            )
            brand_focus = st.selectbox(
                "Brand Focus:",
                ["Vonga Brand", "Client Campaign"],
                key="brief_brand"
            )
            timeframe = st.text_input("Timeframe:", key="brief_timeframe", placeholder="e.g., Q3 2024, Q4 2024, etc.")
            objectives = st.text_area(
                "Campaign Objectives & Specific Requirements:",
                key="brief_objectives",
                placeholder="e.g., Increase brand awareness among enterprise customers, launch new product feature, etc. Be specific about what you want to achieve.",
                height=100
            )
            
            col_submit, col_cancel = st.columns(2)
            with col_submit:
                if st.button("Create Brief", type="primary", use_container_width=True, key="brief_submit"):
                    if objectives.strip():
                        # Build comprehensive prompt
                        prompt_parts = [f"Create a detailed campaign brief for a {campaign_type} campaign"]
                        if brand_focus == "Vonga Brand":
                            prompt_parts.append("for the Vonga brand")
                        else:
                            prompt_parts.append("for a client campaign")
                        if timeframe.strip():
                            prompt_parts.append(f"with timeframe: {timeframe}")
                        prompt_parts.append(f"\n\nSpecific Objectives & Requirements:\n{objectives}")
                        prompt_parts.append("\n\nPlease conduct comprehensive research combining internal Vonga strategy documents with external market research to create a detailed, actionable campaign brief.")
                        
                        prompt = " ".join(prompt_parts)
                        st.session_state.cmo_messages.append({"role": "user", "content": prompt})
                        st.session_state.cmo_suggested_prompt = None
                        st.rerun()
                    else:
                        st.warning("Please provide campaign objectives and requirements.")
            with col_cancel:
                if st.button("Cancel", use_container_width=True, key="brief_cancel"):
                    st.session_state.cmo_suggested_prompt = None
                    st.rerun()
        elif st.session_state.get("cmo_suggested_prompt") == "trends":
            industry = st.text_input("Industry:", key="industry_input", placeholder="e.g., SaaS")
            if industry:
                prompt = f"Find top 3 trends in {industry} for 2024."
                st.session_state.cmo_messages.append({"role": "user", "content": prompt})
                st.session_state.cmo_suggested_prompt = None
                st.rerun()
        
        if st.session_state.get("cmo_suggested_prompt"):
            st.divider()
        
        # Display chat messages
        for message in st.session_state.cmo_messages:
            with st.chat_message(message["role"]):
                st.markdown(message["content"])
        
        # Process any pending user messages (from suggested prompts)
        if st.session_state.cmo_messages:
            last_message = st.session_state.cmo_messages[-1]
            if last_message.get("role") == "user":
                # Check if we need to process this message
                needs_response = (
                    len(st.session_state.cmo_messages) == 1 or 
                    st.session_state.cmo_messages[-2].get("role") != "assistant"
                )
                
                if needs_response:
                    prompt = last_message.get("content", "")
                    
                    # Check if stop was requested before processing
                    if st.session_state.stop_requested and st.session_state.processing_mode == "Marketing War Room":
                        # Stop was requested - remove the last user message and reset
                        st.session_state.cmo_messages.pop()
                        st.session_state.stop_requested = False
                        st.session_state.processing_mode = None
                        st.warning("Processing stopped.")
                        st.rerun()
                    
                    # Get agent response
                    with st.chat_message("assistant"):
                        status_col1, status_col2 = st.columns([4, 1])
                        with status_col1:
                            status_container = st.empty()
                            status_container.info("Researching and strategizing...")
                        with status_col2:
                            if st.button("Stop", key="stop_cmo_1", use_container_width=True):
                                st.session_state.stop_requested = True
                                st.session_state.processing_mode = "Marketing War Room"
                                st.rerun()
                        
                        # Set processing mode
                        st.session_state.processing_mode = "Marketing War Room"
                        st.session_state.stop_requested = False
                        
                        try:
                            def update_status(message):
                                if st.session_state.stop_requested:
                                    raise InterruptedError("Stop requested by user")
                                status_container.info(message)
                            
                            response = run_agent(
                                st.session_state.cmo_agent,
                                st.session_state.cmo_memory_logger,
                                prompt,
                                thread_id=st.session_state.cmo_thread_id,
                                progress_callback=update_status,
                                agent_name="CMO"
                            )
                            
                            status_container.empty()
                            st.markdown(response)
                            st.session_state.cmo_messages.append({"role": "assistant", "content": response})
                            st.session_state.processing_mode = None
                            
                            # Save chat to history after each exchange
                            save_chat_to_history("Marketing War Room", st.session_state.cmo_thread_id, st.session_state.cmo_messages)
                            if not st.session_state.current_cmo_thread:
                                st.session_state.current_cmo_thread = st.session_state.cmo_thread_id
                            
                            st.rerun()
                        except InterruptedError:
                            # Stop was requested - remove the last user message
                            status_container.empty()
                            if st.session_state.cmo_messages and st.session_state.cmo_messages[-1].get("role") == "user":
                                st.session_state.cmo_messages.pop()
                            st.session_state.processing_mode = None
                            st.session_state.stop_requested = False
                            st.warning("Processing stopped.")
                        except Exception as e:
                            status_container.empty()
                            error_msg = f"Error: {str(e)}"
                            st.error(error_msg)
                            st.session_state.cmo_messages.append({"role": "assistant", "content": error_msg})
                            st.session_state.processing_mode = None
        
        # Chat input
        if prompt := st.chat_input("Ask the CMO..."):
            # Add user message to chat
            st.session_state.cmo_messages.append({"role": "user", "content": prompt})
            with st.chat_message("user"):
                st.markdown(prompt)
            
            # Clear suggested prompt state
            st.session_state.cmo_suggested_prompt = None
            
            # Check if stop was requested before processing
            if st.session_state.stop_requested and st.session_state.processing_mode == "Marketing War Room":
                # Stop was requested - remove the last user message and reset
                st.session_state.cmo_messages.pop()
                st.session_state.stop_requested = False
                st.session_state.processing_mode = None
                st.warning("Processing stopped.")
                st.rerun()
            
            # Get agent response
            with st.chat_message("assistant"):
                status_col1, status_col2 = st.columns([4, 1])
                with status_col1:
                    status_container = st.empty()
                    status_container.info("Researching and strategizing...")
                with status_col2:
                    if st.button("Stop", key="stop_cmo_2", use_container_width=True):
                        st.session_state.stop_requested = True
                        st.session_state.processing_mode = "Marketing War Room"
                        st.rerun()
                
                # Set processing mode
                st.session_state.processing_mode = "Marketing War Room"
                st.session_state.stop_requested = False
                
                try:
                    def update_status(message):
                        if st.session_state.stop_requested:
                            raise InterruptedError("Stop requested by user")
                        status_container.info(message)
                    
                    response = run_agent(
                        st.session_state.cmo_agent,
                        st.session_state.cmo_memory_logger,
                        prompt,
                        thread_id=st.session_state.cmo_thread_id,
                        progress_callback=update_status,
                        agent_name="CMO"
                    )
                    
                    status_container.empty()
                    st.markdown(response)
                    st.session_state.cmo_messages.append({"role": "assistant", "content": response})
                    st.session_state.processing_mode = None
                    
                    # Save chat to history after each exchange
                    save_chat_to_history("Marketing War Room", st.session_state.cmo_thread_id, st.session_state.cmo_messages)
                    if not st.session_state.current_cmo_thread:
                        st.session_state.current_cmo_thread = st.session_state.cmo_thread_id
                    
                except InterruptedError:
                    # Stop was requested - remove the last user message
                    status_container.empty()
                    if st.session_state.cmo_messages and st.session_state.cmo_messages[-1].get("role") == "user":
                        st.session_state.cmo_messages.pop()
                    st.session_state.processing_mode = None
                    st.session_state.stop_requested = False
                    st.warning("Processing stopped.")
                except Exception as e:
                    status_container.empty()
                    error_msg = f"Error: {str(e)}"
                    st.error(error_msg)
                    st.session_state.cmo_messages.append({"role": "assistant", "content": error_msg})
                    st.session_state.processing_mode = None
    
    elif st.session_state.current_mode == "Prospector Lab":
        # Prospector Lab Interface
        st.markdown("""
        <div class="agent-header">
            <h1>Prospector Lab</h1>
            <p>Customer Research Agent · Find and research prospects</p>
        </div>
        """, unsafe_allow_html=True)
        
        # Live Strategy Status Indicator
        if st.session_state.prospector_agent:
            st.info("Live Strategy Loaded: 04_Customer_Data (loaded dynamically from Google Drive)")
        
        # Mode Selection - Using buttons instead of radio
        st.subheader("Research Mode")
        
        # Initialize prospector_mode in session state if not present
        if "prospector_mode" not in st.session_state:
            st.session_state.prospector_mode = "Search for Companies"
        
        # Two buttons for mode selection
        col_search, col_research = st.columns(2)
        with col_search:
            if st.button(
                "Search for Companies", 
                key="prospector_mode_search",
                use_container_width=True,
                type="primary" if st.session_state.prospector_mode == "Search for Companies" else "secondary"
            ):
                st.session_state.prospector_mode = "Search for Companies"
                st.rerun()
        with col_research:
            if st.button(
                "Research Specific Companies",
                key="prospector_mode_research",
                use_container_width=True,
                type="primary" if st.session_state.prospector_mode == "Research Specific Companies" else "secondary"
            ):
                st.session_state.prospector_mode = "Research Specific Companies"
                st.rerun()
        
        research_mode = st.session_state.prospector_mode
        
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
            st.markdown("#### Research Output")
            for message in st.session_state.prospector_messages:
                with st.chat_message(message["role"]):
                    st.markdown(message["content"])
        
        # Also show the last response directly if available
        if st.session_state.prospector_messages:
            last_message = st.session_state.prospector_messages[-1]
            if last_message.get("role") == "assistant":
                # Extract and highlight save confirmations
                content = last_message.get("content", "")
                if "Successfully saved" in content:
                    st.success("Companies have been saved to the database!")
                elif "Error saving" in content or "Error:" in content:
                    st.error("Errors occurred while saving to the database. Check the Research Output above for details.")
        
        # Run research if criteria/companies are set and research is running
        # Only run if we haven't already stored messages (to avoid re-running)
        if st.session_state.prospector_research_running:
            # Check if we've already processed this run
            has_assistant_response = any(
                msg.get("role") == "assistant" 
                for msg in st.session_state.prospector_messages
            )
            
            if not has_assistant_response:
                # Determine which mode we're in - read from session state to ensure we have the values
                research_mode = st.session_state.get("prospector_mode", "Search for Companies")
                
                if research_mode == "Search for Companies":
                    # Search mode - get criteria from session state
                    target_criteria = st.session_state.get("prospector_criteria", "")
                    if target_criteria:
                        research_prompt = f"Find and research companies matching these criteria: {target_criteria}. Research each company deeply, find their strategy angle, decision makers, and contact information. Save each prospect to the database as you find them."
                    else:
                        research_prompt = None
                else:  # Research Specific Companies mode
                    # Research specific companies mode - get companies from session state
                    target_companies = st.session_state.get("prospector_companies", "")
                    if target_companies:
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
                        
                        # Store the prompt as a user message
                        st.session_state.prospector_messages.append({"role": "user", "content": research_prompt})
                        
                        response = run_prospector(
                            st.session_state.prospector_agent,
                            st.session_state.prospector_memory_logger,
                            research_prompt,
                            thread_id=st.session_state.prospector_thread_id,
                            progress_callback=update_prospector_log
                        )
                        
                        # Add response to messages
                        st.session_state.prospector_messages.append({"role": "assistant", "content": response})
                        
                        # Check response for save confirmation or errors
                        if "Successfully saved" in response:
                            st.session_state.prospector_log.append({
                                "timestamp": datetime.now(),
                                "message": "Research complete - Companies saved to database",
                                "type": "success"
                            })
                        elif "Error saving" in response or "Error:" in response:
                            st.session_state.prospector_log.append({
                                "timestamp": datetime.now(),
                                "message": f"Error occurred: {response[:200]}",
                                "type": "error"
                            })
                        else:
                            st.session_state.prospector_log.append({
                                "timestamp": datetime.now(),
                                "message": f"Research complete: {response[:150]}...",
                                "type": "success" if "saved" in response.lower() or "completed" in response.lower() else "info"
                            })
                        
                        st.session_state.prospector_research_running = False
                        st.rerun()
                        
                    except Exception as e:
                        import traceback
                        error_msg = f"Error during research: {str(e)}"
                        error_details = traceback.format_exc()
                        st.session_state.prospector_log.append({
                            "timestamp": datetime.now(),
                            "message": error_msg,
                            "type": "error"
                        })
                        # Add error to messages so user can see it
                        if not any(msg.get("role") == "assistant" for msg in st.session_state.prospector_messages):
                            st.session_state.prospector_messages.append({
                                "role": "assistant", 
                                "content": f"Error: {error_msg}\n\nDetails: {error_details[-500:]}"
                            })
                        st.session_state.prospector_research_running = False
                        st.rerun()


if __name__ == "__main__":
    main()
