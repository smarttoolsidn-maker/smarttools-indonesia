
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Word Counter Online Gratis",
  description:
    "Hitung jumlah kata, karakter, karakter tanpa spasi, baris, dan estimasi waktu baca secara real-time. Gunakan Word Counter online gratis dari SmartTools Indonesia.",
  alternates: {
    canonical: "/tools/word-counter",
  },
  openGraph: {
    title: "Word Counter Online Gratis | SmartTools Indonesia",
    description:
      "Hitung kata, karakter, baris, dan estimasi waktu baca secara instan dengan Word Counter SmartTools Indonesia.",
    url: "https://smarttools.id/tools/word-counter",
    siteName: "SmartTools Indonesia",
    locale: "id_ID",
    type: "website",
  },
};

export default function WordCounterLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}