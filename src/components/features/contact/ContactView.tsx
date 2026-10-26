"use client";

import { useState } from "react";
import Link from "next/link";
import { BookTopbar } from "@/components/layout/Topbar";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PageHead from "@/components/ui/PageHead";
import { MAIN_NAV } from "@/data/navigation";
import { SITE } from "@/data/site";
import { toAmPm } from "@/lib/format";

export default function ContactView() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", msg: "" });

  const update = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <>
      <BookTopbar />
      <SiteHeader nav={MAIN_NAV} active="Contact" />

      <PageHead
        crumb="Home / Contact"
        title="Get in touch with Glenburn Tyres"
      >
        Serving Avondale, New Lynn, and West Auckland drivers for over 35 years. Pop in, call us, or send us a message below.
      </PageHead>

      <div className="sec">
        <div className="wrap">
          <div className="cgrid">
            <div>
              <h4>📍 Visit the Workshop</h4>
              <p>
                Glenburn Tyres<br />
                1/61 Wolverton Street<br />
                Avondale, Auckland 0600
              </p>
              <p style={{ marginTop: 10, color: "var(--blue)", fontWeight: 600 }}>
                {SITE.landmark}
              </p>
            </div>
            <div>
              <h4>📞 Call or Email</h4>
              <p>
                Phone: <a href={SITE.phoneHref} style={{ fontWeight: 800, color: "var(--blue)", fontSize: 16 }}>{SITE.phone}</a><br />
                Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </p>
              <p style={{ marginTop: 10, color: "var(--muted)", fontSize: 13.5 }}>
                Shock Specialist &amp; Other Mechanical Repair Shop
              </p>
            </div>
            <div>
              <h4>⏰ Opening Hours</h4>
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
                <span>Public Holidays</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 24, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link href="/book" className="btn btn-p">
              📅 Book an Appointment
            </Link>
            <a href={SITE.phoneHref} className="btn btn-phone">
              📞 Call {SITE.phone}
            </a>
            <a
              href={SITE.addressHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-o"
            >
              📍 Get Directions
            </a>
          </div>
        </div>
      </div>

      <SiteFooter variant="full" />
    </>
  );
}
