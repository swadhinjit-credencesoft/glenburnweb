import type { Metadata } from "next";
import { ConfirmationView } from "@/components/features/checkout";

export const metadata: Metadata = {
  title: "Booking Confirmed",
  description: "Your fitting is booked. See you at the workshop.",
  robots: { index: false },
};

export default function ConfirmationPage() {
  return <ConfirmationView />;
}
