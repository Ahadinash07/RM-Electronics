"use client";

import { MessageCircle, Phone, Send } from "lucide-react";
import { LeadForm } from "./LeadForm";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/gtm";

export const FinalCTA = () => {
  return (
    <section className="pt-4 md:pt-6 pb-16 md:pb-20 bg-surface-soft relative overflow-hidden" id="final-cta">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/30 px-4 py-2 rounded-full mb-6">
          <Send className="h-4 w-4 text-brand-accent" />
          <span className="text-sm font-semibold text-brand-accent uppercase tracking-wider">
            Get Started
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
          TV Not Working? Let's Get It Fixed.
        </h2>
        <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
          Call or WhatsApp us now for immediate assistance. Or fill out the form below and we'll get back to you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="/call"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-primary text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-brand-primary/25 transition-all duration-300 transform hover:-translate-y-0.5"
            onClick={() => trackPhoneClick("final_cta")}
          >
            <Phone className="h-6 w-6" />
            <span>Call Now</span>
          </a>
          <a
            href="https://wa.me/917893457190"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-whatsapp text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-brand-whatsapp/25 transition-all duration-300 transform hover:-translate-y-0.5"
            onClick={() => trackWhatsAppClick("final_cta")}
          >
            <MessageCircle className="h-6 w-6" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        <div className="max-w-2xl mx-auto bg-white border border-border-light rounded-3xl p-8 shadow-2xl relative z-10">
          <h3 className="text-2xl font-bold text-text-primary mb-2">
            Or Submit an Enquiry
          </h3>
          <p className="text-text-secondary mb-6">
            Fill out the form and we'll contact you shortly.
          </p>
          <LeadForm />
        </div>
      </div>
    </section>
  );
};