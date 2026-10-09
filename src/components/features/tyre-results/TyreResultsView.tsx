"use client";

import Link from "next/link";
import Topbar from "@/components/layout/Topbar";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PageHead from "@/components/ui/PageHead";
import ProductCard from "./ProductCard";
import { MAIN_NAV } from "@/data/navigation";
import { RESULTS_META, TYRES } from "@/data/tyres";
import { SITE } from "@/data/site";

export default function TyreResultsView() {
  return (
    <>
      <Topbar
        right={
          <>
            📞 <strong>{SITE.phone}</strong> ·{" "}
            {SITE.hours
              .filter((h) => !h.closed)
              .map((h) => `${h.days.toUpperCase()} ${h.time}`)
              .join(" · ")}
          </>
        }
      />
      <SiteHeader nav={MAIN_NAV.slice(0, 6)} active="Tyres" />

      <PageHead crumb={RESULTS_META.crumb} title={RESULTS_META.title}>
        {RESULTS_META.vehicle} <b>{RESULTS_META.fittedSize}</b> ·{" "}
        <Link
          href="/book"
          style={{ color: "#B9C6D2", textDecoration: "underline" }}
        >
          not your car?
        </Link>
      </PageHead>

      <div className="wrap">
        <p className="tyre-list-count">
          All {TYRES.length} tyres · every price is fitted, balanced &amp; GST
          inclusive
        </p>
        <div className="plist">
          {TYRES.map((t) => (
            <ProductCard key={t.slug} tyre={t} />
          ))}
        </div>
      </div>

      <SiteFooter />
    </>
  );
}