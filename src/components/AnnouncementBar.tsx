"use client";

import { Mail, Instagram } from "lucide-react";
import { trackPhoneClick } from "@/lib/gtm";
import { SITE } from "@/lib/site";
import { SiteLink } from "@/components/SiteLink";

export const AnnouncementBar = () => {
  return (
    <div className="bg-brand-secondary px-4 py-3 text-sm flex items-center justify-between sm:px-6">
      <div className="flex items-center gap-4">
        <span className="text-gray-300">Service in Nagole, Hyderabad</span>
        <div className="hidden sm:flex items-center gap-3 border-l border-white/20 pl-4">
          <SiteLink
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-300 hover:text-brand-accent transition-colors"
          >
            <Instagram className="h-4 w-4" />
          </SiteLink>
          <SiteLink
            href={SITE.emailMailto}
            aria-label="Email"
            className="text-gray-300 hover:text-brand-accent transition-colors hidden md:inline-flex items-center gap-1.5"
          >
            <Mail className="h-4 w-4" />
            <span>{SITE.email}</span>
          </SiteLink>
        </div>
      </div>
      <SiteLink
        href="/call"
        onClick={() => trackPhoneClick("announcement_bar")}
        className="text-white font-medium hover:text-brand-accent transition-colors"
      >
        {SITE.phoneDisplay}
      </SiteLink>
    </div>
  );
};
