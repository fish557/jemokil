import {
  ClipboardCheck,
  ShieldCheck,
  FileCheck2,
  UserCheck,
} from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";

function Standards() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const standards = [
    {
      icon: ClipboardCheck,
      number: "01",
      title: isEnglish ? "Assess First" : "Tathmini Kwanza",
      text: isEnglish
        ? "Understand the property and pest problem before deciding on the appropriate response."
        : "Elewa eneo na tatizo la wadudu kabla ya kuamua hatua inayofaa.",
    },
    {
      icon: ShieldCheck,
      number: "02",
      title: isEnglish ? "Responsible Service" : "Huduma Yenye Uwajibikaji",
      text: isEnglish
        ? "Apply appropriate pest management practices with attention to the environment being treated."
        : "Tumia mbinu zinazofaa za usimamizi wa wadudu kwa kuzingatia mazingira yanayohudumiwa.",
    },
    {
      icon: FileCheck2,
      number: "03",
      title: isEnglish ? "Document the Work" : "Andika Kumbukumbu",
      text: isEnglish
        ? "Maintain clear service information and documentation where required."
        : "Weka taarifa na kumbukumbu wazi za huduma pale inapohitajika.",
    },
    {
      icon: UserCheck,
      number: "04",
      title: isEnglish ? "Customer Focus" : "Kumjali Mteja",
      text: isEnglish
        ? "Communicate clearly and focus on solving the customer's actual pest problem."
        : "Wasiliana kwa uwazi na lenga kutatua changamoto halisi ya mteja.",
    },
  ];

  return (
    <section className="standards">
      <div className="container">
        <div className="standards__header">
          <div>
            <span className="section-label">
              {isEnglish ? "OUR STANDARDS" : "VIWANGO VYETU"}
            </span>

            <h2>
              {isEnglish ? (
                <>
                  Professionalism
                  <br />
                  <span>in the process.</span>
                </>
              ) : (
                <>
                  Utaalamu
                  <br />
                  <span>katika kila hatua.</span>
                </>
              )}
            </h2>
          </div>

          <p>
            {isEnglish
              ? "Good pest management is not only about treatment. It is about understanding the problem, choosing an appropriate response and maintaining clear communication throughout the service."
              : "Usimamizi mzuri wa wadudu hauishii kwenye tiba pekee. Ni kuelewa tatizo, kuchagua hatua inayofaa na kudumisha mawasiliano wazi wakati wa huduma."}
          </p>
        </div>

        <div className="standards__grid">
          {standards.map((standard) => {
            const Icon = standard.icon;

            return (
              <article className="standards__card" key={standard.number}>
                <div className="standards__top">
                  <span>{standard.number}</span>

                  <Icon size={23} />
                </div>

                <h3>{standard.title}</h3>

                <p>{standard.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Standards;