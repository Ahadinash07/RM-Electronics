"use client";

import { MessageCircle, Phone } from "lucide-react";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/gtm";

export const QuoteCTA = () => {
  return (
    <section className="py-16 bg-white" id="quote">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">
              Transparent Quote Before Repair
            </h2>
            <p className="text-lg text-[#374151] mb-6 leading-relaxed">
              We believe in honest pricing. Our technician will diagnose the issue and provide a clear, itemized quote before starting any repair work. No hidden charges.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#34D399]/20 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[#34D399]" />
                </div>
                <p className="text-[#374151]">
                  Free diagnosis with every repair
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#34D399]/20 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[#34D399]" />
                </div>
                <p className="text-[#374151]">
                  No repair without your approval
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#34D399]/20 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[#34D399]" />
                </div>
                <p className="text-[#374151]">
                  90-day warranty on all repairs
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - CTA Card */}
          <div className="bg-white border-2 border-[#FF4A17] rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#111827] mb-2">
              Get Your Free Quote
            </h3>
            <p className="text-[#6B7280] mb-6">
              Tell us about your TV issue and we'll get back to you.
            </p>

            <div className="space-y-3">
              <a
                href="/call"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#FF4A17] text-white font-semibold rounded-lg hover:bg-[#F97316] transition-colors"
                onClick={() => trackPhoneClick("quote_cta")}
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/917893457190"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#1db954] transition-colors"
                onClick={() => trackWhatsAppClick("quote_cta")}
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};