"use client";

import { MapPin, Clock, Phone } from "lucide-react";
import { trackPhoneClick } from "@/lib/gtm";

export const DoorstepSection = () => {
  return (
    <section className="py-16 bg-white overflow-hidden" id="doorstep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/RM-Images/Balaji TV Services Storefront.png"
                alt="Technician working in customer home"
                className="w-full h-auto object-cover"
                width={600}
                height={450}
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-[#25D366]" />
                </div>
                <div>
                  <p className="font-semibold text-[#111827] text-sm">
                    Doorstep Service
                  </p>
                  <p className="text-xs text-[#6B7280]">
                    Available in LBNAGAR, CHINATALKUNTA & VP
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">
              Service at Your Doorstep
            </h2>
            <p className="text-lg text-[#374151] mb-6 leading-relaxed">
              Skip the hassle of transporting your TV to a service center. Our technicians come to your home in LBNAGAR, CHINATALKUNTA & VP, diagnose the issue, and repair it on the spot.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[#FF4A17] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#111827]">Same-Day Service</h3>
                  <p className="text-sm text-[#6B7280]">
                    Quick diagnosis and repair for most common TV issues.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone
                  className="h-5 w-5 text-[#FF4A17] mt-0.5 flex-shrink-0 cursor-pointer"
                  onClick={() => trackPhoneClick("doorstep_section")}
                />
                <div>
                  <h3 className="font-semibold text-[#111827]">Transparent Pricing</h3>
                  <p className="text-sm text-[#6B7280]">
                    Get a clear quote before we start any repair work.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#FF4A17] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#111827]">Coverage in Hyderabad</h3>
                  <p className="text-sm text-[#6B7280]">
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