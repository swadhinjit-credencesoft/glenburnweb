"use client";

import Link from "next/link";
import { BookTopbar } from "@/components/layout/Topbar";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PageHead from "@/components/ui/PageHead";
import { SISTER_LOCATIONS } from "@/data/locations";
import { MAIN_NAV } from "@/data/navigation";
import { SITE } from "@/data/site";

export default function LocationsIndexView() {
  return (
    <>
      <BookTopbar />
      <SiteHeader nav={MAIN_NAV} active="Areas" />

      <PageHead
        crumb="Home / Areas"
        title="Tyres, alignment & suspension across West Auckland"
      >
        One independent workshop at {SITE.address}, {SITE.landmark} — serving
        Avondale, New Lynn, Glendene, Kelston, the Whau and the Titirangi
        foothills. Pick your area for local pricing, stock and turnarounds.
      </PageHead>

      <div className="sec">
        <div className="wrap">
          <div className="grid g3">
            {SISTER_LOCATIONS.map((l) => (
              <Link
                className="loccard"
                key={l.slug}
                href={l.url.replace(/\/$/, "")}
              >
                <h3>{l.areas.join(", ")}</h3>
                <p>{l.intro}</p>
              </Link>
            ))}
          </div>

          <div
            style={{
              marginTop: 22,
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            <Link href="/book" className="btn btn-p">
              Book a fitting
            </Link>
            <Link href="/tyres" className="btn btn-o">
              Browse tyre prices
            </Link>
            <a href={SITE.phoneHref} className="btn btn-o">
              📞 Call {SITE.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="sec alt">
        <div className="wrap">
          <div className="sechead">
            <h2>Where we are</h2>
            <p>
Every area page is served by the same workshop, so you get the
                same prices, the same stock and the same workmanship wherever
                you drive in from.
            </p>
          </div>
          <div className="grid g3">
            <div className="val">
              <h3>Avondale &amp; Rosebank Rd</h3>
              <p>
                {SITE.address}, {SITE.addressLine2} — two minutes off Rosebank
                Road, plenty of parking out front.
              </p>
            </div>
            <div className="val">
              <h3>Workshop hours</h3>
              <p>
                {SITE.hours
                  .filter((h) => !h.closed)
                  .map((h) => `${h.days} ${h.time}`)
                  .join(" · ")}
                . Closed Sunday.
              </p>
            </div>
            <div className="val">
              <h3>Getting there</h3>
              <p>
                Opposite the Avondale racecourse, right between Avondale and
                New Lynn. Look for{" "}
                <a href={SITE.addressHref} target="_blank" rel="noopener noreferrer">
                  the blue building on the map
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}