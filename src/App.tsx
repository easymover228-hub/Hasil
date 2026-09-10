import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MaterialsSection } from './components/MaterialsSection';
import { RealOperationsGallery } from './components/RealOperationsGallery';
import { ProcessSteps } from './components/ProcessSteps';
import { JeddahDistricts } from './components/JeddahDistricts';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { PickupBookingModal } from './components/PickupBookingModal';
import { FloatingActionBar } from './components/FloatingActionBar';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('jeddah_scrap_lang');
    return (saved === 'en' || saved === 'ar') ? saved : 'ar';
  });

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedMaterialForBooking, setSelectedMaterialForBooking] = useState<string | undefined>(undefined);
  const [selectedDistrictForBooking, setSelectedDistrictForBooking] = useState<string | undefined>(undefined);

  // Sync document direction and language code when language changes
  useEffect(() => {
    localStorage.setItem('jeddah_scrap_lang', currentLang);
    document.documentElement.lang = currentLang;
    if (currentLang === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [currentLang]);

  const handleOpenBooking = () => {
    setSelectedMaterialForBooking(undefined);
    setSelectedDistrictForBooking(undefined);
    setIsBookingOpen(true);
  };

  const handleSelectMaterial = (materialName: string) => {
    setSelectedMaterialForBooking(materialName);
    setIsBookingOpen(true);
  };

  const handleSelectDistrict = (districtName: string) => {
    setSelectedDistrictForBooking(districtName);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Header */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
        />

        <MaterialsSection
          currentLang={currentLang}
          onSelectMaterialForBooking={handleSelectMaterial}
        />

        <RealOperationsGallery
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
        />

        <ProcessSteps
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
        />

        <JeddahDistricts
          currentLang={currentLang}
          onSelectDistrictForBooking={handleSelectDistrict}
        />

        <WhyChooseUs
          currentLang={currentLang}
        />

        <TestimonialsSection
          currentLang={currentLang}
        />

        <FaqSection
          currentLang={currentLang}
        />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenBooking={handleOpenBooking}
      />

      {/* Persistent Floating Action Bar */}
      <FloatingActionBar
        currentLang={currentLang}
        onOpenBooking={handleOpenBooking}
      />

      {/* Booking / Valuation Modal */}
      <PickupBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        currentLang={currentLang}
        initialMaterial={selectedMaterialForBooking}
        initialDistrict={selectedDistrictForBooking}
      />
    </div>
  );
}
