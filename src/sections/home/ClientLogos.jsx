import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { useLanguage } from "../../hooks/useLanguage";
import clients from "../../data/clients";

import "./ClientLogos.css";

function ClientLogos() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <section className="client-logos section" id="clients">
      <div className="container">
        <div className="client-logos__header">
          <div className="client-logos__eyebrow">
            <span className="client-logos__eyebrow-line" />

            <span>
              {isEnglish
                ? "ORGANIZATIONS WE'VE SERVED"
                : "TAASISI TULIZOHUDUMIA"}
            </span>
          </div>

          <div className="client-logos__heading-row">
            <h2 className="client-logos__title">
              {isEnglish ? (
                <>
                  Professional service.
                  <br />
                  <span>Real relationships.</span>
                </>
              ) : (
                <>
                  Huduma ya kitaalamu.
                  <br />
                  <span>Mahusiano halisi.</span>
                </>
              )}
            </h2>

            <div className="client-logos__intro">
              <p>
                {isEnglish
                  ? "JEMOKIL supports businesses, institutions and property owners with professional pest management services."
                  : "JEMOKIL huhudumia biashara, taasisi na wamiliki wa majengo kwa huduma za kitaalamu za usimamizi wa wadudu."}
              </p>
            </div>
          </div>
        </div>

        <div className="client-logos__panel">
          <div className="client-logos__panel-top">
            <span>
              {isEnglish
                ? "SELECTED ORGANIZATIONS"
                : "BAADHI YA TAASISI"}
            </span>

            <span className="client-logos__panel-note">
              {isEnglish
                ? "CLIENT LOGOS"
                : "NEMBO ZA WATEJA"}
            </span>
          </div>

          <div className="client-logos__grid">
            {clients.map((client) => (
              <div className="client-logo" key={client.id}>
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="client-logos__bottom">
          <div>
            <span>
              {isEnglish
                ? "LOOKING FOR A PEST MANAGEMENT PARTNER?"
                : "UNATAFUTA MSHIRIKA WA USIMAMIZI WA WADUDU?"}
            </span>

            <p>
              {isEnglish
                ? "Let's discuss your property, pest risks and the right service approach."
                : "Tuongee kuhusu jengo lako, changamoto za wadudu na huduma inayofaa."}
            </p>
          </div>

          <Link
            to="/contact"
            className="client-logos__button"
          >
            <span>
              {isEnglish
                ? "Talk to JEMOKIL"
                : "Wasiliana na JEMOKIL"}
            </span>

            <ArrowUpRight size={19} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ClientLogos;