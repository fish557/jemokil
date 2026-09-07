import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";

function Equipment() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const equipmentImages = [
    {
      image: "/about/equipment-01.webp",
      title: isEnglish ? "Application Equipment" : "Vifaa vya Uwekaji Huduma",
    },
    {
      image: "/about/equipment-02.webp",
      title: isEnglish ? "Inspection Equipment" : "Vifaa vya Ukaguzi",
    },
    {
      image: "/about/equipment-03.webp",
      title: isEnglish ? "Professional Tools" : "Vifaa vya Kitaalamu",
    },
  ];

  return (
    <section className="equipment">
      <div className="equipment__image">
        <img
          src="/about/equipment.webp"
          alt={
            isEnglish
              ? "Professional pest management equipment used by JEMOKIL"
              : "Vifaa vya kitaalamu vinavyotumika katika huduma za JEMOKIL"
          }
        />
      </div>

      <div className="container equipment__container">
        <div className="equipment__content">
          <span className="section-label">
            {isEnglish
              ? "EQUIPMENT & PREPARATION"
              : "VIFAA NA MAANDALIZI"}
          </span>

          <h2>
            {isEnglish ? (
              <>
                The right tools
                <br />
                <span>for the job.</span>
              </>
            ) : (
              <>
                Vifaa sahihi
                <br />
                <span>kwa kazi husika.</span>
              </>
            )}
          </h2>

          <p>
            {isEnglish
              ? "Professional pest management requires appropriate tools, careful preparation and a clear understanding of the environment being treated."
              : "Usimamizi wa wadudu wa kitaalamu unahitaji vifaa vinavyofaa, maandalizi makini na uelewa mzuri wa mazingira yanayohudumiwa."}
          </p>
        </div>

        <div className="equipment__gallery">
          {equipmentImages.map((item, index) => (
            <div
              className={`equipment__gallery-item ${
                index === 0 ? "equipment__gallery-item--featured" : ""
              }`}
              key={item.image}
            >
              <img src={item.image} alt={item.title} />

              <div className="equipment__gallery-overlay">
                <span>0{index + 1}</span>
                <strong>{item.title}</strong>
              </div>
            </div>
          ))}
        </div>

        <div className="equipment__footer">
          <p>
            {isEnglish
              ? "Our equipment and preparation support a professional approach to inspection, treatment and preventive pest management."
              : "Vifaa na maandalizi yetu vinaunga mkono utekelezaji wa kitaalamu wa ukaguzi, udhibiti na kinga dhidi ya wadudu."}
          </p>

          <Link to="/contact" className="text-link">
            <span>
              {isEnglish
                ? "Ask about our service"
                : "Uliza kuhusu huduma yetu"}
            </span>

            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Equipment;