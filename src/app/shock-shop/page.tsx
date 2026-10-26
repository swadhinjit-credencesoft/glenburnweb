import type { Metadata } from "next";
import { ShockShopView } from "@/components/features/shock-shop";

export const metadata: Metadata = {
  title: "Shock Specialist and Other Mechanical Repair Shop — Steering & Suspension Avondale",
  description:
    "Trusted shock specialist and mechanical repair shop in Avondale. WoF suspension repairs, Bilstein & Monroe installs, steering racks, brakes & battery services. Call (09) 828 8341.",
};

export default function ShockShopPage() {
  return <ShockShopView />;
}
