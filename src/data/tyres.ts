import type { Badge, Chip, FittingSlot, SpecRow, Tyre } from "@/types";

export const QTY_OPTIONS = [1, 2, 4];

export const TYRES: Tyre[] = [
  {
    slug: "bluearth-gt-ae51",
    brand: "Yokohama",
    name: "BluEarth-GT AE51",
    size: "225/45R17 91W",
    priceEach: 189,
    multiLabel: "SET OF 4 — $756",
    badge: { text: "Best all-round", variant: "amber" },
    chips: [
      { text: "WET GRIP A", green: true },
      { text: "70 dB" },
      { text: "TREADWEAR 400" },
      { text: "MADE 2025" },
    ],
    wetGrip: 4,
    treadLife: 4,
    stockLine: "● 6 IN STOCK · FIT TOMORROW 8:00",
    best: true,
  },
  {
    slug: "victra-sport-5",
    brand: "Maxxis",
    name: "Victra Sport 5",
    size: "225/45R17 91W",
    priceEach: 149,
    multiLabel: "SET OF 4 — $596",
    badge: { text: "Cheapest safe", variant: "blue" },
    chips: [
      { text: "WET GRIP B" },
      { text: "71 dB" },
      { text: "TREADWEAR 320" },
      { text: "MADE 2025" },
    ],
    wetGrip: 3,
    treadLife: 3,
    stockLine: "● 8 IN STOCK · FIT TODAY 3:30",
  },
  {
    slug: "primacy-4",
    brand: "Michelin",
    name: "Primacy 4",
    size: "225/45R17 94W XL",
    priceEach: 279,
    multiLabel: "SET OF 4 — $1,116",
    badge: { text: "Quietest", variant: "blue" },
    chips: [
      { text: "WET GRIP A", green: true },
      { text: "68 dB", green: true },
      { text: "TREADWEAR 340" },
      { text: "MADE 2026" },
    ],
    wetGrip: 5,
    treadLife: 4,
    stockLine: "● 2 IN STOCK · REST IN THU",
    stockLow: true,
  },
  {
    slug: "turanza-t005-used",
    brand: "Bridgestone · used",
    name: "Turanza T005 — 6.2 mm",
    size: "225/45R17 91W · pair only",
    priceEach: 95,
    multiLabel: "PAIR — $190",
    badge: { text: "Second-hand", variant: "dark" },
    chips: [
      { text: "TREAD 6.2 MM" },
      { text: "MADE 2023" },
      { text: "MTA INSPECTED" },
    ],
    stockLine: "● ONLY 2 AVAILABLE",
    stockLow: true,
    usedNote:
      "Checked for sidewall damage and uneven wear. WOF minimum is 1.5\u00a0mm — expect roughly two years on these at average kilometres.",
  },
];

export function getTyre(slug: string): Tyre | undefined {
  return TYRES.find((t) => t.slug === slug);
}

export const PDP_DETAIL = {
  slug: "bluearth-gt-ae51",
  brandLine: "Yokohama · made in Japan",
  name: "BluEarth-GT AE51",
  sizeLine: "225/45R17 91W · fits your 2016 Mazda 3 GSX",
  whoFor:
    "A sensible everyday tyre for a car that lives on Auckland motorways and suburban streets. Strong in the wet, quiet enough that you notice, and the compound holds up through summer without going off early. Doing high kilometres for work? The Michelin is worth the extra $90 a corner. Selling the car within a year? The Maxxis does the job.",
  specs: [
    { k: "Size", v: "225/45R17" },
    { k: "Load index", v: "91 — 615 kg per tyre" },
    { k: "Speed rating", v: "W — 270 km/h" },
    { k: "Wet grip class", v: "A" },
    { k: "Rolling resistance", v: "C" },
    { k: "External noise", v: "70 dB" },
    { k: "Treadwear rating", v: "400" },
    { k: "Manufactured", v: "Week 34, 2025" },
    { k: "Fitted by", v: "MTA assured technicians" },
  ] as SpecRow[],
  priceEach: 189,
  priceLbl:
    "per tyre, fitted & balanced. GST and Tyre Stewardship Fee included.",
  slotHint:
    "Four tyres takes about 45 minutes. Saturday closes at noon, so the last Saturday slot is 11:00 AM.",
  slots: [
    { id: "mon-0800", day: "Mon 11 Aug", time: "8:00 AM" },
    { id: "mon-1030", day: "Mon 11 Aug", time: "10:30 AM" },
    { id: "mon-1400", day: "Mon 11 Aug", time: "2:00 PM" },
    { id: "tue-0800", day: "Tue 12 Aug", time: "8:00 — full", off: true },
    { id: "tue-1300", day: "Tue 12 Aug", time: "1:00 PM" },
    { id: "sat-0900", day: "Sat 16 Aug", time: "9:00 AM" },
  ] as FittingSlot[],
  addons: [
    { id: "alignment", label: "3D laser wheel alignment", price: "+$89", checked: true },
    { id: "inspection", label: "30-point safety inspection", price: "Free", checked: false },
  ],
  breakdown: [
    { label: "4 × Yokohama BluEarth-GT", value: "$705.20" },
    { label: "Fitting, balancing & valves", value: "Included" },
    { label: "Tyre Stewardship Fee, 4 × $7.65", value: "$30.60", tw: true },
    { label: "3D laser wheel alignment", value: "$89.00" },
    { label: "Includes GST", value: "$110.25", muted: true },
  ],
  total: "$824.80",
};

export const RESULTS_META = {
  crumb: "Home / Tyres / 225-45R17",
  title: "14 tyres fit your car",
  vehicle: "KLM428 · 2016 Mazda 3 GSX Hatch · fitted size",
  fittedSize: "225/45R17 91W",
  showing: "Showing 4 of 14 · all prices fitted, balanced & GST inclusive",
  sortOptions: [
    "Recommended for your car",
    "Price, low to high",
    "Longest tread life",
    "Best wet grip",
  ],
};
