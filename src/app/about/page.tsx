import { SiteLayout } from "@/components/SiteLayout";
import { SiteLink } from "@/components/SiteLink";
import { SITE } from "@/lib/site";
import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

const values = [
  {
    title: "Doorstep Repair",
    text: "We visit your home in Nagole and across Hyderabad for on-site diagnosis and repair.",
    icon: MapPin,
  },
  {
    title: "Component-Level Work",
    text: "Screen, backlight, motherboard, and power board repairs with quality spare parts.",
    icon: Wrench,
  },
  {
    title: "90-Day Warranty",
    text: "Every completed repair includes warranty on parts and labour for your peace of mind.",
    icon: ShieldCheck,
  },
];

const highlights = [
  "LED, LCD, and Smart TV service for homes and offices",
  "Same-day diagnosis for most common TV problems",
  "Transparent quote before any repair starts",
  "Genuine parts and careful testing after every job",
];

export default function AboutPage() {
  return (
    <SiteLayout>
      <main className="min-h-screen bg-surface-soft">
        <section className="bg-gradient-to-br from-brand-secondary via-brand-navy to-primary-800 text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
                  <Sparkles className="h-4 w-4" />
                  About {SITE.name}
                </span>
                <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                  TV service and repair from Nagole, Hyderabad
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
                  {SITE.name} is a local TV repair team helping homes and businesses with doorstep diagnosis, component-level repairs, and installation. We keep your screen working with honest pricing and same-day support.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <SiteLink
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-primary/30 hover:bg-brand-primary/90"
                  >
                    Contact Us
                  </SiteLink>
                  <SiteLink
                    href="/services"
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:border-brand-accent hover:bg-white/10"
                  >
                    View Services
                  </SiteLink>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl">
                <img
                  src="/logo.png"
                  alt={`${SITE.name} logo`}
                  className="mx-auto w-full max-w-md rounded-2xl object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Business Hours", value: SITE.hoursShort },
              { label: "Primary Area", value: SITE.areaPrimary },
              { label: "Phone", value: SITE.phoneDisplay },
              { label: "Open", value: "Mon-Sun" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-border-light bg-white p-6 shadow-sm">
                <p className="text-sm text-text-muted">{item.label}</p>
                <p className="mt-2 text-lg font-bold text-text-primary">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-primary">Why choose us</p>
            <h2 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl">Local technicians you can call today</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map(({ title, text, icon: Icon }) => (
              <div key={title} className="rounded-3xl border border-border-light bg-white p-8 shadow-sm">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">{title}</h3>
                <p className="mt-3 text-text-secondary leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-primary">Our work</p>
              <h2 className="mt-3 text-3xl font-bold text-text-primary">Expert attention for modern TVs</h2>
              <ul className="mt-8 space-y-4">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text-secondary">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-border-light bg-surface-soft p-8">
              <h3 className="text-2xl font-bold text-text-primary">Visit or reach us</h3>
              <div className="mt-6 space-y-5 text-text-secondary">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-primary" />
                  <span>{SITE.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-brand-primary" />
                  <SiteLink href="/call" className="font-medium text-text-primary hover:text-brand-primary">
                    {SITE.phoneDisplay}
                  </SiteLink>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-brand-primary" />
                  <SiteLink href={SITE.emailMailto} className="break-all font-medium text-text-primary hover:text-brand-primary">
                    {SITE.email}
                  </SiteLink>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-brand-primary" />
                  <SiteLink href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="font-medium text-text-primary hover:text-brand-primary">
                    Instagram @rm_electronics.hyd
                  </SiteLink>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-brand-primary" />
                  <span>{SITE.hours}</span>
                </div>
              </div>
              <SiteLink
                href="/contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-brand-primary px-6 py-3 text-sm font-semibold text-white hover:bg-brand-primary/90"
              >
                Book a Service
              </SiteLink>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
