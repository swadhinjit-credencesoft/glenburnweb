export const VALUES = [
  {
    title: "35 years of local trust",
    body: "We aren't a nameless corporate chain. We're your independent local experts, and we treat your family's safety like our own.",
  },
  {
    title: "Assured quality",
    body: "Every repair and fitting meets strict New Zealand automotive standards, from puncture patches to full suspension rebuilds.",
  },
  {
    title: "Straight shooter pricing",
    body: "No hidden fees and no unnecessary upsells. Just upfront recommendations tailored to how you drive and what you can spend.",
  },
];

export interface Service {
  code: string;
  title: string;
  body: string;
  price: string;
  linkLabel: string;
  href: string;
  amber?: boolean;
}

export const SERVICES: Service[] = [
  {
    code: "TYR",
    title: "Tyre fitting & supply",
    body: "Durable SUV rubber, fuel-efficient commuter tyres and high-performance sets. Free valve replacement, precision balancing and eco-friendly old-tyre disposal included.",
    price: "From $89 fitted",
    linkLabel: "Browse tyres →",
    href: "/tyres",
  },
  {
    code: "ALN",
    title: "3D laser wheel alignment",
    body: "Uneven wear or pulling to one side? Precision 3D alignment makes tyres wear evenly, saves fuel and keeps the car tracking straight.",
    price: "$89 · four wheels",
    linkLabel: "Book alignment →",
    href: "/book",
  },
  {
    code: "PNC",
    title: "Puncture repair",
    body: "Don't let a flat ruin your day. Strict MTA-compliant internal plug and patch repairs, drive-in, usually while you wait.",
    price: "$35 · walk-ins welcome",
    linkLabel: "Drive in →",
    href: "/book",
  },
  {
    code: "SUS",
    title: "Central West Shock Shop",
    body: "Official franchise for 16+ years. WoF suspension repairs, shock testing, Bilstein and Monroe installs, and custom 4x4 lift kits.",
    price: "Free inspection",
    linkLabel: "Shock Shop →",
    href: "/shock-shop",
    amber: true,
  },
];

export interface Brand {
  name: string;
  tier: string;
  image?: string;
}

export const BRANDS: Brand[] = [
  { name: "Bridgestone", tier: "PREMIUM", image: "/images/brands/bridgestone.svg" },
  { name: "Michelin", tier: "PREMIUM", image: "/images/brands/michelin.svg" },
  { name: "Yokohama", tier: "PREMIUM", image: "/images/brands/yokohama.svg" },
  { name: "Dunlop", tier: "MID", image: "/images/brands/dunlop.svg" },
  { name: "Goodyear", tier: "MID", image: "/images/brands/goodyear.svg" },
  { name: "Continental", tier: "PREMIUM", image: "/images/brands/continental.svg" },
  { name: "Maxxis", tier: "VALUE", image: "/images/brands/maxxis.svg" },
  { name: "Budget range", tier: "FROM $89" },
];

export const REVIEWS = [
  {
    text: "Slow leak, dropped in early. Sorted a new tyre in ten minutes and topped up all four without being asked.",
    who: "Google review · Avondale",
  },
  {
    text: "Van alignment. They explained the process before starting, and the steering is straight and stable now. Fair price.",
    who: "Google review · New Lynn",
  },
  {
    text: "Called after 5pm about worn shocks. Aveen booked me in next morning and the ride is transformed.",
    who: "Google review · Blockhouse Bay",
  },
];

export const AREAS = [
  "Avondale",
  "Rosebank Road",
  "New Lynn",
  "New Windsor",
  "Blockhouse Bay",
  "Whau",
  "Glendene",
  "Kelston",
  "Titirangi",
];

export const HERO_BADGES: { bold: string; span?: string }[] = [
  { bold: "4.8★ Google", span: "200+ reviews" },
  { bold: "35+ Years", span: "local" },
  { bold: "MTA Assured" },
  { bold: "Central West Shock Shop", span: "16+ yrs" },
];

export const QUICK_SERVICES = [
  "New tyres & fitting",
  "3D laser wheel alignment",
  "Drive-in puncture repair",
  "Shock Shop — steering & suspension",
  "Tyre safety check",
];
