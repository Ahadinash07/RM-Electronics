"use client";
import { useEffect } from "react";
import { trackPhoneClick, trackCallConversion } from "@/lib/gtm";

export default function CallPage() {
  useEffect(() => {
    // Track the phone click
    trackPhoneClick("call_page");

    // Track call conversion for ads
    trackCallConversion("call_page");

    // Google Ads call conversion (uncomment after getting actual IDs)
    // Get IDs from: Google Ads → Tools & Settings → Conversions
    /*
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-XXXXXXXXXX/XXXXXXXXXXX", // Replace with actual conversion ID/label
      });
    }
    */

    // Trigger the phone call
    window.location.href = "tel:+917893457190";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <div className="w-16 h-16 rounded-full bg-[#FF4A17]/20 flex items-center justify-center mx-auto mb-4">
          <svg
            className="h-8 w-8 text-[#FF4A17]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-[#111827] mb-2">
          Calling RM Electronics...
        </h1>
        <p className="text-[#374151]">
          Your phone dialer should open shortly.
        </p>
        <p className="text-[#374151] mt-2">
          +91 7893457190
        </p>
      </div>
    </div>
  );
}
