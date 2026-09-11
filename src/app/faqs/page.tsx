import type { Metadata } from "next";
import { FaqSection } from "@/components/features/faq";
import { JsonLd } from "@/components/ui";
import { faqPageSchema } from "@/lib/schema";
import { FAQ_GROUPS } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQs — Questions West Auckland Drivers Actually Ask",
  description:
    "Answers to common tyre, wheel alignment, puncture repair and suspension questions from Glenburn Tyres in Avondale, West Auckland.",
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(FAQ_GROUPS)} />
      <FaqSection />
    </>
  );
}
