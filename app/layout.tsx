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
    default: "SmartTools Indonesia | Tools Online Gratis",
    template: "%s | SmartTools Indonesia",
  },

  description:
    "Gunakan tools online gratis dari SmartTools Indonesia untuk pengolahan teks, pengembangan web, generator password, QR Code, JSON, dan kebutuhan digital sehari-hari.",

  keywords: [
    "smarttools indonesia",
    "tools online gratis",
    "online tools",
    "password generator",
    "qr code generator",
    "word counter",
    "json formatter",
    "json validator",
    "uuid generator",
    "base64 encoder",
    "url encoder",
    "lorem ipsum generator",
    "text case converter",
    "hash generator",
    "timestamp converter",
    "color converter",
    "jwt decoder",
    "markdown preview",
    "developer tools",
  ],

  authors: [{ name: "Muhammad Iqbal" }],
  creator: "Muhammad Iqbal",
  publisher: "SmartTools Indonesia",
  applicationName: "SmartTools Indonesia",

  robots: {
    index: true,
    follow: true,
  },

  // Canonical ditetapkan pada masing-masing halaman.
  // Metadata sosial spesifik akan diperiksa per halaman.

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}