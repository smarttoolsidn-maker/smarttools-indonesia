import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "JWT Decoder Online Gratis",
  description:
    "Decode JWT secara online dan gratis untuk membaca JSON Web Token payload. Tempel token, lihat hasil decode, dan salin payload dengan mudah. Decoding tidak memverifikasi signature token.",
  alternates: {
    canonical: "https://smarttools.id/tools/jwt-decoder",
  },
  openGraph: {
    title: "JWT Decoder Online Gratis | SmartTools Indonesia",
    description:
      "Baca dan decode payload JSON Web Token dengan mudah menggunakan JWT Decoder SmartTools Indonesia.",
    url: "https://smarttools.id/tools/jwt-decoder",
    siteName: "SmartTools Indonesia",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "JWT Decoder Online Gratis",
    description:
      "Decode JWT dan baca payload token secara praktis. Ingat, decoding bukan verifikasi signature.",
  },
};

export default function JWTDecoderLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}