"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BOOKING_SERVICES } from "@/data/booking";
import { SITE } from "@/data/site";
import { toAmPm } from "@/lib/format";
import {
  setBookingField,
  setTimeOfDay,
  toggleService,
} from "@/store/slices/bookingSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const SERVICE_TO_OPTION: Record<string, number> = {
  "tyre-fitting": 0,
  "wheel-alignment": 1,
  "puncture-repair": 2,
  "shock-shop": 3,
};

export default function BookingPanel({ serviceId }: { serviceId: string }) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const booking = useAppSelector((s) => s.booking);
  const sat = SITE.hours.find((h) => !h.closed && h.days === "Saturday")!;

  const selectedIndex = SERVICE_TO_OPTION[serviceId] ?? 0;
  const selected = BOOKING_SERVICES[selectedIndex];

  // Render the correct preselection in the static HTML too; after hydration
  // the redux slice takes over (and is synced to this service on mount).
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Preselect the service this page belongs to and clear the others.
    BOOKING_SERVICES.forEach((o) => {
      const wanted = o === selected;
      if (booking.services[o] !== wanted) dispatch(toggleService(o));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const field = (
    name:
      | "plate"
      | "vehicle"
      | "date"
      | "fullName"
      | "mobile"
      | "email"
      | "notes"
  ) => ({
    value: booking[name],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      dispatch(setBookingField({ field: name, value: e.target.value })),
  });

  return (
    <div className="service-booking-card">
      <div className="booking-head">
        <span className="booking-badge">⏱ Book this service</span>
        <span className="booking-price">{selected}</span>
      </div>

      <div className="booking-services">
        {BOOKING_SERVICES.map((s) => (
          <label
            key={s}
            className={`payopt${
              mounted ? (booking.services[s] ? " on" : "") : s === selected ? " on" : ""
            }`}
          >
            <input
              type="checkbox"
              checked={mounted ? !!booking.services[s] : s === selected}
              onChange={() => dispatch(toggleService(s))}
            />{" "}
            {s}
          </label>
        ))}
      </div>

      <div className="field">
        <label>Date</label>
        <input value={field("date").value} onChange={field("date").onChange} />
      </div>

      <div className="field">
        <label>Time of day</label>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            className={`qbtn${booking.timeOfDay === "morning" ? " on" : ""}`}
            style={{ flex: 1 }}
            onClick={() => dispatch(setTimeOfDay("morning"))}
          >
            <span className="q" style={{ fontSize: 12.5 }}>
              Morning
            </span>
            <span className="qs">7:30AM – 12PM</span>
          </button>
          <button
            className={`qbtn${booking.timeOfDay === "afternoon" ? " on" : ""}`}
            style={{ flex: 1 }}
            onClick={() => dispatch(setTimeOfDay("afternoon"))}
          >
            <span className="q" style={{ fontSize: 12.5 }}>
              Afternoon
            </span>
            <span className="qs">12PM – 5PM</span>
          </button>
        </div>
      </div>

      <div className="field">
        <label>Vehicle – make, model &amp; year</label>
        <input placeholder="Mazda CX-5, 2019" {...field("vehicle")} />
      </div>

      <div className="row2">
        <div className="field">
          <label>Name</label>
          <input placeholder="Full name" {...field("fullName")} />
        </div>
        <div className="field">
          <label>Mobile</label>
          <input placeholder="021 555 0148" {...field("mobile")} />
        </div>
      </div>

      <div className="field">
        <label>Email</label>
        <input placeholder="you@example.co.nz" {...field("email")} />
      </div>

      <div className="field">
        <label>Notes / tyre sizes (optional)</label>
        <textarea
          rows={2}
          placeholder="e.g. 4 × 225/55 R18"
          value={field("notes").value}
          onChange={field("notes").onChange}
        />
      </div>

      <button
        className="btn btn-p"
        style={{ width: "100%" }}
        onClick={() => router.push("/confirmation")}
      >
        🚀 Submit booking request
      </button>

      <p className="booking-foot">
        Sat mornings only, {toAmPm(sat.open)} – {toAmPm(sat.close)}. Closed Sun
        &amp; public holidays. Prefer to talk? <a href={SITE.phoneHref}>Call{" "}
        {SITE.phone}</a> or use the <Link href="/book">full booking form</Link>.
      </p>
    </div>
  );
}