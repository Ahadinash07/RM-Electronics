"use client";

import { MapPin, Clock, Phone, CheckCircle2 } from "lucide-react";
import { trackPhoneClick } from "@/lib/gtm";

export const DoorstepSection = () => {
  return (
    <section className="pt-4 md:pt-6 pb-12 md:pb-16 bg-surface-soft relative overflow-hidden" id="doorstep">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative pb-8">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border-light">
              <img
                src="/RM-Images/Balaji TV Services Storefront.png"
                alt="Technician working in customer home"
                className="w-full h-auto object-cover"
                width={600}
                height={450}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white border border-border-light rounded-2xl p-6 shadow-2xl max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-accent to-brand-orange flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-text-primary" />
                </div>
                <div>
                  <p className="font-bold text-text-primary text-sm">
                    Doorstep Service
                  </p>
                  <p className="text-xs text-text-secondary">
                    Available in LBNAGAR, CHINATALKUNTA & VP
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/30 px-4 py-2 rounded-full mb-6">
              <CheckCircle2 className="h-4 w-4 text-brand-primary" />
              <span className="text-sm font-semibold text-brand-primary uppercase tracking-wider">
                Convenience
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              Service at Your Doorstep
            </h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Skip the hassle of transporting your TV to a service center. Our technicians come to your home in LBNAGAR, CHINATALKUNTA & VP, diagnose the issue, and repair it on the spot.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary text-lg mb-1">Same-Day Service</h3>
                  <p className="text-sm text-text-secondary">
                    Quick diagnosis and repair for most common TV issues.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center flex-shrink-0">
                  <Phone
                    className="h-6 w-6 text-brand-accent cursor-pointer"
                    onClick={() => trackPhoneClick("doorstep_section")}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary text-lg mb-1">Transparent Pricing</h3>
                  <p className="text-sm text-text-secondary">
                    Get a clear quote before we start any repair work.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary text-lg mb-1">Coverage in Hyderabad</h3>
                  <p className="text-sm text-text-secondary">
                    We service LBNAGAR, CHINATALKUNTA, VP and other areas across Hyderabad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};