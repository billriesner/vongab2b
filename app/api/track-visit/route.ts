import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { pathname, referrer, userAgent } = body;

    // Get client IP
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Basic deduplication: only alert for /indy-ignite visits
    if (pathname !== '/indy-ignite') {
      return NextResponse.json({ success: true, message: 'Visit tracked (not alerting)' });
    }

    const timestamp = new Date().toLocaleString('en-US', { 
      timeZone: 'America/New_York',
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    // Send Slack notification
    if (process.env.SLACK_WEBHOOK_URL) {
      const slackMessage = {
        text: '👀 Indy Ignite Microsite Visit',
        blocks: [
          {
            type: 'header',
            text: {
              type: 'plain_text',
              text: '👀 Indy Ignite Microsite Visit'
            }
          },
          {
            type: 'section',
            fields: [
              {
                type: 'mrkdwn',
                text: `*Time:*\n${timestamp}`
              },
              {
                type: 'mrkdwn',
                text: `*IP:*\n${ip}`
              },
              {
                type: 'mrkdwn',
                text: `*Referrer:*\n${referrer || 'Direct visit'}`
              }
            ]
          },
          {
            type: 'context',
            elements: [
              {
                type: 'mrkdwn',
                text: `User Agent: ${userAgent?.substring(0, 100) || 'Unknown'}`
              }
            ]
          }
        ]
      };

      try {
        await fetch(process.env.SLACK_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(slackMessage)
        });
      } catch (slackError) {
        console.error('Failed to send Slack notification:', slackError);
      }
    }


    return NextResponse.json({ 
      success: true, 
      message: 'Visit tracked and notification sent' 
    });
  } catch (error) {
    console.error('Error tracking visit:', error);
    return NextResponse.json(
      { error: 'Failed to track visit' },
      { status: 500 }
    );
  }
}
