# Form Integration Setup Instructions

This guide will help you set up the contact form to store submissions in Supabase and send Slack notifications.

## Prerequisites

- Supabase account (free tier works)
- Slack workspace with admin access
- Vercel or similar hosting platform

## Step 1: Set Up Supabase

### 1.1 Create a Supabase Project
1. Go to [https://supabase.com](https://supabase.com) and create an account
2. Create a new project
3. Wait for the database to finish setting up (~2 minutes)

### 1.2 Create the Database Tables
1. In your Supabase dashboard, go to **SQL Editor**
2. Run these SQL commands:

```sql
-- Contact Form Submissions Table
create table contact_submissions (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  company text not null,
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table contact_submissions enable row level security;

create policy "Allow insert for service role"
  on contact_submissions
  for insert
  to service_role
  with check (true);

-- Newsletter Subscriptions Table
create table newsletter_subscriptions (
  id uuid default gen_random_uuid() primary key,
  email text not null unique,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table newsletter_subscriptions enable row level security;

create policy "Allow insert for service role"
  on newsletter_subscriptions
  for insert
  to service_role
  with check (true);

-- Return Requests Table
create table return_requests (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  order_number text not null,
  items text not null,
  reason text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table return_requests enable row level security;

create policy "Allow insert for service role"
  on return_requests
  for insert
  to service_role
  with check (true);
```

### 1.3 Get Your API Credentials
1. Go to **Project Settings** → **API**
2. Copy these values:
   - **Project URL** (looks like `https://xxxxx.supabase.co`)
   - **service_role key** (under "Project API keys" - this is SECRET!)

## Step 2: Set Up Slack Webhook

### 2.1 Create Incoming Webhook
1. Go to [https://api.slack.com/messaging/webhooks](https://api.slack.com/messaging/webhooks)
2. Click **Create your Slack app** → **From scratch**
3. Name it "Vonga Contact Form" and select your workspace
4. Click **Incoming Webhooks** in the sidebar
5. Toggle **Activate Incoming Webhooks** to ON
6. Click **Add New Webhook to Workspace**
7. Select the channel where you want notifications (e.g., #sales, #leads)
8. Copy the **Webhook URL** (looks like `https://hooks.slack.com/services/...`)

## Step 3: Configure Environment Variables

### 3.1 Create Local Environment File
Create a file named `.env.local` in your project root:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_SERVICE_KEY=your_service_role_key_here

# Slack Webhook URL
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/xxxxx
```

⚠️ **IMPORTANT**: Never commit `.env.local` to git. It's already in `.gitignore`.

### 3.2 Configure Production Environment Variables
If deploying on **Vercel**:
1. Go to your project settings → Environment Variables
2. Add these three variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_KEY` (mark as sensitive)
   - `SLACK_WEBHOOK_URL` (mark as sensitive)
3. Redeploy your site

For other platforms, add the same variables to their environment settings.

## Step 4: Test the Forms

### 4.1 Local Testing

1. Restart your dev server: `npm run dev`

2. **Test Contact Form** (Enterprise/Contact pages):
   - Go to http://localhost:3000/enterprise#talk
   - Fill out and submit the form
   - Check:
     - You should see a success message
     - Check Supabase dashboard → Table Editor → `contact_submissions`
     - Check your Slack channel for the 🚀 notification

3. **Test Newsletter Form** (Homepage):
   - Go to http://localhost:3000/#stay-connected
   - Fill out and submit the Subscribe form
   - Check:
     - You should see a success message
     - Check Supabase dashboard → Table Editor → `newsletter_subscriptions`
     - Check your Slack channel for the 📧 notification

4. **Test Return Form** (Shipping & Returns page):
   - Go to http://localhost:3000/shipping-returns
   - Scroll to "How to Start a Return" section
   - Fill out and submit the return request form
   - Check:
     - You should see a success message
     - Check Supabase dashboard → Table Editor → `return_requests`
     - Check your Slack channel for the 🔄 notification

### 4.2 Slack Message Formats

**Contact Form:**
```
🚀 New Contact Form Submission

Name: John Doe
Email: john@example.com
Company: Acme Corp
Message: Looking to create custom apparel for our team

Submitted at: [timestamp]
```

**Newsletter:**
```
📧 New Newsletter Subscription

Email: john@example.com

Subscribed at: [timestamp]
```

**Return Request:**
```
🔄 New Return Request

Name: Jane Smith
Email: jane@example.com
Order Number: #12345
Items: Vonga Classic Hoodie (Size M)
Reason: Size too small

Submitted at: [timestamp]
```

## Troubleshooting

### Form submission fails
- Check browser console for errors
- Verify environment variables are set correctly
- Check Supabase logs in dashboard
- Ensure table was created with correct schema

### Slack notifications not sending
- Verify webhook URL is correct
- Test the webhook directly with curl:
```bash
curl -X POST -H 'Content-type: application/json' \
--data '{"text":"Test message"}' \
YOUR_SLACK_WEBHOOK_URL
```

### Database not saving
- Check Supabase table permissions (RLS policies)
- Verify service_role key is being used (not anon key)
- Check Supabase logs for errors

## Security Notes

- The `SUPABASE_SERVICE_KEY` is powerful - never expose it in client-side code
- The API route runs server-side, keeping your keys secure
- Row Level Security (RLS) is enabled to protect your data
- Form validation happens both client-side and server-side

## Next Steps

Once working, you can:
- View all submissions in Supabase dashboard
- Export data as CSV for your CRM
- Set up email auto-responses via Supabase Edge Functions
- Create analytics dashboards from the submission data

