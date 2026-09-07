import { useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ContactInfo from "../sections/contact/ContactInfo";
import ContactForm from "../sections/contact/ContactForm";
import ServiceAreas from "../sections/contact/ServiceAreas";
import FAQ from "../sections/contact/FAQ";

import { useLanguage } from "../hooks/useLanguage";
import applySEO from "../utils/seo";

import "./Contact.css";

function Contact() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  useEffect(() => {
    applySEO({
      page: "contact",
      language,
    });
  }, [language]);

  return (
    <>
      <Navbar />

      <main className="contact-page">
        <section className="contact-hero">
          <div className="container">
            <div className="contact-hero__content">
              <span className="section-label">
                {isEnglish
                  ? "CONTACT JEMOKIL"
                  : "WASILIANA NA JEMOKIL"}
              </span>

              <h1>
                {isEnglish ? (
                  <>
                    Let&apos;s solve
                    <br />
                    <span>your pest problem.</span>
                  </>
                ) : (
                  <>
                    Tutatue
                    <br />
                    <span>tatizo lako la wadudu.</span>
                  </>
                )}
              </h1>

              <p>
                {isEnglish
                  ? "Tell us what you need, where you are located and how we can help. Our team will guide you toward the right pest management solution."
                  : "Tuambie unahitaji nini, ulipo na jinsi tunavyoweza kukusaidia. Timu yetu itakuelekeza kwenye suluhisho sahihi la kudhibiti wadudu."}
              </p>

              <div className="contact-hero__quick">
                <a href="tel:+255613223732">
                  {isEnglish
                    ? "Call +255 613 223 732"
                    : "Piga +255 613 223 732"}
                </a>

                <a
                  href="https://wa.me/255613223732"
                  target="_blank"
                  rel="noreferrer"
                >
                  {isEnglish
                    ? "WhatsApp us"
                    : "Wasiliana nasi WhatsApp"}
                </a>
              </div>
            </div>
          </div>
        </section>

        <ContactInfo />

        <ContactForm />

        <ServiceAreas />

        <FAQ />
      </main>

      <Footer />
    </>
  );
}

export default Contact;