"use client";

import { MessageCircle, Phone } from "lucide-react";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/gtm";

export const HeroSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Copy */}
          <div className="space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[#FFF7ED] px-4 py-2 rounded-full">
              <span className="text-sm font-semibold text-[#F97316] uppercase tracking-wider">
                INDEPENDENT TV REPAIR SERVICE IN HYDERABAD
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-[#111827] leading-tight">
              <span className="block">TV Repair at Your</span>
              <span className="block text-[#FF4A17]">Doorstep in Hyderabad</span>
            </h1>

            {/* Body */}
            <p className="text-lg text-[#374151] leading-relaxed max-w-md">
              From no display and black screens to backlight, motherboard, power and Smart TV issues — get your TV diagnosed and repaired at home, where doorstep service is available.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href="/call"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FF4A17] text-white font-semibold rounded-lg hover:bg-[#F97316] transition-all duration-200 shadow-lg hover:shadow-xl"
                onClick={() => trackPhoneClick("hero_section")}
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/917893457190"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#1db954] transition-all duration-200 shadow-lg hover:shadow-xl"
                onClick={() => trackWhatsAppClick("hero_section")}
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/RM-Images/Balaji TV Repair Workshop.png"
                alt="Technician repairing TV in Indian home"
                className="w-full h-auto object-cover"
                width={600}
                height={400}
                loading="eager"
              />
              {/* Orange geometric accent */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#FF4A17] rounded-full opacity-10 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};