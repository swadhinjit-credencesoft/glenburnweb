"use client";

import { useMemo } from "react";
import Link from "next/link";
import Topbar from "@/components/layout/Topbar";
import SiteHeader from "@/components/layout/SiteHeader";
import PageHead from "@/components/ui/PageHead";
import ProductCard from "./ProductCard";
import { MAIN_NAV } from "@/data/navigation";
import { RESULTS_META, TYRES } from "@/data/tyres";
import { FILTER_GROUPS } from "@/data/filters";
import { SITE } from "@/data/site";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSort, toggleFilter } from "@/store/slices/filtersSlice";

export default function TyreResultsView() {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((s) => s.filters);

  const sorted = useMemo(() => {
    const list = [...TYRES];
    if (filters.sort === 1) list.sort((a, b) => a.priceEach - b.priceEach);
    if (filters.sort === 2)
      list.sort((a, b) => (b.treadLife ?? 0) - (a.treadLife ?? 0));
    if (filters.sort === 3)
      list.sort((a, b) => (b.wetGrip ?? 0) - (a.wetGrip ?? 0));
    return list;
  }, [filters.sort]);

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
        <div className="layout">
          <aside className="filters">
            {FILTER_GROUPS.map((g) => (
              <div className="fgroup" key={g.id}>
                <h4>{g.title}</h4>
                {g.options.map((o) => (
                  <label className="fopt" key={o.id}>
                    <input
                      type="checkbox"
                      checked={!!filters.checked[o.id]}
                      onChange={() => dispatch(toggleFilter(o.id))}
                    />{" "}
                    {o.label} <span className="ct">{o.count}</span>
                  </label>
                ))}
              </div>
            ))}
          </aside>
          <div>
            <div className="sortbar">
              <span className="cnt">{RESULTS_META.showing}</span>
              <select
                value={filters.sort}
                onChange={(e) => dispatch(setSort(Number(e.target.value)))}
              >
                {RESULTS_META.sortOptions.map((o, i) => (
                  <option key={o} value={i}>
                    {o}
                  </option>
                ))}
              </select>
            </div>
            <div className="plist">
              {sorted.map((t) => (
                <ProductCard key={t.slug} tyre={t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
