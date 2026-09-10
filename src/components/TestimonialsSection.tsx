import React from 'react';
import { Star, MessageSquareQuote, MapPin, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../translations';
import { TESTIMONIALS } from '../data/scrapData';

interface TestimonialsSectionProps {
  currentLang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ currentLang }) => {
  const t = UI_TRANSLATIONS[currentLang];

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5 text-amber-700" />
            <span>{t.navReviews}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
            {t.testimonialsTitle}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {t.testimonialsSub}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(rev => {
            const author = currentLang === 'ar' ? rev.authorAr : rev.authorEn;
            const role = currentLang === 'ar' ? rev.roleAr : rev.roleEn;
            const district = currentLang === 'ar' ? rev.districtAr : rev.districtEn;
            const comment = currentLang === 'ar' ? rev.commentAr : rev.commentEn;
            const material = currentLang === 'ar' ? rev.materialAr : rev.materialEn;

            return (
              <div
                key={rev.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars & Verified tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                      ))}
                    </div>
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      كاش فوري
                    </span>
                  </div>

                  {/* Comment */}
                  <p className="text-slate-700 text-sm leading-relaxed mb-4 italic">
                    "{comment}"
                  </p>
                </div>

                {/* Author Details with Real Photo Avatar & Material Tag */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatarUrl}
                      alt={author}
                      referrerPolicy="no-referrer"
                      className="w-11 h-11 rounded-full object-cover border border-amber-200 shadow-2xs shrink-0"
                      loading="lazy"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-extrabold text-slate-900 text-sm truncate">
                        {author}
                      </div>
                      <div className="text-xs text-slate-500 truncate">
                        {role}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-50 text-[11px]">
                    <div className="flex items-center gap-1 text-slate-500">
                      <MapPin className="w-3 h-3 text-amber-600" />
                      <span>{district}</span>
                    </div>
                    <span className="font-bold text-amber-950 bg-amber-100/80 px-2 py-0.5 rounded">
                      {material}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
