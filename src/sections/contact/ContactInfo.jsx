import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";

function ContactInfo() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const contacts = [
    {
      icon: Phone,
      label: isEnglish ? "CALL US" : "PIGA SIMU",
      title: "+255 613 223 732",
      text: isEnglish
        ? "Speak directly with JEMOKIL."
        : "Wasiliana moja kwa moja na JEMOKIL.",
      href: "tel:+255613223732",
    },
    {
      icon: MessageCircle,
      label: "WHATSAPP",
      title: isEnglish ? "Chat with us" : "Ongea nasi",
      text: isEnglish
        ? "Send us your pest problem on WhatsApp."
        : "Tuma changamoto yako ya wadudu kupitia WhatsApp.",
      href: "https://wa.me/255613223732",
    },
    {
      icon: Mail,
      label: isEnglish ? "EMAIL" : "BARUA PEPE",
      title: "info@jemokil.com",
      text: isEnglish
        ? "Send a detailed service enquiry."
        : "Tuma maelezo ya huduma unayohitaji.",
      href: "mailto:info@jemokil.com",
    },
    {
      icon: MapPin,
      label: isEnglish ? "DAR ES SALAAM" : "DAR ES SALAAM",
      title: "Sinza Mori",
      text: isEnglish
        ? "JEMOKIL office — Kinondoni."
        : "Ofisi ya JEMOKIL — Kinondoni.",
      href: "#service-areas",
    },
  ];

  return (
    <section className="contact-info">
      <div className="container">
        <div className="contact-info__header">
          <span className="section-label">
            {isEnglish ? "GET IN TOUCH" : "WASILIANA NASI"}
          </span>

          <h2>
            {isEnglish ? (
              <>
                Choose the way
                <br />
                <span>that works for you.</span>
              </>
            ) : (
              <>
                Chagua njia
                <br />
                <span>inayokufaa.</span>
              </>
            )}
          </h2>
        </div>

        <div className="contact-info__grid">
          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.label}
                href={contact.href}
                className="contact-info__card"
                target={
                  contact.href.startsWith("https://")
                    ? "_blank"
                    : undefined
                }
                rel={
                  contact.href.startsWith("https://")
                    ? "noreferrer"
                    : undefined
                }
              >
                <div className="contact-info__icon">
                  <Icon size={21} />
                </div>

                <div className="contact-info__card-content">
                  <span>{contact.label}</span>
                  <h3>{contact.title}</h3>
                  <p>{contact.text}</p>
                </div>

                <ArrowUpRight size={19} className="contact-info__arrow" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;