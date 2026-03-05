# TinaCMS Setup (Best for Selling to Clients)

## Why TinaCMS for Clients?

- ✅ **Visual Editor** - WYSIWYG editing, clients love it
- ✅ **Git-based** - Content in GitHub (version control, history)
- ✅ **Works with Astro** - Native integration
- ✅ **Beautiful UI** - Modern, clean interface
- ✅ **Media manager** - Drag & drop images
- ✅ **Self-hosted** - No per-user fees
- ✅ **Branch-based editing** - Safe content previews
- ✅ **100% Free & Open Source**

---

## How It Works

1. Client visits: `https://drtsavnandefoundation.com/admin/index.html`
2. TinaCMS loads with visual editor
3. Client makes changes
4. Changes saved to GitHub branch
5. You review & merge
6. Site redeploys automatically

---

## Setup Steps

### Step 1: Install TinaCMS

```bash
npm install tinacms @tinacms/cli
```

### Step 2: Create Tina Config

```typescript
// tina/config.ts
import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main",
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images/uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "site_settings",
        label: "Site Settings",
        path: "src/content/siteSettings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          { type: "string", name: "siteName", label: "Site Name" },
          { type: "string", name: "siteDescription", label: "Site Description", ui: { component: "textarea" } },
          { type: "image", name: "logo", label: "Logo" },
        ],
      },
      {
        name: "homepage",
        label: "Homepage Sections",
        path: "src/content/homepage",
        format: "json",
        fields: [
          { type: "string", name: "section", label: "Section ID", required: true },
          { type: "string", name: "title", label: "Title", required: true },
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          { type: "string", name: "buttonText", label: "Button Text" },
          { type: "string", name: "buttonHref", label: "Button URL" },
          { type: "boolean", name: "enabled", label: "Enabled", defaultValue: true },
        ],
      },
      {
        name: "board",
        label: "Board Members",
        path: "src/content/board",
        format: "json",
        fields: [
          { type: "string", name: "id", label: "ID", required: true },
          { type: "string", name: "name", label: "Name", required: true },
          { type: "string", name: "role", label: "Role" },
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          { type: "image", name: "image", label: "Photo" },
          { type: "string", name: "category", label: "Category", options: ["trustees", "advisory"] },
          { type: "number", name: "order", label: "Display Order" },
          { type: "boolean", name: "enabled", label: "Enabled", defaultValue: true },
        ],
      },
      {
        name: "programs",
        label: "Programs",
        path: "src/content/programs",
        format: "json",
        fields: [
          { type: "string", name: "id", label: "ID" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "icon", label: "Icon" },
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          { type: "object", name: "stats", label: "Statistics", list: true, fields: [
            { type: "string", name: "value", label: "Value" },
            { type: "string", name: "label", label: "Label" },
          ]},
          { type: "string", name: "highlights", label: "Highlights", list: true },
          { type: "number", name: "order", label: "Order" },
          { type: "boolean", name: "enabled", label: "Enabled", defaultValue: true },
        ],
      },
      {
        name: "faq",
        label: "FAQ Items",
        path: "src/content/faqItems",
        format: "json",
        fields: [
          { type: "string", name: "categoryId", label: "Category" },
          { type: "string", name: "question", label: "Question" },
          { type: "string", name: "answer", label: "Answer", ui: { component: "textarea" } },
          { type: "number", name: "order", label: "Order" },
          { type: "boolean", name: "enabled", label: "Enabled", defaultValue: true },
        ],
      },
      {
        name: "donation_amounts",
        label: "Donation Amounts",
        path: "src/content/donationAmounts",
        format: "json",
        fields: [
          { type: "number", name: "amount", label: "Amount (₦)" },
          { type: "string", name: "label", label: "Display Label" },
          { type: "string", name: "impact", label: "Impact Description" },
          { type: "number", name: "order", label: "Order" },
          { type: "boolean", name: "enabled", label: "Enabled", defaultValue: true },
        ],
      },
    ],
  },
});
```

### Step 3: Update package.json scripts

```json
{
  "scripts": {
    "dev": "tinacms dev -c \"astro dev\"",
    "build": "tinacms build && astro build",
    "preview": "astro preview",
    "astro": "astro"
  }
}
```

### Step 4: Create .env file

```bash
# Get these from TinaCloud (free signup)
TINA_CLIENT_ID=your-client-id
TINA_TOKEN=your-token
```

### Step 5: Sign up for TinaCloud (Free)

1. Go to https://app.tina.io/
2. Sign up with GitHub
3. Create new project
4. Select your repo
5. Get Client ID and Token
6. Add to .env file

### Step 6: Build & Deploy

```bash
npm run build
```

---

## Client Experience

### What Client Sees:

1. Go to `yourdomain.com/admin`
2. Login with GitHub (one-click)
3. See beautiful visual editor:

```
┌─────────────────────────────────────────┐
│  DPTF Website Admin              [Save] │
├─────────────────────────────────────────┤
│  📄 Pages        │  📝 Editor          │
│  ├─ Site Settings│  Title: [_______]   │
│  ├─ Homepage     │  Description:       │
│  ├─ Board        │  [                ] │
│  ├─ Programs     │  Photo: [Upload ▼]  │
│  ├─ FAQ          │                     │
│  └─ Donations    │  [Save] [Discard]   │
└─────────────────────────────────────────┘
```

### Client Workflow:

1. **Edit content** in visual editor
2. **Save** → Creates branch + commit
3. **Submit for review** (optional)
4. You **approve & merge** on GitHub
5. Site **auto-deploys**

---

## White Label Options

### Custom Branding:

```typescript
// tina/config.ts
export default defineConfig({
  // ... other config
  admin: {
    auth: {
      useLocalAuth: false, // Use TinaCloud
    },
  },
  // Customize UI
  cmsCallback: (cms) => {
    cms.flags.set("branch-switcher", true);
    return cms;
  },
});
```

---

## Pricing for Clients

### Your Costs:
- **TinaCloud**: Free (up to 2 users) or $29/month (unlimited)
- **Hosting**: Already using Cloudflare Pages (free)
- **Total: $0-29/month**

### What to Charge:
- **Setup**: $500-1,500
- **Training**: $200-500
- **Monthly**: $50-100 (maintenance + support)
- **Updates**: $75-150/hour

---

## Client Documentation Template

```markdown
# DPTF Website - Content Editor Guide

## Access the Admin
Go to: https://drtsavnandefoundation.com/admin

## Login
Click "Login with GitHub" (we've created an account for you)

## Editing Content

### 1. Navigate
- Left sidebar shows all content types
- Click to expand/collapse sections

### 2. Edit
- Click any item to edit
- Make changes in the form
- Changes save automatically as drafts

### 3. Save
- Click "Save" in top right
- This creates a "branch" (safe copy)
- We'll review and publish it

### 4. Images
- Click image fields
- Drag & drop or select from library
- Images automatically optimized

## Need Help?
Email: support@yourdomain.com
```

---

## Why TinaCMS Beats Other Options

| Feature | Decap | Directus | TinaCMS |
|---------|-------|----------|---------|
| Visual editor | ❌ | ✅ | ✅ Best |
| Astro native | ⚠️ | ⚠️ | ✅ |
| Git-based | ✅ | ❌ | ✅ |
| Easy setup | ⚠️ | ⚠️ | ✅ |
| Client-friendly | ❌ | ✅ | ✅ Best |
| Media manager | ❌ | ✅ | ✅ |
| Free | ✅ | ✅ | ✅ |
| Custom branding | ❌ | ✅ | ✅ |

---

## Next Steps

1. Sign up at https://app.tina.io/
2. Install TinaCMS (`npm install tinacms @tinacms/cli`)
3. Create tina/config.ts
4. Get Client ID & Token
5. Update build scripts
6. Deploy
7. Test admin interface
8. Create client docs
9. Hand off!

---

Want me to set this up for you now?
