import React from 'react';
import { motion } from 'motion/react';
import { Service, ActiveTab } from '../types';

interface WhatWeDoProps {
  setActiveTab: (tab: ActiveTab) => void;
  setSelectedCategory?: (category: string) => void;
}

export default function WhatWeDo({ setActiveTab, setSelectedCategory }: WhatWeDoProps) {
  const services: Service[] = [
    {
      id: 'stucco',
      title: 'Stucco',
      description: 'Professional stucco application and repair for a durable, beautiful finish that stands the test of time.',
      image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80',
      emoji: '🏠',
      details: ['Acrylic Stucco System', 'EIFS (Exterior Insulation Board)', 'Stucco Painting & Repair', 'Traditional 3-Coat Stucco System'],
    },
    {
      id: 'siding',
      title: 'Vinyl Siding',
      description: 'Expert vinyl siding installation and replacement — modern, low-maintenance, and built to last.',
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
      emoji: '🏗️',
      details: ['Horizontal Vinyl Siding', 'Vertical Board & Batten Siding', 'Soffit & Fascia Installation', 'Insulated Vinyl Siding upgrade'],
    },
    {
      id: 'parging',
      title: 'Parging',
      description: 'Foundation parging that protects and beautifies your home’s base with a smooth, professional coating.',
      image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80',
      emoji: '🧱',
      details: ['Foundation Crack Repair', 'Parging Restoration', 'Textured Mineral Coat', 'Multi-layer Protective Parging'],
    },
    {
      id: 'moulding',
      title: 'Moulding',
      description: 'Decorative exterior moulding and architectural trim that adds elegance and character to any property.',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
      emoji: '✨',
      details: ['Cornices & Crown Mouldings', 'Window & Door Surrounds', 'Bandboards & Keystones', 'EP Decorative Foam Shapes'],
    },
  ];

  const handleCardClick = (serviceId: string) => {
    if (setSelectedCategory) {
      // Map service ID to gallery categories
      const categoryMap: { [key: string]: string } = {
        stucco: 'stucco',
        siding: 'siding', // Matches internal query names
        parging: 'parging',
        moulding: 'moulding',
      };
      setSelectedCategory(categoryMap[serviceId] || 'all');
    }
    setActiveTab('gallery');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-[#121824] text-white py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-900" id="services-section">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#E5C77F] uppercase block mb-3 font-mono">
            WHAT WE DO
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#FBF9F1] mb-5">
            Expert Exterior Services
          </h2>
          <div className="h-0.5 w-16 bg-[#E5C77F] mx-auto mb-5 rounded-full" />
          <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed">
            From stucco application to decorative moulding — we handle every aspect of your exterior renovation with precision and care.
          </p>
        </div>

        {/* Responsive Grid View (Desktop 4 cols, tablet 2 cols, mobile 1 col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 select-none">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => handleCardClick(service.id)}
              className="bg-[#1a2130] rounded-xl overflow-hidden shadow-xl border border-gray-800 hover:border-[#E5C77F]/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              id={`service-card-${service.id}`}
            >
              {/* Card Image Cover */}
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={`${service.title} specialized service in Toronto`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Gold Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1a2130] to-transparent" />
                </div>

                {/* Card Context */}
                <div className="p-6">
                  {/* Floating Icon with emoji */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <span className="text-2xl p-2 bg-[#121824] rounded-lg border border-gray-800 group-hover:bg-[#E5C77F]/10 group-hover:border-[#E5C77F]/40 transition-colors">
                      {service.emoji}
                    </span>
                    <h3 className="text-xl font-bold text-[#FBF9F1] group-hover:text-[#E5C77F] transition-colors font-sans">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-xs sm:text-sm font-medium leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="px-6 pb-6 pt-2">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.details.slice(0, 2).map((detail, idx) => (
                    <span key={idx} className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-[#121824]/80 text-[#E5C77F] rounded border border-gray-800">
                      {detail}
                    </span>
                  ))}
                </div>
                <div className="text-xs font-bold text-[#E5C77F] group-hover:underline flex items-center gap-1.5 pt-2 border-t border-gray-800">
                  Explore Projects & Details &rarr;
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
