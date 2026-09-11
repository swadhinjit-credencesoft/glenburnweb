import type { Brand } from "./home";

export interface Service {
  id: string;
  title: string;
  body: string;
  details: string[];
  brands: Brand[];
  price: string;
  href: string;
  cta: string;
  amber?: boolean;
}

export const SERVICES: Service[] = [
  {
    id: "tyre-fitting",
    title: "Quality Tyres for Every Vehicle & Budget in West Auckland",
    body: "Whether you need durable SUV tyres, fuel-efficient commuter tyres, EV tyres or high-performance rubber, we stock trusted global brands fitted by experienced technicians.",
    details: [
      "Precision balancing included with every fitting",
      "Eco-friendly old tyre disposal",
      "Free 30-point safety check with every set of four",
      "Valve replacement included",
    ],
    brands: [
      { name: "Bridgestone", tier: "PREMIUM", image: "/images/brands/bridgestone.svg" },
      { name: "Michelin", tier: "PREMIUM", image: "/images/brands/michelin.svg" },
      { name: "Yokohama", tier: "PREMIUM", image: "/images/brands/yokohama.svg" },
      { name: "Dunlop", tier: "MID", image: "/images/brands/dunlop.svg" },
      { name: "Goodyear", tier: "MID", image: "/images/brands/goodyear.svg" },
      { name: "Maxxis", tier: "VALUE", image: "/images/brands/maxxis.svg" },
      { name: "Continental", tier: "PREMIUM", image: "/images/brands/continental.svg" },
      { name: "Budget options", tier: "FROM $89" },
    ],
    price: "From $89 fitted",
    href: "/tyres",
    cta: "Browse tyres",
    amber: false,
  },
  {
    id: "wheel-alignment",
    title: "Extend Tyre Life & Improve Handling with Precision Laser Alignment",
    body: "Uneven tyre wear? Car pulling to one side? Our advanced 3D wheel alignment technology ensures your tyres wear evenly, saving you money at the pump and keeping your vehicle driving straight.",
    details: [
      "Full 3D four-wheel laser alignment",
      "Camber, caster and toe adjustments",
      "Digital printout of before and after readings",
      "Recommended every 10,000 km or with new tyres",
    ],
    brands: [],
    price: "$89 for four wheels",
    href: "/book",
    cta: "Book alignment",
  },
  {
    id: "puncture-repair",
    title: "Fast, Safe Puncture Repairs in Avondale",
    body: "Don't let a flat tyre ruin your day. We perform strict internal patch repairs to get you back on the road safely and affordably.",
    details: [
      "MTA-compliant internal plug and patch repairs",
      "Drive-in, usually while you wait",
      "Safety inspection before repair to confirm tyre is serviceable",
      "If the tyre is beyond repair, we'll help you find the right replacement",
    ],
    brands: [],
    price: "$35 — walk-ins welcome",
    href: "/book",
    cta: "Drive in",
  },
  {
    id: "shock-shop",
    title: "Official Central West Shock Shop in Avondale",
    body: "Don't let a bumpy ride or bad shocks ruin your handling. As the official Central West Shock Shop franchise for 16+ years, we provide expert WoF suspension repairs, Bilstein/Monroe installs, and custom 4x4 lift kits to keep your vehicle riding smooth and safe.",
    details: [
      "Complete steering, suspension and brake repairs",
      "Shock absorber testing and replacement",
      "WoF suspension failure repairs",
      "Custom 4x4 lift kits and performance lowering springs",
      "Bilstein, Monroe and Tein brands",
    ],
    brands: [],
    price: "Free inspection",
    href: "/shock-shop",
    cta: "Shock Shop",
    amber: true,
  },
];