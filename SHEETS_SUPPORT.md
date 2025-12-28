# Google Sheets Support Added! 📊

I've added the ability to read Google Sheets to your Chief of Staff AI Agent.

## What Was Added

1. **New Tool**: `drive_read_sheet` - Reads content from Google Sheets
2. **New Scope**: Added `spreadsheets.readonly` to the OAuth scopes
3. **Enhanced Search**: Drive search now includes information about reading Sheets

## Important: Re-authentication Required

Since we added a new OAuth scope, you need to re-authenticate:

1. **Delete the token file**:
   ```bash
   rm token.json
   ```

2. **Restart the Streamlit app**:
   ```bash
   python3 -m streamlit run app.py
   ```

3. **Re-authenticate** when prompted (will happen automatically)

## Usage

The agent can now:
- Search for Google Sheets using `drive_search` (look for files with `mimeType='application/vnd.google-apps.spreadsheet'`)
- Read Google Sheets using `drive_read_sheet` with the file ID
- Optionally specify a range like `A1:C10` or `Sheet1!A1:Z100`

## Example Queries

- "Find and read the Google Sheet named 'Sales Data'"
- "Search for spreadsheets containing 'budget' and read the first one"
- "Read the Google Sheet with ID [file-id]"

The agent will automatically detect when a file is a Sheet and use the appropriate tool to read it.

