import { AnnouncementBar } from "@/components/AnnouncementBar";
import { LeadForm } from "@/components/LeadForm";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteLink } from "@/components/SiteLink";
import { SITE } from "@/lib/site";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    value: SITE.phoneDisplay,
    href: SITE.phoneTel,
    note: "Speak to our team directly",
  },
  {
    icon: Mail,
    title: "Email",
    value: SITE.email,
    href: SITE.emailMailto,
    note: "Send us your TV issue details",
  },
  {
    icon: MessageCircle,
    title: "Instagram",
    value: "@rm_electronics.hyd",
    href: SITE.instagram,
    note: "Follow and message us",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Nagole, Hyderabad",
    href: "https://maps.google.com/?q=" + encodeURIComponent(SITE.address),
    note: SITE.address,
  },
];

export default function ContactPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="min-h-screen bg-[#f7f5ff] text-slate-900">
        <section className="bg-gradient-to-br from-[#07041A] via-[#120a2a] to-[#2a1a61] py-16 text-white sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d5ccff]">Contact RM Electronics</p>
              <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Book a service call or ask about your TV issue.</h1>
              <p className="mt-5 text-lg text-slate-200">
                We are available every day from 10AM to 9PM to assist with TV repair, installation, and troubleshooting in Hyderabad.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="space-y-4 pb-0">
              {contactCards.map(({ icon: Icon, title, value, href, note }) => (
                <SiteLink
                  key={title}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-4 py-3 text-left transition hover:opacity-90"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f0ebff] text-[#6d5ae6] shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">{title}</p>
                    <p className="mt-1 text-lg font-bold text-[#120a2a]">{value}</p>
                    <p className="mt-1 text-sm text-slate-600">{note}</p>
                  </div>
                </SiteLink>
              ))}

              <div className="flex items-start gap-4 py-3 text-slate-700">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f0ebff] text-[#6d5ae6] shadow-sm">
                  <Clock3 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Business Hours</p>
                  <p className="mt-1 text-lg font-bold text-[#120a2a]">{SITE.hours}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-[#e7ddff] bg-white p-5 shadow-lg sm:p-6 lg:p-8">
              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6d5ae6]">Quick enquiry</p>
                <h2 className="mt-3 text-3xl font-black text-[#120a2a]">Request a repair callback</h2>
              </div>
              <div className="mb-0">
                <LeadForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
