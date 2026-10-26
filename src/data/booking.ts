export const BOOKING_SERVICES = [
  "New tyres & fitting",
  "3D laser wheel alignment",
  "Drive-in puncture repair",
  "Shock Specialist & mechanical repairs",
  "General tyre safety check",
  "Car batteries & testing",
];

export const BOOKING_SLOTS: Record<"morning" | "afternoon", string[]> = {
  morning: ["7:30 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM"],
  afternoon: [
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "Other specific time",
  ],
};

export interface BookingState {
  plate: string;
  vehicle: string;
  services: Record<string, boolean>;
  date: string;
  timeOfDay: "morning" | "afternoon";
  slot: string;
  customTime?: string;
  fullName: string;
  mobile: string;
  email: string;
  notes: string;
  submitted: boolean;
}

export const INITIAL_BOOKING: BookingState = {
  plate: "",
  vehicle: "",
  services: { "New tyres & fitting": true },
  date: "",
  timeOfDay: "morning",
  slot: "7:30 AM",
  customTime: "",
  fullName: "",
  mobile: "",
  email: "",
  notes: "",
  submitted: false,
};
