import { NavLink, Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

import { useLanguage } from "../hooks/useLanguage";

import "./Navbar.css";

function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    {
      path: "/",
      en: "Home",
      sw: "Mwanzo",
    },
    {
      path: "/services",
      en: "Services",
      sw: "Huduma",
    },
    {
      path: "/about",
      en: "About",
      sw: "Kuhusu Sisi",
    },
    {
      path: "/contact",
      en: "Contact",
      sw: "Mawasiliano",
    },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__inner container">

        {/* Logo */}
        <Link
          to="/"
          className="navbar__logo"
          onClick={closeMenu}
          aria-label="JEMOKIL Home"
        >
          <span className="navbar__logo-mark">
            J
          </span>

          <span className="navbar__logo-text">
            JEMOKIL
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar__nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `navbar__link ${isActive ? "navbar__link--active" : ""}`
              }
            >
              {language === "en" ? item.en : item.sw}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="navbar__actions">

          <button
            type="button"
            className="navbar__language"
            onClick={toggleLanguage}
            aria-label="Change website language"
          >
            <span className={language === "en" ? "active" : ""}>
              EN
            </span>

            <span className="navbar__language-divider">
              /
            </span>

            <span className={language === "sw" ? "active" : ""}>
              SW
            </span>
          </button>

          <Link
            to="/contact"
            className="navbar__cta"
          >
            <span>
              {language === "en"
                ? "Request Service"
                : "Omba Huduma"}
            </span>

            <ArrowUpRight size={17} strokeWidth={2.2} />
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="navbar__menu-button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="navbar__mobile">
          <nav
            className="navbar__mobile-nav"
            aria-label="Mobile navigation"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `navbar__mobile-link ${
                    isActive
                      ? "navbar__mobile-link--active"
                      : ""
                  }`
                }
              >
                <span>
                  {language === "en"
                    ? item.en
                    : item.sw}
                </span>

                <ArrowUpRight
                  size={18}
                  strokeWidth={2}
                />
              </NavLink>
            ))}

            <div className="navbar__mobile-bottom">

              <button
                type="button"
                className="navbar__mobile-language"
                onClick={toggleLanguage}
              >
                <span>
                  {language === "en"
                    ? "Switch to Kiswahili"
                    : "Switch to English"}
                </span>

                <span>
                  {language === "en"
                    ? "SW"
                    : "EN"}
                </span>
              </button>

              <Link
                to="/contact"
                className="navbar__mobile-cta"
                onClick={closeMenu}
              >
                {language === "en"
                  ? "Request Service"
                  : "Omba Huduma"}

                <ArrowUpRight
                  size={19}
                  strokeWidth={2.2}
                />
              </Link>

            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;