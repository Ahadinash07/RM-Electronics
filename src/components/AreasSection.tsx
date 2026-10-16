import { SiteLink } from "@/components/SiteLink";

const areas = [
  "Nagole",
  "New Nagole",
  "Mohan Nagar",
  "Srinagar Colony",
  "LB Nagar",
  "Kothapet",
  "Dilsukhnagar",
  "Uppal",
  "Habsiguda",
  "Banjara Hills",
  "Hitech City",
  "Gachibowli",
  "Madhapur",
  "Kondapur",
  "Jubilee Hills",
  "Kukatpally",
  "Miyapur",
];

export const AreasSection = () => {
  return (
    <section className="pt-4 md:pt-6 pb-12 md:pb-16 bg-surface-soft" id="areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Service Areas in Hyderabad
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Doorstep TV repair from our Nagole workshop across Hyderabad. Check if we service your area.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {areas.map((area) => (
            <SiteLink
              key={area}
              href="/contact"
              className="px-4 py-2 bg-white border border-border-light rounded-lg text-sm font-medium text-text-secondary hover:border-brand-primary hover:text-brand-primary hover:shadow-sm transition-all duration-200"
            >
              {area}
            </SiteLink>
          ))}
        </div>
      </div>
    </section>
  );
};
