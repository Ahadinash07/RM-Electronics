"use client";
import { Clock, MapPin, MessageCircle, Phone, Facebook, Instagram } from "lucide-react";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/gtm";

export const SiteFooter = () => {
  return (
    <footer className="bg-[#1A0F3C] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
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
            <p className="text-sm text-[#9CA3AF] mb-4">
              Independent TV repair service in Hyderabad. Component-level repairs with 90-day warranty.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#problems" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                  TV Problems
                </a>
              </li>
              <li>
                <a href="/#services" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#brands" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                  Brands
                </a>
              </li>
              <li>
                <a href="/#gallery" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/#areas" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                  Service Areas
                </a>
              </li>
              <li>
                <a href="/#faq" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                  Screen Replacement
                </a>
              </li>
              <li>
                <a href="/services" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                  Motherboard Repair
                </a>
              </li>
              <li>
                <a href="/services" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                  Power Supply Repair
                </a>
              </li>
              <li>
                <a href="/services" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                  Backlight Repair
                </a>
              </li>
              <li>
                <a href="/services" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                  Smart TV Troubleshooting
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact & Social */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact & Follow Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#FF4A17]" />
                <a href="/call" className="text-sm text-[#9CA3AF] hover:text-white transition-colors" onClick={() => trackPhoneClick("footer_contact")}>
                  +91 7893457190
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                <a href="https://wa.me/917893457190" target="_blank" rel="noopener noreferrer" className="text-sm text-[#9CA3AF] hover:text-white transition-colors" onClick={() => trackWhatsAppClick("footer_contact")}>
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-[#E1306C]" />
                <a href="https://www.instagram.com/rm_electronics.hyd" target="_blank" rel="noopener noreferrer" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="h-4 w-4 text-[#1877F2]" />
                <a href="https://www.facebook.com/share/1GVayfLymZ/" target="_blank" rel="noopener noreferrer" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#FF4A17]" />
                <span className="text-sm text-[#9CA3AF]">
                  Hyderabad, Telangana, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#FF4A17]" />
                <span className="text-sm text-[#9CA3AF]">
                  Mon-Sun: 9AM - 9PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#374151] pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#9CA3AF]">
              © 2026 RM Electronics. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy-policy" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};