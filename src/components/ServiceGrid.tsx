import { Wrench, Cpu, Power, Monitor, Settings, Shield, Zap, Home, ArrowRight, Sparkles } from "lucide-react";
import { SiteLink } from "@/components/SiteLink";

const services = [
  {
    id: "screen-replacement",
    title: "Screen Replacement",
    description: "Professional panel replacement with quality parts",
    icon: Monitor,
    featured: true,
    gradient: "from-brand-blue to-brand-purple",
  },
  {
    id: "installation",
    title: "TV Installation",
    description: "Wall mount or stand setup with cable management",
    icon: Home,
    featured: true,
    gradient: "from-brand-gold to-brand-orange",
  },
  {
    id: "motherboard",
    title: "Motherboard Repair",
    description: "Component-level repair of main circuit board",
    icon: Cpu,
    gradient: "from-brand-purple to-brand-blue",
  },
  {
    id: "power-supply",
    title: "Power Supply Repair",
    description: "Fix power board issues and voltage regulation",
    icon: Power,
    gradient: "from-brand-blue to-brand-gold",
  },
  {
    id: "backlight",
    title: "Backlight Repair",
    description: "LED strip replacement and backlight fixes",
    icon: Zap,
    gradient: "from-brand-gold to-brand-purple",
  },
  {
    id: "smart-tv",
    title: "Smart TV Troubleshooting",
    description: "WiFi, apps, and software issue resolution",
    icon: Settings,
    gradient: "from-brand-purple to-brand-gold",
  },
  {
    id: "general-repair",
    title: "General Repair",
    description: "Comprehensive diagnosis and repair service",
    icon: Wrench,
    gradient: "from-brand-blue to-brand-purple",
  },
  {
    id: "warranty",
    title: "Warranty Service",
    description: "Out-of-warranty TV repair and servicing",
    icon: Shield,
    gradient: "from-brand-gold to-brand-blue",
  },
];

export const ServiceGrid = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f5ff] via-white to-[#f4f0ff] pb-12 pt-4 md:pb-16 md:pt-6" id="services">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/20 px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-brand-primary" />
            <span className="text-sm font-semibold text-brand-primary uppercase tracking-wider">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Premium TV Repair Services
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Component-level repairs with genuine parts and 90-day warranty on all work. Expert technicians at your service.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <SiteLink
                key={service.id}
                href="/services"
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border-light bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    {service.featured && (
                      <span className="rounded-full border border-brand-accent/30 bg-brand-accent/10 px-3 py-1 text-xs font-semibold text-brand-accent">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-text-primary transition-colors group-hover:text-brand-primary">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-text-muted">{service.description}</p>
                  <div className="inline-flex items-center text-sm font-medium text-brand-primary transition-colors hover:text-brand-accent group/link">
                    Get Quote
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </div>
                </div>
              </SiteLink>
            );
          })}
        </div>
      </div>
    </section>
  );
};