export const WHATSAPP_NUMBER = "256702806852";
export const PHONE_PRIMARY = "+256702806852";
export const EMAIL_PRIMARY = "creed.design.constructioncompany@gmail.com";
export const COMPANY_PROFILE_URL = "https://canva.link/o9ayqv7eim0b5lq";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
