"use client";

import { MessageCircle, Phone, Send, CheckCircle2 } from "lucide-react";
import { LeadForm } from "./LeadForm";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/gtm";

export const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(139,124,255,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(11,6,24,0.12),_transparent_32%),linear-gradient(135deg,#f5f0ff_0%,#efe8ff_40%,#eef2ff_100%)] py-16 md:py-20" id="final-cta">
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-brand-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-brand-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
              <Send className="h-4 w-4" />
              Get Started
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-[#120a2a] sm:text-5xl">
              TV Not Working? Let&apos;s Get It Fixed.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Call or WhatsApp us now for immediate assistance. Or fill out the form and we&apos;ll get back to you quickly.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Same-day diagnosis for most TV issues",
                "Expert repair with genuine parts",
                "Doorstep support across Hyderabad",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 text-left text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-primary" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/call"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-brand-primary px-6 py-4 text-base font-semibold text-white shadow-lg shadow-brand-primary/30 transition hover:translate-y-[-1px] hover:bg-[#7566ee]"
                onClick={() => trackPhoneClick("final_cta")}
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
              <a
                href="https://wa.me/917893457190"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#22c55e] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#22c55e]/30 transition hover:translate-y-[-1px] hover:bg-[#18a957]"
                onClick={() => trackWhatsAppClick("final_cta")}
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="rounded-[30px] border border-[#e7ddff] bg-white p-6 shadow-2xl sm:p-8">
            <h3 className="text-2xl font-black text-[#120a2a]">Submit an enquiry</h3>
            <p className="mt-2 text-sm text-slate-600">Fill out the form and we&apos;ll contact you shortly.</p>
            <div className="mt-6">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};