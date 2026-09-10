import React from 'react';
import { Phone, Truck, CheckCircle2, Zap, ArrowRight, ArrowLeft, ShieldCheck, MapPin } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../translations';
import { PHONE_NUMBER, DISPLAY_PHONE, WHATSAPP_URL, SECTION_IMAGES } from '../data/scrapData';

interface HeroProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenBooking }) => {
  const t = UI_TRANSLATIONS[currentLang];
  const isRtl = currentLang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="top" className="relative bg-linear-to-b from-slate-950 via-slate-900 to-slate-900 text-white pt-8 pb-14 lg:pb-20 overflow-hidden">
      {/* Background visual atmosphere */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
            
            {/* Urgency / Area Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium">
              <Zap className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
              <span>جدة | أسطول دينا جاهز للتحرك الفوري لكافة الأحياء والمناطق الصناعية</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight sm:leading-tight">
              {currentLang === 'ar' ? (
                <>
                  شراء سكراب وخردة ومكيفات بجدة <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-200">كاش فوري ونقل مجاني</span>
                </>
              ) : (
                <>
                  Top Cash Buyer for Scrap Metal & Used ACs in <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-200">Jeddah</span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              {t.tagline}
            </p>

            {/* 4 Core Guarantees Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700/60 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.badgeCash}</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700/60 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.badgeFreePickup}</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700/60 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.badgeExactScale}</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700/60 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.badgeFastArrival}</span>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent('السلام عليكم، عندي سكراب أرغب ببيعه في جدة، كم السعر وكيف طريقة النقل؟')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-base shadow-lg shadow-emerald-950/40 transition transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
                <span>{t.whatsappChat}</span>
              </a>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base shadow-lg shadow-amber-950/30 transition transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 fill-slate-950" />
                <span>{t.callNow}</span>
              </a>

              <button
                type="button"
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition"
              >
                <Truck className="w-4 h-4 text-amber-400" />
                <span>{t.bookPickup}</span>
              </button>
            </div>

            {/* Instant contact note */}
            <div className="text-xs text-slate-400 flex items-center justify-center lg:justify-start gap-2 pt-1">
              <span>رقم المندوب المباشر بجدة:</span>
              <span dir="ltr" className="text-amber-400 font-bold tracking-wider">{DISPLAY_PHONE}</span>
              <span>(متاح 24 ساعة يومياً)</span>
            </div>
          </div>

          {/* Real Photo Showcase Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800 group">
              {/* Primary High Quality Hero Image */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src={SECTION_IMAGES.heroScrapYard}
                  alt="شراء سكراب بجدة ودينا نقل جاهزة"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                
                {/* Overlay Badges */}
                <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md border border-slate-700 text-amber-400 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-md">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>دفع كاش فوري قبل التحميل</span>
                </div>

                <div className="absolute top-3 left-3 bg-emerald-600/90 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>جدة 24/7</span>
                </div>

                {/* Bottom caption overlay */}
                <div className="absolute bottom-3 right-3 left-3 bg-slate-900/90 backdrop-blur-md rounded-xl p-3 border border-slate-700/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        <Truck className="w-4 h-4 text-amber-400" />
                        <span>سيارات دينا متواجدة بكافة أحياء جدة</span>
                      </div>
                      <div className="text-xs text-slate-300 mt-0.5">
                        فك مكيفات وتنزيل حديد وعمالة مجاناً بدون أي استقطاع
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={onOpenBooking}
                      className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-lg shrink-0 transition"
                    >
                      طلب دينا
                    </button>
                  </div>
                </div>
              </div>

              {/* Three Trust Pillars beneath image */}
              <div className="grid grid-cols-3 divide-x divide-slate-700/80 bg-slate-900/95 p-3 text-center text-xs">
                <div className="px-2">
                  <div className="font-bold text-amber-400">100% كاش</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">تسليم فوري باليد</div>
                </div>
                <div className="px-2">
                  <div className="font-bold text-emerald-400">0 ريال رسوم</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">النقل والعمال مجاناً</div>
                </div>
                <div className="px-2">
                  <div className="font-bold text-slate-200">30-60 دقيقة</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">سرعة وصول بجدة</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Stats counters at bottom of hero */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-6 border-t border-slate-800">
          <div className="text-center p-3.5 bg-slate-800/40 rounded-xl border border-slate-800">
            <div className="text-2xl sm:text-3xl font-black text-amber-400">{t.stat1Number}</div>
            <div className="text-xs text-slate-300 mt-1">{t.stat1Label}</div>
          </div>
          <div className="text-center p-3.5 bg-slate-800/40 rounded-xl border border-slate-800">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">{t.stat2Number}</div>
            <div className="text-xs text-slate-300 mt-1">{t.stat2Label}</div>
          </div>
          <div className="text-center p-3.5 bg-slate-800/40 rounded-xl border border-slate-800">
            <div className="text-2xl sm:text-3xl font-black text-amber-400">{t.stat3Number}</div>
            <div className="text-xs text-slate-300 mt-1">{t.stat3Label}</div>
          </div>
          <div className="text-center p-3.5 bg-slate-800/40 rounded-xl border border-slate-800">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">{t.stat4Number}</div>
            <div className="text-xs text-slate-300 mt-1">{t.stat4Label}</div>
          </div>
        </div>

      </div>
    </section>
  );
};
