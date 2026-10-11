import { Wrench, Cpu, Power, Monitor, Settings, Shield, Zap, Home, ChevronRight } from "lucide-react";

const services = [
  {
    id: "screen-replacement",
    title: "Screen Replacement",
    description: "Professional panel replacement with quality parts",
    icon: Monitor,
    featured: true,
  },
  {
    id: "installation",
    title: "TV Installation",
    description: "Wall mount or stand setup with cable management",
    icon: Home,
    featured: true,
  },
  {
    id: "motherboard",
    title: "Motherboard Repair",
    description: "Component-level repair of main circuit board",
    icon: Cpu,
  },
  {
    id: "power-supply",
    title: "Power Supply Repair",
    description: "Fix power board issues and voltage regulation",
    icon: Power,
  },
  {
    id: "backlight",
    title: "Backlight Repair",
    description: "LED strip replacement and backlight fixes",
    icon: Zap,
  },
  {
    id: "smart-tv",
    title: "Smart TV Troubleshooting",
    description: "WiFi, apps, and software issue resolution",
    icon: Settings,
  },
  {
    id: "general-repair",
    title: "General Repair",
    description: "Comprehensive diagnosis and repair service",
    icon: Wrench,
  },
  {
    id: "warranty",
    title: "Warranty Service",
    description: "Out-of-warranty TV repair and servicing",
    icon: Shield,
  },
];

export const ServiceGrid = () => {
  return (
    <section className="py-16 bg-[#F9FAFB]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">
            Our TV Repair Services
          </h2>
          <p className="text-lg text-[#374151] max-w-2xl mx-auto">
            Component-level repairs with genuine parts and 90-day warranty on all work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`group flex flex-col p-6 bg-white border rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${
                  service.featured
                    ? "border-[#FF4A17] shadow-md"
                    : "border-[#E5E7EB]"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors group-hover:scale-110 ${
                      service.featured
                        ? "bg-[#FF4A17] text-white"
                        : "bg-[#F3F4F6] text-[#1A0F3C]"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  {service.featured && (
                    <span className="text-xs font-semibold text-[#FF4A17] bg-[#FFF7ED] px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-[#111827] text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="/services"
                  className="mt-4 inline-flex items-center text-sm font-medium text-[#FF4A17] hover:text-[#F97316] transition-colors"
                >
                  Get Quote
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};