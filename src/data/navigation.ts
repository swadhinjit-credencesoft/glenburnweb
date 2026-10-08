import type { NavItem, ProtoTab } from "@/types";

export const PROTO_TABS: ProtoTab[] = [
  { id: "home", num: "01", label: "Home", href: "/" },
  { id: "results", num: "02", label: "Tyre results", href: "/tyres" },
  { id: "pdp", num: "03", label: "Product + booking", href: "/tyres/bluearth-gt-ae51" },
  { id: "checkout", num: "04", label: "Checkout", href: "/checkout" },
  { id: "conf", num: "05", label: "Confirmation", href: "/confirmation" },
  { id: "shock", num: "06", label: "Shock Shop", href: "/shock-shop" },
  { id: "local", num: "07", label: "Local landing", href: "/locations/avondale-rosebank-tyres" },
  { id: "faq", num: "08", label: "FAQ hub", href: "/faqs" },
  { id: "book", num: "09", label: "Book / Quote", href: "/book" },
  { id: "about", num: "10", label: "About + Contact", href: "/about" },
];

export const SERVICE_NAV = [
  {
    label: "Tyre fitting & supply",
    href: "/services/tyre-fitting",
    desc: "Fitted and balanced from $89",
  },
  {
    label: "3D laser wheel alignment",
    href: "/services/wheel-alignment",
    desc: "Camber, caster and toe — $89",
  },
  {
    label: "Puncture repairs",
    href: "/services/puncture-repair",
    desc: "Drive-in while you wait — $35",
  },
  {
    label: "Shock shop — suspension",
    href: "/services/shock-shop",
    desc: "Bilstein, Monroe, 4x4 lift kits",
  },
];

export const MAIN_NAV: NavItem[] = [
  { label: "Tyres", href: "/tyres" },
  { label: "Services", href: "/services", children: SERVICE_NAV },
  { label: "Shock Shop", href: "/shock-shop" },
  { label: "Areas", href: "/locations" },
  { label: "About", href: "/about" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];
