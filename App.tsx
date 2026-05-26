import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import OurWork from './components/OurWork';
import WhyTurms from './components/WhyTurms';
import About from './components/About';
import Contact from './components/Contact';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import { ActiveTab } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  return (
    <div className="min-h-screen bg-[#121824] text-white flex flex-col justify-between" id="app-root">
      
      {/* Dynamic Global Header (Corporate Navbar & Mobile Drawer Overlay) */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Tab Dispatcher view */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <div className="animate-fade-in">
            {/* Primary Hero section */}
            <Hero setActiveTab={setActiveTab} />
            
            {/* What we do: Services Showcase grid */}
            <WhatWeDo 
              setActiveTab={setActiveTab} 
              setSelectedCategory={setSelectedCategory} 
            />
            
            {/* Our Work: Selected showcases */}
            <OurWork 
              setActiveTab={setActiveTab} 
              isGalleryPage={false} 
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            
            {/* Why choose TURMS difference section */}
            <WhyTurms />
            
            {/* Interactive call to action golden banner */}
            <CallToAction setActiveTab={setActiveTab} />
          </div>
        )}

        {activeTab === 'about' && (
          <div className="animate-fade-in">
            {/* About us component: story, values, custom counters */}
            <About setActiveTab={setActiveTab} />
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="animate-fade-in">
            {/* Our Work: Full portfolio filters page */}
            <OurWork 
              setActiveTab={setActiveTab} 
              isGalleryPage={true} 
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            
            {/* CTA ribbon under gallery */}
            <CallToAction setActiveTab={setActiveTab} />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="animate-fade-in">
            {/* Contact details, free quote dispatcher request, interactive mock coverage map */}
            <Contact />
          </div>
        )}
      </main>

      {/* Reusable rich footer (branding, newsletter subscribe, and dynamic linkages) */}
      <Footer setActiveTab={setActiveTab} />

    </div>
  );
}
