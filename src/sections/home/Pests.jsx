import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { useLanguage } from "../../hooks/useLanguage";
import pests from "../../data/pests";

import "./Pests.css";

function Pests() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <section className="pests section" id="pests">
      <div className="container">
        <div className="pests__header">
          <div className="pests__eyebrow">
            <span className="pests__eyebrow-line" />
            <span>
              {isEnglish ? "WHAT WE MANAGE" : "TUNACHODHIBITI"}
            </span>
          </div>

          <div className="pests__heading-row">
            <h2 className="pests__title">
              {isEnglish ? (
                <>
                  The pests
                  <br />
                  <span>we manage.</span>
                </>
              ) : (
                <>
                  Wadudu
                  <br />
                  <span>tunaowadhibiti.</span>
                </>
              )}
            </h2>

            <div className="pests__intro">
              <p>
                {isEnglish
                  ? "From common household pests to commercial infestations, JEMOKIL provides targeted pest management solutions based on the problem and environment."
                  : "Kuanzia wadudu wa kawaida majumbani hadi changamoto katika biashara, JEMOKIL hutoa suluhisho maalum kulingana na tatizo na mazingira husika."}
              </p>

              <Link to="/services" className="pests__link">
                <span>
                  {isEnglish ? "View pest management" : "Tazama huduma za udhibiti"}
                </span>
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>

        <div className="pests__grid">
          {pests.map((pest) => (
            <article className="pest-card" key={pest.id}>
              <div className="pest-card__image-wrapper">
                <img
                  src={pest.image}
                  alt={
                    isEnglish
                      ? `${pest.title.en} control by JEMOKIL`
                      : `Udhibiti wa ${pest.title.sw} na JEMOKIL`
                  }
                  className="pest-card__image"
                  loading="lazy"
                  decoding="async"
                />

                <div className="pest-card__overlay" />

                <span className="pest-card__number">
                  {pest.number}
                </span>

                <div className="pest-card__arrow">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <div className="pest-card__content">
                <h3>{pest.title[language]}</h3>

                <p>{pest.description[language]}</p>

                <Link to="/contact" className="pest-card__cta">
                  <span>
                    {isEnglish ? "Get help" : "Pata msaada"}
                  </span>

                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="pests__bottom">
          <div>
            <span>
              {isEnglish
                ? "CAN'T FIND YOUR PEST?"
                : "HUJAONA MDUDU WAKO?"}
            </span>

            <p>
              {isEnglish
                ? "Not every pest problem looks the same. Tell us what you're dealing with and we'll help determine the right approach."
                : "Si kila changamoto ya wadudu inafanana. Tuambie unachokabiliana nacho na tutakusaidia kutambua njia inayofaa."}
            </p>
          </div>

          <Link to="/contact" className="pests__bottom-button">
            <span>
              {isEnglish ? "Talk to JEMOKIL" : "Wasiliana na JEMOKIL"}
            </span>
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Pests;