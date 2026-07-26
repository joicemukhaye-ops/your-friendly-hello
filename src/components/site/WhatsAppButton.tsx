import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/contact";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hello Creed, I'd like to talk about a project.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Creed on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-lift transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
