
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
    "Gunakan tools online gratis dari SmartTools Indonesia: penghitung kata, generator password, QR Code, formatter JSON, dan berbagai alat praktis untuk kebutuhan sehari-hari.",

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

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "SmartTools Indonesia | Tools Online Gratis",
    description:
      "Berbagai tools online gratis untuk developer, mahasiswa, pekerja, dan kebutuhan sehari-hari. Praktis dan mudah digunakan.",
    url: "https://smarttools.id",
    siteName: "SmartTools Indonesia",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SmartTools Indonesia - Tools Online Gratis",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SmartTools Indonesia | Tools Online Gratis",
    description:
      "Tools online gratis untuk developer, mahasiswa, pekerja, dan kebutuhan sehari-hari.",
    images: ["/og-image.png"],
  },
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
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}