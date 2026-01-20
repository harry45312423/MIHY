# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Run production server
npm run lint     # ESLint check
```

## Architecture

This is a **Next.js 15 App Router** project for Jinsung (진성종합무역), a Korean building materials company.

**Tech Stack:** Next.js 15, React 19, TypeScript (strict mode), Tailwind CSS

### Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home (composed of section components)
│   ├── layout.tsx         # Root layout (Korean locale, metadata)
│   ├── globals.css        # CSS variables, global styles
│   ├── contact/           # Contact page
│   └── products/          # Product category pages
│       ├── spc/           # SPC Stone Flooring
│       ├── uvstone/       # UV Stone Panel
│       ├── ffpanel/       # FF Panel (insulation)
│       ├── ultraboard/    # Ultra Board
│       └── heatingpanel/  # Heating Panel
├── components/
│   ├── Header.tsx         # Navigation with product dropdown
│   ├── Footer.tsx         # Site footer
│   ├── ProductPageLayout.tsx  # Shared template for product pages
│   └── sections/          # Home page section components
└── data/
    ├── products.ts        # Product definitions, specs, categories
    └── company.ts         # Company info, certifications, values
```

### Key Patterns

- **Product pages** use `ProductPageLayout` component as a shared template
- **Product data** is centralized in `/src/data/products.ts` - no database
- **Path alias:** `@/*` maps to `./src/*`
- **Custom colors:** `gold` (#C9A86C) and `navy` (#1a1a2e) defined in Tailwind config
- **Language:** Korean primary with English fallbacks
