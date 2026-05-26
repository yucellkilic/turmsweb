import React from 'react';
import { motion } from 'motion/react';
import { Clock, Award, Shield } from 'lucide-react';
import { DifferenceItem } from '../types';

export default function WhyTurms() {
  const differences: DifferenceItem[] = [
    {
      id: 'diff-1',
      title: '10+ Years of Toronto Experience',
      description: 'Over a decade of deep knowledge of Toronto’s climate and building standards. We know what works and what lasts.',
      icon: 'clock',
    },
    {
      id: 'diff-2',
      title: 'Premium Materials & Craftsmanship',
      description: 'We use only top-grade materials and employ skilled tradespeople who take pride in their work.',
      icon: 'award',
    },
    {
      id: 'diff-3',
      title: 'Free Estimate, No Obligation',
      description: 'Get a detailed, transparent quote at no cost. We explain everything before we start.',
      icon: 'shield',
    },
  ];

  // Helper to map string to Lucide React component
  const renderIcon = (iconName: string) => {
    const props = { className: "w-8 h-8 text-[#E5C77F]" };
    switch (iconName) {
      case 'clock':
        return <Clock {...props} />;
      case 'award':
        return <Award {...props} />;
      case 'shield':
        return <Shield {...props} />;
      default:
        return <Award {...props} />;
    }
  };

  return (
    <section className="bg-[#121824] text-white py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-900" id="why-turms-section">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title Header block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#E5C77F] uppercase block mb-3 font-mono">
            WHY TURMS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#FBF9F1] mb-5">
            The TURMS Difference
          </h2>
          <div className="h-0.5 w-16 bg-[#E5C77F] mx-auto mb-5 rounded-full" />
          <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed">
            We don’t just renovate exteriors — we protect your investment and enhance your property’s value.
          </p>
        </div>

        {/* 3 Value Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {differences.map((diff, index) => (
            <motion.div
              key={diff.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[#1a2130] rounded-xl p-8 border border-gray-800 hover:border-[#E5C77F]/30 transition-all duration-300 relative group text-center flex flex-col items-center justify-start h-full"
              id={`diff-card-${diff.id}`}
            >
              {/* Subtle top indicator border highlight */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-transparent group-hover:bg-[#E5C77F] transition-all duration-300 rounded-b-md" />

              {/* Gold Icon circle wrapper */}
              <div className="mb-6 p-4 rounded-full bg-[#121824] border border-gray-800 group-hover:bg-[#E5C77F]/10 group-hover:border-[#E5C77F]/40 transition-all duration-300">
                {renderIcon(diff.icon)}
              </div>

              {/* Heading */}
              <h3 className="font-serif text-lg sm:text-xl font-black text-[#FBF9F1] mb-3 group-hover:text-[#E5C77F] transition-colors">
                {diff.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-300 text-xs sm:text-sm font-medium leading-relaxed">
                {diff.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
