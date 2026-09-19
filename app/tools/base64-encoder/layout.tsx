
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Base64 Encoder & Decoder Online Gratis",
  description:
    "Encode teks menjadi Base64 dan decode Base64 menjadi teks secara online dan gratis. Gunakan Base64 Encoder / Decoder SmartTools Indonesia untuk kebutuhan development dan pemrosesan data.",
  alternates: {
    canonical: "/tools/base64-encoder",
  },
  openGraph: {
    title:
      "Base64 Encoder & Decoder Online Gratis | SmartTools Indonesia",
    description:
      "Konversi teks ke Base64 atau decode Base64 menjadi teks. Salin hasil dan gunakan kembali sebagai input dengan mudah.",
    url: "https://smarttools.id/tools/base64-encoder",
    siteName: "SmartTools Indonesia",
    locale: "id_ID",
    type: "website",
  },
};

export default function Base64EncoderLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}