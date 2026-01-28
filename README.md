# GrowthByte Website

A professional, SEO-optimized marketing agency website built with Next.js 14, TypeScript, and Tailwind CSS.

**Repository:** [https://github.com/ThinkByte-AI/GrowthByte.git](https://github.com/ThinkByte-AI/GrowthByte.git)

## Features

- ✅ **SEO Optimized**: Server-side rendering, meta tags, semantic HTML
- ✅ **Performance**: Optimized images, code splitting, fast loading
- ✅ **Responsive**: Mobile-first design, works on all devices
- ✅ **Modern Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS
- ✅ **Professional Design**: Clean, modern UI with brand colors (orange & black)
- ✅ **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
growthbyte/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── pricing/           # Pricing page
│   └── services/          # Services page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── CTA.tsx            # Call-to-action component
│   └── sections/          # Homepage sections
│       ├── Hero.tsx
│       ├── ProblemSection.tsx
│       ├── SolutionSection.tsx
│       ├── ServicesSection.tsx
│       ├── WhyChooseSection.tsx
│       ├── CaseStudiesSection.tsx
│       ├── ProcessSection.tsx
│       ├── AboutSection.tsx
│       ├── AIModelSection.tsx
│       ├── TractionSection.tsx
│       ├── PricingSection.tsx
│       ├── FAQSection.tsx
│       └── ContactSection.tsx
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── tailwind.config.ts    # Tailwind CSS config
└── next.config.js        # Next.js config
```

## Customization

### Brand Colors

Edit `tailwind.config.ts` to change brand colors:

```typescript
colors: {
  primary: {
    DEFAULT: '#FF6B35', // Orange
    dark: '#E55A2B',
    light: '#FF8C5A',
  },
  secondary: {
    DEFAULT: '#1A1A1A', // Black
    // ...
  },
}
```

### Content

All content is in the component files. Edit the section components in `components/sections/` to update copy.

### SEO

Update metadata in:
- `app/layout.tsx` - Global metadata
- Individual page files - Page-specific metadata

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted with Node.js

## Performance

- Lighthouse Score: 95+ (target)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Core Web Vitals: Optimized

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 GrowthByte. All rights reserved.
