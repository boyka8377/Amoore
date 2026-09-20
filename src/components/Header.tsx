import React, { useState } from 'react';
import { Menu, X, MessageCircle, Phone, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onBookClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, setTheme } = useTheme();

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAFA]/95 dark:bg-[#0C0C0D]/95 backdrop-blur-md border-b border-[#EAE9E4] dark:border-neutral-800/80 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-baseline gap-2.5">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xl md:text-2xl font-extrabold tracking-[-0.05em] uppercase hover:opacity-80 transition-opacity text-black dark:text-white"
          >
            Amoree
          </a>
          <span className="text-xs font-semibold tracking-wider text-neutral-500 dark:text-neutral-400 font-bengali">
            আমোড়
          </span>
        </div>

        {/* Primary Desktop Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center space-x-8 text-[13px] font-medium tracking-tight text-neutral-800 dark:text-neutral-200"
        >
          <button
            onClick={() => scrollToSection('services')}
            className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('bridal')}
            className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            The Experience
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection('locations')}
            className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            Locations
          </button>
        </nav>

        {/* Action Buttons & Mood Toggle */}
        <div className="flex items-center space-x-2.5 sm:space-x-4">
          <a
            href="https://wa.me/8801764539621"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Concierge"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors py-1.5 px-3 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>+880 17 6453 9621</span>
          </a>

          <button
            onClick={onBookClick}
            className="inline-flex items-center justify-center bg-black dark:bg-white text-white dark:text-black px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow-sm cursor-pointer active:scale-95"
          >
            Book Appointment
          </button>

          {/* Day & Night Mood Button - Positioned on the side */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'day' ? 'night' : 'day'} mood`}
            title={`Current: ${theme === 'day' ? 'Day Mood' : 'Night Mood'} (Click to switch)`}
            className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#1A1A1E] text-neutral-800 dark:text-neutral-200 hover:border-black dark:hover:border-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all cursor-pointer shadow-xs active:scale-95 select-none"
          >
            {theme === 'day' ? (
              <Sun className="w-4 h-4 text-amber-500 fill-amber-500/20" />
            ) : (
              <Moon className="w-4 h-4 text-amber-300 fill-amber-300/20" />
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-lg text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#121214] border-b border-[#EAE9E4] dark:border-neutral-800 px-6 py-6 space-y-5 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Day & Night Mood Mobile Segmented Switch */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              Atmosphere Mood
            </div>
            <div className="flex items-center gap-1 bg-white dark:bg-neutral-900 p-1 rounded-full border border-neutral-200 dark:border-neutral-700">
              <button
                onClick={() => setTheme('day')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold transition-all ${
                  theme === 'day'
                    ? 'bg-amber-100 text-amber-900 shadow-xs'
                    : 'text-neutral-500 hover:text-black dark:hover:text-white'
                }`}
              >
                <Sun className="w-3.5 h-3.5 text-amber-600" />
                <span>Day</span>
              </button>
              <button
                onClick={() => setTheme('night')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold transition-all ${
                  theme === 'night'
                    ? 'bg-neutral-800 text-amber-200 shadow-xs'
                    : 'text-neutral-500 hover:text-black dark:hover:text-white'
                }`}
              >
                <Moon className="w-3.5 h-3.5 text-amber-300" />
                <span>Night</span>
              </button>
            </div>
          </div>

          <nav className="flex flex-col space-y-3 text-sm font-medium text-neutral-800 dark:text-neutral-200">
            <button
              onClick={() => scrollToSection('services')}
              className="text-left py-2 hover:text-black dark:hover:text-white border-b border-neutral-100 dark:border-neutral-800"
            >
              Services &amp; Packages
            </button>
            <button
              onClick={() => scrollToSection('bridal')}
              className="text-left py-2 hover:text-black dark:hover:text-white border-b border-neutral-100 dark:border-neutral-800"
            >
              The Bridal Experience
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-left py-2 hover:text-black dark:hover:text-white border-b border-neutral-100 dark:border-neutral-800"
            >
              Curated Portfolio
            </button>
            <button
              onClick={() => scrollToSection('locations')}
              className="text-left py-2 hover:text-black dark:hover:text-white border-b border-neutral-100 dark:border-neutral-800"
            >
              Ateliers &amp; Locations
            </button>
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://wa.me/8801764539621"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 px-4 py-3 rounded-xl text-xs font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Concierge (+880 17 6453 9621)</span>
            </a>
            <a
              href="tel:+8801764539621"
              className="inline-flex items-center justify-center gap-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 px-4 py-3 rounded-xl text-xs font-semibold"
            >
              <Phone className="w-4 h-4" />
              <span>Call Uttara Front Desk</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
