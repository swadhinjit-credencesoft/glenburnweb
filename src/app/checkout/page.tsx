import type { Metadata } from "next";
import { CheckoutView } from "@/components/features/checkout";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Confirm your tyre fitting booking at Glenburn Tyres, Avondale.",
  robots: { index: false },
};

export default function CheckoutPage() {
  return <CheckoutView />;
}
