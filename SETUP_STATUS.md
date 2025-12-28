# Setup Status & Next Steps

## ✅ What's Been Done Automatically

1. ✓ **Dependencies Installed** - All Python packages from `requirements.txt` are now installed
2. ✓ **Credentials File Found** - `credentials.json` exists in the project root
3. ✓ **Directory Structure Created** - `.streamlit/` directory created for configuration
4. ✓ **Helper Script Created** - `run_coa.sh` script created for easy startup

## 🔧 What You Need To Do

### 1. Set Your Google Gemini API Key (Required)

You have two options:

**Option A: Environment Variable (Recommended for this session)**
```bash
export GOOGLE_API_KEY="your-gemini-api-key-here"
```

**Option B: Streamlit Secrets (Permanent, recommended)**
1. Copy the example file:
   ```bash
   cp .streamlit/secrets.toml.example .streamlit/secrets.toml
   ```
2. Edit `.streamlit/secrets.toml` and add your actual API key:
   ```toml
   GOOGLE_API_KEY = "your-actual-api-key-here"
   ```

**Where to get your API key:**
- Visit: https://makersuite.google.com/app/apikey
- Sign in with your Google account
- Create a new API key
- Copy and paste it

### 2. Run the Application

**Easy way (using the helper script):**
```bash
./run_coa.sh
```

**Or directly:**
```bash
streamlit run app.py
```

**Note:** If you get "command not found" for streamlit, use:
```bash
python3 -m streamlit run app.py
```

Or add to your PATH:
```bash
export PATH="$HOME/Library/Python/3.9/bin:$PATH"
```

### 3. First-Time Authentication

When you first run the app:
1. A browser window will open automatically
2. You'll be asked to sign in with Google
3. **Important:** Sign in with `bill@vonga.io` (the app will reject other emails)
4. Authorize the application to access your Google Workspace
5. After authorization, `token.json` will be created (you won't need to auth again)

## 📝 Quick Start Commands

```bash
# Set API key (one time, or add to your ~/.zshrc for persistence)
export GOOGLE_API_KEY="your-key-here"

# Run the app
./run_coa.sh
```

Or if you prefer to run directly:
```bash
export GOOGLE_API_KEY="your-key-here"
python3 -m streamlit run app.py
```

## 🔍 Troubleshooting

**"streamlit: command not found"**
- Use: `python3 -m streamlit run app.py`
- Or add Python bin to PATH: `export PATH="$HOME/Library/Python/3.9/bin:$PATH"`

**"Access Denied" error in the app**
- Make sure you're signing in with `bill@vonga.io`
- The app is hardcoded to only allow this email address

**"GOOGLE_API_KEY not found" warning**
- Set the environment variable before running
- Or create `.streamlit/secrets.toml` with your key

## 🎯 You're Almost Ready!

Just set your `GOOGLE_API_KEY` and run the app. Everything else is ready to go!

