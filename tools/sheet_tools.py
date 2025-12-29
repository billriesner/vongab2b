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


class ReadCustomerDBTool(BaseTool):
    """Tool for reading the Vonga Customer Database."""
    name: str = "read_customer_db"
    description: str = """Read the Vonga Customer Database (Google Sheet) to see existing prospects.
    
    OPTIONAL: row_start (int) - Starting row number (default: 1 for header row)
    OPTIONAL: row_end (int) - Ending row number (default: 100, reads first 100 rows)
    
    Returns the customer database content as a formatted table with all prospect information.
    Useful for checking if a company already exists in the database before adding, or reviewing existing prospects."""
    
    creds: Credentials = Field(exclude=True)
    
    def __init__(self, creds: Credentials, **kwargs):
        super().__init__(creds=creds, **kwargs)
    
    def _run(self, row_start: int = 1, row_end: int = 100) -> str:
        """Execute the read operation."""
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
            
            # Get the first sheet
            spreadsheet = sheets_service.spreadsheets().get(spreadsheetId=spreadsheet_id).execute()
            sheet_names = [s.get('properties', {}).get('title', 'Sheet1') for s in spreadsheet.get('sheets', [])]
            first_sheet = sheet_names[0] if sheet_names else 'Sheet1'
            
            # Read the specified range (columns A through L)
            range_name = f"{first_sheet}!A{row_start}:L{row_end}"
            result = sheets_service.spreadsheets().values().get(
                spreadsheetId=spreadsheet_id,
                range=range_name
            ).execute()
            
            values = result.get('values', [])
            
            if not values:
                return f"Database '{sheet_name}' is empty or contains no data in the specified range."
            
            # Format as table
            output_lines = [f"Customer Database: {sheet_name} (Rows {row_start}-{row_end})"]
            output_lines.append("=" * 80)
            
            for idx, row in enumerate(values, start=row_start):
                row_num = idx
                row_data = ' | '.join(str(cell) for cell in row)
                output_lines.append(f"Row {row_num}: {row_data}")
            
            output_lines.append(f"\nTotal rows shown: {len(values)}")
            return "\n".join(output_lines)
            
        except Exception as e:
            return f"Error reading customer database: {str(e)}"
    
    async def _arun(self, row_start: int = 1, row_end: int = 100) -> str:
        """Async version - not implemented."""
        raise NotImplementedError("Async not implemented")


class UpdateCustomerDBTool(BaseTool):
    """Tool for updating existing records in the Vonga Customer Database."""
    name: str = "update_customer_db"
    description: str = """Update an existing prospect record in the Vonga Customer Database (Google Sheet).
    
    REQUIRES:
    - row_number (int): The row number to update (use read_customer_db first to find the row number)
    - All 12 fields (same as save_prospect_to_db) - provide ALL fields, even if some don't change:
      - company_name (string): Company name
      - website (string): Website URL
      - description (string): Description/overview
      - industry_sector (string): Industry or sector
      - company_stage (string): Company stage/size
      - strategy_angle (string): Strategic angle (specific, detailed)
      - key_contact_name (string): Key contact name with title
      - contact_info (string): Contact information
      - market_position (string): Market position/competitive context
      - recent_signals (string): Recent signals/growth indicators
      - research_date (string): Research date (YYYY-MM-DD format)
      - notes (string): Additional notes/insights
    
    This tool replaces the entire row with the new values. Use read_customer_db first to see current values,
    then update with any changes you want to make. If a field doesn't need to change, provide the same value."""
    
    creds: Credentials = Field(exclude=True)
    
    def __init__(self, creds: Credentials, **kwargs):
        super().__init__(creds=creds, **kwargs)
    
    def _run(self, row_number: int, company_name: str, website: str, description: str, industry_sector: str,
             company_stage: str, strategy_angle: str, key_contact_name: str, contact_info: str,
             market_position: str, recent_signals: str, research_date: str, notes: str) -> str:
        """Execute the update operation."""
        try:
            from datetime import datetime
            
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
            
            # Get the first sheet
            spreadsheet = sheets_service.spreadsheets().get(spreadsheetId=spreadsheet_id).execute()
            sheet_names = [s.get('properties', {}).get('title', 'Sheet1') for s in spreadsheet.get('sheets', [])]
            first_sheet = sheet_names[0] if sheet_names else 'Sheet1'
            
            # Use provided research_date or default to today
            if not research_date or research_date.strip() == "":
                research_date = datetime.now().strftime('%Y-%m-%d')
            
            # Prepare the row data (all 12 columns in order: A through L)
            row_data = [
                company_name,
                website,
                description,
                industry_sector,
                company_stage,
                strategy_angle,
                key_contact_name,
                contact_info,
                market_position,
                recent_signals,
                research_date,
                notes
            ]
            
            # Update the row (range should be A{row_number}:L{row_number} for 12 columns)
            range_name = f"{first_sheet}!A{row_number}:L{row_number}"
            body = {
                'values': [row_data]
            }
            
            result = sheets_service.spreadsheets().values().update(
                spreadsheetId=spreadsheet_id,
                range=range_name,
                valueInputOption='RAW',
                body=body
            ).execute()
            
            return f"Successfully updated prospect '{company_name}' in row {row_number} of the database"
            
        except Exception as e:
            return f"Error updating customer database: {str(e)}"
    
    async def _arun(self, row_number: int, company_name: str, website: str, description: str, industry_sector: str,
                    company_stage: str, strategy_angle: str, key_contact_name: str, contact_info: str,
                    market_position: str, recent_signals: str, research_date: str, notes: str) -> str:
        """Async version - not implemented."""
        raise NotImplementedError("Async not implemented")


class SaveProspectToDBTool(BaseTool):
    """Tool for saving prospect data to the Vonga Customer Database Google Sheet."""
    name: str = "save_prospect_to_db"
    description: str = """Save a prospect company to the Vonga Customer Database (Google Sheet).
    
    REQUIRES the following fields (in order - Column A through L):
    - company_name (string): Full legal or commonly used company name
    - website (string): Primary website URL
    - description (string): 2-3 sentence overview: what they do, who they serve, stage/scale
    - industry_sector (string): Primary industry or market sector (e.g., "Sustainable Fashion / E-commerce")
    - company_stage (string): Growth stage or company size (e.g., "Series A, 50 employees")
    - strategy_angle (string): Specific, detailed narrative of how Vonga helps them (NOT generic - be specific)
    - key_contact_name (string): Decision maker name with title (e.g., "Sarah Johnson, CMO")
    - contact_info (string): Email, LinkedIn URL, or contact method
    - market_position (string): How they compare to competitors, unique positioning
    - recent_signals (string): Growth signals, strategic moves, timing indicators
    - research_date (string): Date when research was conducted (format: YYYY-MM-DD)
    - notes (string): Additional insights, risks, opportunities, or context
    
    The database expects columns in this exact order. The tool will append this data as a new row.
    Returns success message with row number or error message if sheet not found."""
    
    creds: Credentials = Field(exclude=True)
    
    def __init__(self, creds: Credentials, **kwargs):
        super().__init__(creds=creds, **kwargs)
    
    def _run(self, company_name: str, website: str, description: str, industry_sector: str,
             company_stage: str, strategy_angle: str, key_contact_name: str, contact_info: str,
             market_position: str, recent_signals: str, research_date: str, notes: str) -> str:
        """Execute the save operation."""
        try:
            from datetime import datetime
            
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
            
            # Use provided research_date or default to today
            if not research_date or research_date.strip() == "":
                research_date = datetime.now().strftime('%Y-%m-%d')
            
            # Prepare the row data (all 12 columns in order: A through L)
            row_data = [
                company_name,
                website,
                description,
                industry_sector,
                company_stage,
                strategy_angle,
                key_contact_name,
                contact_info,
                market_position,
                recent_signals,
                research_date,
                notes
            ]
            
            # Append the row (columns A through L)
            range_name = f"{first_sheet}!A:L"  # Append to columns A-L
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
            
            return f"✅ Successfully saved prospect '{company_name}' to database (Row {row_num})"
            
        except Exception as e:
            import traceback
            error_details = traceback.format_exc()
            return f"❌ Error saving prospect '{company_name}' to database: {str(e)}\n\nDebug info: {error_details[-500:]}"  # Last 500 chars of traceback
    
    async def _arun(self, company_name: str, website: str, description: str, industry_sector: str,
                    company_stage: str, strategy_angle: str, key_contact_name: str, contact_info: str,
                    market_position: str, recent_signals: str, research_date: str, notes: str) -> str:
        """Async version - not implemented."""
        raise NotImplementedError("Async not implemented")


def get_sheet_tools(creds: Credentials) -> list:
    """Get all sheet tools."""
    return [
        ReadCustomerDBTool(creds=creds),
        SaveProspectToDBTool(creds=creds),
        UpdateCustomerDBTool(creds=creds)
    ]
