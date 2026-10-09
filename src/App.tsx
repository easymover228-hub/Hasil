import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { UI_TRANSLATIONS } from './translations';
import { trackConversion } from './data/scrapData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MaterialsSection } from './components/MaterialsSection';
import { RealOperationsGallery } from './components/RealOperationsGallery';
import { ProcessSteps } from './components/ProcessSteps';
import { JeddahDistricts } from './components/JeddahDistricts';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { SeoAuthoritySection } from './components/SeoAuthoritySection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { PickupBookingModal } from './components/PickupBookingModal';
import { FloatingActionBar } from './components/FloatingActionBar';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang === 'en' || urlLang === 'ar') {
      return urlLang;
    }
    const saved = localStorage.getItem('jeddah_scrap_lang');
    return (saved === 'en' || saved === 'ar') ? saved : 'ar';
  });

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedMaterialForBooking, setSelectedMaterialForBooking] = useState<string | undefined>(undefined);
  const [selectedDistrictForBooking, setSelectedDistrictForBooking] = useState<string | undefined>(undefined);

  // Sync document direction, language code, and SEO title/description when language changes
  useEffect(() => {
    localStorage.setItem('jeddah_scrap_lang', currentLang);
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    const t = UI_TRANSLATIONS[currentLang];
    document.title = t.siteTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t.siteDescription);
    }
  }, [currentLang]);

  // Global listener to track Google Ads conversion on any Call (tel:) or WhatsApp (wa.me) link click
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href') || '';
        if (href.startsWith('tel:') || href.includes('wa.me')) {
          trackConversion();
        }
      }
    };
    document.addEventListener('click', handleGlobalClick, true);
    return () => document.removeEventListener('click', handleGlobalClick, true);
  }, []);

  const handleOpenBooking = () => {
    trackConversion();
    setSelectedMaterialForBooking(undefined);
    setSelectedDistrictForBooking(undefined);
    setIsBookingOpen(true);
  };

  const handleSelectMaterial = (materialName: string) => {
    trackConversion();
    setSelectedMaterialForBooking(materialName);
    setIsBookingOpen(true);
  };

  const handleSelectDistrict = (districtName: string) => {
    trackConversion();
    setSelectedDistrictForBooking(districtName);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-slate-50 text-slate-900 flex flex-col font-sans">
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

        <SeoAuthoritySection
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
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
