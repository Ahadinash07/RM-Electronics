"use client";
import { Clock, MapPin, MessageCircle, Phone, Instagram, Mail, ArrowUp } from "lucide-react";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/gtm";
import { NAV_LINKS, SITE } from "@/lib/site";
import { SiteLink } from "@/components/SiteLink";

const serviceLinks = [
  "Screen Replacement",
  "Motherboard Repair",
  "Power Supply Repair",
  "Backlight Repair",
  "Smart TV Troubleshooting",
];

export const SiteFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-secondary pt-12 pb-24 md:pt-14 md:pb-8 relative overflow-hidden z-10">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <SiteLink href="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt={`${SITE.name} logo`}
                className="w-12 h-12 rounded-xl object-cover shadow-lg"
                width={48}
                height={48}
              />
              <div>
                <div className="text-white font-bold text-lg">{SITE.name}</div>
                <div className="text-xs text-gray-400">{SITE.tagline}</div>
              </div>
            </SiteLink>
            <p className="text-sm text-gray-300 leading-relaxed">
              Premium TV repair service in Hyderabad. Component-level repairs with genuine parts and 90-day warranty on all work.
            </p>
            <SiteLink
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 inline-flex items-center justify-center text-gray-300 hover:text-white hover:border-brand-accent transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </SiteLink>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <SiteLink
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary group-hover:bg-brand-accent transition-colors" />
                    {link.label}
                  </SiteLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <SiteLink
                    href="/services"
                    className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary group-hover:bg-brand-accent transition-colors" />
                    {label}
                  </SiteLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-brand-accent" />
                </div>
                <div>
                  <SiteLink
                    href="/call"
                    className="text-sm text-white font-medium hover:text-brand-accent transition-colors"
                    onClick={() => trackPhoneClick("footer_contact")}
                  >
                    {SITE.phoneDisplay}
                  </SiteLink>
                  <p className="text-xs text-gray-300 mt-1">Call for instant support</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-brand-accent" />
                </div>
                <div>
                  <SiteLink
                    href={SITE.emailMailto}
                    className="text-sm text-white font-medium hover:text-brand-accent transition-colors break-all"
                  >
                    {SITE.email}
                  </SiteLink>
                  <p className="text-xs text-gray-300 mt-1">Email us anytime</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-5 w-5 text-brand-accent" />
                </div>
                <div>
                  <SiteLink
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white font-medium hover:text-brand-whatsapp transition-colors"
                    onClick={() => trackWhatsAppClick("footer_contact")}
                  >
                    WhatsApp
                  </SiteLink>
                  <p className="text-xs text-gray-300 mt-1">Quick response</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-brand-accent" />
                </div>
                <div>
                  <p className="text-sm text-white font-medium">Nagole, Hyderabad</p>
                  <p className="text-xs text-gray-300 mt-1">{SITE.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-brand-accent" />
                </div>
                <div>
                  <p className="text-sm text-white font-medium">Business Hours</p>
                  <p className="text-xs text-gray-300 mt-1">{SITE.hours}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} {SITE.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <SiteLink href="/privacy-policy" className="text-sm text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </SiteLink>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
