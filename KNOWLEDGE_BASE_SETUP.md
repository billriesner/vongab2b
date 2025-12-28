# Knowledge Base Setup Guide 🧠

Your Chief of Staff AI Agent now has a **continuously learning knowledge base** that indexes information from your Google Drive documents!

## How It Works

1. **Indexing**: Documents from Google Drive are converted to text, split into chunks, and stored with embeddings in a vector database (ChromaDB)
2. **Retrieval**: When you ask questions, the agent searches the knowledge base for relevant information
3. **Continuous Learning**: New documents can be indexed at any time to keep the knowledge base up-to-date

## Initial Setup

### 1. Install Additional Dependencies

```bash
pip install chromadb sentence-transformers
```

Or install all requirements:
```bash
pip install -r requirements.txt
```

### 2. Initial Indexing

Run the indexing script to build your knowledge base:

```bash
python3 index_knowledge_base.py
```

You'll see options to:
- **Option 1**: Index all Google Docs and Sheets in My Drive (recommended for first run)
- **Option 2**: Index a specific folder (enter folder ID)
- **Option 3**: Index documents matching a search query
- **Option 4**: View statistics about current knowledge base

### Recommended First Run

Choose **Option 1** to index all your company documents. This will:
- Find all Google Docs and Sheets in your Drive
- Extract and index their content
- Store them in `./knowledge_base/` directory

**Note**: The first time may take a while depending on how many documents you have. The embedding model will also download on first use (~80MB).

## Using the Knowledge Base

Once indexed, the agent will **automatically** use the knowledge base when answering questions:

- "What's our company strategy?"
- "Tell me about our roadmap"
- "What are our business processes?"
- Any question about company information

The agent will search the knowledge base and provide answers based on your actual documents.

## Updating the Knowledge Base

### Periodic Updates

Run the indexing script periodically (weekly/monthly) to add new documents:

```bash
python3 index_knowledge_base.py
```

Choose the same option as before - it will skip already-indexed files by default.

### Force Re-indexing

If you want to re-index documents (e.g., after editing), you can modify `index_knowledge_base.py` to use `force_reindex=True` in the `index_document` call.

### Automated Updates (Future Enhancement)

You could set up a cron job or scheduled task to run indexing automatically:

```bash
# Add to crontab to run weekly (example)
0 2 * * 0 cd /path/to/vonga-website && python3 index_knowledge_base.py
```

## Knowledge Base Location

- **Storage**: `./knowledge_base/` directory
- **Database**: ChromaDB (local, persistent)
- **Tracking**: `knowledge_base/indexed_files.json` (tracks what's been indexed)

## Best Practices

1. **Start Broad**: Index all documents first (Option 1)
2. **Stay Current**: Re-run indexing monthly or when important documents are added
3. **Specific Folders**: Use Option 2 for focused indexing (e.g., "Strategy" folder)
4. **Ask Natural Questions**: The agent will find relevant information automatically

## Example Workflow

```bash
# 1. Initial setup (one time)
python3 index_knowledge_base.py
# Choose Option 1

# 2. Use the agent normally
python3 -m streamlit run app.py

# 3. Ask questions - agent uses knowledge base automatically
# "What's our company strategy?"
# "Tell me about the 7 year roadmap"
# "What are our core values?"

# 4. Update knowledge base monthly
python3 index_knowledge_base.py
# Choose Option 1 again (it will skip existing files)
```

## Troubleshooting

**"chromadb not found"**
- Install: `pip install chromadb sentence-transformers`

**"No relevant information found"**
- Run the indexing script to index your documents
- Try re-indexing if documents were recently added

**Indexing is slow**
- This is normal for the first run
- The embedding model downloads once (~80MB)
- Large documents take longer to process

**Want to start fresh**
- Delete `./knowledge_base/` directory
- Run indexing again

---

Your agent will now continuously learn from your business documents and provide informed, context-aware responses! 🚀

