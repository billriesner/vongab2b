# Fix: Google Sheets Write Permission Error

## Problem
The Prospector agent was getting "The caller does not have permission" error when trying to save prospects to the Google Sheet.

## Root Cause
The OAuth scopes only included `spreadsheets.readonly`, which doesn't allow writing to sheets.

## Solution
Updated the scope from `spreadsheets.readonly` to `spreadsheets` (full read/write access).

## Action Required: Re-authenticate

Since we changed the OAuth scopes, you need to re-authenticate:

1. **Delete the token file**:
   ```bash
   rm token.json
   ```

2. **Restart the Streamlit app**:
   ```bash
   python3 -m streamlit run app.py
   ```

3. **Re-authenticate** when prompted (will happen automatically in the browser)

4. **Grant the new permissions** - Make sure to approve the Google Sheets write access when prompted

After re-authentication, the Prospector agent will be able to save prospects to the "Vonga_Customer_DB" sheet.
