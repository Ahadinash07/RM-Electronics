const brands = [
  "Samsung", "LG", "Sony", "Panasonic", "Xiaomi", "Vu", "Mitashi", "Onida",
  "TCL", "Hisense", "Sharp", "Philips", "Vizio", "Skyworth", "Micromax"
];

export const BrandGrid = () => {
  return (
    <section className="pt-4 md:pt-6 pb-12 md:pb-16 bg-surface-soft relative overflow-hidden" id="brands">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            We Service All Major TV Brands
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Component-level repair knowledge across all major TV brands.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-6 bg-white border border-border-light rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-sm sm:text-base font-medium text-text-secondary group-hover:text-text-primary transition-colors text-center">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};