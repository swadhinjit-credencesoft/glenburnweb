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
            {nav.map((item) =>
              item.children && item.children.length > 0 ? (
                <div className="hasdrop" key={item.label}>
                  <Link
                    href={item.href}
                    className={`${active === item.label ? "act " : ""}droplink`}
                    aria-haspopup="menu"
                    aria-expanded="false"
                  >
                    {item.label}
                    <span className="caret" aria-hidden="true" />
                  </Link>
                  <div className="drop" role="menu">
                    <Link className="dropall" href={item.href} role="menuitem">
                      View all services
                    </Link>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        onClick={() => setOpen(false)}
                      >
                        <span className="droplabel">{child.label}</span>
                        {child.desc && (
                          <span className="dropdesc">{child.desc}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={active === item.label ? "act" : undefined}
                >
                  {item.label}
                </Link>
              )
            )}
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
            {nav?.map((item) =>
              item.children && item.children.length > 0 ? (
                <div key={item.label} className="msub">
                  <Link
                    href={item.href}
                    className={active === item.label ? "act" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                  <div className="msubitems">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={active === item.label ? "act" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
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