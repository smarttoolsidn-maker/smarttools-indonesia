import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Markdown Preview & HTML Converter Online",
  description:
    "Preview Markdown secara online dan gratis. Konversi Markdown menjadi HTML, lihat tampilan hasilnya, dan salin kode HTML untuk dokumentasi, README, blog, atau pengembangan website.",
  alternates: {
    canonical: "https://smarttools.id/tools/markdown-preview",
  },
  openGraph: {
    title: "Markdown Preview & HTML Converter | SmartTools Indonesia",
    description:
      "Tulis Markdown, lihat preview hasil konversi, dan salin HTML dengan mudah.",
    url: "https://smarttools.id/tools/markdown-preview",
    siteName: "SmartTools Indonesia",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Markdown Preview Online Gratis",
    description:
      "Konversi Markdown ke HTML, lihat preview, dan salin hasilnya dengan SmartTools Indonesia.",
  },
};

export default function MarkdownPreviewLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}