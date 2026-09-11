import Link from "next/link";
import { SITE } from "@/data/site";

export default function SiteFooter({
  variant = "full",
}: {
  variant?: "full" | "simple" | "minimal" | "shock";
}) {
  if (variant === "shock") {
    return (
      <footer className="site">
        <div className="wrap">
          <div className="bottom" style={{ border: "none", paddingTop: 0 }}>
            <span>
              © 2026 {SITE.legalName} · Official Central West Shock Shop
              franchise
            </span>
            <span>{SITE.phone}</span>
          </div>
        </div>
      </footer>
    );
  }

  if (variant === "minimal") {
    return (
      <footer className="site" style={{ marginTop: 28 }}>
        <div className="wrap">
          <div className="bottom" style={{ border: "none", paddingTop: 0 }}>
            <span>© 2026 {SITE.legalName}</span>
            <span>MTA Assured · Registered Tyrewise retailer</span>
          </div>
        </div>
      </footer>
    );
  }

  if (variant === "simple") {
    return (
      <footer className="site">
        <div className="wrap">
          <div className="bottom" style={{ border: "none", paddingTop: 0 }}>
            <span>© 2026 {SITE.legalName}</span>
            <span>MTA Assured workshop</span>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="site">
      <div className="wrap">
        <div className="cols">
          <div>
<div className="lockup" style={{ marginBottom: 13, display: 'flex', alignItems: 'center', gap: 8 }}>
<img
            className="site-logo"
            src="/images/logo2.png"
            alt="Glenburn Tyres"
          />
        </div>
        <p style={{ fontSize: 13, fontWeight: 300, maxWidth: "34ch" }}>
              Independent tyre, wheel and suspension specialists in Avondale
              since 1989. Official Central West Shock Shop franchise.
            </p>
          </div>
          <div>
            <h4>Services</h4>
            <Link href="/tyres">Tyre fitting &amp; supply</Link>
            <Link href="/book">3D laser wheel alignment</Link>
            <Link href="/book">Puncture repair</Link>
            <Link href="/shock-shop">Central West Shock Shop</Link>
            <Link href="/shock-shop">4x4 lift kits</Link>
          </div>
          <div>
            <h4>Areas served</h4>
            <Link href="/locations/avondale-rosebank-tyres">
              Avondale &amp; Rosebank Rd
            </Link>
            <Link href="/locations/new-lynn-tyres-suspension">
              New Lynn &amp; Whau
            </Link>
            <Link href="/locations/glendene-titirangi-tyres">
              Glendene &amp; Kelston
            </Link>
            <Link href="/locations/glendene-titirangi-tyres">
              Titirangi foothills
            </Link>
            <Link href="/locations/new-lynn-tyres-suspension">
              Blockhouse Bay
            </Link>
          </div>
          <div>
            <h4>Contact</h4>
            <a href={SITE.phoneHref}>{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a
              href={SITE.addressHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {SITE.address}, Avondale 0600
            </a>
            {SITE.hours.map((h) => (
              <div
                className="hourrow"
                key={h.days}
                style={h.closed ? { color: "#7E93A6" } : undefined}
              >
                <span>{h.days}</span>
                <span>{h.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bottom">
          <span>© 2026 {SITE.legalName} · MTA Assured workshop</span>
          <span>Registered Tyrewise retailer</span>
        </div>
      </div>
    </footer>
  );
}
