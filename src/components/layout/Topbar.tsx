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
        <span>
          {left ?? (
            <>
              📍 {SITE.address}, Avondale
            </>
          )}
        </span>
        <span className="mono">
          {right ?? (
            <>
              📞 <strong>{SITE.phone}</strong>
            </>
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
          📞 <strong>{SITE.phone}</strong> &nbsp;·&nbsp;{" "}
          <Link href="/book" className="bk">
            📅 Book an appointment
          </Link>
        </>
      }
    />
  );
}
