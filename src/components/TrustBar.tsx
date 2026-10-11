import { CheckCircle2, MapPin, Wrench, ShieldCheck, Clock, Award } from "lucide-react";

export const TrustBar = () => {
  const trustItems = [
    {
      icon: MapPin,
      title: "Doorstep Service",
      description: "Repair at your home in Hyderabad",
      color: "bg-brand-primary",
    },
    {
      icon: CheckCircle2,
      title: "Transparent Quote",
      description: "Clear pricing before repair starts",
      color: "bg-brand-accent",
    },
    {
      icon: Wrench,
      title: "Experienced Technicians",
      description: "10+ years of TV repair knowledge",
      color: "bg-brand-primary",
    },
    {
      icon: ShieldCheck,
      title: "90-Day Warranty",
      description: "On all repairs and parts",
      color: "bg-brand-accent",
    },
  ];

  return (
    <section className="py-10 md:py-12 bg-[linear-gradient(135deg,#f8f4ff_0%,#f3ebff_38%,#eee7ff_100%)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center group">
                <div
                  className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-text-primary text-base sm:text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted">
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