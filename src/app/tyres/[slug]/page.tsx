import type { Metadata } from "next";
import { TyreDetailView } from "@/components/features/tyre-detail";
import { TYRES } from "@/data/tyres";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return TYRES.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const tyre = TYRES.find((t) => t.slug === params.slug);
  return {
    title: tyre ? `${tyre.brand} ${tyre.name} — ${tyre.size}` : "Tyre details",
    description: tyre
      ? `${tyre.name} in ${tyre.size}, $${tyre.priceEach} each fitted & balanced at our Avondale workshop.`
      : undefined,
  };
}

export default function TyreDetailPage({ params }: Props) {
  return <TyreDetailView slug={params.slug} />;
}
