import { Zap, Cpu, Power, Monitor } from "lucide-react";

const technicalServices = [
  {
    icon: Zap,
    title: "Backlight Repair",
    description: "LED strip replacement, inverter repair, and backlight circuit diagnostics.",
    gradient: "from-brand-primary to-brand-primary",
  },
  {
    icon: Cpu,
    title: "Motherboard Repair",
    description: "Component-level repair of T-CON boards, main boards, and signal processing circuits.",
    gradient: "from-brand-primary to-brand-accent",
  },
  {
    icon: Power,
    title: "Power Supply",
    description: "Power board repair, voltage regulation, and standby circuit fixes.",
    gradient: "from-brand-accent to-brand-orange",
  },
  {
    icon: Monitor,
    title: "Screen/Panel",
    description: "Panel replacement, screen driver repair, and display calibration.",
    gradient: "from-brand-primary to-brand-accent",
  },
];

export const TechnicalRepairGrid = () => {
  return (
    <section className="pt-4 md:pt-6 pb-12 md:pb-16 bg-surface-soft relative overflow-hidden" id="technical">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Component-Level Technical Knowledge
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Deep technical repair capabilities for critical TV components.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicalServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group flex flex-col p-6 bg-white border border-border-light rounded-2xl hover:shadow-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-7 w-7 text-text-primary" />
                </div>
                <h3 className="font-bold text-text-primary text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};