import { ArrowUpRight, ClipboardCheck, FileCheck2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";

function Inspection() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const inspectionItems = [
    {
      number: "01",
      title: isEnglish ? "Pest Inspection" : "Ukaguzi wa Wadudu",
      description: isEnglish
        ? "Assessing properties to identify visible pest activity, risk areas and conditions that may support infestation."
        : "Kutathmini maeneo ili kubaini uwepo wa wadudu, maeneo yenye hatari na mazingira yanayoweza kuchochea uvamizi.",
    },
    {
      number: "02",
      title: isEnglish ? "Property Assessment" : "Tathmini ya Eneo",
      description: isEnglish
        ? "Understanding the property, its environment and the specific conditions surrounding the pest problem."
        : "Kuelewa eneo, mazingira yake na hali zinazohusiana na changamoto ya wadudu.",
    },
    {
      number: "03",
      title: isEnglish ? "Service Documentation" : "Nyaraka za Huduma",
      description: isEnglish
        ? "Clear service records that help document inspections, treatments and follow-up activities."
        : "Kumbukumbu za huduma zinazosaidia kuweka taarifa za ukaguzi, matibabu na ufuatiliaji.",
    },
    {
      number: "04",
      title: isEnglish ? "Certification" : "Uthibitishaji",
      description: isEnglish
        ? "Relevant service certification and documentation where applicable and within JEMOKIL's authorized scope."
        : "Vyeti na nyaraka husika pale inapohitajika na ndani ya wigo wa huduma ambao JEMOKIL imeidhinishwa kutoa.",
    },
  ];

  return (
    <section id="inspection" className="inspection">
      <div className="container">
        <div className="inspection__top">
          <div className="inspection__heading">
            <span className="section-label">
              {isEnglish ? "02 / INSPECTION" : "02 / UKAGUZI"}
            </span>

            <h2>
              {isEnglish ? (
                <>
                  Know the problem
                  <br />
                  <span>before treating it.</span>
                </>
              ) : (
                <>
                  Fahamu tatizo
                  <br />
                  <span>kabla ya kulitatua.</span>
                </>
              )}
            </h2>
          </div>

          <div className="inspection__intro">
            <p>
              {isEnglish
                ? "Good pest management starts with understanding the problem. Inspection helps establish what is happening, where the risk exists and what response may be appropriate."
                : "Usimamizi mzuri wa wadudu huanza kwa kuelewa tatizo. Ukaguzi husaidia kubaini kinachoendelea, eneo lenye hatari na hatua inayoweza kufaa."}
            </p>

            <Link to="/contact" className="text-link">
              <span>
                {isEnglish ? "Request an inspection" : "Omba ukaguzi"}
              </span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        <div className="inspection__layout">
          <div className="inspection__image">
            <img
              src="/services/inspection.webp"
              alt={
                isEnglish
                  ? "Professional pest inspection service"
                  : "Huduma ya kitaalamu ya ukaguzi wa wadudu"
              }
            />

            <div className="inspection__image-badge">
              <ClipboardCheck size={20} />
              <span>
                {isEnglish ? "INSPECTION FIRST" : "UKAGUZI KWANZA"}
              </span>
            </div>
          </div>

          <div className="inspection__content">
            <div className="inspection__icon">
              <FileCheck2 size={24} />
            </div>

            <h3>
              {isEnglish
                ? "Assessment, documentation and informed action."
                : "Tathmini, nyaraka na hatua sahihi."}
            </h3>

            <p>
              {isEnglish
                ? "Inspection provides a clearer basis for deciding what needs to be done. Where documentation is required, service records help create a clear reference for the work carried out."
                : "Ukaguzi hutoa msingi mzuri wa kuamua hatua zinazohitajika. Pale nyaraka zinapohitajika, kumbukumbu za huduma husaidia kuweka taarifa wazi za kazi iliyofanyika."}
            </p>
          </div>
        </div>

        <div className="inspection__items">
          {inspectionItems.map((item) => (
            <article className="inspection__item" key={item.number}>
              <span>{item.number}</span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Inspection;