"use client";
import { useState } from "react";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/gtm";

const navLinks = [
  { href: "/#problems", label: "TV Problems" },
  { href: "/#services", label: "Services" },
  { href: "/#brands", label: "Brands" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#areas", label: "Areas" },
  { href: "/#faq", label: "FAQ" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/";
              }}
            >
              <img src="/Logo.png" alt="RM Electronics" className="h-8 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#374151] hover:text-[#1A0F3C] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 ml-4 border-l border-[#E5E7EB] pl-4">
              <a
                href="/call"
                className="flex items-center gap-1.5 text-sm font-medium text-[#1A0F3C] hover:text-[#FF4A17] transition-colors"
                onClick={() => trackPhoneClick("navbar_desktop")}
              >
                <Phone className="h-4 w-4" />
                <span>Call</span>
              </a>
              <a
                href="https://wa.me/917893457190"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 bg-[#25D366] text-white text-sm font-medium rounded-lg hover:bg-[#1db954] transition-colors"
                onClick={() => trackWhatsAppClick("navbar_desktop")}
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-[#374151] hover:bg-[#F3F4F6] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden absolute top-[100%] left-0 w-full bg-white shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 border-b border-[#E5E7EB]" : "max-h-0 opacity-0"
            }`}
        >
          <div className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2 py-3 text-base font-medium text-[#374151] hover:text-[#1A0F3C] hover:bg-[#F9FAFB] rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}

          </div>
        </div>
      </nav>
    </header>
  );
};