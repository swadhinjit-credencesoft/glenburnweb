import type { Metadata } from "next";
import { HomeView } from "@/components/features/home";

export const metadata: Metadata = {
  title: "Glenburn Tyres — Trusted Independent Tyre & Wheel Specialists in Avondale Since 1982",
  description:
    "Premium tyre fitting, 3D laser wheel alignment, puncture repairs, car batteries, and shock specialist & mechanical repairs in Avondale, West Auckland. 35+ years local. Call (09) 828 8341.",
  openGraph: {
    title: "Glenburn Tyres — Tyres, Alignment & Mechanical Repairs | Avondale",
    description:
      "Independent tyre, wheel, steering and suspension specialists in Avondale since 1982. Shock Specialist and other mechanical repair shop.",
    locale: "en_NZ",
    type: "website",
  },
};

export default function HomePage() {
  return <HomeView />;
}
