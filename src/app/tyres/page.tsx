import type { Metadata } from "next";
import { TyreResultsView } from "@/components/features/tyre-results";

export const metadata: Metadata = {
  title: "Tyres — Browse & Buy Online | Glenburn Tyres Avondale",
  description:
    "Find the right tyres for your car. Browse Bridgestone, Michelin, Yokohama, Maxxis and more — fitted and balanced in Avondale from $89. Call (09) 828 4180.",
};

export default function TyresPage() {
  return <TyreResultsView />;
}
