"use client";

import { MessageCircle, Phone, CheckCircle2, Sparkles } from "lucide-react";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/gtm";
import { SITE } from "@/lib/site";
import { SiteLink } from "@/components/SiteLink";

export const QuoteCTA = () => {
  return (
    <section className="pt-4 md:pt-6 pb-12 md:pb-16 bg-surface-soft relative overflow-hidden" id="quote">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/30 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-brand-accent" />
              <span className="text-sm font-semibold text-brand-accent uppercase tracking-wider">
                Transparent Pricing
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              Transparent Quote Before Repair
            </h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              We believe in honest pricing. Our technician will diagnose the issue and provide a clear, itemized quote before starting any repair work. No hidden charges.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-brand-primary" />
                </div>
                <div>
                  <p className="text-text-primary font-medium">Free diagnosis with every repair</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-brand-accent" />
                </div>
                <div>
                  <p className="text-text-primary font-medium">No repair without your approval</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-brand-primary" />
                </div>
                <div>
                  <p className="text-text-primary font-medium">90-day warranty on all repairs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - CTA Card */}
          <div className="bg-white border border-border-light rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              Get Your Free Quote
            </h3>
            <p className="text-text-secondary mb-6">
              Tell us about your TV issue and we'll get back to you.
            </p>

            <div className="space-y-4">
              <SiteLink
                href="/call"
                className="flex items-center justify-center gap-2 w-full py-4 bg-brand-primary text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-brand-primary/25 transition-all duration-300 transform hover:-translate-y-0.5"
                onClick={() => trackPhoneClick("quote_cta")}
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </SiteLink>
              <SiteLink
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-brand-whatsapp text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-brand-whatsapp/25 transition-all duration-300 transform hover:-translate-y-0.5"
                onClick={() => trackWhatsAppClick("quote_cta")}
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Us</span>
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};