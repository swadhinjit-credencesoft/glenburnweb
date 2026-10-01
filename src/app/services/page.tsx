import { ServicesView } from "@/components/features/services";

export const metadata = {
  title: "Tyre Fitting, 3D Laser Alignment & Suspension Services | Avondale, West Auckland",
  description:
    "Quality tyre fitting from $89, 3D laser wheel alignment, drive-in puncture repairs, and official Central West Shock Shop steering & suspension services in Avondale, West Auckland. Call (09) 828 4180.",
  openGraph: {
    title: "Tyre Fitting, 3D Laser Alignment & Suspension Services | Glenburn Tyres Avondale",
    description:
      "Expert tyre fitting, 3D laser wheel alignment, express puncture repairs, and Central West Shock Shop suspension in Avondale, West Auckland.",
    url: "https://glenburntyres.co.nz/services",
    siteName: "Glenburn Tyres",
    locale: "en_NZ",
    type: "website",
  },
};

export default function ServicesPage() {
  return <ServicesView />;
}
