import { useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Company from "../sections/about/Company";
import MissionVision from "../sections/about/MissionVision";
import Standards from "../sections/about/Standards";
import Equipment from "../sections/about/Equipment";
import Team from "../sections/about/Team";

import { useLanguage } from "../hooks/useLanguage";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import applySEO from "../utils/seo";

import "../sections/about/About.css";

function About() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  useEffect(() => {
    applySEO({
      page: "about",
      language,
    });
  }, [language]);

  return (
    <>
      <Navbar />

      <main>
        <section className="about-hero">
          <div className="about-hero__image">
            <img
              src="/about/about-hero.webp"
              alt={
                isEnglish
                  ? "JEMOKIL professional pest management service"
                  : "Huduma ya kitaalamu ya JEMOKIL ya kudhibiti wadudu"
              }
            />
          </div>

          <div className="about-hero__overlay" />

          <div className="container about-hero__content">
            <span className="about-hero__eyebrow">
              <span />
              {isEnglish ? "ABOUT JEMOKIL" : "KUHUSU JEMOKIL"}
            </span>

            <h1>
              {isEnglish ? (
                <>
                  Professional pest
                  <br />
                  management,
                  <br />
                  <span>built around protection.</span>
                </>
              ) : (
                <>
                  Usimamizi wa wadudu
                  <br />
                  wa kitaalamu,
                  <br />
                  <span>unaolenga ulinzi.</span>
                </>
              )}
            </h1>

            <p>
              {isEnglish
                ? "JEMOKIL provides professional pest management, fumigation, inspection and preventive solutions for homes, businesses and institutions."
                : "JEMOKIL hutoa huduma za kitaalamu za usimamizi wa wadudu, ufukizaji, ukaguzi na kinga kwa nyumba, biashara na taasisi."}
            </p>

            <Link to="/contact" className="about-hero__button">
              <span>
                {isEnglish ? "Talk to JEMOKIL" : "Wasiliana na JEMOKIL"}
              </span>
              <ArrowUpRight size={19} />
            </Link>
          </div>
        </section>

        <Company />
        <MissionVision />
        <Standards />
        <Equipment />
        <Team />

        <section className="about-page-cta">
          <div className="container">
            <div className="about-page-cta__inner">
              <div>
                <span className="about-page-cta__eyebrow">
                  {isEnglish
                    ? "LET'S WORK TOGETHER"
                    : "TUFANYE KAZI PAMOJA"}
                </span>

                <h2>
                  {isEnglish ? (
                    <>
                      Your property
                      <br />
                      <span>deserves protection.</span>
                    </>
                  ) : (
                    <>
                      Eneo lako
                      <br />
                      <span>linastahili ulinzi.</span>
                    </>
                  )}
                </h2>

                <p>
                  {isEnglish
                    ? "Tell us about your property, pest problem or service requirement."
                    : "Tuambie kuhusu eneo lako, tatizo la wadudu au mahitaji yako ya huduma."}
                </p>
              </div>

              <Link
                to="/contact"
                className="about-page-cta__button"
              >
                <span>
                  {isEnglish ? "Request a Service" : "Omba Huduma"}
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

export default About;