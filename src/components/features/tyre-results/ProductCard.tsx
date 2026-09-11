"use client";

import { useRouter } from "next/navigation";
import type { Tyre } from "@/types";

function Bars({ filled }: { filled: number }) {
  return (
    <span className="bars">
      {[0, 1, 2, 3, 4].map((i) => (
        <i key={i} className={`bar${i < filled ? " f" : ""}`} />
      ))}
    </span>
  );
}

export default function ProductCard({ tyre }: { tyre: Tyre }) {
  const router = useRouter();

  const badgeStyle =
    tyre.badge?.variant === "dark"
      ? { background: "var(--carbon)", color: "var(--chalk)" }
      : undefined;

  return (
    <article className={`pcard${tyre.best ? " best" : ""}`}>
      <div className="pimg">
        {tyre.badge && (
          <span
            className={`badge${tyre.badge.variant === "blue" ? " blue" : ""}`}
            style={badgeStyle}
          >
            {tyre.badge.text}
          </span>
        )}
        <div className="tyreic" />
      </div>
      <div className="pinfo">
        <div className="brand">{tyre.brand}</div>
        <h3>{tyre.name}</h3>
        <div className="sz">{tyre.size}</div>
        <div className="chips">
          {tyre.chips.map((c) => (
            <span key={c.text} className={`chip${c.green ? " g" : ""}`}>
              {c.text}
            </span>
          ))}
        </div>
        {tyre.wetGrip !== undefined && (
          <>
            <div className="rat">
              <span style={{ fontSize: 12, color: "var(--muted)", width: 70 }}>
                Wet grip
              </span>
              <Bars filled={tyre.wetGrip} />
            </div>
            <div className="rat" style={{ marginTop: 5 }}>
              <span style={{ fontSize: 12, color: "var(--muted)", width: 70 }}>
                Tread life
              </span>
              <Bars filled={tyre.treadLife ?? 0} />
            </div>
          </>
        )}
        {tyre.usedNote && (
          <p
            style={{
              fontSize: 13.5,
              color: "var(--muted)",
              marginTop: 8,
              lineHeight: 1.5,
            }}
          >
            {tyre.usedNote}
          </p>
        )}
      </div>
      <div className="pbuy">
        <div className="each">${tyre.priceEach}</div>
        <div className="lbl">each, fitted &amp; balanced</div>
        <div className="four">{tyre.multiLabel}</div>
        <div className={`stock${tyre.stockLow ? " low" : ""}`}>
          {tyre.stockLine}
        </div>
        <button
          className="btn btn-p btn-sm"
          onClick={() => router.push(`/tyres/${tyre.slug}`)}
        >
          Choose this tyre
        </button>
      </div>
    </article>
  );
}
