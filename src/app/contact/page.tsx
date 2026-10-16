import { LeadForm } from "@/components/LeadForm";
import { SiteLayout } from "@/components/SiteLayout";
import { SiteLink } from "@/components/SiteLink";
import { SITE } from "@/lib/site";
import { Clock, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    value: SITE.phoneDisplay,
    href: "/call",
    note: "Speak to our team directly",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: SITE.phoneDisplay,
    href: SITE.whatsapp,
    note: "Quick response on WhatsApp",
    external: true,
  },
  {
    icon: Mail,
    title: "Email",
    value: SITE.email,
    href: SITE.emailMailto,
    note: "Send us your TV issue details",
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@rm_electronics.hyd",
    href: SITE.instagram,
    note: "Follow and message us",
    external: true,
  },
];

const mapsSrc = `https://maps.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&z=16&output=embed`;

export default function ContactPage() {
  return (
    <SiteLayout>
      <main className="min-h-screen bg-surface-soft">
        <section className="bg-gradient-to-br from-brand-secondary via-brand-navy to-primary-800 py-16 text-white sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
              Contact {SITE.name}
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              Book a TV repair or ask about your issue
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/80">
              We are open {SITE.hours}. Visit us in Nagole or call for doorstep service across Hyderabad.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <SiteLink
                href="/call"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-6 py-3 text-sm font-semibold text-white hover:bg-brand-primary/90"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </SiteLink>
              <SiteLink
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-whatsapp px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </SiteLink>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              {contactCards.map(({ icon: Icon, title, value, href, note, external }) => (
                <SiteLink
                  key={title}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 rounded-2xl border border-border-light bg-white p-5 shadow-sm transition hover:border-brand-primary/40 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">{title}</p>
                    <p className="mt-1 break-all text-lg font-bold text-text-primary">{value}</p>
                    <p className="mt-1 text-sm text-text-secondary">{note}</p>
                  </div>
                </SiteLink>
              ))}

              <div className="flex items-start gap-4 rounded-2xl border border-border-light bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Business Hours</p>
                  <p className="mt-1 text-lg font-bold text-text-primary">{SITE.hours}</p>
                  <p className="mt-1 text-sm text-text-secondary">Open all week for TV repair support</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-border-light bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Workshop Address</p>
                  <p className="mt-1 text-lg font-bold text-text-primary">{SITE.areaPrimary}</p>
                  <p className="mt-1 text-sm text-text-secondary">{SITE.address}</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border-light bg-white p-6 shadow-lg sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-primary">Quick enquiry</p>
              <h2 className="mt-3 text-3xl font-bold text-text-primary">Request a repair callback</h2>
              <p className="mt-2 mb-6 text-text-secondary">
                Share your details and we will get back to you during business hours.
              </p>
              <LeadForm />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-border-light bg-white shadow-sm">
            <iframe
              title="RM Electronics location in Nagole, Hyderabad"
              src={mapsSrc}
              className="h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
