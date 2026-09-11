import { buildGeneralInquiryUrl } from "../utils/whatsapp";
import { WhatsAppIcon } from "./icons";

export default function WhatsAppFloatButton() {
  return (
    <a
      href={buildGeneralInquiryUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft-lg transition-transform hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
