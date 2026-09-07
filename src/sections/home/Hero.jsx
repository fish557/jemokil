import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { useLanguage } from "../../hooks/useLanguage";

import "./Hero.css";

function Hero() {
  const { language } = useLanguage();

  const isEnglish = language === "en";

  return (
    <section className="hero">

      {/* Full Background */}
      <div className="hero__background">

        <img
          src="/hero-pest-control.webp"
          alt={
            isEnglish
              ? "Professional pest management service by JEMOKIL"
              : "Huduma ya kitaalamu ya kudhibiti wadudu ya JEMOKIL"
          }
          className="hero__background-image"
        />

        <div className="hero__overlay" />
        <div className="hero__grid-pattern" />

      </div>

      <div className="container hero__container">

        <div className="hero__content">

          {/* Eyebrow */}
          <div className="hero__eyebrow">

            <span className="hero__eyebrow-line" />

            <span>
              {isEnglish
                ? "PROFESSIONAL PEST MANAGEMENT"
                : "USIMAMIZI WA KITAALAM WA WADUDU"}
            </span>

          </div>


          {/* Heading */}
          <h1 className="hero__title">

            {isEnglish ? (
              <>
                Protecting spaces.
                <br />
                <span>Professionally.</span>
              </>
            ) : (
              <>
                Kulinda maeneo.
                <br />
                <span>Kitaalamu.</span>
              </>
            )}

          </h1>


          {/* Description */}
          <p className="hero__description">

            {isEnglish
              ? "Professional pest management, fumigation and inspection services for homes, businesses and institutions."
              : "Huduma za kitaalamu za kudhibiti wadudu, ufukizaji na ukaguzi kwa nyumba, biashara na taasisi."}

          </p>


          {/* CTA */}
          <div className="hero__actions">

            <Link
              to="/contact"
              className="hero__primary-button"
            >
              <span>
                {isEnglish
                  ? "Request a Service"
                  : "Omba Huduma"}
              </span>

              <ArrowUpRight size={19} />
            </Link>

          </div>


          {/* Service Coverage */}
          <div className="hero__coverage">

            <div className="hero__coverage-line" />

            <div className="hero__coverage-content">

              <span className="hero__coverage-label">
                {isEnglish
                  ? "SERVICE COVERAGE"
                  : "MAENEO TUNAYOHUDUMIA"}
              </span>

              <p>
                Dar es Salaam&nbsp; • &nbsp;
                Zanzibar&nbsp; • &nbsp;
                Mwanza&nbsp; • &nbsp;
                Arusha&nbsp; • &nbsp;
                Dodoma&nbsp; • &nbsp;
                Mbeya
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* Scroll Indicator */}
      <div className="hero__scroll">

        <span>
          {isEnglish
            ? "EXPLORE"
            : "TAZAMA"}
        </span>

        <ArrowDown size={17} />

      </div>

    </section>
  );
}

export default Hero;