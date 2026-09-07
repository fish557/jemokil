import { ArrowUpRight, Bug } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";

function PestManagement() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const pests = [
    {
      name: isEnglish ? "Bed Bugs" : "Kunguni",
      image: "/pests/bedbugs.webp",
    },
    {
      name: isEnglish ? "Cockroaches" : "Mende",
      image: "/pests/cockroaches.webp",
    },
    {
      name: isEnglish ? "Termites" : "Mchwa",
      image: "/pests/termites.webp",
    },
    {
      name: isEnglish ? "Rodents" : "Panya",
      image: "/pests/rodents.webp",
    },
    {
      name: isEnglish ? "Mosquitoes" : "Mbu",
      image: "/pests/mosquitoes.webp",
    },
    {
      name: isEnglish ? "Flies" : "Nzi",
      image: "/pests/flies.webp",
    },
    {
      name: isEnglish ? "Ants & Crawling Insects" : "Mchwa Wadogo na Wadudu Watambaao",
      image: "/pests/ants.webp",
    },
    {
      name: isEnglish ? "Other Pests" : "Wadudu Wengine",
      image: "/pests/other-pests.webp",
    },
  ];

  return (
    <section id="pest-management" className="pest-management">
      <div className="container">
        <div className="pest-management__header">
          <div>
            <span className="section-label">
              {isEnglish ? "01 / PEST MANAGEMENT" : "01 / USIMAMIZI WA WADUDU"}
            </span>

            <h2>
              {isEnglish ? (
                <>
                  Target the problem.
                  <br />
                  <span>Protect the property.</span>
                </>
              ) : (
                <>
                  Lenga tatizo.
                  <br />
                  <span>Linda eneo lako.</span>
                </>
              )}
            </h2>
          </div>

          <p>
            {isEnglish
              ? "We provide professional pest treatment and fumigation solutions for different types of properties and pest problems."
              : "Tunatoa huduma za kitaalamu za kudhibiti wadudu na ufukizaji kwa aina mbalimbali za majengo na changamoto za wadudu."}
          </p>
        </div>

        <div className="pest-management__feature">
          <div className="pest-management__feature-image">
            <img
              src="/services/pest-control.webp"
              alt={
                isEnglish
                  ? "Professional pest control treatment"
                  : "Huduma ya kitaalamu ya kudhibiti wadudu"
              }
            />
          </div>

          <div className="pest-management__feature-content">
            <span className="pest-management__icon">
              <Bug size={24} />
            </span>

            <h3>
              {isEnglish
                ? "Pest control designed around your environment."
                : "Udhibiti wa wadudu unaolenga mazingira yako."}
            </h3>

            <p>
              {isEnglish
                ? "Homes, offices, restaurants, warehouses, hotels and other facilities can face very different pest challenges. The right response starts with understanding the environment and the pest involved."
                : "Nyumba, ofisi, migahawa, maghala, hoteli na maeneo mengine yanaweza kuwa na changamoto tofauti za wadudu. Suluhisho sahihi huanza kwa kuelewa mazingira na aina ya mdudu anayehusika."}
            </p>

            <Link to="/contact" className="text-link">
              <span>
                {isEnglish ? "Discuss your pest problem" : "Jadili tatizo lako la wadudu"}
              </span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        <div className="pest-management__pests-header">
          <span className="section-label">
            {isEnglish ? "PESTS WE MANAGE" : "WADUDU TUNAO Dhibiti".toUpperCase()}
          </span>

          <p>
            {isEnglish
              ? "Our pest management services cover common residential, commercial and institutional pest problems."
              : "Huduma zetu za usimamizi wa wadudu zinahusisha changamoto mbalimbali zinazopatikana katika makazi, biashara na taasisi."}
          </p>
        </div>

        <div className="pest-management__pests">
          {pests.map((pest, index) => (
            <div className="pest-management__pest" key={pest.name}>
              <div className="pest-management__pest-image">
                <img src={pest.image} alt={pest.name} />
              </div>

              <div className="pest-management__pest-info">
                <span>0{index + 1}</span>
                <h3>{pest.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PestManagement;