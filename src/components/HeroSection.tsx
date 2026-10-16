"use client";

import { MessageCircle, Phone, Sparkles, ShieldCheck, Clock } from "lucide-react";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/gtm";
import { SITE } from "@/lib/site";
import { SiteLink } from "@/components/SiteLink";

export const HeroSection = () => {
  return (
    <section className="relative flex items-center overflow-hidden bg-white" id="hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/20 px-4 py-2 rounded-full">
              <Sparkles className="h-4 w-4 text-brand-primary" />
              <span className="text-sm font-semibold text-brand-primary uppercase tracking-wider">
                Premium TV Repair Service
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight">
                <span className="block">Expert TV Repair</span>
                <span className="block text-brand-primary">At Your Doorstep</span>
              </h1>
              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-xl">
                Professional TV repair services in Hyderabad. Component-level diagnostics, genuine parts, and 90-day warranty on all repairs.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-surface-soft border border-border-light px-4 py-2 rounded-lg">
                <ShieldCheck className="h-4 w-4 text-brand-accent" />
                <span className="text-sm text-text-secondary">90-Day Warranty</span>
              </div>
              <div className="flex items-center gap-2 bg-surface-soft border border-border-light px-4 py-2 rounded-lg">
                <Clock className="h-4 w-4 text-brand-primary" />
                <span className="text-sm text-text-secondary">Same-Day Service</span>
              </div>
              <div className="flex items-center gap-2 bg-surface-soft border border-border-light px-4 py-2 rounded-lg">
                <Sparkles className="h-4 w-4 text-brand-primary" />
                <span className="text-sm text-text-secondary">Genuine Parts</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <SiteLink
                href="/call"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-primary text-white font-semibold rounded-xl hover:bg-brand-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => trackPhoneClick("hero_section")}
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </SiteLink>
              <SiteLink
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-whatsapp text-white font-semibold rounded-xl hover:bg-brand-whatsapp/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => trackWhatsAppClick("hero_section")}
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Us</span>
              </SiteLink>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-brand-primary border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                  RM
                </div>
                <div className="w-10 h-10 rounded-full bg-brand-accent border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                  TV
                </div>
              </div>
              <div className="text-sm text-text-muted">
                <span className="font-semibold text-text-primary">500+</span> Happy Customers in Hyderabad
              </div>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/RM-Images/Balaji TV Repair Workshop.png"
                  alt="Professional TV Repair Service"
                  className="w-full h-auto object-cover"
                  width={600}
                  height={500}
                  loading="eager"
                />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white border border-border-light rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent flex items-center justify-center">
                    <ShieldCheck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-text-primary">10+</div>
                    <div className="text-sm text-text-muted">Years Experience</div>
                  </div>
                </div>
              </div>

              {/* Floating Service Card */}
              <div className="absolute -top-6 -right-6 bg-white border border-border-light rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-primary flex items-center justify-center">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text-primary">Quick Response</div>
                    <div className="text-xs text-text-muted">Within 2 Hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};