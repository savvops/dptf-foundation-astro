# Decap CMS Setup Complete ✓

Your DPTF Foundation website is now fully configured with Decap CMS for content management!

---

## 📁 Content Structure

All content is now stored in JSON files under `src/content/` and editable via Decap CMS at `/admin`.

### Content Collections

| Collection | Description | Location |
|------------|-------------|----------|
| **Site Settings** | Site name, description, logo | `src/content/siteSettings/` |
| **Bank Details** | Account info for donations | `src/content/bankDetails/` |
| **Navigation** | Header nav links | `src/content/navigation/` |
| **Footer Links** | Quick links & resources | `src/content/footerLinks/` |
| **Social Links** | Facebook, Instagram, etc. | `src/content/socialLinks/` |
| **Trust Badges** | Footer trust indicators | `src/content/trustBadges/` |
| **Homepage** | Hero, Intro, CTA sections | `src/content/homepage/` |
| **Stats** | Impact statistics | `src/content/stats/` |
| **Objectives** | Foundation objectives | `src/content/objectives/` |
| **About Settings** | About page content | `src/content/aboutSettings/` |
| **Timeline** | Foundation & Dr. Patience history | `src/content/timeline/` |
| **Core Values** | Foundation values | `src/content/coreValues/` |
| **Dr. Patience Virtues** | Her virtues/qualities | `src/content/drPatienceVirtues/` |
| **Board** | Board members | `src/content/board/` (existing) |
| **Board Settings** | Display settings | `src/content/boardSettings/` |
| **Programs** | Medical, Education, Food | `src/content/programs/` |
| **Medical Outreaches** | Outreach events | `src/content/medicalOutreaches/` |
| **Education Initiatives** | Scholarship programs | `src/content/educationInitiatives/` |
| **Food Security** | Food items list | `src/content/foodSecurity/` |
| **Memorial Activities** | Annual memorial events | `src/content/memorialActivities/` |
| **FAQ** | Categories & questions | `src/content/faqCategories/`, `src/content/faqItems/` |
| **Donation Amounts** | Preset donation tiers | `src/content/donationAmounts/` |
| **Donation Methods** | Payment options | `src/content/donationMethods/` |
| **Impact Areas** | Where donations go | `src/content/impactAreas/` |
| **Contact Info** | Address, email, phone | `src/content/contactInfo/` |
| **Transparency** | Reports & notices | `src/content/transparencyStats/`, `financialReports/`, `activityReports/`, `meetingNotices/` |
| **Gallery** | Gallery images | `src/content/galleryImages/` |

---

## 🔧 Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    CLOUDFLARE PAGES (Hosting)                    │
│                   Your site: dptf-foundation.pages.dev          │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│              NETLIFY (CMS Authentication Only)                   │
│  ┌─────────────────┐    ┌──────────────────┐                   │
│  │ Identity Users  │───▶│   Git Gateway    │                   │
│  └─────────────────┘    └──────────────────┘                   │
│         Login at: /admin (Decap CMS interface)                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    GITHUB (Source of Truth)                      │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  Content Changes ──▶ Auto Deploy ──▶ Cloudflare Pages  │   │
│  │  All content stored in: src/content/**/*.json           │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🚀 Getting Started

### 1. Set up Netlify Identity (for CMS authentication)

Since your site is hosted on Cloudflare Pages, you need Netlify **only for authentication**:

1. Go to https://app.netlify.com/
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** and select your repository: `savvops/dptf-foundation-astro`
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy site**

6. After deploy, go to **Site configuration → Identity**
7. Click **Enable Identity**
8. Set **Registration** = "Invite only" (recommended)
9. Go to **Identity → Services** and enable **Git Gateway**
10. Go to **Identity → Users** and **Invite yourself** (your email)

### 2. Access the CMS

Once setup is complete:

1. Visit: `https://dptf-foundation.pages.dev/admin/`
2. Login with the email/password you set in Netlify Identity
3. You'll see all content collections in the sidebar

### 3. Making Edits

1. Navigate to any collection in the CMS sidebar
2. Click on an item to edit
3. Make your changes
4. Click **Save** (this commits to GitHub)
5. Cloudflare Pages will auto-deploy the changes

---

## 📋 Content Management Guide

### Adding a New Board Member

1. Go to **Board Members** in CMS
2. Click **New Board Member**
3. Fill in:
   - ID: unique identifier (e.g., "jane-doe")
   - Name: Full name
   - Role: Title/position
   - Description: Short bio
   - Image: Upload photo
   - Category: trustees or advisory
   - Order: display order number
4. Save

### Updating Donation Amounts

1. Go to **Donation Amounts** in CMS
2. Edit existing amounts or add new ones
3. Each amount needs:
   - Amount (number in Naira)
   - Label (display text like "₦5,000")
   - Impact description

### Adding a New FAQ

1. First, ensure the **FAQ Category** exists (or create one)
2. Go to **FAQ Items**
3. Click **New FAQ Item**
4. Select the Category from the dropdown
5. Add question and answer
6. Save

### Adding Transparency Reports

1. Go to **Financial Reports** or **Activity Reports**
2. Upload the PDF file
3. Fill in title, date, description
4. Save

---

## 🔒 Security Notes

- **Registration**: Set to "Invite only" in Netlify Identity
- **Git Gateway**: Required for Decap to commit changes
- **Users**: Only invited users can access the CMS
- **Branch protection**: Consider protecting your main branch on GitHub

---

## 🛠️ Troubleshooting

### "Failed to load config.yml" Error

- Ensure `public/config.yml` exists and is deployed
- Check browser console for 404 errors
- Verify the file is in the dist folder after build

### Can't Login to CMS

- Make sure you're using **Netlify Identity** credentials, not Netlify dashboard login
- Check that Git Gateway is enabled in Netlify
- Verify your email is invited in Identity → Users

### Changes Not Showing on Site

- Check Cloudflare Pages deployment status
- Verify the JSON files were updated in GitHub
- Clear browser cache and CDN cache if needed

---

## 📁 File Summary

**New/Updated Files:**

- `src/content/config.ts` - All collection schemas
- `public/config.yml` - Decap CMS configuration
- `public/admin/index.html` - Admin interface
- `src/content/**/*.json` - All content files (100+ files)

**Updated Page Files:**

- `src/components/sections/Navbar.astro` - CMS-driven nav
- `src/components/sections/Footer.astro` - CMS-driven footer
- `src/pages/about.astro` - CMS-driven content
- `src/pages/contact.astro` - CMS-driven content
- `src/pages/faq.astro` - CMS-driven content
- `src/pages/our-work.astro` - CMS-driven content
- `src/pages/get-involved.astro` - CMS-driven content
- `src/pages/transparency.astro` - CMS-driven content

---

## ✅ What's Now Editable via CMS

- [x] Site name, logo, favicon
- [x] Navigation links
- [x] Footer content & links
- [x] Contact information
- [x] Social media links
- [x] Homepage hero, intro, CTA sections
- [x] Impact statistics
- [x] Foundation objectives
- [x] About page all sections
- [x] Timeline events
- [x] Core values
- [x] Dr. Patience bio & virtues
- [x] Board members
- [x] Programs (Medical, Education, Food)
- [x] Medical outreach events
- [x] Education initiatives
- [x] Food security items
- [x] Memorial activities
- [x] FAQ categories & questions
- [x] Donation amounts
- [x] Donation methods
- [x] Impact areas
- [x] Transparency reports
- [x] Meeting notices
- [x] Trust badges

---

## 🎯 Next Steps

1. ✅ Deploy to Cloudflare Pages
2. ✅ Set up Netlify Identity
3. ✅ Invite yourself as admin user
4. ✅ Test the CMS at `/admin`
5. ✅ Make a test edit
6. ✅ Verify changes appear on site

---

## 📚 Additional Resources

- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Netlify Identity Docs](https://docs.netlify.com/visitor-access/identity/)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)

---

**Your website is now fully CMS-enabled! 🎉**
