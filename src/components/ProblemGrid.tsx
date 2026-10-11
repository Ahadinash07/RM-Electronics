import { ChevronRight, AlertTriangle, Volume2, Power, Zap, Wifi, Cpu, Monitor, RefreshCw, Thermometer, Radio, Settings } from "lucide-react";

const problems = [
  { id: "no-display", title: "No Display", description: "Screen is black or dark with no image", icon: Monitor, gradient: "from-brand-blue to-brand-purple" },
  { id: "no-sound", title: "No Sound", description: "Audio is missing or extremely faint", icon: Volume2, gradient: "from-brand-purple to-brand-gold" },
  { id: "not-turning-on", title: "TV Not Turning On", description: "Power button has no response", icon: Power, gradient: "from-brand-gold to-brand-orange" },
  { id: "black-screen", title: "Black Screen", description: "Image appears completely black", icon: Monitor, gradient: "from-brand-blue to-brand-gold" },
  { id: "flickering", title: "Screen Flickering", description: "Display blinks or flashes rapidly", icon: Zap, gradient: "from-brand-purple to-brand-blue" },
  { id: "lines", title: "Lines on Screen", description: "Vertical or horizontal lines visible", icon: AlertTriangle, gradient: "from-brand-gold to-brand-purple" },
  { id: "wifi", title: "WiFi Not Connecting", description: "Cannot connect to internet", icon: Wifi, gradient: "from-brand-blue to-brand-purple" },
  { id: "apps", title: "Apps Not Working", description: "Smart TV apps crash or fail", icon: Settings, gradient: "from-brand-purple to-brand-gold" },
  { id: "remote", title: "Remote Not Working", description: "Remote control is unresponsive", icon: Radio, gradient: "from-brand-gold to-brand-orange" },
  { id: "no-signal", title: "No Signal", description: "Cannot receive cable/satellite signal", icon: Monitor, gradient: "from-brand-blue to-brand-gold" },
  { id: "restarts", title: "TV Keeps Restarting", description: "TV turns on and off repeatedly", icon: RefreshCw, gradient: "from-brand-purple to-brand-blue" },
  { id: "overheating", title: "TV Overheating", description: "TV becomes hot and shuts down", icon: Thermometer, gradient: "from-brand-gold to-brand-purple" },
];

export const ProblemGrid = () => {
  return (
    <section className="py-12 md:py-16 bg-[radial-gradient(circle_at_top_left,_rgba(139,124,255,0.15),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(11,6,24,0.12),_transparent_35%),linear-gradient(135deg,#f5f0ff_0%,#efe8ff_42%,#f9f6ff_100%)] relative overflow-hidden" id="problems">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/12 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent/12 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Common TV Problems We Fix
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Select your TV issue below to see how we can help. All repairs come with 90-day warranty.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <a
                key={problem.id}
                href="#quote"
                className="group flex flex-col p-6 bg-white/80 border border-[#e7ddff] rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-primary flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-bold text-text-primary text-sm sm:text-base mb-2">
                  {problem.title}
                </h3>
                <p className="text-xs text-text-muted line-clamp-2">
                  {problem.description}
                </p>
                <ChevronRight className="h-4 w-4 text-brand-primary mt-4 group-hover:translate-x-1 transition-transform" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};