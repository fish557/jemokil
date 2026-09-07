import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ServiceOverview from "../sections/services/ServiceOverview";
import PestManagement from "../sections/services/PestManagement";
import Inspection from "../sections/services/Inspection";
import PreventiveManagement from "../sections/services/PreventiveManagement";

import { useLanguage } from "../hooks/useLanguage";
import applySEO from "../utils/seo";

import "../sections/services/Services.css";

function Services() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  useEffect(() => {
    applySEO({
      page: "services",
      language,
    });
  }, [language]);

  return (
    <>
      <Navbar />

      <main>
        <ServiceOverview />

        <PestManagement />

        <Inspection />

        <PreventiveManagement />

        <section className="services-page-cta">
          <div className="container">
            <div className="services-page-cta__inner">

              <div>
                <span className="services-page-cta__eyebrow">
                  {isEnglish
                    ? "READY TO GET STARTED?"
                    : "TAYARI KUANZA?"}
                </span>

                <h2>
                  {isEnglish ? (
                    <>
                      Let&apos;s solve your
                      <br />
                      <span>pest problem.</span>
                    </>
                  ) : (
                    <>
                      Tutatue
                      <br />
                      <span>tatizo lako la wadudu.</span>
                    </>
                  )}
                </h2>

                <p>
                  {isEnglish
                    ? "Tell us about your property or pest problem and we can help you identify the right service."
                    : "Tuambie kuhusu eneo lako au tatizo la wadudu na tutakusaidia kupata huduma inayofaa."}
                </p>
              </div>

              <Link
                to="/contact"
                className="services-page-cta__button"
              >
                <span>
                  {isEnglish
                    ? "Request a Service"
                    : "Omba Huduma"}
                </span>

                <ArrowUpRight size={20} />
              </Link>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Services;