# AVID TECH USA — Website Rebuild Plan

> **Source of Truth** for the complete website rebuild.
> Last updated: 2026-01-18

---

## 🎯 Project Goal

Rebuild the current Astro portfolio into a **premium, dark-themed agency website** targeting small business owners in Georgia seeking professional web design and development services.

**Visual Direction**: Pixelmatters + Clue.io + Framer hero style — dark, minimal, confident, with glassy cards, gradient accents, and restrained motion.

---

## 📊 Current State → Target State

### Remove (ML Projects + Non-Fit)
- [ ] House Prices vs Crime & School Quality (ML)
- [ ] Protein Clustering Machine Learning
- [ ] Fit Map (workout tracking)
- [ ] Galaxy.tsx + Galaxy.css (WebGL animation)
- [ ] `ogl` dependency
- [ ] `astro-boilerplate-components` dependency

### Keep & Migrate (Web Projects)
1. The Job Ledger (jobledger.app)
2. 7Lines (logistics web app)
3. Holly Handy Hub (fullstack app)
4. UltraSound Georgia (clinic website)
5. Black Friday Deals (e-commerce)
6. FORKIFY (recipe web app)

### Add (New Client Work)
1. Lux Dentistry Group (luxdentistrygroup.com)
2. BFD UAE (bfduae.com) - Shopify
3. S2M Cabinets (s2mcabinets.com)

---

## 🗺️ Site Architecture

### Routes
```
/                                         Homepage
/services                                 Services hub
/services/[slug]                          9 service pages
/work                                     Portfolio hub
/work/[slug]                              9 case study pages
/about                                    About page
/process                                  Process page
/pricing                                  Pricing page
/contact                                  Contact page
/locations                                Locations hub (Georgia focus)
/locations/georgia                        Georgia hub (cities list)
/locations/georgia/[city]                 City hub
/locations/georgia/[city]/[service]       City-service pages (~360 pages)
/privacy                                  Privacy policy
/terms                                    Terms of service
/blog                                     Blog (migrated)
```

### Services (9 Total)
1. Website Design & Build
2. Website Redesign
3. Landing Pages
4. Maintenance & Care Plans
5. Local SEO Setup
6. Speed & Technical SEO Cleanup
7. Shopify Theme Customization
8. Brand Starter Kit
9. Analytics & Tracking Setup

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                    # Atomic components
│   │   ├── Button.astro
│   │   ├── Container.astro
│   │   ├── Section.astro
│   │   ├── GlassCard.astro
│   │   ├── GradientText.astro
│   │   └── Badge.astro
│   ├── motion/                # Animation system
│   │   ├── RevealOnScroll.astro
│   │   └── motion.ts
│   ├── forms/                 # React islands
│   │   └── ContactForm.tsx
│   └── seo/
│       ├── SEOHead.astro
│       ├── Schema.astro
│       └── Breadcrumbs.astro
├── layouts/
│   ├── BaseLayout.astro
│   ├── ServiceLayout.astro
│   ├── LocationLayout.astro
│   └── WorkLayout.astro
├── sections/                  # Homepage sections
│   ├── HeroSection.astro
│   ├── WhatWeDoSection.astro
│   ├── SelectedWorkSection.astro
│   ├── ProcessSection.astro
│   ├── ServicesGridSection.astro
│   ├── PricingSection.astro
│   ├── TestimonialsSection.astro
│   └── CTABannerSection.astro
├── partials/
│   ├── Navbar.astro
│   └── Footer.astro
├── content/                   # Astro Content Collections
│   ├── config.ts
│   ├── services/*.json        # 9 service files
│   ├── projects/*.json        # 9 project files
│   └── blog/*.md              # Migrated blog posts
├── data/
│   ├── locations/
│   │   ├── georgia-cities.json    # ~40 Georgia cities
│   │   └── nearby-cities.json
│   ├── content-pools/
│   │   ├── intros.json        # 15-30 per service
│   │   ├── benefits.json      # 15-30 per service
│   │   └── faqs.json          # 25+ per service
│   └── site-config.ts
├── utils/
│   ├── seo.ts                 # Schema generators
│   ├── hash.ts                # Deterministic selection
│   ├── locations.ts           # Location page utilities
│   └── content-selector.ts
└── pages/
    ├── index.astro
    ├── services/
    ├── work/
    ├── locations/
    ├── blog/
    └── [static pages]
```

---

## 🎨 Design System

### Colors (Tailwind Config)
```javascript
colors: {
  surface: {
    DEFAULT: '#0a0a0a',    // Near-black background
    100: '#111111',
    200: '#1a1a1a',
    300: '#262626',
  },
  text: {
    DEFAULT: '#fafafa',    // Primary text
    muted: '#a1a1aa',      // Secondary text
    subtle: '#71717a',     // Tertiary text
  },
  accent: {
    cyan: '#22d3ee',       // Gradient start
    purple: '#a855f7',     // Gradient end
  },
}
```

### Gradients
```javascript
backgroundImage: {
  'gradient-primary': 'linear-gradient(135deg, #22d3ee, #a855f7)',
  'gradient-mesh': 'radial-gradient(at 40% 20%, rgba(34,211,238,0.15) 0px, transparent 50%), ...',
}
```

### Custom Utilities
```css
.glass { bg-white/5, backdrop-blur-xl, border border-white/10 }
.glass-hover { hover:bg-white/8, hover:border-white/20, hover:-translate-y-0.5 }
.text-gradient { background-clip: text, gradient fill }
```

### Typography
- **Font**: Inter (or system-ui fallback)
- **Display**: 4.5rem / 3.75rem for heroes
- **Headings**: text-5xl to text-7xl
- **Spacing**: py-20 to py-32 for sections

### Motion (respects prefers-reduced-motion)
- **Reveal**: opacity 0→1, translateY 20→0, 600ms ease-out
- **Stagger**: 60-100ms between items
- **Hover**: translateY -2px, border brighten

---

## 🏠 Homepage Sections

1. **Hero** (Framer-style)
   - CSS gradient mesh background (no WebGL)
   - H1: "We build websites that grow your business"
   - Subhead: outcome-focused (leads, speed, clarity)
   - CTAs: "Get a Quote" (primary) + "See Our Work" (secondary)
   - Trust row: "Trusted by local businesses, clinics, e-commerce brands"

2. **What We Do** — 3-6 service cards with outcomes

3. **Selected Work** — 3-6 project tiles, hover reveals

4. **Process** — 4 steps: Discovery → Design → Build → Launch

5. **Services Grid** — Compact links to all 9 services

6. **Pricing** — Honest ranges, not detailed packages

7. **Testimonials** — Placeholder quotes (to be replaced with real ones)

8. **CTA Banner** — Glassy card with strong CTA

9. **Footer** — Links, contact, copyright

---

## 📍 Location SEO System (Georgia Only)

### Scope
- **~40 Georgia cities** × 9 services = **~360 pages**
- Focus: Atlanta metro + major GA cities
- Expandable to other states later

### Georgia Cities

**Atlanta Metro (27):**
Atlanta, Marietta, Decatur, Sandy Springs, Roswell, Alpharetta, Johns Creek, Dunwoody, Brookhaven, Smyrna, Kennesaw, Lawrenceville, Duluth, Peachtree City, Woodstock, Acworth, Canton, Douglasville, Newnan, Carrollton, Gainesville, Buford, Suwanee, Tucker, Chamblee, East Point, College Park

**Other Major GA Cities (14):**
Savannah, Augusta, Columbus, Macon, Athens, Warner Robins, Valdosta, Albany, Rome, Dalton, LaGrange, Brunswick, Hinesville, Statesboro

### Honesty Rule
- NO fake offices or addresses
- Copy: "Serving [City] remotely" or "Serving businesses in [City], Georgia"

### Content Uniqueness
- Deterministic hash: `hash(citySlug + serviceSlug)` → stable selection
- Pools per service:
  - 15-30 intro variants
  - 15-30 benefit variants
  - 25+ FAQs
- Each page gets unique combination based on hash

### City-Service Page Structure
1. Hero: "[Service] in [City], Georgia"
2. Unique intro paragraph
3. "What you get" deliverables
4. Benefits list (5 selected)
5. FAQ accordion (6 selected)
6. Nearby cities (internal links)
7. Breadcrumbs
8. CTA section

### Schema per Location Page
- BreadcrumbList
- Service (with areaServed)
- FAQPage

---

## 🔍 SEO Implementation

### Global Schema
- Organization
- WebSite
- LocalBusiness (single primary location)

### Per-Page
- Unique title, meta description, H1
- Canonical URLs
- OG/Twitter cards
- Appropriate schema type

### Technical
- sitemap.xml (all pages including generated locations)
- robots.txt (sensible defaults)
- Structured breadcrumbs on nested pages

---

## 📝 Forms

### Contact Form Fields
- Name, Email, Phone
- Business Name, City
- Service Interest (dropdown)
- Budget Range (dropdown)
- Timeline
- Message

### Implementation
- Netlify Forms compatible markup
- Hidden form-name field
- "What happens next" confirmation page
- mailto fallback

---

## 📋 Implementation Phases

### Phase 1: Foundation
- [ ] Tailwind config with design tokens
- [ ] BaseLayout with SEO components
- [ ] Core UI components (Container, Section, GlassCard, Button)
- [ ] Motion system (RevealOnScroll, IntersectionObserver)
- [ ] Navbar and Footer (pure Astro)

### Phase 2: Content & Data
- [ ] Content Collections setup (config.ts)
- [ ] 9 service JSON files
- [ ] 9 project JSON files (6 migrated, 3 new)
- [ ] Blog migration to content collections
- [ ] Site config file

### Phase 3: Core Pages
- [ ] Homepage (all sections)
- [ ] Services hub + 9 service pages
- [ ] Work hub + 9 case study pages
- [ ] About, Process, Pricing, Contact pages
- [ ] Privacy, Terms pages

### Phase 4: Location System
- [ ] Georgia cities data (~40 cities)
- [ ] Content pools (intros, benefits, FAQs)
- [ ] Hash-based content selector
- [ ] Location layouts and dynamic routes
- [ ] Internal linking (nearby cities)

### Phase 5: Polish & Deploy
- [ ] All schema markup
- [ ] Sitemap with all routes
- [ ] Performance optimization
- [ ] Accessibility review
- [ ] Netlify deployment setup

---

## ✅ Verification Checklist

1. [ ] **Dev Server**: `npm run dev` — all pages render without errors
2. [ ] **Build**: `npm run build` — successful static generation
3. [ ] **Route Check**: Verify all dynamic routes generate correctly
4. [ ] **Lighthouse**: Target Perf 90+, SEO 95+, Accessibility 90+
5. [ ] **Schema Validation**: Test with Google Rich Results Test
6. [ ] **Forms**: Submit test form on Netlify preview deploy
7. [ ] **Mobile**: Test responsive layout on mobile viewport
8. [ ] **Motion**: Verify animations work and respect reduced-motion
9. [ ] **Links**: Check all internal links resolve correctly

---

## 🚀 Commands

```bash
# Development
npm run dev

# Build
npm run build

# Preview build
npm run preview
```

---

## 📈 Future Expansion

**To add more Georgia cities:**
1. Add cities to `src/data/locations/georgia-cities.json`
2. Update `nearby-cities.json` with proximity data
3. Rebuild — new pages generate automatically

**To expand to other states:**
1. Add state data file (e.g., `florida-cities.json`)
2. Update route structure to include state
3. Rebuild — sitemap updates automatically

No code changes needed — purely data-driven.

---

## 📎 Key Decisions Log

| Decision | Choice | Reason |
|----------|--------|--------|
| Galaxy animation | Remove | Replace with CSS gradient mesh (lighter, faster) |
| Location scope | Georgia only | Focus on local market first, ~360 pages manageable |
| Fit Map project | Remove | Doesn't fit agency narrative |
| Testimonials | Placeholders | Will add real quotes later |
| Content Collections | Yes | Better maintainability than hardcoded arrays |
| Form handling | Netlify Forms | Simple, no backend needed |

---

*This document is the single source of truth for the AVID TECH USA website rebuild project.*
