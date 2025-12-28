# Chief of Staff AI Agent - Setup & Access Guide

## Quick Start

### 1. Install Python Dependencies

```bash
pip install -r requirements.txt
```

### 2. Set Up Google Cloud Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - Gmail API
   - Google Calendar API
   - Google Drive API
   - Google Docs API
   - Google Tasks API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"
5. Choose "Desktop app" as the application type
6. Download the credentials JSON file
7. Save it as `credentials.json` in the project root directory

### 3. Set Google Gemini API Key

**Option A: Environment Variable (Recommended)**
```bash
export GOOGLE_API_KEY="your-gemini-api-key-here"
```

**Option B: Streamlit Secrets**
Create `.streamlit/secrets.toml`:
```toml
GOOGLE_API_KEY = "your-gemini-api-key-here"
```

Get your API key from: https://makersuite.google.com/app/apikey

### 4. Run the Application

```bash
streamlit run app.py
```

The application will:
1. Open in your default web browser automatically
2. Typically be available at: `http://localhost:8501`
3. Prompt you to authenticate with Google (first time only)
4. Verify your email matches `bill@vonga.io`
5. Initialize the agent

### 5. Access the Application

Once running, you can:
- **Local access**: Open `http://localhost:8501` in your browser
- **Network access**: Streamlit will display a network URL like `http://192.168.x.x:8501` (shown in terminal)
- **Stop the application**: Press `Ctrl+C` in the terminal

## Important Notes

- **First Run**: You'll need to complete the OAuth flow in your browser
- **Security**: Only `bill@vonga.io` can access the application
- **Token Persistence**: After first login, `token.json` will be saved (don't commit this!)
- **Memory Log**: All conversations are automatically logged to "Agent_Memory_Log" Google Doc

## Troubleshooting

**Issue: "credentials.json not found"**
- Make sure you downloaded the OAuth credentials from Google Cloud Console
- Place it in the same directory as `app.py`

**Issue: "GOOGLE_API_KEY not found"**
- Set the environment variable or add to Streamlit secrets
- The app will warn but still run (Gemini calls will fail without it)

**Issue: "Access Denied"**
- Only `bill@vonga.io` can access
- Make sure you're authenticated with the correct Google account

**Issue: Port already in use**
- Streamlit will try the next available port automatically
- Check the terminal output for the actual URL

