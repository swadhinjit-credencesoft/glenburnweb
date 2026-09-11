import type { Metadata } from "next";
import { BookingView } from "@/components/features/booking";

export const metadata: Metadata = {
  title: "Book a Service or Request a Tyre Quote",
  description:
    "Book your tyre fitting, 3D wheel alignment, puncture repair or Shock Shop service online. Fast, transparent, MTA-assured. Glenburn Tyres, Avondale.",
};

export default function BookPage() {
  return <BookingView />;
}
