import { MessageCircle } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { getWhatsAppUrl } from "../utils/whatsapp";

import "./WhatsAppButton.css";

function WhatsAppButton() {
  const { language } = useLanguage();

  const isEnglish = language === "en";

  const message = isEnglish
    ? "Hello JEMOKIL, I would like to know more about your pest management services."
    : "Habari JEMOKIL, ningependa kupata maelezo zaidi kuhusu huduma zenu za kudhibiti wadudu.";

  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-button"
      aria-label={
        isEnglish
          ? "Chat with JEMOKIL on WhatsApp"
          : "Wasiliana na JEMOKIL kupitia WhatsApp"
      }
      title={
        isEnglish
          ? "Chat with JEMOKIL on WhatsApp"
          : "Wasiliana na JEMOKIL kupitia WhatsApp"
      }
    >
      <MessageCircle size={22} strokeWidth={2.2} />

      <span>WhatsApp</span>
    </a>
  );
}

export default WhatsAppButton;