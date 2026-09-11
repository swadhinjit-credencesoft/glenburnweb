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

export const LANDING_LOCATIONS = [
  {
    url: "/locations/avondale-rosebank-tyres/",
    name: "Avondale & Rosebank Rd",
    body: "Business fleets, trade utes, commercial vans and industrial workers on Rosebank Road.",
  },
  {
    url: "/locations/new-lynn-tyres-suspension/",
    name: "New Lynn, New Windsor, Blockhouse Bay & Whau",
    body: "Commuters and family SUVs. Pothole and speed-hump alignment, quiet EV-friendly tyres, drive-in puncture repairs.",
  },
  {
    url: "/locations/glendene-titirangi-tyres/",
    name: "Glendene, Kelston & Titirangi foothills",
    body: "Winding roads and wet Waitakere weather. High-grip wet tyres, sway bar and steering checks, 30-point safety inspection.",
  },
];

export function getSisterLocation(slug: string): SisterLocation | undefined {
  return SISTER_LOCATIONS.find((l) => l.slug === slug);
}
