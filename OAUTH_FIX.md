# Fixing OAuth Redirect URI Error

## The Problem
You're seeing: `Error 400: redirect_uri_mismatch`

This happens because the redirect URI in your Google Cloud Console doesn't match what the app is trying to use.

## The Solution

You need to add the correct redirect URI to your Google Cloud Console OAuth client.

### Steps to Fix:

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/
   - Select your project

2. **Navigate to OAuth Client Settings**
   - Go to "APIs & Services" → "Credentials"
   - Find your OAuth 2.0 Client ID (the one used for this app)
   - Click on it to edit

3. **Add Authorized Redirect URIs**
   - In the "Authorized redirect URIs" section, click "ADD URI"
   - Add these URIs (one at a time):
     - `http://localhost:8080/`
     - `http://127.0.0.1:8080/`
   - Click "SAVE"

4. **If Using Desktop App Type**
   - If your OAuth client type is "Desktop app", you might also need:
     - `http://localhost`
     - `http://127.0.0.1`

### Alternative: Use Out-of-Band Flow

If you prefer not to use a local server, you can modify `auth.py` to use the out-of-band flow instead. Let me know if you want this option.

## After Making Changes

1. The changes in Google Cloud Console take effect immediately (no waiting)
2. Try running the app again: `python3 -m streamlit run app.py`
3. The OAuth flow should now work correctly

## Need Help?

If you're still having issues:
- Make sure you're editing the correct OAuth client (the one in your `credentials.json`)
- Check that you saved the changes in Google Cloud Console
- Try clearing your browser cache and cookies for Google accounts

