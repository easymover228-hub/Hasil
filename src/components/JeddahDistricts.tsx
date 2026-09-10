import React, { useState } from 'react';
import { MapPin, Search, Clock, CheckCircle2, Truck, Navigation } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../translations';
import { JEDDAH_DISTRICTS, SECTION_IMAGES } from '../data/scrapData';

interface JeddahDistrictsProps {
  currentLang: Language;
  onSelectDistrictForBooking: (districtName: string) => void;
}

export const JeddahDistricts: React.FC<JeddahDistrictsProps> = ({ currentLang, onSelectDistrictForBooking }) => {
  const t = UI_TRANSLATIONS[currentLang];
  const [searchTerm, setSearchTerm] = useState('');
  const [activeZone, setActiveZone] = useState('all');

  const zones = [
    { id: 'all', label: t.allZones },
    { id: 'north', label: t.zoneNorth, matcher: 'شمال' },
    { id: 'central', label: t.zoneCentral, matcher: 'وسط' },
    { id: 'south', label: t.zoneSouth, matcher: 'جنوب' },
    { id: 'east', label: t.zoneEast, matcher: 'شرق' },
  ];

  const filteredDistricts = JEDDAH_DISTRICTS.filter(d => {
    const searchLower = searchTerm.toLowerCase().trim();
    const matchesSearch = !searchTerm || 
      d.nameAr.toLowerCase().includes(searchLower) ||
      d.nameEn.toLowerCase().includes(searchLower);

    if (!matchesSearch) return false;
    if (activeZone === 'all') return true;
    const currentZoneObj = zones.find(z => z.id === activeZone);
    if (!currentZoneObj || !currentZoneObj.matcher) return true;
    return d.zoneAr.includes(currentZoneObj.matcher);
  });

  return (
    <section id="districts" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
            <span>{t.navDistricts}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
            {t.districtsTitle}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {t.districtsSub}
          </p>
        </div>

        {/* Jeddah City Fleet & Logistics Visual Banner */}
        <div className="mb-10 rounded-2xl overflow-hidden bg-slate-900 text-white border border-slate-800 shadow-xl grid lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 h-56 lg:h-full min-h-[220px] relative overflow-hidden order-2 lg:order-1">
            <img
              src={SECTION_IMAGES.jeddahFleet}
              alt="تغطية أحياء مدينة جدة لخدمة شراء السكراب"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t lg:bg-linear-to-l from-slate-900 via-transparent to-transparent"></div>
          </div>

          <div className="p-6 sm:p-8 lg:col-span-7 space-y-3 order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
              <Navigation className="w-3.5 h-3.5" />
              <span>سرعة استجابة في كافة قطاعات جدة</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black">
              أسطول دينا متمركز في شمال، وسط، وجنوب جدة
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              سواء كنت في الحمدانية، الصفا، الروضة، أبحر، أو منطقة الخمرة والصناعية، نصلك أينما كنت بسيارة دينا مجهزة وميزان معتمد، مع تحمل كامل تكاليف التنزيل والتحميل مجاناً.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-amber-300 font-semibold">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>متوسط وقت الوصول: 30 إلى 60 دقيقة فقط من تأكيد الطلب</span>
            </div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-2xl mx-auto mb-8 space-y-3">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute start-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t.searchDistrictPlaceholder}
              className="w-full ps-11 pe-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm font-medium focus:ring-2 focus:ring-amber-500 transition shadow-2xs"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute end-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 font-bold"
              >
                مسح
              </button>
            )}
          </div>

          {/* Zone Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
            {zones.map(z => (
              <button
                key={z.id}
                type="button"
                onClick={() => setActiveZone(z.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                  activeZone === z.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {z.label}
              </button>
            ))}
          </div>
        </div>

        {/* Free Service Notice Badge */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            {t.freeServiceNotice}
          </span>
        </div>

        {/* Districts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredDistricts.map(district => {
            const name = currentLang === 'ar' ? district.nameAr : district.nameEn;
            const zone = currentLang === 'ar' ? district.zoneAr : district.zoneEn;

            return (
              <div
                key={district.id}
                className="bg-white border border-slate-200 hover:border-amber-400 rounded-xl p-4 transition shadow-2xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-[11px] font-semibold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded">
                      {zone}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                      <Clock className="w-3 h-3 text-emerald-600" />
                      {district.deliveryTimeMins} {t.mins}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-sm mb-1">
                    {name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    دينا جاهزة للتحميل الفوري
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectDistrictForBooking(name)}
                  className="mt-3 w-full py-1.5 px-3 rounded-lg bg-slate-50 hover:bg-amber-500 border border-slate-200 hover:border-amber-500 text-slate-800 hover:text-slate-950 text-xs font-bold transition flex items-center justify-center gap-1.5"
                >
                  <Truck className="w-3.5 h-3.5" />
                  <span>طلب دينا لهذا الحي</span>
                </button>
              </div>
            );
          })}
        </div>

        {filteredDistricts.length === 0 && (
          <div className="text-center py-10 bg-white rounded-2xl border border-slate-200 shadow-2xs">
            <p className="text-slate-600 text-sm font-semibold">
              لم نعثر على نتائج مطابقة لـ "{searchTerm}"، ولكننا نغطي جميع أحياء جدة بلا استثناء!
            </p>
            <button
              type="button"
              onClick={() => onSelectDistrictForBooking(searchTerm || 'جدة')}
              className="mt-3 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold transition"
            >
              طلب دينا لهذا الموقع
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
