# GrowthByte Website - Repository Documentation

**Last Updated:** 2024  
**Repository:** https://github.com/ThinkByte-AI/GrowthByte.git  
**Website:** https://growthbyte.com

---

## Table of Contents

1. [Overview](#overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [How Things Work](#how-things-work)
5. [Sitemap & Routing](#sitemap--routing)
6. [Component Architecture](#component-architecture)
7. [Configuration Files](#configuration-files)
8. [Development Workflow](#development-workflow)
9. [Key Features](#key-features)
10. [SEO & Performance](#seo--performance)

---

## Overview

GrowthByte Website is a modern, SEO-optimized marketing agency website built with Next.js 14 App Router. It showcases GrowthByte's AI-powered marketing services with a focus on performance, accessibility, and user experience.

### Purpose
- Marketing agency website for GrowthByte
- Showcase services (SEO, PPC, Social Media, Email Marketing, Content Design)
- Generate leads through contact forms
- Provide information about the company and team

### Key Characteristics
- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Architecture:** Component-based, server-side rendered
- **Performance:** Optimized for Core Web Vitals
- **SEO:** Fully optimized with structured data

---

## Technology Stack

### Core Dependencies
- **Next.js** `^14.2.0` - React framework with App Router
- **React** `^18.3.0` - UI library
- **React DOM** `^18.3.0` - React rendering

### Development Dependencies
- **TypeScript** `^5.3.3` - Type safety
- **Tailwind CSS** `^3.4.1` - Utility-first CSS framework
- **PostCSS** `^8.4.33` - CSS processing
- **Autoprefixer** `^10.4.17` - CSS vendor prefixing
- **ESLint** `^8.56.0` - Code linting
- **ESLint Config Next** `^14.2.0` - Next.js ESLint rules

### Build Tools
- **SWC** - Fast Rust-based compiler (enabled in Next.js config)
- **Next.js Image Optimization** - Automatic image optimization
- **Code Splitting** - Automatic route-based code splitting

---

## Project Structure

```
GrowthByte-Website/
├── app/                          # Next.js App Router directory
│   ├── layout.tsx               # Root layout with metadata & global structure
│   ├── page.tsx                 # Homepage (/) - main landing page
│   ├── globals.css              # Global styles & Tailwind imports
│   ├── opengraph-image.tsx      # Open Graph image generation
│   ├── robots.ts                # robots.txt generation
│   ├── sitemap.ts               # sitemap.xml generation
│   │
│   ├── about/                   # About page route
│   │   └── page.tsx
│   ├── blog/                    # Blog page route
│   │   └── page.tsx
│   ├── contact/                 # Contact page route
│   │   └── page.tsx
│   ├── pricing/                 # Pricing page route
│   │   └── page.tsx
│   └── services/                # Services page route
│       └── page.tsx
│
├── components/                   # React components
│   ├── Header.tsx               # Site navigation header (sticky)
│   ├── Footer.tsx               # Site footer
│   ├── CTA.tsx                  # Reusable call-to-action component
│   │
│   └── sections/                # Homepage section components
│       ├── Hero.tsx             # Hero/hero section
│       ├── ProblemSection.tsx   # Problem statement section
│       ├── SolutionSection.tsx  # Solution presentation
│       ├── ServicesSection.tsx  # Services showcase
│       ├── WhyChooseSection.tsx # Why choose GrowthByte
│       ├── CaseStudiesSection.tsx # Client case studies
│       ├── ProcessSection.tsx   # Process/workflow section
│       ├── AboutSection.tsx     # About company section
│       ├── AIModelSection.tsx   # AI model explanation
│       ├── TractionSection.tsx  # Traction/metrics section
│       ├── PricingSection.tsx   # Pricing information (currently hidden)
│       ├── FAQSection.tsx       # Frequently asked questions
│       ├── ContactSection.tsx   # Contact form section
│       └── NewsletterSection.tsx # Newsletter signup
│
├── lib/                         # Utility libraries & constants
│   ├── constants.ts             # Navigation, contact info, company data
│   ├── types.ts                 # TypeScript type definitions
│   ├── utils.ts                 # Utility functions
│   └── structured-data.ts       # JSON-LD schema for SEO
│
├── docs/                        # Documentation
│   └── stories/                 # User stories/requirements
│       └── 1.1.website-verification-checklist.md
│
├── .bmad-core/                  # BMAD agent configuration
│   └── core-config.yaml         # Project configuration for agents
│
├── package.json                 # Dependencies & scripts
├── package-lock.json            # Locked dependency versions
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── next.config.js               # Next.js configuration
├── README.md                    # Project readme
├── DEPLOYMENT.md                # Deployment guide
└── OPTIMIZATION_SUMMARY.md      # Performance optimization notes
```

---

## How Things Work

### Application Architecture

#### 1. **Next.js App Router**
The application uses Next.js 14's App Router, which provides:
- **File-based routing:** Each folder in `app/` becomes a route
- **Server Components by default:** Components render on the server for better performance
- **Client Components:** Marked with `'use client'` for interactivity
- **Layouts:** `layout.tsx` wraps pages with shared UI (Header, Footer)
- **Metadata API:** SEO metadata defined in each page

#### 2. **Routing System**

**Route Structure:**
```
/                    → app/page.tsx (Homepage)
/about               → app/about/page.tsx
/services            → app/services/page.tsx
/pricing             → app/pricing/page.tsx
/contact             → app/contact/page.tsx
/blog                → app/blog/page.tsx
```

**How Routing Works:**
- Next.js automatically creates routes from the `app/` directory structure
- Each `page.tsx` file exports a default React component
- Layouts (`layout.tsx`) wrap child routes
- Dynamic routes can be created with `[param]` folders

#### 3. **Component Rendering**

**Server Components (Default):**
- Render on the server
- No JavaScript sent to client
- Can access server-side resources
- Better performance and SEO

**Client Components:**
- Marked with `'use client'` directive
- Render on client-side
- Can use React hooks (useState, useEffect, etc.)
- Required for interactivity

**Example Pattern:**
```typescript
// Server Component (app/page.tsx)
import Hero from '@/components/sections/Hero' // Server Component

// Client Component (components/Header.tsx)
'use client'
import { useState } from 'react'
```

#### 4. **Dynamic Imports & Code Splitting**

The homepage uses dynamic imports for below-the-fold content:
```typescript
const WhyChooseSection = dynamic(() => import('@/components/sections/WhyChooseSection'))
```
This improves initial page load by lazy-loading sections that aren't immediately visible.

#### 5. **Styling System**

**Tailwind CSS:**
- Utility-first CSS framework
- Classes defined in `tailwind.config.ts`
- Custom colors: Primary (Orange #FF6B35), Secondary (Black #1A1A1A)
- Responsive design with breakpoint prefixes (md:, lg:, xl:)

**Global Styles:**
- Defined in `app/globals.css`
- Includes Tailwind directives
- Custom utility classes (e.g., `container-custom`, `btn-primary`)

#### 6. **Data Flow**

**Constants & Configuration:**
- Navigation items: `lib/constants.ts` → `NAVIGATION_ITEMS`
- Contact info: `lib/constants.ts` → `CONTACT_INFO`
- Company info: `lib/constants.ts` → `COMPANY_INFO`
- Types: `lib/types.ts` → Shared TypeScript interfaces

**Component Data:**
- Most content is hardcoded in component files
- No external API calls currently
- Structured data for SEO in `lib/structured-data.ts`

#### 7. **SEO Implementation**

**Metadata:**
- Global metadata in `app/layout.tsx`
- Page-specific metadata in each `page.tsx` file
- Open Graph tags for social sharing
- Twitter Card metadata

**Structured Data (JSON-LD):**
- Organization schema
- Website schema
- Service schema
- Injected in root layout `<head>`

**Sitemap & Robots:**
- `app/sitemap.ts` - Generates `/sitemap.xml`
- `app/robots.ts` - Generates `/robots.txt`

---

## Sitemap & Routing

### Sitemap Structure

The sitemap is automatically generated by `app/sitemap.ts`:

| URL | Priority | Change Frequency | Last Modified |
|-----|----------|------------------|---------------|
| `/` (Homepage) | 1.0 | Monthly | Auto |
| `/services` | 0.9 | Monthly | Auto |
| `/about` | 0.8 | Monthly | Auto |
| `/pricing` | 0.8 | Monthly | Auto |
| `/contact` | 0.8 | Monthly | Auto |
| `/blog` | 0.7 | Weekly | Auto |

**Access:** https://growthbyte.com/sitemap.xml

### Navigation Structure

**Main Navigation (Header):**
- Services → `/services`
- Case Studies → `/#case-studies` (anchor link)
- Process → `/#process` (anchor link)
- About → `/about`
- Contact → `/contact`
- Get Started (CTA) → `/contact`

**Footer Navigation:**
- Defined in `components/Footer.tsx`
- Includes links to all main pages
- Social media links (currently placeholders)

### Page Hierarchy

```
Homepage (/)
├── Hero Section
├── Services Section
├── Why Choose Section
├── Process Section
├── FAQ Section
└── Contact Section

About (/about)
├── Hero Banner
├── About Section (founders, story)
└── CTA Section

Services (/services)
├── Hero Banner
└── Services Section (detailed)

Pricing (/pricing)
└── Pricing Section (currently hidden in nav)

Contact (/contact)
└── Contact Form Section

Blog (/blog)
└── Blog listing (placeholder)
```

---

## Component Architecture

### Component Types

#### 1. **Layout Components**
- **`Header.tsx`** - Sticky navigation header
  - Desktop menu with hover effects
  - Mobile hamburger menu
  - Responsive design (64dp mobile, 72dp desktop)
  - Client component (uses useState for mobile menu)

- **`Footer.tsx`** - Site footer
  - Company information
  - Navigation links
  - Social media links
  - Contact information

#### 2. **Page Components**
Each route has a `page.tsx` that:
- Defines page-specific metadata
- Imports and renders section components
- Provides page-specific hero/banner sections

#### 3. **Section Components**
Located in `components/sections/`:
- **Reusable:** Can be used on multiple pages
- **Self-contained:** Each section manages its own content
- **Server Components:** Most are server components for performance
- **Responsive:** All sections are mobile-first responsive

**Key Sections:**
- `Hero.tsx` - Main hero section with CTA
- `ServicesSection.tsx` - Service cards with features
- `CaseStudiesSection.tsx` - Client testimonials and results
- `ProcessSection.tsx` - Step-by-step process visualization
- `FAQSection.tsx` - Accordion-style FAQ
- `ContactSection.tsx` - Contact form

#### 4. **Utility Components**
- **`CTA.tsx`** - Reusable call-to-action button/component
  - Accepts primary/secondary button props
  - Customizable styling via className

### Component Patterns

**Server Component Pattern:**
```typescript
// components/sections/Hero.tsx
export default function Hero() {
  return (
    <section>
      {/* Content */}
    </section>
  )
}
```

**Client Component Pattern:**
```typescript
// components/Header.tsx
'use client'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // Interactive logic
}
```

**Dynamic Import Pattern:**
```typescript
// app/page.tsx
const FAQSection = dynamic(() => import('@/components/sections/FAQSection'))
```

---

## Configuration Files

### 1. **next.config.js**
```javascript
{
  reactStrictMode: true,           // React strict mode
  images: {
    formats: ['image/avif', 'image/webp'],  // Modern image formats
    deviceSizes: [...],            // Responsive image sizes
  },
  compress: true,                  // Gzip compression
  poweredByHeader: false,          // Hide X-Powered-By header
  swcMinify: true,                 // Use SWC minifier
}
```

### 2. **tailwind.config.ts**
- **Colors:**
  - Primary: Orange (#FF6B35) with dark/light variants
  - Secondary: Black (#1A1A1A) with light/dark variants
  - Accent: Blue (#4A90E2)
- **Font:** Inter (from Google Fonts)
- **Content paths:** Scans app/, components/, pages/ for classes

### 3. **tsconfig.json**
- TypeScript configuration
- Path aliases: `@/` → root directory
- Strict mode enabled
- Next.js optimizations

### 4. **package.json Scripts**
```json
{
  "dev": "next dev",           // Development server (localhost:3000)
  "build": "next build",       // Production build
  "start": "next start",       // Start production server
  "lint": "next lint"          // Run ESLint
}
```

---

## Development Workflow

### Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```
   Visit: http://localhost:3000

3. **Build for Production:**
   ```bash
   npm run build
   npm start
   ```

### Development Best Practices

1. **File Naming:**
   - Components: PascalCase (e.g., `Header.tsx`)
   - Pages: `page.tsx` (Next.js convention)
   - Utilities: camelCase (e.g., `utils.ts`)

2. **Component Organization:**
   - Page-specific sections in `components/sections/`
   - Shared components in `components/`
   - Utilities in `lib/`

3. **Styling:**
   - Use Tailwind utility classes
   - Custom classes in `globals.css` if needed
   - Responsive: mobile-first approach

4. **TypeScript:**
   - Define types in `lib/types.ts` for shared types
   - Use interfaces for component props
   - Enable strict mode

### Code Structure Guidelines

- **Server Components by default** - Only use `'use client'` when needed
- **Dynamic imports** - For below-the-fold content
- **Metadata in pages** - Each page defines its own SEO metadata
- **Constants centralized** - All constants in `lib/constants.ts`

---

## Key Features

### 1. **SEO Optimization**
- ✅ Server-side rendering (SSR)
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags
- ✅ Twitter Card metadata
- ✅ JSON-LD structured data
- ✅ Semantic HTML
- ✅ Sitemap.xml generation
- ✅ Robots.txt configuration

### 2. **Performance**
- ✅ Image optimization (Next.js Image component)
- ✅ Code splitting (automatic route-based)
- ✅ Dynamic imports for lazy loading
- ✅ SWC minification
- ✅ Gzip compression
- ✅ Font optimization (Inter with display: swap)

### 3. **Accessibility**
- ✅ Semantic HTML elements
- ✅ ARIA labels where needed
- ✅ Skip to main content link
- ✅ Keyboard navigation support
- ✅ Focus states on interactive elements

### 4. **Responsive Design**
- ✅ Mobile-first approach
- ✅ Breakpoints: sm, md, lg, xl
- ✅ Touch-friendly targets (48dp minimum)
- ✅ Responsive typography
- ✅ Flexible layouts

### 5. **User Experience**
- ✅ Sticky navigation header
- ✅ Smooth scroll behavior
- ✅ Hover effects and transitions
- ✅ Loading states (where applicable)
- ✅ Clear call-to-action buttons

---

## SEO & Performance

### SEO Implementation

**Metadata Strategy:**
- Global defaults in `app/layout.tsx`
- Page-specific overrides in individual pages
- Template system: `%s | GrowthByte`

**Structured Data:**
- Organization schema (company info)
- Website schema (site-wide)
- Service schema (services offered)
- All injected via JSON-LD in `<head>`

**Technical SEO:**
- Clean URLs (no query parameters)
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for images (when added)
- Internal linking structure

### Performance Optimizations

**Core Web Vitals Targets:**
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

**Optimization Techniques:**
1. **Code Splitting:** Automatic route-based splitting
2. **Dynamic Imports:** Lazy load below-the-fold sections
3. **Image Optimization:** Next.js Image component with modern formats
4. **Font Optimization:** Preload with display: swap
5. **Minification:** SWC for fast compilation
6. **Compression:** Gzip enabled

**Performance Monitoring:**
- Lighthouse audits recommended
- Core Web Vitals monitoring
- Real User Monitoring (RUM) if implemented

---

## Additional Notes

### Current State

**Active Features:**
- All main pages functional
- Navigation working
- SEO fully implemented
- Performance optimizations in place

**Hidden/Disabled:**
- Pricing page link in navigation (commented out)
- Pricing section on homepage (commented out)
- Social media links (placeholders)

### Future Enhancements

**Potential Additions:**
- Backend API for contact form submission
- Blog functionality with CMS integration
- Analytics integration (Google Analytics, etc.)
- A/B testing capabilities
- Multi-language support (i18n)
- Dark mode toggle

### Deployment

**Recommended Platform:** Vercel (Next.js optimized)
**Alternative Platforms:** Netlify, AWS Amplify, DigitalOcean

See `DEPLOYMENT.md` for detailed deployment instructions.

---

## Contact & Support

**Repository:** https://github.com/ThinkByte-AI/GrowthByte.git  
**Website:** https://growthbyte.com  
**Contact Email:** harsha@thinkbyte.ai  
**Phone:** +91-8904879011

---

**Document Version:** 1.0  
**Last Updated:** 2024
