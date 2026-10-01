export interface SisterLocation {
  slug: string;
  url: string;
  crumb: string;
  title: string;
  intro: string;
  areas: string[];
  audience: string;
  services: { title: string; body: string }[];
  primaryCta: string;
  metaTitle: string;
  metaDescription: string;
}

export const SISTER_LOCATIONS: SisterLocation[] = [
  {
    slug: "avondale-rosebank-tyres",
    url: "/locations/avondale-rosebank-tyres/",
    crumb: "Home / Areas / Avondale & Rosebank Road",
    title:
      "Fast-Turnaround Commercial & Fleet Tyre Services in Avondale & Rosebank Rd",
    intro:
      "Built for trade utes, vans and local transport operators working the Rosebank industrial corridor.",
    areas: ["Avondale", "Rosebank Rd", "Massey industrial"],
    audience:
      "Business fleets, trade ute drivers, commercial vans and industrial workers on Rosebank Road — two minutes off the main strip.",
    services: [
      {
        title: "Commercial Fleet Express",
        body: "Minimal downtime for tradies and local transport operators working along the Rosebank industrial corridor. Drop your ute or van off in the morning at 1/61 Wolverton Street and pick it up by lunch.",
      },
      {
        title: "Heavy-Duty Ute & 4x4 Setup",
        body: "Heavy loads and rough job sites wear tyres and suspension quickly. We supply reinforced commercial tyres, 4x4 all-terrain and mud terrain rubber, and Shock Shop heavy-duty spring upgrades.",
      },
      {
        title: "Find Us Easily",
        body: "Located in the iconic Blue Building at 1/61 Wolverton Street, right between Avondale and New Lynn. Two minutes off Rosebank Road — look for the blue building.",
      },
    ],
    primaryCta: "Book a fleet slot",
    metaTitle: "Tyres & Fleet Services — Avondale & Rosebank Road",
    metaDescription:
      "Fast-turnaround commercial and fleet tyre services for Avondale and Rosebank Road industrial hub. Trade utes, vans, fleet vehicles. Glenburn Tyres.",
  },
  {
    slug: "new-lynn-tyres-suspension",
    url: "/locations/new-lynn-tyres-suspension/",
    crumb: "Home / Areas / New Lynn",
    title: "Your Local Independent Tyre & Suspension Shop Near New Lynn",
    intro: "Commuters, family SUVs and daily drivers. Pothole and speed-hump alignment, quiet EV-friendly tyres, drive-in puncture repairs.",
    areas: ["New Lynn", "New Windsor", "Blockhouse Bay", "Whau"],
    audience:
      "Built for daily commuters and family SUVs crossing the Whau between Avondale, New Lynn and the bays — the pothole capital of West Auckland.",
    services: [
      {
        title: "Commuter Safety & Pothole Protection",
        body: "Driving through New Lynn and the Whau area means dealing with speed humps and suburban road wear. We offer quick 3D wheel alignments to stop your car pulling and prevent uneven tread wear.",
      },
      {
        title: "Family SUV & Electric Vehicle Tyres",
        body: "Quiet, fuel-efficient, all-season tyres from Michelin, Bridgestone, and Pirelli designed for modern crossovers and SUVs.",
      },
      {
        title: "Drive-In Puncture Repairs",
        body: "Fast patch puncture fixes while you wait, getting you back on the road without replacing the whole tyre.",
      },
    ],
    primaryCta: "Book a commuter fitting",
    metaTitle:
      "Tyres & wheel alignment in New Lynn, New Windsor & Blockhouse Bay",
    metaDescription:
      "Commuter tyres, pothole-proof 3D alignments and drive-in puncture repairs for New Lynn, New Windsor, Blockhouse Bay and Whau drivers. Call (09) 828 4180.",
  },
  {
    slug: "glendene-titirangi-tyres",
    url: "/locations/glendene-titirangi-tyres/",
    crumb: "Home / Areas / Glendene & Titirangi",
    title: "High-Grip Tyres & Steering Control for West Auckland Roads",
    intro: "Winding roads and wet Waitakere weather. High-grip wet tyres, sway bar and steering checks, 30-point safety inspection.",
    areas: ["Glendene", "Kelston", "Titirangi foothills"],
    audience:
      "Built for drivers on the winding, tree-lined roads running up the Titirangi foothills — where wet-weather grip and steering precision matter most.",
    services: [
      {
        title: "Winding Road Traction",
        body: "Living out toward Titirangi and the foothills means navigating tight bends and damp roads. We specialize in wet-weather grip tyres and Shock Shop sway bar/steering checks to ensure maximum vehicle stability.",
      },
      {
        title: "Brake & Suspension Assurance",
        body: "Driving downhill puts extra strain on shock absorbers and brakes. We test damping, inspect brake pads and check suspension bushes to keep you safe on hilly terrain.",
      },
      {
        title: "30-Point Safety Inspection",
        body: "A free 30-point inspection covering brakes, damping, steering and tread depth — written findings you can act on, no obligation.",
      },
    ],
    primaryCta: "Book a safety inspection",
    metaTitle:
      "Wet-weather tyres & steering checks in Glendene, Kelston & Titirangi",
    metaDescription:
      "High-grip wet tyres, sway bar and steering checks and free 30-point inspections for Glendene, Kelston and Titirangi foothills drivers. Call (09) 828 4180.",
  },
];

export const LANDING_LOCATIONS = SISTER_LOCATIONS.map((l) => ({
  slug: l.slug,
  url: l.url,
  name: l.areas.join(", "),
  body: l.intro,
}));

export function getSisterLocation(slug: string): SisterLocation | undefined {
  return SISTER_LOCATIONS.find((l) => l.slug === slug);
}
