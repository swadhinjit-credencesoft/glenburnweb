"use client";

import Link from "next/link";
import { BookTopbar } from "@/components/layout/Topbar";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PhotoHero from "@/components/ui/PhotoHero";
import { MAIN_NAV } from "@/data/navigation";
import { SITE } from "@/data/site";
import { toAmPm } from "@/lib/format";

export default function AboutView() {
  return (
    <>
      <BookTopbar />
      <SiteHeader nav={MAIN_NAV} active="About" />

      <PhotoHero
        image="/images/workshop.jpg"
        wrapStyle={{ paddingBottom: 46 }}
        eyebrow="About Glenburn"
        title={
          <>
            35 years on the tools in <em>West Auckland</em>
          </>
        }
        sub="Founded in 1989, Glenburn Tyres was built on a simple promise: honest service, expert advice, and treating every customer like a neighbour. Over 35 years later, Aveen and the team continue that legacy at 1/61 Wolverton Street, Avondale."
      />

      <div className="sec">
        <div className="wrap">
          <div className="sechead">
            <h2>The workshop</h2>
            <p>
              Step inside and you&apos;ll find a proper four-bay workshop run by
              people who treat every car like their own — the blue building
              Avondale drivers have trusted since 1989.
            </p>
          </div>
          <div className="grid g3">
            <div className="val">
              <h3>Aveen &amp; the team</h3>
              <p>
                Named technicians, on the tools, who customers ask for by name
                in their Google reviews. That&apos;s an asset a national chain
                cannot buy.
              </p>
            </div>
            <div className="val">
              <h3>Modern fitting machinery</h3>
              <p>
                3D laser alignment rig, touchless tyre changers and calibrated
                balancers — the equipment that lets a small shop match a
                franchise on precision.
              </p>
            </div>
            <div className="val">
              <h3>MTA accredited</h3>
              <p>
                MTA Assured since day one. Every repair, every fitting and
                every alignment is carried out to the standards the Motor Trade
                Association stands behind.
              </p>
            </div>
          </div>
          <p className="note" style={{ marginTop: 18 }}>
            <b>How to find us</b>
            Look for the bright blue building on the corner of Wolverton
            Street, directly opposite the Avondale racecourse. Plenty of
            parking right out front — pull on in.
          </p>
        </div>
      </div>

      <div className="sec alt">
        <div className="wrap">
          <div className="sechead">
            <h2>
              Get in touch with Glenburn Tyres &amp; Central West Shock Shop
            </h2>
            <p>
              Serving Avondale, New Lynn and West Auckland drivers for over 35
              years. Pop in, call us, or send a message.
            </p>
          </div>
          <div className="cgrid">
            <div>
              <h4>📍 Visit the workshop</h4>
              <p>
                Glenburn Tyres
                <br />
                1/61 Wolverton Street
                <br />
                Avondale, Auckland 0600
              </p>
              <p style={{ marginTop: 10, color: "var(--blue)", fontWeight: 600 }}>
                Look for the iconic blue building
              </p>
            </div>
            <div>
              <h4>📞 Call or email</h4>
              <p>
                Phone: <a href={SITE.phoneHref}>{SITE.phone}</a>
                <br />
                Email: info@glenburntyres.co.nz
              </p>
              <p style={{ marginTop: 10, color: "var(--muted)", fontSize: 13.5 }}>
                Franchise: Central West Shock Shop
              </p>
            </div>
            <div>
              <h4>⏰ Opening hours</h4>
              {SITE.hours.map((h) => (
                <div
                  className="hourrow"
                  key={h.days}
                  style={h.closed ? { color: "var(--muted)" } : undefined}
                >
                  <span>{h.days}</span>
                  <span>
                    {h.closed ? h.time : `${toAmPm(h.open)} – ${toAmPm(h.close)}`}
                  </span>
                </div>
              ))}
              <div className="hourrow" style={{ color: "var(--muted)" }}>
                <span>Public holidays</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 20, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link href="/book" className="btn btn-p">
              📅 Book an appointment
            </Link>
            <a
              href={SITE.addressHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-o"
            >
              📍 Get directions
            </a>
          </div>
        </div>
      </div>

      <SiteFooter variant="full" />
    </>
  );
}
