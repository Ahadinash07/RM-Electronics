import { CheckCircle2, Clock, Users, Award, Shield, Headphones } from "lucide-react";

const reasons = [
  {
    icon: CheckCircle2,
    title: "10+ Years Experience",
    description: "Over a decade of TV repair expertise across all major brands and models.",
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    description: "Quick turnaround with same-day diagnosis and repair for most issues.",
  },
  {
    icon: Users,
    title: "Certified Technicians",
    description: "Trained and certified technicians with deep technical knowledge.",
  },
  {
    icon: Award,
    title: "Genuine Parts",
    description: "We use quality replacement parts to ensure long-lasting repairs.",
  },
  {
    icon: Shield,
    title: "90-Day Warranty",
    description: "All repairs come with a 90-day warranty on both parts and labor.",
  },
  {
    icon: Headphones,
    title: "Friendly Support",
    description: "Responsive customer support available via call or WhatsApp.",
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="py-16 bg-[#1A0F3C] text-white overflow-hidden" id="why-choose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/RM-Images/Focused Electronics Repair Technician.png"
                alt="Technician diagnosing TV issue"
                className="w-full h-auto object-cover"
                width={600}
                height={450}
              />
            </div>
            {/* Orange accent element */}
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#FF4A17] rounded-full opacity-10 blur-3xl" />
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose RM Electronics
            </h2>
            <p className="text-lg text-[#9CA3AF] mb-8 max-w-md">
              We combine technical knowledge with customer-focused service to deliver reliable TV repairs in Hyderabad.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FF4A17]/20 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-[#FF4A17]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-base mb-1">
                        {reason.title}
                      </h3>
                      <p className="text-sm text-[#9CA3AF] leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};