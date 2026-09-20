import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ReservationSplitSectionProps {
  onExploreBridal: () => void;
}

export const ReservationSplitSection: React.FC<ReservationSplitSectionProps> = ({
  onExploreBridal,
}) => {
  return (
    <section
      className="py-20 px-6 md:px-10 max-w-[1440px] mx-auto border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-300"
      data-purpose="commerce-split"
      id="bridal"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Technical Metric Card */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div
            className="bg-white dark:bg-[#141417] rounded-2xl border border-neutral-300 dark:border-neutral-800 p-8 shadow-sm transition-colors duration-300"
            data-purpose="metric-card"
          >
            <div className="flex items-center justify-between pb-6 border-b border-neutral-200 dark:border-neutral-800">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 dark:text-neutral-400 font-bold">
                Reservation Engine
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 px-2.5 py-0.5 rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                SLOTS ACTIVE - WEDDING SEASON
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
              <div className="border-b-2 border-black dark:border-white pb-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Upcoming Bridal Slots
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 text-neutral-950 dark:text-white">
                  42 Confirmed
                </div>
              </div>
              <div className="border-b-2 border-black dark:border-white pb-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Satisfaction Score
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 text-neutral-950 dark:text-white">
                  99.4%
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Available Ateliers
              </div>
              <div className="flex items-center justify-between p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60">
                <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                  Uttara Flagship (Sector 3)
                </span>
                <span className="text-[10px] font-mono uppercase text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-2 py-0.5 rounded font-bold">
                  Bookings Open
                </span>
              </div>
              <div className="flex items-center justify-between p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60">
                <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                  Mirpur Branch (Rokeya Avenue)
                </span>
                <span className="text-[10px] font-mono uppercase text-neutral-600 dark:text-neutral-400 bg-neutral-200 dark:bg-neutral-800 px-2 py-0.5 rounded font-bold">
                  Limited Slots
                </span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-400 dark:text-neutral-500 uppercase">
              <span>WHATSAPP CONCIERGE INTEGRATED</span>
              <span>PCI-DSS ENCRYPTED</span>
            </div>
          </div>
        </div>

        {/* Right Side: Editorial Copy & Checklist */}
        <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
          <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            02 / RESERVATIONS &amp; CONSULTATIONS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold headline-tight text-neutral-950 dark:text-white uppercase leading-none">
            Seamless bookings, tailored experience, zero delay.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Reserve your bridal or party transformation effortlessly with direct WhatsApp coordination,
            customized bridal trial options, and bespoke packages tailored to your wedding itinerary.
          </p>

          <ul className="space-y-3 pt-2 text-xs sm:text-sm text-neutral-800 dark:text-neutral-200">
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5 font-bold">
                ✓
              </span>
              <span>Zero cancellation hidden fees on selected bridal season packages</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5 font-bold">
                ✓
              </span>
              <span>Personalized bride-to-be timeline and skin preparation calendar</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5 font-bold">
                ✓
              </span>
              <span>Instant slot confirmation via official concierge desk</span>
            </li>
          </ul>

          <div className="pt-4">
            <button
              onClick={onExploreBridal}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-950 dark:text-white hover:underline cursor-pointer group"
            >
              <span>Explore Bridal Packages</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
