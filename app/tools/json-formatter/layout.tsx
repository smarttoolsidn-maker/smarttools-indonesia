
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "JSON Formatter & Minifier Online Gratis",
  description:
    "Format, beautify, dan minify JSON secara online dan gratis. Rapikan struktur JSON, proses data dengan mudah, lalu salin hasilnya menggunakan JSON Formatter SmartTools Indonesia.",
  alternates: {
    canonical: "/tools/json-formatter",
  },
  openGraph: {
    title: "JSON Formatter & Minifier Online Gratis | SmartTools Indonesia",
    description:
      "Rapikan dan minify JSON secara instan. Format data JSON, salin output, atau gunakan kembali hasilnya sebagai input.",
    url: "https://smarttools.id/tools/json-formatter",
    siteName: "SmartTools Indonesia",
    locale: "id_ID",
    type: "website",
  },
};

export default function JSONFormatterLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}