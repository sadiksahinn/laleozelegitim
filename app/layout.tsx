import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/data/content";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Sincan Özel Eğitim Merkezi`, template: `%s | ${site.shortName}` },
  description: "Sincan’da özel eğitim ve rehabilitasyon desteği. Bireysel eğitim, grup eğitimi, otizm, dil-konuşma, öğrenme güçlüğü ve aile danışmanlığı.",
  keywords: ["Sincan özel eğitim", "Sincan rehabilitasyon merkezi", "Ankara özel eğitim", "Eryaman özel eğitim", "Etimesgut özel eğitim"],
  openGraph: { title: site.name, description: "Sincan ve Ankara çevresinde güven veren özel eğitim desteği.", url: site.url, siteName: site.name, locale: "tr_TR", type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return <html lang="tr"><body>{children}</body></html>;
}
