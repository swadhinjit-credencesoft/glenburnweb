"use client";

import Topbar from "@/components/layout/Topbar";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { CONFIRMATION_ROWS } from "@/data/confirmation";

export default function ConfirmationView() {
  return (
    <>
      <Topbar />
      <SiteHeader />

      <div className="conf">
        <div className="wrap">
          <div className="conftick">✓</div>
          <h1>Booked. See you Monday.</h1>
          <div className="ref">ORDER GB-2026-04817</div>
          <p
            style={{
              maxWidth: "52ch",
              margin: "15px auto 0",
              fontSize: 15.5,
              color: "var(--muted)",
            }}
          >
            Confirmation is on its way to sione.t@example.co.nz, and we&apos;ll
            text the morning of to remind you.
          </p>
          <div className="confcard">
            <div className="ch">
              <div className="k">Your fitting</div>
              <div className="v">Mon 11 Aug · 10:30 AM</div>
            </div>
            {CONFIRMATION_ROWS.map((r) => (
              <div className="confrow" key={r.k}>
                <span className="k">{r.k}</span>
                <span className="v">{r.v}</span>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              gap: 10,
              justifyContent: "center",
              marginTop: 24,
              flexWrap: "wrap",
            }}
          >
            <button className="btn btn-d btn-sm">Add to calendar</button>
            <button className="btn btn-o btn-sm">Get directions</button>
            <button className="btn btn-o btn-sm">Download tax invoice</button>
          </div>
        </div>
      </div>

      <SiteFooter variant="minimal" />
    </>
  );
}
