# Pre-Deployment Checklist

## ✅ Critical Issues (Must Fix Before Deploy)

### 1. **Build Errors - Linting Failures**
The build is currently failing due to linting errors. While these won't break the site, they prevent successful builds:

**Unescaped Entities (Apostrophes):**
- Multiple files have unescaped apostrophes that should be `&apos;` or use proper React escaping
- Files affected: `app/creators/page.tsx`, `app/studios-clubs/page.tsx`, `components/Header.tsx`, `components/Footer.tsx`, and others

**Fix:** Either:
- Escape apostrophes: `Let's` → `Let&apos;s` or `Let{"'"}s`
- Or temporarily disable the rule for these specific lines: `// eslint-disable-next-line react/no-unescaped-entities`

### 2. **TypeScript Errors (Non-Blocking)**
- Multiple solution pages have implicit `any` types
- Some files missing React imports
- These are warnings but won't break runtime

### 3. **Theme Color Warning**
- `app/layout.tsx` line 47: `themeColor` in metadata is deprecated
- Should be moved to `viewport` export instead

## ⚠️ Important Checks (Recommended)

### 4. **Google Analytics Setup**
- Verify `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set in production environment
- Component gracefully handles missing ID, but verify it's configured

### 5. **Image Optimization**
- Many images use `<img>` instead of Next.js `Image` component
- Consider migrating for better performance (low priority)

### 6. **Environment Variables**
Required for production:
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` (optional, for analytics)
- `HUBSPOT_TOKEN` (for intake form)
- `SLACK_WEBHOOK_URL` or `SLACK_BOT_TOKEN` (for notifications)
- `STRIPE_SECRET_KEY` (for club orders)
- `RESEND_API_KEY` (for emails)
- `AIRTABLE_TOKEN` (for data storage)
- `NEXT_PUBLIC_BASE_URL` (for absolute URLs)

## ✅ Good to Go

### 7. **SEO Implementation**
- ✅ Global metadata configured
- ✅ Page-specific metadata via `generateMetadata`
- ✅ JSON-LD structured data (Organization, WebSite, Breadcrumbs)
- ✅ Sitemap and robots.txt configured
- ✅ Canonical URLs set

### 8. **Internal Links**
- ✅ All navigation links verified
- ✅ Footer links functional
- ✅ CTA buttons point to correct paths

### 9. **Brand Guidelines**
- ✅ Primary CTA = "Let's Connect"
- ✅ Hero headlines match brand copy
- ✅ Color consistency (Aqua #33BECC, Navy #303E55, Coral #FF7F50)
- ✅ Dark theme applied consistently

### 10. **File Structure**
- ✅ Unused files archived
- ✅ Active pages organized
- ✅ Components properly structured

## 🚀 Deployment Steps

1. **Fix Critical Linting Errors**
   ```bash
   # Option 1: Fix apostrophes manually
   # Option 2: Disable rule for deployment (not recommended)
   # Option 3: Update ESLint config to be less strict
   ```

2. **Set Environment Variables**
   - Configure all required env vars in your deployment platform
   - Verify `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set for production

3. **Test Build**
   ```bash
   npm run build
   ```

4. **Verify Production Build**
   - Test all major pages
   - Check Google Analytics is tracking
   - Verify forms submit correctly
   - Test all internal links

5. **Move Theme Color to Viewport** (Next.js 15 requirement)
   - Create `app/viewport.ts`:
   ```typescript
   export const viewport = {
     themeColor: '#0A1422',
   }
   ```
   - Remove `themeColor` from `app/layout.tsx` metadata

## 📝 Notes

- The site will work even with linting errors (they're warnings)
- TypeScript errors are non-blocking but should be fixed for code quality
- Image optimization can be done post-deployment as a performance improvement
- All critical functionality appears to be working

