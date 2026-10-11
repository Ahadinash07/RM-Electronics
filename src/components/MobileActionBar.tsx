"use client";
import { MessageCircle, Phone } from "lucide-react";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/gtm";

export const MobileActionBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] md:hidden flex shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
      <a
        href="/call"
        className="flex-1 flex items-center justify-center gap-2 bg-[#FF4A17] text-white font-semibold text-lg pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))] active:bg-[#E03E13] transition-colors"
        onClick={() => trackPhoneClick("mobile_action_bar")}
      >
        <Phone className="h-5 w-5" />
        <span>Call Now</span>
      </a>
      <a
        href="https://wa.me/917893457190"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-lg pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))] active:bg-[#20B858] transition-colors"
        onClick={() => trackWhatsAppClick("mobile_action_bar")}
      >
        <MessageCircle className="h-5 w-5" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};