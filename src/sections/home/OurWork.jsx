import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { useLanguage } from "../../hooks/useLanguage";

import "./OurWork.css";

const projects = [
  {
    id: "residential",
    number: "01",
    category: {
      en: "RESIDENTIAL",
      sw: "MAKAZI",
    },
    title: {
      en: "Residential Pest Management",
      sw: "Udhibiti wa Wadudu Majumbani",
    },
    description: {
      en: "Professional pest treatment for homes and residential properties.",
      sw: "Huduma za kitaalamu za kudhibiti wadudu katika nyumba na maeneo ya makazi.",
    },
    image: "/work/residential.webp",
  },

  {
    id: "commercial",
    number: "02",
    category: {
      en: "COMMERCIAL",
      sw: "BIASHARA",
    },
    title: {
      en: "Commercial Pest Control",
      sw: "Udhibiti wa Wadudu Kibiashara",
    },
    description: {
      en: "Pest management solutions for offices, shops and commercial facilities.",
      sw: "Suluhisho za kudhibiti wadudu katika ofisi, maduka na maeneo ya biashara.",
    },
    image: "/work/commercial.webp",
  },

  {
    id: "hospitality",
    number: "03",
    category: {
      en: "HOSPITALITY",
      sw: "UKARIMU",
    },
    title: {
      en: "Hospitality Pest Management",
      sw: "Udhibiti wa Wadudu katika Sekta ya Ukarimu",
    },
    description: {
      en: "Targeted pest management for hotels, restaurants and accommodation facilities.",
      sw: "Udhibiti maalum wa wadudu kwa hoteli, migahawa na maeneo ya malazi.",
    },
    image: "/work/hospitality.webp",
  },

  {
    id: "industrial",
    number: "04",
    category: {
      en: "INDUSTRIAL",
      sw: "VIWANDA",
    },
    title: {
      en: "Industrial & Warehouse Services",
      sw: "Huduma za Viwandani na Maghalani",
    },
    description: {
      en: "Pest management support for warehouses, factories and storage environments.",
      sw: "Huduma za kudhibiti wadudu katika maghala, viwanda na maeneo ya kuhifadhia.",
    },
    image: "/work/industrial.webp",
  },
];

function OurWork() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <section className="our-work section" id="our-work">
      <div className="container">
        {/* HEADER */}
        <div className="our-work__header">
          <div className="our-work__eyebrow">
            <span className="our-work__eyebrow-line" />
            <span>
              {isEnglish ? "OUR WORK" : "KAZI ZETU"}
            </span>
          </div>

          <div className="our-work__heading-row">
            <h2 className="our-work__title">
              {isEnglish ? (
                <>
                  Work that
                  <br />
                  <span>speaks for itself.</span>
                </>
              ) : (
                <>
                  Kazi inayojieleza
                  <br />
                  <span>yenyewe.</span>
                </>
              )}
            </h2>

            <div className="our-work__intro">
              <p>
                {isEnglish
                  ? "A look at the environments and pest management work handled by JEMOKIL."
                  : "Angalia baadhi ya mazingira na kazi za usimamizi wa wadudu zinazofanywa na JEMOKIL."}
              </p>

              <span className="our-work__note">
                {isEnglish
                  ? "REAL PROJECTS • REAL SERVICE"
                  : "KAZI HALISI • HUDUMA HALISI"}
              </span>
            </div>
          </div>
        </div>

        {/* PROJECTS */}
        <div className="our-work__grid">
          {projects.map((project, index) => (
            <article
              className={`work-card ${
                index === 0 ? "work-card--featured" : ""
              }`}
              key={project.id}
            >
              <div className="work-card__image-wrapper">
                <img
                  src={project.image}
                  alt={
                    isEnglish
                      ? `${project.title.en} by JEMOKIL`
                      : `${project.title.sw} - JEMOKIL`
                  }
                  className="work-card__image"
                  loading="lazy"
                  decoding="async"
                />

                <div className="work-card__overlay" />

                <span className="work-card__number">
                  {project.number}
                </span>

                <span className="work-card__category">
                  {project.category[language]}
                </span>

                <div className="work-card__arrow">
                  <ArrowUpRight size={19} />
                </div>
              </div>

              <div className="work-card__content">
                <h3>{project.title[language]}</h3>

                <p>{project.description[language]}</p>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="our-work__bottom">
          <div className="our-work__bottom-copy">
            <span>
              {isEnglish
                ? "YOUR PROPERTY COULD BE NEXT"
                : "MALI YAKO INAWEZA KUWA INAYOFUATA"}
            </span>

            <p>
              {isEnglish
                ? "Tell us about your pest problem and let our team assess the right solution for your environment."
                : "Tuambie kuhusu changamoto yako ya wadudu na timu yetu itathmini suluhisho linalofaa kwa mazingira yako."}
            </p>
          </div>

          <Link
            to="/contact"
            className="our-work__button"
          >
            <span>
              {isEnglish ? "Request a service" : "Omba huduma"}
            </span>

            <ArrowUpRight size={19} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OurWork;