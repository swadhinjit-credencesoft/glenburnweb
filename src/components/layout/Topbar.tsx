import Link from "next/link";
import { ReactNode } from "react";
import { SITE } from "@/data/site";

export default function Topbar({
  left,
  right,
}: {
  left?: ReactNode;
  right?: ReactNode;
}) {
  return (
    <div className="topbar">
      <div className="wrap">
        <span className="topbar-left">
          {left ?? (
            <>
              📍 {SITE.address}, Avondale — <strong>{SITE.landmark}</strong>
            </>
          )}
        </span>
        <span className="topbar-right mono">
          {right ?? (
            <div className="topbar-phone-unit">
              <a href={SITE.phoneHref} className="phone-link" title={`Call Glenburn Tyres on ${SITE.phone}`}>
                📞 <strong>{SITE.phone}</strong>
              </a>
              <span className="topbar-sub-loc">· {SITE.address} ({SITE.landmark})</span>
            </div>
          )}
        </span>
      </div>
    </div>
  );
}

export function BookTopbar() {
  return (
    <Topbar
      left={
        <>
          📍 {SITE.address}, Avondale — <strong>{SITE.landmark}</strong>
        </>
      }
      right={
        <>
          <a href={SITE.phoneHref} className="phone-link" title={`Call Glenburn Tyres on ${SITE.phone}`}>
            📞 <strong>{SITE.phone}</strong>
          </a>
          <span style={{ opacity: 0.5 }}>·</span>
          <Link href="/book" className="bk">
            📅 Book appointment
          </Link>
        </>
      }
    />
  );
}
