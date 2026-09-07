import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";

function Company() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <section className="company">
      <div className="container">
        <div className="company__grid">
          <div className="company__image">
            <img
              src="/about/company.webp"
              alt={
                isEnglish
                  ? "JEMOKIL pest management team at work"
                  : "Timu ya JEMOKIL ikifanya kazi ya kudhibiti wadudu"
              }
            />
          </div>

          <div className="company__content">
            <span className="section-label">
              {isEnglish ? "WHO WE ARE" : "SISI NI NANI"}
            </span>

            <h2>
              {isEnglish ? (
                <>
                  More than pest
                  <br />
                  control.
                </>
              ) : (
                <>
                  Zaidi ya udhibiti
                  <br />
                  wa wadudu.
                </>
              )}
            </h2>

            <p className="company__lead">
              {isEnglish
                ? "JEMOKIL is a professional pest management company focused on helping protect properties from pest-related problems."
                : "JEMOKIL ni kampuni ya kitaalamu ya usimamizi wa wadudu inayolenga kusaidia kulinda maeneo na majengo dhidi ya changamoto zinazohusiana na wadudu."}
            </p>

            <p>
              {isEnglish
                ? "Our approach combines assessment, appropriate treatment, documentation and prevention. We work with the needs of each property rather than treating every situation in exactly the same way."
                : "Mbinu yetu inachanganya tathmini, huduma inayofaa, nyaraka na kinga. Tunazingatia mahitaji ya kila eneo badala ya kutumia njia moja kwa kila tatizo."}
            </p>

            <p>
              {isEnglish
                ? "From homes and apartments to businesses, hospitality facilities, warehouses and institutions, our goal is to provide practical solutions that help customers protect their spaces."
                : "Kuanzia nyumba na apartments hadi biashara, maeneo ya huduma za malazi, maghala na taasisi, lengo letu ni kutoa suluhisho za vitendo zinazowasaidia wateja kulinda maeneo yao."}
            </p>

            <Link to="/services" className="text-link">
              <span>
                {isEnglish ? "Explore our services" : "Angalia huduma zetu"}
              </span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Company;