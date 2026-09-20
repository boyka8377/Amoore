import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { ReservationSplitSection } from './components/ReservationSplitSection';
import { PortfolioGallery3D } from './components/PortfolioGallery3D';
import { LocationsAndBooking } from './components/LocationsAndBooking';
import { MapAndCtaSection } from './components/MapAndCtaSection';
import { Footer } from './components/Footer';
import { ServicePackage } from './types';

export default function App() {
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const scrollToBooking = (service?: string) => {
    if (service) {
      setPreselectedService(service);
    }
    const element = document.getElementById('locations-booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReserveService = (pkg: ServicePackage) => {
    scrollToBooking(`${pkg.title} (${pkg.price})`);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-[#FAFAFA] dark:bg-[#0B0B0C] text-[#111111] dark:text-[#EAEAEA] transition-colors duration-300">
        {/* Top Navigation */}
        <Header onBookClick={() => scrollToBooking()} />

        {/* Main Page Flow */}
        <main className="flex-1">
          {/* Section 1: Hero Stepped Showcase Carousel */}
          <HeroSection
            onSelectService={(service) => scrollToBooking(service)}
            onGetStarted={() => scrollToBooking()}
          />

          {/* Section 2: Services Carousel & Categorization */}
          <ServicesSection onReserve={handleReserveService} />

          {/* Anchor for The Experience / Foundation */}
          <div id="foundation" className="h-0" />

          {/* Section 3: Reservation Engine & Editorial Copy */}
          <ReservationSplitSection
            onExploreBridal={() => scrollToBooking('Bridal Couture Makeover & Draping')}
          />

          {/* Section 4: Curated Portfolio Archive */}
          <PortfolioGallery3D
            onBookService={(lookName) => scrollToBooking(`Look Style: ${lookName}`)}
          />

          {/* Section 5: Ateliers & Interactive Scheduling Terminal */}
          <LocationsAndBooking
            preselectedService={preselectedService}
            onClearPreselectedService={() => setPreselectedService(undefined)}
          />

          {/* Section 6: Pre-Footer CTA & Interactive Google Maps Studio Showcase */}
          <MapAndCtaSection onRequestAppointment={() => scrollToBooking()} />
        </main>

        {/* Complete Responsive Footer */}
        <Footer
          onNavClick={scrollToSection}
          onServiceClick={(service) => scrollToBooking(service)}
        />
      </div>
    </ThemeProvider>
  );
}
