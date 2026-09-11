export const BOOKING_SERVICES = [
  "New tyres & fitting",
  "3D laser wheel alignment",
  "Drive-in puncture repair",
  "Central West Shock Shop — steering, suspension & brakes",
  "General tyre safety check",
  "Battery replacement",
];

export interface BookingState {
  plate: string;
  vehicle: string;
  services: Record<string, boolean>;
  date: string;
  timeOfDay: "morning" | "afternoon";
  fullName: string;
  mobile: string;
  email: string;
  notes: string;
}

export const INITIAL_BOOKING: BookingState = {
  plate: "KLM428",
  vehicle: "",
  services: { "New tyres & fitting": true },
  date: "Mon 11 Aug 2026",
  timeOfDay: "morning",
  fullName: "",
  mobile: "",
  email: "",
  notes: "",
};