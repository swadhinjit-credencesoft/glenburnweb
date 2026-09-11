import type { Metadata } from "next";
import { ShockShopView } from "@/components/features/shock-shop";

export const metadata: Metadata = {
  title: "Central West Shock Shop — Steering & Suspension Specialists",
  description:
    "Official Central West Shock Shop franchise in Avondale. WoF suspension repairs, Bilstein/Monroe installs, 4x4 lift kits. Call (09) 828 4180.",
};

export default function ShockShopPage() {
  return <ShockShopView />;
}
