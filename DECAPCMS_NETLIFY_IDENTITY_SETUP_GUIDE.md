# Decap CMS + Netlify Identity Setup Guide (DPTF Astro Project)

This guide explains exactly how to:

1. Sign in to Decap CMS correctly
2. Configure Netlify Identity and Git Gateway
3. Fix common login/config issues
4. Edit content safely

---

## 1) Prerequisites Checklist

Before logging in to `/admin`, confirm these are true:

- Your project is on GitHub (✅ you already did this)
- Your Netlify site is connected to that GitHub repo
- Your local dev server runs on `http://localhost:4321`
- `public/config.yml` exists (this project now has it)

Why this matters:

- Decap CMS (`backend: git-gateway`) needs Git provider + Netlify Identity + Git Gateway
- If `config.yml` is missing at site root (`/config.yml`), CMS shows `Failed to load config.yml (404)`

---

## 2) Correct Mental Model for Login

Important: **Netlify dashboard login is not the same as Decap CMS login**.

- You may use **Google** to log into Netlify dashboard
- But Decap CMS `/admin` uses **Netlify Identity users** for your site
- So you must create/invite an Identity user (email + password)

In short:

- Netlify account auth (dashboard) = one thing
- Netlify Identity auth (site CMS login) = separate thing

---

## 3) Netlify Dashboard Configuration (Step-by-Step)

Open your site in Netlify and do the following:

### Step A — Enable Identity

1. Go to **Site configuration**
2. Open **Identity**
3. Click **Enable Identity**

### Step B — Set Registration Preferences

1. In Identity settings, open **Registration**
2. Choose one:
   - **Invite only** (recommended for private/admin-only CMS)
   - **Open** (anyone can sign up — usually not recommended)

### Step C — Enable Git Gateway

1. In Identity settings, open **Services**
2. Find **Git Gateway**
3. Click **Enable Git Gateway**

This is required for Decap CMS to commit content changes to GitHub.

### Step D — Invite Yourself as Identity User

1. Go to **Identity → Users** (or Invite users)
2. Invite your email address
3. Open invitation email
4. Set a password for that Identity user

Now you can use this email/password on `/admin`.

---

## 4) Project Configuration Required in This Repo

Your active Decap config is:

- `public/config.yml` ✅ (required for Decap to load at `/config.yml`)

Your admin entry page is:

- `public/admin/index.html`

Your current backend block:

```yml
backend:
  name: git-gateway
  branch: master
```

> If your default GitHub branch is `main`, change `branch: master` to `branch: main`.

---

## 5) How to Sign In (Exact Flow)

### Local testing

1. Run dev server:

```bash
npm run dev
```

2. Open:

- `http://localhost:4321/admin/`

3. On Decap login screen:

- Enter **invited Identity email**
- Enter **Identity password** you created from invite

4. Click **Login**

If successful, you should see your configured collections (e.g. Blog, Pages).

---

## 6) How to Edit Content in Decap CMS

1. Go to `/admin`
2. Open a collection (e.g., **Blog** or **Pages**)
3. Create or edit an item
4. Click **Publish** (or Save Draft if configured)

What happens behind the scenes:

- Decap commits changes to your GitHub repo through Git Gateway
- Netlify rebuilds/deploys site (if auto deploy is enabled)

---

## 7) Transparency Page Note

Currently, `src/pages/transparency.astro` is hardcoded with arrays.

That means:

- You can test Decap login and existing collections now
- But transparency items are **not yet editable** in CMS until we add a collection and wire page data to content files

If you want, next step can be:

1. Create `src/content/transparency/` data files
2. Add `transparency` collection to `config.yml`
3. Refactor `transparency.astro` to read from content collection

---

## 8) Troubleshooting

### Error: `Failed to load config.yml (404)`

Cause:

- Decap cannot find `/config.yml`

Fix:

- Ensure file exists at `public/config.yml`
- Restart dev server if needed

### Login fails with correct Netlify dashboard account

Cause:

- Using dashboard credentials (Google OAuth) instead of Identity user

Fix:

- Invite yourself in Netlify Identity and set password from invite email

### `Not Found - User` or unauthorized errors

Cause:

- User not invited OR Git Gateway not enabled

Fix:

- Invite user in Identity
- Enable Git Gateway in Identity → Services

### Edits fail to push

Cause:

- Wrong branch in `config.yml` (`master` vs `main`)

Fix:

- Set `backend.branch` to actual default branch in GitHub repo

---

## 9) Recommended Production Safety Settings

- Use **Invite only** registration
- Restrict invited users to trusted admins
- Keep backups/version history in GitHub
- Review PR/editorial workflow if multiple editors will use CMS

---

## 10) Quick Verification Commands

Run from project root:

```bash
curl.exe -I http://localhost:4321/config.yml
curl.exe -I http://localhost:4321/admin/
curl.exe -I http://localhost:4321/transparency
```

Expected: all should return `HTTP/1.1 200 OK`.

---

If you want, I can also add a second guide specifically for **making the transparency page fully CMS-editable** end-to-end.

---

## 11) Do I have to host on Netlify?

Short answer: **No, your site can stay on Cloudflare**.

But for Decap CMS authentication/editing, your current setup uses:

```yml
backend:
  name: git-gateway
```

That specific backend depends on **Netlify Identity + Netlify Git Gateway**.

So you have 2 practical paths:

### Path A (easiest): Keep site on Cloudflare, use Netlify only for CMS auth/gateway

- Frontend hosting: Cloudflare Pages ✅
- CMS auth + Git commits: Netlify Identity/Git Gateway ✅

This is very common and works fine.

### Path B (advanced): 100% Cloudflare stack

You would replace Netlify Identity/Git Gateway with another auth/backend approach
(e.g. custom OAuth/proxy flow). This is more engineering work and not the quickest path.

---

## 12) Recommended setup for your project right now

Given your goal (quickly get CMS working):

1. Keep deployment on Cloudflare Pages
2. Use Netlify Identity + Git Gateway for Decap login/editing
3. Continue using your GitHub repo as source of truth

This gives you working CMS without moving hosting away from Cloudflare.

---

## 13) How to add your GitHub site to Netlify (for Identity/Git Gateway)

If your question is "how do I add my site to Netlify?", use this exact flow:

1. Go to `https://app.netlify.com/`
2. Click **Add new site** → **Import an existing project**
3. Choose **GitHub** and authorize Netlify if prompted
4. Select repository: `savvops/dptf-foundation-astro`
5. Build settings (Astro):
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **Deploy site**

After deploy finishes:

7. Open the new Netlify site dashboard
8. Go to **Site configuration → Identity**
9. Click **Enable Identity**
10. Set **Registration** = Invite only
11. Go to **Identity → Services** and enable **Git Gateway**
12. Go to **Identity → Users** and **Invite users** (your email)

Now your site is successfully "added to Netlify" for Decap CMS auth, while you can still keep production hosting on Cloudflare.
