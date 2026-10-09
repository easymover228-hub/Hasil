import React, { useState, useEffect } from 'react';
import { X, Truck, Phone, User, MapPin, Calendar, Camera, CheckCircle2, AlertCircle } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Language, PickupBooking } from '../types';
import { UI_TRANSLATIONS } from '../translations';
import { JEDDAH_DISTRICTS, WHATSAPP_URL, PHONE_NUMBER, trackConversion } from '../data/scrapData';

interface PickupBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  initialMaterial?: string;
  initialDistrict?: string;
}

export const PickupBookingModal: React.FC<PickupBookingModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  initialMaterial,
  initialDistrict,
}) => {
  const t = UI_TRANSLATIONS[currentLang];

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState(initialDistrict || 'الصفا والمروة');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [notes, setNotes] = useState('');
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Synchronize initial values when modal opens
  useEffect(() => {
    if (initialDistrict) {
      setDistrict(initialDistrict);
    }
    if (initialMaterial && !selectedCategories.includes(initialMaterial)) {
      setSelectedCategories([initialMaterial]);
    }
  }, [initialDistrict, initialMaterial, isOpen]);

  if (!isOpen) return null;

  const categoriesOptions = [
    'حديد وسكراب ثقيل',
    'نحاس أحمر وأصفر',
    'ألمنيوم ومطابخ وشبابيك',
    'مكيفات عطلانة (سبليت/شباك)',
    'بطاريات سيارات ومعدات',
    'كيابل وأسلاك كهربائية',
    'هدم عمائر ومستودعات',
    'أجهزة كهربائية ومطاعم',
  ];

  const toggleCategory = (cat: string) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter(c => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 9) {
      setErrorMsg('الرجاء إدخال رقم جوال صحيح للتواصل');
      return;
    }
    setErrorMsg('');

    const newBooking: PickupBooking = {
      id: 'BK-' + Math.floor(100000 + Math.random() * 900000),
      fullName: fullName || 'عميل جدة',
      phone,
      district,
      materialCategory: selectedCategories.length > 0 ? selectedCategories : ['سكراب عام'],
      details: notes,
      preferredTime: 'في أقرب وقت ممكن',
      photoCount: photoPreview ? 1 : 0,
      createdAt: new Date().toISOString(),
      status: 'pending',
    };

    // Save to local storage for user's record
    try {
      const existing = JSON.parse(localStorage.getItem('jeddah_scrap_bookings') || '[]');
      localStorage.setItem('jeddah_scrap_bookings', JSON.stringify([newBooking, ...existing]));
    } catch {
      // Local storage fallback
    }

    setIsSubmitted(true);
    trackConversion();

    // Format WhatsApp message with booking details
    const msg = `السلام عليكم ورحمة الله،
تم إرسال طلب دينا نقل سكراب كاش:
الاسم: ${fullName || 'عميل كرام'}
الجوال: ${phone}
الحي بجدة: ${district}
نوع السكراب: ${selectedCategories.join('، ') || 'سكراب منوع'}
ملاحظات: ${notes || 'لا يوجد'}

نرجو إرسال الدينا والمعاينة كاش في أقرب وقت. شكراً.`;

    // Open WhatsApp after brief delay or provide direct click
    setTimeout(() => {
      window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`, '_blank');
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 bg-slate-900 text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-white">
                {t.bookingTitle}
              </h3>
              <p className="text-xs text-amber-300">
                نقل وفك مجاني + استلام كاش فوري باليد
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
              </div>
              <h4 className="text-xl font-black text-slate-900">
                تم استلام طلبك بنجاح!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                سيتواصل معك مندوب سيارات الدينا بجدة لتأكيد موقعك الدقيق والوصول إليك للوزن والاستلام كاش.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition"
                >
                  إغلاق
                </button>
                <a
                  href={`${WHATSAPP_URL}?text=${encodeURIComponent('السلام عليكم، تم تقديم طلب نقل سكراب وأرغب بمتابعة الموعد.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm transition flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>متابعة فورية بالواتساب</span>
                </a>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>اتصال بالمندوب</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Quick WhatsApp option with official logo */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 text-xs text-emerald-950 font-medium">
                  <WhatsAppIcon className="w-5 h-5 text-[#25D366] fill-[#25D366] shrink-0" />
                  <span>تفضل إرسال الصور أو اللوكيشن مباشرة؟ راسلنا عبر الواتساب:</span>
                </div>
                <a
                  href={`${WHATSAPP_URL}?text=${encodeURIComponent('السلام عليكم، أرغب ببيع سكراب في جدة، هل يمكن إرسال دينا للمعاينة؟')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold inline-flex items-center gap-1.5 shrink-0 transition shadow-xs"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                  <span>واتساب فوري</span>
                </a>
              </div>

              {errorMsg && (
                <div className="p-3 rounded-lg bg-red-50 text-red-700 border border-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Name & Phone */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.fullName}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute start-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="أبو فهد / محمد"
                      className="w-full ps-9 pe-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.phone} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute start-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="05XXXXXXXX"
                      dir="ltr"
                      className="w-full ps-9 pe-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-semibold focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>
              </div>

              {/* District Picker */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.district} بجدة <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute start-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full ps-9 pe-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-medium focus:ring-2 focus:ring-amber-500"
                  >
                    {JEDDAH_DISTRICTS.map(d => (
                      <option key={d.id} value={d.nameAr}>
                        {d.nameAr} ({d.zoneAr}) - وصول سريع
                      </option>
                    ))}
                    <option value="حي آخر في جدة">حي آخر داخل جدة</option>
                  </select>
                </div>
              </div>

              {/* Scrap Categories Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t.selectCategory} (حدد ما يتوفر لديك):
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {categoriesOptions.map(cat => {
                    const isChecked = selectedCategories.includes(cat);
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => toggleCategory(cat)}
                        className={`text-start p-2 rounded-lg border text-xs font-semibold transition ${
                          isChecked
                            ? 'bg-amber-50 border-amber-500 text-amber-950 font-bold'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {isChecked ? '✓ ' : '+ '} {cat}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.additionalDetails}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="مثال: 5 مكيفات شباك في الدور الثاني بحاجة فك، أو حديد تسليح مقصوص..."
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-amber-500"
                ></textarea>
              </div>

              {/* Optional Photo Attachment */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.attachPhoto}
                </label>
                <div className="flex items-center gap-3">
                  <label className="cursor-pointer inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition">
                    <Camera className="w-4 h-4 text-slate-600" />
                    <span>اختر صورة أو التقط بالكاميرا</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </label>
                  {photoPreview && (
                    <div className="relative">
                      <img
                        src={photoPreview}
                        alt="Scrap Preview"
                        className="w-12 h-12 rounded-lg object-cover border border-slate-300"
                      />
                      <button
                        type="button"
                        onClick={() => setPhotoPreview(null)}
                        className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px]"
                      >
                        ✕
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm sm:text-base shadow-md transition"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-slate-950" />
                  <span>{t.submitBooking}</span>
                </button>
                <p className="text-[11px] text-slate-500 text-center mt-2">
                  سيتم فتح محادثة الواتساب مباشرة مع فريق العمل في جدة لتأكيد موعد الدينا.
                </p>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
