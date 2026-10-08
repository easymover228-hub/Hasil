import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Phone, MessageSquare } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../translations';
import { FAQS, PHONE_NUMBER, DISPLAY_PHONE, WHATSAPP_URL, SECTION_IMAGES } from '../data/scrapData';

interface FaqSectionProps {
  currentLang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ currentLang }) => {
  const t = UI_TRANSLATIONS[currentLang];
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white border-b border-slate-200 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold mb-3 border border-slate-200">
            <HelpCircle className="w-3.5 h-3.5 text-slate-700" />
            <span>{t.navFaq}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
            {t.faqTitle}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {t.faqSub}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* FAQs Accordion Column */}
          <div className="lg:col-span-7 space-y-3">
            {FAQS.map(item => {
              const isOpen = openId === item.id;
              const question = currentLang === 'ar' ? item.questionAr : item.questionEn;
              const answer = currentLang === 'ar' ? item.answerAr : item.answerEn;

              return (
                <div
                  key={item.id}
                  className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden shadow-2xs transition"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleFaq(item.id)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-start font-bold text-slate-900 hover:text-amber-700 transition gap-4"
                  >
                    <h3 className="text-sm sm:text-base font-bold">{question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-amber-600' : ''
                      }`}
                    />
                  </button>

                  <div
                    className={`px-4 pb-5 sm:px-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/80 pt-3 ${
                      isOpen ? 'block' : 'hidden'
                    }`}
                  >
                    {answer}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Visual Support Card with Image */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 text-white rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
              <div className="h-48 relative overflow-hidden">
                <img
                  src={SECTION_IMAGES.demolitionExcavator}
                  alt="استشارات سكراب وهدم بجدة"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                <div className="absolute bottom-3 right-3 left-3">
                  <span className="px-2 py-0.5 rounded-md bg-amber-500 text-slate-950 text-xs font-black">
                    مندوب جدة متواجد الآن
                  </span>
                  <h4 className="text-white font-extrabold text-base mt-1 drop-shadow-sm">
                    لديك استفسار خاص أو كمية كبيرة؟
                  </h4>
                </div>
              </div>

              <div className="p-5 space-y-4">
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  تواصل معنا مباشرة عبر الواتساب أو الهاتف، وأرسل صور السكراب المتوفر لديك وسنقوم بتقديم تقييم مجاني فوري وتحديد موعد حضور الدينا.
                </p>

                <div className="space-y-2 pt-1">
                  <a
                    href={`${WHATSAPP_URL}?text=${encodeURIComponent('السلام عليكم، لدي استفسار بخصوص بيع سكراب في جدة')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-white" />
                    <span>محادثة واتساب سريعة</span>
                  </a>

                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm transition"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span dir="ltr">{DISPLAY_PHONE}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
