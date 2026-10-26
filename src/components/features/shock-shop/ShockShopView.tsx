"use client";

import Link from "next/link";
import { BookTopbar } from "@/components/layout/Topbar";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PhotoHero from "@/components/ui/PhotoHero";
import { MAIN_NAV } from "@/data/navigation";
import { SIGNS, PROCESS, HERO_BRANDS } from "@/data/shock-shop";
import { SITE } from "@/data/site";

export default function ShockShopView() {
  return (
    <>
      <BookTopbar />
      <SiteHeader nav={MAIN_NAV} active="Shock Specialists" />

      <PhotoHero
        image="/images/shockshop-hero.jpg"
        veilStyle={{
          background:
            "linear-gradient(100deg,rgba(22,24,26,.95) 0%,rgba(22,24,26,.88) 44%,rgba(22,24,26,.5) 78%,rgba(22,24,26,.38) 100%)",
        }}
        wrapStyle={{ paddingBottom: 52 }}
        eyebrow="Suspension & Mechanical Specialists · 16+ Years"
        title={
          <>
            Shock Specialist and other <em>mechanical repair shop</em>
          </>
        }
        sub="Don't let a bumpy ride or bad shocks ruin your handling. Expert WoF suspension repairs, shock absorber testing, Bilstein & Monroe installs, steering and underbody mechanical work."
      >
        <div className="hctas">
          <Link href="/book" className="btn btn-p">
            Book a suspension check
          </Link>
          <a href={SITE.phoneHref} className="btn btn-phone-light">📞 Call {SITE.phone}</a>
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
            <h2>How our suspension &amp; mechanical repairs run</h2>
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
              <h3>Commercial ute &amp; trade suspension</h3>
              <p>
                Heavy-duty spring and damper upgrades for constant load and trade carrying.
                Control arms, ball joints, sway bar links, and leaf spring replacements for
                vehicles working the Rosebank industrial corridor and West Auckland.
              </p>
            </div>
            <div className="val">
              <h3>Car battery testing &amp; replacement</h3>
              <p>
                Comprehensive digital battery load testing, charging system diagnosis,
                and prompt replacement with premium high-crank and start-stop (AGM/EFB)
                batteries on-site.
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

      <SiteFooter />
    </>
  );
}
