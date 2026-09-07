import { ArrowUpRight, Send } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";

function ContactForm() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    location: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = isEnglish
      ? `Hello JEMOKIL,

I would like to request a pest management service.

Name: ${formData.name}
Phone: ${formData.phone}
Service needed: ${formData.service}
Location: ${formData.location}

Message:
${formData.message}`
      : `Habari JEMOKIL,

Ningependa kuomba huduma ya kudhibiti wadudu.

Jina: ${formData.name}
Simu: ${formData.phone}
Huduma ninayohitaji: ${formData.service}
Eneo: ${formData.location}

Maelezo:
${formData.message}`;

    const whatsappUrl = `https://wa.me/255613223732?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="contact-form-section">
      <div className="container">
        <div className="contact-form-section__grid">
          <div className="contact-form-section__intro">
            <span className="section-label">
              {isEnglish
                ? "REQUEST A SERVICE"
                : "OMBA HUDUMA"}
            </span>

            <h2>
              {isEnglish ? (
                <>
                  Tell us what
                  <br />
                  <span>you need.</span>
                </>
              ) : (
                <>
                  Tuambie
                  <br />
                  <span>unahitaji nini.</span>
                </>
              )}
            </h2>

            <p>
              {isEnglish
                ? "Give us a few details about your pest problem. We will use the information to understand your needs and help you take the next step."
                : "Tupatie maelezo machache kuhusu changamoto yako ya wadudu. Tutatumia taarifa hizo kuelewa mahitaji yako na kukuelekeza hatua inayofuata."}
            </p>

            <div className="contact-form-section__direct">
              <span>
                {isEnglish
                  ? "NEED A QUICK RESPONSE?"
                  : "UNAHITAJI MAJIBU HARAKA?"}
              </span>

              <a
                href="https://wa.me/255613223732"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  {isEnglish
                    ? "Chat directly on WhatsApp"
                    : "Ongea moja kwa moja WhatsApp"}
                </span>

                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="contact-form__row">
              <label>
                <span>
                  {isEnglish ? "Your name" : "Jina lako"}
                </span>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={
                    isEnglish
                      ? "Enter your name"
                      : "Andika jina lako"
                  }
                  required
                />
              </label>

              <label>
                <span>
                  {isEnglish ? "Phone number" : "Namba ya simu"}
                </span>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+255..."
                  required
                />
              </label>
            </div>

            <div className="contact-form__row">
              <label>
                <span>
                  {isEnglish
                    ? "Service needed"
                    : "Huduma unayohitaji"}
                </span>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    {isEnglish
                      ? "Select a service"
                      : "Chagua huduma"}
                  </option>

                  <option value="Fumigation & Pest Management">
                    {isEnglish
                      ? "Fumigation & Pest Management"
                      : "Ufukizaji na Usimamizi wa Wadudu"}
                  </option>

                  <option value="Pest-Specific Control">
                    {isEnglish
                      ? "Pest-Specific Control"
                      : "Udhibiti wa Wadudu Maalum"}
                  </option>

                  <option value="Inspection & Certification">
                    {isEnglish
                      ? "Inspection & Certification"
                      : "Ukaguzi na Uthibitishaji"}
                  </option>

                  <option value="Preventive & Contract Management">
                    {isEnglish
                      ? "Preventive & Contract Management"
                      : "Kinga na Usimamizi wa Mikataba"}
                  </option>

                  <option value="Not sure">
                    {isEnglish
                      ? "I'm not sure"
                      : "Sina uhakika"}
                  </option>
                </select>
              </label>

              <label>
                <span>
                  {isEnglish
                    ? "Location"
                    : "Eneo"}
                </span>

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder={
                    isEnglish
                      ? "e.g. Sinza, Dar es Salaam"
                      : "mf. Sinza, Dar es Salaam"
                  }
                  required
                />
              </label>
            </div>

            <label>
              <span>
                {isEnglish
                  ? "Tell us about the problem"
                  : "Tuambie kuhusu tatizo"}
              </span>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={
                  isEnglish
                    ? "What pest are you dealing with? Where is the problem? Any other useful details?"
                    : "Unakabiliana na mdudu gani? Tatizo lipo wapi? Taarifa nyingine muhimu?"
                }
                rows="6"
                required
              />
            </label>

            <button type="submit" className="contact-form__submit">
              <span>
                {isEnglish
                  ? "Send Request on WhatsApp"
                  : "Tuma Ombi kupitia WhatsApp"}
              </span>

              <Send size={18} />
            </button>

            <p className="contact-form__privacy">
              {isEnglish
                ? "Your request will open in WhatsApp so you can send it directly to JEMOKIL."
                : "Ombi lako litafunguka WhatsApp ili uweze kulituma moja kwa moja kwa JEMOKIL."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;