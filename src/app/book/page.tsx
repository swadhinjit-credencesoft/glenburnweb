import type { Metadata } from "next";
import { BookingView } from "@/components/features/booking";

export const metadata: Metadata = {
  title: "Book a Service or Request a Tyre Quote",
  description:
    "Book your tyre fitting, 3D laser wheel alignment, puncture repair, car battery, or mechanical service online. Fast and transparent. Glenburn Tyres, Avondale.",
};

export default function BookPage() {
  return <BookingView />;
}
