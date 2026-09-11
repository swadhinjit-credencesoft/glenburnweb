import type { CheckoutState } from "@/data/checkout";
import type { ProductState } from "@/data/product";
import type { QuoteItem } from "@/data/quote";
import { PAYMENT_OPTIONS } from "@/data/checkout";
import { SITE } from "@/data/site";
import { PDP_DETAIL } from "@/data/tyres";
import { money } from "./format";

export const ALIGNMENT_PRICE = 89;
export const STEWARDSHIP_EACH = 7.65;

// Fallback order line used when the visitor reaches /checkout directly
// without adding tyres from the product page (matches the on-screen summary).
const FALLBACK = {
  qty: 4,
  subtotal: 705.2,
  line: "4 x Yokohama BluEarth-GT (225/45R17 91W)",
};

export interface OrderPayload {
  checkout: CheckoutState;
  product: ProductState;
  quoteItems: QuoteItem[];
}

export interface OrderTotals {
  qty: number;
  subtotal: number;
  alignment: number;
  stewardship: number;
  total: number;
}

export function orderTotals(
  items: QuoteItem[],
  product: ProductState
): OrderTotals {
  const hasItems = items.length > 0;
  const qty = hasItems ? items.reduce((s, i) => s + i.qty, 0) : FALLBACK.qty;
  const subtotal = hasItems
    ? items.reduce((s, i) => s + i.qty * i.priceEach, 0)
    : FALLBACK.subtotal;
  const alignment = product.addons.alignment ? ALIGNMENT_PRICE : 0;
  const stewardship = qty * STEWARDSHIP_EACH;
  return {
    qty,
    subtotal,
    alignment,
    stewardship,
    total: subtotal + alignment + stewardship,
  };
}

export function slotTime(slotId: string): string {
  return PDP_DETAIL.slots.find((s) => s.id === slotId)?.time ?? "To confirm";
}

export function slotLabel(slotId: string): string {
  const slot = PDP_DETAIL.slots.find((s) => s.id === slotId);
  return slot ? `${slot.day} · ${slot.time}` : "To be confirmed";
}

export function paymentLabel(id: string): string {
  return PAYMENT_OPTIONS.find((p) => p.id === id)?.label ?? id;
}

function orderLines(items: QuoteItem[]): string {
  if (items.length === 0) return FALLBACK.line;
  return items
    .map(
      (i) =>
        `${i.qty} x ${i.brand} ${i.name} ${i.size} @ ${money(
          i.priceEach
        )} = ${money(i.qty * i.priceEach)}`
    )
    .join("\n");
}

export function buildOrderMessage(p: OrderPayload): string {
  const { checkout: c, product, quoteItems } = p;
  const t = orderTotals(quoteItems, product);
  const parts: Array<string | null> = [
    "NEW BOOKING — Glenburn Tyres",
    `Name: ${c.firstName.trim()} ${c.lastName.trim()}`.trim(),
    `Mobile: ${c.mobile}`,
    c.email.trim() ? `Email: ${c.email.trim()}` : null,
    `Registration: ${c.registration.trim() || "—"}`,
    `Fitting slot: ${slotLabel(product.slotId)}`,
    "",
    "Order:",
    orderLines(quoteItems),
    product.addons.alignment ? `+ 3D laser wheel alignment = ${money(ALIGNMENT_PRICE)}` : null,
    "",
    `Subtotal: ${money(t.subtotal)}`,
    `Tyre Stewardship Fee (${t.qty} x ${money(STEWARDSHIP_EACH)}): ${money(t.stewardship)}`,
    `Total: ${money(t.total)}`,
    `Payment: ${paymentLabel(c.payment)}`,
  ];
  return parts.filter((l): l is string => l !== null).join("\n");
}

export function whatsappUrl(text: string): string {
  return `https://wa.me/${SITE.waNumber}?text=${encodeURIComponent(text)}`;
}

export function mailtoUrl(text: string): string {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(
    "New booking — Glenburn Tyres"
  )}&body=${encodeURIComponent(text)}`;
}