const WHATSAPP_NUMBER = "255613223732";

export function getWhatsAppUrl(message = "") {
  const encodedMessage = encodeURIComponent(message);

  return encodedMessage
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    : `https://wa.me/${WHATSAPP_NUMBER}`;
}

export function openWhatsApp(message = "") {
  const url = getWhatsAppUrl(message);

  window.open(url, "_blank", "noopener,noreferrer");
}

export default WHATSAPP_NUMBER;