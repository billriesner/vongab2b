# HubSpot NURTURE Sequence Setup Guide

## 🎯 Overview
This guide will help you create the 4-email NURTURE sequence in HubSpot manually.

## 📧 Email Templates to Create

### 1. Touch #1 (T+0) - Immediate
**Subject:** `thanks for reaching out - keeping the door open`

**Body:**
```
Hey {{ first_name }},

Appreciate you sharing what you're working on. Quick note from our side:

{{ vonga_fit_message }}

When timing or resources line up, I'm happy to jump on for 15 minutes and map a simple first step.

If anything changes, just reply to this email.

- Bill
```

### 2. Touch #2 (T+30) - 30 Days
**Subject:** `quick gut check for {{ company }}`

**Body:**
```
Hey {{ first_name }},

Has anything moved on your side?

A) we've got a season or event taking shape
B) sponsor interest is real; need the ROI story
C) growing, but not there yet
D) not a priority right now

Reply with A/B/C/D and I'll point you to the next simple step.

- Bill
```

### 3. Touch #3 (T+90) - 90 Days
**Subject:** `20 minutes to talk "from moment to memory"?`

**Body:**
```
Hey {{ first_name }},

I'm holding short office hours next week. No slides. Just practical steps and questions.

If it helps, reply with one question you want answered. I'll send notes or we can hop on a quick call.

- Bill
```

### 4. Touch #4 (T+180) - 180 Days
**Subject:** `still relevant for {{ company }}?`

**Body:**
```
Hey {{ first_name }},

Checking in. Is "lasting fandom" still on your list this season?

If yes, I'll share a simple two-step plan for a small pilot. If not, I'll pause here and you can reach out when it's useful.

- Bill
```

## 🔧 Setup Steps in HubSpot

### Step 1: Create Email Templates
1. Go to **Marketing** → **Email** → **Templates**
2. Click **Create template**
3. For each email above:
   - Name: `Vonga Nurture - Touch X (T+Y)`
   - Subject: Use the subject line provided
   - Body: Use the body text provided
   - Save each template

### Step 2: Create Email Sequence
1. Go to **Marketing** → **Email** → **Sequences**
2. Click **Create sequence**
3. Name: `Vonga Nurture Flow`
4. Add 4 steps:
   - **Step 1:** Touch 1 template, delay: 0 days
   - **Step 2:** Touch 2 template, delay: 30 days  
   - **Step 3:** Touch 3 template, delay: 90 days
   - **Step 4:** Touch 4 template, delay: 180 days

### Step 3: Create Workflow Rules
1. Go to **Automation** → **Workflows**
2. Create new workflow: `NURTURE Lead Enrollment`
3. **Enrollment trigger:** When `vonga_stage` = "NURTURE" AND `vonga_nurture_status` = "Active"
4. **Action:** Enroll in "Vonga Nurture Flow" sequence

### Step 4: Create Re-engagement Workflow
1. Create workflow: `NURTURE Re-engagement`
2. **Trigger:** When any of these happen:
   - Email reply received
   - Meeting booked
   - Form resubmitted
   - Check-in reply (A/B/C/D)
3. **Actions:**
   - Unenroll from sequence
   - Update `vonga_nurture_status` to "Re-engaged"
   - Update `vonga_stage` to "REVIEW" or "BOOK"
   - Log note about re-engagement

## 🧪 Testing the Flow

### Test 1: NURTURE Lead
1. Submit intake form with low score (NURTURE tier)
2. Check HubSpot deal has:
   - `vonga_stage` = "NURTURE"
   - `vonga_nurture_status` = "Active"
   - `vonga_next_revisit_date` = 30 days from now
3. Verify lead is enrolled in sequence

### Test 2: Re-engagement
1. Reply to Touch #2 email with "A"
2. Check HubSpot deal updates:
   - `vonga_nurture_status` = "Re-engaged"
   - `vonga_stage` = "REVIEW"
3. Verify sequence unenrollment

## 🔗 Webhook Configuration

The webhook endpoint is ready at:
```
POST https://your-domain.com/api/hubspot/webhook
```

**Headers:**
- `X-HS-Secret`: Your webhook secret
- `Content-Type`: application/json

**Payload examples:**
```json
{
  "type": "email_reply",
  "dealId": "12345",
  "contactId": "67890"
}
```

## ✅ Success Checklist

- [ ] 4 email templates created
- [ ] Email sequence created with proper timing
- [ ] Workflow rules configured
- [ ] Webhook endpoint tested
- [ ] NURTURE lead flow tested
- [ ] Re-engagement flow tested

## 🆘 Troubleshooting

**Issue:** Emails not sending
- Check sequence is active
- Verify contact has valid email
- Check spam folder

**Issue:** Workflow not triggering
- Verify deal properties are set correctly
- Check workflow enrollment criteria
- Test with manual enrollment

**Issue:** Webhook not working
- Verify webhook URL is correct
- Check webhook secret matches
- Test with curl or Postman
