# Cloudflare CSP Fix

The CSP error you're seeing is coming from Cloudflare's dashboard settings, NOT from your code.

## The Problem

Cloudflare is adding its own CSP headers that don't include `'unsafe-eval'`. This overrides the CSP meta tag in the HTML.

## Solution

### Step 1: Check Cloudflare Dashboard

1. Go to https://dash.cloudflare.com/
2. Select your domain (tsavnande.com or drtsavnandefoundation.com)
3. Go to **Security** → **Headers**
4. Look for:
   - "Content Security Policy" 
   - "Security Headers"
   - "HTTP Response Headers"

5. If you see any CSP settings there, either:
   - **Delete them entirely** (recommended), OR
   - Add `'unsafe-eval'` to the `script-src` directive

### Step 2: Check Transform Rules

1. In Cloudflare Dashboard, go to **Rules** → **Transform Rules**
2. Check if there are any rules modifying response headers
3. Look for any CSP-related rules and disable/delete them

### Step 3: Check Page Rules

1. Go to **Rules** → **Page Rules**
2. Check if any page rules are adding security headers
3. Disable any that add CSP

### Step 4: Purge Cache

After making changes:

1. Go to **Caching** → **Configuration**
2. Click **Purge Everything**
3. Wait 30 seconds
4. Test `/admin/` again

---

## Alternative: Use a Transform Rule to Fix CSP

If you can't find where the CSP is being set, create a new Transform Rule to override it:

1. Go to **Rules** → **Transform Rules** → **Modify Response Header**
2. Click **Create rule**
3. Name: "Fix Admin CSP"
4. When incoming requests match: `URI Path contains "/admin"`
5. Then: **Set** → **Content-Security-Policy** → 
   ```
   default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://identity.netlify.com https://unpkg.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://api.github.com;
   ```
6. Deploy

---

## Quick Test

After making changes, test with curl:

```bash
curl -I https://tsavnande.com/admin/
```

Look for the `Content-Security-Policy` header. It should include `'unsafe-eval'` or not be present at all (the HTML meta tag will handle it).

---

## What I Changed in Your Code

I already:
1. Removed CSP headers from `public/_headers`
2. Removed CSP headers from `netlify.toml`
3. Added CSP meta tag to `src/pages/admin.astro`
4. Added cache-control to prevent old CSP from being cached

Now you just need to fix the Cloudflare Dashboard settings.
