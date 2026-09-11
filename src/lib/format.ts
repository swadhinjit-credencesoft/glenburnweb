export function money(amount: number): string {
  return "$" + amount.toLocaleString("en-NZ");
}

export function toAmPm(t: string): string {
  const [h, m] = t.split(":");
  let hour = Number(h);
  const suffix = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  if (hour === 0) hour = 12;
  return `${hour}:${m} ${suffix}`;
}
