# Glenburn Tyres — Next.js Migration

Full migration of `glenburn-website-mockup.html` (single-file mockup, 10 screens) into a
**Next.js 14 (App Router) + TypeScript + SCSS + Redux Toolkit** application with zero
UI or logic changes.

## Stack

| Layer    | Tech                                    |
| -------- | --------------------------------------- |
| Framework| Next.js 14 (App Router, static prerender)|
| Language | TypeScript (strict)                     |
| Styling  | SCSS (global partials, identical selectors) |
| State    | Redux Toolkit + react-redux (typed hooks) |
| Fonts    | next/font/google (Archivo, Barlow, IBM Plex Mono) |

## Screens → Routes

| # | Mockup screen          | Route                                   |
| - | ---------------------- | --------------------------------------- |
| 01| Home                   | `/`                                     |
| 02| Tyre results           | `/tyres`                                |
| 03| Product + booking      | `/tyres/[slug]` (4 SSG tyres)           |
| 04| Checkout               | `/checkout`                             |
| 05| Confirmation           | `/confirmation`                         |
| 06| Shock Shop             | `/shock-shop`                           |
| 07| Local landing          | `/locations/avondale-rosebank-tyres`    |
|   | └ sister pages         | `/locations/new-lynn-tyres-suspension`, `/locations/glendene-titirangi-tyres` (+ local JSON-LD) |
| 08| FAQ hub                | `/faqs` (+ FAQPage JSON-LD)             |
| 09| Book / Quote           | `/book`                                 |
| 10| About + Contact        | `/about` (+ AutoRepair JSON-LD)         |

The prototype tab bar (`protobar`) has been removed from the rendered app at
the client's request; the component and its styles are kept in the repo but no
longer mount. The site header is now the top-most chrome and sticks to `top: 0`.

## Logic parity map

| Mockup JS behaviour                    | Next.js implementation                          |
| -------------------------------------- | ----------------------------------------------- |
| `go(id)` screen switching              | `next/link` + App Router navigation             |
| `.screen` fade animation on switch     | `.screen.on` wrapper in root layout             |
| `.qbtn` qty toggle (PDP / Book)        | `productSlice.qty` / `bookingSlice.timeOfDay`   |
| `.slot` select (disabled stays off)    | `productSlice.slotId`                           |
| `.payopt` radio/checkbox highlight     | `checkoutSlice.payment` / `bookingSlice.services` |
| `.faq .q` accordion +/− swap           | local `useState` per item (same defaults)       |
| Header quote count (0 → 4 on PDP)      | `quoteSlice.count`, synced from PDP qty         |
| "Book this fitting" adds to quote      | `addToQuote` then navigate to `/checkout`       |

Results-page filter checkboxes are wired to `filtersSlice` (initialised to the
mockup's pre-checked state); the visible card list matches the mockup exactly
("Showing 4 of 14"). The sort select is fully functional — "Recommended for your
car" (default) preserves the mockup's card order; the other three options sort
by price, tread life and wet grip.

## Design v2.0 audit (PDF)

`Glenburn-Tyres-Website-Mockup.pdf` (Marketinn deck, August 2026) was OCR-audited
against this codebase screen by screen: all copy, prices, specs, filter counts,
schema notes and design-decision blocks match 1:1. The deck packages the same
10 screens the HTML mockup contains — no content drift, no code changes required.

## Structure

```
glenburn-nextjs/
├── public/
│   └── images/                     # extracted photo assets
├── scripts/
│   └── extract-images.mjs          # base64 → JPG extractor
└── src/
    ├── app/                        # routing layer only (thin pages)
    │   ├── layout.tsx              # fonts, StoreProvider, Protobar, frame
    │   ├── page.tsx                # /            → HomeView
    │   ├── tyres/
    │   │   ├── page.tsx            # /tyres       → TyreResultsView
    │   │   └── [slug]/page.tsx     # SSG tyre detail → TyreDetailView
    │   ├── checkout/page.tsx       # → CheckoutView
    │   ├── confirmation/page.tsx   # → ConfirmationView
    │   ├── shock-shop/page.tsx     # → ShockShopView
    │   ├── locations/avondale-rosebank-tyres/page.tsx
    │   ├── faqs/page.tsx           # + FAQPage JSON-LD
    │   ├── book/page.tsx           # → BookingView
    │   └── about/page.tsx          # + AutoRepair JSON-LD
    ├── components/
    │   ├── ui/                     # shared primitives (PhotoHero, PageHead, JsonLd)
    │   ├── features/               # one folder per domain feature
    │   │   ├── home/               # HomeView, QuickQuote
    │   │   ├── services/           # ServicesView
    │   │   ├── tyre-results/       # TyreResultsView, ProductCard
    │   │   ├── tyre-detail/        # TyreDetailView (buy box)
    │   │   ├── checkout/           # CheckoutView, ConfirmationView
    │   │   ├── booking/            # BookingView
    │   │   ├── contact/            # ContactView
    │   │   ├── faq/                # FaqSection, FaqItem
    │   │   ├── shock-shop/         # ShockShopView
    │   │   ├── locations/          # LocalLandingView, SisterLocationView
    │   │   └── about/              # AboutView
    │   └── layout/                 # Protobar, Topbar, SiteHeader (+ drawer), SiteFooter, MobileNav
    ├── data/                       # single source of truth for ALL site content
    │   ├── index.ts                # barrel
    │   ├── site.ts                 # NAP, hours, brand constants
    │   ├── navigation.ts           # MAIN_NAV, PROTO_TABS
    │   ├── home.ts                 # VALUES, SERVICES, BRANDS, REVIEWS, AREAS, HERO_BADGES, QUICK_SERVICES
    │   ├── services.ts             # SERVICES (service-line pages)
    │   ├── shock-shop.ts           # SIGNS, PROCESS, HERO_BRANDS
    │   ├── tyres.ts                # TYRES, PDP_DETAIL, RESULTS_META, QTY_OPTIONS
    │   ├── filters.ts              # FILTER_GROUPS (+ FilterGroup type)
    │   ├── checkout.ts             # PAYMENT_OPTIONS, INITIAL_CHECKOUT (+ CheckoutState)
    │   ├── confirmation.tsx        # CONFIRMATION_ROWS (JSX content)
    │   ├── booking.ts              # BOOKING_SERVICES, INITIAL_BOOKING (+ BookingState)
    │   ├── product.ts              # INITIAL_PRODUCT (+ ProductState)
    │   ├── quote.ts                # INITIAL_QUOTE (QuoteItem, seed)
    │   ├── locations.ts            # SISTER_LOCATIONS, LANDING_LOCATIONS
    │   └── faqs.ts                 # FAQ_GROUPS
    ├── lib/                        # helpers (format.ts, schema.ts JSON-LD builders)
    ├── store/                      # pure Redux logic only — no literal content
    │   ├── StoreProvider.tsx, index.ts, hooks.ts
    │   └── slices/                 # each imports its types + seed data from data/
    ├── styles/                     # 7-1 SCSS architecture
    │   ├── abstracts/              # design tokens (:root variables)
    │   ├── base/                   # reset, typography, utilities, presentation
    │   ├── layout/                 # protobar, topbar, header, mobilenav, footer, responsive
    │   ├── components/             # buttons, hero, quick-quote, sections…
    │   ├── pages/                  # per-screen sections (results, pdp…)
    │   └── globals.scss            # single entry, original cascade order kept
    └── types/                      # shared TypeScript interfaces + barrel
```

Each folder exposes a barrel `index.ts`; route files stay thin (metadata +
JSON-LD via `components/ui/JsonLd` + one view import). The compiled
stylesheet is byte-identical to the pre-restructure build — class names and
cascade order are untouched.

### Presentation layer (intentional deviation)

`src/styles/base/_presentation.scss` — imported **after** the responsive
overrides so it has final say — turns the prototype into a full-bleed website:
the centred 1180px demo frame and dark body backdrop are removed so every
screen spans edge-to-edge (content stays centred via `.wrap`), photo heroes
fill the viewport below the fixed chrome, standard sections hold a ≥58vh
balanced height with vertically centred content, inner-page head bands get
34vh, and confirmation is centred in the viewport. Below 860px everything
falls back to natural flow heights.

## Images

The mockup embedded photos as base64 data URIs. They were extracted to real files:

- `public/images/workshop.jpg` — home hero, mobile demo, about hero
- `public/images/shockshop-hero.jpg` — Shock Shop hero

Re-extract any time with `npm run extract:images`.

## Commands

```bash
npm install
npm run dev        # develop at http://localhost:3000
npm run build      # production build (all 21 routes static)
npm run start      # serve production build
```
