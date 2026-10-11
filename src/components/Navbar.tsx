"use client";
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/gtm";
import { NAV_LINKS, SITE } from "@/lib/site";
import { SiteLink } from "@/components/SiteLink";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-border-light shadow-lg"
          : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-20 items-center justify-between">
          <SiteLink href="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt={`${SITE.name} logo`}
              className="h-12 w-12 rounded-xl object-cover shadow-md"
              width={48}
              height={48}
            />
            <div className="hidden sm:block">
              <div className="text-text-primary font-bold text-lg leading-tight">{SITE.name}</div>
              <div className="text-xs text-text-muted">{SITE.tagline}</div>
            </div>
          </SiteLink>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <SiteLink
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-brand-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary group-hover:w-full transition-all duration-300" />
              </SiteLink>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <SiteLink
              href="/call"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-text-secondary hover:text-brand-primary transition-colors"
              onClick={() => trackPhoneClick("navbar_desktop")}
            >
              <Phone className="h-4 w-4" />
              <span>{SITE.phoneDisplay}</span>
            </SiteLink>
            <SiteLink
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 bg-brand-primary text-white text-sm font-medium rounded-xl hover:bg-brand-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => trackWhatsAppClick("navbar_desktop")}
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </SiteLink>
          </div>

          <button
            className="lg:hidden p-2 rounded-xl text-text-secondary hover:bg-surface-soft transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`lg:hidden absolute top-[100%] left-0 right-0 bg-white border-t border-border-light shadow-2xl overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 px-4 py-6">
            {NAV_LINKS.map((link) => (
              <SiteLink
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-base font-medium text-text-secondary hover:text-brand-primary hover:bg-surface-soft rounded-xl transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </SiteLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
