# HubSpot NURTURE Flow Setup Checklist

## 1) Create Deal Properties

Create these custom properties on Deal objects:

- **vonga_nurture_status** (dropdown): Active, Re-engaged, Snoozed
- **vonga_last_touch_type** (text): T1, T2, T3, T4
- **vonga_next_revisit_date** (date): YYYY-MM-DD format

## 2) Create Email Sequence

Create a sequence in HubSpot with four plain emails (paste from `/docs/nurture-emails.md`):

- **Touch #1** → immediate (T+0)
- **Touch #2** → +30 days (T+30)  
- **Touch #3** → +90 days (T+90)
- **Touch #4** → +180 days (T+180)

## 3) Workflow Rules

### Enroll in Sequence
- **Trigger:** When `vonga_stage=NURTURE` AND `vonga_nurture_status=Active`
- **Action:** Enroll in nurture sequence

### Stop Sequence on Engagement
- **Trigger:** If "reply received", "meeting scheduled", or "form resubmitted"
- **Actions:**
  - Unenroll from sequence
  - POST to `https://<your-domain>/api/hubspot/webhook` with:
    - Header: `X-HS-Secret: <your-secret>`
    - Body: `{ "type": "email_reply"|"meeting_booked"|"form_resubmitted", "dealId": "<id>", "contactId": "<id>" }`

### Handle Check-in Replies
- **Trigger:** Touch #2 replies containing A/B/C/D
- **Action:** POST to `https://<your-domain>/api/hubspot/webhook` with:
  - Header: `X-HS-Secret: <your-secret>`
  - Body: `{ "type": "checkin_reply", "dealId": "<id>", "contactId": "<id>", "meta": { "choice": "A"|"B"|"C"|"D" } }`

## 4) Optional: NURTURE Lead View

Create a view showing all NURTURE leads with `vonga_next_revisit_date` in the next 14 days.

## 5) Webhook URL

Your webhook endpoint: `https://<your-domain>/api/hubspot/webhook`

Make sure to replace `<your-domain>` with your actual domain and `<your-secret>` with the value from `HUBSPOT_WEBHOOK_SECRET` in your `.env.local` file.
