import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { AnnouncementBar } from "@/components/AnnouncementBar";
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
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#1A0F3C] to-[#2D1B69] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Our TV Repair Services
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Component-level repairs with genuine parts and 90-day warranty on all work.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className={`group flex flex-col p-8 bg-white border rounded-xl transition-all duration-200 hover:shadow-lg ${
                    service.featured
                      ? "border-[#FF4A17] shadow-md"
                      : "border-[#E5E7EB]"
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        service.featured
                          ? "bg-[#FF4A17] text-white"
                          : "bg-[#F3F4F6] text-[#1A0F3C]"
                      }`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#111827] text-xl mb-2">
                        {service.title}
                      </h3>
                      {service.featured && (
                        <span className="text-xs font-semibold text-[#FF4A17] bg-[#FFF7ED] px-2 py-1 rounded-full inline-block mb-2">
                          Featured Service
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <p className="text-sm text-[#374151] leading-relaxed mb-6">
                    {service.details}
                  </p>
                  <div className="mt-auto">
                    <a
                      href="/"
                      className="inline-flex items-center text-sm font-medium text-[#FF4A17] hover:text-[#F97316] transition-colors"
                    >
                      Book This Service
                      <CheckCircle className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#FF4A17] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need TV Repair? Call Now!
            </h2>
            <p className="text-white/90 mb-6 text-lg">
              Get TV repair at your doorstep in Hyderabad
            </p>
            <a
              href="/call"
              className="inline-flex items-center gap-2 bg-white text-[#FF4A17] font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
