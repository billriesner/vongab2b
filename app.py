"""
Streamlit frontend for Chief of Staff AI Agent.
"""

import streamlit as st
import os
from datetime import datetime
from auth import get_credentials, get_user_email
from agent import create_agent, run_agent

# Page config
st.set_page_config(
    page_title="Chief of Staff AI Agent",
    page_icon="🤖",
    layout="wide"
)

# Security check - hardcoded email
ALLOWED_EMAIL = "bill@vonga.io"

# Initialize session state
if "authenticated" not in st.session_state:
    st.session_state.authenticated = False
if "creds" not in st.session_state:
    st.session_state.creds = None
if "agent" not in st.session_state:
    st.session_state.agent = None
if "memory_logger" not in st.session_state:
    st.session_state.memory_logger = None
if "messages" not in st.session_state:
    st.session_state.messages = []
if "conversation_thread_id" not in st.session_state:
    # Use a persistent thread ID for maintaining conversation history
    import uuid
    st.session_state.conversation_thread_id = str(uuid.uuid4())


def check_authentication():
    """Handle authentication and security check."""
    if not st.session_state.authenticated:
        try:
            st.info("Authenticating with Google... Please complete the OAuth flow if prompted.")
            creds = get_credentials()
            user_email = get_user_email(creds)
            
            # Security check
            if user_email != ALLOWED_EMAIL:
                st.error(f"⚠️ Access Denied. This application is restricted to {ALLOWED_EMAIL}")
                st.error(f"You are authenticated as: {user_email}")
                st.stop()
            
            # Store credentials
            st.session_state.creds = creds
            st.session_state.authenticated = True
            st.session_state.user_email = user_email
            
            # Initialize agent
            try:
                # Get API key from environment or Streamlit secrets
                api_key = os.getenv("GOOGLE_API_KEY") or st.secrets.get("GOOGLE_API_KEY", None)
                if not api_key:
                    st.warning("⚠️ GOOGLE_API_KEY not found. Please set it as an environment variable or in Streamlit secrets.")
                    st.info("The agent will still initialize, but Gemini API calls will fail without the key.")
                
                agent, memory_logger = create_agent(creds, api_key)
                st.session_state.agent = agent
                st.session_state.memory_logger = memory_logger
            except Exception as e:
                st.error(f"Error initializing agent: {str(e)}")
                st.stop()
                
        except FileNotFoundError as e:
            st.error(f"❌ {str(e)}")
            st.info("Please download credentials.json from Google Cloud Console and place it in the project root.")
            st.stop()
        except Exception as e:
            st.error(f"Authentication error: {str(e)}")
            st.stop()


def main():
    """Main application."""
    check_authentication()
    
    # Sidebar
    with st.sidebar:
        st.title("🤖 Chief of Staff AI")
        
        # Status
        if st.session_state.authenticated:
            st.success("✅ Connected")
            st.caption(f"Authenticated as: {st.session_state.user_email}")
        else:
            st.error("❌ Disconnected")
        
        st.divider()
        
        # Instructions
        st.subheader("Instructions")
        st.markdown("""
        This agent can help you:
        - 📧 Manage emails (read, search, draft)
        - 📅 Manage calendar (list, search, create events)
        - 📄 Manage Google Docs (read, create, append)
        - ✅ Manage tasks (list, create)
        
        All actions are logged to the Agent_Memory_Log Google Doc.
        """)
        
        # Clear chat button
        if st.button("🗑️ Clear Chat"):
            st.session_state.messages = []
            # Generate new thread ID for fresh conversation
            import uuid
            st.session_state.conversation_thread_id = str(uuid.uuid4())
            st.rerun()
    
    # Main chat interface
    st.title("Chief of Staff AI Agent")
    st.caption("Your intelligent assistant for managing time and communications")
    
    # Display chat messages
    for message in st.session_state.messages:
        with st.chat_message(message["role"]):
            st.markdown(message["content"])
    
    # Chat input
    if prompt := st.chat_input("Ask me anything..."):
        # Add user message to chat
        st.session_state.messages.append({"role": "user", "content": prompt})
        with st.chat_message("user"):
            st.markdown(prompt)
        
        # Get agent response
        with st.chat_message("assistant"):
            # Create a status container for progress updates
            status_container = st.empty()
            status_container.info("🤔 Thinking... (this may take a moment)")
            
            try:
                def update_status(message):
                    """Update the status message."""
                    status_container.info(message)
                
                response = run_agent(
                    st.session_state.agent,
                    st.session_state.memory_logger,
                    prompt,
                    thread_id=st.session_state.conversation_thread_id,
                    progress_callback=update_status
                )
                
                # Clear status and show response
                status_container.empty()
                st.markdown(response)
                st.session_state.messages.append({"role": "assistant", "content": response})
            except Exception as e:
                status_container.empty()
                error_msg = f"Error: {str(e)}"
                st.error(error_msg)
                st.session_state.messages.append({"role": "assistant", "content": error_msg})


if __name__ == "__main__":
    main()

