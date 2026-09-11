import type { ReactNode } from "react";

export interface ConfirmationRow {
  k: string;
  v: ReactNode;
}

export const CONFIRMATION_ROWS: ConfirmationRow[] = [
  { k: "Vehicle", v: <>KLM428 — 2016 Mazda 3 GSX</> },
  {
    k: "Tyres",
    v: (
      <>
        4 × Yokohama BluEarth-GT
        <br />
        225/45R17 91W
      </>
    ),
  },
  { k: "Also booked", v: <>3D laser wheel alignment</> },
  { k: "Time needed", v: <>About 60 minutes</> },
  {
    k: "Where",
    v: (
      <>
        1/61 Wolverton Street, Avondale 0600
        <br />
        Look for the iconic blue building
      </>
    ),
  },
  { k: "Paid", v: <>$824.80 · Visa ending 4218</> },
  {
    k: "Tyre Stewardship Fee",
    v: <>$30.60 included — leave your old tyres with us</>,
  },
];