import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ActiveTab } from '../types';

interface HeroProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Hero({ setActiveTab }: HeroProps) {
  return (
    <div className="relative min-h-[calc(100vh-80px)] sm:min-h-[85vh] flex items-center justify-center overflow-hidden bg-gray-950 text-white">
      {/* Immersive Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
          alt="Modern exterior stucco residence in Toronto"
          className="w-full h-full object-cover object-center transform scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Dark radial and linear gradients for maximum readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121824] via-[#121824]/80 to-black/50" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Floating Graphic Mesh / Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E5C77F]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 pb-16 sm:py-24">
        {/* Toronto & Surrounding areas gold badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E5C77F]/40 bg-[#121824]/80 backdrop-blur-sm shadow-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#E5C77F] animate-pulse" />
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.16em] uppercase text-[#E5C77F]">
            Toronto & Surrounding Areas
          </span>
        </motion.div>

        {/* Primary Title with elegant custom sizing */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#FBF9F1] leading-[1.12]"
        >
          Toronto's Exterior <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-[#E5C77F]">
            Specialists
          </span>
        </motion.h1>

        {/* Middle Golden dot subline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-sm sm:text-lg md:text-xl font-bold tracking-wider text-[#E5C77F] mt-6 font-sans"
        >
          Stucco <span className="opacity-60 mx-1.5">•</span> Vinyl Siding <span className="opacity-60 mx-1.5">•</span> Parging <span className="opacity-60 mx-1.5">•</span> Moulding
        </motion.p>

        {/* Human-scale explanatory context */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-xl mx-auto text-xs sm:text-sm md:text-base text-gray-300 font-medium leading-relaxed mt-4 drop-shadow-sm"
        >
          Professional exterior renovation services for homes and businesses across Toronto and surrounding areas.
        </motion.p>

        {/* Mobile-first stackable buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <button
            onClick={() => {
              setActiveTab('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#E5C77F] hover:bg-[#d4b360] text-[#121824] font-extrabold tracking-wider uppercase text-xs sm:text-sm rounded-lg shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            Get a Free Quote
            <ChevronRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => {
              setActiveTab('gallery');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#121824]/80 hover:bg-white/10 text-white font-bold tracking-wide text-xs sm:text-sm rounded-lg border border-gray-700 backdrop-blur-sm transition-all duration-200 cursor-pointer"
          >
            View Our Work
          </button>
        </motion.div>
      </div>

      {/* Modern Wave Divider at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#121824] to-transparent pointer-events-none" />
    </div>
  );
}
