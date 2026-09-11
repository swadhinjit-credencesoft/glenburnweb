"use client";

import { useState } from "react";
import Link from "next/link";
import { NavItem } from "@/types";
import { useAppSelector } from "@/store/hooks";
import { SITE } from "@/data/site";

export default function SiteHeader({
  nav,
  active,
}: {
  nav?: NavItem[];
  active?: string;
}) {
  const count = useAppSelector((s) => s.quote.count);
  const [open, setOpen] = useState(false);

  return (
    <header className="site">
      <div className="wrap">
        <Link className="lockup" href="/">
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
        <Link
          href="/book"
          className="cartbtn"
          style={{ textDecoration: "none" }}
          title="Book or request a quote"
        >
          Quote <span className="cnt">{count}</span>
        </Link>
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
              <a href={SITE.phoneHref} className="btn btn-w btn-sm">
                📞 Call {SITE.phone}
              </a>
              <Link href="/book" className="btn btn-p btn-sm" onClick={() => setOpen(false)}>
                📅 Book an appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}