import React, { useState } from 'react';
import { 
  Boxes, CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, 
  Truck
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../translations';
import { SCRAP_MATERIALS, WHATSAPP_URL, SECTION_IMAGES } from '../data/scrapData';

interface MaterialsSectionProps {
  currentLang: Language;
  onSelectMaterialForBooking: (materialName: string) => void;
}

export const MaterialsSection: React.FC<MaterialsSectionProps> = ({ currentLang, onSelectMaterialForBooking }) => {
  const t = UI_TRANSLATIONS[currentLang];
  const isRtl = currentLang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: t.filterAll },
    { id: 'metal', label: t.filterMetals },
    { id: 'appliances', label: t.filterAppliances },
    { id: 'batteries', label: t.filterBatteries },
    { id: 'demolition', label: t.filterDemolition },
  ];

  const filteredMaterials = activeCategory === 'all' 
    ? SCRAP_MATERIALS 
    : SCRAP_MATERIALS.filter(m => m.category === activeCategory);

  return (
    <section id="materials" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-bold mb-3 border border-amber-200">
            <Boxes className="w-3.5 h-3.5 text-amber-700" />
            <span>{t.navMaterials}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
            {t.materialsTitle}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {t.materialsSub}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Materials Grid with real photos for each material */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaterials.map(mat => {
            const name = currentLang === 'ar' ? mat.nameAr : mat.nameEn;
            const desc = currentLang === 'ar' ? mat.descriptionAr : mat.descriptionEn;
            const features = currentLang === 'ar' ? mat.featuresAr : mat.featuresEn;

            return (
              <div
                key={mat.id}
                className="group relative bg-white border border-slate-200 hover:border-amber-400 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition flex flex-col justify-between"
              >
                <div>
                  {/* Real Image of Scrap Material */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={mat.imageUrl}
                      alt={name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Top Badges */}
                    <div className="absolute top-3 right-3 left-3 flex items-center justify-between pointer-events-none">
                      {mat.popular ? (
                        <span className="px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 text-xs font-black shadow-md">
                          مطلوب كاش فوري
                        </span>
                      ) : <span />}
                      <span className="px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-xs text-white text-xs font-semibold">
                        جدة
                      </span>
                    </div>

                    {/* Material Title overlay at bottom of photo */}
                    <div className="absolute bottom-2.5 right-3 left-3 text-white">
                      <h3 className="font-extrabold text-base sm:text-lg leading-snug drop-shadow-md">
                        {name}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 sm:p-5">
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {desc}
                    </p>

                    {/* Features list (replacing price numbers) */}
                    <div className="space-y-1.5 mb-2">
                      {features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer without fixed prices */}
                <div className="p-4 sm:p-5 pt-0">
                  <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectMaterialForBooking(name)}
                      className="w-full py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-xs"
                    >
                      <Truck className="w-3.5 h-3.5" />
                      <span>طلب دينا</span>
                      <ArrowIcon className="w-3 h-3" />
                    </button>

                    <a
                      href={`${WHATSAPP_URL}?text=${encodeURIComponent(`السلام عليكم، أرغب ببيع (${name}) في جدة، كم السعر الحالي لديكم؟`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-xs"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                      <span>واتساب فوري</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Commercial Demolition & Bulk Section Banner with image */}
        <div className="mt-12 bg-linear-to-r from-slate-950 via-slate-900 to-slate-900 rounded-2xl overflow-hidden border border-slate-800 text-white shadow-xl">
          <div className="grid md:grid-cols-12 items-center">
            <div className="p-6 sm:p-8 md:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/20 text-amber-400 text-xs font-bold border border-amber-500/30">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>عقود معتمدة للمقاولين والمستودعات والشركات</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-white">
                شراء سكراب مشاريع الهدم، المصانع، والهناجر بالأطنان
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                نوفر معدات ثقيلة، تريلات وقلابات، وموازين بسكول معتمدة مع عقود شراء رسمية وسداد كاش فوري في موقعك بجدة.
              </p>
              
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`${WHATSAPP_URL}?text=${encodeURIComponent('السلام عليكم، لدينا مشروع هدم / كمية سكراب كبيرة في جدة ونرغب بتسعير رسمي ومعاينة ميدانية.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm shadow-md transition flex items-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-slate-950" />
                  <span>معاينة وتسعير كميات كبيرة</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-4 h-56 md:h-full min-h-[220px] relative overflow-hidden">
              <img
                src={SECTION_IMAGES.demolitionExcavator}
                alt="سكراب مشاريع الهدم والمصانع في جدة"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-slate-950 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
