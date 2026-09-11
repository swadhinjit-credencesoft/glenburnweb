"use client";

import Link from "next/link";
import { SITE } from "@/data/site";

export default function MobileNav() {
  return (
    <nav className="mobilenav">
      <a href={SITE.phoneHref} className="mn-item">
        <span className="mn-icon">📞</span>
        <span>Call</span>
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