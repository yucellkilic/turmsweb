import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Camera, CheckCircle2, AlertCircle, Facebook, Instagram, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: '',
  });

  const [photo, setPhoto] = useState<File | null>(null);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorStatus(null);

    if (!formData.name || !formData.email || !formData.details) {
      setErrorStatus('Please fill in all required (*) fields.');
      return;
    }

    // In a staging build, log progress and simulate success cleanly
    setIsSubmitSuccess(true);
    setFormData({ name: '', email: '', phone: '', details: '' });
    setPhoto(null);
  };

  return (
    <section className="bg-gray-50 text-gray-900 py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200" id="contact-section">
      <div className="max-w-4xl mx-auto">
        
        {/* Title Heading Block */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-4 animate-fade-in">
            Get a Free Quote
          </h2>
          <div className="h-0.5 w-16 bg-[#E5C77F] mx-auto mb-4" />
          <p className="text-gray-600 text-xs sm:text-sm md:text-base font-medium leading-relaxed max-w-xl mx-auto">
            Ready to transform your exterior? Fill out the form below and we’ll get back to you with a free, no-obligation estimate.
          </p>
        </div>

        {/* Informative Grid Card Info segment (Email, Phone, Location) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
            <div className="p-3 rounded-lg bg-[#E5C77F]/10 text-[#d4b360]">
              <Mail className="w-5 h-5" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Email</span>
              <a href="mailto:turmsrenovation@gmail.com" className="text-xs sm:text-sm font-semibold truncate hover:underline">
                turmsrenovation@gmail.com
              </a>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
            <div className="p-3 rounded-lg bg-[#E5C77F]/10 text-[#d4b360]">
              <Phone className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Phone</span>
              <a href="tel:+14378490047" className="text-xs sm:text-sm font-semibold hover:underline">
                +1 437 849 0047
              </a>
            </div>
          </div>

          <a
            href="https://maps.app.goo.gl/tYsvGkSCB49aEXoo9"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4 hover:border-[#E5C77F] hover:shadow-md transition-all group cursor-pointer"
          >
            <div className="p-3 rounded-lg bg-[#E5C77F]/10 text-[#d4b360] group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Service Area</span>
              <span className="text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-[#d4b360] transition-colors">
                Toronto & Surrounding Areas
              </span>
            </div>
          </a>
        </div>        {/* Social Media Row for the Contact Page with original icons */}
        <div className="flex flex-wrap shadow-sm bg-white px-6 py-4 rounded-xl border border-gray-200 justify-between items-center gap-4 mb-10">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Connect With Us:</span>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a
              href="https://www.facebook.com/TurmsRenovation/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 hover:text-[#1877F2] transition-colors group"
            >
              <svg className="w-4 h-4 fill-[#1877F2] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/turms_construction"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 hover:text-[#E4405F] transition-colors group"
            >
              <svg className="w-4 h-4 fill-[#E4405F] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              <span>Instagram</span>
            </a>
            <a
              href="https://wa.me/14378490047"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 hover:text-[#25D366] transition-colors group"
            >
              <svg className="w-4 h-4 fill-[#25D366] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.023-5.092-2.884-6.957C16.588 1.964 14.13 1.037 11.5 1.036c-5.438 0-9.863 4.414-9.866 9.831-.001 2.046.541 4.043 1.568 5.802l-.954 3.485 3.575-.938zm13.124-5.213c-.312-.156-1.85-.912-2.131-1.013-.282-.101-.487-.152-.69.153-.204.305-.788 1.013-.967 1.216-.178.203-.357.228-.669.072-1.082-.542-1.847-.985-2.583-2.246-.192-.329.193-.305.551-1.02.06-.12.03-.225-.015-.315-.045-.09-.487-1.173-.668-1.605-.176-.423-.351-.365-.487-.372l-.416-.007c-.128 0-.338.048-.515.242-.178.193-.678.663-.678 1.615 0 .952.693 1.87 1.79 2.022.112.015 2.126 3.248 5.15 4.553.719.31 1.28.495 1.719.635.722.228 1.38.195 1.9.117.58-.087 1.85-.756 2.11-1.45.26-.694.26-1.288.18-1.413-.08-.125-.28-.2-.59-.356z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Contact Form Details */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-200 shadow-sm mb-16">
          {isSubmitSuccess ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-12 text-center flex flex-col items-center justify-center gap-4"
              id="submit-success-prompt"
            >
              <CheckCircle2 className="w-16 h-16 text-green-500 bg-green-50 rounded-full p-2" />
              <h3 className="text-2xl font-black text-gray-900">Quote Request Submitted!</h3>
              <p className="text-gray-600 text-xs sm:text-sm max-w-sm">
                Thank you for contacting TURMS. We have received your request and will review your project requirements. A specialist will call you shortly.
              </p>
              <button
                onClick={() => setIsSubmitSuccess(false)}
                className="mt-4 px-6 py-2.5 bg-[#E5C77F] hover:bg-[#d4b360] text-[#121824] font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                Send Another Request
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6" id="quote-request-form">
              {errorStatus && (
                <div className="p-4 bg-red-55 border-l-4 border-red-550 text-red-700 text-xs sm:text-sm flex items-center gap-2 rounded-r-lg">
                  <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <span>{errorStatus}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name-input" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Full Name <span className="text-red-500 font-bold">*</span>
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full bg-gray-50 border border-gray-200 focus:border-[#E5C77F] focus:bg-white text-xs sm:text-sm p-3.5 rounded-lg outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email-input" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Email Address <span className="text-red-500 font-bold">*</span>
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full bg-gray-50 border border-gray-200 focus:border-[#E5C77F] focus:bg-white text-xs sm:text-sm p-3.5 rounded-lg outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone-input" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Phone Number
                </label>
                <input
                  id="phone-input"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (416) 000-0000"
                  className="w-full bg-gray-50 border border-gray-200 focus:border-[#E5C77F] focus:bg-white text-xs sm:text-sm p-3.5 rounded-lg outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="details-input" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Project Details <span className="text-red-500 font-bold">*</span>
                </label>
                <textarea
                  id="details-input"
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your project — service needed, property type, timeline..."
                  className="w-full bg-gray-50 border border-gray-200 focus:border-[#E5C77F] focus:bg-white text-xs sm:text-sm p-3.5 rounded-lg outline-none transition-all resize-none"
                  required
                />
              </div>

              {/* Photos uploader block option */}
              <div className="pt-2">
                <span className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Add Photos
                </span>
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 hover:border-[#E5C77F]/80 transition-colors flex flex-col items-center justify-center gap-2 cursor-pointer relative bg-gray-50/50">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <Camera className="w-8 h-8 text-gray-400" />
                  <span className="text-xs font-semibold text-gray-700">
                    {photo ? photo.name : 'Upload photos of your walls or siding'}
                  </span>
                  <span className="text-[10px] text-gray-500">
                    Supports JPG, PNG up to 10MB
                  </span>
                </div>
              </div>

              {/* Submit trigger button */}
              <div className="pt-4 flex justify-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-[#E5C77F] hover:bg-[#d4b360] active:scale-[0.98] text-[#121824] font-extrabold tracking-wider uppercase text-xs sm:text-sm rounded-lg shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                  Request Free Quote
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Interactive Google Map Embed detailing complete coverage region */}
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm flex flex-col mb-8">
          <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-gray-50/50">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#d4b360] font-bold uppercase block mb-0.5">
                VISIT OUR HEADQUARTERS
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-black text-gray-900 leading-tight">
                TURMS Construction Stucco Ltd.
              </h4>
            </div>
            <a
              href="https://maps.app.goo.gl/tYsvGkSCB49aEXoo9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#121824] bg-[#E5C77F] hover:bg-[#d4b360] px-4 py-2 rounded-lg transition-colors cursor-pointer self-start sm:self-auto leading-none shadow-sm"
            >
              <span>Open in Google Maps</span>
              <span className="text-sm">&rarr;</span>
            </a>
          </div>
          
          <div className="h-[600px] w-full relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.717978884207!2d-79.55299012207564!3d43.84094524026528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b295d01af8ce1%3A0xc4e1b094bf931bcc!2sTURMS%20CONSTRUCTION%20STUCCO%20LTD.!5e0!3m2!1str!2str!4v1779804472006!5m2!1str!2str"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TURMS Construction Stucco Ltd. Location Details Map"
              className="w-full h-[600px]"
            />
          </div>

          <div className="p-5 bg-gray-50/30 border-t border-gray-100/50">
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Proudly serving Toronto & surrounding GTA areas:</span>
            <p className="text-gray-600 text-[11px] font-normal mt-1 leading-relaxed">
              Lawrence Park, The Beaches, East York, High Park, Etobicoke, Scarborough, North York, Vaughan, Richmond Hill, Mississauga, and beyond.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
