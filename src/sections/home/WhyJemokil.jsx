import {
  ClipboardCheck,
  FileCheck2,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

import { useLanguage } from "../../hooks/useLanguage";

import "./WhyJemokil.css";

const reasons = [
  {
    id: "professional",
    icon: ShieldCheck,
    title: {
      en: "Professional Service",
      sw: "Huduma ya Kitaalamu",
    },
    description: {
      en: "Structured pest management based on inspection, treatment and prevention.",
      sw: "Usimamizi wa wadudu unaozingatia ukaguzi, tiba na kinga.",
    },
  },
  {
    id: "people",
    icon: UsersRound,
    title: {
      en: "Experienced Personnel",
      sw: "Wataalamu Wenye Uzoefu",
    },
    description: {
      en: "A service approach built around practical pest management knowledge and responsible application.",
      sw: "Huduma inayojengwa katika uelewa wa vitendo wa usimamizi wa wadudu na matumizi yenye uwajibikaji.",
    },
  },
  {
    id: "documented",
    icon: FileCheck2,
    title: {
      en: "Documented Services",
      sw: "Huduma Zenye Nyaraka",
    },
    description: {
      en: "Clear service records and documentation where required for the job.",
      sw: "Kumbukumbu na nyaraka za huduma pale zinapohitajika kulingana na kazi.",
    },
  },
  {
    id: "assessment",
    icon: ClipboardCheck,
    title: {
      en: "Problem-Focused Approach",
      sw: "Mbinu Inayolenga Tatizo",
    },
    description: {
      en: "We focus on understanding the pest problem and environment before recommending the appropriate solution.",
      sw: "Tunalenga kuelewa tatizo la wadudu na mazingira kabla ya kupendekeza suluhisho linalofaa.",
    },
  },
];

function WhyJemokil() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <section className="why-jemokil section">
      <div className="container">
        <div className="why-jemokil__layout">
          {/* LEFT */}
          <div className="why-jemokil__intro">
            <div className="why-jemokil__eyebrow">
              <span className="why-jemokil__eyebrow-line" />
              <span>
                {isEnglish ? "WHY JEMOKIL" : "KWA NINI JEMOKIL"}
              </span>
            </div>

            <h2 className="why-jemokil__title">
              {isEnglish ? (
                <>
                  Pest control
                  <br />
                  <span>done properly.</span>
                </>
              ) : (
                <>
                  Udhibiti wa wadudu
                  <br />
                  <span>unaofanyika ipasavyo.</span>
                </>
              )}
            </h2>

            <p className="why-jemokil__description">
              {isEnglish
                ? "Effective pest management starts with understanding the problem. JEMOKIL combines assessment, targeted treatment and prevention to provide practical solutions for different environments."
                : "Usimamizi bora wa wadudu huanza kwa kuelewa tatizo. JEMOKIL huunganisha tathmini, tiba maalum na kinga ili kutoa suluhisho linalofaa kwa mazingira mbalimbali."}
            </p>
          </div>

          {/* RIGHT */}
          <div className="why-jemokil__reasons">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <article className="why-card" key={reason.id}>
                  <div className="why-card__top">
                    <span className="why-card__number">
                      0{index + 1}
                    </span>

                    <div className="why-card__icon">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                  </div>

                  <h3>{reason.title[language]}</h3>

                  <p>{reason.description[language]}</p>
                </article>
              );
            })}
          </div>
        </div>

        {/* PROCESS */}
        <div className="why-process">
          <div className="why-process__heading">
            <span>
              {isEnglish
                ? "OUR APPROACH"
                : "NAMNA TUNAVYOFANYA KAZI"}
            </span>

            <p>
              {isEnglish
                ? "A clear process from identifying the problem to protecting the space."
                : "Mchakato unaoeleweka kuanzia kutambua tatizo hadi kulinda eneo."}
            </p>
          </div>

          <div className="why-process__steps">
            <div className="why-step">
              <span>01</span>
              <strong>
                {isEnglish ? "Assess" : "Tathmini"}
              </strong>
            </div>

            <div className="why-step">
              <span>02</span>
              <strong>
                {isEnglish ? "Recommend" : "Pendekeza"}
              </strong>
            </div>

            <div className="why-step">
              <span>03</span>
              <strong>
                {isEnglish ? "Treat" : "Dhibiti"}
              </strong>
            </div>

            <div className="why-step">
              <span>04</span>
              <strong>
                {isEnglish ? "Follow Up" : "Fuatilia"}
              </strong>
            </div>

            <div className="why-step">
              <span>05</span>
              <strong>
                {isEnglish ? "Prevent" : "Zuia"}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyJemokil;