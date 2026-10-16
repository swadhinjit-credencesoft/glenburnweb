"use client";

import { BookTopbar } from "@/components/layout/Topbar";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { MAIN_NAV } from "@/data/navigation";
import { useAppSelector } from "@/store/hooks";
import {
  CONFIRMATION_ROWS,
  type ConfirmationRow,
} from "@/data/confirmation";
import {
  buildBookingMessage,
  buildOrderMessage,
  mailtoUrl,
  whatsappUrl,
} from "@/lib/order";

export default function ConfirmationView() {
  const co = useAppSelector((s) => s.checkout);
  const product = useAppSelector((s) => s.product);
  const quote = useAppSelector((s) => s.quote);
  const booking = useAppSelector((s) => s.booking);

  const isBooking = booking.submitted;

  const orderMsg = isBooking
    ? buildBookingMessage(booking)
    : buildOrderMessage({
        checkout: co,
        product,
        quoteItems: quote.items,
      });

  const services = Object.keys(booking.services).filter(
    (k) => booking.services[k]
  );
  const vehicle =
    [booking.plate.trim(), booking.vehicle.trim()].filter(Boolean).join(" — ") ||
    "To be confirmed";

  const bookingRows = (
    [
      { k: "Vehicle", v: <>{vehicle}</> },
      services.length
        ? {
            k: "Services",
            v: (
              <>
                {services.map((s, i) => (
                  <span key={s}>
                    {i > 0 && <br />}
                    {s}
                  </span>
                ))}
              </>
            ),
          }
        : null,
      {
        k: "Where",
        v: (
          <>
            1/61 Wolverton Street, Avondale 0600
            <br />
            Look for the iconic blue building
          </>
        ),
      },
      booking.fullName.trim() || booking.mobile.trim()
        ? {
            k: "Contact",
            v: `${booking.fullName.trim()}${
              booking.mobile.trim() ? ` · ${booking.mobile.trim()}` : ""
            }`,
          }
        : null,
      booking.email.trim()
        ? { k: "Email", v: booking.email.trim() }
        : null,
      booking.notes.trim()
        ? { k: "Notes", v: booking.notes.trim() }
        : null,
    ] as Array<ConfirmationRow | null>
  ).filter((r): r is ConfirmationRow => r !== null);

  const rows = isBooking ? bookingRows : CONFIRMATION_ROWS;

  return (
    <>
      <BookTopbar />
      <SiteHeader nav={MAIN_NAV} />

      <div className="conf">
        <div className="wrap">
          <div className="conftick">✓</div>
          <h1>{isBooking ? "Booked. See you soon." : "Booked. See you Monday."}</h1>
          <div className="ref">ORDER GB-2026-04817</div>
          <p
            style={{
              maxWidth: "52ch",
              margin: "15px auto 0",
              fontSize: 15.5,
              color: "var(--muted)",
            }}
          >
            {isBooking
              ? booking.email.trim()
                ? `Confirmation is on its way to ${booking.email.trim()}`
                : "Keep an eye on your inbox"
              : co.email.trim()
              ? `Confirmation is on its way to ${co.email.trim()}`
              : "Keep an eye on your inbox"}
            {isBooking
              ? booking.mobile.trim()
                ? `, and we'll text ${booking.mobile.trim()} the morning of to remind you.`
                : " — text us if you'd like a reminder."
              : co.mobile.trim()
              ? `, and we'll text ${co.mobile.trim()} the morning of to remind you.`
              : " — text us if you'd like a reminder."}
          </p>
          <div className="confcard">
            <div className="ch">
              <div className="k">Your fitting</div>
              <div className="v">
                {isBooking
                  ? `${booking.date} · ${booking.slot}`
                  : "Mon 11 Aug · 10:30 AM"}
              </div>
            </div>
            {rows.map((r) => (
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

      <SiteFooter />
    </>
  );
}
