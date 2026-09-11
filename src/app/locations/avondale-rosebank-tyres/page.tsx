import type { Metadata } from "next";
import { LocalLandingView } from "@/components/features/locations";
import { JsonLd } from "@/components/ui";
import { autoRepairSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Tyres & Fleet Services — Avondale & Rosebank Road",
  description:
    "Fast-turnaround commercial and fleet tyre services for Avondale and Rosebank Road industrial hub. Trade utes, vans, fleet vehicles. Glenburn Tyres.",
};

export default function LocalPage() {
  return (
    <>
      <JsonLd
        data={autoRepairSchema({
          areaServed: ["Avondale", "Rosebank Road", "New Lynn"],
        })}
      />
      <LocalLandingView />
    </>
  );
}
