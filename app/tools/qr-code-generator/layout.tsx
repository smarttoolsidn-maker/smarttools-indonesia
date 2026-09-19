
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "QR Code Generator Online Gratis",
  description:
    "Buat QR Code online gratis untuk teks, URL, WhatsApp, dan Wi-Fi. Generate QR Code dengan mudah, lalu salin atau unduh sebagai PNG dan JPG menggunakan SmartTools Indonesia.",
  alternates: {
    canonical: "/tools/qr-code-generator",
  },
  openGraph: {
    title: "QR Code Generator Online Gratis | SmartTools Indonesia",
    description:
      "Buat QR Code untuk teks, link, WhatsApp, dan Wi-Fi. Salin atau unduh QR Code dalam format PNG dan JPG.",
    url: "https://smarttools.id/tools/qr-code-generator",
    siteName: "SmartTools Indonesia",
    locale: "id_ID",
    type: "website",
  },
};

export default function QRCodeGeneratorLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}