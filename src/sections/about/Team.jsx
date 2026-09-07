import { ArrowUpRight, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";

function Team() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <section className="team">
      <div className="container">
        <div className="team__grid">
          <div className="team__content">
            <span className="section-label">
              {isEnglish ? "THE TEAM" : "TIMU YETU"}
            </span>

            <h2>
              {isEnglish ? (
                <>
                  People behind
                  <br />
                  <span>the service.</span>
                </>
              ) : (
                <>
                  Watu walio nyuma
                  <br />
                  <span>ya huduma.</span>
                </>
              )}
            </h2>

            <p>
              {isEnglish
                ? "Professional service depends on the people delivering it. JEMOKIL's team is being built around practical knowledge, responsible service and a commitment to customer needs."
                : "Huduma ya kitaalamu inategemea watu wanaoitoa. Timu ya JEMOKIL inajengwa kwa kuzingatia ujuzi wa vitendo, uwajibikaji na mahitaji ya wateja."}
            </p>

            <Link to="/contact" className="text-link">
              <span>
                {isEnglish ? "Get in touch" : "Wasiliana nasi"}
              </span>

              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="team__image">
            <img
              src="/about/team.webp"
              alt={
                isEnglish
                  ? "JEMOKIL team"
                  : "Timu ya JEMOKIL"
              }
            />

            <div className="team__badge">
              <Users size={19} />

              <span>
                {isEnglish
                  ? "THE PEOPLE BEHIND JEMOKIL"
                  : "WATU WALIO NYUMA YA JEMOKIL"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;