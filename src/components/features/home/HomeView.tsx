"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Topbar, { BookTopbar } from "@/components/layout/Topbar";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PhotoHero from "@/components/ui/PhotoHero";
import QuickQuote from "./QuickQuote";
import { MAIN_NAV } from "@/data/navigation";
import { SITE } from "@/data/site";
import {
  AREAS,
  BRANDS,
  HERO_BADGES,
  REVIEWS,
  SERVICES,
  VALUES,
} from "@/data/home";

export default function HomeView() {
  const router = useRouter();

  return (
    <>
      <BookTopbar />
      <SiteHeader nav={MAIN_NAV} active="Tyres" />

      <PhotoHero
          image="/images/workshop.jpg"
          eyebrow="Independent · Avondale · Since 1989"
          title={
            <>
              Trusted independent tyre &amp; wheel specialists in{" "}
              <em>Avondale</em> since 1989
            </>
          }
          sub="Get premium safety, honest Kiwi advice, and unbeatable local service. Serving West Auckland driver-to-driver for over 35 years."
        >
          <div className="hctas">
            <button
              className="btn btn-p"
              onClick={() => router.push("/book")}
            >
              🚀 Request a quick quote
            </button>
            <a href={SITE.phoneHref} className="btn btn-w">📞 Call {SITE.phone}</a>
          </div>
          <div className="badges">
            {HERO_BADGES.map((b) => (
              <div className="badge2" key={b.bold}>
                <span className="dotA" />
                <b>{b.bold}</b>
                {b.span ? <span>{b.span}</span> : null}
              </div>
            ))}
          </div>
        </PhotoHero>

      {/* <div className="sec">
        <div className="wrap">
          <QuickQuote />
        </div>
      </div> */}

      <div className="sec">
        <div className="wrap">
          <div className="sechead">
            <h2>Why West Auckland chooses Glenburn</h2>
          </div>
          <div className="grid g3">
            {VALUES.map((v) => (
              <div className="val" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sec alt">
        <div className="wrap">
          <div className="sechead">
            <h2>What we do</h2>
            <p>
              Four specialist services, each with its own page — find the one
              your car needs.
            </p>
          </div>
          <div className="grid g4">
            {SERVICES.map((s) => (
              <div
                className="svc"
                key={s.code}
                style={
                  s.amber
                    ? { borderTopColor: "var(--amber)" }
                    : undefined
                }
              >
                <div className="ic">{s.code}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <div className="pr">{s.price}</div>
                <Link className="more" href={s.href}>
                  {s.linkLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sec">
        <div className="wrap">
          <div className="sechead">
            <h2>Brands we fit</h2>
            <p>
              Independent, so we&apos;re not tied to one manufacturer — we fit
              what suits your car, your roads and your budget.
            </p>
          </div>
          <div className="brandgrid">
            {BRANDS.map((b) => (
              <div key={b.name}>
                {b.image ? (
                  <img src={b.image} alt={`${b.name} logo`} />
                ) : (
                  <>
                    {b.name}
                    <small>{b.tier}</small>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sec alt">
        <div className="wrap">
          <div className="sechead">
            <h2>Real reviews from real neighbours</h2>
            <p>A selection of recent reviews from drivers across West Auckland.</p>
          </div>
          <div className="grid g3">
            {REVIEWS.map((r) => (
              <div className="rev" key={r.who}>
                <div className="st">★★★★★</div>
                <p>{r.text}</p>
                <div className="who">{r.who}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sec dark">
        <div className="wrap">
          <div className="sechead">
            <h2>Serving the Whau and West Auckland</h2>
            <p>
              Local pages for the suburbs we serve, so the nearest good
              workshop is easy to find.
            </p>
          </div>
          <div className="arealist">
            {AREAS.map((a) => (
              <span className="area" key={a}>
                {a}
              </span>
            ))}
          </div>
          <div style={{ marginTop: 22 }}>
            <Link href="/locations/avondale-rosebank-tyres" className="btn btn-p btn-sm">
              See a local page →
            </Link>
          </div>
        </div>
      </div>

      {/* NOTE — client to confirm before launch: content doc lists (09) 828 4180,
          street signage reads (09) 828 8341. Site standardized on (09) 828 4180. */}

      <SiteFooter variant="full" />
    </>
  );
}
