import { CheckCircle2, MapPin, Wrench, ShieldCheck } from "lucide-react";

export const TrustBar = () => {
  const trustItems = [
    {
      icon: MapPin,
      title: "Doorstep Service",
      description: "Repair at your home in Hyderabad",
      accent: "#FF4A17",
    },
    {
      icon: CheckCircle2,
      title: "Transparent Quote",
      description: "Clear pricing before repair starts",
      accent: "#3B82F6",
    },
    {
      icon: Wrench,
      title: "Experienced Technicians",
      description: "10+ years of TV repair knowledge",
      accent: "#1A0F3C",
    },
    {
      icon: ShieldCheck,
      title: "90-Day Warranty",
      description: "On all repairs and parts",
      accent: "#34D399",
    },
  ];

  return (
    <section className="py-10 bg-white border-y border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center group">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-105"
                  style={{ backgroundColor: `${item.accent}15` }}
                >
                  <Icon className="h-7 w-7" style={{ color: item.accent }} />
                </div>
                <h3 className="font-semibold text-[#111827] text-sm sm:text-base">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};