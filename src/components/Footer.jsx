import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

import { useLanguage } from "../hooks/useLanguage";

import "./Footer.css";

function Footer() {
  const { language } = useLanguage();

  const isEnglish = language === "en";

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      {/* =====================================================
          MAIN FOOTER
          ===================================================== */}

      <div className="footer__main">
        <div className="container">

          <div className="footer__grid">

            {/* Brand */}
            <div className="footer__brand">

              <Link
                to="/"
                className="footer__logo"
                aria-label="JEMOKIL Home"
              >
                <span className="footer__logo-mark">
                  J
                </span>

                <span className="footer__logo-text">
                  JEMOKIL
                </span>
              </Link>

              <p className="footer__description">
                {isEnglish
                  ? "Professional pest management, fumigation and inspection services for homes, businesses and institutions."
                  : "Huduma za kitaalamu za usimamizi wa wadudu, ufukizaji na ukaguzi kwa nyumba, biashara na taasisi."}
              </p>

              <Link
                to="/contact"
                className="footer__cta"
              >
                <span>
                  {isEnglish
                    ? "Request Service"
                    : "Omba Huduma"}
                </span>

                <ArrowUpRight size={18} />
              </Link>

            </div>


            {/* Navigation */}
            <div className="footer__column">

              <h3>
                {isEnglish
                  ? "Navigation"
                  : "Menyu"}
              </h3>

              <nav className="footer__links">

                <Link to="/">
                  {isEnglish ? "Home" : "Mwanzo"}
                </Link>

                <Link to="/services">
                  {isEnglish ? "Services" : "Huduma"}
                </Link>

                <Link to="/about">
                  {isEnglish ? "About" : "Kuhusu Sisi"}
                </Link>

                <Link to="/contact">
                  {isEnglish ? "Contact" : "Mawasiliano"}
                </Link>

              </nav>

            </div>


            {/* Services */}
            <div className="footer__column">

              <h3>
                {isEnglish
                  ? "Services"
                  : "Huduma"}
              </h3>

              <div className="footer__links">

                <Link to="/services">
                  {isEnglish
                    ? "Fumigation & Pest Management"
                    : "Ufukizaji na Usimamizi wa Wadudu"}
                </Link>

                <Link to="/services">
                  {isEnglish
                    ? "Pest-Specific Control"
                    : "Udhibiti wa Wadudu Maalum"}
                </Link>

                <Link to="/services">
                  {isEnglish
                    ? "Inspection & Certification"
                    : "Ukaguzi na Uthibitishaji"}
                </Link>

                <Link to="/services">
                  {isEnglish
                    ? "Preventive Management"
                    : "Usimamizi wa Kinga"}
                </Link>

              </div>

            </div>


            {/* Contact */}
            <div className="footer__column footer__contact">

              <h3>
                {isEnglish
                  ? "Get in touch"
                  : "Wasiliana Nasi"}
              </h3>


              {/* Phone */}
              <a
                href="tel:+255613223732"
                className="footer__contact-item"
              >
                <span className="footer__contact-icon">
                  <Phone size={17} />
                </span>

                <span>
                  +255 613 223 732
                </span>
              </a>


              {/* Email */}
              <a
                href="mailto:info@jemokil.com"
                className="footer__contact-item"
              >
                <span className="footer__contact-icon">
                  <Mail size={17} />
                </span>

                <span>
                  info@jemokil.com
                </span>
              </a>


              {/* Dar es Salaam */}
              <div className="footer__contact-item footer__contact-item--address">
                <span className="footer__contact-icon">
                  <MapPin size={17} />
                </span>

                <span>
                  {isEnglish
                    ? "Sinza Mori, Kinondoni, Dar es Salaam"
                    : "Sinza Mori, Kinondoni, Dar es Salaam"}
                </span>
              </div>


              {/* Zanzibar */}
              <div className="footer__contact-item footer__contact-item--address">
                <span className="footer__contact-icon">
                  <MapPin size={17} />
                </span>

                <span>
                  {isEnglish
                    ? "Fuoni Morocco, Zanzibar"
                    : "Fuoni Morocco, Zanzibar"}
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>


      {/* =====================================================
          SERVICE COVERAGE
          ===================================================== */}

      <div className="footer__coverage">
        <div className="container">

          <div className="footer__coverage-inner">

            <span className="footer__coverage-label">
              {isEnglish
                ? "SERVICE COVERAGE"
                : "MAENEO TUNAYOHUDUMIA"}
            </span>

            <span className="footer__coverage-line" />

            <p>
              Dar es Salaam
              <span>•</span>
              Zanzibar
              <span>•</span>
              Mwanza
              <span>•</span>
              Arusha
              <span>•</span>
              Dodoma
              <span>•</span>
              Mbeya
            </p>

          </div>

        </div>
      </div>


      {/* =====================================================
          BOTTOM BAR
          ===================================================== */}

      <div className="footer__bottom">
        <div className="container">

          <div className="footer__bottom-inner">

            <p>
              © {currentYear} JEMOKIL.
              {" "}
              {isEnglish
                ? "All rights reserved."
                : "Haki zote zimehifadhiwa."}
            </p>


            <p className="footer__tagline">
              {isEnglish
                ? "Professional protection. Better spaces."
                : "Ulinzi wa kitaalamu. Maeneo bora."}
            </p>


            <div className="footer__legal">
              <Link to="/contact">
                {isEnglish
                  ? "Request Service"
                  : "Omba Huduma"}
              </Link>
            </div>

          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;