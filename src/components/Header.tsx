import React, { useState } from 'react';
import { Phone, Truck, Menu, X, ShieldCheck, Scale, Globe } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../translations';
import { PHONE_NUMBER, DISPLAY_PHONE, WHATSAPP_URL } from '../data/scrapData';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentLang, onLanguageChange, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = UI_TRANSLATIONS[currentLang];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top micro bar for trust & live rates */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-amber-400 font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {t.liveRatesBadge}
            </span>
            <span className="hidden sm:inline-block text-slate-500">|</span>
            <span className="hidden sm:flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              {t.badgeCash}
            </span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <Scale className="w-3.5 h-3.5 text-amber-400" />
              {t.badgeExactScale}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-300 text-xs">جدة - كافة الأحياء 24/7</span>
            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-slate-800 rounded-md p-0.5 text-xs">
              <Globe className="w-3 h-3 text-slate-400 ml-1 mr-1" />
              <button
                type="button"
                onClick={() => onLanguageChange('ar')}
                className={`px-2 py-0.5 rounded transition font-medium ${currentLang === 'ar' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
              >
                عربي
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-0.5 rounded transition font-medium ${currentLang === 'en' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xl shadow-md group-hover:scale-105 transition">
            <Truck className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <div className="font-extrabold text-slate-900 text-lg sm:text-xl leading-tight">
              {t.brandName}
            </div>
            <div className="text-xs text-amber-700 font-semibold tracking-wide">
              {t.brandSub}
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
          <a href="#materials" className="hover:text-amber-600 transition">{t.navMaterials}</a>
          <a href="#operations" className="hover:text-amber-600 transition font-bold text-amber-700">{t.navOperations}</a>
          <a href="#steps" className="hover:text-amber-600 transition">{t.navSteps}</a>
          <a href="#districts" className="hover:text-amber-600 transition">{t.navDistricts}</a>
          <a href="#why-us" className="hover:text-amber-600 transition">{t.navWhyUs}</a>
          <a href="#faq" className="hover:text-amber-600 transition">{t.navFaq}</a>
        </nav>

        {/* Call-to-actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 font-semibold text-sm transition"
          >
            <Phone className="w-4 h-4 text-emerald-600 fill-emerald-600" />
            <span dir="ltr">{DISPLAY_PHONE}</span>
          </a>

          <a
            href={`${WHATSAPP_URL}?text=${encodeURIComponent('السلام عليكم، أريد بيع سكراب في جدة، الرجاء إرسال مندوب للمعاينة')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-sm transition"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>{t.whatsappChat}</span>
          </a>

          <button
            type="button"
            onClick={onOpenBooking}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-sm transition"
          >
            <Truck className="w-4 h-4" />
            <span>{t.bookPickup}</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200"
            aria-label="Call"
          >
            <Phone className="w-5 h-5 fill-emerald-600" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-100 text-slate-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-900 text-white font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>{t.callNow}</span>
            </a>
            <a
              href={`${WHATSAPP_URL}?text=${encodeURIComponent('السلام عليكم، أريد بيع سكراب في جدة')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#25D366] text-white font-bold text-sm"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>{t.whatsappChat}</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-sm shadow-xs"
          >
            <Truck className="w-4 h-4" />
            <span>{t.bookPickup}</span>
          </button>

          <nav className="pt-2 border-t border-slate-100 flex flex-col gap-2 text-slate-700 font-medium text-sm">
            <a
              href="#materials"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 px-2 hover:bg-slate-50 rounded"
            >
              {t.navMaterials}
            </a>
            <a
              href="#operations"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 px-2 hover:bg-slate-50 rounded font-bold text-amber-700"
            >
              {t.navOperations}
            </a>
            <a
              href="#steps"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 px-2 hover:bg-slate-50 rounded"
            >
              {t.navSteps}
            </a>
            <a
              href="#districts"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 px-2 hover:bg-slate-50 rounded"
            >
              {t.navDistricts}
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 px-2 hover:bg-slate-50 rounded"
            >
              {t.navWhyUs}
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 px-2 hover:bg-slate-50 rounded"
            >
              {t.navFaq}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
