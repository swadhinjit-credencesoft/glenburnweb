import type { Metadata } from "next";
import { SisterLocationView } from "@/components/features/locations";
import { JsonLd } from "@/components/ui";
import { autoRepairSchema } from "@/lib/schema";
import { getSisterLocation } from "@/data/locations";

const location = getSisterLocation("glendene-titirangi-tyres")!;

export const metadata: Metadata = {
  title: "Wet-Weather Tyres & Steering — Glendene, Kelston & Titirangi",
  description:
    "High-grip wet tyres, sway bar and steering checks and free 30-point inspections for Glendene, Kelston and Titirangi foothills drivers.",
};

export default function GlendeneLocationPage() {
  return (
    <>
      <JsonLd
        data={autoRepairSchema({
          name: "Glenburn Tyres — Glendene, Kelston & Titirangi",
          areaServed: ["Glendene", "Kelston", "Titirangi"],
        })}
      />
      <SisterLocationView location={location} />
    </>
  );
}
