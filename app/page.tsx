import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PopularTools from "@/components/PopularTools";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import WhyChoose from "@/components/WhyChoose";
import Stats from "@/components/Stats";

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