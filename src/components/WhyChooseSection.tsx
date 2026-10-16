import { CheckCircle2, Clock, Users, Award, Shield, Headphones, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: CheckCircle2,
    title: "10+ Years Experience",
    description: "Over a decade of TV repair expertise across all major brands and models.",
    gradient: "from-brand-primary to-brand-primary",
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    description: "Quick turnaround with same-day diagnosis and repair for most issues.",
    gradient: "from-brand-accent to-brand-orange",
  },
  {
    icon: Users,
    title: "Certified Technicians",
    description: "Trained and certified technicians with deep technical knowledge.",
    gradient: "from-brand-primary to-brand-primary",
  },
  {
    icon: Award,
    title: "Genuine Parts",
    description: "We use quality replacement parts to ensure long-lasting repairs.",
    gradient: "from-brand-primary to-brand-accent",
  },
  {
    icon: Shield,
    title: "90-Day Warranty",
    description: "All repairs come with a 90-day warranty on both parts and labor.",
    gradient: "from-brand-accent to-brand-primary",
  },
  {
    icon: Headphones,
    title: "Friendly Support",
    description: "Responsive customer support available via call or WhatsApp.",
    gradient: "from-brand-primary to-brand-accent",
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="py-12 md:py-16 bg-surface-soft relative overflow-hidden" id="why-choose">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative order-2 lg:order-1 pb-8">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border-light">
              <img
                src="/RM-Images/Focused Electronics Repair Technician.png"
                alt="Technician diagnosing TV issue"
                className="w-full h-auto object-cover"
                width={600}
                height={450}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white  border border-border-light rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-accent to-brand-orange flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-text-primary">500+</div>
                  <div className="text-sm text-text-secondary">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/30 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-brand-primary" />
              <span className="text-sm font-semibold text-brand-primary uppercase tracking-wider">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              Why Choose RM Electronics
            </h2>
            <p className="text-lg text-text-secondary mb-10 max-w-md">
              We combine technical knowledge with customer-focused service to deliver reliable TV repairs in Hyderabad.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-7 w-7 text-text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-text-primary text-base mb-1">
                        {reason.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
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