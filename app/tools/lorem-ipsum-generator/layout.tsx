import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator Online Gratis",
  description:
    "Buat teks Lorem Ipsum online dan gratis dengan jumlah 10–500 kata. Cocok untuk kebutuhan desain, mockup, layout website, dan pengembangan aplikasi. Generate dan salin teks dengan mudah.",
  alternates: {
    canonical: "https://smarttools.id/tools/lorem-ipsum-generator",
  },
  openGraph: {
    title: "Lorem Ipsum Generator Online Gratis | SmartTools Indonesia",
    description:
      "Generate teks Lorem Ipsum sesuai jumlah kata yang kamu butuhkan untuk desain dan pengembangan website.",
    url: "https://smarttools.id/tools/lorem-ipsum-generator",
    siteName: "SmartTools Indonesia",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Lorem Ipsum Generator Online Gratis",
    description:
      "Buat dan salin teks placeholder Lorem Ipsum dengan jumlah kata yang dapat diatur.",
  },
};

export default function LoremIpsumGeneratorLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}