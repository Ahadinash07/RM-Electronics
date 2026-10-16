"use client";
import { useEffect } from "react";
import { CheckCircle, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { trackConversion, trackPageView } from "@/lib/gtm";
import { SiteLayout } from "@/components/SiteLayout";
import { SiteLink } from "@/components/SiteLink";
import { SITE } from "@/lib/site";

export default function ThankYouPage() {
  useEffect(() => {
    // Track page view
    trackPageView("/thank-you", "Thank You - RM Electronics");

    // Track conversion for ads
    trackConversion(500); // Estimated value in INR

    // Google Ads conversion tracking (uncomment after getting actual IDs)
    // Get IDs from: Google Ads → Tools & Settings → Conversions
    /*
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "generate_lead",
        conversion_id: "AW-XXXXXXXXXX", // Replace with actual Google Ads conversion ID
        conversion_label: "XXXXXXXXXXX", // Replace with actual conversion label
        value: 500,
        currency: "INR",
      });
    }
    */
  }, []);
  return (
    <SiteLayout>
      <main className="min-h-screen bg-surface-soft">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#1A0F3C] to-[#2D1B69] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-24 h-24 rounded-full bg-[#34D399]/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-[#34D399]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Thank You!
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              We've received your enquiry and will get back to you shortly.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-[#111827] mb-6">
              What Happens Next?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#8B7CFF] text-white flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-[#111827] mb-1">
                    Our Team Will Contact You
                  </h3>
                  <p className="text-[#6B7280]">
                    We'll reach out to you via your preferred contact method (Call or WhatsApp) within 24 hours.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#8B7CFF] text-white flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-[#111827] mb-1">
                    Get a Free Diagnosis
                  </h3>
                  <p className="text-[#6B7280]">
                    Our technicians will diagnose your TV issue and provide a transparent quote.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#8B7CFF] text-white flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-[#111827] mb-1">
                    Repair at Your Doorstep
                  </h3>
                  <p className="text-[#6B7280]">
                    Once approved, we'll schedule a convenient time for our technician to repair your TV at your home.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-[#E5E7EB]">
              <h3 className="text-xl font-bold text-[#111827] mb-4 text-center">
                Need Immediate Assistance?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <SiteLink
                  href="/call"
                  className="flex items-center justify-center gap-2 bg-brand-primary text-white font-semibold px-6 py-4 rounded-lg hover:bg-brand-primary/90 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </SiteLink>
                <SiteLink
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-brand-whatsapp text-white font-semibold px-6 py-4 rounded-lg hover:opacity-90 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </SiteLink>
              </div>
            </div>
          </div>
        </div>

        {/* Service Highlight */}
        <div className="bg-[#F9FAFB] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#111827] mb-4">
                Why Choose RM Electronics?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#8B7CFF]/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="h-8 w-8 text-[#6d5ae6]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#111827] mb-2">Same Day Service</h3>
                <p className="text-[#6B7280]">Quick response and repair within 24 hours</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#8B7CFF]/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="h-8 w-8 text-[#6d5ae6]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#111827] mb-2">90-Day Warranty</h3>
                <p className="text-[#6B7280]">All repairs come with warranty coverage</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#8B7CFF]/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="h-8 w-8 text-[#6d5ae6]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#111827] mb-2">Doorstep Service</h3>
                <p className="text-[#6B7280]">We come to you, no need to transport your TV</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home CTA */}
        <div className="bg-[#8B7CFF] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Explore Our Services
            </h2>
            <p className="text-white/90 mb-6 text-lg">
              Learn more about our comprehensive TV repair services
            </p>
            <SiteLink
              href="/"
              className="inline-flex items-center gap-2 bg-white text-brand-primary font-semibold px-8 py-4 rounded-lg hover:bg-surface-soft transition-colors"
            >
              Back to Home
              <ArrowRight className="h-5 w-5" />
            </SiteLink>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
