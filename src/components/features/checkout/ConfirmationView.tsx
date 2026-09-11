"use client";

import Topbar from "@/components/layout/Topbar";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { useAppSelector } from "@/store/hooks";
import { CONFIRMATION_ROWS } from "@/data/confirmation";
import {
  buildOrderMessage,
  mailtoUrl,
  whatsappUrl,
} from "@/lib/order";

export default function ConfirmationView() {
  const co = useAppSelector((s) => s.checkout);
  const product = useAppSelector((s) => s.product);
  const quote = useAppSelector((s) => s.quote);

  const orderMsg = buildOrderMessage({
    checkout: co,
    product,
    quoteItems: quote.items,
  });
  return (
    <>
      <Topbar />
      <SiteHeader />

      <div className="conf">
        <div className="wrap">
          <div className="conftick">✓</div>
          <h1>Booked. See you Monday.</h1>
          <div className="ref">ORDER GB-2026-04817</div>
          <p
            style={{
              maxWidth: "52ch",
              margin: "15px auto 0",
              fontSize: 15.5,
              color: "var(--muted)",
            }}
          >
            {co.email.trim() ? `Confirmation is on its way to ${co.email.trim()}` : "Keep an eye on your inbox"}
            {co.mobile.trim() ? `, and we'll text ${co.mobile.trim()} the morning of to remind you.` : " — text us if you'd like a reminder."}
          </p>
          <div className="confcard">
            <div className="ch">
              <div className="k">Your fitting</div>
              <div className="v">Mon 11 Aug · 10:30 AM</div>
            </div>
            {CONFIRMATION_ROWS.map((r) => (
              <div className="confrow" key={r.k}>
                <span className="k">{r.k}</span>
                <span className="v">{r.v}</span>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              gap: 10,
              justifyContent: "center",
              marginTop: 24,
              flexWrap: "wrap",
            }}
          >
            <a
              className="btn btn-d btn-sm"
              href={whatsappUrl(orderMsg)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Send your booking on WhatsApp
            </a>
            <a className="btn btn-o btn-sm" href={mailtoUrl(orderMsg)}>
              Email this booking
            </a>
          </div>
          <p
            style={{
              maxWidth: "46ch",
              margin: "16px auto 0",
              fontSize: 13,
              color: "var(--muted)",
            }}
          >
            Click one of the buttons above to send the booking details to
            Glenburn Tyres so we can lock in your slot.
          </p>
        </div>
      </div>

      <SiteFooter variant="minimal" />
    </>
  );
}
