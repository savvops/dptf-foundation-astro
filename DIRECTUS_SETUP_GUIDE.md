# Directus CMS Setup for DPTF (Client-Ready Solution)

## Why Directus for Clients?

- ✅ **Beautiful Admin UI** - Clients love the interface
- ✅ **Self-hosted** - You control everything, no vendor lock-in
- ✅ **White-label** - Brand it as your own
- ✅ **Role-based permissions** - Control what clients can edit
- ✅ **Media library** - Easy image/file management
- ✅ **API-first** - Works with Astro, Next.js, anything
- ✅ **Free & Open Source** - No licensing fees

---

## Deployment Options

### Option 1: Railway (Easiest - Free Tier Available)

1. Go to https://railway.app/
2. Click "New Project"
3. Select "Deploy Directus"
4. Add PostgreSQL database ( Railway provides this)
5. Set environment variables
6. Deploy

**Cost**: Free tier (500 hours/month) or ~$5/month

### Option 2: Render (Free Tier)

1. Go to https://render.com/
2. Click "New Web Service"
3. Use Directus Docker image
4. Add PostgreSQL database
5. Deploy

**Cost**: Free tier or ~$7/month

### Option 3: Self-Hosted VPS (DigitalOcean, Linode, etc.)

1. Create a $5/month VPS
2. Install Docker
3. Run Directus with Docker Compose
4. Point domain to VPS

---

## Setup Instructions

### Step 1: Create Directus Project

```bash
# Create project directory
mkdir dptf-directus
cd dptf-directus

# Create docker-compose.yml
cat > docker-compose.yml << 'EOF'
version: '3'
services:
  directus:
    image: directus/directus:10.8
    ports:
      - 8055:8055
    volumes:
      - ./uploads:/directus/uploads
      - ./extensions:/directus/extensions
    environment:
      KEY: "your-random-key-here"
      SECRET: "your-random-secret-here"
      ADMIN_EMAIL: "admin@yourdomain.com"
      ADMIN_PASSWORD: "secure-password-here"
      DB_CLIENT: "pg"
      DB_HOST: "db"
      DB_PORT: "5432"
      DB_DATABASE: "directus"
      DB_USER: "directus"
      DB_PASSWORD: "db-password-here"
      WEBSOCKETS_ENABLED: "true"
    depends_on:
      - db

  db:
    image: postgres:15-alpine
    volumes:
      - ./data:/var/lib/postgresql/data
    environment:
      POSTGRES_USER: "directus"
      POSTGRES_PASSWORD: "db-password-here"
      POSTGRES_DB: "directus"
EOF

# Start it
docker-compose up -d
```

### Step 2: Configure Collections

Access Directus at `http://localhost:8055` and create these collections:

#### Collection: `site_settings`
- site_name (string)
- site_description (text)
- logo (image)
- contact_email (string)
- contact_phone (string)

#### Collection: `homepage_sections`
- section (string - hero, intro, cta)
- title (string)
- description (text)
- button_text (string)
- button_url (string)
- background_image (image)
- enabled (boolean)
- sort (integer)

#### Collection: `board_members`
- name (string)
- role (string)
- description (text)
- photo (image)
- category (select: trustees/advisory)
- order (integer)
- enabled (boolean)

#### Collection: `programs`
- title (string)
- icon (string)
- description (text)
- stats (json)
- highlights (json)
- order (integer)
- enabled (boolean)

#### Collection: `faq_items`
- category (string)
- question (string)
- answer (text)
- order (integer)
- enabled (boolean)

#### Collection: `donation_amounts`
- amount (integer)
- label (string)
- impact (string)
- order (integer)
- enabled (boolean)

### Step 3: Create API Token

1. Go to Settings → Access Control
2. Create new token
3. Save the token for Astro to use

### Step 4: Connect to Astro

Install Directus SDK:
```bash
npm install @directus/sdk
```

Create API client:
```typescript
// src/lib/directus.ts
import { createDirectus, rest, readItems, readSingleton } from '@directus/sdk';

const client = createDirectus('https://your-directus-url.com').with(rest());

export async function getSiteSettings() {
  return await client.request(readSingleton('site_settings'));
}

export async function getHomepageSections() {
  return await client.request(readItems('homepage_sections', {
    filter: { enabled: { _eq: true } },
    sort: ['sort'],
  }));
}

export async function getBoardMembers() {
  return await client.request(readItems('board_members', {
    filter: { enabled: { _eq: true } },
    sort: ['order'],
  }));
}

export async function getPrograms() {
  return await client.request(readItems('programs', {
    filter: { enabled: { _eq: true } },
    sort: ['order'],
  }));
}

export async function getFAQItems() {
  return await client.request(readItems('faq_items', {
    filter: { enabled: { _eq: true } },
    sort: ['order'],
  }));
}

export async function getDonationAmounts() {
  return await client.request(readItems('donation_amounts', {
    filter: { enabled: { _eq: true } },
    sort: ['order'],
  }));
}
```

### Step 5: Update Astro Pages

Replace content collection queries with Directus API calls:

```astro
---
// src/pages/about.astro
import Layout from '../layouts/Layout.astro';
import { getSiteSettings, getBoardMembers } from '../lib/directus';

const settings = await getSiteSettings();
const boardMembers = await getBoardMembers();
---

<Layout title={settings.site_name}>
  <!-- Use settings and boardMembers data -->
</Layout>
```

---

## Client Handoff

### What to give clients:

1. **Admin URL**: `https://cms.yourclientdomain.com`
2. **Login credentials** (admin or editor role)
3. **Simple documentation** (2-3 pages)

### Client documentation template:

```markdown
# DPTF Website - Content Management

## Login
Go to: https://cms.yourdomain.com
Email: [client-email]
Password: [provided separately]

## Managing Content

### Edit Homepage
1. Go to "Homepage Sections"
2. Click on section to edit
3. Make changes
4. Click "Save"
5. Changes appear on website immediately

### Add Board Member
1. Go to "Board Members"
2. Click "+" to create new
3. Fill in details
4. Upload photo
5. Save

### Update Contact Info
1. Go to "Site Settings"
2. Edit contact details
3. Save

## Need Help?
Contact: [your-email]
```

---

## White Labeling

### Custom Branding

1. Go to Settings → Project Settings
2. Change:
   - Project Name
   - Project Logo
   - Project Color
   - Custom CSS (optional)

### Custom Domain

Point `cms.yourclientdomain.com` to your Directus instance:
1. Add DNS record (CNAME or A record)
2. Configure reverse proxy (nginx)
3. Set up SSL certificate

---

## Pricing for Clients

### Your Costs:
- VPS Hosting: ~$5-10/month
- Domain (optional): ~$10/year
- **Total: ~$5-10/month**

### What to charge clients:
- **Setup fee**: $500-1,500 (one-time)
- **Monthly hosting**: $20-50/month
- **Content updates**: $50-100/hour (if they don't want to do it)

---

## Why This Beats Decap CMS for Clients

| Feature | Decap CMS | Directus |
|---------|-----------|----------|
| Visual editor | ❌ Markdown | ✅ Beautiful UI |
| Media management | ❌ Limited | ✅ Full library |
| User permissions | ❌ Basic | ✅ Granular roles |
| White-label | ❌ Netlify branding | ✅ Full branding |
| Client-friendly | ❌ Confusing | ✅ Intuitive |
| Self-hosted | ⚠️ Complicated | ✅ Easy |
| API | ❌ Git-based | ✅ REST/GraphQL |

---

## Next Steps

1. Choose deployment option (Railway recommended for testing)
2. Deploy Directus
3. Create collections matching your content structure
4. Import existing content
5. Set up Astro to use Directus API
6. Create client documentation
7. Hand off to client!

---

## Need Help?

I can:
- Set up Directus collections matching your current content
- Create the Astro API integration
- Write client documentation
- Configure deployment

Just let me know!
