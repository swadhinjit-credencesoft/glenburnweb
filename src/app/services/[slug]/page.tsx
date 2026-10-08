import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailView } from "@/components/features/services";
import { SERVICES, type ServiceItem } from "@/data/services";

const SITE_URL = "https://glenburntyres.co.nz";

const getServiceById = (id: string): ServiceItem | undefined =>
  SERVICES.find((s) => s.id === id);

const LABELS: Record<string, string> = {
  "tyre-fitting": "Tyre Fitting & Supply",
  "wheel-alignment": "3D Laser Wheel Alignment",
  "puncture-repair": "Puncture Repairs & Safety Inspections",
  "shock-shop": "Central West Shock Shop — Steering & Suspension",
};

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceById(params.slug);
  if (!service) return { title: "Service not found" };

  const label = LABELS[service.id] ?? service.title;

  return {
    title: `${label} in Avondale, West Auckland`,
    description: service.body,
    alternates: { canonical: `${SITE_URL}/services/${service.id}/` },
    openGraph: {
      title: service.title,
      description: service.body,
      url: `${SITE_URL}/services/${service.id}/`,
      locale: "en_NZ",
      type: "article",
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = getServiceById(params.slug);
  if (!service) notFound();

  return <ServiceDetailView service={service} />;
}