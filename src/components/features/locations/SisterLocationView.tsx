"use client";

import Link from "next/link";
import { BookTopbar } from "@/components/layout/Topbar";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PageHead from "@/components/ui/PageHead";
import { SISTER_LOCATIONS, type SisterLocation } from "@/data/locations";
import { MAIN_NAV } from "@/data/navigation";
import { SITE } from "@/data/site";

export default function SisterLocationView({
  location,
}: {
  location: SisterLocation;
}) {
  const others = SISTER_LOCATIONS.filter((l) => l.slug !== location.slug);

  return (
    <>
      <BookTopbar />
      <SiteHeader nav={MAIN_NAV} active="Areas" />

      <PageHead crumb={location.crumb} title={location.title}>
        {location.intro}
      </PageHead>

      <div className="sec">
        <div className="wrap">
          <div className="arealist">
            {location.areas.map((a) => (
              <span className="area" key={a}>
                {a}
              </span>
            ))}
          </div>
          <p style={{ marginTop: 18, maxWidth: "70ch" }}>{location.audience}</p>
          <div className="grid g3" style={{ marginTop: 22 }}>
            {location.services.map((s) => (
              <div className="val" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 22, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link href="/book" className="btn btn-p">
              {location.primaryCta}
            </Link>
            <a href={SITE.phoneHref} className="btn btn-o">📞 Call {SITE.phone}</a>
          </div>
        </div>
      </div>

      <div className="sec alt">
        <div className="wrap">
          <div className="sechead">
            <h2>The rest of the local network</h2>
            <p>
              Two more Glenburn workshops pages, each built around the drivers
              in its own suburb.
            </p>
          </div>
          <div className="grid g3">
            {others.map((l) => (
              <div className="loccard" key={l.slug}>
                <h3>{l.areas.join(", ")}</h3>
                <p>{l.intro}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SiteFooter variant="simple" />
    </>
  );
}
