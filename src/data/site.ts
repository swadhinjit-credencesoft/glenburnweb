export const SITE = {
  name: "Glenburn Tyres",
  legalName: "Glenburn Tyre Service Ltd",
  phone: "(09) 828 4180",
  phoneHref: "tel:+6498284180",
  email: "info@glenburntyres.co.nz",
  address: "1/61 Wolverton Street",
  addressLine2: "Avondale, Auckland 0600",
  addressHref:
    "https://maps.google.com/?q=1/61+Wolverton+Street+Avondale+Auckland",
  landmark: "the iconic blue building",
  hours: [
    {
      days: "Mon–Fri",
      time: "7:30–5:00",
      open: "07:30",
      close: "17:00",
      closed: false,
    },
    {
      days: "Saturday",
      time: "7:30–12:00",
      open: "07:30",
      close: "12:00",
      closed: false,
    },
    { days: "Sunday", time: "Closed", closed: true },
  ] as const,
} as const;

export type HourRow = (typeof SITE.hours)[number];
