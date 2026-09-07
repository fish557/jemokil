import { Eye, Target } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";

function MissionVision() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <section className="mission-vision">
      <div className="container">
        <div className="mission-vision__header">
          <span className="section-label">
            {isEnglish ? "OUR DIRECTION" : "MWELEKEO WETU"}
          </span>

          <h2>
            {isEnglish
              ? "Built to protect. Driven to improve."
              : "Tumejengwa kulinda. Tunaendelea kuboresha."}
          </h2>
        </div>

        <div className="mission-vision__grid">
          <article className="mission-vision__card">
            <div className="mission-vision__icon">
              <Target size={25} />
            </div>

            <span>
              {isEnglish ? "OUR MISSION" : "DHAMIRA YETU"}
            </span>

            <h3>
              {isEnglish
                ? "Provide practical and professional pest management solutions."
                : "Kutoa suluhisho za vitendo na kitaalamu za usimamizi wa wadudu."}
            </h3>

            <p>
              {isEnglish
                ? "We aim to help customers address pest problems through appropriate treatment, inspection, prevention and ongoing support."
                : "Tunalenga kuwasaidia wateja kukabiliana na changamoto za wadudu kupitia huduma zinazofaa, ukaguzi, kinga na ufuatiliaji endelevu."}
            </p>
          </article>

          <article className="mission-vision__card mission-vision__card--dark">
            <div className="mission-vision__icon">
              <Eye size={25} />
            </div>

            <span>
              {isEnglish ? "OUR VISION" : "DIRA YETU"}
            </span>

            <h3>
              {isEnglish
                ? "To become a trusted name in professional pest management."
                : "Kuwa jina linaloaminika katika huduma za kitaalamu za usimamizi wa wadudu."}
            </h3>

            <p>
              {isEnglish
                ? "We want to build a pest management company known for professional service, responsible practice and a strong focus on customer protection."
                : "Tunataka kujenga kampuni ya usimamizi wa wadudu inayojulikana kwa huduma ya kitaalamu, utendaji unaowajibika na kuzingatia ulinzi wa wateja."}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;