import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PopularTools from "@/components/PopularTools";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import WhyChoose from "@/components/WhyChoose";
import Stats from "@/components/Stats";

export const metadata: Metadata = {
  title: "Tools Online Gratis",
  description:
    "Gunakan SmartTools Indonesia untuk membuat password, menghasilkan QR Code, menghitung kata, memformat JSON, dan membantu berbagai kebutuhan digital sehari-hari.",
  alternates: {
    canonical: "https://smarttools.id",
  },
  openGraph: {
    title: "SmartTools Indonesia | Tools Online Gratis",
    description:
      "Berbagai tools online untuk pengolahan teks, pengembangan web, dan produktivitas digital. Praktis diakses melalui browser.",
    url: "https://smarttools.id",
    siteName: "SmartTools Indonesia",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SmartTools Indonesia - Tools Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartTools Indonesia | Tools Online Gratis",
    description:
      "Berbagai tools online untuk membantu kebutuhan digital sehari-hari.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <PopularTools />

      <Features />

      <WhyChoose />

      <Stats />

      <Footer />
    </>
  );
}