import { WHATSAPP_URL } from "@/utils/constants";

export default function WhatsAppButton() {
  return <a className="travlink-whatsapp-float" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Contact Travlink Global on WhatsApp"><i className="fa-brands fa-whatsapp" aria-hidden="true" /></a>;
}
