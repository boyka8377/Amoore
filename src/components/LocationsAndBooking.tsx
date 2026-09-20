import React, { useState, useEffect } from 'react';
import { MessageCircle, Check, Sparkles, X } from 'lucide-react';
import { BookingSubmission } from '../types';

interface LocationsAndBookingProps {
  preselectedService?: string;
  onClearPreselectedService?: () => void;
}

export const LocationsAndBooking: React.FC<LocationsAndBookingProps> = ({
  preselectedService,
  onClearPreselectedService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    atelier: 'Uttara Flagship Studio (Sector 3)',
    service: 'Bridal Couture Makeover & Draping',
    date: '',
    timeSlot: '10:30 AM - 01:00 PM (Morning Slot)',
  });

  const [isSubmittedModalOpen, setIsSubmittedModalOpen] = useState(false);
  const [bookingConfirmation, setBookingConfirmation] = useState<BookingSubmission | null>(null);

  // Sync pre-selected service when user clicks "Reserve" in other sections
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        service: preselectedService,
      }));
    }
  }, [preselectedService]);

  const todayIso = new Date().toISOString().split('T')[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) return;

    const ref = `AMR-${Math.floor(100000 + Math.random() * 900000)}`;
    const submission: BookingSubmission = {
      ...formData,
      bookingRef: ref,
      createdAt: new Date().toLocaleString(),
    };

    setBookingConfirmation(submission);
    setIsSubmittedModalOpen(true);

    // Also build the WhatsApp text and open in new tab
    const message = encodeURIComponent(
      `Hello Amoree The Beauty House! ✨\n\nI would like to confirm an appointment booking:\n• Ref Code: ${ref}\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Atelier: ${formData.atelier}\n• Service: ${formData.service}\n• Date: ${formData.date}\n• Slot: ${formData.timeSlot}\n\nPlease confirm my slot reservation!`
    );
    window.open(`https://wa.me/8801764539621?text=${message}`, '_blank');
  };

  return (
    <section
      className="py-20 px-6 md:px-10 max-w-[1440px] mx-auto border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-300"
      data-purpose="branches-ecosystem"
      id="locations"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-400 mb-2">
            Ateliers &amp; Locations
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold headline-tight text-neutral-950 dark:text-white uppercase">
            Two Prime Sanctuaries in Dhaka.
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/8801764539621?text=Hello%20Amoree%20Atelier,%20I%20would%20like%20to%20inquire%20about%20a%20bridal/salon%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-5 py-3 rounded-full transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat directly with Concierge on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* 3 Prime Sanctuaries Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Card 1: Uttara */}
        <div
          className="lg:col-span-4 bg-white dark:bg-[#141417] rounded-2xl border border-[#E5E4DE] dark:border-neutral-800 p-8 flex flex-col justify-between hover:border-black dark:hover:border-neutral-600 transition-all shadow-sm group"
          data-purpose="branch-card"
        >
          <div>
            <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-6 text-black dark:text-white font-bold">
              01
            </div>
            <h3 className="text-xl font-bold tracking-tight text-neutral-950 dark:text-white mb-2">
              Uttara Flagship Studio
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
              House 11, Road 15, Sector 3, Block B, Rabindro Sarani, Uttara, Dhaka 1230
            </p>
            <div className="space-y-2 py-4 border-t border-neutral-100 dark:border-neutral-800 text-xs font-mono text-neutral-700 dark:text-neutral-300">
              <div className="flex justify-between">
                <span className="text-neutral-500 dark:text-neutral-400">Phone:</span>
                <span className="font-bold text-neutral-900 dark:text-white">+880 17 6453 9621</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 dark:text-neutral-400">Hours:</span>
                <span>10:30 AM – 8:30 PM</span>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
            <a
              className="text-xs font-bold uppercase tracking-wider text-black dark:text-white hover:underline flex items-center gap-2"
              href="tel:+8801764539621"
            >
              Directions &amp; Call ➔
            </a>
            <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded font-bold border border-emerald-200/50 dark:border-emerald-800/50">
              Flagship Studio
            </span>
          </div>
        </div>

        {/* Card 2: Mirpur */}
        <div
          className="lg:col-span-4 bg-white dark:bg-[#141417] rounded-2xl border border-[#E5E4DE] dark:border-neutral-800 p-8 flex flex-col justify-between hover:border-black dark:hover:border-neutral-600 transition-all shadow-sm group"
          data-purpose="branch-card"
        >
          <div>
            <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-6 text-black dark:text-white font-bold">
              02
            </div>
            <h3 className="text-xl font-bold tracking-tight text-neutral-950 dark:text-white mb-2">
              Mirpur Branch
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
              Mirpur 12 Bus Stand / Begum Rokeya Avenue Area, Dhaka, Bangladesh
            </p>
            <div className="space-y-2 py-4 border-t border-neutral-100 dark:border-neutral-800 text-xs font-mono text-neutral-700 dark:text-neutral-300">
              <div className="flex justify-between">
                <span className="text-neutral-500 dark:text-neutral-400">WhatsApp Concierge:</span>
                <span className="font-bold text-neutral-900 dark:text-white">+880 17 6453 9621</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 dark:text-neutral-400">Status:</span>
                <span className="text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded text-[10px] font-bold border border-emerald-200/50 dark:border-emerald-800/50">
                  Open for Appointments
                </span>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
            <button
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  atelier: 'Mirpur Branch (Begum Rokeya Avenue)',
                }));
                const el = document.getElementById('locations-booking');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-xs font-bold uppercase tracking-wider text-black dark:text-white hover:underline flex items-center gap-2 cursor-pointer"
            >
              Reserve Mirpur ➔
            </button>
            <span className="text-[10px] font-mono text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded font-bold">
              Branch Atelier
            </span>
          </div>
        </div>

        {/* Card 3: WhatsApp Desk */}
        <div
          className="lg:col-span-4 bg-white dark:bg-[#141417] rounded-2xl border border-[#E5E4DE] dark:border-neutral-800 p-8 flex flex-col justify-between hover:border-black dark:hover:border-neutral-600 transition-all shadow-sm group"
          data-purpose="branch-card"
        >
          <div>
            <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-6 text-black dark:text-white font-bold">
              03
            </div>
            <h3 className="text-xl font-bold tracking-tight text-neutral-950 dark:text-white mb-2">
              Amoree WhatsApp Desk
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
              Direct 1-on-1 virtual shade matching, personalized bridal trials, and customized vanity inquiries.
            </p>
            <div className="space-y-2 py-4 border-t border-neutral-100 dark:border-neutral-800 text-xs font-mono text-neutral-700 dark:text-neutral-300">
              <div className="flex justify-between">
                <span className="text-neutral-500 dark:text-neutral-400">Response Time:</span>
                <span className="font-bold text-neutral-900 dark:text-white">&lt; 15 Minutes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 dark:text-neutral-400">Desk Hours:</span>
                <span className="text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded text-[10px] font-bold border border-emerald-200/50 dark:border-emerald-800/50">
                  Daily 10AM - 8:30PM
                </span>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800">
            <a
              className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-2"
              href="https://wa.me/8801764539621"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open WhatsApp Chat ➔
            </a>
          </div>
        </div>
      </div>

      {/* Atelier Scheduling Terminal Form */}
      <div
        className="bg-white dark:bg-[#141417] rounded-3xl border border-[#E5E4DE] dark:border-neutral-800 p-8 md:p-12 shadow-sm relative overflow-hidden transition-colors duration-300"
        id="locations-booking"
        data-purpose="appointment-booking-module"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-neutral-200 dark:border-neutral-800 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-1">
              <span className="w-2 h-2 rounded-full bg-black dark:bg-white animate-pulse"></span>
              <span>Atelier Scheduling Terminal</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Book an Exclusive Atelier Experience
            </h3>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono text-neutral-500 dark:text-neutral-400">
            <span className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
              Instant WhatsApp Confirmation
            </span>
            <span className="hidden sm:inline text-emerald-600 dark:text-emerald-400 font-semibold">• 0 Inquiry Fees</span>
          </div>
        </div>

        {/* Pre-selection alert tag if active */}
        {preselectedService && (
          <div className="mb-6 px-4 py-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex items-center justify-between text-xs text-amber-900 dark:text-amber-200">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>
                Pre-selected package: <strong className="font-bold">{preselectedService}</strong>
              </span>
            </div>
            {onClearPreselectedService && (
              <button
                type="button"
                onClick={onClearPreselectedService}
                className="text-amber-700 dark:text-amber-300 hover:underline font-mono text-[11px] cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label
                htmlFor="b-name"
                className="block text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2"
              >
                Full Name *
              </label>
              <input
                id="b-name"
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g., Anika Rahman"
                className="w-full text-xs font-sans px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-[#FAFAFA] dark:bg-[#1B1B1F] text-neutral-900 dark:text-white focus:bg-white dark:focus:bg-[#222227] focus:border-black dark:focus:border-neutral-400 focus:outline-none transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="b-phone"
                className="block text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2"
              >
                Phone / WhatsApp Number *
              </label>
              <input
                id="b-phone"
                required
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+880 1XXXXXXXXX"
                className="w-full text-xs font-sans px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-[#FAFAFA] dark:bg-[#1B1B1F] text-neutral-900 dark:text-white focus:bg-white dark:focus:bg-[#222227] focus:border-black dark:focus:border-neutral-400 focus:outline-none transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="b-atelier"
                className="block text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2"
              >
                Preferred Atelier *
              </label>
              <select
                id="b-atelier"
                required
                value={formData.atelier}
                onChange={(e) => setFormData({ ...formData, atelier: e.target.value })}
                className="w-full text-xs font-sans px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-[#FAFAFA] dark:bg-[#1B1B1F] text-neutral-900 dark:text-white focus:bg-white dark:focus:bg-[#222227] focus:border-black dark:focus:border-neutral-400 focus:outline-none transition-all"
              >
                <option value="Uttara Flagship Studio (Sector 3)">
                  Uttara Flagship Studio (Sector 3)
                </option>
                <option value="Mirpur Branch (Begum Rokeya Avenue)">
                  Mirpur Branch (Begum Rokeya Avenue)
                </option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label
                htmlFor="b-service"
                className="block text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2"
              >
                Service Category *
              </label>
              <select
                id="b-service"
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full text-xs font-sans px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-[#FAFAFA] dark:bg-[#1B1B1F] text-neutral-900 dark:text-white focus:bg-white dark:focus:bg-[#222227] focus:border-black dark:focus:border-neutral-400 focus:outline-none transition-all"
              >
                <option value="Bridal Couture Makeover &amp; Draping">
                  Bridal Couture Makeover &amp; Draping
                </option>
                <option value="Reception &amp; Event Glam Makeover">
                  Reception &amp; Event Glam Makeover
                </option>
                <option value="Hair Styling &amp; Balayage Coloring">
                  Hair Styling &amp; Balayage Coloring
                </option>
                <option value="Holistic Skin Care, Facial &amp; Spa">
                  Holistic Skin Care, Facial &amp; Spa
                </option>
                <option value="Royal Organic Henna Mehndi Artistry">
                  Royal Organic Henna Mehndi Artistry
                </option>
                <option value="Whitening Facial (3800 Tk)">
                  Whitening Facial (3800 Tk)
                </option>
                <option value="Silk Smooth Waxing (2219 Tk)">
                  Silk Smooth Waxing (2219 Tk)
                </option>
                <option value="Natural Glow Facial &amp; Keratin (2800 Tk)">
                  Natural Glow Facial &amp; Keratin (2800 Tk)
                </option>
                <option value="Korean Glow Facial (3430 Tk)">
                  Korean Glow Facial (3430 Tk)
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="b-date"
                className="block text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2"
              >
                Preferred Date *
              </label>
              <input
                id="b-date"
                required
                type="date"
                min={todayIso}
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full text-xs font-sans px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-[#FAFAFA] dark:bg-[#1B1B1F] text-neutral-900 dark:text-white focus:bg-white dark:focus:bg-[#222227] focus:border-black dark:focus:border-neutral-400 focus:outline-none transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="b-time"
                className="block text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2"
              >
                Preferred Time Slot *
              </label>
              <select
                id="b-time"
                required
                value={formData.timeSlot}
                onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                className="w-full text-xs font-sans px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-[#FAFAFA] dark:bg-[#1B1B1F] text-neutral-900 dark:text-white focus:bg-white dark:focus:bg-[#222227] focus:border-black dark:focus:border-neutral-400 focus:outline-none transition-all"
              >
                <option value="10:30 AM - 01:00 PM (Morning Slot)">
                  10:30 AM - 01:00 PM (Morning Slot)
                </option>
                <option value="01:30 PM - 04:30 PM (Afternoon Slot)">
                  01:30 PM - 04:30 PM (Afternoon Slot)
                </option>
                <option value="05:00 PM - 08:30 PM (Evening Slot)">
                  05:00 PM - 08:30 PM (Evening Slot)
                </option>
              </select>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-100 dark:border-neutral-800">
            <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 font-sans">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
              <span>Instant WhatsApp receipt confirmation · Zero inquiry deposit required</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href="https://wa.me/8801764539621"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#1B1B1F] hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-3.5 rounded-full text-xs font-semibold tracking-wide transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-200 text-white dark:text-black px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Request Appointment</span>
                <span>➔</span>
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Confirmation Feedback Modal */}
      {isSubmittedModalOpen && bookingConfirmation && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsSubmittedModalOpen(false)}
        >
          <div
            className="bg-white dark:bg-[#151518] rounded-3xl max-w-md w-full p-6 sm:p-8 border border-neutral-200 dark:border-neutral-800 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsSubmittedModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-800 dark:hover:text-white p-2 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 flex items-center justify-center mb-4">
              <Check className="w-6 h-6" />
            </div>

            <h4 className="text-xl font-bold text-neutral-950 dark:text-white mb-1">
              Appointment Request Sent!
            </h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-6">
              Our atelier concierge has received your details and WhatsApp message has been generated.
            </p>

            <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-4 space-y-2 text-xs font-mono text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-800 mb-6">
              <div className="flex justify-between border-b border-neutral-200 dark:border-neutral-800 pb-2">
                <span className="text-neutral-500 dark:text-neutral-400">Booking Ref:</span>
                <span className="font-bold text-neutral-950 dark:text-white">
                  {bookingConfirmation.bookingRef}
                </span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-neutral-500 dark:text-neutral-400">Client:</span>
                <span className="font-semibold text-neutral-900 dark:text-white">{bookingConfirmation.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 dark:text-neutral-400">Atelier:</span>
                <span className="font-semibold text-right max-w-[200px] text-neutral-900 dark:text-white">
                  {bookingConfirmation.atelier}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 dark:text-neutral-400">Service:</span>
                <span className="font-semibold text-right max-w-[200px] text-neutral-900 dark:text-white">
                  {bookingConfirmation.service}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 dark:text-neutral-400">Date &amp; Slot:</span>
                <span className="font-semibold text-neutral-900 dark:text-white">
                  {bookingConfirmation.date} ({bookingConfirmation.timeSlot.split(' ')[0]})
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsSubmittedModalOpen(false)}
              className="w-full bg-black dark:bg-white text-white dark:text-black text-xs font-semibold py-3 rounded-full uppercase tracking-wider hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
