import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { Project, ActiveTab } from '../types';

interface OurWorkProps {
  setActiveTab: (tab: ActiveTab) => void;
  isGalleryPage?: boolean;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function OurWork({
  setActiveTab,
  isGalleryPage = false,
  selectedCategory,
  setSelectedCategory,
}: OurWorkProps) {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // High quality realistic construction images mapping exactly to Toronto exterior aesthetics
  const allProjects: Project[] = [
    {
      id: 'proj-stucco-1',
      title: 'Luxury Custom Estate',
      category: 'stucco',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
      location: 'Lawrence Park, Toronto',
      description: 'Complete EIFS acrylic stucco installation combined with elegant light-beige architectural finishes.',
    },
    {
      id: 'proj-siding-1',
      title: 'Modern Horizontal Siding Refit',
      category: 'siding',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80',
      location: 'The Beaches, Toronto',
      description: 'Premium vinyl siding in slate-grey with white cedar paneling trim highlights.',
    },
    {
      id: 'proj-parging-1',
      title: 'Complete Foundation Parging Protection',
      category: 'parging',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1000&q=80',
      location: 'East York, Toronto',
      description: 'Fiber-mesh reinforced foundation parging sealing cracks and creating a pristine weather-resistant finish.',
    },
    {
      id: 'proj-moulding-1',
      title: 'Classical Entrance Pediment Crown',
      category: 'moulding',
      image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1000&q=80',
      location: 'Bridle Path, Toronto',
      description: 'High density decorative moulding cornices and door surroundings adding supreme curb appeal.',
    },
    {
      id: 'proj-stucco-2',
      title: 'Contemporary Duo-Tone Stucco Villa',
      category: 'stucco',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80',
      location: 'Etobicoke, Toronto',
      description: 'Multi-layer texture stucco rendering with moisture barrier wrapping for maximum Canadian winter defense.',
    },
    {
      id: 'proj-siding-2',
      title: 'Charcoal Vinyl & Soffit Refit',
      category: 'siding',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
      location: 'North York, Toronto',
      description: 'Vertical heavy-duty vinyl planks matching a dark contemporary window framework.',
    },
    {
      id: 'proj-parging-2',
      title: 'Premium Foundation Coating Base',
      category: 'parging',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
      location: 'Scarborough, Toronto',
      description: 'Smooth troweled mineral latex-based parging finish on concrete foundation blocks.',
    },
    {
      id: 'proj-moulding-2',
      title: 'Custom Roofline Arched Mouldings',
      category: 'moulding',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
      location: 'High Park, Toronto',
      description: 'Weather-sealed high-profile window moldings framing beautifully curved heritage dormers.',
    },
  ];

  // Filtering calculations
  const filteredProjects = selectedCategory === 'all'
    ? allProjects
    : allProjects.filter(p => p.category === selectedCategory);

  // Cure list for landing page showcase
  const displayProjects = isGalleryPage ? filteredProjects : allProjects.slice(0, 6);

  const filterTabs = [
    { id: 'all', label: 'All' },
    { id: 'stucco', label: 'Stucco' },
    { id: 'siding', label: 'Vinyl Siding' },
    { id: 'parging', label: 'Parging' },
    { id: 'moulding', label: 'Moulding' },
  ];

  const handleNext = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex + 1) % displayProjects.length);
  };

  const handlePrev = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex - 1 + displayProjects.length) % displayProjects.length);
  };

  // Listen to keyboard arrow keys for active lightbox exploration
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setActiveLightboxIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex]);

  return (
    <section className="bg-[#121824] text-white py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-900" id="portfolio-section">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#E5C77F] uppercase block mb-3 font-mono">
            OUR WORK
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#FBF9F1] mb-5 animate-fade-in">
            {isGalleryPage ? 'Project Gallery' : 'Projects We’re Proud Of'}
          </h2>
          <div className="h-0.5 w-16 bg-[#E5C77F] mx-auto mb-5 rounded-full" />
          <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed">
            {isGalleryPage 
              ? 'Real projects, real results. Browse our completed exterior renovation work across Toronto and the GTA.'
              : 'Every project is a testament to our craftsmanship. See the quality we deliver across Toronto.'}
          </p>
        </div>

        {/* Category Filters Pill Box - visible when on full gallery page, or can toggle directly on landing */}
        {isGalleryPage && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="gallery-pills">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-[#E5C77F] text-[#121824] shadow-md scale-105'
                    : 'bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 hover:text-white border border-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Dynamic Project Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative h-72 sm:h-80 rounded-xl overflow-hidden cursor-pointer shadow-lg border border-gray-800 hover:border-[#E5C77F]/30 bg-[#1a2130]"
                onClick={() => setActiveLightboxIndex(idx)}
                id={`project-tile-${project.id}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Corner details tag */}
                <span className="absolute top-4 left-4 text-[9px] font-bold uppercase tracking-[0.18em] px-2.5 py-1 bg-[#121824]/90 backdrop-blur-sm border border-[#E5C77F]/40 text-[#E5C77F] rounded-md">
                  {project.category}
                </span>

                {/* Floating Maximize icon */}
                <div className="absolute top-4 right-4 p-2 bg-black/60 backdrop-blur-md rounded-md border border-gray-800 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#E5C77F] hover:text-[#121824]">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Text Content at bottom */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 transition-transform group-hover:-translate-y-1">
                  <span className="text-[10px] font-mono text-[#E5C77F] font-bold tracking-widest block mb-1">
                    {project.location}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-black text-[#FBF9F1] group-hover:text-[#E5C77F] transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-12 overflow-hidden">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Non-gallery redirect button (if displayed on home page context) */}
        {!isGalleryPage && (
          <div className="text-center mt-12">
            <button
              onClick={() => {
                setSelectedCategory('all');
                setActiveTab('gallery');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 bg-transparent border-2 border-dashed border-[#E5C77F] hover:border-[#E5C77F] hover:bg-[#E5C77F]/10 text-[#E5C77F] font-bold text-xs uppercase tracking-widest rounded-lg transition-all duration-200 cursor-pointer"
            >
              Explore Full Project Gallery ({allProjects.length} Projects)
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Overlay System (Responsive Modal Pop-up) */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0e131d]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
            id="lightbox-overlay"
          >
            {/* Top Bar of Lightbox */}
            <div className="flex justify-between items-center text-white h-12">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.2em] text-[#E5C77F] font-black">
                  {displayProjects[activeLightboxIndex].category}
                </span>
                <span className="text-[10px] text-gray-400 font-mono">
                  {displayProjects[activeLightboxIndex].location}
                </span>
              </div>
              <button
                onClick={() => setActiveLightboxIndex(null)}
                className="p-2 border border-gray-800 hover:border-white rounded-lg transition-colors cursor-pointer"
                aria-label="Close modal slider"
              >
                <X className="w-5 h-5 text-gray-300 hover:text-white" />
              </button>
            </div>

            {/* Slider Content Wrapper */}
            <div className="flex-1 flex items-center justify-between gap-4 max-w-5xl mx-auto w-full relative">
              
              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                className="hidden sm:flex p-3 border border-gray-800 bg-[#121824]/80 text-white rounded-full hover:bg-[#E5C77F] hover:text-[#121824] transition-all cursor-pointer shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Image in Viewport */}
              <div className="flex-1 h-[55vh] sm:h-[65vh] relative flex items-center justify-center pointer-events-none">
                <motion.img
                  key={activeLightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={displayProjects[activeLightboxIndex].image}
                  alt={displayProjects[activeLightboxIndex].title}
                  className="max-h-full max-w-full object-contain rounded-lg border border-gray-800 shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="hidden sm:flex p-3 border border-gray-800 bg-[#121824]/80 text-white rounded-full hover:bg-[#E5C77F] hover:text-[#121824] transition-all cursor-pointer shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Information Details (Footer part of slider) */}
            <div className="text-center text-white pb-6 max-w-2xl mx-auto">
              <h4 className="font-serif text-lg sm:text-2xl font-black text-[#FBF9F1] mb-1">
                {displayProjects[activeLightboxIndex].title}
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
                {displayProjects[activeLightboxIndex].description}
              </p>
              
              {/* Carousel Index count and mobile touch controls */}
              <div className="mt-4 flex items-center justify-center gap-6">
                <button
                  onClick={handlePrev}
                  className="sm:hidden p-2 border border-gray-800 rounded-full hover:bg-white/10"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono tracking-widest text-[#E5C77F] font-bold">
                  {activeLightboxIndex + 1} / {displayProjects.length}
                </span>
                <button
                  onClick={handleNext}
                  className="sm:hidden p-2 border border-gray-800 rounded-full hover:bg-white/10"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
