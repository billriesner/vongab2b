# Google Analytics Setup

Google Analytics is integrated across the entire site to track page views and user behavior.

## Setup Instructions

1. **Get your Google Analytics Measurement ID**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new property or use an existing one
   - Navigate to Admin → Data Streams → Web
   - Copy your Measurement ID (format: `G-XXXXXXXXXX`)

2. **Add Environment Variable**
   - Create a `.env.local` file in the root directory (if it doesn't exist)
   - Add your Measurement ID:
     ```
     NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
     ```

3. **Restart Development Server**
   - Stop your current dev server (Ctrl+C)
   - Run `npm run dev` again to load the new environment variable

## How It Works

- **Automatic Page View Tracking**: Page views are automatically tracked when users navigate between pages
- **Route Change Detection**: The component uses Next.js App Router's `usePathname` hook to detect route changes
- **Performance Optimized**: Uses Next.js `Script` component with `afterInteractive` strategy to load analytics after the page is interactive

## Verification

1. Open your site in a browser
2. Open browser DevTools → Network tab
3. Filter for `google-analytics.com` or `googletagmanager.com`
4. You should see requests being made
5. Check Google Analytics Real-Time reports to see live traffic

## Disabling Analytics

To disable Google Analytics (e.g., for local development), simply don't set the `NEXT_PUBLIC_GA_MEASUREMENT_ID` environment variable. The component will automatically skip loading if the ID is not provided.

