import type { Metadata } from "next";
import { HomeView } from "@/components/features/home";

export const metadata: Metadata = {
  title: "Glenburn Tyres — Trusted Independent Tyre & Wheel Specialists in Avondale Since 1989",
  description:
    "Premium tyre fitting, 3D laser wheel alignment, puncture repairs and Central West Shock Shop suspension services in Avondale, West Auckland. MTA assured, 35+ years local. Call (09) 828 4180.",
  openGraph: {
    title: "Glenburn Tyres — Tyres, Alignment & Shock Shop | Avondale",
    description: "Independent tyre, wheel and suspension specialists in Avondale since 1989. MTA assured. Official Central West Shock Shop franchise.",
    locale: "en_NZ",
    type: "website",
  },
};

export default function HomePage() {
  return <HomeView />;
}
