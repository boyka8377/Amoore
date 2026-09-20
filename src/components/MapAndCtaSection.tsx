import React, { useState } from 'react';
import { BRANCHES } from '../data/landingData';
import { ArrowRight } from 'lucide-react';

interface MapAndCtaSectionProps {
  onRequestAppointment: () => void;
}

export const MapAndCtaSection: React.FC<MapAndCtaSectionProps> = ({
  onRequestAppointment,
}) => {
  const [selectedBranch, setSelectedBranch] = useState<'uttara' | 'mirpur'>('uttara');
  const branch = BRANCHES[selectedBranch];

  return (
    <section
      className="py-24 px-6 md:px-10 bg-[#fbf9f6] dark:bg-[#0B0B0C] border-t border-neutral-200 dark:border-neutral-800 text-center select-none transition-colors duration-300"
      id="book"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Editorial CTA */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
            BEGIN TODAY
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold headline-tight text-neutral-950 dark:text-white uppercase leading-none">
            Make your next moment unforgettable.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
            Connect with Amoree The Beauty House. Personalized bridal, hair, and glamour transformations crafted for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onRequestAppointment}
              className="w-full sm:w-auto bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-200 text-white dark:text-black font-semibold text-xs tracking-wider uppercase px-8 py-3.5 rounded-full transition-all shadow-md active:scale-95 cursor-pointer"
            >
              Request Appointment ➔
            </button>
            <a
              className="w-full sm:w-auto bg-white dark:bg-[#1A1A1E] hover:bg-neutral-100 dark:hover:bg-neutral-800 text-black dark:text-white border border-neutral-300 dark:border-neutral-700 font-semibold text-xs tracking-wider uppercase px-8 py-3.5 rounded-full transition-all shadow-xs"
              href="tel:+8801764539621"
            >
              Call Uttara Studio
            </a>
          </div>
        </div>

        {/* Interactive Google Maps Atelier Showcase */}
        <div
          className="bg-white dark:bg-[#141417] rounded-3xl border border-[#E5E4DE] dark:border-neutral-800 shadow-sm overflow-hidden text-left transition-colors duration-300"
          data-purpose="atelier-map-showcase"
        >
          {/* Header & Branch Switcher */}
          <div className="p-6 md:px-8 border-b border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-[#141417]">
            <div>
              <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>ATELIER NAVIGATION &amp; DIRECTIONS</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-neutral-950 dark:text-white">
                Visit Amoree's Prime Studios
              </h3>
            </div>

            {/* Branch Switcher Buttons */}
            <div className="flex items-center gap-2 bg-[#FAFAFA] dark:bg-neutral-900 p-1.5 rounded-full border border-neutral-200 dark:border-neutral-700">
              <button
                onClick={() => setSelectedBranch('uttara')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedBranch === 'uttara'
                    ? 'bg-black dark:bg-white text-white dark:text-black shadow-sm'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                }`}
              >
                <span>Uttara Flagship</span>
                <span
                  className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded ${
                    selectedBranch === 'uttara'
                      ? 'bg-white/20 dark:bg-black/20 text-white dark:text-black font-bold'
                      : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300'
                  }`}
                >
                  Sec 3
                </span>
              </button>

              <button
                onClick={() => setSelectedBranch('mirpur')}
                className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedBranch === 'mirpur'
                    ? 'bg-black dark:bg-white text-white dark:text-black shadow-sm font-semibold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                }`}
              >
                <span>Mirpur Atelier</span>
                <span
                  className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded ${
                    selectedBranch === 'mirpur'
                      ? 'bg-white/20 dark:bg-black/20 text-white dark:text-black font-bold'
                      : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300'
                  }`}
                >
                  Sec 12
                </span>
              </button>
            </div>
          </div>

          {/* Map Frame & Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 relative">
            {/* Map Embed Frame */}
            <div className="lg:col-span-8 relative min-h-[380px] md:min-h-[440px] bg-neutral-100 dark:bg-neutral-900">
              <iframe
                title="Amoree Atelier Google Maps Location"
                className="w-full h-full border-0 min-h-[380px] md:min-h-[440px]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${branch.mapQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
              />

              {/* Map Floating Status Pill */}
              <div className="absolute top-4 left-4 bg-white/95 dark:bg-black/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-neutral-200/80 dark:border-neutral-700 shadow-sm flex items-center gap-2 text-[11px] font-mono text-neutral-800 dark:text-neutral-200 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="font-semibold">{branch.statusText}</span>
              </div>
            </div>

            {/* Studio Details Sidebar */}
            <div className="lg:col-span-4 p-6 md:p-8 bg-[#FAFAFA] dark:bg-[#151518] flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-neutral-200 dark:border-neutral-800 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-black dark:bg-white text-white dark:text-black font-bold tracking-wider">
                    {branch.code}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded font-semibold border border-emerald-200/50 dark:border-emerald-800/50">
                    Walk-ins &amp; Appointments
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-neutral-950 dark:text-white mb-1">
                    {branch.title}
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {branch.address}
                  </p>
                </div>

                <div className="space-y-2.5 pt-3 border-t border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-700 dark:text-neutral-300">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-500 dark:text-neutral-400">Operating Hours:</span>
                    <span className="font-semibold text-neutral-900 dark:text-white">{branch.hours}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-500 dark:text-neutral-400">Direct Phone:</span>
                    <a
                      href={`tel:${branch.phone.replace(/\s+/g, '')}`}
                      className="font-bold text-neutral-950 dark:text-white hover:underline"
                    >
                      {branch.phone}
                    </a>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-500 dark:text-neutral-400">Valet &amp; Parking:</span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-semibold">{branch.parking}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <a
                  href={branch.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-200 text-white dark:text-black px-5 py-3 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all shadow-sm"
                >
                  <span>Get Directions on Google Maps</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`tel:${branch.phone.replace(/\s+/g, '')}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-white dark:bg-[#1E1E22] hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700 px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all"
                >
                  <span>Call Front Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
          <span>✓ BESPOKE BRIDAL CONSULTATION</span>
          <span>✓ CERTIFIED MASTER ARTISTS</span>
          <span>✓ 100% VERIFIED GLOBAL BRANDS</span>
        </div>
      </div>
    </section>
  );
};
