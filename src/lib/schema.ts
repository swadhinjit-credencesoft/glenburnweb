import type { FaqGroup } from "@/types";
import { SITE } from "@/data/site";

const DAY_SHORT: Record<string, string> = {
  "Mon–Fri": "Mo-Fr",
  Saturday: "Sa",
  Sunday: "Su",
};

const OPENING_HOURS = SITE.hours
  .filter((h) => !h.closed)
  .map((h) => `${DAY_SHORT[h.days]} ${h.open}-${h.close}`);

export function autoRepairSchema(
  overrides: { name?: string; areaServed?: string[] } = {}
) {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: overrides.name ?? SITE.name,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address,
      addressLocality: "Avondale, Auckland",
      postalCode: "0600",
      addressCountry: "NZ",
    },
    ...(overrides.areaServed
      ? { areaServed: overrides.areaServed }
      : {}),
    openingHours: OPENING_HOURS,
  };
}

export function faqPageSchema(groups: FaqGroup[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: groups.flatMap((g) =>
      g.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      }))
    ),
  };
}