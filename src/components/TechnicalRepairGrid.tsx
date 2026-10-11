import { Zap, Cpu, Power, Monitor } from "lucide-react";

const technicalServices = [
  {
    icon: Zap,
    title: "Backlight Repair",
    description: "LED strip replacement, inverter repair, and backlight circuit diagnostics.",
  },
  {
    icon: Cpu,
    title: "Motherboard Repair",
    description: "Component-level repair of T-CON boards, main boards, and signal processing circuits.",
  },
  {
    icon: Power,
    title: "Power Supply",
    description: "Power board repair, voltage regulation, and standby circuit fixes.",
  },
  {
    icon: Monitor,
    title: "Screen/Panel",
    description: "Panel replacement, screen driver repair, and display calibration.",
  },
];

export const TechnicalRepairGrid = () => {
  return (
    <section className="py-16 bg-[#F9FAFB]" id="technical">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">
            Component-Level Technical Knowledge
          </h2>
          <p className="text-lg text-[#374151] max-w-2xl mx-auto">
            Deep technical repair capabilities for critical TV components.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicalServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group flex flex-col p-6 bg-white border border-[#E5E7EB] rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-xl bg-[#1A0F3C] text-white flex items-center justify-center mb-4 group-hover:bg-[#FF4A17] transition-colors">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-semibold text-[#111827] text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
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