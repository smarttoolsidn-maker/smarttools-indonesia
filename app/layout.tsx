import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smarttools.id"),

  title: {
    default: "SmartTools Indonesia",
    template: "%s | SmartTools Indonesia",
  },

  description:
    "SmartTools Indonesia adalah kumpulan tools online gratis untuk developer, mahasiswa, pekerja, dan kebutuhan sehari-hari. Cepat, aman, dan tanpa instalasi.",

  keywords: [
    "smarttools indonesia",
    "online tools",
    "password generator",
    "uuid generator",
    "json formatter",
    "json validator",
    "timestamp converter",
    "base64 encoder",
    "word counter",
    "text case converter",
    "hash generator",
    "qr generator",
    "developer tools",
    "tools online gratis",
  ],

  authors: [
    {
      name: "Muhammad Iqbal",
    },
  ],

  creator: "Muhammad Iqbal",

  publisher: "SmartTools Indonesia",

  applicationName: "SmartTools Indonesia",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "SmartTools Indonesia",
    description:
      "Kumpulan tools online gratis untuk developer dan kebutuhan sehari-hari.",

    url: "https://smarttools.id",

    siteName: "SmartTools Indonesia",

    locale: "id_ID",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "SmartTools Indonesia",

    description:
      "Tools online gratis untuk developer, mahasiswa, dan pekerjaan sehari-hari.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}