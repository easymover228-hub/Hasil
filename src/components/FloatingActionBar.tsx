import React from 'react';
import { Phone, Truck } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../translations';
import { PHONE_NUMBER, DISPLAY_PHONE, WHATSAPP_URL, trackConversion } from '../data/scrapData';

interface FloatingActionBarProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({ currentLang, onOpenBooking }) => {
  const t = UI_TRANSLATIONS[currentLang];

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 sm:py-3 shadow-2xl">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-2 sm:gap-4 px-2">
        
        {/* Call button */}
        <a
          href={`tel:${PHONE_NUMBER}`}
          onClick={() => trackConversion()}
          className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-xs sm:text-sm border border-slate-700 transition"
        >
          <Phone className="w-4 h-4 text-emerald-400 fill-emerald-400 shrink-0" />
          <span className="truncate">{t.callNow}</span>
        </a>

        {/* WhatsApp button with authentic WhatsApp logo */}
        <a
          href={`${WHATSAPP_URL}?text=${encodeURIComponent('السلام عليكم، عندي سكراب في جدة وأرغب بالمعاينة والتسعير كاش')}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackConversion()}
          className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs sm:text-sm shadow-md transition"
        >
          <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
          <span className="truncate">{t.whatsappChat}</span>
        </a>

        {/* Book Pickup Button */}
        <button
          type="button"
          onClick={() => {
            trackConversion();
            onOpenBooking();
          }}
          className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-md transition"
        >
          <Truck className="w-4 h-4 shrink-0" />
          <span className="truncate">{t.bookPickup}</span>
        </button>

      </div>
    </div>
  );
};
