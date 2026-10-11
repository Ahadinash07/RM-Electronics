const areas = [
  "LBNAGAR", "CHINATALKUNTA", "VP", "Banjara Hills", "Hitech City", "Gachibowli", "Madhapur", "Kondapur",
  "Jubilee Hills", "Kukatpally", "Miyapur", "HITEC City", "Whitefield",
  "Manikonda", "Narsingi", "Tellapur", "Gopanpally"
];

export const AreasSection = () => {
  return (
    <section className="py-16 bg-[#F9FAFB]" id="areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">
            Service Areas in Hyderabad
          </h2>
          <p className="text-lg text-[#374151] max-w-2xl mx-auto">
            We provide doorstep TV repair services across Hyderabad. Check if we service your area.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {areas.map((area, index) => (
            <a
              key={index}
              href="#quote"
              className="px-4 py-2 bg-white border border-[#E5E7EB] rounded-lg text-sm font-medium text-[#374151] hover:border-[#FF4A17] hover:text-[#FF4A17] hover:shadow-sm transition-all duration-200"
            >
              {area}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};