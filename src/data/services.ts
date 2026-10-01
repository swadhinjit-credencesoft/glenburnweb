import type { Brand } from "./home";

export interface ExpertSection {
  title: string;
  content: string;
}

export interface ServiceHighlight {
  label: string;
  value: string;
}

export interface ServiceItem {
  id: string;
  code: string;
  eyebrow: string;
  title: string;
  body: string;
  price: string;
  href: string;
  cta: string;
  amber?: boolean;
  whatsIncluded: string[];
  brands: Brand[];
  highlights: ServiceHighlight[];
  expertSections: ExpertSection[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "tyre-fitting",
    code: "TYR",
    eyebrow: "Service 01 · Avondale & West Auckland",
    title: "Quality Tyres for Every Vehicle & Budget in West Auckland",
    body: "Whether you need durable SUV tyres, fuel-efficient commuter tyres, EV tyres or high-performance rubber, we stock trusted global brands fitted by experienced technicians.",
    whatsIncluded: [
      "Precision computer balancing on every fitted wheel",
      "Eco-friendly old tyre disposal & recycling",
      "Comprehensive multi-point tyre & rim safety check",
      "New valve replacement included with every new tyre",
    ],
    brands: [
      { name: "Bridgestone", tier: "PREMIUM", image: "/images/brands/bridgestone.svg" },
      { name: "Michelin", tier: "PREMIUM", image: "/images/brands/michelin.svg" },
      { name: "Dunlop", tier: "MID-RANGE", image: "/images/brands/dunlop.svg" },
      { name: "Maxxis", tier: "VALUE", image: "/images/brands/maxxis.svg" },
      { name: "Budget Options", tier: "FROM $89" },
      { name: "Yokohama", tier: "PREMIUM", image: "/images/brands/yokohama.svg" },
      { name: "Goodyear", tier: "MID-RANGE", image: "/images/brands/goodyear.svg" },
      { name: "Continental", tier: "PREMIUM", image: "/images/brands/continental.svg" },
    ],
    highlights: [
      { label: "Fitting Turnaround", value: "30–45 mins" },
      { label: "Price Range", value: "From $89 fitted" },
      { label: "Vehicle Types", value: "Cars, SUVs, EVs, 4x4s, Vans" },
    ],
    expertSections: [
      {
        title: "Tailored Tyre Selection for Auckland Driving",
        content:
          "Driving across Auckland means navigating varied motorway speeds, stop-and-start arterial congestion, and frequent heavy rain on the Northwestern motorway. We match your tyre compound and tread pattern to your specific commute, ensuring maximum wet braking performance, low road noise, and long-lasting tread life.",
      },
      {
        title: "EV & Hybrid Tyre Specialists",
        content:
          "Electric vehicles and modern plug-in hybrids place unique demands on tyres due to instant electric torque and heavy battery pack weights. We supply and fit reinforced extra-load (XL) tyres with low rolling resistance compounds engineered to maximize EV range while minimizing cabin road hum.",
      },
      {
        title: "State-of-the-Art Fitting & Precision Balancing",
        content:
          "Improper tyre fitting can cause micro-vibrations, rim damage, and rapid shoulder wear. At our Avondale workshop, our technicians use rim-safe touchless mounting equipment, replace all valve stems, and precision-balance every wheel to factory tolerances before torquing wheel nuts to exact manufacturer specifications.",
      },
    ],
    price: "From $89 fitted",
    href: "/tyres",
    cta: "Browse Tyres Online",
    amber: false,
  },
  {
    id: "wheel-alignment",
    code: "ALN",
    eyebrow: "Service 02 · 3D Laser Alignment",
    title: "Extend Tyre Life & Improve Handling with Precision Laser Alignment",
    body: "Uneven tyre wear? Car pulling to one side? Our advanced 3D wheel alignment technology ensures your tyres wear evenly, saving you money at the pump and keeping your vehicle driving straight.",
    whatsIncluded: [
      "High-definition 3D laser sensor optical scanning across all 4 wheels",
      "Precision camber, caster, and toe angle adjustments to OEM specs",
      "Steering wheel centering & steering angle sensor verification",
      "Digital before-and-after alignment diagnostic printout",
    ],
    brands: [],
    highlights: [
      { label: "Technology", value: "3D High-Def Laser Sensors" },
      { label: "Standard Price", value: "$89 for four wheels" },
      { label: "Recommended", value: "Every 10,000 km or new tyres" },
    ],
    expertSections: [
      {
        title: "Why Wheel Alignment Matters on West Auckland Roads",
        content:
          "Speed bumps on residential roads, railway crossings, potholes, and curb scuffs along Rosebank Road and Wolverton Street gradually knock your vehicle's wheel angles out of true. Even a 1mm misalignment can drag a tyre sideways by up to 100 meters every kilometer, drastically slashing tyre lifespan.",
      },
      {
        title: "Signs Your Vehicle Needs Immediate Alignment",
        content:
          "If your steering wheel is off-centre while driving on a flat road, if the car drifts or pulls to the left or right, or if you notice feathering, scalloping, or baldness on the inner or outer edges of your tyres, your alignment is out. Aligning your wheels restores straight-line stability and prevents premature tyre replacement.",
      },
      {
        title: "Save Fuel and Protect Suspension Components",
        content:
          "Properly aligned wheels reduce rolling resistance, which directly lowers fuel consumption. It also prevents uneven load distribution on shock absorbers, ball joints, control arm bushes, and wheel bearings, keeping your vehicle's entire steering and suspension geometry healthy.",
      },
    ],
    price: "$89 for four wheels",
    href: "/book",
    cta: "Book 3D Alignment",
  },
  {
    id: "puncture-repair",
    code: "PNC",
    eyebrow: "Service 03 · Drive-in Express",
    title: "Fast, Safe Puncture Repairs in Avondale",
    body: "Don't let a flat tyre ruin your day. We perform strict internal patch repairs to get you back on the road safely and affordably.",
    whatsIncluded: [
      "MTA-standard internal combination plug & vulcanised patch repair",
      "Complete tyre dismount & internal carcass safety inspection",
      "Bead seal inspection, rim bead cleaning & new valve core",
      "Precision wheel re-balancing and immersion pressure leak test",
    ],
    brands: [],
    highlights: [
      { label: "Turnaround Time", value: "15–20 minutes" },
      { label: "Standard Price", value: "$35 (Walk-ins welcome)" },
      { label: "Repair Standard", value: "MTA & NZTA Compliant" },
    ],
    expertSections: [
      {
        title: "Why Internal Patch Repairs Are Mandatory for Safety",
        content:
          "Temporary external string plugs (push plugs) inserted from the outside do not allow the technician to inspect the inside of the tyre for dangerous heat rings, structural cord separation, or liner delamination caused by driving while under-inflated. At Glenburn Tyres, we demount the tyre and apply a vulcanised combi-patch that seals both the tread puncture channel and the inner airtight liner.",
      },
      {
        title: "Puncture Repair Guidelines & NZ Safety Standards",
        content:
          "According to NZ safety standards, punctures located within the central 70% of the tyre tread (the crown area) with an entry hole under 6mm in diameter are fully repairable. Punctures in the tyre shoulder or sidewall cannot be safely repaired due to continuous flexing. If your tyre is unrepairable, we stock affordable direct replacements on-site.",
      },
      {
        title: "Drive-In Express Service — No Booking Needed",
        content:
          "Got a slow leak or waking up to a flat tyre? Drop straight into our workshop at 1/61 Wolverton Street, Avondale. In most cases, our technicians will have your puncture assessed, repaired, pressure-tested in our immersion tank, and refitted within 15 to 20 minutes.",
      },
    ],
    price: "$35 — walk-ins welcome",
    href: "/book",
    cta: "Drive in / Book Repair",
  },
  {
    id: "shock-shop",
    code: "SUS",
    eyebrow: "Service 04 · Central West Shock Shop",
    title: "Official Central West Shock Shop in Avondale",
    body: "Don't let a bumpy ride or bad shocks ruin your handling. As the official Central West Shock Shop franchise for 16+ years, we provide expert WoF suspension repairs, Bilstein/Monroe installs, and custom 4x4 lift kits to keep your vehicle riding smooth and safe.",
    whatsIncluded: [
      "Official Shock Shop electronic suspension tester evaluation",
      "Warrant of Fitness (WoF) steering & suspension failure repairs",
      "Shock absorber, strut, coil spring & bushing replacements",
      "Custom 4x4 lift kits, heavy-duty ute suspension & leveling packages",
      "Free no-obligation suspension safety inspection",
    ],
    brands: [
      { name: "Bilstein", tier: "GERMAN PERFORMANCE" },
      { name: "Monroe", tier: "OE REPLACEMENT" },
      { name: "Tein", tier: "ADJUSTABLE COILOVERS" },
      { name: "KYB", tier: "JAPANESE OE SPEC" },
      { name: "King Springs", tier: "HEAVY DUTY & 4WD" },
    ],
    highlights: [
      { label: "Franchise History", value: "Official Shock Shop 16+ yrs" },
      { label: "Initial Check", value: "Free suspension inspection" },
      { label: "Brands Installed", value: "Bilstein, Monroe, Tein, KYB" },
    ],
    expertSections: [
      {
        title: "16+ Years as the Official Central West Shock Shop",
        content:
          "As the authorized Central West Shock Shop franchise for over 16 years, Glenburn Tyres has specialized suspension diagnostics, spring compressors, and direct access to New Zealand's premier steering and shock absorber supply networks. We diagnose squeaks, knocks, and wallowing handling with absolute accuracy.",
      },
      {
        title: "Failed Your WoF on Suspension? We Provide Same-Day Repairs",
        content:
          "Worn control arm bushes, leaking shock absorbers, torn steering rack boots, or loose ball joints are common reasons vehicles fail their Warrant of Fitness. We supply OEM-equivalent or upgraded replacement components, install them in our workshop, and provide full alignment so your car passes re-inspection without delay.",
      },
      {
        title: "4WD Lift Kits & Trade Vehicle Heavy-Duty Upgrades",
        content:
          "Carrying heavy tools, carrying canopy setups, or hitting off-road trails in West Auckland? We install premium suspension upgrades for Ford Ranger, Toyota Hilux, Isuzu D-Max, Nissan Navara, and Mitsubishi Triton. From 2-inch lift kits to heavy-duty rear leaf springs, we ensure optimal ground clearance, load stability, and ride comfort.",
      },
    ],
    price: "Free inspection",
    href: "/shock-shop",
    cta: "Shock Shop Details",
    amber: true,
  },
];

// Alias for backward compatibility if imported as Service
export type Service = ServiceItem;