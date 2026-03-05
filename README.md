# DPTF Foundation Website

The Dr. Patience Tsavnande Foundation website rebuilt with Astro, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** [Astro](https://astro.build) v5+
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3+
- **CMS:** [Keystatic](https://keystatic.com) - Git-based, $0 cost
- **Hosting:** Cloudflare Pages (free)
- **Icons:** Custom SVG icons

## ✨ Features

- ⚡ **Lightning fast** - Astro static site generation
- 🎨 **Fully customizable** - 39+ content collections
- 🔒 **Self-hosted CMS** - No monthly fees, no vendor lock-in
- 📱 **Mobile-first** - Responsive design
- 🔍 **SEO optimized** - Built-in sitemap and meta tags
- ♿ **Accessible** - WCAG compliant

## 📁 Project Structure

```
dptf-foundation-astro/
├── public/                 # Static assets
│   └── images/            # Images
├── src/
│   ├── components/        # Reusable components
│   ├── content/           # 39+ content collections (JSON)
│   ├── layouts/           # Page layouts
│   ├── pages/             # Route pages
│   └── styles/            # Global styles
├── keystatic.config.ts    # CMS configuration
├── astro.config.mjs       # Astro config
└── README.md
```

## 🛠️ Quick Start

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

## 📝 Content Management

### Access the CMS

1. **Local development:** `http://localhost:4321/keystatic`
2. **Production:** `https://yoursite.com/admin`

### CMS Sections

| Section | Content |
|---------|---------|
| ⚙️ Site | Settings, navigation, footer, social links |
| 🏠 Homepage | Hero, stats, core values, programs |
| 👥 About | Board members, virtues, timeline |
| 📋 Our Work | Impact areas, medical outreaches, education |
| ❓ FAQ | Categories and questions |
| 🤝 Get Involved | Donation amounts and methods |
| 📊 Transparency | Reports, notices, trust badges |
| 📞 Contact | Contact information |
| 🖼️ Gallery | Gallery images |

### How It Works

1. **Edit content** in the CMS UI
2. **Changes save** to JSON files in `src/content/`
3. **Auto-deploy** to Cloudflare Pages
4. **Site updates** instantly

## 🚀 Deployment

### To Cloudflare Pages

1. Push code to GitHub
2. Connect repo to Cloudflare Pages
3. Build command: `npm run build`
4. Build output: `dist`
5. Done! Auto-deploys on every push

### Environment Variables

None required! Keystatic uses local storage (no API keys needed).

## 💼 White-Label Business Model

This setup is perfect for selling websites to clients:

### Your Costs: $0/month
- Cloudflare Pages: Free
- Keystatic CMS: Free
- Domain: ~$12/year

### Charge Clients
- Setup: $500-1,500
- Monthly: $50-100
- **Profit margin: 100%**

See `KEYSTATIC_CMS_GUIDE.md` for complete business guide.

## 📄 Pages

1. **Home** (`/`) - Hero, intro, objectives, impact stats
2. **About** (`/about`) - Foundation story, Dr. Patience's legacy
3. **Our Work** (`/our-work`) - Programs and projects
4. **Get Involved** (`/get-involved`) - Donation information
5. **Contact** (`/contact`) - Contact form and information
6. **FAQ** (`/faq`) - Frequently asked questions
7. **Transparency** (`/transparency`) - Reports and accountability

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📚 Documentation

- [Keystatic Docs](https://keystatic.com/docs)
- [Astro Docs](https://docs.astro.build)
- [Business Guide](./KEYSTATIC_CMS_GUIDE.md)

---

*Built with ❤️ for Dr. Patience Tsavnande Foundation*
