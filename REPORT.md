# Glenburn Tyres — Full Website Technical Report

> **Project:** `d:\github\glenburnweb`
> **Analysed:** 30 September 2026
> **Site:** Glenburn Tyre Service Ltd — 1/61 Wolverton Street, Avondale, Auckland NZ

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Routing & Pages](#2-routing--pages)
3. [Component Architecture](#3-component-architecture)
4. [State Management](#4-state-management)
5. [Data Layer](#5-data-layer)
6. [Styles & Design Tokens](#6-styles--design-tokens)
7. [TypeScript Types](#7-typescript-types)
8. [SEO & Metadata](#8-seo--metadata)
9. [Key Feature Flows](#9-key-feature-flows)
10. [Issues & Code Quality](#10-issues--code-quality)
11. [Priority Fix List](#11-priority-fix-list)

---

## 1. Project Overview

**What the site is:**
Glenburn Tyre Service Ltd is an independent tyre, wheel alignment, and suspension workshop operating since 1989 (35+ years). It is an MTA-assured workshop and the official **Central West Shock Shop** franchise. The website serves as a marketing/lead-generation and self-service booking tool for West Auckland drivers.

### Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | `^14.2.15` |
| Language | TypeScript | `^5.6.2` |
| UI Library | React / react-dom | `^18.3.1` |
| State Management | Redux Toolkit + react-redux | `^2.2.7` / `^9.1.2` |
| Styling | SCSS (Sass) — 7-layer cascade | `^1.79.4` |
| Fonts | Archivo · Barlow · IBM Plex Mono | Google Fonts via `next/font` |
| Build Output | **Static export** (`output: "export"`) | — |
| Image Handling | `unoptimized: true` (static export requirement) | — |

### Key Configuration Flags (`next.config.js`)

```js
module.exports = {
  reactStrictMode: true,
  output: "export",              // Fully static site — no SSR, no API routes
  images: { unoptimized: true }, // Required for static export
  sassOptions: {
    includePaths: ["src/styles"] // Allows bare @use "abstracts/..."
  }
}
```

> **Important:** This is a **fully static site**. All pages are pre-rendered HTML at build time. All interactivity is client-side React hydration. There are no server-side API routes.

---

## 2. Routing & Pages

All pages live under `src/app/` using Next.js 14 App Router conventions.

### Page Map

| Route | File | View Component | Notes |
|---|---|---|---|
| `/` | `src/app/page.tsx` | `HomeView` | Marketing home page |
| `/tyres` | `src/app/tyres/page.tsx` | `TyreResultsView` | Tyre catalogue with filters & sort |
| `/tyres/[slug]` | `src/app/tyres/[slug]/page.tsx` | `TyreDetailView` | Product detail page + buy box |
| `/checkout` | `src/app/checkout/page.tsx` | `CheckoutView` | 3-step checkout form |
| `/confirmation` | `src/app/confirmation/page.tsx` | `ConfirmationView` | Post-checkout success screen |
| `/book` | `src/app/book/page.tsx` | `BookingView` | General service booking form |
| `/services` | `src/app/services/page.tsx` | `ServicesView` | Services overview |
| `/shock-shop` | `src/app/shock-shop/page.tsx` | `ShockShopView` | Suspension / Shock Shop landing |
| `/about` | `src/app/about/page.tsx` | `AboutView` | About page + JSON-LD schema |
| `/contact` | `src/app/contact/page.tsx` | `ContactView` | Contact details |
| `/faqs` | `src/app/faqs/page.tsx` | `FaqSection` | FAQ accordion + FAQPage JSON-LD |
| `/locations/avondale-rosebank-tyres` | `src/app/locations/avondale-rosebank-tyres/page.tsx` | `LocalLandingView` | Local SEO landing page |

### Notes on Routing

- **`/tyres/[slug]`** exports `generateStaticParams()` — iterates the `TYRES` array and generates one static HTML file per tyre entry.
- **`/checkout`** and **`/confirmation`** both set `robots: { index: false }` — correctly excluded from search engine indexing.
- **Missing pages (will 404):** Footer links reference `/locations/new-lynn-tyres-suspension` and `/locations/glendene-titirangi-tyres`. Data exists in `src/data/locations.ts` (`SISTER_LOCATIONS`), but no page files exist for these routes. Since this is a static export, they will return 404 in production.

---

## 3. Component Architecture

### Root Layout

File: `src/app/layout.tsx`

```
<html lang="en-NZ" [CSS font variables]>
  <body>
    <StoreProvider>           ← Redux store wrapper
      <div class="frame">
        <div class="screen on">
          {children}          ← page slot (server components)
        </div>
      </div>
      <MobileNav />           ← fixed bottom mobile navigation bar
    </StoreProvider>
  </body>
</html>
```

Fonts loaded: **Archivo** (400–900), **Barlow** (300–600), **IBM Plex Mono** (400–600), exposed as CSS variables `--font-archivo`, `--font-barlow`, `--font-plexmono`.

---

### Layout Components (`src/components/layout/`)

| Component | Client? | Description |
|---|---|---|
| `SiteHeader.tsx` | `"use client"` | Logo, desktop nav links, quote count badge (from Redux `quote.count`), hamburger dropdown for mobile |
| `SiteFooter.tsx` | Server | Variant-based: `"full"` (4-column with hours) / `"simple"` / `"minimal"` / `"shock"` |
| `Topbar.tsx` | Server | Thin info bar showing address and phone; exports `BookTopbar` variant with booking CTA |
| `MobileNav.tsx` | `"use client"` | Fixed-bottom 3-button bar: **Call** / **Book or Quote** / **Directions** |

---

### UI Components (`src/components/ui/`)

| Component | Description |
|---|---|
| `JsonLd.tsx` | Renders `<script type="application/ld+json">` via `dangerouslySetInnerHTML`. Accepts `data: Record<string, unknown>`. |
| `PageHead.tsx` | Page header bar: breadcrumb + `<h1>` + optional sub-text block |
| `PhotoHero.tsx` | Hero section with background image, eyebrow text, title, sub-copy, and `children` slots |

---

### Feature Components (`src/components/features/`)

#### `home/`
| Component | Description |
|---|---|
| `HomeView.tsx` | Full home page: PhotoHero, Values grid, Services grid, Brands grid, Reviews grid, Areas section, SiteFooter |
| `QuickQuote.tsx` | Mini local-state form (service, rego, vehicle, date). Built and imported but **currently commented out** in `HomeView.tsx`. |

#### `tyre-results/`
| Component | Description |
|---|---|
| `TyreResultsView.tsx` | Tyre listing page: sidebar filter groups (from Redux), sort dropdown, product card grid |
| `ProductCard.tsx` | Single tyre card: badge chip, `Bars` rating widget (wet grip / tread life), spec chips, price, "Choose this tyre" CTA |

#### `tyre-detail/`
| Component | Description |
|---|---|
| `TyreDetailView.tsx` | Full Product Detail Page: qty picker, fitting slot picker, add-on checkboxes, cost breakdown. "Book this fitting" dispatches `addToQuote` and pushes to `/checkout`. |

#### `booking/`
| Component | Description |
|---|---|
| `BookingView.tsx` | 4-step general service booking: vehicle details, service selection (checkboxes), date/time, contact info. No validation — submits directly to `/confirmation`. |

#### `checkout/`
| Component | Description |
|---|---|
| `CheckoutView.tsx` | 3-step checkout: contact fields (Step 1), slot display widget (Step 2), payment method selection (Step 3). Basic name/mobile validation via `alert()`. Pushes to `/confirmation`. |
| `ConfirmationView.tsx` | Order success screen: generates WhatsApp URL + mailto URL from `buildOrderMessage()` output. User must manually click to "send" the booking. |

---

## 4. State Management

### Store Structure

File: `src/store/index.ts`

```typescript
configureStore({
  reducer: {
    quote:    quoteReducer,    // Cart / quote items + badge count
    product:  productReducer,  // Current PDP selection
    checkout: checkoutReducer, // Checkout form fields
    filters:  filtersReducer,  // Tyre results filter state
    booking:  bookingReducer,  // Booking form fields
  }
})
```

**Pattern:** `makeStore()` factory + `useRef` inside `StoreProvider.tsx` — the correct RTK pattern for the Next.js App Router to avoid store sharing between SSR requests.

**Typed hooks** (`src/store/hooks.ts`): `useAppDispatch`, `useAppSelector`, `useAppStore` (created with `.withTypes<RootState, AppDispatch>()`).

---

### Slice: `quoteSlice`

File: `src/store/slices/quoteSlice.ts`

**State shape:**
```typescript
{
  items: QuoteItem[],  // Array of cart items
  count: number        // Total quantity across all items (drives header badge)
}
```

**Actions:**

| Action | Description |
|---|---|
| `addToQuote(QuoteItem)` | Upserts by slug; recomputes `count` as sum of all item quantities |
| `setQuoteCount(number)` | Directly sets the badge count (synced from PDP qty picker via `useEffect`) |
| `clearQuote()` | Empties the cart |

**Initial state:** `items: []`, `count: 0`

---

### Slice: `productSlice`

File: `src/store/slices/productSlice.ts`

**State shape:**
```typescript
{
  slug:   string,
  qty:    number,
  slotId: string,
  addons: Record<string, boolean>
}
```

**Actions:**

| Action | Description |
|---|---|
| `setQty(number)` | Sets tyre quantity |
| `setSlot(string)` | Sets selected fitting slot ID |
| `toggleAddon(string)` | Flips an add-on (alignment, inspection, etc.) |
| `setAddon({ id, checked })` | Explicitly sets an add-on value |

**Default state** (from `src/data/product.ts`):
```typescript
{
  slug: "bluearth-gt-ae51",
  qty: 4,
  slotId: "mon-1030",
  addons: { alignment: true, inspection: false }
}
```

---

### Slice: `filtersSlice`

File: `src/store/slices/filtersSlice.ts`

**State shape:**
```typescript
{
  checked: Record<string, boolean>, // Filter checkbox states keyed by filter ID
  sort: number                       // 0=recommended, 1=price, 2=tread, 3=wet grip
}
```

**Actions:**

| Action | Description |
|---|---|
| `toggleFilter(id: string)` | Flips a filter checkbox |
| `setSort(number)` | Sets the sort mode |

**Pre-checked on load:** `{ b150250: true, instock: true }`

---

### Slice: `bookingSlice`

File: `src/store/slices/bookingSlice.ts`

**State shape:**
```typescript
{
  plate: string,
  vehicle: string,
  services: Record<string, boolean>,
  date: string,
  timeOfDay: "morning" | "afternoon",
  fullName: string,
  mobile: string,
  email: string,
  notes: string
}
```

**Actions:**

| Action | Description |
|---|---|
| `setBookingField({ field, value })` | Generic field setter (uses `any` cast internally) |
| `toggleService(id: string)` | Flips a service checkbox |
| `setTimeOfDay("morning" \| "afternoon")` | Sets time of day preference |

**Default state** (from `src/data/booking.ts`): Pre-filled with `plate: "KLM428"`, `services: { "New tyres & fitting": true }`, `date: "Mon 11 Aug 2026"`.

---

### Slice: `checkoutSlice`

File: `src/store/slices/checkoutSlice.ts`

**State shape:**
```typescript
{
  payment:      string,
  firstName:    string,
  lastName:     string,
  mobile:       string,
  email:        string,
  registration: string
}
```

**Actions:**

| Action | Description |
|---|---|
| `setPayment(string)` | Sets the selected payment method ID |
| `setField({ field, value })` | Generic field setter for all other fields |

**Default state** (from `src/data/checkout.ts`): Pre-filled with demo user "Sione Tuilagi", rego "KLM428", payment "card".

---

## 5. Data Layer

All content data lives in `src/data/`. This is cleanly separated from components and business logic.

### Data Files Reference

| File | Key Exports | Purpose |
|---|---|---|
| `src/data/site.ts` | `SITE` (const), `HourRow` (type) | **Single source of truth** — business name, phone, email, address, trading hours |
| `src/data/tyres.ts` | `TYRES[]`, `QTY_OPTIONS`, `getTyre(slug)`, `PDP_DETAIL`, `RESULTS_META` | Tyre catalogue (currently 4 items), PDP detail block, results page meta text |
| `src/data/filters.ts` | `FILTER_GROUPS[]`, `INITIAL_FILTERS_CHECKED`, `FilterGroup` | 4 filter groups with 12 options total |
| `src/data/navigation.ts` | `MAIN_NAV[]`, `PROTO_TABS[]` | Site nav (7 items) + prototype tab list (10 items) |
| `src/data/home.ts` | `VALUES[]`, `SERVICES[]`, `BRANDS[]`, `REVIEWS[]`, `AREAS[]`, `HERO_BADGES[]`, `QUICK_SERVICES[]` | All home page content blocks |
| `src/data/services.ts` | `SERVICES[]` (detailed), `Service` interface | Detailed services page data (4 services) |
| `src/data/locations.ts` | `SISTER_LOCATIONS[]`, `LANDING_LOCATIONS[]`, `getSisterLocation(slug)`, `SisterLocation` | 2 sister location SEO pages |
| `src/data/faqs.ts` | `FAQ_GROUPS[]` | 5 FAQ groups, 14 Q&A pairs total |
| `src/data/booking.ts` | `BOOKING_SERVICES[]`, `BookingState`, `INITIAL_BOOKING` | Service options list + booking form state shape and defaults |
| `src/data/checkout.ts` | `PAYMENT_OPTIONS[]`, `CheckoutState`, `INITIAL_CHECKOUT` | Payment method options + checkout form state shape and defaults |
| `src/data/product.ts` | `ProductState`, `INITIAL_PRODUCT` | PDP Redux slice state shape + default values |
| `src/data/quote.ts` | `QuoteItem`, `INITIAL_QUOTE_ITEMS`, `INITIAL_QUOTE_COUNT` | Quote cart item type + initial values |

---

### Tyre Catalogue

The site currently has **4 of a claimed 14 tyres** in the data file:

| Slug | Brand | Model | Size | Price Each | Badge |
|---|---|---|---|---|---|
| `bluearth-gt-ae51` | Yokohama | BluEarth-GT AE51 | 225/45R17 91W | $189 | Best all-round (amber) |
| `victra-sport-5` | Maxxis | Victra Sport 5 | 225/45R17 91W | $149 | Cheapest safe (blue) |
| `primacy-4` | Michelin | Primacy 4 | 225/45R17 94W XL | $279 | Quietest (blue) |
| `turanza-t005-used` | Bridgestone (used) | Turanza T005 — 6.2mm | 225/45R17 91W | $95 | Second-hand (dark) |

> `RESULTS_META` displays "14 tyres fit your car / Showing 4 of 14" — the remaining 10 are not yet added to `src/data/tyres.ts`.

---

### Filter Groups

`src/data/filters.ts` defines 4 filter groups with 12 options:

| Group | Options |
|---|---|
| Budget | Under $150, $150–$250, Over $250 |
| Brand | Yokohama, Maxxis, Michelin, Bridgestone |
| Driving | Dry performance, Wet grip, Quiet ride, Eco |
| Availability | In stock only |

---

## 6. Styles & Design Tokens

### SCSS 7-Layer Cascade

File: `src/app/globals.scss`

```
Layer 1:  abstracts/variables        ← CSS custom properties (design tokens)
Layer 2:  base/reset
          base/typography
          base/utilities
Layer 3:  layout/protobar
          layout/topbar
          layout/header
          layout/mobilenav
Layer 4:  components/buttons
          components/hero
          components/quick-quote
          components/sections
          components/page-head
Layer 5:  pages/tyre-results
          pages/tyre-detail
          pages/checkout
          pages/confirmation
          pages/faq
          pages/shock-shop
          pages/locations
          pages/contact
Layer 6:  layout/footer
          layout/responsive          ← media queries
Layer 7:  base/presentation          ← full-height screen/frame system (final authority)
```

`sassOptions.includePaths: ["src/styles"]` allows all SCSS files to use bare imports like `@use "abstracts/variables"` without relative paths.

---

### Design Tokens

File: `src/styles/abstracts/_variables.scss`

| Token | Value | Usage |
|---|---|---|
| `--blue` | `#14496e` | Primary brand blue |
| `--deep` | `#0b2b45` | Dark navy (headers, dark sections) |
| `--carbon` | `#16181a` | Near-black text |
| `--concrete` | `#e6e5e1` | Light warm grey |
| `--chalk` | `#f5f4f1` | Off-white page background |
| `--amber` | `#f5b31c` | Accent / Shock Shop yellow |
| `--red` | `#bf3a2b` | Error / alert states |
| `--line` | `#c9c8c3` | Borders and dividers |
| `--muted` | `#5e6266` | Secondary / caption text |
| `--green` | `#1e7a46` | Success / eco labels |

### Font Variables

Set in `src/app/layout.tsx` via `next/font/google`:

| CSS Variable | Font | Weights | Usage |
|---|---|---|---|
| `--font-archivo` | Archivo | 400–900 | Primary UI font, headings, buttons |
| `--font-barlow` | Barlow | 300–600 | Body text, descriptions |
| `--font-plexmono` | IBM Plex Mono | 400–600 | Registration plates, code, prices |

---

## 7. TypeScript Types

### Type Files (`src/types/`)

`src/types/index.ts` is a barrel re-export:
```typescript
export * from "./navigation";
export * from "./tyre";
export * from "./faq";
```

#### `src/types/navigation.ts`
```typescript
interface ProtoTab {
  id:    string;
  num:   string;
  label: string;
  href:  string;
}

interface NavItem {
  label: string;
  href:  string;
}
```

#### `src/types/tyre.ts`
```typescript
interface Badge {
  text:    string;
  variant: "amber" | "blue" | "dark";
}

interface Chip {
  text:   string;
  green?: boolean;
}

interface Tyre {
  slug:       string;
  brand:      string;
  name:       string;
  size:       string;
  priceEach:  number;
  multiLabel: string;
  badge?:     Badge;
  chips:      Chip[];
  wetGrip?:   number;   // 1–5 bar rating
  treadLife?: number;   // 1–5 bar rating
  stockLine:  string;
  stockLow?:  boolean;
  best?:      boolean;
  usedNote?:  string;
}

interface SpecRow {
  k: string;  // Key label
  v: string;  // Value
}

interface FittingSlot {
  id:    string;
  day:   string;
  time:  string;
  off?:  boolean;  // Slot unavailable
}
```

#### `src/types/faq.ts`
```typescript
interface FaqItem {
  q: string;  // Question
  a: string;  // Answer
}

interface FaqGroup {
  title: string;
  items: FaqItem[];
}
```

> **Note:** State types (`ProductState`, `BookingState`, `CheckoutState`, `QuoteItem`, `FilterGroup`, `SisterLocation`) are defined in `src/data/` files rather than `src/types/`. This is a minor organisational inconsistency — consider moving them to `src/types/` for a single source of truth.

---

## 8. SEO & Metadata

### Strategy

Next.js 14 Metadata API (`export const metadata: Metadata`) is used at the page level for standard HTML `<meta>` tags. JSON-LD structured data is injected via the `<JsonLd>` component on select pages.

### Per-Page Metadata

| Page | Title | Robots |
|---|---|---|
| Root layout | Template: `%s \| Glenburn Tyres` | — |
| `/` | Full long-form brand title with keywords | — |
| `/tyres` | `Tyres — Browse & Buy Online` | — |
| `/tyres/[slug]` | `{brand} {name} — {size}` (dynamic per tyre) | — |
| `/checkout` | `Checkout` | `index: false` |
| `/confirmation` | `Booking Confirmed` | `index: false` |
| `/book` | `Book a Service or Request a Tyre Quote` | — |
| `/services` | `Services` | — |
| `/shock-shop` | `Central West Shock Shop` | — |
| `/about` | `About Us — 35 Years on the Tools` | — |
| `/faqs` | `FAQs — Questions West Auckland Drivers Actually Ask` | — |
| `/contact` | `Contact Us` | — |
| `/locations/avondale-rosebank-tyres` | `Tyres & Fleet Services — Avondale & Rosebank Road` | — |

### OpenGraph

Currently only defined on `/` (title, description, `locale: "en_NZ"`, `type: "website"`). All other indexable pages are missing OpenGraph metadata.

### JSON-LD Structured Data

File: `src/lib/schema.ts`

| Function | Schema Type | Used On |
|---|---|---|
| `autoRepairSchema(overrides?)` | `@type: AutoRepair` | `/about`, `/locations/avondale-rosebank-tyres` |
| `faqPageSchema(groups)` | `@type: FAQPage` | `/faqs` |

The `autoRepairSchema()` returns:
```json
{
  "@type": "AutoRepair",
  "name": "Glenburn Tyre Service",
  "telephone": "...",
  "email": "...",
  "address": { "@type": "PostalAddress", "addressCountry": "NZ", ... },
  "openingHours": ["Mo-Fr ...", "Sa ..."]
}
```

The `faqPageSchema()` maps `FAQ_GROUPS` into:
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "...",
      "acceptedAnswer": { "@type": "Answer", "text": "..." }
    }
  ]
}
```

---

## 9. Key Feature Flows

### A. Tyre Search & Filter Flow

```
User lands /tyres
  → TyreResultsView renders
  → Filter sidebar shows FILTER_GROUPS (4 groups, 12 checkboxes)
  → Sort dropdown shows 4 options
  → Clicking filter: dispatch toggleFilter(id) → filtersSlice.checked updates ✅
  → [BUG] useMemo only depends on [filters.sort] — checked filters have NO effect on results ❌
  → Clicking sort: dispatch setSort(n) → results re-sort by price/treadLife/wetGrip ✅
  → "Choose this tyre" → push /tyres/[slug]
```

### B. Product Detail Page Flow

```
/tyres/[slug]
  → TyreDetailView receives slug prop
  → getTyre(slug) looks up tyre in TYRES[]
  → If slug === "bluearth-gt-ae51": full detail view (specs, 7 slots, addons, breakdown)
  → [ISSUE] All other slugs: degraded view — no specs, no slot picker, no addons ❌
  → Qty picker: dispatch setQty(n)
  → Slot picker: dispatch setSlot(id)
  → Add-on checkboxes: dispatch setAddon({ id, checked })
  → useEffect: syncs product.qty → quote.count (header badge)
  → "Book this fitting": dispatch addToQuote → router.push("/checkout")
```

### C. Checkout Flow

```
/checkout
  → CheckoutView reads checkout, product, quote from Redux
  → Calls orderTotals(quote.items, product) → { subtotal, alignment, stewardship, total }
  → Step 1: Contact fields (firstName, lastName, mobile, email, registration)
  → Step 2: Slot display widget
  → [BUG] Date/calendar display ("Mon", "11", "AUG 2026") is hardcoded HTML ❌
  → [BUG] "Change slot" button links hardcoded to /tyres/bluearth-gt-ae51 ❌
  → Step 3: Payment method radio buttons
  → Validation: if (!firstName || !lastName || !mobile) alert("...") return
  → Passes: router.push("/confirmation")
  → [BUG] Order summary sidebar always shows Yokohama details — not driven by quote.items ❌
```

### D. Confirmation Flow

```
/confirmation
  → ConfirmationView reads checkout, product, quote from Redux
  → Calls buildOrderMessage() from src/lib/order.ts → plain-text order summary string
  → Generates:
      WhatsApp URL: https://wa.me/{waNumber}?text={encodedMessage}
      Mailto URL:   mailto:{email}?subject=...&body={encodedMessage}
  → [BUG] Order reference "GB-2026-04817" is hardcoded — same for every customer ❌
  → [BUG] Slot display "Mon 11 Aug · 10:30 AM" is hardcoded HTML ❌
  → User must manually click WhatsApp or email button — no automatic submission
```

### E. General Booking Flow

```
/book
  → BookingView — 4 steps: vehicle, services, date/time, contact
  → All fields bound to bookingSlice via dispatched actions
  → [BUG] No validation whatsoever — submit goes straight to /confirmation ❌
  → Booking data is never transmitted automatically
```

### Business Logic Library (`src/lib/`)

| File | Functions | Description |
|---|---|---|
| `src/lib/order.ts` | `orderTotals()`, `buildOrderMessage()`, `whatsappUrl()`, `mailtoUrl()` | Pure functions for calculating totals and generating communication URLs |
| `src/lib/schema.ts` | `autoRepairSchema()`, `faqPageSchema()` | JSON-LD schema generators |
| `src/lib/format.ts` | _(format utilities)_ | Text/number formatting helpers |

Constants in `order.ts`:
```typescript
const ALIGNMENT_PRICE = 89;    // Wheel alignment add-on price
const STEWARDSHIP_EACH = 7.65; // Per-tyre stewardship levy
```

---

## 10. Issues & Code Quality

### 🔴 Critical Issues

---

#### Issue 1 — Filter Checkboxes Have No Effect

**File:** `src/components/features/tyre-results/TyreResultsView.tsx`

**Problem:** The `useMemo` for the sorted results list only has `filters.sort` in its dependency array. `filters.checked` is never used to actually filter the displayed results. The checkboxes update Redux state correctly, but the product grid is always showing all 4 tyres regardless of what filters are checked.

```typescript
// CURRENT (broken)
const sorted = useMemo(() => {
  const list = [...TYRES];
  if (filters.sort === 1) list.sort((a, b) => a.priceEach - b.priceEach);
  // ... other sort cases
  return list;
}, [filters.sort]); // ← Missing filters.checked — filtering never happens
```

**Fix required:** Add filtering logic based on `filters.checked` before sorting, and add `filters.checked` to the dependency array.

---

#### Issue 2 — Wrong `tel:` Href

**File:** `src/data/site.ts`

**Problem:** `SITE.phoneHref` contains `"tel:+9348632268"` which is an invalid phone number. The displayed number `(09) 828 4180` in the NZ format corresponds to `tel:+6498284180`. Additionally, a code comment in `HomeView.tsx` flags a discrepancy between the content document (`(09) 828 4180`) and street signage (`(09) 828 8341`) — the client needs to confirm the correct number before launch.

**Fix required:** Update `SITE.phoneHref` to `"tel:+6498284180"` (or whichever number is confirmed correct).

---

#### Issue 3 — Hardcoded Order Reference

**File:** `src/components/features/checkout/ConfirmationView.tsx`

**Problem:** The order confirmation displays `ORDER GB-2026-04817` as a static string. Every customer who completes checkout sees the exact same reference number, which is confusing and unprofessional.

**Fix required:** Generate a dynamic reference at confirmation time, e.g. `GB-${Date.now()}` or a short UUID.

---

#### Issue 4 — No Real Booking Submission

**Architecture:** The entire checkout and general booking flow terminates at user-initiated WhatsApp or email link buttons. There is no form POST, API call, or webhook. If a customer completes checkout and closes the confirmation page without clicking a link, the booking is silently lost with no record anywhere.

**Fix required (short-term):** At minimum, auto-open the WhatsApp/email link on page load, or add a fallback email sent via a serverless function. Long-term: integrate a booking API or at least a form submission service (e.g. Formspree, Netlify Forms).

---

### 🟡 Significant Issues

---

#### Issue 5 — Only 1 of 4 Tyres Has Full PDP Data

**File:** `src/data/tyres.ts`

`PDP_DETAIL` is a single hardcoded object for the slug `bluearth-gt-ae51`. Any other tyre slug page (`/tyres/victra-sport-5`, `/tyres/primacy-4`, `/tyres/turanza-t005-used`) renders a degraded view with no specifications table, no fitting slot calendar, no add-on options, and a simplified cost breakdown.

---

#### Issue 6 — Checkout Sidebar Is Hardcoded

**File:** `src/components/features/checkout/CheckoutView.tsx`

The order summary aside (`<aside>`) in the checkout page always shows the Yokohama BluEarth-GT tyre with hardcoded prices ($189 × 4, alignment $89, stewardship $30.60, total $705.20). This is static HTML not derived from `quote.items` in Redux, even though `orderTotals()` is correctly called elsewhere on the page.

---

#### Issue 7 — Hardcoded Dates in Checkout and Confirmation

**Files:** `CheckoutView.tsx`, `ConfirmationView.tsx`

The fitting date calendar widget ("Mon", "11", "AUG 2026") and time display ("10:30 AM") are hardcoded HTML strings. They are not derived from `product.slotId` via any lookup function (e.g., `slotLabel(product.slotId)`). Only the time label calls `slotTime()` — the date portion is never dynamic.

---

#### Issue 8 — Missing Location Page Files (404s)

**Files:** Footer links + `src/data/locations.ts`

The site footer renders links to:
- `/locations/new-lynn-tyres-suspension`
- `/locations/glendene-titirangi-tyres`

Data for both locations exists in `SISTER_LOCATIONS` (in `src/data/locations.ts`), but neither page file exists under `src/app/locations/`. Since this is a static export, these will 404 in production.

---

#### Issue 9 — `QuickQuote` Component Is Commented Out

**File:** `src/components/features/home/HomeView.tsx` (lines 60–64)

```tsx
{/* <div className="sec">
  <div className="wrap">
    <QuickQuote />
  </div>
</div> */}
```

`QuickQuote.tsx` is fully built and imported but not rendered anywhere on the site.

---

#### Issue 10 — No Form Validation on `/book`

**File:** `src/components/features/booking/BookingView.tsx`

The general booking form (Step 4: contact details) has no validation before navigating to `/confirmation`. A user with blank name, mobile, and email fields can "complete" a booking.

---

#### Issue 11 — Phone Number Unconfirmed (Code Comment)

**File:** `src/components/features/home/HomeView.tsx`

```
// NOTE — client to confirm before launch: content doc lists (09) 828 4180,
//        street signage reads (09) 828 8341. Site standardized on (09) 828 4180.
```

The correct business phone number needs to be confirmed with the client before launch and updated consistently across all references.

---

### 🟢 Code Quality Observations

---

#### Issue 12 — `bookingSlice.setBookingField` Uses `any` Cast

**File:** `src/store/slices/bookingSlice.ts`

```typescript
// Current
(state as any)[action.payload.field] = action.payload.value;
```

This bypasses TypeScript type safety. A type-safe alternative would use a discriminated union action or `keyof BookingState` constraint.

---

#### Issue 13 — Duplicate `Service` Interface

Both `src/data/home.ts` and `src/data/services.ts` define a `Service` interface with different field shapes. This can cause confusion when consuming the data. One should be renamed or both consolidated.

---

#### Issue 14 — Plain `<img>` Instead of `next/image`

All image tags across components (`SiteHeader`, `SiteFooter`, `HomeView`, etc.) use plain HTML `<img>` elements. Since `images: { unoptimized: true }` is set, this does not break anything, but it foregoes:
- Automatic lazy loading
- `blur` placeholder support
- Layout shift prevention

---

#### ✅ Issue 15 — Redux Pattern Is Correct

The `makeStore()` factory + `useRef` in `StoreProvider.tsx` pattern is the recommended RTK approach for Next.js App Router and correctly avoids store sharing between SSR server invocations.

---

#### ✅ Issue 16 — Clean Data / Component / Lib Separation

All content lives in `src/data/`, all domain types in `src/types/`, business logic in `src/lib/`. Page and feature components are thin consumers of this layer. The architecture is clean and easy to navigate.

---

#### ✅ Issue 17 — `src/lib/order.ts` Is Well-Structured

```typescript
orderTotals(items: QuoteItem[], product: ProductState): OrderTotals
buildOrderMessage(checkout, product, quote): string
whatsappUrl(message: string): string
mailtoUrl(subject, body): string
```

All pure functions with no side effects. Named constants (`ALIGNMENT_PRICE = 89`, `STEWARDSHIP_EACH = 7.65`) are used rather than magic numbers.

---

#### ✅ Issue 18 — SCSS Architecture Is Professional

The 7-layer cascade with BEM-inspired class naming is a mature, scalable approach. The `sassOptions.includePaths` configuration allows clean `@use "abstracts/variables"` imports without messy relative paths.

---

## 11. Priority Fix List

### By Priority

| Priority | # | Issue | File(s) |
|---|---|---|---|
| 🔴 **Critical** | 1 | Filter checkboxes have no effect on results | `TyreResultsView.tsx` |
| 🔴 **Critical** | 2 | Wrong `tel:` href in site data | `src/data/site.ts` |
| 🔴 **Critical** | 3 | Hardcoded order reference (same for all customers) | `ConfirmationView.tsx` |
| 🔴 **Critical** | 4 | No real booking submission — bookings can be lost | Architecture |
| 🟡 **Medium** | 5 | Only 1 of 4 tyres has full PDP data | `src/data/tyres.ts` |
| 🟡 **Medium** | 6 | Checkout order summary sidebar hardcoded, not Redux-driven | `CheckoutView.tsx` |
| 🟡 **Medium** | 7 | Checkout/confirmation dates are hardcoded HTML | `CheckoutView.tsx`, `ConfirmationView.tsx` |
| 🟡 **Medium** | 8 | 2 footer location links will 404 in production | `src/app/locations/` |
| 🟡 **Medium** | 9 | QuickQuote built but commented out | `HomeView.tsx` |
| 🟡 **Medium** | 10 | No validation on `/book` form | `BookingView.tsx` |
| 🟡 **Medium** | 11 | Phone number not confirmed with client | `src/data/site.ts`, `HomeView.tsx` |
| 🟢 **Low** | 12 | `bookingSlice.setBookingField` uses `any` | `bookingSlice.ts` |
| 🟢 **Low** | 13 | Duplicate `Service` interface | `home.ts`, `services.ts` |
| 🟢 **Low** | 14 | Plain `<img>` instead of `next/image` | Multiple components |
| 🟢 **Low** | 15 | OpenGraph metadata missing on most pages | All page files |
| 🟢 **Low** | 16 | Remaining 10 tyres not yet in catalogue | `src/data/tyres.ts` |
| 🟢 **Low** | 17 | State types defined in `src/data/` not `src/types/` | `src/data/*.ts` |

---

## Appendix: File Tree Summary

```
d:\github\glenburnweb\
├── next.config.js
├── package.json
├── tsconfig.json
├── public/                         ← Static assets (images, icons)
├── scripts/
│   └── extract-images.mjs          ← Image extraction utility
└── src/
    ├── app/                        ← Next.js App Router pages
    │   ├── globals.scss            ← Global stylesheet (7-layer cascade)
    │   ├── layout.tsx              ← Root layout (fonts, StoreProvider, MobileNav)
    │   ├── page.tsx                ← / (home)
    │   ├── not-found.tsx           ← 404 page
    │   ├── about/page.tsx
    │   ├── book/page.tsx
    │   ├── checkout/page.tsx
    │   ├── confirmation/page.tsx
    │   ├── contact/page.tsx
    │   ├── faqs/page.tsx
    │   ├── locations/
    │   │   └── avondale-rosebank-tyres/page.tsx
    │   ├── services/page.tsx
    │   ├── shock-shop/page.tsx
    │   └── tyres/
    │       ├── page.tsx
    │       └── [slug]/page.tsx
    ├── components/
    │   ├── features/
    │   │   ├── booking/BookingView.tsx
    │   │   ├── checkout/
    │   │   │   ├── CheckoutView.tsx
    │   │   │   └── ConfirmationView.tsx
    │   │   ├── home/
    │   │   │   ├── HomeView.tsx
    │   │   │   └── QuickQuote.tsx
    │   │   ├── tyre-detail/TyreDetailView.tsx
    │   │   └── tyre-results/
    │   │       ├── TyreResultsView.tsx
    │   │       └── ProductCard.tsx
    │   ├── layout/
    │   │   ├── MobileNav.tsx
    │   │   ├── Protobar.tsx
    │   │   ├── SiteFooter.tsx
    │   │   ├── SiteHeader.tsx
    │   │   └── Topbar.tsx
    │   └── ui/
    │       ├── JsonLd.tsx
    │       ├── PageHead.tsx
    │       └── PhotoHero.tsx
    ├── data/
    │   ├── booking.ts
    │   ├── checkout.ts
    │   ├── confirmation.tsx
    │   ├── faqs.ts
    │   ├── filters.ts
    │   ├── home.ts
    │   ├── locations.ts
    │   ├── navigation.ts
    │   ├── product.ts
    │   ├── quote.ts
    │   ├── services.ts
    │   ├── shock-shop.ts
    │   ├── site.ts
    │   └── tyres.ts
    ├── lib/
    │   ├── format.ts
    │   ├── order.ts
    │   └── schema.ts
    ├── store/
    │   ├── hooks.ts
    │   ├── index.ts
    │   ├── StoreProvider.tsx
    │   └── slices/
    │       ├── bookingSlice.ts
    │       ├── checkoutSlice.ts
    │       ├── filtersSlice.ts
    │       ├── productSlice.ts
    │       └── quoteSlice.ts
    ├── styles/
    │   ├── abstracts/_variables.scss
    │   ├── base/(_reset, _typography, _utilities, _presentation)
    │   ├── components/(_buttons, _hero, _quick-quote, _sections, _page-head)
    │   ├── layout/(_footer, _header, _mobilenav, _protobar, _responsive, _topbar)
    │   └── pages/(_checkout, _confirmation, _contact, _faq, _locations, _shock-shop, _tyre-detail, _tyre-results)
    └── types/
        ├── faq.ts
        ├── index.ts
        ├── navigation.ts
        └── tyre.ts
```

---

*Report generated by Antigravity — 30 September 2026*
