import type { Metadata } from "next";
import { Archivo, Barlow, IBM_Plex_Mono } from "next/font/google";
import "./globals.scss";
import StoreProvider from "@/store/StoreProvider";
import MobileNav from "@/components/layout/MobileNav";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plexmono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Glenburn Tyres — Tyres, Alignment & Shock Shop | Avondale",
    template: "%s | Glenburn Tyres",
  },
  description:
    "Independent tyre, wheel and suspension specialists in Avondale since 1989. MTA assured. Official Central West Shock Shop franchise.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NZ" className={`${archivo.variable} ${barlow.variable} ${plexMono.variable}`}>
      <body>
        <StoreProvider>
          <div className="frame">
            <div className="screen on">{children}</div>
          </div>
          <MobileNav />
        </StoreProvider>
      </body>
    </html>
  );
}
