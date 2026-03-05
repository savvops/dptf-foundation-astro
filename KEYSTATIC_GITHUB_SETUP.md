# 🔧 Keystatic GitHub Setup Guide

## The Issue
Keystatic's `local` storage mode doesn't work on Cloudflare Pages because:
- Cloudflare Workers run in a V8 isolate (not Node.js)
- Local filesystem access isn't available in edge functions
- **Solution**: Use GitHub storage mode

## ✅ What Changed

```typescript
// Before (doesn't work on Cloudflare)
storage: { kind: 'local' }

// After (works on Cloudflare)
storage: {
  kind: 'github',
  repo: {
    owner: 'savvops',
    name: 'dptf-foundation-astro',
  },
}
```

## 🔐 How GitHub Storage Works

1. **You log in** with your GitHub account
2. **Keystatic** reads/writes JSON files directly to your repo
3. **Changes** are committed automatically
4. **Cloudflare Pages** redeploys on every commit

## 🚀 Deployment Steps

### Step 1: Push Changes
```bash
git push origin main
```

### Step 2: Wait for Cloudflare Deploy
- Cloudflare Pages auto-deploys on push
- Check your dashboard for status

### Step 3: First-Time Setup

1. **Visit**: `https://drtsavnandefoundation.com/keystatic`

2. **Click "Log in with GitHub"**

3. **Authorize Keystatic** to access your repo
   - It needs read/write access to content files
   - It only accesses the specific repo, not all repos

4. **Start Editing!**

## 💡 For Client Sites

### Option 1: Client Uses Your GitHub Account (Simplest)
- You manage all client sites from your GitHub
- Client contacts you for changes
- **Best for**: Small clients who rarely update content

### Option 2: Client Creates Their Own GitHub (Recommended)
1. Client creates free GitHub account
2. You transfer the repo to their account
3. Update `keystatic.config.ts` with their repo
4. They log in with their own GitHub
5. **Best for**: Clients who update content regularly

### Option 3: You Manage Everything (Full Service)
- Client emails you changes
- You make edits in Keystatic
- Charge monthly retainer for updates
- **Best for**: High-value clients who want white-glove service

## 🔒 Security Notes

- Keystatic uses OAuth with GitHub
- Your GitHub credentials are never stored
- Only the specified repo is accessed
- All changes are tracked in Git history

## 🔄 Content Workflow

```
Client logs in → Makes edits → Auto-commits to GitHub 
→ Cloudflare auto-deploys → Site updates instantly
```

## 🆘 Troubleshooting

### "Repository not found"
- Check repo name in `keystatic.config.ts`
- Ensure repo is public (or you have access to private)

### "Authentication failed"
- Clear browser cookies
- Try logging in again
- Check GitHub permissions

### Changes not appearing
- Check GitHub for new commits
- Verify Cloudflare Pages deployment
- Hard refresh: Ctrl+Shift+R

## 📊 Comparison: Storage Modes

| Feature | Local | GitHub |
|---------|-------|--------|
| **Works on Cloudflare** | ❌ | ✅ |
| **Authentication** | None | GitHub OAuth |
| **Audit trail** | Git history | Git history |
| **Multi-user** | ❌ | ✅ |
| **Setup complexity** | Simple | Medium |

## 🎯 Recommended Setup for Clients

```typescript
// keystatic.config.ts for client sites
export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'CLIENT_GITHUB_USERNAME',  // Client's account
      name: 'CLIENT_REPO_NAME',
    },
  },
  // ... rest of config
});
```

## 💰 Business Model Still Works!

| Cost | Amount |
|------|--------|
| Your GitHub account | Free |
| Client's GitHub account | Free |
| Cloudflare Pages | Free |
| Keystatic | Free |
| **Total** | **$0/month** |

**Charge clients**: $500-1,500 setup + $50-100/month ✅

## ✅ Post-Deploy Checklist

- [ ] Push changes to GitHub
- [ ] Verify Cloudflare deployment
- [ ] Visit `/keystatic` and log in
- [ ] Test editing a content item
- [ ] Verify changes appear on site
- [ ] Document the process for clients

---

**Ready to deploy?** Push to GitHub and your CMS will be live! 🚀
