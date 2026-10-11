"use client";

import { MessageCircle, Phone } from "lucide-react";
import { LeadForm } from "./LeadForm";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/gtm";

export const FinalCTA = () => {
  return (
    <section className="py-16 bg-[#1A0F3C] text-white" id="final-cta">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          TV Not Working? Let's Get It Fixed.
        </h2>
        <p className="text-lg text-[#9CA3AF] mb-8 max-w-2xl mx-auto">
          Call or WhatsApp us now for immediate assistance. Or fill out the form below and we'll get back to you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="/call"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FF4A17] text-white font-bold text-lg rounded-lg hover:bg-[#F97316] transition-all duration-200 shadow-lg hover:shadow-xl"
            onClick={() => trackPhoneClick("final_cta")}
          >
            <Phone className="h-6 w-6" />
            <span>Call Now</span>
          </a>
          <a
            href="https://wa.me/917893457190"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold text-lg rounded-lg hover:bg-[#1db954] transition-all duration-200 shadow-lg hover:shadow-xl"
            onClick={() => trackWhatsAppClick("final_cta")}
          >
            <MessageCircle className="h-6 w-6" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        <div className="max-w-2xl mx-auto bg-white text-[#111827] rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-2">
            Or Submit an Enquiry
          </h3>
          <p className="text-[#6B7280] mb-6">
            Fill out the form and we'll contact you shortly.
          </p>
          <LeadForm />
        </div>
      </div>
    </section>
  );
};