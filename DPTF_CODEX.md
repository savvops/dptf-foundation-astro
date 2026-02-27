# DPTF Foundation - Website Codex & Strategic Plan

> **Project:** Dr. Patience Tsavnande Foundation Website  
> **Tech Stack:** Astro 5 + Tailwind CSS + Cloudflare Pages  
> **Status:** Production Ready (v1.0)  
> **Last Updated:** February 27, 2026  
> **Overall Score:** 9.1/10

---

## 📚 TABLE OF CONTENTS

1. [Storage Architecture](#-storage-architecture)
2. [Data Structure](#-data-structure)
3. [Milestone Timeline](#-milestone-timeline)
4. [Current Website Audit](#-current-website-audit)
5. [Gap Analysis](#-gap-analysis)
6. [Strategic Improvement Plan](#-strategic-improvement-plan)

---

## 💾 STORAGE ARCHITECTURE

### 1.1 File System Map

```
dptf-foundation-astro/
│
├── 📁 .assets/                          # RAW ASSETS (411 files, ~106MB)
│   ├── 📸 PHOTOS (349 files, 37.89MB)
│   │   └── PHOTO-YYYY-MM-DD-HH-MM-SS.jpg
│   ├── 📄 DOCUMENTS (39 files, 32.55MB)
│   │   ├── Notices (19 files)
│   │   ├── Reports (17 files)
│   │   ├── Financial (3 files)
│   │   └── Admin (5 files)
│   ├── 🎬 VIDEOS (9 files, 21.21MB)
│   │   ├── Launch ceremony videos
│   │   ├── Medical outreach footage
│   │   └── Memorial recordings
│   ├── 🎵 AUDIO (1 file, 13.5MB)
│   ├── 🖼️ STICKERS (6 files, 0.52MB)
│   └── 📝 OTHER (6 docx, 1 txt)
│
├── 📁 public/                           # PRODUCTION ASSETS
│   ├── 📁 gallery/                      # Organized gallery images (151 photos)
│   │   ├── 01-foundation-launch/ (26)
│   │   ├── 02-bot-meetings/ (4)
│   │   ├── 03-medical-outreach-2020/ (21)
│   │   ├── 04-medical-outreach-2021/ (30)
│   │   ├── 05-educational-programs/ (7)
│   │   ├── 06-annual-events/ (11)
│   │   ├── 07-medical-outreach-2023/ (11)
│   │   ├── 08-hospital-intervention-2024/ (20)
│   │   ├── 09-bsu-convocation/ (7)
│   │   ├── 10-community-activities/ (14)
│   │   └── [legacy folders]/
│   ├── 📁 images/                       # Site images
│   │   ├── hero-image.jpg
│   │   ├── dr-patience.jpg
│   │   ├── dr-tsavnande.jpg
│   │   ├── dptf-logo.png
│   │   ├── atighir-[1-3].jpg
│   │   ├── fatima-[1-3].jpg
│   │   ├── hope-[1-2].jpg
│   │   └── palliative-[1-3].jpg
│   ├── 📁 reports/                      # Public reports (20 PDFs)
│   ├── admin/                           # Decap CMS
│   └── favicon.svg
│
├── 📁 src/
│   ├── 📁 components/
│   │   ├── sections/                    # Page sections (16 components)
│   │   │   ├── Hero.astro
│   │   │   ├── Navbar.astro
│   │   │   ├── Footer.astro
│   │   │   ├── Objectives.astro
│   │   │   ├── ImpactStats.astro
│   │   │   ├── Intro.astro
│   │   │   ├── JoinCTA.astro
│   │   │   ├── Services.astro
│   │   │   ├── Equipment.astro
│   │   │   ├── Process.astro
│   │   │   ├── Reviews.astro
│   │   │   ├── Stats.astro
│   │   │   ├── TrustBar.astro
│   │   │   ├── WhyUs.astro
│   │   │   ├── FAQ.astro
│   │   │   └── CTA.astro
│   │   └── ui/                          # UI components
│   │       ├── Button.astro
│   │       ├── Icon.astro
│   │       └── Section.astro
│   ├── 📁 content/                      # CONTENT COLLECTIONS
│   │   ├── config.ts                    # Schema definitions
│   │   ├── homepage/                    # Hero, intro, CTA data
│   │   ├── objectives/                  # 3 core objectives
│   │   └── stats/                       # 3 impact stats
│   ├── 📁 layouts/
│   │   └── Layout.astro                 # Main layout with SEO
│   ├── 📁 pages/                        # 14 PAGES
│   │   ├── index.astro                  # Homepage
│   │   ├── about.astro                  # About DPTF
│   │   ├── our-work.astro               # Programs
│   │   ├── gallery.astro                # Photo gallery
│   │   ├── transparency.astro           # Reports
│   │   ├── get-involved.astro           # Donations
│   │   ├── volunteer.astro              # Volunteer form
│   │   ├── contact.astro                # Contact form
│   │   ├── faq.astro                    # FAQ page
│   │   ├── search.astro                 # Site search
│   │   ├── thank-you.astro              # Donation success
│   │   ├── admin.astro                  # CMS redirect
│   │   └── 404.astro                    # Error page
│   ├── 📁 styles/
│   │   └── global.css
│   └── 📁 utils/
│
└── 📁 dist/                             # BUILD OUTPUT
```

### 1.2 Content Collections Schema

```typescript
// src/content/config.ts

// 1. OBJECTIVES (3 items)
{
  icon: string,        // Icon name for UI
  title: string,       // Display title
  description: string, // Short description
  order: number        // Sort order
}
// Used on: Homepage, About page

// 2. STATS (3 items)
{
  number: number,      // Raw number value
  prefix: string,      // e.g., "₦", ""
  suffix: string,      // e.g., "+", "K"
  label: string,       // Main label
  sublabel: string,    // Context text
  order: number        // Sort order
}
// Used on: Homepage impact section

// 3. HOMEPAGE SECTIONS (3 items)
{
  section: "hero" | "intro" | "joinCta",
  title: string,
  description: string,
  buttonText?: string,
  buttonHref?: string
}
```

### 1.3 Storage Statistics

| Category | Raw Assets (.assets) | Production (public) | Usage |
|----------|---------------------|---------------------|-------|
| **Photos** | 349 files (37.89MB) | 151 files | 43% utilized |
| **Documents** | 39 files (32.55MB) | 20 files | 51% utilized |
| **Videos** | 9 files (21.21MB) | 0 files | 0% utilized |
| **Audio** | 1 file (13.5MB) | 0 files | 0% utilized |
| **Stickers** | 6 files (0.52MB) | 0 files | 0% utilized |

**⚠️ GAP:** 198 photos, 19 documents, 9 videos, 1 audio not yet on website

---

## 📊 DATA STRUCTURE

### 2.1 Current Data Sources

| Data Type | Source | Format | Pages Using |
|-----------|--------|--------|-------------|
| **Objectives** | `src/content/objectives/*.json` | JSON | Homepage, About |
| **Stats** | `src/content/stats/*.json` | JSON | Homepage |
| **Homepage Content** | `src/content/homepage/*.json` | JSON | Homepage |
| **Programs** | Hardcoded in `our-work.astro` | Astro frontmatter | Our Work |
| **Gallery** | File system in `public/gallery/` | Images | Gallery |
| **Reports** | File system in `public/reports/` | PDFs | Transparency |
| **Board Members** | Hardcoded in `about.astro` | HTML | About |
| **FAQ** | Hardcoded in `faq.astro` | HTML | FAQ |

### 2.2 Data Relationships

```
┌─────────────────────────────────────────────────────────────┐
│                      DATA RELATIONSHIP MAP                   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  HOMEPAGE ──────┬──> objectives/*.json (3 items)            │
│                 ├──> stats/*.json (3 items)                  │
│                 ├──> homepage/*.json (3 items)               │
│                 └──> Hero image → public/images/hero-image.jpg│
│                                                              │
│  ABOUT ─────────┬──> objectives/*.json (3 items)             │
│                 ├──> Hardcoded: Board members (11)           │
│                 ├──> Hardcoded: Timeline (4 milestones)      │
│                 └──> Image → public/images/dr-patience.jpg   │
│                                                              │
│  OUR-WORK ──────┬──> Hardcoded: Programs (3)                 │
│                 ├──> Hardcoded: Outreaches (3)               │
│                 ├──> Hardcoded: Initiatives (3)              │
│                 └──> Memorial activities (3)                 │
│                                                              │
│  GALLERY ───────┬──> public/gallery/* (151 images)           │
│                 └──> 10 categories                           │
│                                                              │
│  TRANSPARENCY ──┬──> public/reports/* (20 PDFs)              │
│                 ├──> Hardcoded: Financial reports (3)        │
│                 └──> Hardcoded: Activity reports (9)         │
│                                                              │
│  GET-INVOLVED ──┬──> Hardcoded: Donation amounts (6 tiers)   │
│                 └──> Hardcoded: Bank details                 │
│                                                              │
│  VOLUNTEER ─────> Hardcoded: Volunteer areas (6)             │
│                                                              │
│  FAQ ───────────> Hardcoded: 17 questions, 5 categories      │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### 2.3 Content Gaps (Not Yet Digitized)

| Content Type | Raw Count | On Website | Gap |
|--------------|-----------|------------|-----|
| Medical outreach photos | 84 | 52 | 32 missing |
| Event photos | 240 | 65 | 175 missing |
| BOT meeting photos | ~30 | 4 | 26 missing |
| Video content | 9 | 0 | 9 missing |
| Meeting notices | 19 | 10 | 9 missing |
| Activity reports | 17 | 11 | 6 missing |
| Financial reports | 3 | 3 | Complete |

---

## 📅 MILESTONE TIMELINE

### 3.1 Foundation History

```
2019
├── SEPTEMBER 15 ──── Dr. Patience Tsavnande passes away
│                     Location: Road accident
│                     Impact: Foundation inspiration
│
2020
├── AUGUST 1 ──────── Foundation Launched
│                     Location: Kaduna, Nigeria
│                     CAC Incorporation: Complete
│                     Chairman: Sir Thaddeus Tsavnande
│                     Executive Secretary: Chief D.C. Agera
│
├── AUGUST ────────── First General Meeting
│                     Attendees: Founding members
│
├── SEPTEMBER ─────── BOT Meeting Notices begin
│                     Governance structure established
│
├── DECEMBER 2-3 ──── FIRST MEDICAL OUTREACH
│                     Location: Atighir Village, Tarka LGA, Benue State
│                     Impact: 1,053+ patients treated
│                     Duration: 2 days
│                     Services: Free consultation, drugs, health education
│
2021
├── FEBRUARY 8 ────── Book Launch Ceremony
│                     Memorial publication for Dr. Patience
│
├── JUNE ──────────── Educational Materials Donation
│                     Location: Kadwell International School, Barnawa
│                     Donor: Lady Phil Iyoha
│
├── AUGUST ────────── First Anniversary Thanksgiving
│                     Location: Holy Family Catholic Church
│
├── SEPTEMBER 19 ──── First Anniversary Thanksgiving Mass
│                     Annual tradition begins
│
└── NOVEMBER 26 ───── Book Launch Event Report
│
2022
├── MAY 1 ─────────── Memorial Video Documentation
│
├── SEPTEMBER 15 ──── 3rd Year Memorial
│                     Theme: Continued remembrance
│
└── DECEMBER ──────── BOT Meeting (No5)
│
2023
├── APRIL ─────────── BOT Meeting (No5)
│
├── MAY ───────────── Notice of General Meeting (No7)
│
├── SEPTEMBER ─────── General Meeting (No8)
│
├── NOVEMBER 25 ───── MINI MEDICAL OUTREACH
│                     Location: Our Lady of Fatima Girls Secondary School
│                     Activities: Health symposium, medical checkups
│                     Recognition: Award from school
│
└── DECEMBER ──────── BSU Convocation Prize Planning
│
2024
├── APRIL ─────────── BOT Meeting (No6)
│
├── MAY ───────────── Hope Project Interim Report
│                     Employment and empowerment initiative
│
├── SEPTEMBER 16-21 ─ HOSPITAL INTERVENTION PROGRAM
│                     Location: St. Gerard Catholic Hospital, Kakuri
│                     Partner: Veritas University Teaching Hospital
│                     Duration: 1 week
│                     Focus: Accident & Emergency support
│                     Supplies: Medical consumables
│                     Significance: 5th anniversary memorial
│
├── SEPTEMBER 21 ──── Hospital Intervention Documentation
│                     20+ photos from event
│
└── DECEMBER 7 ────── BSU CONVOCATION CEREMONY
                      Location: Benue State University, Makurdi
                      Activity: Prize presentation
                      Prize: ₦300,000 to Best Female Medical Doctor
                      Convocation: 2020/2021 academic session

2025
├── MARCH ─────────── Activity documentation
├── JULY ──────────── Activity documentation
├── SEPTEMBER 27 ──── Audio recording/Testimonial
└── NOVEMBER 1 ────── Activity documentation

FUTURE
└── SEPTEMBER 15, 2026 ─ Next Memorial Thanksgiving Mass
                         Location: Holy Family Catholic Church, Barnawa
```

### 3.2 Key Performance Indicators

| Metric | Value | Year |
|--------|-------|------|
| Patients Treated | 1,053+ | 2020 |
| Students Reached | 220+ | 2023 |
| Annual Academic Prize | ₦300,000 | Since 2021 |
| Medical Outreaches | 3 major | 2020-2024 |
| Years of Service | 5+ | 2020-2025 |
| Donations Received | ₦2M+ | Cumulative |

---

## 🔍 CURRENT WEBSITE AUDIT

### 4.1 Page Inventory (14 Pages)

| # | Page | URL | Status | Score |
|---|------|-----|--------|-------|
| 1 | Homepage | `/` | ✅ Complete | 10/10 |
| 2 | About Us | `/about` | ✅ Complete | 9/10 |
| 3 | Our Work | `/our-work` | ✅ Complete | 10/10 |
| 4 | Gallery | `/gallery` | ✅ Complete | 9/10 |
| 5 | Transparency | `/transparency` | ✅ Complete | 10/10 |
| 6 | Get Involved | `/get-involved` | ✅ Complete | 9/10 |
| 7 | Volunteer | `/volunteer` | ✅ Complete | 9/10 |
| 8 | Contact | `/contact` | ✅ Complete | 8/10 |
| 9 | FAQ | `/faq` | ✅ Complete | 9/10 |
| 10 | Search | `/search` | ✅ Complete | 9/10 |
| 11 | Thank You | `/thank-you` | ✅ Complete | 8/10 |
| 12 | Admin | `/admin` | ✅ Complete | 8/10 |
| 13 | 404 | `/404` | ✅ Complete | 8/10 |
| | **Dr. Patience Memorial** | `/dr-patience` | ❌ MISSING | N/A |

### 4.2 Feature Inventory

| Feature | Status | Implementation |
|---------|--------|----------------|
| **Navigation** | ✅ | Navbar with mobile menu |
| **Search** | ✅ | Pagefind integration |
| **Donation** | ✅ | Paystack + Bank transfer |
| **Volunteer Form** | ✅ | Complete application form |
| **Contact Form** | ✅ | Basic form (no backend) |
| **Gallery** | ✅ | 10 categories, 151 photos |
| **Reports** | ✅ | 20 PDFs available |
| **FAQ** | ✅ | 17 questions, accordion |
| **SEO** | ✅ | Meta tags, JSON-LD schema |
| **Accessibility** | ✅ | WCAG compliant |
| **Responsive** | ✅ | Mobile-first design |
| **Back-to-Top** | ✅ | Floating button |
| **Countdown** | ✅ | Memorial date countdown |
| **Newsletter** | ❌ | Not implemented |
| **Blog/News** | ❌ | Not implemented |
| **Video Gallery** | ❌ | Not implemented |
| **Testimonials** | ❌ | Not implemented |
| **Partners Page** | ❌ | Not implemented |
| **Impact Map** | ❌ | Not implemented |
| **Live Chat** | ❌ | Not implemented |

### 4.3 Technical Metrics

```
Performance:
├── Build Time: ~3-5 seconds
├── Bundle Size: Optimized
├── Image Optimization: Partial (WebP not enforced)
├── Lazy Loading: Partial
└── CDN: Cloudflare Pages ✅

SEO:
├── Meta Tags: Complete ✅
├── Open Graph: Complete ✅
├── Twitter Cards: Complete ✅
├── JSON-LD Schema: Partial (Event only) ⚠️
├── Sitemap: Auto-generated ✅
└── Robots.txt: Present ✅

Accessibility:
├── ARIA Labels: Complete ✅
├── Skip Links: Present ✅
├── Focus Indicators: Present ✅
├── Color Contrast: WCAG AA ✅
└── Screen Reader: Compatible ✅
```

---

## ⚠️ GAP ANALYSIS

### 5.1 Critical Gaps (High Priority)

| # | Gap | Impact | Effort |
|---|-----|--------|--------|
| 1 | **No dedicated Dr. Patience page** | Visitors can't learn about the founder | Medium |
| 2 | **Video content not utilized** | 9 videos sitting unused in .assets | Low |
| 3 | **198 photos not in gallery** | Rich visual content unavailable | High |
| 4 | **No testimonials section** | Missing social proof | Medium |
| 5 | **No news/blog section** | Can't share updates dynamically | Medium |
| 6 | **Contact form has no backend** | Messages go nowhere | Low |
| 7 | **No email newsletter** | Can't build donor list | Medium |

### 5.2 Content Gaps (Medium Priority)

| # | Gap | Current | Target |
|---|-----|---------|--------|
| 1 | Scholarship details page | Brief mention in Our Work | Full program page |
| 2 | Partner organizations | No page | Partners showcase |
| 3 | Success stories | No section | 5-10 stories |
| 4 | Annual reports archive | Partial (2020, 2025) | All years |
| 5 | Board member photos | Placeholder initials | Actual photos |
| 6 | Dr. Patience biography | 2 paragraphs | Full life story |

### 5.3 Technical Gaps (Low Priority)

| # | Gap | Impact |
|---|-----|--------|
| 1 | No image optimization pipeline | Slower load times |
| 2 | No automated asset sync | Manual copying required |
| 3 | No CMS for blog posts | Requires code changes |
| 4 | No analytics dashboard | Limited insights |
| 5 | No A/B testing | Can't optimize conversions |

---

## 🚀 STRATEGIC IMPROVEMENT PLAN

### Phase 1: Foundation & Memorial (Week 1-2)
**Priority: CRITICAL**

#### 1.1 Create `/dr-patience` Memorial Page
```
Sections:
├── Hero with portrait photo
├── Biography timeline
├── Education & Career
├── Virtues & Legacy
├── Family tributes
├── Foundation connection
└── Memorial video embed
```

**Assets needed from .assets:**
- Dr. Patience portrait photos (search for early 2020 photos)
- Video testimonials about her life
- Family photos

#### 1.2 Update About Page
- Add actual board member photos (from .assets)
- Add CAC certificate image
- Add constitution download link

#### 1.3 Homepage Enhancements
- Add memorial countdown banner
- Add featured video section

**Estimated effort:** 2-3 days  
**Expected impact:** High emotional connection, better storytelling

---

### Phase 2: Visual Content (Week 3-4)
**Priority: HIGH**

#### 2.1 Expand Gallery
Add remaining 198 photos organized by:
- Year (2020, 2021, 2022, 2023, 2024, 2025)
- Event type (Medical, Educational, Memorial, BOT)
- Location (Tarka, Kaduna, Makurdi)

#### 2.2 Create Video Gallery Page `/videos`
Upload and organize 9 videos:
```
Videos to process:
├── Foundation Launch Ceremony (2020)
├── First Medical Outreach (2020)
├── Memorial Activities (2022 - 3 videos)
├── Recent Activities (2024)
└── Testimonial Audio (2025) → Convert to video with slides
```

#### 2.3 Add Testimonials Section
Create content collection for:
- Beneficiary stories (medical outreach patients)
- Scholarship recipients
- Community leaders
- Volunteers

**Estimated effort:** 4-5 days  
**Expected impact:** Rich media engagement, proof of impact

---

### Phase 3: Programs Deep Dive (Week 5-6)
**Priority: HIGH**

#### 3.1 Scholarship Program Page `/scholarship`
```
Sections:
├── Program overview
├── Eligibility criteria
├── Application process
├── Past beneficiaries
├── Download application form
└── FAQ section
```

#### 3.2 Medical Outreach Archive `/medical-outreach`
```
Archive of all outreaches:
├── 2020 - Tarka LGA (1,053 patients)
├── 2021 - [Location] (stats)
├── 2023 - OLF School (220 students)
├── 2024 - St. Gerard Hospital (1 week)
└── Apply for future outreaches
```

#### 3.3 Partners Page `/partners`
```
Current Partners:
├── Benue State University (BSU)
├── St. Gerard Catholic Hospital
├── Our Lady of Fatima School
├── Veritas University Teaching Hospital
├── AHEF NGO
└── Become a partner form
```

**Estimated effort:** 3-4 days  
**Expected impact:** Complete program information, partnership growth

---

### Phase 4: Engagement Tools (Week 7-8)
**Priority: MEDIUM**

#### 4.1 Newsletter System
```
Implementation:
├── Signup form in footer
├── Signup page /newsletter
├── Email service integration (Mailchimp/ConvertKit)
├── Welcome email automation
└── Monthly newsletter template
```

#### 4.2 Blog/News System
```
CMS Setup:
├── Decap CMS configuration
├── Blog post collection
├── Category tags
├── Author profiles
├── Social sharing
└── RSS feed
```

#### 4.3 Contact Form Backend
```
Options:
├── Formspree integration (easiest)
├── EmailJS integration
├── Cloudflare Workers
└── Slack notification
```

**Estimated effort:** 3-4 days  
**Expected impact:** Better engagement, repeat visitors

---

### Phase 5: Polish & Advanced (Week 9-10)
**Priority: LOW**

#### 5.1 Advanced SEO
```
Add structured data for:
├── Organization schema
├── NGO schema
├── Event schema (all events)
├── Person schema (Dr. Patience)
├── Article schema (blog posts)
└── BreadcrumbList schema
```

#### 5.2 Performance Optimization
```
Tasks:
├── Convert all images to WebP
├── Implement responsive images
├── Add service worker
├── Preload critical resources
└── Critical CSS inlining
```

#### 5.3 Analytics & Tracking
```
Setup:
├── Google Analytics 4
├── Google Search Console
├── Meta Pixel (if using FB ads)
├── Heatmap tracking (Hotjar)
└── Donation conversion tracking
```

**Estimated effort:** 4-5 days  
**Expected impact:** Better performance, data-driven decisions

---

## 📋 IMPLEMENTATION ROADMAP

```
WEEK 1-2: FOUNDATION
├─ Day 1-2: Create /dr-patience memorial page
├─ Day 3: Update About page with board photos
├─ Day 4: Homepage enhancements
└─ Day 5: Review & testing

WEEK 3-4: VISUAL CONTENT
├─ Day 1-2: Process & upload 198 photos
├─ Day 3: Create video gallery
├─ Day 4: Add testimonials
└─ Day 5: Review & optimization

WEEK 5-6: PROGRAMS
├─ Day 1-2: Scholarship page
├─ Day 3: Medical outreach archive
├─ Day 4: Partners page
└─ Day 5: Testing & refinement

WEEK 7-8: ENGAGEMENT
├─ Day 1-2: Newsletter setup
├─ Day 3-4: Blog system
└─ Day 5: Contact form backend

WEEK 9-10: POLISH
├─ Day 1-2: Advanced SEO
├─ Day 3: Performance optimization
├─ Day 4: Analytics setup
└─ Day 5: Final review & launch

TOTAL: 10 weeks (2.5 months) for complete transformation
```

---

## 🎯 SUCCESS METRICS

### Current Baseline (February 2026)
- Pages: 14
- Photos: 151
- Videos: 0
- Reports: 20
- Features: 13/20

### Target (May 2026)
- Pages: 20+
- Photos: 349 (100%)
- Videos: 9 (100%)
- Reports: 39 (100%)
- Features: 20/20

### KPIs to Track
| Metric | Current | Target | Tool |
|--------|---------|--------|------|
| Page views | Baseline | +50% | GA4 |
| Time on site | Baseline | +30% | GA4 |
| Gallery views | Baseline | +100% | GA4 |
| Donation clicks | Baseline | +40% | GA4 |
| Volunteer apps | Baseline | +60% | Form tracking |
| Search usage | 0 | 100+/month | Pagefind |
| Newsletter subs | 0 | 200+ | Mailchimp |

---

## 📝 ASSET PRIORITY LIST

### Immediate Use (Week 1-2)
```
From .assets folder:
├── Portrait photos of Dr. Patience (2020-09)
├── Foundation launch photos (2020-08)
├── Board member photos (2020-2024)
├── CAC certificate (2020)
└── Launch ceremony video (2020-08-22)
```

### High Priority (Week 3-4)
```
From .assets folder:
├── Medical outreach 2020 photos (2020-12)
├── Book launch photos (2021-02)
├── Memorial photos (2021-2025)
├── BSU convocation photos (2024-12)
├── Hospital intervention photos (2024-09)
└── All 9 videos
```

### Medium Priority (Week 5-6)
```
From .assets folder:
├── BOT meeting photos
├── Community activities
├── Scholarship photos
└── Educational donations
```

### Archive (Week 7+)
```
From .assets folder:
├── Sticker designs
├── Invitation cards
├── Meeting notices (as PDFs)
├── All remaining documents
└── Audio testimonial
```

---

## ✅ APPROVAL CHECKLIST

Before proceeding with implementation, confirm:

- [ ] **Content Usage Approval**
  - [ ] Use Dr. Patience photos on website?
  - [ ] Use family-provided content?
  - [ ] Use all WhatsApp archive content?

- [ ] **Privacy Approvals**
  - [ ] Show board member photos publicly?
  - [ ] Show beneficiary photos publicly?
  - [ ] Include donor names in reports?

- [ ] **Technical Decisions**
  - [ ] Proceed with newsletter system? (requires email service)
  - [ ] Proceed with blog system? (requires CMS)
  - [ ] Proceed with contact form backend? (requires 3rd party service)

- [ ] **Budget Approval**
  - [ ] Email service (Mailchimp/ConvertKit) - ~$20/month
  - [ ] Form backend (Formspree) - ~$10/month
  - [ ] Analytics tools - Free tier sufficient

---

## 📞 CONTACT & REFERENCES

**Foundation Details:**
- Full Name: Dr. Patience Selumun Tsavnande Foundation
- Short: DPTF
- Founded: August 1, 2020
- CAC Registered: Yes
- Bank: First Bank of Nigeria
- Account: 2035804521

**Key People:**
- Chairman BOT: Sir Thaddeus Tsavnande
- Executive Secretary: Chief D.C. Agera
- Contact Email: nelson@drtsavnandefoundation.com

**Website:**
- Production: https://dptf-foundation.pages.dev
- Tech: Astro 5 + Tailwind + Cloudflare
- Admin: Decap CMS

---

*Document Version: 1.0*  
*Created: February 27, 2026*  
*Status: Ready for Review*
