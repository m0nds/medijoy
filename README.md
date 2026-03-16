# Medijoy Aesthetics Clinic

A modern, responsive marketing website for **Medijoy Aesthetics Clinic** — a UK-based medical aesthetics clinic offering expert skin treatments, facials, advanced treatments, and personalised care.

---

## Tech stack

- **React 19** + **TypeScript**
- **Vite 7** — dev server and build
- **Tailwind CSS 4** — styling
- **React Router 7** — client-side routing
- **Lucide React** — icons
- **react-countup** — animated stats on the hero section

---

## Getting started

### Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **npm** (or yarn/pnpm)

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Runs the app at [http://localhost:5173](http://localhost:5173) with hot reload.

### Build

```bash
npm run build
```

Outputs a production build to `dist/`. Uses `tsc -b` for type-checking and Vite for bundling.

### Preview production build

```bash
npm run preview
```

Serves the `dist/` build locally so you can test the production build.

### Lint

```bash
npm run lint
```

Runs ESLint on the project.

---

## Project structure

```
src/
├── App.tsx                 # Routes and root layout wiring
├── main.tsx                # Entry point
├── index.css               # Global styles, Tailwind, CSS variables
├── components/             # Reusable UI components
│   ├── layout/
│   │   └── Layout.tsx      # Header, nav, footer, hamburger menu, back-to-top
│   ├── HeroSection.tsx     # Hero + stats (with CountUp)
│   ├── FindSkinConcern.tsx # Skin concern cards (links to detail pages)
│   ├── FindOurServices.tsx # Service cards (links to Services by category)
│   ├── SupportSkinJourney.tsx
│   ├── ChooseMedijoy.tsx
│   ├── MeetCeo.tsx
│   ├── WhatClientsSay.tsx
│   ├── ProvenResults.tsx
│   ├── Faq.tsx
│   ├── AreYouReady.tsx     # CTA + WhatsApp
│   ├── ServiceDetail.tsx   # Single service detail view
│   └── SkinConcernDetail.tsx
├── pages/                  # Route-level pages
│   ├── AboutMedijoyPage.tsx
│   ├── SkinConcernsPage.tsx
│   ├── SkinConcernDetailPage.tsx
│   ├── ServicesPage.tsx    # Category filters + ?category= in URL
│   ├── ServiceDetailPage.tsx
│   ├── MeetJoyPage.tsx
│   ├── ProvenResultsPage.tsx
│   └── FaqPage.tsx
├── data/                   # Static content and helpers
│   ├── skinConcerns.ts
│   ├── services.ts
│   ├── provenResults.ts
│   └── faqs.ts
├── hooks/
│   └── useMobile.ts        # Mobile breakpoint hook
└── assets/
    └── images/             # Images and proven results
```

---

## Features

- **Home** — Hero, skin concerns, services, journey, why Medijoy, Meet Joy, testimonials, proven results, FAQ
- **About Medijoy** — Mission, story, philosophy, “What makes us different”, closing message
- **Skin concerns** — Index + detail pages per concern (e.g. acne, hyperpigmentation) with treatments
- **Services** — Category filters (Facial Treatment, Advanced Treatment, Botox, Skin Boosters), URL `?category=...`, service detail pages with pricing and add-ons
- **Meet Joy** — Founder story, philosophy, approach, certifications
- **Proven results** — Filterable before/after gallery
- **FAQs** — Categorised accordions

**UX**

- Responsive layout (mobile-first) with a hamburger menu on small screens
- Back-to-top button on the home page when scrolled past one viewport height
- Animated stats (react-countup) when the hero stats bar enters the viewport
- Deep links: skin concern cards → detail page; service cards → Services page with the right category active

---

## Image performance

- **Critical assets** (logo, hero backgrounds) are preloaded in `index.html` and the logo uses `fetchPriority="high"`.
- **Below-the-fold images** use `loading="lazy"` and `decoding="async"` so they load as the user scrolls and don’t block the main thread.
- For even faster loads in production, compress images in `public/assets/` (e.g. with [Squoosh](https://squoosh.app/) or convert to WebP) and keep dimensions reasonable for their display size.

---

## Design tokens

Global CSS variables in `src/index.css`:

- `--medijoy-green` — Primary green
- `--medijoy-gold` — Accent (e.g. consultation fee text)
- `--medijoy-beige` — Soft background
- `--page-bg` — Page background

---

## License

Private project. All rights reserved.
