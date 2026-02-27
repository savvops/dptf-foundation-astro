# DPTF Foundation Website

The Dr. Patience Tsavnande Foundation website rebuilt with Astro, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** [Astro](https://astro.build) v5+
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3+
- **Icons:** Custom SVG icons
- **Hosting:** Cloudflare Pages
- **CMS:** Decap CMS (Git-based)

## Project Structure

```
dptf-foundation-astro/
├── public/                 # Static assets
│   ├── admin/             # Decap CMS admin panel
│   │   ├── config.yml     # CMS configuration
│   │   └── index.html     # Admin entry
│   └── images/            # Images
├── src/
│   ├── components/
│   │   ├── sections/      # Page sections
│   │   │   ├── Navbar.astro
│   │   │   ├── Hero.astro
│   │   │   ├── Footer.astro
│   │   │   └── ...
│   │   └── ui/            # Reusable UI components
│   │       ├── Button.astro
│   │       └── Icon.astro
│   ├── content/           # Content collections
│   │   └── config.ts      # Schema definitions
│   ├── layouts/
│   │   └── Layout.astro   # Base layout with SEO
│   ├── pages/
│   │   ├── index.astro    # Homepage
│   │   ├── about.astro    # About page
│   │   ├── our-work.astro # Our Work page
│   │   ├── get-involved.astro # Get Involved page
│   │   ├── contact.astro  # Contact page
│   │   └── admin.astro    # CMS redirect
│   └── styles/
│       └── global.css     # Tailwind + custom CSS
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── wrangler.toml          # Cloudflare deployment config
└── README.md
```

## Pages

1. **Home** (`/`) - Hero, intro, objectives, impact stats, CTA
2. **About** (`/about`) - Foundation story, Dr. Patience's legacy, timeline
3. **Our Work** (`/our-work`) - Programs and projects showcase
4. **Get Involved** (`/get-involved`) - Donation information
5. **Contact** (`/contact`) - Contact form and information

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site auto-deploys to Cloudflare Pages on push to `main`. Configure these secrets in GitHub:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## Content Management

Access the CMS at `https://yoursite.pages.dev/admin/`

1. Enable Identity on Cloudflare Pages
2. Configure Git Gateway
3. Login with credentials

---

*Built with ❤️ for Dr. Patience Tsavnande Foundation*
