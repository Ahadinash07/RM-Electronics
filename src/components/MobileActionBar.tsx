"use client";
import { MessageCircle, Phone } from "lucide-react";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/gtm";
import { SITE } from "@/lib/site";
import { SiteLink } from "@/components/SiteLink";

export const MobileActionBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] md:hidden flex shadow-2xl">
      <SiteLink
        href="/call"
        className="flex-1 flex items-center justify-center gap-2 bg-brand-primary text-white font-semibold text-lg pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))] active:opacity-90 transition-all"
        onClick={() => trackPhoneClick("mobile_action_bar")}
      >
        <Phone className="h-5 w-5" />
        <span>Call Now</span>
      </SiteLink>
      <SiteLink
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-brand-whatsapp text-white font-semibold text-lg pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))] active:opacity-90 transition-all"
        onClick={() => trackWhatsAppClick("mobile_action_bar")}
      >
        <MessageCircle className="h-5 w-5" />
        <span>WhatsApp</span>
      </SiteLink>
    </div>
  );
};
