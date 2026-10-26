import { ServicesView } from "@/components/features/services";

export const metadata = {
  title: "Tyre Fitting, 3D Laser Alignment & Mechanical Services | Avondale, West Auckland",
  description:
    "Quality tyre fitting from $89, 3D laser wheel alignment from $89, drive-in puncture repairs from $35, car batteries, and shock specialist & mechanical repairs in Avondale, West Auckland. Call (09) 828 8341.",
  openGraph: {
    title: "Tyre Fitting, 3D Laser Alignment & Mechanical Services | Glenburn Tyres Avondale",
    description:
      "Expert tyre fitting, 3D laser wheel alignment, express puncture repairs, batteries, and shock specialist & mechanical repair shop in Avondale, West Auckland.",
    url: "https://glenburntyres.co.nz/services",
    siteName: "Glenburn Tyres",
    locale: "en_NZ",
    type: "website",
  },
};

export default function ServicesPage() {
  return <ServicesView />;
}
