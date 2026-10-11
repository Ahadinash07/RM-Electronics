import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteLink } from "@/components/SiteLink";
import { SITE } from "@/lib/site";
import { CheckCircle2, Clock3, Mail, MapPin, MessageCircle, Phone, ShieldCheck, Sparkles } from "lucide-react";

const values = [
  {
    title: "Doorstep Service",
    text: "Convenient home and office support across Hyderabad with quick on-site diagnosis and repair.",
    icon: Clock3,
  },
  {
    title: "Trusted Repair Work",
    text: "Component-level diagnosis with quality parts and careful testing before every service is completed.",
    icon: ShieldCheck,
  },
  {
    title: "Customer First",
    text: "Clear communication, transparent pricing, and dependable after-service support for every client.",
    icon: Sparkles,
  },
];

const stats = [
  { label: "Service Days", value: "Mon-Sun" },
  { label: "Business Hours", value: "10AM - 9PM" },
  { label: "Primary Area", value: "Nagole, Hyderabad" },
  { label: "Support", value: "Call / WhatsApp" },
];

export default function AboutPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(139,124,255,0.12),_transparent_35%),linear-gradient(135deg,#f9f5ff_0%,#f4eeff_100%)] text-slate-900">
        <section className="bg-gradient-to-br from-[#07041A] via-[#120a2a] to-[#2a1a61] text-white">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
              <div>
                <span className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9d0ff]">
                  About RM Electronics
                </span>
                <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
                  Reliable TV repair support for every home in Hyderabad.
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
                  RM Electronics is a trusted local service brand specializing in TV diagnosis, repairs, installation, and maintenance. We help families and businesses keep their screens working perfectly with honest service and quick response times.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <SiteLink
                    href="/services"
                    className="inline-flex items-center justify-center rounded-xl bg-[#8B7CFF] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#8B7CFF]/30 transition hover:bg-[#7a69ef]"
                  >
                    Explore Services
                  </SiteLink>
                  <SiteLink
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#b8a4ff] hover:bg-white/10"
                  >
                    Contact Us
                  </SiteLink>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
                <div className="rounded-[22px] bg-[#0d091f] p-5">
                  <img
                    src="/logo.png"
                    alt="RM Electronics logo"
                    className="mx-auto h-auto w-full max-w-[420px] rounded-2xl object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[#e8e4ff] bg-white/80 p-6 shadow-sm backdrop-blur-sm">
                <div className="text-2xl font-black text-[#22113d]">{stat.value}</div>
                <div className="mt-2 text-sm font-medium text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6d5ae6]">Why customers choose us</p>
            <h2 className="mt-3 text-3xl font-black text-[#120a2a] sm:text-4xl">Built on trust, speed, and technical skill</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map(({ title, text, icon: Icon }) => (
              <div key={title} className="rounded-3xl border border-[#e7ddff] bg-[linear-gradient(180deg,#ffffff_0%,#f5f0ff_100%)] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f2eeff] text-[#6d5ae6]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-[#120a2a]">{title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[linear-gradient(135deg,#f6f1ff_0%,#f9f7ff_100%)]">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6d5ae6]">Our focus</p>
              <h2 className="mt-3 text-3xl font-black text-[#120a2a]">Repairing modern TVs with expert attention</h2>
              <ul className="mt-8 space-y-5">
                {[
                  "LED, LCD, and Smart TV repair for homes and offices",
                  "Screen, backlight, motherboard, and power board troubleshooting",
                  "Installation, setup, and service recommendations tailored to your needs",
                  "Fast response, professional handling, and practical solutions",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#6d5ae6]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] bg-gradient-to-br from-[#f4f0ff] to-[#efeafe] p-8 shadow-sm ring-1 ring-[#e7ddff]">
              <h3 className="text-2xl font-black text-[#120a2a]">Visit or contact us</h3>
              <div className="mt-6 space-y-5 text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-[#6d5ae6]" />
                  <span>{SITE.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-[#6d5ae6]" />
                  <SiteLink href={SITE.phoneTel} className="font-medium text-[#120a2a] hover:text-[#6d5ae6]">
                    {SITE.phoneDisplay}
                  </SiteLink>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-[#6d5ae6]" />
                  <SiteLink href={SITE.emailMailto} className="break-all font-medium text-[#120a2a] hover:text-[#6d5ae6]">
                    {SITE.email}
                  </SiteLink>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="mt-1 h-5 w-5 text-[#6d5ae6]" />
                  <SiteLink href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="font-medium text-[#120a2a] hover:text-[#6d5ae6]">
                    @rm_electronics.hyd
                  </SiteLink>
                </div>
                <div className="flex items-start gap-3">
                  <Clock3 className="mt-1 h-5 w-5 text-[#6d5ae6]" />
                  <span>{SITE.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
