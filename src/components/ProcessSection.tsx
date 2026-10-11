import { CheckCircle, Clock, Home, Shield } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Book Your Service",
    description: "Call or WhatsApp us with your TV issue and preferred time slot.",
    icon: Clock,
  },
  {
    step: "02",
    title: "Technician Visit",
    description: "Our experienced technician arrives at your doorstep in Hyderabad.",
    icon: Home,
  },
  {
    step: "03",
    title: "Diagnosis & Quote",
    description: "We diagnose the issue and provide a transparent repair quote before starting.",
    icon: CheckCircle,
  },
  {
    step: "04",
    title: "Repair & Warranty",
    description: "We repair your TV with quality parts and provide 90-day warranty on all work.",
    icon: Shield,
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-16 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">
            How It Works
          </h2>
          <p className="text-lg text-[#374151] max-w-2xl mx-auto">
            Simple 4-step process from booking to repair completion.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-1 bg-[#E5E7EB]">
            <div className="absolute top-0 left-0 h-full bg-[#FF4A17] w-1/4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 mb-4">
                    <div className="w-16 h-16 rounded-full bg-white border-4 border-[#FF4A17] flex items-center justify-center shadow-lg">
                      <Icon className="h-7 w-7 text-[#FF4A17]" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#FF4A17] text-white text-sm font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#111827] text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] max-w-xs">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};