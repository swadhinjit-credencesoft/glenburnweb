import type { NavItem, ProtoTab } from "@/types";

export const PROTO_TABS: ProtoTab[] = [
  { id: "home", num: "01", label: "Home", href: "/" },
  { id: "services", num: "02", label: "Services", href: "/services" },
  {
    id: "service",
    num: "03",
    label: "Service booking",
    href: "/services/tyre-fitting",
  },
  { id: "checkout", num: "04", label: "Checkout", href: "/checkout" },
  { id: "conf", num: "05", label: "Confirmation", href: "/confirmation" },
  { id: "shock", num: "06", label: "Shock Specialists", href: "/shock-shop" },
  { id: "local", num: "07", label: "Local landing", href: "/locations/avondale-rosebank-tyres" },
  { id: "faq", num: "08", label: "FAQ hub", href: "/faqs" },
  { id: "book", num: "09", label: "Book / Quote", href: "/book" },
  { id: "about", num: "10", label: "About + Contact", href: "/about" },
];

export const SERVICE_NAV = [
  {
    label: "Tyre fitting & supply",
    href: "/services/tyre-fitting",
    desc: "Fitted and balanced from $129",
  },
  {
    label: "3D laser wheel alignment",
    href: "/services/wheel-alignment",
    desc: "Camber, caster and toe — from $89",
  },
  {
    label: "Puncture repairs",
    href: "/services/puncture-repair",
    desc: "Drive-in while you wait — from $35",
  },
  {
    label: "Shock Specialist & mechanical repairs",
    href: "/services/shock-shop",
    desc: "Bilstein, Monroe, suspension & WoF — from $49",
  },
  {
    label: "Car batteries & testing",
    href: "/services/batteries",
    desc: "Digital test & fitting from $149",
  },
];

export const MAIN_NAV: NavItem[] = [
  { label: "Services", href: "/services", children: SERVICE_NAV },
  { label: "Shock Specialists", href: "/shock-shop" },
  { label: "Areas", href: "/locations" },
  { label: "About", href: "/about" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];
