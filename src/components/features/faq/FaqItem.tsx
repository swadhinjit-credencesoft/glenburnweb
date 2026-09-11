"use client";

import { useState } from "react";
import type { FaqItem as FaqItemType } from "@/types";

export default function FaqItem({
  item,
  defaultOpen,
}: {
  item: FaqItemType;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`faq${open ? "" : " closed"}`}>
      <button
        type="button"
        className="q"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {item.q}
        <span className="pm">{open ? "\u2212" : "+"}</span>
      </button>
      <div className="a">{item.a}</div>
    </div>
  );
}
