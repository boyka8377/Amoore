import React, { useState } from 'react';
import { Play, Pause, ArrowRight, Check } from 'lucide-react';
import { SERVICE_PACKAGES } from '../data/landingData';
import { ServicePackage } from '../types';

interface ServicesSectionProps {
  onReserve: (pkg: ServicePackage) => void;
}

const CATEGORIES = [
  'Services',
  'Bridal Makeover',
  'Event Glam',
  'Scheduling',
  'Hair Artistry',
  'Memberships',
  'Blog',
  'Portfolio',
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onReserve }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Scheduling');
  const [isMarqueePaused, setIsMarqueePaused] = useState<boolean>(false);

  // Filter or highlight packages
  const filteredPackages = SERVICE_PACKAGES.filter((p) => {
    if (activeCategory === 'Services' || activeCategory === 'Scheduling') return true;
    if (activeCategory === 'Hair Artistry') return p.category === 'Hair Artistry' || p.title.includes('Hair');
    if (activeCategory === 'Bridal Makeover') return p.title.includes('Bridal') || p.category === 'Bridal';
    return true;
  });

  // Ensure enough items for continuous marquee
  const displayList = [...filteredPackages, ...filteredPackages, ...filteredPackages];

  return (
    <section
      className="py-24 bg-white dark:bg-[#0E0E10] border-t border-neutral-200 dark:border-neutral-800 relative overflow-hidden select-none transition-colors duration-300"
      data-purpose="services-showcase"
      id="services"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 text-center mb-12">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-neutral-950 dark:text-white mb-3">
          Grow your business
        </h2>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 tracking-wide mb-8">
          You deserve bespoke beauty artistry that can do it all.
        </p>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 text-xs font-medium text-neutral-600 dark:text-neutral-300">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#f0eee9] dark:bg-neutral-800 text-black dark:text-white font-semibold shadow-xs'
                    : 'hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/60 text-neutral-600 dark:text-neutral-400'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Infinite Services Marquee */}
      <div
        className="relative w-full overflow-hidden py-6 group"
        id="infinite-services-marquee"
      >
        <div className={`marquee-track gap-6 px-4 ${isMarqueePaused ? 'is-paused' : ''}`}>
          {displayList.map((pkg, idx) => (
            <div
              key={`${pkg.id}-${idx}`}
              className="w-[340px] sm:w-[380px] flex-shrink-0 bg-white dark:bg-[#141417] border border-[#E5E4DE] dark:border-neutral-800 hover:dark:border-neutral-700 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group/card"
            >
              {/* Media Container */}
              <div className="relative aspect-[16/10] bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/95 dark:bg-black/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider text-neutral-900 dark:text-neutral-100 border border-neutral-200/60 dark:border-neutral-700 shadow-xs">
                  {pkg.number}
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 dark:bg-white/90 backdrop-blur-sm text-white dark:text-black px-3 py-1 rounded-full text-xs font-mono font-bold">
                  {pkg.price}
                </div>
              </div>

              {/* Text & Action */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                      {pkg.categoryTag}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800 px-2 py-0.5 rounded">
                      {pkg.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-neutral-950 dark:text-white">
                    {pkg.title}
                  </h3>

                  <ul className="text-xs text-neutral-600 dark:text-neutral-300 space-y-1.5 pt-1">
                    {pkg.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600"></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                    {pkg.subline}
                  </span>
                  <button
                    onClick={() => onReserve(pkg)}
                    className="inline-flex items-center gap-2 bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-200 text-white dark:text-black text-xs font-semibold px-4 py-2 rounded-full transition-colors active:scale-95 cursor-pointer"
                  >
                    <span>Reserve</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Controls & Subtitle */}
      <div className="mt-8 flex items-center justify-center gap-3">
        <div className="flex items-center gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400">
          <button
            onClick={() => setIsMarqueePaused(!isMarqueePaused)}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 transition-colors cursor-pointer"
          >
            {isMarqueePaused ? <Play className="w-3 h-3 fill-current" /> : <Pause className="w-3 h-3 fill-current" />}
            <span className="font-semibold text-[11px]">
              {isMarqueePaused ? 'RESUME LOOP' : 'PAUSE LOOP'}
            </span>
          </button>
          <span className="hidden sm:inline-block text-neutral-400 dark:text-neutral-600">•</span>
          <span className="text-[11px] tracking-wider uppercase text-neutral-500 dark:text-neutral-400 hidden sm:inline-block">
            Hover card to pause · 4 Exclusive seasonal packages
          </span>
        </div>
      </div>
    </section>
  );
};
