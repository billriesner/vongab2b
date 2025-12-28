# How to Index Your Knowledge Base

## Quick Start

Run the indexing script in your terminal:

```bash
python3 index_knowledge_base.py
```

## What to Expect

The script will:
1. Authenticate with Google (if needed)
2. Show you a menu with options
3. Wait for your input

## Recommended: Option 1

**Choose Option 1** to index all Google Docs and Sheets in your Drive.

This will:
- Find all your company documents
- Extract their content
- Index them into the knowledge base
- Show progress as it indexes

## After Indexing

Once indexing completes:
1. Restart your Streamlit app: `python3 -m streamlit run app.py`
2. Start asking questions - the agent will automatically use the knowledge base!

## Tips

- First run may take 10-30 minutes depending on number of documents
- The embedding model downloads on first use (~80MB, one-time)
- You'll see progress messages as files are indexed
- Already-indexed files are skipped on subsequent runs

## Run It Now

Open your terminal and run:
```bash
cd /Users/riesner/vonga-website
python3 index_knowledge_base.py
```

Then choose **Option 1** when prompted.

