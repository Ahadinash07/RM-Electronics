import { SiteLayout } from "@/components/SiteLayout";
import { SiteLink } from "@/components/SiteLink";
import { SITE } from "@/lib/site";
import { Wrench, Cpu, Power, Monitor, Settings, Shield, Zap, Home, Phone, CheckCircle } from "lucide-react";

const services = [
  {
    id: "screen-replacement",
    title: "Screen Replacement",
    description: "Professional panel replacement with quality parts",
    icon: Monitor,
    featured: true,
    details: "We replace cracked or damaged TV screens with high-quality panels. Our technicians ensure proper calibration and alignment for optimal picture quality.",
  },
  {
    id: "installation",
    title: "TV Installation",
    description: "Wall mount or stand setup with cable management",
    icon: Home,
    featured: true,
    details: "Professional TV installation services including wall mounting, stand setup, cable management, and optimal positioning for the best viewing experience.",
  },
  {
    id: "motherboard",
    title: "Motherboard Repair",
    description: "Component-level repair of main circuit board",
    icon: Cpu,
    details: "Motherboard repair at component level. We diagnose and fix faulty capacitors, ICs, and other components to restore your TV's functionality.",
  },
  {
    id: "power-supply",
    title: "Power Supply Repair",
    description: "Fix power board issues and voltage regulation",
    icon: Power,
    details: "Comprehensive power supply repair services. We fix voltage regulation issues, replace faulty components, and ensure stable power delivery to your TV.",
  },
  {
    id: "backlight",
    title: "Backlight Repair",
    description: "LED strip replacement and backlight fixes",
    icon: Zap,
    details: "Professional backlight repair including LED strip replacement and fixing dim or dark screen issues. We ensure uniform brightness across your display.",
  },
  {
    id: "smart-tv",
    title: "Smart TV Troubleshooting",
    description: "WiFi, apps, and software issue resolution",
    icon: Settings,
    details: "Complete Smart TV troubleshooting for WiFi connectivity, app issues, software updates, and smart features. Get your smart TV working perfectly again.",
  },
  {
    id: "general-repair",
    title: "General Repair",
    description: "Comprehensive diagnosis and repair service",
    icon: Wrench,
    details: "Full-service TV repair with comprehensive diagnosis. We identify and fix all types of TV issues with technicians and quality parts.",
  },
  {
    id: "warranty",
    title: "Warranty Service",
    description: "Out-of-warranty TV repair and servicing",
    icon: Shield,
    details: "Repair services for out-of-warranty TVs. We provide quality repairs with a 90-day warranty on all work, regardless of your TV's warranty status.",
  },
];

export default function ServicesPage() {
  return (
    <SiteLayout>
      <main className="min-h-screen bg-surface-soft">
        <div className="bg-gradient-to-br from-brand-secondary via-brand-navy to-primary-800 py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">Our TV Repair Services</h1>
            <p className="mx-auto max-w-2xl text-xl text-white/80">
              Component-level repairs with genuine parts and 90-day warranty on all work.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className={`group flex flex-col rounded-2xl border bg-white p-8 transition-all duration-200 hover:shadow-lg ${
                    service.featured ? "border-brand-primary shadow-md shadow-brand-primary/10" : "border-border-light"
                  }`}
                >
                  <div className="mb-4 flex items-start gap-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${
                        service.featured ? "bg-brand-primary text-white" : "bg-surface-muted text-brand-secondary"
                      }`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-bold text-text-primary">{service.title}</h3>
                      {service.featured && (
                        <span className="mb-2 inline-block rounded-full bg-brand-primary/10 px-2 py-1 text-xs font-semibold text-brand-primary">
                          Featured Service
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-text-muted">{service.description}</p>
                  <p className="mb-6 text-sm leading-relaxed text-text-secondary">{service.details}</p>
                  <div className="mt-auto">
                    <SiteLink
                      href="/contact"
                      className="inline-flex items-center text-sm font-medium text-brand-primary hover:text-primary-700"
                    >
                      Book This Service
                      <CheckCircle className="ml-1 h-4 w-4" />
                    </SiteLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-brand-primary py-12">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-bold text-white">Need TV Repair? Call Now!</h2>
            <p className="mb-6 text-lg text-white/90">
              Doorstep service from {SITE.areaPrimary}. {SITE.hours}
            </p>
            <SiteLink
              href="/call"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-brand-primary hover:bg-surface-soft"
            >
              <Phone className="h-5 w-5" />
              Call {SITE.phoneDisplay}
            </SiteLink>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
