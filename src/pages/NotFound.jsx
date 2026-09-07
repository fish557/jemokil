import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useLanguage } from "../hooks/useLanguage";
import applySEO from "../utils/seo";

import "./NotFound.css";

function NotFound() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  useEffect(() => {
    applySEO({
      page: "notFound",
      language,
    });
  }, [language]);

  return (
    <>
      <Navbar />

      <main className="not-found">
        <section className="not-found__hero">
          <div className="container">
            <div className="not-found__content">
              <span className="not-found__code">404</span>

              <span className="section-label">
                {isEnglish
                  ? "PAGE NOT FOUND"
                  : "UKURASA HAUJAPATIKANA"}
              </span>

              <h1>
                {isEnglish ? (
                  <>
                    This page
                    <br />
                    <span>doesn&apos;t exist.</span>
                  </>
                ) : (
                  <>
                    Ukurasa huu
                    <br />
                    <span>haupatikani.</span>
                  </>
                )}
              </h1>

              <p>
                {isEnglish
                  ? "The page you are looking for may have been moved, removed or the address may be incorrect."
                  : "Ukurasa unaoutafuta huenda umehamishwa, umeondolewa au anuani uliyoingiza si sahihi."}
              </p>

              <div className="not-found__actions">
                <Link to="/" className="not-found__primary">
                  <ArrowLeft size={18} />
                  <span>
                    {isEnglish ? "Back to Home" : "Rudi Mwanzo"}
                  </span>
                </Link>

                <Link to="/contact" className="not-found__secondary">
                  <span>
                    {isEnglish ? "Contact JEMOKIL" : "Wasiliana na JEMOKIL"}
                  </span>
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default NotFound;