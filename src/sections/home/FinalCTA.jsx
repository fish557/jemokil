import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import { useLanguage } from "../../hooks/useLanguage";

import "./FinalCTA.css";

function FinalCTA() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <section className="final-cta">
      <div className="final-cta__pattern" />

      <div className="container">
        <div className="final-cta__content">
          <div className="final-cta__eyebrow">
            <span className="final-cta__eyebrow-line" />

            <span>
              {isEnglish
                ? "READY TO PROTECT YOUR SPACE?"
                : "TAYARI KULINDA ENEO LAKO?"}
            </span>
          </div>

          <h2 className="final-cta__title">
            {isEnglish ? (
              <>
                Let's solve
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
          </h2>

          <p className="final-cta__description">
            {isEnglish
              ? "Whether you need pest treatment, fumigation, inspection or ongoing pest management, talk to JEMOKIL about your property."
              : "Ikiwa unahitaji udhibiti wa wadudu, ufukizaji, ukaguzi au usimamizi endelevu wa wadudu, wasiliana na JEMOKIL kuhusu eneo lako."}
          </p>

          <div className="final-cta__actions">
            <Link
              to="/contact"
              className="final-cta__primary"
            >
              <span>
                {isEnglish
                  ? "Request a Service"
                  : "Omba Huduma"}
              </span>

              <ArrowUpRight size={20} />
            </Link>

            <a
              href="https://wa.me/255613223732"
              target="_blank"
              rel="noreferrer"
              className="final-cta__secondary"
            >
              <MessageCircle size={19} />

              <span>
                {isEnglish
                  ? "Chat on WhatsApp"
                  : "Ongea WhatsApp"}
              </span>
            </a>
          </div>
        </div>

        <div className="final-cta__contact-strip">
          <a
            href="tel:+255613223732"
            className="final-cta__contact"
          >
            <div className="final-cta__contact-icon">
              <Phone size={18} />
            </div>

            <div>
              <span>
                {isEnglish ? "CALL US" : "PIGA SIMU"}
              </span>

              <strong>+255 613 223 732</strong>
            </div>
          </a>

          <div className="final-cta__location">
            <span>
              {isEnglish
                ? "SERVICE COVERAGE"
                : "MAENEO TUNAYOHUDUMIA"}
            </span>

            <strong>
              Dar es Salaam • Zanzibar • Mwanza • Arusha •
              Dodoma • Mbeya
            </strong>
          </div>

          <Link
            to="/contact"
            className="final-cta__contact-link"
          >
            <span>
              {isEnglish
                ? "Contact JEMOKIL"
                : "Wasiliana na JEMOKIL"}
            </span>

            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;