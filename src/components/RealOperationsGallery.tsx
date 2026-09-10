import React, { useState } from 'react';
import { Camera, MapPin, CheckCircle2, Phone, Truck, X, ZoomIn, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Language, FieldOperation } from '../types';
import { UI_TRANSLATIONS } from '../translations';
import { FIELD_OPERATIONS, PHONE_NUMBER, WHATSAPP_URL } from '../data/scrapData';

interface RealOperationsGalleryProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const RealOperationsGallery: React.FC<RealOperationsGalleryProps> = ({ currentLang, onOpenBooking }) => {
  const t = UI_TRANSLATIONS[currentLang];
  const [selectedPhoto, setSelectedPhoto] = useState<FieldOperation | null>(null);
  const isAr = currentLang === 'ar';

  return (
    <section id="operations" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 right-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 left-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold mb-3">
            <Camera className="w-4 h-4 text-amber-400" />
            <span>{isAr ? 'توثيق ميداني حقيقي من أرض الواقع بجدة' : 'Real-Time Field Operations in Jeddah'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {t.operationsTitle}
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.operationsSub}
          </p>
        </div>

        {/* Real-time photos grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FIELD_OPERATIONS.map((op) => {
            const title = isAr ? op.titleAr : op.titleEn;
            const district = isAr ? op.districtAr : op.districtEn;
            const action = isAr ? op.actionAr : op.actionEn;
            const badge = isAr ? op.badgeAr : op.badgeEn;

            return (
              <div
                key={op.id}
                id={`field-op-${op.id}`}
                className="bg-slate-800/90 border border-slate-700/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-amber-500/50 transition duration-300 flex flex-col group"
              >
                {/* Image container */}
                <div
                  className="relative h-60 w-full overflow-hidden cursor-pointer bg-slate-950"
                  onClick={() => setSelectedPhoto(op)}
                >
                  <img
                    src={op.imageUrl}
                    alt={title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-black/30"></div>

                  {/* Top Badge */}
                  <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md border border-slate-700 text-amber-400 text-xs font-bold px-2.5 py-1 rounded-lg shadow">
                    {badge}
                  </div>

                  {/* District Pin */}
                  <div className="absolute top-3 left-3 bg-emerald-600/90 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 shadow">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{district}</span>
                  </div>

                  {/* Zoom prompt icon */}
                  <div className="absolute bottom-3 left-3 p-2 rounded-lg bg-slate-900/80 text-slate-300 opacity-0 group-hover:opacity-100 transition duration-200">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition leading-snug">
                      {title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {action}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>{isAr ? 'تم الاستلام والدفع كاش' : 'Completed & Cash Paid'}</span>
                    </div>

                    <button
                      type="button"
                      onClick={onOpenBooking}
                      className="text-xs font-bold text-amber-400 hover:text-amber-300 underline underline-offset-4"
                    >
                      {isAr ? 'طلب معاينة مماثلة' : 'Request Similar Pickup'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live reassurance bar under gallery */}
        <div className="mt-12 bg-slate-800/80 border border-slate-700 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-white">
                {isAr ? 'هل لديك سكراب أو مكيفات تود بيعها اليوم في جدة؟' : 'Have Scrap or Old ACs to Sell Today in Jeddah?'}
              </div>
              <div className="text-xs sm:text-sm text-slate-300 mt-0.5">
                {isAr ? 'سياراتنا متواجدة الآن في شمال ووسط وجنوب جدة - نصلك خلال أقل من ساعة مع كاش فوري' : 'Our fleet is operating right now across all Jeddah sectors - instant arrival & top cash'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-bold shadow-md transition"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>{isAr ? 'واتساب مباشر' : 'WhatsApp'}</span>
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm font-bold shadow-md transition"
            >
              <Phone className="w-4 h-4 fill-slate-950" />
              <span>{isAr ? 'اتصل الآن' : 'Call Dispatch'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox / Modal for previewing photo */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80 sm:h-96 w-full bg-black">
              <img
                src={selectedPhoto.imageUrl}
                alt={isAr ? selectedPhoto.titleAr : selectedPhoto.titleEn}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 p-2 bg-slate-900/80 hover:bg-slate-800 text-white rounded-full transition"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
                <MapPin className="w-4 h-4" />
                <span>{isAr ? selectedPhoto.districtAr : selectedPhoto.districtEn}</span>
                <span className="text-slate-500">•</span>
                <span className="text-emerald-400">{isAr ? selectedPhoto.badgeAr : selectedPhoto.badgeEn}</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                {isAr ? selectedPhoto.titleAr : selectedPhoto.titleEn}
              </h3>
              <p className="text-sm text-slate-300 mt-2">
                {isAr ? selectedPhoto.actionAr : selectedPhoto.actionEn}
              </p>

              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{isAr ? 'توثيق حقيقي من عملياتنا اليومية بجدة' : 'Verified daily operation in Jeddah'}</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedPhoto(null);
                    onOpenBooking();
                  }}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition"
                >
                  {isAr ? 'طلب دينا لمعاينة سكرابك' : 'Book Pickup for Your Scrap'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
