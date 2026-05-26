import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, ChevronRight, MessageSquare, Facebook, Instagram } from 'lucide-react';
import { ActiveTab } from '../types';

interface CallToActionProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function CallToAction({ setActiveTab }: CallToActionProps) {
  const handleContactRedirect = () => {
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-[#E5C77F] py-20 px-4 sm:px-6 lg:px-8 text-[#121824] relative overflow-hidden" id="cta-section">
      {/* Decorative architectural background details */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#121824]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        
        {/* Subtle heading badge */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] sm:text-xs font-black tracking-[0.2em] px-4 py-1.5 rounded-full border border-[#121824]/20 bg-white/10 uppercase mb-4 inline-block font-mono"
        >
          READY TO START?
        </motion.span>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#121824] mb-4">
          Get Your Free Quote Today
        </h2>

        {/* Supporting wording */}
        <p className="max-w-xl mx-auto text-xs sm:text-sm md:text-base text-[#121824]/80 font-semibold leading-relaxed mb-10">
          Serving Toronto and surrounding areas. Call us or send a message — we respond fast.
        </p>

        {/* Flex list of contact highlights (matching Screenshot 6) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs sm:text-sm font-bold text-[#121824] mb-8 w-full max-w-2xl">
          <a
            href="tel:+14378490047"
            className="flex items-center gap-2 px-4 py-2.5 bg-white/20 hover:bg-white/40 border border-[#121824]/10 rounded-full transition-colors w-full md:w-auto justify-center cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            +1 437 849 0047
          </a>
          <a
            href="mailto:turmsrenovation@gmail.com"
            className="flex items-center gap-2 px-4 py-2.5 bg-white/20 hover:bg-white/40 border border-[#121824]/10 rounded-full transition-colors w-full md:w-auto justify-center cursor-pointer min-w-0"
          >
            <Mail className="w-4 h-4 shrink-0" />
            <span className="truncate">turmsrenovation@gmail.com</span>
          </a>
          <div className="flex items-center gap-2 px-4 py-2.5 bg-white/20 border border-[#121824]/10 rounded-full w-full md:w-auto justify-center">
            <MapPin className="w-4 h-4" />
            Toronto & Surrounding Areas
          </div>
        </div>

        {/* Pill-shaped social media credentials */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs font-bold text-[#121824]">
          <a
            href="https://wa.me/14378490047"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 border border-[#121824]/10 rounded-full hover:bg-[#121824] hover:text-white transition-colors cursor-pointer group"
          >
            <MessageSquare className="w-3.5 h-3.5 text-green-600 fill-green-600/10 group-hover:text-white transition-colors" />
            <span>WhatsApp</span>
          </a>
          <a
            href="https://www.instagram.com/turms_construction"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 border border-[#121824]/10 rounded-full hover:bg-[#121824] hover:text-white transition-colors cursor-pointer group"
          >
            <Instagram className="w-3.5 h-3.5 text-pink-600 group-hover:text-white transition-colors" />
            <span>Instagram</span>
          </a>
          <a
            href="https://www.facebook.com/TurmsRenovation/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 border border-[#121824]/10 rounded-full hover:bg-[#121824] hover:text-white transition-colors cursor-pointer group"
          >
            <Facebook className="w-3.5 h-3.5 text-blue-600 group-hover:text-white transition-colors" />
            <span>Facebook</span>
          </a>
        </div>

        {/* Main Solid dark Call-to-action redirect bar */}
        <button
          onClick={handleContactRedirect}
          className="px-8 py-4 bg-[#121824] hover:bg-[#1b2333] active:scale-[0.98] text-white font-extrabold tracking-wider uppercase text-xs sm:text-sm rounded-lg shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex items-center gap-1.5"
        >
          Contact Us
          <ChevronRight className="w-4 h-4 text-[#E5C77F]" />
        </button>

      </div>
    </section>
  );
}
