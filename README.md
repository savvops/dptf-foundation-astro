# DPTF Foundation Website - Complete Guide

Astro + Tailwind website with GitHub-based CMS for zero-cost content management.

**Live Site:** https://drtsavnandefoundation.com  
**Edit Content:** https://drtsavnandefoundation.com/edit  
**Repository:** https://github.com/savvops/dptf-foundation-astro

---

## 📁 Content Structure

All website content is stored as JSON files in `src/content/`:

```
src/content/
├── siteSettings/        # Site name, logo, meta
├── navigation/          # Menu links
├── homepage/            # Hero, intro, CTA sections
├── stats/               # Homepage statistics
├── coreValues/          # Core values list
├── objectives/          # Foundation objectives
├── board/               # Board members
├── programs/            # Our programs
├── impactAreas/         # Impact areas
├── medicalOutreaches/   # Medical outreach events
├── educationInitiatives/# Education programs
├── faqItems/            # FAQ questions & answers
├── donationAmounts/     # Donation preset amounts
├── getInvolvedSettings/ # Get Involved page
├── transparencySettings/# Transparency page
├── financialReports/    # PDF financial reports
├── activityReports/     # PDF activity reports
├── contactSettings/     # Contact page
└── ... (39 total folders)
```

**Images are stored in:** `public/images/`

---

## ✏️ How to Edit Content

### Method 1: Easy Edit Page (Recommended)

1. Go to: **https://drtsavnandefoundation.com/edit**
2. Click any folder (e.g., "Homepage" → "Homepage Sections")
3. Click the pencil (✏️) icon on any file
4. Edit the JSON content
5. Click **"Commit changes..."**
6. Your site updates in 1-2 minutes automatically

### Method 2: Direct GitHub

1. Go to: https://github.com/savvops/dptf-foundation-astro/tree/main/src/content
2. Navigate to the folder you want to edit
3. Click the file, then click ✏️ pencil icon
4. Edit and commit

---

## 📝 JSON Editing Guide

### Basic Structure

Each file is a JSON object with key-value pairs:

```json
{
  "title": "My Title",
  "description": "My description text",
  "enabled": true,
  "order": 1
}
```

### Common Fields

| Field | Type | Description |
|-------|------|-------------|
| `title` | text | Heading/title |
| `description` | text | Body text (can be multi-line) |
| `enabled` | boolean | `true` to show, `false` to hide |
| `order` | number | Sort order (1, 2, 3...) |
| `image` | text | Path: `/images/folder/image.jpg` |

### Multi-line Text

Use `\n` for line breaks:

```json
{
  "description": "First line\n\nSecond paragraph\n\nThird line"
}
```

### Adding New Items

1. Go to the folder (e.g., `src/content/board/`)
2. Click **"Add file"** → **"Create new file"**
3. Name it: `new-member.json`
4. Add JSON content
5. Commit

---

## 🖼️ How to Add Images

### Method 1: GitHub Upload

1. Go to: https://github.com/savvops/dptf-foundation-astro/tree/main/public/images
2. Click **"Add file"** → **"Upload files"**
3. Drag & drop images
4. Click **"Commit changes"**

### Image Folders

| Folder | Use For |
|--------|---------|
| `/images/` | General images |
| `/images/members/` | Board member photos |
| `/images/uploads/` | Misc uploads |
| `/reports/` | PDF reports |

### Using Images in Content

After uploading, reference in JSON:

```json
{
  "image": "/images/members/john-doe.jpg",
  "logo": "/images/dptf-logo.png"
}
```

### Image Tips

- **Size:** Keep under 500KB for fast loading
- **Format:** Use JPG for photos, PNG for logos
- **Dimensions:** 1200px wide is plenty for web
- **Naming:** Use lowercase, no spaces (`john-doe.jpg`)

---

## 👥 Giving Clients Access

### Step 1: Add Client to Repository

1. Go to: https://github.com/savvops/dptf-foundation-astro/settings/access
2. Click **"Add people"**
3. Enter client's GitHub username or email
4. Select role: **"Write"** (can edit, not delete repo)
5. Click **"Add"**

### Step 2: Client Accepts Invitation

Client receives email → Clicks **"View invitation"** → **"Accept"**

### Step 3: Client Edits Content

1. Client goes to: **https://drtsavnandefoundation.com/edit**
2. Clicks any folder
3. Edits files directly (logged in with their GitHub)
4. Changes auto-deploy

### Permission Levels

| Role | Can Do |
|------|--------|
| **Read** | View only |
| **Write** | ✓ Edit content, upload images |
| **Admin** | ✓ Everything + manage access |

---

## 🚀 Deployment

### How It Works

```
Edit on GitHub → Commit → Cloudflare Auto-Deploys → Live in 1-2 min
```

### Check Deployment Status

1. Go to: https://dash.cloudflare.com → Pages
2. Select your project
3. See deployment status

### Manual Deploy

If needed, go to Cloudflare Dashboard → Pages → Click **"Create deployment"**

---

## 💼 Business Model (For Selling to Clients)

### Your Costs: $0/month

| Item | Cost |
|------|------|
| GitHub | Free (public repos) |
| Cloudflare Pages | Free |
| Domain | ~$12/year |

### What to Charge Clients

| Service | Price Range |
|---------|-------------|
| **Website Setup** | $500 - $1,500 |
| **Monthly Hosting** | $50 - $100/month |
| **Content Updates** | $25 - $50/hour |
| **Custom Features** | Custom quote |

### Client Handover Process

1. **Clone repo** for new client
2. **Customize** (colors, logo, content)
3. **Deploy** to their domain
4. **Add them** as collaborator on GitHub
5. **Send edit link:** `theirdomain.com/edit`
6. **Optional:** Record 5-min tutorial video

### Profit Example

- 10 clients × $75/month = **$750/month profit**
- 20 clients × $75/month = **$1,500/month profit**

---

## 🐛 Troubleshooting

### "404 - File not found"

- Check the file path exists
- Use `/tree/main/` links for folders
- Use `/blob/main/` links for files

### "Changes not showing on site"

1. Check GitHub commits (verify change was saved)
2. Check Cloudflare Pages deployments
3. Wait 1-2 minutes
4. Hard refresh: **Ctrl+Shift+R**

### "Cannot edit file"

- Must be logged into GitHub
- Must have "Write" permission on repo
- Check invitation was accepted

### Images not loading

- Verify image uploaded to correct folder
- Check path in JSON matches exactly
- Case-sensitive: `image.jpg` ≠ `Image.jpg`

---

## 📚 Quick Reference

### Important URLs

| URL | Purpose |
|-----|---------|
| `yourdomain.com` | Live website |
| `yourdomain.com/edit` | Content editor dashboard |
| `github.com/savvops/dptf-foundation-astro` | Source code |
| `github.com/savvops/dptf-foundation-astro/tree/main/src/content` | All content files |

### JSON Validation

Use https://jsonlint.com to check your JSON is valid before saving.

### Image Optimization

Use https://squoosh.app to compress images before uploading.

---

## 🆘 Need Help?

### For Technical Issues

- Check browser console (F12) for errors
- Verify GitHub token has `repo` scope
- Confirm file paths are correct

### For Client Support

Give clients this simple guide:

```
HOW TO EDIT YOUR WEBSITE

1. Go to: yourdomain.com/edit
2. Click the section you want to change
3. Click the pencil icon
4. Make your changes
5. Click "Commit changes"
6. Your site updates in 2 minutes!

For images: Upload to /images/ folder on GitHub
```

---

## 🎯 Tech Stack

- **Framework:** [Astro](https://astro.build) v5+
- **Styling:** Tailwind CSS v3+
- **Hosting:** Cloudflare Pages
- **CMS:** GitHub (JSON files)
- **Images:** Static files in `/public/images/`

---

*Built with ❤️ for Dr. Patience Tsavnande Foundation*
