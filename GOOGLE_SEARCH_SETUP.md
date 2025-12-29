# Google Search Setup Guide

To enable web search functionality for your Chief of Staff agent, you need to set up Google Custom Search API.

## Step 1: Create a Custom Search Engine

1. Go to [Google Custom Search](https://programmablesearchengine.google.com/controlpanel/create)
2. Click "Add" to create a new search engine
3. Enter a name for your search engine (e.g., "Chief of Staff Search")
4. In "Sites to search", you can either:
   - Enter specific sites (e.g., `*.example.com`)
   - Or leave it empty to search the entire web (recommended)
5. Click "Create"
6. Click "Control Panel" for your new search engine
7. Under "Basics", enable "Search the entire web"
8. Copy your **Search Engine ID** from the embed code (the `cx=` parameter, e.g., `b650dd5779f8a45a9`)

**Note**: You can find your Search Engine ID in the embed code Google provides, or in the Control Panel under "Basics" > "Search engine ID"

## Step 2: Get API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the "Custom Search API":
   - Go to "APIs & Services" > "Library"
   - Search for "Custom Search API"
   - Click "Enable"
4. Create credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy your **API Key**

## Step 3: Configure in Your App

Add these to your `.streamlit/secrets.toml` file:

```toml
GOOGLE_SEARCH_API_KEY = "your-api-key-here"
GOOGLE_SEARCH_ENGINE_ID = "your-search-engine-id-here"
```

Or set them as environment variables:

```bash
export GOOGLE_SEARCH_API_KEY="your-api-key-here"
export GOOGLE_SEARCH_ENGINE_ID="your-search-engine-id-here"
```

## Step 4: Restart the App

Restart your Streamlit app for the changes to take effect.

## Usage

Once configured, your agent can use the `google_search` tool to:
- Find current information and news
- Look up facts and data
- Research companies, people, or topics
- Get real-time information from the web

The agent will automatically use web search when it needs information not available in your knowledge base.

## Free Tier Limits

Google Custom Search API provides:
- **100 free searches per day**
- After that, $5 per 1,000 additional searches

For most use cases, the free tier is sufficient.

## Troubleshooting

If search tools don't appear:
- Check that both `GOOGLE_SEARCH_API_KEY` and `GOOGLE_SEARCH_ENGINE_ID` are set
- Verify your API key has Custom Search API enabled
- Check the console output when starting the app for error messages
