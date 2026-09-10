import React from 'react';
import { Banknote, Scale, Truck, Award, ShieldCheck, Clock3, Wrench, FileText, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../translations';
import { SECTION_IMAGES } from '../data/scrapData';

interface WhyChooseUsProps {
  currentLang: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ currentLang }) => {
  const t = UI_TRANSLATIONS[currentLang];

  const benefits = [
    {
      icon: Banknote,
      title: t.why2Title,
      description: t.why2Desc,
      tag: 'أمانة تامة',
    },
    {
      icon: Award,
      title: t.why1Title,
      description: t.why1Desc,
      tag: 'أعلى تسعير كاش',
    },
    {
      icon: Truck,
      title: t.why3Title,
      description: t.why3Desc,
      tag: 'نقل مجاني',
    },
    {
      icon: Scale,
      title: t.why4Title,
      description: t.why4Desc,
      tag: 'موازين ديجيتال',
    },
    {
      icon: Wrench,
      title: 'عمالة فك متخصصة للمكيفات والهياكل',
      description: 'فريق فني متمرس يقوم بفك وحدات التكييف المركزية والسبليت بدون إتلاف الجدران، وتفكيك الهناجر والمطابخ بأمان.',
      tag: 'فك احترافي',
    },
    {
      icon: FileText,
      title: 'سندات قبض وفواتير نظامية للشركات',
      description: 'نوفر فواتير وسندات استلام رسمية للمؤسسات والشركات والمصانع متوافقة مع متطلبات الرقابة والبلدية بجدة.',
      tag: 'معتمد للشركات',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-bold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.navWhyUs}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            {t.whyTitle}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            خدمات متكاملة تضمن لك أعلى عائد مالي وأسرع إنجاز في جدة
          </p>
        </div>

        {/* Certified Scale & Industrial Transparency Showcase with Image */}
        <div className="mb-12 rounded-2xl overflow-hidden bg-slate-800/90 border border-slate-700 shadow-xl grid lg:grid-cols-12 items-center">
          <div className="p-6 sm:p-8 lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
              <Scale className="w-3.5 h-3.5" />
              <span>موازين ديجيتال معتمدة وبسكول للشاحنات</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              أمانة مطلقة في الوزن ودفع فوري قبل التحريك
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              نلتزم بأعلى معايير المصداقية؛ يتم وزن جميع أنواع المعادن والأجهزة أمام عينك باستخدام موازين إلكترونية رقمية دقيقة تم فحصها ومعايرتها دورياً. للأوزان الثقيلة ومخلفات الهدم بالأطنان، نوفر موازين بسكول معتمدة بجدة مع تزويدك بكرت الوزن الرسمي واستلام مستحقاتك نقداً فوراً.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mb-1" />
                <span className="font-bold text-white block">ميزان رقمي دقيق</span>
                <span className="text-[11px] text-slate-400">بدون أي تلاعب</span>
              </div>
              <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-700">
                <CheckCircle2 className="w-4 h-4 text-amber-400 mb-1" />
                <span className="font-bold text-white block">كاش فوري 100%</span>
                <span className="text-[11px] text-slate-400">نقداً في يدك</span>
              </div>
              <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mb-1" />
                <span className="font-bold text-white block">شهادات فواتير</span>
                <span className="text-[11px] text-slate-400">نظامية للشركات</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 h-64 lg:h-full min-h-[260px] relative overflow-hidden">
            <img
              src={SECTION_IMAGES.weighingScale}
              alt="موازين ديجيتال معتمدة لسكراب جدة"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t lg:bg-linear-to-r from-slate-800 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-800/80 border border-slate-700/80 hover:border-amber-500/60 rounded-2xl p-6 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-300 bg-slate-700/60 px-2.5 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-700/60 flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
                  <Clock3 className="w-3.5 h-3.5" />
                  <span>خدمة سريعة في أقل من ساعة</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
