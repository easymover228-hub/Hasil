import React from 'react';
import { PhoneCall, Scale, Banknote, ShieldCheck, Truck, Clock, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../translations';
import { SECTION_IMAGES } from '../data/scrapData';

interface ProcessStepsProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({ currentLang, onOpenBooking }) => {
  const t = UI_TRANSLATIONS[currentLang];

  const steps = [
    {
      number: '01',
      icon: PhoneCall,
      title: t.step1Title,
      description: t.step1Desc,
      tag: 'اتصال أو واتساب سريع',
    },
    {
      number: '02',
      icon: Scale,
      title: t.step2Title,
      description: t.step2Desc,
      tag: 'ميزان ديجيتال فوري بموقعك',
    },
    {
      number: '03',
      icon: Banknote,
      title: t.step3Title,
      description: t.step3Desc,
      tag: 'كاش فوري في يدك',
    },
  ];

  return (
    <section id="steps" className="py-16 sm:py-20 bg-white border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-900 text-xs font-bold mb-3">
            <Clock className="w-3.5 h-3.5 text-emerald-700" />
            <span>{t.navSteps}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
            {t.stepsTitle}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {t.stepsSub}
          </p>
        </div>

        {/* Feature Visual Banner with Dyna Truck Image */}
        <div className="mb-10 rounded-2xl overflow-hidden bg-slate-900 text-white border border-slate-800 shadow-xl grid lg:grid-cols-12 items-center">
          <div className="p-6 sm:p-8 lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500 text-slate-950 text-xs font-black">
              <Truck className="w-3.5 h-3.5" />
              <span>خدمة النقل والعمالة مجانية 100% في جدة</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black">
              دينا مجهزة تصلك حتى باب بيتك أو مشروعك في جدة
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              لا داعي لاستئجار عمال أو شاحنة نقل. يتوجه إليك فريقنا فوراً مع الموازين الديجيتال، يقومون بفك المكيفات ورفع الحديد والنحاس وتنزيل السكراب وتحميله مجاناً، وتسليمك المبلغ كاش في يدك قبل التحرك.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>وزن دقيق أمام عينك</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>تسليم المبلغ كاش فوري</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 h-64 lg:h-full min-h-[240px] relative overflow-hidden">
            <img
              src={SECTION_IMAGES.pickupTruck}
              alt="سيارة دينا نقل سكراب بجدة"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t lg:bg-linear-to-r from-slate-900 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-amber-400 shadow-xs hover:shadow-lg transition flex flex-col justify-between"
              >
                {/* Step number badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 font-black text-xl flex items-center justify-center shadow-xs">
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <span className="text-3xl font-black text-slate-300">
                    {step.number}
                  </span>
                </div>

                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-white text-slate-700 text-[11px] font-bold mb-2 border border-slate-200">
                    {step.tag}
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>بدون أي عمولات أو خصم هللة واحدة</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA underneath steps */}
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base shadow-md transition"
          >
            <Truck className="w-5 h-5 text-amber-400" />
            <span>ابدأ الآن واطلب دينا للمعاينة والشراء كاش</span>
          </button>
        </div>

      </div>
    </section>
  );
};
