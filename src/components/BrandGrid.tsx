const brands = [
  "Samsung", "LG", "Sony", "Panasonic", "Xiaomi", "Vu", "Mitashi", "Onida",
  "TCL", "Hisense", "Sharp", "Philips", "Vizio", "Skyworth", "Micromax"
];

export const BrandGrid = () => {
  return (
    <section className="py-16 bg-white" id="brands">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">
            We Service All Major TV Brands
          </h2>
          <p className="text-lg text-[#374151] max-w-2xl mx-auto">
            Component-level repair knowledge across all major TV brands.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-4 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <span className="text-sm sm:text-base font-medium text-[#6B7280] group-hover:text-[#1A0F3C] transition-colors text-center">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};