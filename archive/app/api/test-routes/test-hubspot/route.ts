import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const token = process.env.HUBSPOT_TOKEN;
    
    if (!token) {
      return NextResponse.json({ error: 'HUBSPOT_TOKEN not found' }, { status: 500 });
    }

    // Test the token by making a simple API call
    const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts?limit=1', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    
    return NextResponse.json({
      tokenExists: !!token,
      tokenLength: token.length,
      apiResponse: response.status,
      data: data
    });
  } catch (error) {
    return NextResponse.json({ 
      error: 'HubSpot test failed', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
