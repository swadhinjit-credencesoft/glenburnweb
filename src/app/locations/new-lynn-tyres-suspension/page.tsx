import type { Metadata } from "next";
import { SisterLocationView } from "@/components/features/locations";
import { JsonLd } from "@/components/ui";
import { autoRepairSchema } from "@/lib/schema";
import { getSisterLocation } from "@/data/locations";

const location = getSisterLocation("new-lynn-tyres-suspension")!;

export const metadata: Metadata = {
  title: "Tyres & Suspension — New Lynn, Blockhouse Bay & Whau",
  description:
    "Commuter tyres, pothole-proof 3D alignments and drive-in puncture repairs for New Lynn, New Windsor, Blockhouse Bay and Whau. Call (09) 828 4180.",
};

export default function NewLynnLocationPage() {
  return (
    <>
      <JsonLd
        data={autoRepairSchema({
          name: "Glenburn Tyres — New Lynn & Whau",
          areaServed: ["New Lynn", "New Windsor", "Blockhouse Bay", "Whau"],
        })}
      />
      <SisterLocationView location={location} />
    </>
  );
}
