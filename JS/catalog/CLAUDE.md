# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

JINSUNG Catalog is a print-ready PDF catalog generator for 진성종합무역 (JINSUNG), a Korean interior construction materials company. The app renders A4-sized catalog pages designed for PDF export via browser print (Cmd+P or "PDF로 저장" button).

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

## Tech Stack

- Next.js 16 with App Router (React 19)
- Tailwind CSS v4 with tw-animate-css
- TypeScript
- Radix UI components (dialog, select, checkbox)
- lucide-react for icons

## Architecture

### Page Structure

The entire catalog is rendered in a single page (`src/app/page.tsx`) that wraps `PrintCatalog.tsx`. The print button triggers `window.print()` with version tracking stored in localStorage.

### Core Components

- `src/components/PrintCatalog.tsx` - Main catalog renderer containing all 12 pages as `<section className="catalog-page">` blocks. Each section is exactly 210mm × 297mm (A4). This is the primary file for layout changes.
- `src/components/CoverVariants.tsx` - Cover page design variants
- `src/components/ui/*` - Reusable UI components (shadcn/ui pattern)

### Data Layer

- `src/data/products.ts` - Product database with TypeScript types. Products are organized by category arrays: `spcProducts`, `ultraBoardProducts`, `ffPanelProducts`, `uvStoneProducts`, `heatingPanelProducts`
- `src/data/catalog.ts` - Brand info, product highlights, and contact information

### Product Categories

| Category | Korean Name | Array Name |
|----------|-------------|------------|
| SPC Flooring | SPC 바닥재 | `spcProducts` |
| Ultra Board | 울트라보드 | `ultraBoardProducts` |
| FF Panel | FF 판넬 | `ffPanelProducts` |
| UV Stone | UV 스톤판넬 | `uvStoneProducts` |
| Heating Panel | 온수판넬 | `heatingPanelProducts` |

## Print/PDF Styling

Critical CSS classes in `src/app/globals.css`:
- `.print-catalog` - Container width 210mm
- `.catalog-page` - A4 dimensions (210mm × 297mm), `page-break-after: always`
- `.no-print` - Hidden when printing
- `@page { size: A4; margin: 0; }` - Page setup for PDF export

## Brand Colors

```css
--gold: #C9A86C     /* Primary accent */
--navy: #1a1a2e     /* Primary dark */
```

## Images

Product and interior images are in `public/images/` organized by product type (spc, uvstone-products, ffpanel, heatingboard, ultraboard, certificates, etc.).
