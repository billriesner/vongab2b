"""
Google Sheets tools for Vonga OS.
Specifically for saving prospect data to the customer database.
"""

from typing import Dict, Any, Optional
from googleapiclient.discovery import build
from google.oauth2.credentials import Credentials
from langchain.tools import BaseTool
from pydantic import Field


def get_sheets_service(creds: Credentials):
    """Get Sheets API service."""
    return build('sheets', 'v4', credentials=creds)


def get_drive_service(creds: Credentials):
    """Get Drive API service."""
    return build('drive', 'v3', credentials=creds)


class SaveProspectToDBTool(BaseTool):
    """Tool for saving prospect data to the Vonga Customer Database Google Sheet."""
    name: str = "save_prospect_to_db"
    description: str = """Save a prospect company to the Vonga Customer Database (Google Sheet).
    
    REQUIRES a JSON object with the following fields:
    - company_name (string): Name of the company
    - website (string): Company website URL
    - description (string): Brief description of the company
    - strategy_angle (string): How Vonga helps this company specifically
    - key_contact_name (string): Name of decision maker (CMO, Brand Director, Founder, etc.)
    - contact_info (string): Email, LinkedIn URL, or generic contact (e.g., "press@company.com")
    
    The tool will append this data as a new row to the "Vonga_Customer_DB" Google Sheet.
    Returns success message with row number or error message if sheet not found."""
    
    creds: Credentials = Field(exclude=True)
    
    def __init__(self, creds: Credentials, **kwargs):
        super().__init__(creds=creds, **kwargs)
    
    def _run(self, company_name: str, website: str, description: str, 
             strategy_angle: str, key_contact_name: str, contact_info: str) -> str:
        """Execute the save operation."""
        try:
            sheets_service = get_sheets_service(self.creds)
            drive_service = get_drive_service(self.creds)
            
            # Search for the sheet
            sheet_name = "Vonga_Customer_DB"
            results = drive_service.files().list(
                q=f"name='{sheet_name}' and mimeType='application/vnd.google-apps.spreadsheet'",
                fields="files(id, name)"
            ).execute()
            
            files = results.get('files', [])
            
            if not files:
                return f"Error: Google Sheet '{sheet_name}' not found. Please create the sheet first."
            
            spreadsheet_id = files[0]['id']
            
            # Get the first sheet (or default to Sheet1)
            spreadsheet = sheets_service.spreadsheets().get(spreadsheetId=spreadsheet_id).execute()
            sheet_names = [s.get('properties', {}).get('title', 'Sheet1') for s in spreadsheet.get('sheets', [])]
            first_sheet = sheet_names[0] if sheet_names else 'Sheet1'
            
            # Prepare the row data
            row_data = [
                company_name,
                website,
                description,
                strategy_angle,
                key_contact_name,
                contact_info
            ]
            
            # Append the row
            range_name = f"{first_sheet}!A:Z"  # Append to the end
            body = {
                'values': [row_data]
            }
            
            result = sheets_service.spreadsheets().values().append(
                spreadsheetId=spreadsheet_id,
                range=range_name,
                valueInputOption='RAW',
                insertDataOption='INSERT_ROWS',
                body=body
            ).execute()
            
            # Get the row number that was appended
            updated_range = result.get('updates', {}).get('updatedRange', '')
            if updated_range:
                # Extract row number from range (e.g., "Sheet1!A5:Z5" -> 5)
                try:
                    # Extract number from range like "Sheet1!A5:Z5" or "A5:Z5"
                    range_part = updated_range.split('!')[1] if '!' in updated_range else updated_range
                    row_num = ''.join(filter(str.isdigit, range_part.split(':')[0]))
                except:
                    row_num = "unknown"
            else:
                row_num = "unknown"
            
            return f"Successfully saved prospect '{company_name}' to database (Row {row_num})"
            
        except Exception as e:
            return f"Error saving prospect to database: {str(e)}"
    
    async def _arun(self, company_name: str, website: str, description: str,
                    strategy_angle: str, key_contact_name: str, contact_info: str) -> str:
        """Async version - not implemented."""
        raise NotImplementedError("Async not implemented")


def get_sheet_tools(creds: Credentials) -> list:
    """Get all sheet tools."""
    return [SaveProspectToDBTool(creds=creds)]
