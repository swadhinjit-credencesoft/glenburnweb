"use client";

import { useState } from "react";
import Link from "next/link";
import { NavItem } from "@/types";
import { SITE } from "@/data/site";

export default function SiteHeader({
  nav,
  active,
}: {
  nav?: NavItem[];
  active?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site">
      <div className="wrap">
        <Link className="lockup" href="/" title="Glenburn Tyres — Home">
          <img
            className="site-logo"
            src="/images/glenburnlogo.png"
            alt="Glenburn Tyres"
          />
        </Link>
        {nav && nav.length > 0 && (
          <nav className="main">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={active === item.label ? "act" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}

        <a
          href={SITE.phoneHref}
          className="header-phone"
          title={`Call Glenburn Tyres directly on ${SITE.phone}`}
        >
          📞 {SITE.phone}
        </a>

        <button
          className={`mnavbtn${open ? " on" : ""}`}
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="mnavdrop">
          <div className="wrap">
            {nav?.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={active === item.label ? "act" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mnavcta">
              <a href={SITE.phoneHref} className="btn btn-phone btn-sm">
                📞 Call {SITE.phone}
              </a>
              <Link href="/book" className="btn btn-p btn-sm" onClick={() => setOpen(false)}>
                📅 Book appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}