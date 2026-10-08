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

const LABELS: Record<string, string> = {
  "tyre-fitting": "Tyre Fitting & Supply",
  "wheel-alignment": "3D Laser Alignment",
  "puncture-repair": "Puncture Repairs",
  "shock-shop": "Shock Shop & Suspension",
};

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
          url: `https://glenburntyres.co.nz/services/${s.id}`,
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
        Independent tyre supply and fitting, high-precision 3D laser wheel
        alignment, express puncture repairs, and official Central West Shock
        Shop steering &amp; suspension.
      </PageHead>

      <section className="sec">
        <div className="wrap">
          <div className="service-hub-grid">
            {SERVICES.map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.id}`}
                className={`service-hub-card${s.amber ? " amber" : ""}`}
              >
                <div className="hub-meta">
                  <span className={`code-badge ${s.amber ? "amber" : ""}`}>
                    {s.code}
                  </span>
                  <span className="hub-price">{s.price}</span>
                </div>

                <span className="hub-eyebrow">{s.eyebrow}</span>
                <h2 className="hub-title">{s.title}</h2>
                <p className="hub-body">{s.body}</p>

                <ul className="hub-included">
                  {s.whatsIncluded.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="hub-foot">
                  <span className="hub-cta">{s.cta} →</span>
                  <span className="hub-count">
                    {LABELS[s.id]}
                  </span>
                </div>
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
            advice before any work begins — no pushy sales, no surprises.
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