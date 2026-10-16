import { SITE } from "./site";
import { toAmPm } from "@/lib/format";

export const BOOKING_SERVICES = [
  "New tyres & fitting",
  "3D laser wheel alignment",
  "Drive-in puncture repair",
  "Central West Shock Shop — steering, suspension & brakes",
  "General tyre safety check",
  "Battery replacement",
];

function toMinutes(t: string): number {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

// Hourly appointment slots derived from the workshop's weekday opening hours.
function buildSlots(open: string, close: string) {
  const noon = toMinutes("12:00");
  const morning: string[] = [];
  const afternoon: string[] = [];
  for (let t = toMinutes(open); t < toMinutes(close); t += 60) {
    const hh = String(Math.floor(t / 60)).padStart(2, "0");
    const mm = String(t % 60).padStart(2, "0");
    const label = toAmPm(`${hh}:${mm}`);
    (t < noon ? morning : afternoon).push(label);
  }
  return { morning, afternoon };
}

const WEEKDAY = SITE.hours[0];

export const BOOKING_SLOTS: Record<"morning" | "afternoon", string[]> =
  buildSlots(WEEKDAY.open, WEEKDAY.close);

export interface BookingState {
  plate: string;
  vehicle: string;
  services: Record<string, boolean>;
  date: string;
  timeOfDay: "morning" | "afternoon";
  slot: string;
  fullName: string;
  mobile: string;
  email: string;
  notes: string;
  submitted: boolean;
}

export const INITIAL_BOOKING: BookingState = {
  plate: "KLM428",
  vehicle: "",
  services: { "New tyres & fitting": true },
  date: "Mon 11 Aug 2026",
  timeOfDay: "morning",
  slot: BOOKING_SLOTS.morning[0],
  fullName: "",
  mobile: "",
  email: "",
  notes: "",
  submitted: false,
};