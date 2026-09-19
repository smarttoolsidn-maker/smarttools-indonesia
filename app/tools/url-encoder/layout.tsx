import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "URL Encoder & Decoder Online Gratis",
  description:
    "Encode dan decode URL secara online dan gratis. Ubah karakter khusus menjadi format URL-encoded atau kembalikan ke bentuk aslinya. Salin hasil dengan mudah untuk kebutuhan web development.",
  alternates: {
    canonical: "https://smarttools.id/tools/url-encoder",
  },
  openGraph: {
    title: "URL Encoder & Decoder Online Gratis | SmartTools Indonesia",
    description:
      "Encode atau decode URL dan parameter query dengan cepat menggunakan tool online gratis.",
    url: "https://smarttools.id/tools/url-encoder",
    siteName: "SmartTools Indonesia",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "URL Encoder & Decoder Online Gratis",
    description:
      "Konversi URL menjadi format encoded atau decode kembali dengan mudah.",
  },
};

export default function URLEncoderLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}