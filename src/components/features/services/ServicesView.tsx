"use client";

import Link from "next/link";
import { BookTopbar } from "@/components/layout/Topbar";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PageHead from "@/components/ui/PageHead";
import JsonLd from "@/components/ui/JsonLd";
import { MAIN_NAV } from "@/data/navigation";
import { SERVICES } from "@/data/services";
import { SITE } from "@/data/site";

export default function ServicesView() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Glenburn Tyre Service & Central West Shock Shop",
    url: "https://glenburntyres.co.nz/services",
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address,
      addressLocality: "Avondale, Auckland",
      postalCode: "0600",
      addressCountry: "NZ",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tyre, Alignment & Suspension Services",
      itemListElement: SERVICES.map((s, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.body,
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "NZD",
          description: s.price,
        },
        position: index + 1,
      })),
    },
  };

  return (
    <>
      <JsonLd data={servicesSchema} />
      <BookTopbar />
      <SiteHeader nav={MAIN_NAV} active="Services" />

      <PageHead
        crumb="Home / Services"
        title="Specialist Workshop Services in Avondale"
      >
        Independent tyre supply and fitting, high-precision 3D laser wheel alignment,
        express puncture repairs, and official Central West Shock Shop steering &amp; suspension.
      </PageHead>

      {/* Quick Jump Navigation */}
      <nav className="services-nav-bar" aria-label="Services quick navigation">
        <div className="wrap">
          <div className="nav-pills">
            {SERVICES.map((s) => (
              <a key={s.id} href={`#${s.id}`}>
                <span className="code-badge">{s.code}</span>
                {s.id === "tyre-fitting"
                  ? "Tyre Fitting & Supply"
                  : s.id === "wheel-alignment"
                  ? "3D Laser Alignment"
                  : s.id === "puncture-repair"
                  ? "Puncture Repairs"
                  : "Shock Shop & Suspension"}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {SERVICES.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={i % 2 === 0 ? "sec" : "sec alt"}
          style={{ scrollMarginTop: 110 }}
        >
          <div className="wrap">
            <div className="service-card-block">
              {/* Meta Header */}
              <div className="service-meta-bar">
                <span className={`service-eyebrow ${s.amber ? "amber" : ""}`}>
                  {s.eyebrow}
                </span>
                <span className="service-price-tag">{s.price}</span>
              </div>

              {/* Main Headlines */}
              <h2 className="service-main-heading">{s.title}</h2>
              <p className="service-lead-body">{s.body}</p>

              {/* Key Quick Highlight Chips */}
              {s.highlights && s.highlights.length > 0 && (
                <div className="service-highlights-row">
                  {s.highlights.map((hl) => (
                    <div className="highlight-chip" key={hl.label}>
                      <span className="hl-label">{hl.label}</span>
                      <span className="hl-val">{hl.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Two-Column Grid: Left (Specs, What's Included, Brands) + Right (Expert SEO Content) */}
              <div className="service-content-grid">
                {/* Left Column: What's Included & Brands */}
                <div className="service-panel">
                  <h3>
                    <span>📦</span> What&apos;s Included
                  </h3>
                  <ul className="whats-included-list">
                    {s.whatsIncluded.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  {/* Structured Brand Grid for Tyre Fitting & Shock Shop */}
                  {s.brands.length > 0 && (
                    <div style={{ marginTop: 24 }}>
                      <h3 style={{ fontSize: 15, marginBottom: 8 }}>
                        <span>🏷️</span> {s.id === "shock-shop" ? "Brands Installed & Serviced" : "Key Brands Stocked & Fitted"}
                      </h3>
                      <div className="structured-brand-grid">
                        {s.brands.map((b) => (
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

                  {/* Actions Cluster */}
                  <div className="service-cta-cluster">
                    <div className="cta-buttons">
                      <Link href={s.href} className="btn btn-p">
                        {s.cta} →
                      </Link>
                      {s.id !== "shock-shop" && (
                        <Link href="/book" className="btn btn-s">
                          Book Appointment
                        </Link>
                      )}
                      <a href={SITE.phoneHref} className="btn btn-phone">
                        📞 Call {SITE.phone}
                      </a>
                    </div>
                    <span className="cta-help-text">
                      📍 1/61 Wolverton St, Avondale · No appointment needed for tyre checks &amp; puncture repairs
                    </span>
                  </div>
                </div>

                {/* Right Column: Expert Long-Form Insights & Diagnostic Advice */}
                <div className="service-panel">
                  <h3>
                    <span>💡</span> Expert Guide &amp; Technical Insights
                  </h3>
                  <div className="expert-insights-block">
                    {s.expertSections.map((sec) => (
                      <div
                        className={`expert-card ${s.amber ? "amber" : ""}`}
                        key={sec.title}
                      >
                        <h4>{sec.title}</h4>
                        <p>{sec.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom Advice Banner */}
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
            Drop by our Avondale workshop on Wolverton Street or give our technicians a call.
            We provide transparent diagnosis and honest advice before any work begins — no pushy sales, no surprises.
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
