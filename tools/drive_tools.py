"""
Google Drive tools for reading and writing Google Docs.
"""

from typing import List, Dict, Any, Optional
from googleapiclient.discovery import build
from google.oauth2.credentials import Credentials
from langchain.tools import BaseTool
from pydantic import BaseModel, Field
import io


class DriveSearchInput(BaseModel):
    """Input for searching Drive files."""
    query: str = Field(description="Search query for files (e.g., 'name:report', 'mimeType:application/vnd.google-apps.document')")
    max_results: int = Field(default=10, description="Maximum number of results to return")


class DriveReadDocInput(BaseModel):
    """Input for reading a Google Doc."""
    file_id: str = Field(description="The ID of the Google Doc file to read")


class DriveCreateDocInput(BaseModel):
    """Input for creating a new Google Doc."""
    title: str = Field(description="Title of the new Google Doc")


class DriveAppendDocInput(BaseModel):
    """Input for appending text to a Google Doc."""
    file_id: str = Field(description="The ID of the Google Doc to append to")
    text: str = Field(description="Text to append to the document")


def get_drive_service(creds: Credentials):
    """Get Drive API service."""
    return build('drive', 'v3', credentials=creds)


def get_docs_service(creds: Credentials):
    """Get Docs API service."""
    return build('docs', 'v1', credentials=creds)


def get_sheets_service(creds: Credentials):
    """Get Sheets API service."""
    return build('sheets', 'v4', credentials=creds)


class DriveSearchTool(BaseTool):
    """Tool for searching Google Drive files."""
    name: str = "drive_search"
    description: str = """Search for files in Google Drive. Use Google Drive query syntax:
    - name='exact filename' - exact filename match
    - name contains 'text' - search for files with text in the name (most common)
    - fullText contains 'text' - search for files containing text in content
    - mimeType='application/vnd.google-apps.document' - search for Google Docs
    - mimeType='application/vnd.google-apps.spreadsheet' - search for Google Sheets
    - Combine with AND: name contains 'strategy' AND mimeType='application/vnd.google-apps.document'
    IMPORTANT: Do NOT include file extensions like .gsheet, .gdoc - these don't exist in Drive. 
    Search for just the filename without extension.
    Examples: 
    - 'name contains "Vonga 7 Year Roadmap"' (not ".gsheet")
    - 'name contains strategy'
    - 'fullText contains Vonga strategy'
    - 'name contains company AND mimeType contains spreadsheet'"""
    creds: Credentials = Field(exclude=True)
    
    def __init__(self, creds: Credentials, **kwargs):
        super().__init__(creds=creds, **kwargs)
    
    def _run(self, query: str, max_results: int = 10) -> str:
        """Execute the search."""
        try:
            service = get_drive_service(self.creds)
            results = service.files().list(
                q=query,
                pageSize=max_results,
                fields="files(id, name, mimeType, webViewLink)"
            ).execute()
            
            files = results.get('files', [])
            
            if not files:
                return f"No files found matching query: {query}"
            
            output = []
            for file in files:
                output.append({
                    'id': file.get('id'),
                    'name': file.get('name'),
                    'mimeType': file.get('mimeType'),
                    'link': file.get('webViewLink', 'N/A')
                })
            
            result_text = f"Found {len(output)} files:\n" + "\n".join([
                f"- {f['name']} (ID: {f['id']}, Type: {f['mimeType']})"
                for f in output
            ])
            result_text += "\n\nTo read a file:"
            result_text += "\n- For Google Docs: use the file ID with drive_read_doc tool"
            result_text += "\n- For Google Sheets: use the file ID with drive_read_sheet tool"
            return result_text
        except Exception as e:
            return f"Error searching Drive: {str(e)}"
    
    async def _arun(self, query: str, max_results: int = 10) -> str:
        """Async version - not implemented."""
        raise NotImplementedError("Async not implemented")


class DriveReadDocTool(BaseTool):
    """Tool for reading content from a Google Doc."""
    name: str = "drive_read_doc"
    description: str = "Read the text content from a Google Doc by its file ID."
    creds: Credentials = Field(exclude=True)
    
    def __init__(self, creds: Credentials, **kwargs):
        super().__init__(creds=creds, **kwargs)
    
    def _extract_text(self, elements: List[Dict[str, Any]]) -> str:
        """Recursively extract text from document elements."""
        text_parts = []
        for element in elements:
            if 'paragraph' in element:
                para = element['paragraph']
                for elem in para.get('elements', []):
                    if 'textRun' in elem:
                        text_parts.append(elem['textRun'].get('content', ''))
            elif 'table' in element:
                # Handle tables - extract text from cells
                for row in element['table'].get('tableRows', []):
                    row_text = []
                    for cell in row.get('tableCells', []):
                        cell_text = self._extract_text(cell.get('content', []))
                        row_text.append(cell_text)
                    text_parts.append(' | '.join(row_text))
        return ''.join(text_parts)
    
    def _run(self, file_id: str) -> str:
        """Execute the read."""
        try:
            docs_service = get_docs_service(self.creds)
            doc = docs_service.documents().get(documentId=file_id).execute()
            
            title = doc.get('title', 'Untitled')
            content = doc.get('body', {}).get('content', [])
            
            text = self._extract_text(content)
            
            return f"Document: {title}\n\nContent:\n{text}"
        except Exception as e:
            return f"Error reading document: {str(e)}"
    
    async def _arun(self, file_id: str) -> str:
        """Async version - not implemented."""
        raise NotImplementedError("Async not implemented")


class DriveCreateDocTool(BaseTool):
    """Tool for creating a new Google Doc."""
    name: str = "drive_create_doc"
    description: str = "Create a new Google Doc with the specified title."
    creds: Credentials = Field(exclude=True)
    
    def __init__(self, creds: Credentials, **kwargs):
        super().__init__(creds=creds, **kwargs)
    
    def _run(self, title: str) -> str:
        """Execute the creation."""
        try:
            docs_service = get_docs_service(self.creds)
            doc = docs_service.documents().create(body={'title': title}).execute()
            
            file_id = doc.get('documentId')
            doc_url = doc.get('documentUrl', f"https://docs.google.com/document/d/{file_id}")
            
            return f"Google Doc created successfully! Title: {title}, ID: {file_id}, URL: {doc_url}"
        except Exception as e:
            return f"Error creating document: {str(e)}"
    
    async def _arun(self, title: str) -> str:
        """Async version - not implemented."""
        raise NotImplementedError("Async not implemented")


class DriveAppendDocTool(BaseTool):
    """Tool for appending text to an existing Google Doc."""
    name: str = "drive_append_doc"
    description: str = "Append text to the end of an existing Google Doc."
    creds: Credentials = Field(exclude=True)
    
    def __init__(self, creds: Credentials, **kwargs):
        super().__init__(creds=creds, **kwargs)
    
    def _run(self, file_id: str, text: str) -> str:
        """Execute the append."""
        try:
            docs_service = get_docs_service(self.creds)
            
            # First, get the document to find the end index
            doc = docs_service.documents().get(documentId=file_id).execute()
            end_index = doc.get('body', {}).get('content', [{}])[-1].get('endIndex', 1)
            
            # Insert text at the end (minus 1 to account for the final newline)
            insert_index = end_index - 1
            
            requests = [
                {
                    'insertText': {
                        'location': {
                            'index': insert_index
                        },
                        'text': '\n' + text
                    }
                }
            ]
            
            docs_service.documents().batchUpdate(
                documentId=file_id,
                body={'requests': requests}
            ).execute()
            
            return f"Text appended successfully to document {file_id}"
        except Exception as e:
            return f"Error appending to document: {str(e)}"
    
    async def _arun(self, file_id: str, text: str) -> str:
        """Async version - not implemented."""
        raise NotImplementedError("Async not implemented")


class DriveReadSheetTool(BaseTool):
    """Tool for reading content from a Google Sheet."""
    name: str = "drive_read_sheet"
    description: str = """Read the content from a Google Sheet by its file ID. 
    Supports reading all tabs/sheets in the spreadsheet.
    - To read a specific tab: use 'TabName!A1:Z1000' (replace TabName with the actual tab name)
    - To read the first tab: use 'A1:Z1000' or leave range_name empty
    - If no range is specified, reads the entire first sheet/tab.
    - The tool can access ALL tabs in the spreadsheet - just specify the tab name in the range.
    Examples: 'Sheet1!A1:Z100', 'Data!A1:Z1000', 'Summary!A:Z'"""
    creds: Credentials = Field(exclude=True)
    
    def __init__(self, creds: Credentials, **kwargs):
        super().__init__(creds=creds, **kwargs)
    
    def _run(self, file_id: str, range_name: str = None) -> str:
        """Execute the read."""
        try:
            sheets_service = get_sheets_service(self.creds)
            drive_service = get_drive_service(self.creds)
            
            # Get spreadsheet metadata
            try:
                sheet_metadata = drive_service.files().get(fileId=file_id).execute()
                spreadsheet_name = sheet_metadata.get('name', 'Untitled Sheet')
            except Exception:
                spreadsheet_name = 'Sheet'
            
            # Get list of all sheets/tabs
            spreadsheet = sheets_service.spreadsheets().get(spreadsheetId=file_id).execute()
            all_sheets = spreadsheet.get('sheets', [])
            sheet_names = [s.get('properties', {}).get('title', 'Sheet1') for s in all_sheets]
            
            # If no range specified, read the first sheet
            if not range_name:
                if sheet_names:
                    first_sheet_name = sheet_names[0]
                    range_name = f"{first_sheet_name}!A1:Z1000"  # Read a large range
                else:
                    range_name = 'A1:Z1000'
            
            # Read the sheet data
            result = sheets_service.spreadsheets().values().get(
                spreadsheetId=file_id,
                range=range_name
            ).execute()
            
            values = result.get('values', [])
            
            if not values:
                # Include available tabs info even if no data
                tabs_info = f"\nAvailable tabs in this spreadsheet: {', '.join(sheet_names)}" if sheet_names else ""
                return f"Spreadsheet '{spreadsheet_name}' (ID: {file_id}) - Range '{range_name}' is empty or contains no data.{tabs_info}"
            
            # Determine which tab we're reading
            tab_name = range_name.split('!')[0] if '!' in range_name else sheet_names[0] if sheet_names else 'Sheet1'
            
            # Format as table with metadata
            output_lines = [
                f"Spreadsheet: {spreadsheet_name}",
                f"Tab/Sheet: {tab_name}",
                f"Range: {range_name}",
                f"Available tabs: {', '.join(sheet_names)}" if len(sheet_names) > 1 else "",
                ""
            ]
            
            for row in values:
                # Join cells with pipe for readability
                output_lines.append(" | ".join(str(cell) for cell in row))
            
            return "\n".join(output_lines)
        except Exception as e:
            return f"Error reading sheet: {str(e)}"
    
    async def _arun(self, file_id: str, range_name: str = None) -> str:
        """Async version - not implemented."""
        raise NotImplementedError("Async not implemented")


def get_drive_tools(creds: Credentials) -> List[BaseTool]:
    """Get all Drive tools."""
    return [
        DriveSearchTool(creds=creds),
        DriveReadDocTool(creds=creds),
        DriveReadSheetTool(creds=creds),
        DriveCreateDocTool(creds=creds),
        DriveAppendDocTool(creds=creds),
    ]

