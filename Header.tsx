import React, { useState } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';
import { ActiveTab } from '../types';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'gallery', label: 'Our Work' },
    { id: 'contact', label: 'Contact' },
  ] as const;

  const handleLinkClick = (tabId: ActiveTab) => {
    setActiveTab(tabId);
    setIsDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Golden Top Announcement Strip */}
      <div className="bg-[#E5C77F] text-[#121824] py-1 text-center text-xs font-semibold tracking-wide flex justify-center items-center gap-4 px-4 z-50 relative">
        <span className="flex items-center gap-1.5">
          <Phone className="w-3.5 h-3.5" />
          <a href="tel:+14378490047" className="hover:underline">+1 437 849 0047</a>
        </span>
        <span className="hidden sm:inline">|</span>
        <span className="hidden sm:inline">Serving Toronto & Surrounding Areas (GTA)</span>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#121824]/95 backdrop-blur-md border-b border-gray-800 text-white transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Brand with custom SVG */}
          <button 
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-1 focus:outline-none group"
            id="nav-logo-btn"
          >
            <Logo className="w-11 h-11 group-hover:scale-105 transition-transform" showText={false} />
            <div className="flex flex-col text-left">
              <span className="font-serif text-[19px] tracking-wide font-black text-[#FBF9F1] leading-tight">
                TURMS
              </span>
              <span className="text-[9px] uppercase tracking-[0.24em] text-[#E5C77F] font-bold">
                CONSTRUCTION
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 relative py-2 ${
                  activeTab === link.id ? 'text-[#E5C77F]' : 'text-gray-300 hover:text-white'
                }`}
                id={`nav-${link.id}`}
              >
                {link.label}
                {activeTab === link.id && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E5C77F]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop Call to Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/14378490047"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md border border-gray-700 bg-gray-800 text-white hover:bg-gray-700 transition-all duration-200"
            >
              <MessageSquare className="w-3.5 h-3.5 text-green-500 fill-green-500" />
              WhatsApp
            </a>
            <button
              onClick={() => handleLinkClick('contact')}
              className="px-5 py-2.5 bg-[#E5C77F] hover:bg-[#d4b360] text-[#121824] text-xs font-bold tracking-wider uppercase rounded-md shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="md:hidden p-2 rounded-md hover:bg-gray-800 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Open navigation menu"
            id="mobile-drawer-toggle"
          >
            <Menu className="w-6 h-6" />
          </button>

        </div>
      </header>

      {/* Frame / Slide Drawer Navigation (for mobile devices) */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
              id="drawer-backdrop"
            />

            {/* Slide-out Panel (Right to Left) */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 w-[280px] sm:w-[320px] bg-[#121824] text-white z-50 shadow-2xl flex flex-col justify-between"
              id="drawer-container"
            >
              {/* Header inside Panel */}
              <div>
                <div className="flex items-center justify-between p-5 border-b border-gray-800">
                  <span className="font-serif font-black tracking-widest text-[#FBF9F1] text-lg">Menu</span>
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="p-1 rounded-md hover:bg-gray-800 text-gray-400 hover:text-white"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* List Links */}
                <div className="flex flex-col p-6 gap-5">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      className={`text-left text-lg font-semibold tracking-wide py-1.5 border-b border-gray-800/40 pb-2 transition-all duration-150 ${
                        activeTab === link.id ? 'text-[#E5C77F] translate-x-1' : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Banner / Buttons inside Panel Bottom */}
              <div className="p-6 border-t border-gray-800 flex flex-col gap-4 bg-[#0e131d]">
                <a
                  href="https://wa.me/14378490047"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white font-bold hover:bg-gray-700 transition-all text-sm shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-green-500 fill-green-500" />
                  WhatsApp
                </a>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="w-full py-3 bg-[#E5C77F] hover:bg-[#d4b360] text-[#121824] font-bold tracking-wider uppercase rounded-lg shadow-md transition-all text-sm text-center"
                >
                  Get a Free Quote
                </button>
                <p className="text-[10px] text-gray-500 text-center mt-2 font-mono">
                  +1 (437) 849-0047
                </p>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
