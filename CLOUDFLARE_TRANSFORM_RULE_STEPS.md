# Cloudflare Transform Rule - Step by Step

You're almost there! Here's what to do next:

## Step 1: Select "Set static"

Click on the dropdown that shows "Select item..." and choose **"Set static"**

## Step 2: Configure the Header

After selecting "Set static", you'll see two fields:

| Field | Value |
|-------|-------|
| **Header name** | `Content-Security-Policy` |
| **Value** | `default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://identity.netlify.com https://unpkg.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://api.github.com;` |

## Step 3: Deploy

Click the **"Deploy"** button

## Step 4: Purge Cache

1. Go to **Caching** → **Configuration** in the left sidebar
2. Click **"Purge Everything"**
3. Confirm

## Step 5: Test

Wait 30 seconds, then visit:
- `https://tsavnande.com/admin/`
- `https://drtsavnandefoundation.com/admin/`

The Decap CMS should now load without CSP errors!

---

## Full CSP Value to Copy/Paste:

```
default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://identity.netlify.com https://unpkg.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://api.github.com;
```

---

## Troubleshooting

If it still doesn't work after 5 minutes:

1. Check if you have **other** Transform Rules that might be overriding this one
2. Check **Security** → **Headers** for any CSP settings there
3. Try opening in an incognito/private browser window
4. Check browser console (F12) for the exact CSP error
