import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { useLanguage } from "../../hooks/useLanguage";
import faqs from "../../data/faqs";

import "./FAQ.css";

function FAQ() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId((currentId) => (currentId === id ? null : id));
  };

  return (
    <section className="faq section" id="faq">
      <div className="container">

        {/* ========================================
            FAQ CONTENT
        ======================================== */}

        <div className="faq__layout">

          {/* ========================================
              LEFT INTRO
          ======================================== */}

          <div className="faq__intro">

            <div className="faq__eyebrow">
              <span className="faq__eyebrow-line" />

              <span>
                {isEnglish
                  ? "FREQUENTLY ASKED QUESTIONS"
                  : "MASWALI YANAYOULIZWA MARA KWA MARA"}
              </span>
            </div>

            <h2 className="faq__title">
              {isEnglish ? (
                <>
                  What you may
                  <br />
                  <span>want to know.</span>
                </>
              ) : (
                <>
                  Mambo ambayo
                  <br />
                  <span>unaweza kutaka kujua.</span>
                </>
              )}
            </h2>

            <p className="faq__description">
              {isEnglish
                ? "Before requesting a service, here are answers to some of the questions customers commonly ask."
                : "Kabla ya kuomba huduma, hapa kuna majibu ya baadhi ya maswali ambayo wateja huuliza mara kwa mara."}
            </p>

          </div>


          {/* ========================================
              FAQ LIST
          ======================================== */}

          <div className="faq__list">

            {faqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  className={`faq__item ${isOpen ? "is-open" : ""}`}
                  key={faq.id}
                >

                  <button
                    type="button"
                    className="faq__question"
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >

                    <span className="faq__number">
                      {String(faq.id).padStart(2, "0")}
                    </span>

                    <span className="faq__question-text">
                      {isEnglish
                        ? faq.question.en
                        : faq.question.sw}
                    </span>

                    <span className="faq__icon">
                      <ChevronDown
                        size={20}
                        strokeWidth={2}
                      />
                    </span>

                  </button>


                  <div
                    id={`faq-answer-${faq.id}`}
                    className="faq__answer"
                    hidden={!isOpen}
                  >
                    <div className="faq__answer-inner">
                      <p>
                        {isEnglish
                          ? faq.answer.en
                          : faq.answer.sw}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}

          </div>

        </div>


        {/* ========================================
            FAQ BOTTOM CTA
        ======================================== */}

        <div className="faq__bottom">

          <div>
            <span className="faq__bottom-label">
              {isEnglish
                ? "STILL HAVE A QUESTION?"
                : "BADO UNA SWALI?"}
            </span>

            <p>
              {isEnglish
                ? "Talk directly with JEMOKIL and tell us about your pest problem."
                : "Wasiliana moja kwa moja na JEMOKIL na utuambie kuhusu tatizo lako la wadudu."}
            </p>
          </div>

          <a
            href="https://wa.me/255613223732"
            target="_blank"
            rel="noreferrer"
            className="faq__bottom-link"
          >
            <span>
              {isEnglish
                ? "Chat on WhatsApp"
                : "Wasiliana WhatsApp"}
            </span>

            <ChevronDown
              size={18}
              className="faq__bottom-arrow"
            />
          </a>

        </div>

      </div>
    </section>
  );
}

export default FAQ;