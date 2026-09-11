export interface PaymentOption {
  id: string;
  label: string;
  tag: string;
}

export const PAYMENT_OPTIONS: PaymentOption[] = [
  { id: "card", label: "Card — Visa, Mastercard", tag: "SECURE" },
  {
    id: "afterpay",
    label: "Afterpay — 4 payments of $206.20",
    tag: "NO INTEREST",
  },
  {
    id: "counter",
    label: "Pay at the counter on the day",
    tag: "EFTPOS / CASH",
  },
  { id: "fleet", label: "Fleet or trade account", tag: "ROSEBANK RD TRADE" },
];

export interface CheckoutState {
  payment: string;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  registration: string;
}

export const INITIAL_CHECKOUT: CheckoutState = {
  payment: "card",
  firstName: "Sione",
  lastName: "Tuilagi",
  mobile: "021 555 0148",
  email: "sione.t@example.co.nz",
  registration: "KLM428",
};