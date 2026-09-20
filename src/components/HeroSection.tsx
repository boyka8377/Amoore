import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/landingData';

interface HeroSectionProps {
  onSelectService: (serviceName: string) => void;
  onGetStarted: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectService, onGetStarted }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = HERO_SLIDES.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % totalSlides);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, totalSlides]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % totalSlides);
  };

  const togglePlayPause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <section
      className="relative bg-[#0a0a0a] text-white pt-24 pb-20 px-4 md:px-8 overflow-hidden select-none"
      data-purpose="hero-viewport"
    >
      {/* Cinematic Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBejatSYa1GhiZDuA0F8BH9sR7EbXGgZYBkmE3_XvYvHjvi443J-0ZwSTKM5pK2nv36-aceUUh8I3o3WEXLkhcw5dKlwMbgtDF3JOMynuDMMkOBfTStVRb4bcepYPBfda9OrdcWVARUX4fXYBEOEBpnBaP3AFrVtUThPenYQB966zob0QWidZghCf1UzgCFWZY43Lhf9ueGup3xJi9eZBW4CWpgg9j5ui_cZP3HwKJVvy7NQEn3ceI6knJ7PFXUxxugYco"
          alt="Hero Background - Amoree Couture Couple Sunset Silhouette"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/80 to-[#0a0a0a]"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* Hero Title & Primary CTA */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            A makeover<br className="hidden sm:inline" /> makes it real.
          </h1>
          <div className="flex flex-col items-center justify-center">
            <button
              onClick={onGetStarted}
              className="bg-white text-black font-semibold text-xs tracking-wider uppercase px-8 py-3.5 rounded-full hover:bg-neutral-200 transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
            >
              Get Started
            </button>
            <p className="text-neutral-400 text-xs text-center mt-3.5 tracking-wide max-w-md">
              Bespoke bridal &amp; couture artistry in Dhaka. No advance consultation required.
            </p>
          </div>
        </div>

        {/* Carousel Header Controls */}
        <div className="max-w-[1240px] mx-auto flex items-center justify-between px-2 sm:px-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/10 text-[11px] font-mono tracking-wider text-neutral-300 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>HAUTE ARTISTRY EDITORIAL</span>
            </div>
            <span className="hidden sm:inline text-xs text-neutral-500 font-mono">
              [ STEPPED SHOWCASE SUITE ]
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={togglePlayPause}
              aria-label={isPaused ? 'Resume Auto Advance' : 'Pause Auto Advance'}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-[11px] font-mono text-neutral-200 backdrop-blur-md transition-all cursor-pointer"
            >
              {isPaused ? <Play className="w-3 h-3 text-amber-300 fill-current" /> : <Pause className="w-3 h-3 text-white fill-current" />}
              <span>{isPaused ? 'PLAY' : 'PAUSE'}</span>
            </button>

            <div className="flex items-center gap-1.5 ml-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Slide"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 border border-white/15 text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Slide"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 border border-white/15 text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Stepped 3D Stage Container */}
        <div
          className="relative max-w-[1360px] mx-auto overflow-hidden py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Ambient Glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#c59a6f]/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative w-full flex items-center justify-center min-h-[480px] sm:min-h-[560px] md:min-h-[600px]">
            {HERO_SLIDES.map((slide, idx) => {
              const offset = (idx - activeIdx + totalSlides) % totalSlides;
              let styleObj: React.CSSProperties = {};
              let isClickable = false;

              if (offset === 0) {
                // Active Center
                styleObj = {
                  transform: 'translateX(0px) scale(1)',
                  zIndex: 20,
                  opacity: 1,
                  pointerEvents: 'auto',
                };
              } else if (offset === totalSlides - 1) {
                // Previous (Left)
                styleObj = {
                  transform: 'translateX(-54%) scale(0.86)',
                  zIndex: 10,
                  opacity: 0.35,
                  pointerEvents: 'auto',
                };
                isClickable = true;
              } else if (offset === 1) {
                // Next (Right)
                styleObj = {
                  transform: 'translateX(54%) scale(0.86)',
                  zIndex: 10,
                  opacity: 0.35,
                  pointerEvents: 'auto',
                };
                isClickable = true;
              } else {
                // Hidden
                styleObj = {
                  transform: 'translateX(0px) scale(0.75)',
                  zIndex: 1,
                  opacity: 0,
                  pointerEvents: 'none',
                };
              }

              return (
                <div
                  key={slide.id}
                  onClick={() => {
                    if (isClickable) setActiveIdx(idx);
                  }}
                  style={styleObj}
                  className="hero-stage-card absolute w-[92%] sm:w-[82%] md:w-[74%] lg:w-[68%] max-w-[960px] h-[480px] sm:h-[540px] md:h-[580px] rounded-3xl overflow-hidden border border-neutral-800/90 bg-[#161311] shadow-2xl transition-all duration-700 cursor-pointer"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover object-top filter brightness-[0.92]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent w-full md:w-[75%] z-10 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/30 z-10 pointer-events-none"></div>

                  {/* Top Bar inside Card */}
                  <div className="relative z-20 p-6 sm:p-10 flex items-center justify-between border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-amber-200/90 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                        {slide.tag}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-400 hidden sm:inline">
                        {slide.subtag}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-white/70">
                      0{slide.id + 1} / 0{totalSlides}
                    </div>
                  </div>

                  {/* Bottom Content inside Card */}
                  <div className="relative z-20 p-6 sm:p-10 flex flex-col justify-end h-[calc(100%-80px)] max-w-xl">
                    <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white tracking-tight mb-4 leading-none">
                      {slide.title}
                    </h2>
                    <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed mb-8 max-w-md">
                      {slide.description}
                    </p>
                    <div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectService(slide.ctaAction);
                        }}
                        className="inline-flex items-center gap-3 bg-[#e8ded1] hover:bg-white text-neutral-950 px-6 py-3.5 rounded-full text-xs font-semibold tracking-wide transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        <span>{slide.ctaText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Progress Indicators */}
        <div className="max-w-[320px] mx-auto mt-6 flex items-center justify-center gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIdx ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Social Proof Metric Row */}
        <div className="mt-16 text-center">
          <p className="text-neutral-500 text-xs font-sans tracking-wide mb-10">
            Join hundreds of brides &amp; clients who celebrate their unforgettable moments with Amoree.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 max-w-2xl mx-auto gap-8 text-center pt-4 border-t border-neutral-800/60">
            <div>
              <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">14K+</div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mt-2">
                Transformations Crafted
              </div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">99.4%</div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mt-2">
                Bride Satisfaction Score
              </div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">2</div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mt-2">
                Dhaka Flagships (Uttara &amp; Mirpur)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
