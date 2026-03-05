# Netlify Identity "User Not Found" Fix

## Common Causes & Solutions

### 1. Invitation Not Fully Completed

**Problem**: You received the invitation email but didn't complete the signup process.

**Fix**:
1. Go to your Netlify site dashboard
2. Go to **Identity** → **Users**
3. Find your email in the list
4. Check if status shows **"Pending"** or **"Active"**
   - If "Pending": Click on the user and click **"Resend invitation"**
   - Check your email (including spam/junk) and click the link to set password

### 2. Wrong Site URL in Identity Settings

**Problem**: Identity expects users at one URL but you're accessing at another.

**Fix**:
1. In Netlify Dashboard, go to **Site configuration** → **Identity**
2. Scroll down to **Registration** → **Identity settings**
3. Check **"Site URL"** - it should match where you're accessing the admin:
   - If using custom domain: `https://tsavnande.com`
   - Or: `https://drtsavnandefoundation.com`
   - Or Netlify URL: `https://your-site-name.netlify.app`
4. Save changes

### 3. Enable Identity (Double Check)

**Fix**:
1. Go to **Site configuration** → **Identity**
2. Make sure it says **"Identity is enabled"** at the top
3. If not, click **"Enable Identity"**

### 4. Git Gateway Not Enabled

**Fix**:
1. In Identity settings, go to **Services** tab
2. Make sure **Git Gateway** shows as **Enabled**
3. If not, click **"Enable Git Gateway"**
4. It will ask you to reconnect to GitHub - do it

### 5. External Provider Only (No Email/Password)

**Problem**: Identity might be set to only allow external providers (Google, etc.) and not email/password.

**Fix**:
1. Go to **Site configuration** → **Identity** → **Registration**
2. Under **"External providers"**, make sure **"Email/Password"** is checked
3. Under **"Registration preferences"**, select either:
   - **"Open"** (anyone can sign up) - temporarily for testing
   - **"Invite only"** (recommended for production)
4. Save

### 6. Wrong Branch in Git Gateway

**Fix**:
1. Go to **Site configuration** → **Identity** → **Services** → **Git Gateway**
2. Check what branch is configured
3. Make sure it matches your default branch (`master` or `main`)
4. If wrong, click **"Edit settings"** and fix it

---

## Quick Checklist

Before trying to log in again, verify:

- [ ] Identity is enabled
- [ ] Git Gateway is enabled
- [ ] Your user shows as "Active" (not "Pending")
- [ ] Site URL in Identity settings matches where you're logging in
- [ ] Email/Password provider is enabled
- [ ] You have a confirmed password (you clicked the invitation link)

---

## Testing Login

1. Go to `https://tsavnande.com/admin/` (or your domain)
2. Click **"Login with Netlify Identity"**
3. Enter your email and password

If you still get "User not found":

1. Try **"Sign up"** instead of "Login" (if registration is open)
2. Or go to Netlify Dashboard → Identity → Users → Click **"Add user"** and create your account directly

---

## Nuclear Option: Start Fresh

If nothing works:

1. Go to **Identity** → **Users**
2. Delete your user
3. Go to **Settings** → **Identity** → **Disable Identity** (if possible)
4. Re-enable Identity
5. Re-enable Git Gateway
6. Add yourself as a user again
7. Click the invitation email and set password
8. Try logging in again
