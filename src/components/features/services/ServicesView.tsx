"use client";

import Link from "next/link";
import { BookTopbar } from "@/components/layout/Topbar";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PageHead from "@/components/ui/PageHead";
import { MAIN_NAV } from "@/data/navigation";
import { SERVICES } from "@/data/services";
import { SITE } from "@/data/site";

export default function ServicesView() {
  return (
    <>
      <BookTopbar />
      <SiteHeader nav={MAIN_NAV} active="Services" />

      <PageHead
        crumb="Home / Services"
        title="Our services"
      >
        Four specialist service lines backed by 35 years of experience, MTA accreditation and the Central West Shock Shop franchise.
      </PageHead>

      {SERVICES.map((s, i) => (
        <div key={s.id} className={i % 2 === 0 ? "sec" : "sec alt"}>
          <div className="wrap">
            <div id={s.id} style={{ scrollMarginTop: 120 }} />
            <div className="sechead">
              <h2>{s.title}</h2>
              <p>{s.body}</p>
            </div>
            <div className="grid g2" style={{ alignItems: "start" }}>
              <div>
                <h3 style={{ marginBottom: 10 }}>What's included</h3>
                <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
                  {s.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                {s.brands.length > 0 && (
                  <div style={{ marginTop: 14 }}>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "var(--muted)", marginBottom: 8 }}>
                      Brands stocked
                    </p>
                    <div className="brandrow brandrow-light">
                      {s.brands.map((b) =>
                        b.image ? (
                          <span className="brandlogo" key={b.name}>
                            <img
                              src={b.image}
                              alt={`${b.name} logo`}
                              loading="lazy"
                            />
                          </span>
                        ) : (
                          <span className="brandchip brandchip-light" key={b.name}>
                            {b.name}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )}
                <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <Link href={s.href} className="btn btn-p">
                    {s.cta} →
                  </Link>
                  <span style={{ fontSize: 15, fontWeight: 600, alignSelf: "center" }}>
                    {s.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="sec dark">
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2>Not sure what you need?</h2>
          <p style={{ marginTop: 8, fontSize: 16, maxWidth: 520, margin: "8px auto 0" }}>
            Drop in or call and we'll diagnose the issue before recommending any work. No obligation, no pressure.
          </p>
          <div style={{ marginTop: 20, display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/book" className="btn btn-p">Book a free inspection</Link>
            <a href={SITE.phoneHref} className="btn btn-w">📞 Call {SITE.phone}</a>
          </div>
        </div>
      </div>

      <SiteFooter variant="full" />
    </>
  );
}
