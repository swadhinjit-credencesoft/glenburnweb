"use client";

import Link from "next/link";
import { BookTopbar } from "@/components/layout/Topbar";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PhotoHero from "@/components/ui/PhotoHero";
import { MAIN_NAV } from "@/data/navigation";
import { SIGNS, PROCESS, HERO_BRANDS } from "@/data/shock-shop";

export default function ShockShopView() {
  return (
    <>
      <BookTopbar />
      <SiteHeader nav={MAIN_NAV} active="Shock Shop" />

      <PhotoHero
        image="/images/shockshop-hero.jpg"
        veilStyle={{
          background:
            "linear-gradient(100deg,rgba(22,24,26,.95) 0%,rgba(22,24,26,.88) 44%,rgba(22,24,26,.5) 78%,rgba(22,24,26,.38) 100%)",
        }}
        wrapStyle={{ paddingBottom: 52 }}
        eyebrow="Official franchise · 16+ years"
        title={
          <>
            Central West <em>Shock Shop</em> &amp; steering specialists
          </>
        }
        sub="Don't let a bumpy ride or bad shocks ruin your handling. Expert WoF suspension repairs, shock absorber testing, Bilstein and Tein installs, and custom 4x4 lift kits."
      >
        <div className="hctas">
          <Link href="/book" className="btn btn-p">
            Book a free suspension check
          </Link>
          <button className="btn btn-w">📞 Talk to a technician</button>
        </div>
        <div className="brandrow">
          {HERO_BRANDS.map((b) => (
            <span className="brandchip" key={b}>
              {b}
            </span>
          ))}
        </div>
      </PhotoHero>

      <div className="sec">
        <div className="wrap">
          <div className="sechead">
            <h2>Signs your suspension needs attention</h2>
            <p>
              If you recognise two or more of these, book the free check — it
              takes about twenty minutes.
            </p>
          </div>
          <div className="grid g3">
            {SIGNS.map((s) => (
              <div className="val" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sec alt">
        <div className="wrap">
          <div className="sechead">
            <h2>How a Shock Shop job runs</h2>
            <p>
              Suspension is diagnostic work. It needs a conversation before a
              quote — which is exactly what a 35-year workshop is good at, and
              why this service is enquiry-led rather than add-to-cart.
            </p>
          </div>
          <div className="grid g3">
            {PROCESS.map((p) => (
              <div
                className="svc"
                key={p.code}
                style={{ borderTopColor: "var(--amber)" }}
              >
                <div className="ic">{p.code}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <div className="pr">{p.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sec">
        <div className="wrap">
          <div className="sechead">
            <h2>Specialist work</h2>
          </div>
          <div className="grid g2">
            <div className="val">
              <h3>4x4 lift kits</h3>
              <p>
                Custom 4WD lift kits supplied and installed for utes and wagons
                working the Rosebank industrial corridor and heading further
                afield. Heavy-duty spring upgrades for constant load.
              </p>
            </div>
            <div className="val">
              <h3>Performance lowering springs</h3>
              <p>
                Bilstein and Tein lowering and coilover setups, installed with
                a precision alignment to match. Race and track alignment specs
                available on request.
              </p>
            </div>
          </div>
          <p className="note" style={{ marginTop: 18 }}>
            <b>How to book</b>
            Suspension is diagnostic work — it needs a conversation before a
            quote. Use the booking form, tell us your vehicle, the symptom and
            how you use the car, and the workshop will come back to you with a
            straight answer within 24 hours.
          </p>
        </div>
      </div>

      <SiteFooter variant="shock" />
    </>
  );
}
