"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PROTO_TABS } from "@/data/navigation";

export default function Protobar() {
  const pathname = usePathname();

  return (
    <div className="protobar">
      <span className="pl">Glenburn Tyres — Mockup v2</span>
      <div className="tabs">
        {PROTO_TABS.map((t) => (
          <Link
            key={t.id}
            href={t.href}
            className={`tab${pathname === t.href ? " on" : ""}`}
          >
            <span className="n">{t.num}</span>
            {t.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
