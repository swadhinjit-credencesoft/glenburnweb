"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Topbar from "@/components/layout/Topbar";
import SiteHeader from "@/components/layout/SiteHeader";
import { MAIN_NAV } from "@/data/navigation";
import { getTyre, PDP_DETAIL, QTY_OPTIONS } from "@/data/tyres";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setQty, setSlot, setAddon } from "@/store/slices/productSlice";
import { addToQuote, setQuoteCount } from "@/store/slices/quoteSlice";
import { money } from "@/lib/format";
import { SITE } from "@/data/site";

export default function TyreDetailView({ slug }: { slug: string }) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const product = useAppSelector((s) => s.product);
  const tyre = getTyre(slug);
  const detail = slug === PDP_DETAIL.slug ? PDP_DETAIL : null;

  const priceEach = tyre?.priceEach ?? 0;
  const slots = detail?.slots ?? [];
  const addons = detail?.addons ?? [];

  useEffect(() => {
    dispatch(setQuoteCount(product.qty));
  }, [product.qty, dispatch]);

  if (!tyre) return null;

  const handleBookFitting = () => {
    dispatch(
      addToQuote({
        slug: tyre.slug,
        brand: tyre.brand,
        name: tyre.name,
        size: tyre.size,
        qty: product.qty,
        priceEach: tyre.priceEach,
      })
    );
    router.push("/checkout");
  };

  return (
    <>
      <Topbar
        right={
          <>
            📞 <strong>{SITE.phone}</strong> · MTA ASSURED
          </>
        }
      />
      <SiteHeader nav={MAIN_NAV.slice(0, 4).concat(MAIN_NAV[5])} active="Tyres" />

      <div className="wrap">
        <div className="pdp">
          <div className="pdpmain">
            <div className="brand">
              {detail ? detail.brandLine : `${tyre.brand} · fitted & balanced`}
            </div>
            <h1>{tyre.name}</h1>
            <div className="sz">{tyre.size}</div>
            <div className="viz">
              <div className="bigtyre">
                <span className="balancedot" />
                <span className="dotlbl">Balance mark</span>
              </div>
            </div>
            {detail && (
              <>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    marginBottom: 10,
                  }}
                >
                  Who this is for
                </h3>
                <p
                  style={{
                    fontSize: 15.5,
                    lineHeight: 1.65,
                    marginBottom: 18,
                    maxWidth: "60ch",
                    color: "#33383C",
                  }}
                >
                  {detail.whoFor}
                </p>
                <table className="spec">
                  <tbody>
                    <tr>
                      <th colSpan={2}>Specification</th>
                    </tr>
                    {detail.specs.map((row) => (
                      <tr key={row.k}>
                        <td>{row.k}</td>
                        <td>{row.v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </div>

          <aside className="buybox">
            <div className="bb-price">
              <div className="each">${priceEach}</div>
              <div className="lbl">
                {detail
                  ? detail.priceLbl
                  : "per tyre, fitted & balanced. GST included."}
              </div>
            </div>
            <div className="bb-body">
              <span className="flabel">How many?</span>
              <div className="qty">
                {QTY_OPTIONS.map((q) => (
                  <button
                    key={q}
                    className={`qbtn${product.qty === q ? " on" : ""}`}
                    onClick={() => dispatch(setQty(q))}
                  >
                    <span className="q">{q}</span>
                    <span className="qs">{money(q * priceEach)}</span>
                  </button>
                ))}
              </div>

              <span className="flabel">Pick your fitting slot</span>
              <div className="slotgrid">
                {slots.map((s) => (
                  <button
                    key={s.id}
                    className={`slot${s.off ? " off" : ""}${
                      product.slotId === s.id ? " on" : ""
                    }`}
                    disabled={s.off}
                    onClick={() => dispatch(setSlot(s.id))}
                  >
                    <span className="d">{s.day}</span>
                    <span className="t">{s.time}</span>
                  </button>
                ))}
              </div>
              {detail && (
                <p
                  style={{
                    fontSize: 12.5,
                    color: "var(--muted)",
                    marginBottom: 15,
                  }}
                >
                  {detail.slotHint}
                </p>
              )}

              {addons.length > 0 && (
                <>
                  <span className="flabel">Add while it&apos;s on the hoist</span>
                  {addons.map((a) => (
                    <label
                      className="fopt"
                      key={a.id}
                      style={{ marginBottom: a.id === "inspection" ? 15 : 7 }}
                    >
                      <input
                        type="checkbox"
                        checked={!!product.addons[a.id]}
                        onChange={(e) =>
                          dispatch(
                            setAddon({ id: a.id, checked: e.target.checked })
                          )
                        }
                      />{" "}
                      {a.label} <span className="ct">{a.price}</span>
                    </label>
                  ))}
                </>
              )}

              <div className="breakdown">
                {detail ? (
                  <>
                    {detail.breakdown.map((b) => (
                      <div
                        key={b.label}
                        className={`brow${b.tw ? " tw" : ""}`}
                        style={b.muted ? { color: "var(--muted)" } : undefined}
                      >
                        <span>{b.label}</span>
                        <span>{b.value}</span>
                      </div>
                    ))}
                    <div className="brow tot">
                      <span>Total</span>
                      <span>{detail.total}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="brow">
                      <span>
                        {product.qty} × {tyre.brand} {tyre.name}
                      </span>
                      <span>{money(product.qty * priceEach)}</span>
                    </div>
                    <div className="brow">
                      <span>Fitting, balancing &amp; valves</span>
                      <span>Included</span>
                    </div>
                    <div className="brow tot">
                      <span>Total</span>
                      <span>{money(product.qty * priceEach)}</span>
                    </div>
                  </>
                )}
              </div>

              <button
                className="btn btn-p"
                style={{ width: "100%", marginTop: 15 }}
                onClick={handleBookFitting}
              >
                Book this fitting
              </button>
              <button
                className="btn btn-o btn-sm"
                style={{ width: "100%", marginTop: 8 }}
                onClick={() => router.push("/book")}
              >
                Or request a quote instead
              </button>
              <p
                style={{
                  fontSize: 12,
                  color: "var(--muted)",
                  marginTop: 11,
                  textAlign: "center",
                }}
              >
                Pay now or pay at the counter — your slot is held either way.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
