import {
  ArrowUpRight,
  CalendarCheck,
  ShieldCheck,
  SearchCheck,
  RefreshCcw,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";

function PreventiveManagement() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const steps = [
    {
      icon: SearchCheck,
      title: isEnglish ? "Inspect" : "Kagua",
      text: isEnglish
        ? "Identify pest activity and risk areas."
        : "Tambua uwepo wa wadudu na maeneo yenye hatari.",
    },
    {
      icon: ShieldCheck,
      title: isEnglish ? "Prevent" : "Zuia",
      text: isEnglish
        ? "Address conditions that may encourage infestation."
        : "Shughulikia mazingira yanayoweza kuchochea uvamizi.",
    },
    {
      icon: CalendarCheck,
      title: isEnglish ? "Monitor" : "Fuatilia",
      text: isEnglish
        ? "Maintain routine checks and monitoring."
        : "Endelea na ukaguzi na ufuatiliaji wa mara kwa mara.",
    },
    {
      icon: RefreshCcw,
      title: isEnglish ? "Follow Up" : "Fuatilia Tena",
      text: isEnglish
        ? "Review results and respond where necessary."
        : "Tathmini matokeo na chukua hatua inapohitajika.",
    },
  ];

  return (
    <section
      id="preventive-management"
      className="preventive-management"
    >
      <div className="preventive-management__image">
        <img
          src="/services/preventive-management.webp"
          alt={
            isEnglish
              ? "Preventive pest management service"
              : "Huduma ya kinga na usimamizi wa wadudu"
          }
        />
      </div>

      <div className="container preventive-management__container">
        <div className="preventive-management__content">
          <span className="section-label">
            {isEnglish
              ? "03 / PREVENTIVE MANAGEMENT"
              : "03 / USIMAMIZI WA KINGA"}
          </span>

          <h2>
            {isEnglish ? (
              <>
                Prevention is
                <br />
                <span>part of the solution.</span>
              </>
            ) : (
              <>
                Kinga ni sehemu
                <br />
                <span>ya suluhisho.</span>
              </>
            )}
          </h2>

          <p>
            {isEnglish
              ? "For properties that need ongoing protection, preventive pest management can help identify risks early, maintain monitoring routines and respond before problems become larger."
              : "Kwa maeneo yanayohitaji ulinzi endelevu, usimamizi wa kinga unaweza kusaidia kutambua hatari mapema, kuweka utaratibu wa ufuatiliaji na kuchukua hatua kabla tatizo halijawa kubwa."}
          </p>

          <div className="preventive-management__actions">
            <Link to="/contact" className="preventive-management__button">
              <span>
                {isEnglish
                  ? "Discuss a Management Programme"
                  : "Jadili Mpango wa Usimamizi"}
              </span>

              <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>

        <div className="preventive-management__steps">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div className="preventive-management__step" key={step.title}>
                <div className="preventive-management__step-number">
                  0{index + 1}
                </div>

                <div className="preventive-management__step-icon">
                  <Icon size={22} />
                </div>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PreventiveManagement;