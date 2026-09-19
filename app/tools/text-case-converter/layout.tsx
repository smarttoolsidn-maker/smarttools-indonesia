import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Text Case Converter Online Gratis",
  description:
    "Ubah teks menjadi UPPERCASE, lowercase, Title Case, atau Sentence case secara online dan gratis. Konversi format huruf dengan cepat, hitung karakter dan kata, lalu salin hasilnya.",
  alternates: {
    canonical: "https://smarttools.id/tools/text-case-converter",
  },
  openGraph: {
    title: "Text Case Converter Online Gratis | SmartTools Indonesia",
    description:
      "Konversi teks ke UPPERCASE, lowercase, Title Case, dan Sentence case dengan mudah.",
    url: "https://smarttools.id/tools/text-case-converter",
    siteName: "SmartTools Indonesia",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Text Case Converter Online Gratis",
    description:
      "Ubah format huruf teks dengan cepat dan salin hasil konversinya.",
  },
};

export default function TextCaseConverterLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}