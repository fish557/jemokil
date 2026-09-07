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

        {/* =====================================================
            LOGO
            ===================================================== */}
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


        {/* =====================================================
            DESKTOP NAVIGATION
            ===================================================== */}
        <nav
          className="navbar__nav"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `navbar__link ${
                  isActive ? "navbar__link--active" : ""
                }`
              }
            >
              {language === "en" ? item.en : item.sw}
            </NavLink>
          ))}
        </nav>


        {/* =====================================================
            DESKTOP ACTIONS
            ===================================================== */}
        <div className="navbar__actions">

          {/* Desktop Language Switcher */}
          <button
            type="button"
            className="navbar__language"
            onClick={toggleLanguage}
            aria-label="Change website language"
          >
            <span
              className={language === "en" ? "active" : ""}
            >
              EN
            </span>

            <span className="navbar__language-divider">
              /
            </span>

            <span
              className={language === "sw" ? "active" : ""}
            >
              SW
            </span>
          </button>


          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="navbar__cta"
          >
            <span>
              {language === "en"
                ? "Request Service"
                : "Omba Huduma"}
            </span>

            <ArrowUpRight
              size={17}
              strokeWidth={2.2}
            />
          </Link>

        </div>


        {/* =====================================================
            MOBILE ACTIONS
            Language + Menu
            ===================================================== */}
        <div className="navbar__mobile-actions">

          {/* Mobile Language Switcher */}
          <button
            type="button"
            className="navbar__mobile-language-toggle"
            onClick={toggleLanguage}
            aria-label="Change website language"
          >
            <span
              className={language === "en" ? "active" : ""}
            >
              EN
            </span>

            <span className="navbar__mobile-language-divider">
              /
            </span>

            <span
              className={language === "sw" ? "active" : ""}
            >
              SW
            </span>
          </button>


          {/* Mobile Menu Button */}
          <button
            type="button"
            className="navbar__menu-button"
            onClick={() =>
              setMenuOpen((current) => !current)
            }
            aria-label={
              menuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X
                size={24}
                strokeWidth={2}
              />
            ) : (
              <Menu
                size={24}
                strokeWidth={2}
              />
            )}
          </button>

        </div>

      </div>


      {/* =====================================================
          MOBILE NAVIGATION
          ===================================================== */}
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


            {/* Mobile Bottom CTA */}
            <div className="navbar__mobile-bottom">

              <Link
                to="/contact"
                className="navbar__mobile-cta"
                onClick={closeMenu}
              >
                <span>
                  {language === "en"
                    ? "Request Service"
                    : "Omba Huduma"}
                </span>

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