"use client";

import Link from "next/link";
import { SITE } from "@/data/site";

export default function MobileNav() {
  return (
    <nav className="mobilenav" aria-label="Mobile quick actions">
      <a href={SITE.phoneHref} className="mn-item mn-call" title={`Call Glenburn Tyres directly on ${SITE.phone}`}>
        <span className="mn-icon">📞</span>
        <span style={{ fontWeight: 800, color: "var(--amber)", fontSize: "11px" }}>Call (09) 828 4180</span>
      </a>
      <Link href="/book" className="mn-item">
        <span className="mn-icon">📅</span>
        <span>Book / Quote</span>
      </Link>
      <a
        href={SITE.addressHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mn-item"
      >
        <span className="mn-icon">📍</span>
        <span>Directions</span>
      </a>
    </nav>
  );
}