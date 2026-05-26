import React from 'react';
import { motion } from 'motion/react';
import { Target, Heart, Users, ShieldCheck } from 'lucide-react';
import { ActiveTab } from '../types';

interface AboutProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function About({ setActiveTab }: AboutProps) {
  const values = [
    {
      id: 'val-1',
      title: 'Our Mission',
      description: 'To protect and beautify Toronto homes and businesses with expert exterior renovation services, delivered with integrity, precision, and pride in every project.',
      icon: Target,
    },
    {
      id: 'val-2',
      title: 'Our Values',
      description: 'Quality workmanship, honest pricing, and customer satisfaction are at the core of everything we do. We treat every property as if it were our own.',
      icon: Heart,
    },
    {
      id: 'val-3',
      title: 'Our Team',
      description: 'Our skilled tradespeople bring years of hands-on experience to every job site. We’re a tight-knit team that takes pride in delivering results that exceed expectations.',
      icon: Users,
    },
    {
      id: 'val-4',
      title: 'Quality First',
      description: 'We use only premium materials and proven techniques to ensure every exterior renovation stands the test of Toronto’s climate.',
      icon: ShieldCheck,
    },
  ];

  const stats = [
    { id: 'stat-1', count: '200+', label: 'Happy Clients' },
    { id: 'stat-2', count: '500+', label: 'Projects Completed' },
    { id: 'stat-3', count: '5+', label: 'Years Experience' },
    { id: 'stat-4', count: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section className="bg-gray-50 text-gray-900 py-16 px-4 sm:px-6 lg:px-8" id="about-section">
      <div className="max-w-4xl mx-auto">
        
        {/* Title Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
            About TURMS LTD
          </h2>
          <div className="h-0.5 w-16 bg-[#E5C77F] mx-auto mb-4" />
          <p className="text-gray-600 text-xs sm:text-sm md:text-base font-medium leading-relaxed max-w-xl mx-auto">
            Toronto’s trusted exterior renovation specialists — built on quality, experience, and results.
          </p>
        </div>

        {/* Narrative Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm mb-12"
          id="our-story-card"
        >
          <h3 className="font-sans text-lg sm:text-xl font-bold text-gray-900 mb-4">
            Our Story
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm font-normal leading-relaxed mb-4">
            TURMS LTD was founded with a single mission: to deliver exceptional exterior renovation work across Toronto and the surrounding areas. From our first stucco project to hundreds of completed renovations, we’ve built our reputation one wall at a time.
          </p>
          <p className="text-gray-600 text-xs sm:text-sm font-normal leading-relaxed">
            Today, we specialize in stucco, vinyl siding, parging, and decorative moulding — bringing professional craftsmanship and premium materials to every project, big or small.
          </p>
        </motion.div>

        {/* Value Cards Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col items-center text-center"
              >
                <div className="mb-4 p-3 rounded-full bg-[#E5C77F]/10 text-[#d4b360] border border-[#E5C77F]/15">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-sans text-sm sm:text-base font-extrabold text-[#121824] mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Numerical Stats Panel */}
        <div className="bg-[#1a2130]/5 rounded-xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-inner mb-16">
          {stats.map((stat, idx) => (
            <div key={stat.id} className="flex flex-col items-center">
              <motion.span
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl font-serif font-black text-[#d4b360]"
              >
                {stat.count}
              </motion.span>
              <span className="text-[11px] text-[#121824] uppercase tracking-wider font-bold mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action banner */}
        <div className="text-center bg-[#121824] text-white p-8 rounded-xl relative overflow-hidden shadow-lg flex flex-col items-center justify-center">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5C77F]/10 rounded-full blur-2xl" />
          <h3 className="font-sans text-lg sm:text-xl font-bold mb-2">
            Ready to Transform Your Exterior?
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm max-w-sm mb-6 leading-relaxed">
            Get a free, no-obligation quote for your stucco, vinyl siding, parging, or moulding project.
          </p>
          <button
            onClick={() => {
              setActiveTab('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-[#E5C77F] hover:bg-[#d4b360] text-[#121824] text-xs font-extrabold tracking-wider uppercase rounded-md transition-all cursor-pointer"
          >
            Get a Free Quote &rarr;
          </button>
        </div>

      </div>
    </section>
  );
}
