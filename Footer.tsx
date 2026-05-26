import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Facebook, Instagram } from 'lucide-react';
import Logo from './Logo';
import { ActiveTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSuccess(true);
    setEmail('');
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const currentYear = new Date().getFullYear();

  const handleNavClick = (tabId: ActiveTab) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0e131d] text-white pt-20 pb-8 px-4 sm:px-6 lg:px-8 border-t border-gray-900 select-none" id="footer-section">
      <div className="max-w-7xl mx-auto">
        
        {/* Core Quick Grid layout (4 sections) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-gray-900">
          
          {/* Logo Brand / Summary Column */}
          <div className="flex flex-col gap-5">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-1.5 focus:outline-none text-left self-start group"
            >
              <Logo className="w-11 h-11 group-hover:scale-105 transition-transform" />
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-wide font-black text-[#FBF9F1] leading-tight">
                  TURMS
                </span>
                <span className="text-[9px] uppercase tracking-[0.24em] text-[#E5C77F] font-bold">
                  CONSTRUCTION
                </span>
              </div>
            </button>
            <p className="text-gray-400 text-xs sm:text-sm font-normal leading-relaxed mt-2">
              Professional exterior renovation specialists serving Toronto and surrounding areas. Stucco, vinyl siding, parging, and moulding.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://wa.me/14378490047"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-gray-800 bg-[#121824] rounded-lg text-[#25D366] hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all cursor-pointer flex items-center justify-center group"
                title="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.023-5.092-2.884-6.957C16.588 1.964 14.13 1.037 11.5 1.036c-5.438 0-9.863 4.414-9.866 9.831-.001 2.046.541 4.043 1.568 5.802l-.954 3.485 3.575-.938zm13.124-5.213c-.312-.156-1.85-.912-2.131-1.013-.282-.101-.487-.152-.69.153-.204.305-.788 1.013-.967 1.216-.178.203-.357.228-.669.072-1.082-.542-1.847-.985-2.583-2.246-.192-.329.193-.305.551-1.02.06-.12.03-.225-.015-.315-.045-.09-.487-1.173-.668-1.605-.176-.423-.351-.365-.487-.372l-.416-.007c-.128 0-.338.048-.515.242-.178.193-.678.663-.678 1.615 0 .952.693 1.87 1.79 2.022.112.015 2.126 3.248 5.15 4.553.719.31 1.28.495 1.719.635.722.228 1.38.195 1.9.117.58-.087 1.85-.756 2.11-1.45.26-.694.26-1.288.18-1.413-.08-.125-.28-.2-.59-.356z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/TurmsRenovation/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-gray-800 bg-[#121824] rounded-lg text-[#1877F2] hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all cursor-pointer flex items-center justify-center group"
                title="Facebook"
              >
                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/turms_construction"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-gray-800 bg-[#121824] rounded-lg text-[#E4405F] hover:text-white hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#D12F7A] hover:to-[#8134AF] hover:border-transparent transition-all cursor-pointer flex items-center justify-center group"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Subscribe/Newsletter updates block */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-xs sm:text-sm font-bold tracking-widest text-white uppercase">
              Stay Updated
            </h4>
            <p className="text-gray-400 text-xs sm:text-sm font-medium leading-relaxed">
              Get updates on our latest projects and promotions.
            </p>
            
            <form onSubmit={handleSubscribe} className="relative flex items-center gap-2 mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#121824] border border-gray-800 focus:border-[#E5C77F] text-white text-xs py-3 px-4 rounded-lg outline-none transition-colors"
              />
              <button
                type="submit"
                aria-label="Submit subscribe form"
                className="p-3 bg-[#E5C77F] hover:bg-[#d4b360] text-[#121824] rounded-lg cursor-pointer transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {isSuccess && (
              <span className="text-green-400 text-[10px] font-bold block mt-1 animate-fade-in">
                Thank you! You are now subscribed to our list.
              </span>
            )}
            <span className="text-[10px] text-gray-500 font-medium">
              We respect your privacy. No spam ever.
            </span>
          </div>

          {/* Services Links Grid column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-xs sm:text-sm font-bold tracking-widest text-white uppercase">
              Services
            </h4>
            <div className="flex flex-col gap-2.5">
              {['Stucco', 'Vinyl Siding', 'Parging', 'Moulding'].map((srv) => (
                <button
                  key={srv}
                  onClick={() => {
                    handleNavClick('gallery');
                  }}
                  className="text-gray-400 hover:text-[#E5C77F] text-xs sm:text-sm text-left transition-colors font-medium cursor-pointer"
                >
                  {srv}
                </button>
              ))}
            </div>
          </div>

          {/* Company links and support column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans text-xs sm:text-sm font-bold tracking-widest text-white uppercase">
              Company
            </h4>
            <div className="flex flex-col gap-2.5">
              {['About Us', 'Our Work', 'Contact Us'].map((comp, idx) => {
                const tabsList: ActiveTab[] = ['about', 'gallery', 'contact'];
                return (
                  <button
                    key={comp}
                    onClick={() => handleNavClick(tabsList[idx])}
                    className="text-gray-400 hover:text-[#E5C77F] text-xs sm:text-sm text-left transition-colors font-medium cursor-pointer"
                  >
                    {comp}
                  </button>
                );
              })}
              <button
                onClick={() => handleNavClick('contact')}
                className="text-[#E5C77F] hover:underline text-xs sm:text-sm text-left transition-colors font-bold cursor-pointer"
              >
                Get a Free Quote
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-gray-500 text-xs text-center sm:text-left flex flex-wrap justify-center sm:justify-start gap-4">
            <span>&copy; {currentYear} TURMS LTD. All rights reserved.</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              +1 437 849 0047
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1">
              <Mail className="w-3 h-3" />
              turmsrenovation@gmail.com
            </span>
          </div>

          {/* Back to top dynamic button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-4 py-2 bg-gray-800/80 hover:bg-[#E5C77F] hover:text-[#121824] text-white border border-gray-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer flex items-center gap-1.5"
            id="back-to-top-footer"
          >
            <span>&uarr;</span> Top
          </button>
        </div>

      </div>
    </footer>
  );
}
