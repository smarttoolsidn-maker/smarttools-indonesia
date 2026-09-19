import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Unix Timestamp Converter Online Gratis",
  description:
    "Konversi Unix Timestamp menjadi tanggal dan waktu secara online dan gratis. Masukkan timestamp, lihat hasil konversi, atau gunakan timestamp saat ini dengan mudah.",
  alternates: {
    canonical: "https://smarttools.id/tools/timestamp-converter",
  },
  openGraph: {
    title: "Unix Timestamp Converter Online Gratis | SmartTools Indonesia",
    description:
      "Ubah Unix Timestamp menjadi tanggal dan waktu, atau dapatkan timestamp saat ini.",
    url: "https://smarttools.id/tools/timestamp-converter",
    siteName: "SmartTools Indonesia",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Unix Timestamp Converter Online Gratis",
    description:
      "Konversi Unix Timestamp ke tanggal dan waktu dengan praktis.",
  },
};

export default function TimestampConverterLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}