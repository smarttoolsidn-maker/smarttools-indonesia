
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "SHA-256 Hash Generator Online Gratis",
  description:
    "Buat hash SHA-256 dari teks secara online dan gratis. Hasilkan hash kriptografis 256-bit, salin hasil dengan mudah, dan gunakan SHA-256 Hash Generator SmartTools Indonesia.",
  alternates: {
    canonical: "/tools/hash-generator",
  },
  openGraph: {
    title: "SHA-256 Hash Generator Online Gratis | SmartTools Indonesia",
    description:
      "Generate hash SHA-256 dari teks secara instan. Salin hasil hash dengan mudah menggunakan SmartTools Indonesia.",
    url: "https://smarttools.id/tools/hash-generator",
    siteName: "SmartTools Indonesia",
    locale: "id_ID",
    type: "website",
  },
};

export default function HashGeneratorLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}