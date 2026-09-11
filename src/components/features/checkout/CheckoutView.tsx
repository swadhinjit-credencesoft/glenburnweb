"use client";

import { useRouter } from "next/navigation";
import Topbar from "@/components/layout/Topbar";
import SiteHeader from "@/components/layout/SiteHeader";
import PageHead from "@/components/ui/PageHead";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setField, setPayment } from "@/store/slices/checkoutSlice";
import { PAYMENT_OPTIONS } from "@/data/checkout";
import { SITE } from "@/data/site";

export default function CheckoutView() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const co = useAppSelector((s) => s.checkout);

  const field = (name: Parameters<typeof setField>[0]["field"]) => ({
    value: co[name],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(setField({ field: name, value: e.target.value })),
  });

  return (
    <>
      <Topbar
        right={
          <>
            SECURE CHECKOUT · 📞 <strong>{SITE.phone}</strong>
          </>
        }
      />
      <SiteHeader
        nav={[{ label: `Need help? ${SITE.phone}`, href: SITE.phoneHref }]}
      />

      <PageHead crumb="Checkout" title="Confirm your booking" />

      <div className="wrap">
        <div className="co">
          <div>
            <div className="costep">
              <h3>
                <span className="n">1</span> Your details
              </h3>
              <div className="cb">
                <div className="row2">
                  <div className="field">
                    <label>First name</label>
                    <input {...field("firstName")} />
                  </div>
                  <div className="field">
                    <label>Last name</label>
                    <input {...field("lastName")} />
                  </div>
                </div>
                <div className="row2">
                  <div className="field">
                    <label>Mobile — we text when it&apos;s done</label>
                    <input {...field("mobile")} />
                  </div>
                  <div className="field">
                    <label>Email</label>
                    <input {...field("email")} />
                  </div>
                </div>
                <div className="field">
                  <label>Registration</label>
                  <input
                    {...field("registration")}
                    style={{
                      fontFamily: "var(--font-plexmono), monospace",
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="costep">
              <h3>
                <span className="n">2</span> Your fitting slot
              </h3>
              <div className="cb">
                <div
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      background: "var(--deep)",
                      color: "var(--chalk)",
                      padding: "15px 19px",
                      textAlign: "center",
                      flex: "0 0 auto",
                    }}
                  >
                    <div
                      className="mono"
                      style={{ fontSize: 10, letterSpacing: ".18em", color: "var(--amber)" }}
                    >
                      MON
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-archivo), sans-serif",
                        fontWeight: 900,
                        fontSize: 32,
                        lineHeight: 1,
                        margin: "4px 0",
                      }}
                    >
                      11
                    </div>
                    <div className="mono" style={{ fontSize: 11 }}>
                      AUG 2026
                    </div>
                  </div>
                  <div style={{ flex: 1, minWidth: 210 }}>
                    <div
                      style={{
                        fontFamily: "var(--font-archivo), sans-serif",
                        fontWeight: 800,
                        fontSize: 21,
                        textTransform: "uppercase",
                      }}
                    >
                      10:30 AM
                    </div>
                    <p
                      style={{
                        fontSize: 14,
                        color: "var(--muted)",
                        marginTop: 6,
                        lineHeight: 1.55,
                      }}
                    >
                      1/61 Wolverton Street, Avondale — the iconic blue
                      building, right between Avondale and New Lynn. Allow
                      about an hour for four tyres plus the alignment.
                    </p>
                    <button
                      className="btn btn-o btn-sm"
                      style={{ marginTop: 11 }}
                      onClick={() => router.push("/tyres/bluearth-gt-ae51")}
                    >
                      Change slot
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="costep">
              <h3>
                <span className="n">3</span> Payment
              </h3>
              <div className="cb">
                {PAYMENT_OPTIONS.map((p) => (
                  <label
                    key={p.id}
                    className={`payopt${co.payment === p.id ? " on" : ""}`}
                  >
                    <input
                      type="radio"
                      name="pay"
                      checked={co.payment === p.id}
                      onChange={() => dispatch(setPayment(p.id))}
                    />{" "}
                    {p.label} <span className="tagx">{p.tag}</span>
                  </label>
                ))}
                <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 11 }}>
                  Choosing to pay on the day still holds your slot. We only ask
                  for card details if you want to pay now.
                </p>
              </div>
            </div>

            <button
              className="btn btn-p"
              style={{ width: "100%" }}
              onClick={() => router.push("/confirmation")}
            >
              Confirm booking — $824.80
            </button>
          </div>

          <aside className="summary">
            <h3>Order summary</h3>
            <div className="sitem">
              <div className="ti" />
              <div>
                <div className="nm">Yokohama BluEarth-GT</div>
                <div className="mt">225/45R17 91W · qty 4</div>
              </div>
              <div className="pv">$705.20</div>
            </div>
            <div className="sitem">
              <div className="ti" style={{ background: "var(--blue)" }} />
              <div>
                <div className="nm">3D laser alignment</div>
                <div className="mt">Four wheels</div>
              </div>
              <div className="pv">$89.00</div>
            </div>
            <div className="sitem">
              <div className="ti" style={{ background: "var(--muted)" }} />
              <div>
                <div className="nm">Fitting &amp; balancing</div>
                <div className="mt">Incl. valves &amp; disposal</div>
              </div>
              <div className="pv">$0.00</div>
            </div>
            <div className="legal">
              <b>Tyre Stewardship Fee</b>
              4 × $7.65 = <strong>$30.60</strong>. This is the regulated fee
              under the Waste Minimisation (Tyres) Regulations 2023. It funds
              nationwide recycling of end-of-life tyres, is passed on at cost
              with no markup, and appears on your invoice. Leave your old tyres
              with us — nothing more to pay for disposal.
            </div>
            <div className="sfoot">
              <div className="brow">
                <span>Subtotal</span>
                <span>$794.20</span>
              </div>
              <div className="brow tw">
                <span>Tyre Stewardship Fee</span>
                <span>$30.60</span>
              </div>
              <div className="brow" style={{ color: "var(--muted)" }}>
                <span>Includes GST 15%</span>
                <span>$110.25</span>
              </div>
              <div className="brow tot">
                <span>Total</span>
                <span>$824.80</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
