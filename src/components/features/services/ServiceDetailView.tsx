"use client";

import Link from "next/link";
import { BookTopbar } from "@/components/layout/Topbar";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PageHead from "@/components/ui/PageHead";
import JsonLd from "@/components/ui/JsonLd";
import BookingPanel from "./BookingPanel";
import { MAIN_NAV } from "@/data/navigation";
import { SERVICES, type ServiceItem } from "@/data/services";
import { SITE } from "@/data/site";

const LABELS: Record<string, string> = {
  "tyre-fitting": "Tyre Fitting & Supply",
  "wheel-alignment": "3D Laser Alignment",
  "puncture-repair": "Puncture Repairs",
  "shock-shop": "Shock Shop & Suspension",
};

export default function ServiceDetailView({
  service,
}: {
  service: ServiceItem;
}) {
  const related = SERVICES.filter((s) => s.id !== service.id);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.body,
    serviceType: LABELS[service.id] ?? service.title,
    url: `https://glenburntyres.co.nz/services/${service.id}`,
    provider: {
      "@type": "AutoRepair",
      name: "Glenburn Tyre Service & Central West Shock Shop",
      telephone: SITE.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address,
        addressLocality: "Avondale, Auckland",
        postalCode: "0600",
        addressCountry: "NZ",
      },
    },
    areaServed: ["Avondale", "New Lynn", "Glendene", "Kelston", "Titirangi"],
  };

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <BookTopbar />
      <SiteHeader nav={MAIN_NAV} active="Services" />

      <PageHead
        crumb={`Home / Services / ${LABELS[service.id] ?? service.title}`}
        title={service.title}
      >
        {service.body}
      </PageHead>

      <section className="sec" id={service.id}>
        <div className="wrap">
          <div className="service-card-block">
            <div className="service-meta-bar">
              <span className={`service-eyebrow ${service.amber ? "amber" : ""}`}>
                {service.eyebrow}
              </span>
              <span className="service-price-tag">{service.price}</span>
            </div>

            <h2 className="service-main-heading">{service.title}</h2>
            <p className="service-lead-body">{service.body}</p>

            {service.highlights && service.highlights.length > 0 && (
              <div className="service-highlights-row">
                {service.highlights.map((hl) => (
                  <div className="highlight-chip" key={hl.label}>
                    <span className="hl-label">{hl.label}</span>
                    <span className="hl-val">{hl.value}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="service-content-grid has-booking">
              <div className="service-panel">
                <h3>
                  <span>📦</span> What&apos;s Included
                </h3>
                <ul className="whats-included-list">
                  {service.whatsIncluded.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {service.brands.length > 0 && (
                  <div style={{ marginTop: 24 }}>
                    <h3 style={{ fontSize: 15, marginBottom: 8 }}>
                      <span>🏷️</span>{" "}
                      {service.id === "shock-shop"
                        ? "Brands Installed & Serviced"
                        : "Key Brands Stocked & Fitted"}
                    </h3>
                    <div className="structured-brand-grid">
                      {service.brands.map((b) => (
                        <div className="brand-card-item" key={b.name}>
                          {b.image ? (
                            <div className="brand-logo-wrap">
                              <img
                                src={b.image}
                                alt={`${b.name} logo`}
                                loading="lazy"
                              />
                            </div>
                          ) : (
                            <span className="brand-name-text">{b.name}</span>
                          )}
                          <span className="brand-tier-label">{b.tier}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="service-cta-cluster">
                  <div className="cta-buttons">
                    <Link href={service.href} className="btn btn-p">
                      {service.cta} →
                    </Link>
                    <Link href="/book" className="btn btn-s">
                      Book Appointment
                    </Link>
                    <a href={SITE.phoneHref} className="btn btn-phone">
                      📞 Call {SITE.phone}
                    </a>
                  </div>
                  <span className="cta-help-text">
                    📍 1/61 Wolverton St, Avondale · No appointment needed for
                    tyre checks &amp; puncture repairs
                  </span>
                </div>
              </div>

              <div className="service-panel">
                <h3>
                  <span>💡</span> Expert Guide &amp; Technical Insights
                </h3>
                <div className="expert-insights-block">
                  {service.expertSections.map((sec) => (
                    <div
                      className={`expert-card ${service.amber ? "amber" : ""}`}
                      key={sec.title}
                    >
                      <h4>{sec.title}</h4>
                      <p>{sec.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              <aside className="service-booking">
                <BookingPanel serviceId={service.id} />
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sechead">
            <h2>Other services</h2>
            <p>
              Not sure which one you need? Call us and we&apos;ll diagnose it
              before recommending any work.
            </p>
          </div>
          <div className="service-related">
            {related.map((r) => (
              <Link className="related-link" key={r.id} href={`/services/${r.id}`}>
                <span className="code-badge">{r.code}</span>
                <span className="related-title">{r.title}</span>
                <span className="related-price">{r.price}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec dark">
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2>Not sure what your vehicle needs?</h2>
          <p
            style={{
              marginTop: 10,
              fontSize: 16,
              maxWidth: 580,
              margin: "10px auto 0",
              lineHeight: 1.6,
            }}
          >
            Drop by our Avondale workshop on Wolverton Street or give our
            technicians a call. We provide transparent diagnosis and honest
            advice before any work begins.
          </p>
          <div
            style={{
              marginTop: 24,
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/book" className="btn btn-p">
              Book a Free Safety Inspection
            </Link>
            <a href={SITE.phoneHref} className="btn btn-phone-light">
              📞 Call {SITE.phone}
            </a>
            <a
              href={SITE.addressHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-s"
            >
              🗺️ Get Directions to Avondale
            </a>
          </div>
        </div>
      </section>

      <SiteFooter variant="full" />
    </>
  );
}