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
    <header className="sticky top-0 z-40 w-full max-w-full overflow-x-hidden bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top micro bar for trust & live rates */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-3 sm:px-4 w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold min-w-0">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="truncate">{t.liveRatesBadge}</span>
            </span>
            <span className="hidden lg:inline-block text-slate-500 shrink-0">|</span>
            <span className="hidden lg:flex items-center gap-1 text-slate-300 shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              {t.badgeCash}
            </span>
            <span className="hidden xl:flex items-center gap-1 text-slate-300 shrink-0">
              <Scale className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              {t.badgeExactScale}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="hidden md:inline text-slate-300 text-xs">جدة - كافة الأحياء 24/7</span>
            {/* High-Visibility Green Language Switcher */}
            <div className="flex items-center gap-1 bg-emerald-950/90 border-2 border-emerald-500 rounded-xl p-0.5 sm:p-1 shadow-md shadow-emerald-950/50 shrink-0">
              <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 ms-1 hidden sm:inline" />
              <button
                type="button"
                onClick={() => onLanguageChange('ar')}
                className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-extrabold transition cursor-pointer ${
                  currentLang === 'ar'
                    ? 'bg-emerald-500 text-white shadow-sm ring-1 ring-emerald-300'
                    : 'bg-emerald-900/60 text-emerald-100 hover:bg-emerald-700 hover:text-white'
                }`}
              >
                🇸🇦 عربي
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-extrabold transition cursor-pointer ${
                  currentLang === 'en'
                    ? 'bg-emerald-500 text-white shadow-sm ring-1 ring-emerald-300'
                    : 'bg-emerald-900/60 text-emerald-100 hover:bg-emerald-700 hover:text-white'
                }`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 flex items-center justify-between gap-2">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-2.5 sm:gap-3 group min-w-0 flex-1 lg:flex-initial">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xl shadow-md shrink-0 group-hover:scale-105 transition">
            <Truck className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
          </div>
          <div className="min-w-0">
            <div className="font-extrabold text-slate-900 text-sm sm:text-lg lg:text-xl leading-tight truncate">
              {t.brandName}
            </div>
            <div className="text-[11px] sm:text-xs text-amber-700 font-semibold tracking-wide truncate max-w-[210px] sm:max-w-xs md:max-w-md">
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
