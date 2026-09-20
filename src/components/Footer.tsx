import React, { useState } from 'react';
import { X, Shield } from 'lucide-react';

interface FooterProps {
  onNavClick: (id: string) => void;
  onServiceClick: (service: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onServiceClick }) => {
  const [modalContent, setModalContent] = useState<{ title: string; body: string } | null>(null);

  const openPrivacy = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalContent({
      title: 'Privacy Policy',
      body: `Amoree The Beauty House (আমোড়) respects your privacy. Any personal information (such as your name, contact phone number, and appointment preferences) gathered through our atelier reservation system is utilized solely for booking confirmation, consultation preparation, and customer care service. We do not sell, rent, or distribute personal information to third-party marketing entities. All digital records comply with strict confidentiality standards.`,
    });
  };

  const openTerms = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalContent({
      title: 'Terms of Service',
      body: `Appointments made at Amoree The Beauty House Uttara Flagship and Mirpur Branch are reserved specifically for you. For major bridal bookings and bridal packages, complimentary rescheduling is honored up to 72 hours prior to scheduled ceremony vanity call times. Patch tests for hair color and herbal henna are provided upon request. Our master artists guarantee 100% genuine and verified luxury formulations for all procedures.`,
    });
  };

  return (
    <footer className="bg-white dark:bg-[#0A0A0C] border-t border-neutral-200 dark:border-neutral-800 pt-16 pb-12 px-6 md:px-10 text-neutral-600 dark:text-neutral-400 text-xs select-none transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 pb-16 border-b border-neutral-200 dark:border-neutral-800">
        {/* Column 1: Services */}
        <div className="space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-100">
            Services
          </div>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => onServiceClick('Bridal Couture Makeover & Draping')}
                className="hover:text-black dark:hover:text-white transition-colors text-left cursor-pointer"
              >
                Bridal Couture Makeover
              </button>
            </li>
            <li>
              <button
                onClick={() => onServiceClick('Reception & Event Glam Makeover')}
                className="hover:text-black dark:hover:text-white transition-colors text-left cursor-pointer"
              >
                Reception &amp; Engagement
              </button>
            </li>
            <li>
              <button
                onClick={() => onServiceClick('Holistic Skin Care, Facial & Spa')}
                className="hover:text-black dark:hover:text-white transition-colors text-left cursor-pointer"
              >
                Holistic Skin Therapy
              </button>
            </li>
            <li>
              <button
                onClick={() => onServiceClick('Hair Styling & Balayage Coloring')}
                className="hover:text-black dark:hover:text-white transition-colors text-left cursor-pointer"
              >
                Balayage &amp; Hair Color
              </button>
            </li>
            <li>
              <button
                onClick={() => onServiceClick('Natural Glow Facial & Keratin')}
                className="hover:text-black dark:hover:text-white transition-colors text-left cursor-pointer"
              >
                Signature Blowouts
              </button>
            </li>
          </ul>
        </div>

        {/* Column 2: Bridal Edit */}
        <div className="space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-100">
            Bridal Edit
          </div>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => onNavClick('bridal')}
                className="hover:text-black dark:hover:text-white transition-colors text-left cursor-pointer"
              >
                The Royal Package
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavClick('locations-booking')}
                className="hover:text-black dark:hover:text-white transition-colors text-left cursor-pointer"
              >
                Trial Consultations
              </button>
            </li>
            <li>
              <button
                onClick={() => onServiceClick('Bridal Couture Makeover & Draping')}
                className="hover:text-black dark:hover:text-white transition-colors text-left cursor-pointer"
              >
                Dupatta &amp; Jewelry Draping
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavClick('bridal')}
                className="hover:text-black dark:hover:text-white transition-colors text-left cursor-pointer"
              >
                Airbrush Longevity
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavClick('locations')}
                className="hover:text-black dark:hover:text-white transition-colors text-left cursor-pointer"
              >
                Destination Bridal Team
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Locations */}
        <div className="space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-100">
            Locations
          </div>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => onNavClick('locations')}
                className="hover:text-black dark:hover:text-white transition-colors text-left cursor-pointer"
              >
                Uttara Sector 3 Flagship
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavClick('locations')}
                className="hover:text-black dark:hover:text-white transition-colors text-left cursor-pointer"
              >
                Mirpur Studio
              </button>
            </li>
            <li>
              <a
                href="https://wa.me/8801764539621"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Virtual Consultations
              </a>
            </li>
            <li>
              <a href="tel:+8801764539621" className="font-bold text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white">
                +880 17 6453 9621
              </a>
            </li>
            <li>
              <button
                onClick={() => onNavClick('locations-booking')}
                className="hover:text-black dark:hover:text-white transition-colors text-left cursor-pointer"
              >
                Bookings Concierge
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Company */}
        <div className="space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-100">
            Company
          </div>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => onNavClick('foundation')}
                className="hover:text-black dark:hover:text-white transition-colors text-left cursor-pointer"
              >
                Our Story &amp; Philosophy
              </button>
            </li>
            <li>
              <a
                href="https://wa.me/8801764539621?text=Hello,%20I%20am%20interested%20in%20career/apprenticeship%20opportunities%20at%20Amoree."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Careers &amp; Apprenticeships
              </a>
            </li>
            <li>
              <button
                onClick={() => onNavClick('portfolio')}
                className="hover:text-black dark:hover:text-white transition-colors text-left cursor-pointer"
              >
                Press &amp; Editorial
              </button>
            </li>
            <li>
              <span className="text-neutral-500 dark:text-neutral-400">Hygiene &amp; Safety Protocol</span>
            </li>
            <li>
              <a
                href="mailto:concierge@amoreethebeautyhouse.com"
                className="text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white font-mono text-[11px]"
              >
                concierge@amoree.com
              </a>
            </li>
          </ul>
        </div>

        {/* Column 5: Follow */}
        <div className="space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-100">
            Follow
          </div>
          <ul className="space-y-2">
            <li>
              <a
                className="hover:text-black dark:hover:text-white transition-colors inline-flex items-center gap-1.5"
                href="https://www.instagram.com/amoreethebeautyhouse/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram @amoreethebeautyhouse
              </a>
            </li>
            <li>
              <a
                className="hover:text-black dark:hover:text-white transition-colors inline-flex items-center gap-1.5"
                href="https://www.facebook.com/Amoreethebeautyhouse/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook Page
              </a>
            </li>
            <li>
              <a
                className="hover:text-black dark:hover:text-white transition-colors inline-flex items-center gap-1.5"
                href="https://www.tiktok.com/@amoreethebeautyhouse"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok Tutorials
              </a>
            </li>
            <li>
              <a
                className="hover:text-black dark:hover:text-white transition-colors inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-semibold"
                href="https://wa.me/8801764539621"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Official
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="max-w-[1440px] mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-neutral-500 dark:text-neutral-400 text-[11px] gap-4">
        <div>© 2025 Amoree The Beauty House (আমোড়). All rights reserved.</div>
        <div className="flex space-x-6">
          <button
            onClick={openPrivacy}
            className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            Privacy Policy
          </button>
          <button
            onClick={openTerms}
            className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            Terms of Service
          </button>
        </div>
      </div>

      {/* Legal Info Modal */}
      {modalContent && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setModalContent(null)}
        >
          <div
            className="bg-white dark:bg-[#151518] rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-neutral-200 dark:border-neutral-800 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalContent(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-800 dark:hover:text-white p-2 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2.5 mb-4 text-black dark:text-white">
              <Shield className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
              <h4 className="text-xl font-bold">{modalContent.title}</h4>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
              {modalContent.body}
            </p>
            <button
              onClick={() => setModalContent(null)}
              className="w-full bg-black dark:bg-white text-white dark:text-black text-xs font-semibold py-2.5 rounded-full uppercase tracking-wider hover:bg-neutral-800 dark:hover:bg-neutral-200 cursor-pointer transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
