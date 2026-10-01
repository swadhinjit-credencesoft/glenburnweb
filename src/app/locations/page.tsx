import type { Metadata } from "next";
import { LocationsIndexView } from "@/components/features/locations";
import { JsonLd } from "@/components/ui";
import { autoRepairSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Areas We Serve — Avondale, New Lynn, Glendene & Titirangi",
  description:
    "Independent tyre, wheel alignment and suspension workshop serving Avondale, Rosebank Rd, New Lynn, Whau, Glendene, Kelston and the Titirangi foothills. Call (09) 828 4180.",
};

export default function LocationsPage() {
  return (
    <>
      <JsonLd
        data={autoRepairSchema({
          areaServed: [
            "Avondale",
            "Rosebank Road",
            "New Lynn",
            "New Windsor",
            "Blockhouse Bay",
            "Whau",
            "Glendene",
            "Kelston",
            "Titirangi",
          ],
        })}
      />
      <LocationsIndexView />
    </>
  );
}