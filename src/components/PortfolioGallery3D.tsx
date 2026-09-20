import React, { useState, useEffect, useMemo } from 'react';
import { PORTFOLIO_ITEMS } from '../data/landingData';
import { PortfolioItem } from '../types';
import { ArrowRight, X, MessageCircle } from 'lucide-react';

interface PortfolioGalleryProps {
  onBookService: (serviceName: string) => void;
}

type CategoryFilter = 'all' | 'bridal' | 'hair' | 'henna' | 'skin';

export const PortfolioGallery3D: React.FC<PortfolioGalleryProps> = ({ onBookService }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter((item) => {
      const tagUpper = item.tag.toUpperCase();
      const titleUpper = item.title.toUpperCase();
      if (activeCategory === 'bridal') {
        return tagUpper.includes('BRIDAL') || tagUpper.includes('CEREMONY') || titleUpper.includes('WEDDING');
      }
      if (activeCategory === 'hair') {
        return tagUpper.includes('HAIR') || tagUpper.includes('GLOSS') || tagUpper.includes('LOUNGE') || titleUpper.includes('BLOWOUT') || titleUpper.includes('KERATIN');
      }
      if (activeCategory === 'henna') {
        return tagUpper.includes('HENNA') || tagUpper.includes('MEHENDI') || titleUpper.includes('MANDALAS') || titleUpper.includes('JAAL');
      }
      if (activeCategory === 'skin') {
        return tagUpper.includes('RITUAL') || tagUpper.includes('CARE') || titleUpper.includes('GLOW') || titleUpper.includes('OIL');
      }
      return true;
    });
  }, [activeCategory]);

  const categories: { key: CategoryFilter; label: string; count: number }[] = [
    { key: 'all', label: 'All Works', count: PORTFOLIO_ITEMS.length },
    {
      key: 'bridal',
      label: 'Bridal & Couture',
      count: PORTFOLIO_ITEMS.filter((i) => i.tag.includes('BRIDAL') || i.tag.includes('CEREMONY') || i.title.includes('Wedding')).length,
    },
    {
      key: 'hair',
      label: 'Hair & Balayage',
      count: PORTFOLIO_ITEMS.filter((i) => i.tag.includes('HAIR') || i.tag.includes('GLOSS') || i.tag.includes('LOUNGE') || i.title.includes('Blowout')).length,
    },
    {
      key: 'henna',
      label: 'Organic Henna',
      count: PORTFOLIO_ITEMS.filter((i) => i.tag.includes('HENNA') || i.tag.includes('MEHENDI')).length,
    },
    {
      key: 'skin',
      label: 'Skin Rituals',
      count: PORTFOLIO_ITEMS.filter((i) => i.tag.includes('RITUAL') || i.tag.includes('CARE')).length,
    },
  ];

  return (
    <section
      className="py-24 px-6 md:px-10 bg-white dark:bg-[#0E0E10] border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-300"
      id="portfolio"
      data-purpose="minimal-portfolio-gallery"
    >
      {/* Anchor for any links targeted to portfolio-3d */}
      <div id="portfolio-3d" className="h-0" />

      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-400 mb-2">
              03 / Lookbook &amp; Archive
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold headline-tight text-neutral-950 dark:text-white uppercase tracking-tight">
              Curated Client Artistry.
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base max-w-xl mt-3 leading-relaxed">
              Authentic bridal makeovers, dimensional hair coloring, and organic henna rituals crafted at our Dhaka ateliers.
            </p>
          </div>

          {/* Minimal Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-black dark:bg-white text-white dark:text-black shadow-sm'
                    : 'bg-neutral-100 dark:bg-neutral-800/80 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`ml-1.5 text-[10px] font-mono ${
                    activeCategory === cat.key ? 'text-neutral-300 dark:text-neutral-700' : 'text-neutral-400 dark:text-neutral-500'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Clean, Minimal Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-white dark:bg-[#141417] rounded-2xl border border-[#EAE9E4] dark:border-neutral-800 hover:border-black/40 dark:hover:border-neutral-600 transition-all duration-300 shadow-xs flex flex-col justify-between cursor-pointer"
            >
              {/* Image Box */}
              <div className="relative aspect-[4/5] bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                />

                {/* Subtle gradient vignette for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="inline-flex items-center text-[10px] font-mono uppercase tracking-wider bg-white/90 dark:bg-black/85 text-neutral-900 dark:text-neutral-100 px-2.5 py-1 rounded-full font-semibold border border-neutral-200/80 dark:border-neutral-700 shadow-xs backdrop-blur-xs">
                    {item.tag}
                  </span>
                </div>

                {/* Item Number */}
                <div className="absolute top-3.5 right-3.5">
                  <span className="text-white/80 font-mono text-[11px] font-semibold drop-shadow-sm">
                    #{item.numberStr}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute bottom-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white dark:bg-neutral-900 text-black dark:text-white px-3 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1.5 shadow-sm">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>

              {/* Minimal Text Meta */}
              <div className="p-5 flex items-center justify-between border-t border-neutral-100 dark:border-neutral-800 bg-white dark:bg-[#141417]">
                <div>
                  <h3 className="text-base font-bold text-neutral-950 dark:text-white tracking-tight group-hover:text-black dark:group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black text-neutral-700 dark:text-neutral-300 flex items-center justify-center transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Minimal Footer Note */}
        <div className="mt-14 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>All portfolio images showcase authentic client appointments at Amoree</span>
          </div>

          <a
            href="https://www.instagram.com/amoreethebeautyhouse/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-neutral-900 dark:text-neutral-200 hover:underline inline-flex items-center gap-1"
          >
            <span>See more daily transformations on Instagram</span>
            <span>➔</span>
          </a>
        </div>
      </div>

      {/* Clean, Minimal Modal Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white dark:bg-[#151518] rounded-3xl max-w-xl w-full border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              aria-label="Close Preview"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-neutral-200 dark:border-neutral-700 shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo Preview */}
            <div className="relative aspect-[4/3] bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono tracking-wider uppercase bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 px-3 py-1 rounded-full font-semibold">
                  {selectedItem.tag}
                </span>
                <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                  Look #{selectedItem.numberStr}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-neutral-950 dark:text-white tracking-tight">
                  {selectedItem.title}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans mt-1">
                  {selectedItem.subtitle}
                </p>
              </div>

              <p className="text-sm text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={`https://wa.me/8801764539621?text=${encodeURIComponent(
                    `Hello Amoree Atelier, I am interested in the look: "${selectedItem.title}" (${selectedItem.subtitle}). Could you share package availability?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-full text-xs font-semibold tracking-wide transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Inquire on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    const title = selectedItem.title;
                    setSelectedItem(null);
                    onBookService(title);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-200 text-white dark:text-black px-6 py-3 rounded-full text-xs font-semibold tracking-wide uppercase transition-all cursor-pointer shadow-sm active:scale-95"
                >
                  <span>Book This Look</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
