import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "JSON Validator Online Gratis",
  description:
    "Validasi JSON secara online dan gratis. Periksa apakah format dan struktur JSON valid dengan cepat, gunakan contoh JSON, dan cek data sebelum diproses.",
  alternates: {
    canonical: "https://smarttools.id/tools/json-validator",
  },
  openGraph: {
    title: "JSON Validator Online Gratis | SmartTools Indonesia",
    description:
      "Periksa validitas format JSON dengan mudah, cepat, dan gratis.",
    url: "https://smarttools.id/tools/json-validator",
    siteName: "SmartTools Indonesia",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "JSON Validator Online Gratis",
    description:
      "Validasi format JSON secara instan dengan SmartTools Indonesia.",
  },
};

export default function JSONValidatorLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}