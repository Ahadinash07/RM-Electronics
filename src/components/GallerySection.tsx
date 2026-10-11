import React from 'react';

const images = [
  '/RM-Images/Balaji TV Repair Workshop Interior.png',
  '/RM-Images/Balaji TV Repair Workshop.png',
  '/RM-Images/Balaji TV Services Storefront.png',
  '/RM-Images/Disassembled TV Electronics Repair Bench.png',
  '/RM-Images/Flat-Screen TV Repair Workshop.png',
  '/RM-Images/Focused Electronics Repair Technician.png',
  '/RM-Images/Hands-On TV Circuit Board Repair.png',
  '/RM-Images/Mint Workshop Circuit Shelf.png'
];

export const GallerySection = () => {
  return (
    <section className="pt-4 md:pt-6 pb-12 md:pb-16 bg-surface-soft relative overflow-hidden" id="gallery">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">Our Work in Action</h2>
          <p className="text-lg text-text-secondary">See our technicians performing live TV repairs across Hyderabad.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div key={index} className="aspect-square relative overflow-hidden rounded-2xl border border-border-light group">
              <img
                src={src}
                alt={`TV Repair Work ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
