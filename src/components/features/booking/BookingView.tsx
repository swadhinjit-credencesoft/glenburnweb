"use client";

import { useRouter } from "next/navigation";
import { BookTopbar } from "@/components/layout/Topbar";
import SiteHeader from "@/components/layout/SiteHeader";
import { MAIN_NAV } from "@/data/navigation";
import PageHead from "@/components/ui/PageHead";
import { BOOKING_SERVICES } from "@/data/booking";
import { SITE } from "@/data/site";
import { toAmPm } from "@/lib/format";
import {
  setBookingField,
  setTimeOfDay,
  toggleService,
} from "@/store/slices/bookingSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export default function BookingView() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const booking = useAppSelector((s) => s.booking);
  const sat = SITE.hours.find((h) => !h.closed && h.days === "Saturday")!;

  return (
    <>
      <BookTopbar />
      <SiteHeader nav={MAIN_NAV} active="Book" />

      <PageHead
        crumb="Home / Book"
        title="Book your service or request a tyre quote in Avondale"
      >
        Fast, transparent and MTA-assured. Fill out the short form and Aveen
        and the team will confirm your time or come back to you within 30
        minutes.
      </PageHead>

      <div className="wrap">
        <div className="co">
          <div>
            <div className="costep">
              <h3>
                <span className="n">1</span> Your vehicle
              </h3>
              <div className="cb">
                <div className="row2">
                  <div className="field">
                    <label>Licence plate (optional)</label>
                    <input
                      value={booking.plate}
                      onChange={(e) =>
                        dispatch(
                          setBookingField({
                            field: "plate",
                            value: e.target.value,
                          })
                        )
                      }
                      style={{
                        fontFamily: "var(--font-plexmono), monospace",
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                      }}
                    />
                  </div>
                  <div className="field">
                    <label>Or make, model &amp; year</label>
                    <input
                      placeholder="Mazda CX-5, 2019"
                      value={booking.vehicle}
                      onChange={(e) =>
                        dispatch(
                          setBookingField({
                            field: "vehicle",
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="costep">
              <h3>
                <span className="n">2</span> Service required
              </h3>
              <div className="cb">
                {BOOKING_SERVICES.map((s) => (
                  <label
                    key={s}
                    className={`payopt${booking.services[s] ? " on" : ""}`}
                  >
                    <input
                      type="checkbox"
                      checked={!!booking.services[s]}
                      onChange={() => dispatch(toggleService(s))}
                    />{" "}
                    {s}
                  </label>
                ))}
              </div>
            </div>

            <div className="costep">
              <h3>
                <span className="n">3</span> Preferred date &amp; time
              </h3>
              <div className="cb">
                <div className="row2">
                  <div className="field">
                    <label>Date</label>
                    <input
                      value={booking.date}
                      onChange={(e) =>
                        dispatch(
                          setBookingField({
                            field: "date",
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                  <div className="field">
                    <label>Time of day</label>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button
                        className={`qbtn${booking.timeOfDay === "morning" ? " on" : ""}`}
                        style={{ flex: 1 }}
                        onClick={() => dispatch(setTimeOfDay("morning"))}
                      >
                        <span className="q" style={{ fontSize: 13 }}>
                          Morning
                        </span>
                        <span className="qs">7:30AM – 12PM</span>
                      </button>
                      <button
                        className={`qbtn${booking.timeOfDay === "afternoon" ? " on" : ""}`}
                        style={{ flex: 1 }}
                        onClick={() => dispatch(setTimeOfDay("afternoon"))}
                      >
                        <span className="q" style={{ fontSize: 13 }}>
                          Afternoon
                        </span>
                        <span className="qs">12PM – 5PM</span>
                      </button>
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: 12.5, color: "var(--muted)" }}>
                  Saturday mornings only, {toAmPm(sat.open)} –{" "}
                  {toAmPm(sat.close)}. Closed Sunday and public holidays.
                </p>
              </div>
            </div>

            <div className="costep">
              <h3>
                <span className="n">4</span> Contact details
              </h3>
              <div className="cb">
                <div className="row2">
                  <div className="field">
                    <label>Full name</label>
                    <input
                      placeholder="Sione Tuilagi"
                      value={booking.fullName}
                      onChange={(e) =>
                        dispatch(
                          setBookingField({
                            field: "fullName",
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                  <div className="field">
                    <label>Mobile number</label>
                    <input
                      placeholder="021 555 0148"
                      value={booking.mobile}
                      onChange={(e) =>
                        dispatch(
                          setBookingField({
                            field: "mobile",
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                </div>
                <div className="field">
                  <label>Email address</label>
                  <input
                    placeholder="you@example.co.nz"
                    value={booking.email}
                    onChange={(e) =>
                      dispatch(
                        setBookingField({ field: "email", value: e.target.value })
                      )
                    }
                  />
                </div>
                <div className="field">
                  <label>Notes / tyre sizes</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Looking for 4 SUV tyres for a Mazda CX-5"
                    value={booking.notes}
                    onChange={(e) =>
                      dispatch(
                        setBookingField({ field: "notes", value: e.target.value })
                      )
                    }
                  />
                </div>
              </div>
            </div>

            <button
              className="btn btn-p"
              style={{ width: "100%" }}
              onClick={() => router.push("/confirmation")}
            >
              🚀 Submit booking request
            </button>
          </div>

          <aside className="summary">
            <h3>Why book online</h3>
            <div className="sitem">
              <div className="ti" style={{ background: "var(--amber)" }} />
              <div>
                <div className="nm">30-minute reply</div>
                <div className="mt">During workshop hours</div>
              </div>
            </div>
            <div className="sitem">
              <div className="ti" style={{ background: "var(--blue)" }} />
              <div>
                <div className="nm">MTA assured</div>
                <div className="mt">Accredited workshop</div>
              </div>
            </div>
            <div className="sitem">
              <div className="ti" style={{ background: "var(--green)" }} />
              <div>
                <div className="nm">No obligation</div>
                <div className="mt">Quote first, decide after</div>
              </div>
            </div>
            <div className="sitem">
              <div className="ti" />
              <div>
                <div className="nm">35 years local</div>
                <div className="mt">Independent since 1989</div>
              </div>
            </div>
            <div className="legal">
              <b>Prefer to talk?</b> Call the workshop on {SITE.phone},{" "}
              {SITE.hours
                .filter((h) => !h.closed)
                .map(
                  (h) =>
                    `${h.days} ${toAmPm(h.open)} – ${toAmPm(h.close)}`
                )
                .join(" and ")}
              . Walk-ins are always welcome for puncture repairs and tyre
              checks.
            </div>
            <div className="sfoot">
              <button
                className="btn btn-o btn-sm"
                style={{ width: "100%" }}
                onClick={() => router.push("/tyres")}
              >
                Or price tyres yourself →
              </button>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
