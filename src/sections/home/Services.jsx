import {
  ArrowUpRight,
  Bug,
  FileCheck2,
  ShieldCheck,
  SprayCan,
} from "lucide-react";
import { Link } from "react-router-dom";

import { useLanguage } from "../../hooks/useLanguage";
import services from "../../data/services";

import "./Services.css";

const serviceIcons = {
  fumigation: SprayCan,
  "pest-control": Bug,
  inspection: FileCheck2,
  preventive: ShieldCheck,
};

/*
  Service images

  Put your actual JEMOKIL WebP images inside:

  public/
  └── services/
      ├── fumigation.webp
      ├── pest-control.webp
      ├── inspection.webp
      └── preventive-management.webp
*/

const serviceImages = {
  fumigation: "/services/fumigation.webp",
  "pest-control": "/services/pest-control.webp",
  inspection: "/services/inspection.webp",
  preventive: "/services/preventive-management.webp",
};

function Services() {
  const { language } = useLanguage();

  const isEnglish = language === "en";

  return (
    <section className="services section" id="services">
      <div className="container">

        {/* ================================
            HEADER
        ================================= */}

        <div className="services__header">

          <div className="services__eyebrow">
            <span className="services__eyebrow-line" />

            <span>
              {isEnglish
                ? "WHAT WE DO"
                : "TUNACHOFANYA"}
            </span>
          </div>

          <div className="services__heading-row">

            <h2 className="services__title">
              {isEnglish ? (
                <>
                  Complete pest
                  <br />
                  <span>management solutions.</span>
                </>
              ) : (
                <>
                  Suluhisho kamili za
                  <br />
                  <span>usimamizi wa wadudu.</span>
                </>
              )}
            </h2>

            <div className="services__intro">

              <p>
                {isEnglish
                  ? "Professional solutions for identifying, treating and preventing pest problems across different environments."
                  : "Suluhisho za kitaalamu za kutambua, kudhibiti na kuzuia changamoto za wadudu katika mazingira mbalimbali."}
              </p>

              <Link
                to="/services"
                className="services__view-link"
              >
                <span>
                  {isEnglish
                    ? "Explore all services"
                    : "Tazama huduma zote"}
                </span>

                <ArrowUpRight size={17} />
              </Link>

            </div>

          </div>

        </div>

        {/* ================================
            VISUAL SERVICE CARDS
        ================================= */}

        <div className="services__grid">

          {services.map((service) => {

            const Icon = serviceIcons[service.id];

            return (
              <article
                className={`service-card ${
                  service.id === "fumigation"
                    ? "service-card--featured"
                    : ""
                }`}
                key={service.id}
              >

                {/* ==========================
                    IMAGE
                =========================== */}

                <div className="service-card__image-wrapper">

                  <img
                    src={serviceImages[service.id]}
                    alt={
                      isEnglish
                        ? `${service.title.en} - JEMOKIL professional pest management service`
                        : `${service.title.sw} - huduma ya JEMOKIL`
                    }
                    className="service-card__image"
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="service-card__image-overlay" />

                  <div className="service-card__image-top">

                    <span className="service-card__number">
                      {service.number}
                    </span>

                    <div className="service-card__icon">
                      <Icon
                        size={21}
                        strokeWidth={1.8}
                      />
                    </div>

                  </div>

                </div>

                {/* ==========================
                    CONTENT
                =========================== */}

                <div className="service-card__content">

                  <h3>
                    {service.title[language]}
                  </h3>

                  <p>
                    {service.description[language]}
                  </p>

                  {/* Examples */}

                  <ul className="service-card__list">

                    {service.examples[language]
                      .slice(0, 4)
                      .map((item) => (
                        <li key={item}>
                          <span />
                          {item}
                        </li>
                      ))}

                  </ul>

                </div>

                {/* ==========================
                    CARD LINK
                =========================== */}

                <Link
                  to="/services"
                  className="service-card__link"
                >

                  <span>
                    {isEnglish
                      ? "Explore service"
                      : "Chunguza huduma"}
                  </span>

                  <ArrowUpRight size={18} />

                </Link>

              </article>
            );
          })}

        </div>

        {/* ================================
            BOTTOM STATEMENT
        ================================= */}

        <div className="services__bottom">

          <div className="services__bottom-mark">
            <span />
            <span />
            <span />
          </div>

          <p>
            {isEnglish
              ? "Professional pest management is more than treatment. It is about identifying the source, protecting the environment and preventing the problem from returning."
              : "Usimamizi wa kitaalamu wa wadudu ni zaidi ya tiba. Ni kutambua chanzo, kulinda mazingira na kuzuia tatizo lisijirudie."}
          </p>

        </div>

      </div>
    </section>
  );
}

export default Services;