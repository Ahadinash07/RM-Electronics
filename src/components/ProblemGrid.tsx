import { ChevronRight } from "lucide-react";

const problems = [
  { id: "no-display", title: "No Display", description: "Screen is black or dark with no image" },
  { id: "no-sound", title: "No Sound", description: "Audio is missing or extremely faint" },
  { id: "not-turning-on", title: "TV Not Turning On", description: "Power button has no response" },
  { id: "black-screen", title: "Black Screen", description: "Image appears completely black" },
  { id: "flickering", title: "Screen Flickering", description: "Display blinks or flashes rapidly" },
  { id: "lines", title: "Lines on Screen", description: "Vertical or horizontal lines visible" },
  { id: "wifi", title: "WiFi Not Connecting", description: "Cannot connect to internet" },
  { id: "apps", title: "Apps Not Working", description: "Smart TV apps crash or fail" },
  { id: "remote", title: "Remote Not Working", description: "Remote control is unresponsive" },
  { id: "no-signal", title: "No Signal", description: "Cannot receive cable/satellite signal" },
  { id: "restarts", title: "TV Keeps Restarting", description: "TV turns on and off repeatedly" },
  { id: "overheating", title: "TV Overheating", description: "TV becomes hot and shuts down" },
];

export const ProblemGrid = () => {
  return (
    <section className="py-16 bg-white" id="problems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">
            Common TV Problems We Fix
          </h2>
          <p className="text-lg text-[#374151] max-w-2xl mx-auto">
            Select your TV issue below to see how we can help. All repairs come with 90-day warranty.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {problems.map((problem) => (
            <a
              key={problem.id}
              href="#quote"
              className="group flex flex-col p-4 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl hover:border-[#FF4A17] hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="w-10 h-10 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center">
                  <ChevronRight className="h-5 w-5 text-[#FF4A17]" />
                </span>
                <ChevronRight className="h-4 w-4 text-[#9CA3AF] group-hover:text-[#FF4A17] transition-colors" />
              </div>
              <h3 className="font-semibold text-[#111827] text-sm sm:text-base">
                {problem.title}
              </h3>
              <p className="text-xs text-[#6B7280] mt-1 line-clamp-2">
                {problem.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};