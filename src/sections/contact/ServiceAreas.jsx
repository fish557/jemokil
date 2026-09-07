import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";

function ServiceAreas() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const areas = [
    {
      name: "Dar es Salaam",
      type: isEnglish ? "Office & Service Area" : "Ofisi na Eneo la Huduma",
    },
    {
      name: "Zanzibar",
      type: isEnglish ? "Office & Service Area" : "Ofisi na Eneo la Huduma",
    },
    {
      name: "Mwanza",
      type: isEnglish ? "Service Area" : "Eneo la Huduma",
    },
    {
      name: "Arusha",
      type: isEnglish ? "Service Area" : "Eneo la Huduma",
    },
    {
      name: "Dodoma",
      type: isEnglish ? "Service Area" : "Eneo la Huduma",
    },
    {
      name: "Mbeya",
      type: isEnglish ? "Service Area" : "Eneo la Huduma",
    },
  ];

  return (
    <section className="service-areas" id="service-areas">
      <div className="container">
        <div className="service-areas__header">
          <div>
            <span className="section-label">
              {isEnglish
                ? "WHERE WE OPERATE"
                : "MAENEO TUNAYOHUDUMIA"}
            </span>

            <h2>
              {isEnglish ? (
                <>
                  Professional service,
                  <br />
                  <span>where you need it.</span>
                </>
              ) : (
                <>
                  Huduma ya kitaalamu,
                  <br />
                  <span>pale unapohitaji.</span>
                </>
              )}
            </h2>
          </div>

          <p>
            {isEnglish
              ? "JEMOKIL provides pest management services across key locations in Tanzania."
              : "JEMOKIL hutoa huduma za usimamizi wa wadudu katika maeneo muhimu nchini Tanzania."}
          </p>
        </div>

        <div className="service-areas__grid">
          {areas.map((area, index) => (
            <div className="service-area-card" key={area.name}>
              <div className="service-area-card__top">
                <span>0{index + 1}</span>
                <MapPin size={19} />
              </div>

              <div>
                <h3>{area.name}</h3>
                <p>{area.type}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="service-areas__locations">
          <div>
            <span>
              {isEnglish
                ? "DAR ES SALAAM OFFICE"
                : "OFISI YA DAR ES SALAAM"}
            </span>

            <strong>Sinza Mori, Kinondoni</strong>
          </div>

          <div>
            <span>
              {isEnglish
                ? "ZANZIBAR OFFICE"
                : "OFISI YA ZANZIBAR"}
            </span>

            <strong>Fuoni Morocco</strong>
          </div>

          <Link to="/contact" className="text-link">
            <span>
              {isEnglish
                ? "Talk to JEMOKIL"
                : "Wasiliana na JEMOKIL"}
            </span>

            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServiceAreas;