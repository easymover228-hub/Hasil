import React from 'react';
import { Truck, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../translations';
import { PHONE_NUMBER, DISPLAY_PHONE, WHATSAPP_URL } from '../data/scrapData';

interface FooterProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenBooking }) => {
  const t = UI_TRANSLATIONS[currentLang];

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-24 sm:pb-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-extrabold text-lg">
                  {t.brandName}
                </h3>
                <p className="text-xs text-amber-400">
                  {t.brandSub}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {t.footerAbout}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>دفع كاش فوري عند الاستلام - موازين معتمدة وبسكول</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm">
              أقسام الموقع
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#materials" className="hover:text-amber-400 transition">
                  {t.navMaterials}
                </a>
              </li>
              <li>
                <a href="#operations" className="hover:text-amber-400 transition font-bold text-amber-400">
                  {t.navOperations}
                </a>
              </li>
              <li>
                <a href="#steps" className="hover:text-amber-400 transition">
                  {t.navSteps}
                </a>
              </li>
              <li>
                <a href="#districts" className="hover:text-amber-400 transition">
                  {t.navDistricts}
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition">
                  {t.navWhyUs}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition">
                  {t.navFaq}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4 space-y-3.5">
            <h4 className="text-white font-bold text-sm">
              {t.contactInfo}
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{t.addressJeddah}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.workingHours}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${PHONE_NUMBER}`} dir="ltr" className="font-bold text-white hover:text-amber-400 transition">
                  {DISPLAY_PHONE}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] fill-[#25D366] shrink-0" />
                <a
                  href={`${WHATSAPP_URL}?text=${encodeURIComponent('السلام عليكم، أريد بيع سكراب في جدة')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#25D366] hover:text-emerald-300 transition"
                >
                  تواصل عبر الواتساب المباشر
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition"
              >
                {t.bookPickup}
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span>{t.copyright}</span>
            <span className="text-slate-700">|</span>
            <a href="https://webuyscrapjeddah.shop/" className="text-amber-500/90 hover:text-amber-400 font-semibold transition" dir="ltr">
              webuyscrapjeddah.shop
            </a>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>حديد سكراب جدة</span>
            <span>•</span>
            <span>نحاس ومكيفات خردة</span>
            <span>•</span>
            <span>هدم عمائر وهناجر</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
