
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Password Generator Online Gratis",
  description:
    "Buat password acak yang dapat dikustomisasi dengan huruf besar, huruf kecil, angka, dan simbol. Atur panjang password sesuai kebutuhan menggunakan Password Generator SmartTools Indonesia.",
  alternates: {
    canonical: "/tools/password-generator",
  },
  openGraph: {
    title: "Password Generator Online Gratis | SmartTools Indonesia",
    description:
      "Buat password acak dengan pilihan panjang dan jenis karakter sesuai kebutuhan.",
    url: "https://smarttools.id/tools/password-generator",
    siteName: "SmartTools Indonesia",
    locale: "id_ID",
    type: "website",
  },
};

export default function PasswordGeneratorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}