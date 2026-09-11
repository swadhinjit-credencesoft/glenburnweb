import type { Metadata } from "next";
import { AboutView } from "@/components/features/about";
import { JsonLd } from "@/components/ui";
import { autoRepairSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us — 35 Years on the Tools in West Auckland",
  description:
    "Founded in 1989, Glenburn Tyres has been Avondale's trusted independent tyre and suspension specialist for over 35 years. Meet Aveen and the team.",
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={autoRepairSchema()} />
      <AboutView />
    </>
  );
}
