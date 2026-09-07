import { useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero from "../sections/home/Hero";
import Services from "../sections/home/Services";
import Industries from "../sections/home/Industries";
import Pests from "../sections/home/Pests";
import WhyJemokil from "../sections/home/WhyJemokil";
import OurWork from "../sections/home/OurWork";
import ClientLogos from "../sections/home/ClientLogos";
import FinalCTA from "../sections/home/FinalCTA";

import { useLanguage } from "../hooks/useLanguage";
import applySEO from "../utils/seo";

function Home() {
  const { language } = useLanguage();

  useEffect(() => {
    applySEO({
      page: "home",
      language,
    });
  }, [language]);

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Industries />
        <Pests />
        <WhyJemokil />
        <OurWork />
        <ClientLogos />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}

export default Home;