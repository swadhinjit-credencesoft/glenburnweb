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
        title="Get in touch with Glenburn Tyres & Central West Shock Shop"
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
                Look for the iconic blue building!
              </p>
            </div>
            <div>
              <h4>📞 Call or Email</h4>
              <p>
                Phone: <a href={SITE.phoneHref}>{SITE.phone}</a><br />
                Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </p>
              <p style={{ marginTop: 10, color: "var(--muted)", fontSize: 13.5 }}>
                Franchise: Central West Shock Shop
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
            <a href={SITE.phoneHref} className="btn btn-o">
              📞 Call Workshop
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

          <div className="msgform" style={{ marginTop: 34 }}>
            <h3>Send us a message</h3>
            {sent ? (
              <p className="note" style={{ marginTop: 12 }}>
                Thanks {form.name || "there"} — your message has been received.
                We&apos;ll get back to you within one working day. If it&apos;s
                urgent, call the workshop on {SITE.phone}.
              </p>
            ) : (
              <div className="grid g2" style={{ marginTop: 12 }}>
                <div className="fld">
                  <label>Your name</label>
                  <input value={form.name} onChange={update("name")} />
                </div>
                <div className="fld">
                  <label>Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                  />
                </div>
                <div className="fld">
                  <label>Phone</label>
                  <input
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="Optional"
                  />
                </div>
                <div className="fld">
                  <label>&nbsp;</label>
                </div>
                <div className="fld" style={{ gridColumn: "1 / -1" }}>
                  <label>Message</label>
                  <textarea
                    rows={4}
                    value={form.msg}
                    onChange={update("msg")}
                    placeholder="e.g. Looking to book a wheel alignment next week."
                  />
                </div>
                <div className="fld" style={{ gridColumn: "1 / -1" }}>
                  <button
                    className="btn btn-p"
                    onClick={() => setSent(true)}
                    disabled={!form.name || !form.msg}
                  >
                    Send message →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <SiteFooter variant="full" />
    </>
  );
}
