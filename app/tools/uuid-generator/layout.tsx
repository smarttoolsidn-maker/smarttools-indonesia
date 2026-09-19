import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "UUID Generator Online Gratis",
  description:
    "Generate UUID v4 secara instan dan gratis. Buat identifier unik untuk database, aplikasi, API, dan kebutuhan web development, lalu salin hasilnya dengan mudah.",
  alternates: {
    canonical: "https://smarttools.id/tools/uuid-generator",
  },
  openGraph: {
    title: "UUID Generator Online Gratis | SmartTools Indonesia",
    description:
      "Buat UUID v4 secara instan untuk database, aplikasi, dan API menggunakan tool online gratis.",
    url: "https://smarttools.id/tools/uuid-generator",
    siteName: "SmartTools Indonesia",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "UUID Generator Online Gratis",
    description:
      "Generate UUID v4 secara instan dan salin hasilnya dengan mudah.",
  },
};

export default function UUIDGeneratorLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}