import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate required field
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Store in Supabase
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_KEY) {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

      const response = await fetch(`${supabaseUrl}/rest/v1/newsletter_subscriptions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          email,
          created_at: new Date().toISOString()
        })
      });

      if (!response.ok) {
        console.error('Supabase error:', await response.text());
      }
    }

    // Send Slack notification
    if (process.env.SLACK_WEBHOOK_URL) {
      const slackMessage = {
        text: '📧 New Newsletter Subscription',
        blocks: [
          {
            type: 'header',
            text: {
              type: 'plain_text',
              text: '📧 New Newsletter Subscription'
            }
          },
          {
            type: 'section',
            fields: [
              {
                type: 'mrkdwn',
                text: `*Email:*\n${email}`
              }
            ]
          },
          {
            type: 'context',
            elements: [
              {
                type: 'mrkdwn',
                text: `Subscribed at: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}`
              }
            ]
          }
        ]
      };

      const slackResponse = await fetch(process.env.SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(slackMessage)
      });

      if (!slackResponse.ok) {
        console.error('Slack notification failed:', await slackResponse.text());
      }
    }

    return NextResponse.json(
      { message: 'Subscribed successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing subscription:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
}

