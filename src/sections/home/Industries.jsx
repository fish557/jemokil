import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { useLanguage } from "../../hooks/useLanguage";
import industries from "../../data/industries";

import "./Industries.css";

function Industries() {
  const { language } = useLanguage();

  const isEnglish = language === "en";

  return (
    <section className="industries section" id="industries">
      <div className="container">

        {/* ================================
            HEADER
        ================================= */}

        <div className="industries__header">

          <div className="industries__eyebrow">
            <span className="industries__eyebrow-line" />

            <span>
              {isEnglish
                ? "WHO WE SERVE"
                : "TUNAO HUDUMIA"}
            </span>
          </div>

          <div className="industries__heading-row">

            <h2 className="industries__title">
              {isEnglish ? (
                <>
                  Protection for
                  <br />
                  <span>every environment.</span>
                </>
              ) : (
                <>
                  Ulinzi kwa
                  <br />
                  <span>kila mazingira.</span>
                </>
              )}
            </h2>

            <div className="industries__intro">

              <p>
                {isEnglish
                  ? "From homes to large commercial and industrial facilities, JEMOKIL provides pest management solutions adapted to the environment."
                  : "Kuanzia nyumba hadi majengo makubwa ya biashara na viwanda, JEMOKIL hutoa suluhisho za kudhibiti wadudu kulingana na mazingira husika."}
              </p>

              <Link
                to="/contact"
                className="industries__contact-link"
              >
                <span>
                  {isEnglish
                    ? "Talk to our team"
                    : "Wasiliana nasi"}
                </span>

                <ArrowUpRight size={17} />
              </Link>

            </div>

          </div>

        </div>


        {/* ================================
            INDUSTRY VISUAL GRID
        ================================= */}

        <div className="industries__grid">

          {industries.map((industry, index) => (

            <article
              className={`industry-card ${
                index < 2
                  ? "industry-card--large"
                  : ""
              }`}
              key={industry.id}
            >

              {/* Image */}

              <div className="industry-card__image-wrapper">

                <img
                  src={industry.image}
                  alt={
                    isEnglish
                      ? `${industry.title.en} pest management services by JEMOKIL`
                      : `Huduma za JEMOKIL kwa ${industry.title.sw}`
                  }
                  className="industry-card__image"
                  loading="lazy"
                  decoding="async"
                />

                <div className="industry-card__overlay" />

                {/* Number */}

                <span className="industry-card__number">
                  {industry.number}
                </span>

                {/* Arrow */}

                <div className="industry-card__arrow">
                  <ArrowUpRight size={19} />
                </div>

              </div>


              {/* Content */}

              <div className="industry-card__content">

                <div>

                  <h3>
                    {industry.title[language]}
                  </h3>

                  <p>
                    {industry.description[language]}
                  </p>

                </div>


                {/* Tags */}

                <ul className="industry-card__items">

                  {industry.items[language].map((item) => (

                    <li key={item}>
                      {item}
                    </li>

                  ))}

                </ul>

              </div>

            </article>

          ))}

        </div>


        {/* ================================
            BOTTOM CTA
        ================================= */}

        <div className="industries__bottom">

          <div className="industries__bottom-copy">

            <span>
              {isEnglish
                ? "NOT SURE WHAT YOU NEED?"
                : "HUJUI UNAHITAJI HUDUMA GANI?"}
            </span>

            <p>
              {isEnglish
                ? "Tell us about your pest problem and our team can help identify the right solution."
                : "Tuambie kuhusu changamoto yako ya wadudu na timu yetu itakusaidia kutambua suluhisho linalofaa."}
            </p>

          </div>

          <Link
            to="/contact"
            className="industries__bottom-button"
          >

            <span>
              {isEnglish
                ? "Request an assessment"
                : "Omba tathmini"}
            </span>

            <ArrowUpRight size={19} />

          </Link>

        </div>

      </div>
    </section>
  );
}

export default Industries;