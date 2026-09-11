"use client";

import Link from "next/link";
import { BookTopbar } from "@/components/layout/Topbar";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PageHead from "@/components/ui/PageHead";
import { MAIN_NAV } from "@/data/navigation";
import { LANDING_LOCATIONS } from "@/data/locations";

export default function LocalLandingView() {
  return (
    <>
      <BookTopbar />
      <SiteHeader nav={MAIN_NAV} active="Areas" />

      <PageHead
        crumb="Home / Areas / Avondale & Rosebank Road"
        title="Fast-Turnaround Commercial & Fleet Tyre Services in Avondale & Rosebank Rd"
      >
        Built for trade utes, vans and local transport operators working the
        Rosebank industrial corridor.
      </PageHead>

      <div className="sec">
        <div className="wrap">
          <div className="grid g3">
            <div className="val">
              <h3>Commercial Fleet Express</h3>
              <p>
                Minimal downtime for tradies and local transport operators
                working along the Rosebank industrial corridor. Drop your ute or
                van off in the morning at 1/61 Wolverton Street and pick it up
                by lunch.
              </p>
            </div>
            <div className="val">
              <h3>Heavy-Duty Ute &amp; 4x4 Setup</h3>
              <p>
                Heavy loads and rough job sites wear tyres and suspension
                quickly. We supply reinforced commercial tyres, 4x4 all-terrain
                and mud terrain rubber, and Shock Shop heavy-duty spring
                upgrades.
              </p>
            </div>
            <div className="val">
              <h3>Find Us Easily</h3>
              <p>
                Located in the iconic Blue Building at 1/61 Wolverton Street,
                right between Avondale and New Lynn. Two minutes off Rosebank
                Road — look for the blue building.
              </p>
            </div>
          </div>
          <div style={{ marginTop: 22, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link href="/book" className="btn btn-p">
              Book a fleet slot
            </Link>
            <button className="btn btn-o">Open a trade account</button>
          </div>
        </div>
      </div>

      <div className="sec alt">
        <div className="wrap">
          <div className="sechead">
            <h2>The rest of the local network</h2>
            <p>
              Two more Glenburn workshops pages, each built around the drivers
              in its own suburb cluster.
            </p>
          </div>
          <div className="grid g3">
            {LANDING_LOCATIONS.filter((l) => l.url !== "/locations/avondale-rosebank-tyres/").map(
              (l) => (
                <Link className="loccard" key={l.url} href={l.url.replace(/\/$/, "")}>
                  <h3>{l.name}</h3>
                  <p>{l.body}</p>
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      <SiteFooter variant="simple" />
    </>
  );
}
