import React, { useState } from 'react';
import { BookOpen, CheckCircle2, Phone, MapPin, Scale, Truck, Award, Sparkles, Search, Globe } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Language } from '../types';
import { PHONE_NUMBER, DISPLAY_PHONE, WHATSAPP_URL } from '../data/scrapData';

interface SeoAuthoritySectionProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

interface SeoVerticalItem {
  id: string;
  badgeAr: string;
  badgeEn: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  urlSlug: string;
}

export const SEO_COVERAGE_ITEMS: SeoVerticalItem[] = [
  {
    id: 'main-jeddah-scrap',
    badgeAr: 'العنوان الرئيسي الشامل - جدة',
    badgeEn: 'Primary Jeddah Scrap Coverage',
    titleAr: 'شراء سكراب جدة 05775771358 | نشتري حديد ونحاس ومكيفات بأعلى سعر كاش',
    titleEn: 'We Buy Scrap Jeddah 05775771358 | Top Cash for Copper, Iron & Scrap ACs',
    descriptionAr:
      'شراء سكراب جدة 05775771358 بأعلى الأسعار كاش فوري في يدك. نشتري جميع أنواع السكراب والخردة والمعادن (نحاس أحمر وأصفر، حديد تسليح وهناجر، ألمنيوم، مكيفات خربانة، بطاريات) في كافة أحياء جدة مع دينا نقل وفك مجاني 24 ساعة.',
    descriptionEn:
      'We Buy Scrap Jeddah 05775771358 pays the highest instant cash on the spot for copper, heavy iron, rebar, aluminum, faulty split/window ACs, batteries, and demolition scrap across all Jeddah districts with free 24/7 Dyna truck pickup.',
    urlSlug: 'https://webuyscrapjeddah.shop/',
  },
  {
    id: 'scrap-ac-jeddah',
    badgeAr: 'شراء مكيفات سكراب جدة',
    badgeEn: 'Scrap & Faulty ACs Jeddah',
    titleAr: 'شراء مكيفات سكراب جدة 05775771358 | نشتري مكيفات خربانة سبليت وشباك كاش',
    titleEn: 'Scrap AC Buyer Jeddah 05775771358 | We Buy Broken Split & Window ACs Cash',
    descriptionAr:
      'أرقام شراء مكيفات سكراب في جدة 05775771358 بأعلى تقييم نقدي. نشتري المكيفات الخربانة والتالفة والقديمة (سبليت، شباك، دولابي، مركزي، شيلرات وكمبروسرات محروقة) من المنازل والفنادق والشركات مع فك وتنزيل ونقل مجاني بالكامل.',
    descriptionEn:
      'Call 05775771358 to sell scrap and broken air conditioners in Jeddah. We buy faulty split units, window ACs, central chillers, and burnt compressors in single or bulk quantities with 100% free dismantling and instant cash.',
    urlSlug: 'https://webuyscrapjeddah.shop/#materials',
  },
  {
    id: 'copper-cables-jeddah',
    badgeAr: 'شراء سكراب نحاس وكيابل',
    badgeEn: 'Copper & Electrical Cables',
    titleAr: 'شراء سكراب نحاس جدة 05775771358 | نشتري نحاس أحمر وأصفر وكيابل كهرباء',
    titleEn: 'Sell Copper Scrap Jeddah 05775771358 | Red Copper, Brass & Power Cables',
    descriptionAr:
      'حقين شراء سكراب نحاس في جدة 05775771358 بأعلى سعر للكيلو والطن. نشتري النحاس الأحمر الصافي اللامع، مواسير التكييف، النحاس الأصفر، محابس السباكة، وكيابل وأسلاك الكهرباء بغلافها أو مقشرة بميزان إلكتروني ديجيتال دقيق أمام عينك.',
    descriptionEn:
      'Top daily rates for copper scrap in Jeddah 05775771358. We purchase bright red copper wire, AC copper tubing, yellow brass valves, radiators, and insulated underground electrical cables with certified on-site digital scales.',
    urlSlug: 'https://webuyscrapjeddah.shop/#materials',
  },
  {
    id: 'iron-demolition-jeddah',
    badgeAr: 'شراء سكراب حديد وهدم عمائر',
    badgeEn: 'Heavy Iron & Building Demolition',
    titleAr: 'شراء سكراب حديد جدة 05775771358 | نشتري حديد هدم عمائر وهناجر وشينكو',
    titleEn: 'Heavy Iron Scrap Buyer Jeddah 05775771358 | Rebar, Beams & Demolition Steel',
    descriptionAr:
      'نشتري سكراب الحديد الثقيل والخفيف في جدة 05775771358 بأعلى سعر للطن. نشتري حديد التسليح، الكمر، الجسور، هياكل الهناجر والمستودعات، ألواح الشينكو، ومخلفات هدم المباني والمشاريع عبر موازين بسكول معتمدة ودفع كاش فوري.',
    descriptionEn:
      'Direct buyer of heavy structural iron and rebar scrap in Jeddah 05775771358. Purchasing demolition steel, I-beams, factory hangars, corrugated Shinko sheets, and construction surplus with certified weighbridge scales and instant payout.',
    urlSlug: 'https://webuyscrapjeddah.shop/#materials',
  },
  {
    id: 'aluminum-stainless-jeddah',
    badgeAr: 'شراء سكراب ألمنيوم وستانلس ستيل',
    badgeEn: 'Aluminum & Stainless Steel',
    titleAr: 'شراء سكراب ألمنيوم وستيل جدة 05775771358 | شبابيك ومطابخ ومعدات مطاعم',
    titleEn: 'Aluminum & Stainless Scrap Jeddah 05775771358 | Windows, Rims & Kitchens',
    descriptionAr:
      'اتصل الآن 05775771358 لشراء سكراب الألمنيوم والستانلس ستيل في جدة. نشتري شبابيك وأبواب ومطابخ الألمنيوم، قطاعات المصانع، جنوط السيارات، ألمنيوم الزهر، ومعدات المطاعم والفنادق الستانلس ستيل (304/316) كاش فوري ونقل مجاني.',
    descriptionEn:
      'Call 05775771358 to sell aluminum and stainless steel scrap in Jeddah. Buying dismantled window frames, aluminum kitchens, alloy rims, cast aluminum, and commercial restaurant stainless steel equipment for immediate cash.',
    urlSlug: 'https://webuyscrapjeddah.shop/#materials',
  },
  {
    id: 'batteries-machinery-jeddah',
    badgeAr: 'شراء بطاريات سكراب ومعدات',
    badgeEn: 'Used Batteries & Generators',
    titleAr: 'شراء بطاريات سكراب جدة 05775771358 | نشتري بطاريات سيارات وشاحنات تالفة',
    titleEn: 'Used Battery Buyer Jeddah 05775771358 | Car, Truck & UPS Batteries Cash',
    descriptionAr:
      'نشتري البطاريات التالفة والقديمة في جدة 05775771358 بأعلى سعر كاش. شراء بطاريات السيارات والشاحنات، بطاريات المعدات الثقيلة، المولدات الكهربائية، وبطاريات الأبراج والـ UPS بكميات فردية أو جملة الورش والشركات مع استلام فوري.',
    descriptionEn:
      'Highest cash payout for used lead-acid batteries in Jeddah 05775771358. We buy scrap car batteries, heavy truck batteries, forklift & generator batteries, and telecom UPS banks with free doorstep collection.',
    urlSlug: 'https://webuyscrapjeddah.shop/#materials',
  },
  {
    id: 'north-jeddah-scrap',
    badgeAr: 'تغطية شمال جدة (الحمدانية وأبحر)',
    badgeEn: 'North Jeddah Scrap Pickup',
    titleAr: 'شراء سكراب شمال جدة 05775771358 | حي الحمدانية وأبحر والمرجان والمحمدية',
    titleEn: 'Scrap Buyer North Jeddah 05775771358 | Al-Hamdaniyah, Obhur & Al-Marjan',
    descriptionAr:
      'خدمة شراء سكراب في شمال جدة 05775771358 نصلك خلال 30 دقيقة في حي الحمدانية، أبحر الشمالية والجنوبية، المرجان، البساتين، المحمدية، النعيم، الزهراء، والشاطئ لشراء المكيفات والمعادن والخردة كاش فوري مع دينا نقل مجانية.',
    descriptionEn:
      'Fast 30-minute scrap metal and used AC pickup across North Jeddah 05775771358: serving Al-Hamdaniyah, North & South Obhur, Al-Marjan, Al-Basateen, Al-Muhammadiyah, Al-Naeem, and Al-Zahra with instant cash in hand.',
    urlSlug: 'https://webuyscrapjeddah.shop/#districts',
  },
  {
    id: 'central-jeddah-scrap',
    badgeAr: 'تغطية وسط جدة (الصفا والروضة)',
    badgeEn: 'Central Jeddah Scrap Pickup',
    titleAr: 'شراء سكراب وسط جدة 05775771358 | حي الصفا والمروة والبوادي والروضة والسلامة',
    titleEn: 'Scrap Buyer Central Jeddah 05775771358 | Al-Safa, Al-Marwah & Al-Rawdah',
    descriptionAr:
      'أرقام يشترون سكراب في وسط جدة 05775771358 متواجدون على مدار الساعة في حي الصفا، المروة، البوادي، الربوة، الروضة، السلامة، الفيصلية، العزيزية، ومشرفة، والرحاب. فك مكيفات وتنزيل حديد ونحاس مجاناً ودفع نقدي فوري.',
    descriptionEn:
      '24/7 scrap metal, copper, and faulty AC buyer in Central Jeddah 05775771358. Immediate Dyna truck dispatch to Al-Safa, Al-Marwah, Al-Bawadi, Al-Rabwah, Al-Rawdah, Al-Salamah, Al-Faisaliyah, and Al-Aziziyah.',
    urlSlug: 'https://webuyscrapjeddah.shop/#districts',
  },
  {
    id: 'south-east-jeddah-scrap',
    badgeAr: 'جنوب وشرق جدة والخمرة والصناعية',
    badgeEn: 'South & East Jeddah & Al-Khumrah',
    titleAr: 'شراء سكراب جنوب وشرق جدة 05775771358 | الخمرة والصناعية والسامر والأجواد',
    titleEn: 'Scrap Buyer Al-Khumrah & South Jeddah 05775771358 | Industrial Zone & Al-Samer',
    descriptionAr:
      'حقين سكراب الخمرة وجنوب وشرق جدة 05775771358 نشتري مخلفات المصانع والورش والمستودعات في الخمرة، الصناعية الجديدة والقديمة، المحجر، القوزين، البلد، السامر، الأجواد، الحرازات، وبريمان بأعلى سعر للطن والكيلو كاش.',
    descriptionEn:
      'Premier industrial scrap buyer in Al-Khumrah, South & East Jeddah 05775771358. Serving New & Old Industrial Cities, Al-Mahjar, Al-Balad, Al-Samer, Al-Ajwad, Quwayzah, Al-Harazat, and Breiman with heavy trucks and cash.',
    urlSlug: 'https://webuyscrapjeddah.shop/#districts',
  },
  {
    id: 'warehouse-factory-liquidation',
    badgeAr: 'تصفية مستودعات ومصانع وعقود هدم',
    badgeEn: 'Warehouse & Factory Liquidation',
    titleAr: 'تصفية مستودعات وشراء سكراب مصانع جدة 05775771358 | عقود هدم وإزالة',
    titleEn: 'Warehouse Liquidation & Factory Scrap Jeddah 05775771358 | Demolition Contracts',
    descriptionAr:
      'متخصصون في تصفية المستودعات والورش وشراء سكراب المصانع وهدم العمائر والفلل في جدة 05775771358. نوفر القلابات والتريلات ومعدات القص والعمالة المدربة مع عقود رسمية وموازين بسكول معتمدة وسداد نقدي أو بنكي فوري.',
    descriptionEn:
      'Turnkey warehouse clearance, factory machinery dismantling, and building demolition scrap purchasing in Jeddah 05775771358. Full fleet of trailers, heavy cutters, certified weighbridge tickets, and immediate settlement.',
    urlSlug: 'https://webuyscrapjeddah.shop/#operations',
  },
  {
    id: 'jeddah-scrap-numbers',
    badgeAr: 'أرقام حقين سكراب جدة 24 ساعة',
    badgeEn: '24/7 Direct Scrap Buyers Number',
    titleAr: 'أرقام شراء سكراب جدة 05775771358 | حقين سكراب وخردة بدينا نقل مجانية',
    titleEn: 'Jeddah Scrap Buyers Contact Number 05775771358 | Free Dyna Truck Pickup',
    descriptionAr:
      'تبحث عن رقم يشتري سكراب في جدة؟ اتصل الآن على 05775771358 (متاح 24 ساعة) نصلك أينما كنت بسيارات دينا حديثة وموازين ديجيتال لشراء كافة الخردوات والمعادن والمكيفات التالفة نقداً عند الباب بدون أي رسوم نقل أو عمولة.',
    descriptionEn:
      'Looking for a trusted scrap buyer phone number in Jeddah? Call or WhatsApp 05775771358 (open 24/7) for free on-site inspection, digital scale weighing, free loading crew, and 100% instant cash before loading.',
    urlSlug: 'https://webuyscrapjeddah.shop/#steps',
  },
  {
    id: 'english-commercial-scrap-jeddah',
    badgeAr: 'خدمات الشركات والمقاولين (English/AR)',
    badgeEn: 'Commercial & Corporate Scrap Services',
    titleAr: 'We Buy Scrap Jeddah 05775771358 | شراء سكراب الشركات والمشاريع بجدة كاش',
    titleEn: 'Commercial Scrap Metal Recycling Jeddah 05775771358 | Instant Cash & Free Hauling',
    descriptionAr:
      'We Buy Scrap Jeddah 05775771358 – نشتري فائض المشاريع الهندسية، كيابل المقاولات، تكييف الفنادق والمجمعات التجارية، وسكراب المعادن في جدة بأعلى الأسعار العالمية والمحلية مع التزام تام بالمواعيد والدفع الكاش الفوري.',
    descriptionEn:
      'We Buy Scrap Jeddah 05775771358 partners with construction contractors, hotels, malls, and manufacturing plants across Jeddah to buy surplus copper cables, HVAC chillers, steel beams, and metal scrap at top rates.',
    urlSlug: 'https://webuyscrapjeddah.shop/#jeddah-scrap-guide',
  },
];

export const SeoAuthoritySection: React.FC<SeoAuthoritySectionProps> = ({ currentLang, onOpenBooking }) => {
  const isAr = currentLang === 'ar';
  const [activeSnippetId, setActiveSnippetId] = useState<string>(SEO_COVERAGE_ITEMS[0].id);

  const seoKeywordsAr = [
    'شراء سكراب جدة 05775771358',
    'نشتري سكراب جدة 05775771358',
    'حقين سكراب جدة 05775771358',
    'ارقام شراء سكراب جدة 05775771358',
    'شراء مكيفات سكراب جدة 05775771358',
    'شراء سكراب نحاس جدة 05775771358',
    'شراء سكراب حديد جدة 05775771358',
    'شراء سكراب المنيوم جدة 05775771358',
    'شراء بطاريات سكراب جدة 05775771358',
    'شراء خردة جدة كاش 05775771358',
    'مقاول هدم وشراء سكراب جدة',
    'سكراب الخمرة جدة 05775771358',
    'سكراب الحمدانية جدة 05775771358',
    'سكراب الصفا والمروة جدة',
    'سكراب أبحر الشمالية والجنوبية',
    'شراء مكيفات خربانة جدة 05775771358',
    'دينا شراء سكراب جدة 05775771358',
    'شراء سكراب ستانلس ستيل جدة',
    'شراء كيابل كهرباء سكراب جدة',
    'أفضل سعر طن حديد سكراب جدة',
  ];

  const seoKeywordsEn = [
    'We Buy Scrap Jeddah 05775771358',
    'Scrap Metal Buyer Jeddah 05775771358',
    'Sell Copper Scrap Jeddah 05775771358',
    'Scrap AC Buyer Jeddah 05775771358',
    'Heavy Iron Scrap Jeddah 05775771358',
    'Aluminum Scrap Buyers Jeddah',
    'Used Battery Buyer Jeddah 05775771358',
    'Demolition Scrap Contractor Jeddah',
    'Al Khumrah Scrap Yard Jeddah',
    'Instant Cash Scrap Pickup Jeddah',
    'Industrial Scrap Recycling Jeddah',
    'Stainless Steel Scrap Jeddah',
  ];

  const handleApplyMetaPreview = (item: SeoVerticalItem) => {
    setActiveSnippetId(item.id);
    const newTitle = isAr ? item.titleAr : item.titleEn;
    const newDesc = isAr ? item.descriptionAr : item.descriptionEn;
    document.title = newTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', newDesc);
    }
  };

  return (
    <section
      id="jeddah-scrap-guide"
      aria-labelledby="seo-guide-heading"
      className="py-16 sm:py-20 bg-slate-100 border-b border-slate-200 scroll-mt-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold mb-3">
            <BookOpen className="w-3.5 h-3.5 text-amber-700" />
            <span>
              {isAr
                ? 'الدليل الشامل وعناوين البحث المعتمدة لشراء السكراب في جدة – 05775771358'
                : 'Maximum SEO Coverage Directory for Selling Scrap Metal & ACs in Jeddah – 05775771358'}
            </span>
          </div>
          <h2
            id="seo-guide-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight"
          >
            {isAr
              ? 'شراء سكراب جدة 05775771358 – نشتري الحديد والنحاس والمكيفات والخردة بأعلى سعر كاش'
              : 'We Buy Scrap Jeddah 05775771358 – Top Instant Cash for Copper, Iron, ACs & Batteries'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            {isAr
              ? 'تغطية شاملة لجميع خدمات وأقسام شراء السكراب والمعادن والمكيفات التالفة وهدم المباني في كافة أحياء جدة مع رقم التواصل المباشر 05775771358 والدفع النقدي الفوري والنقل المجاني 24 ساعة.'
              : 'Complete coverage across all scrap metal categories, faulty air conditioners, electrical cables, and demolition salvage in Jeddah. Direct line: 05775771358 with free 24/7 pickup.'}
          </p>
        </div>

        {/* Maximum Coverage SEO Titles & Descriptions Grid (12 Full Search Verticals with 05775771358 in Every Title & Description) */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0">
                <Search className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  {isAr
                    ? 'عناوين وأوصاف خدمات شراء السكراب في جدة (تغطية شاملة 05775771358)'
                    : 'Comprehensive Jeddah Scrap Services Titles & Descriptions (05775771358)'}
                </h3>
                <p className="text-xs text-slate-500">
                  {isAr
                    ? 'جميع العناوين والأوصاف مهيأة لمحركات البحث Google مع رقم الاتصال المباشر 05775771358 لتغطية كافة طلبات البحث في جدة'
                    : 'Every service title and description includes direct contact 05775771358 for maximum local search visibility across Jeddah'}
                </p>
              </div>
            </div>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-2xs transition self-start sm:self-auto"
              dir="ltr"
            >
              <Phone className="w-4 h-4 fill-slate-950" />
              <span>05775771358</span>
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SEO_COVERAGE_ITEMS.map((item) => {
              const isSelected = activeSnippetId === item.id;
              return (
                <article
                  key={item.id}
                  onClick={() => handleApplyMetaPreview(item)}
                  className={`bg-white rounded-2xl p-5 border transition cursor-pointer flex flex-col justify-between min-w-0 overflow-hidden ${
                    isSelected
                      ? 'border-amber-500 ring-2 ring-amber-500/20 shadow-md'
                      : 'border-slate-200 hover:border-amber-400 shadow-xs'
                  }`}
                >
                  <div>
                    {/* Google SERP Breadcrumb Style Header */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-bold">
                        <Globe className="w-3 h-3 text-emerald-600" />
                        <span>{isAr ? item.badgeAr : item.badgeEn}</span>
                      </span>
                      <span
                        dir="ltr"
                        className="text-[11px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md"
                      >
                        05775771358
                      </span>
                    </div>

                    <div className="text-[11px] text-emerald-700 font-mono truncate mb-1" dir="ltr">
                      {item.urlSlug}
                    </div>

                    {/* SEO Title with Phone Number */}
                    <h4 className="text-base font-extrabold text-blue-800 hover:underline leading-snug mb-2">
                      {isAr ? item.titleAr : item.titleEn}
                    </h4>

                    {/* SEO Description with Phone Number */}
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {isAr ? item.descriptionAr : item.descriptionEn}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-900 hover:text-amber-600 transition"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-500" />
                      <span>{isAr ? 'اتصال: 05775771358' : 'Call: 05775771358'}</span>
                    </a>
                    <a
                      href={`${WHATSAPP_URL}?text=${encodeURIComponent(isAr ? item.titleAr : item.titleEn)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-600" />
                      <span>{isAr ? 'واتساب مباشر' : 'WhatsApp'}</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Rich Semantic Articles Grid for Search Engine Crawlability */}
        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          {/* Article 1: General Scrap & Metals in Jeddah */}
          <article className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-amber-700 font-bold text-xs">
              <Award className="w-4 h-4 text-amber-600" />
              <span>{isAr ? 'أعلى تقييم يومي في سوق جدة – 05775771358' : 'Highest Daily Market Valuation – 05775771358'}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
              {isAr
                ? 'أفضل مؤسسة شراء سكراب وخردة في جدة كاش فوري (05775771358)'
                : 'Best Scrap Metal & Junk Buyer in Jeddah 05775771358 with Instant Cash'}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {isAr
                ? 'إذا كنت تبحث عن أرقام يشترون سكراب في جدة (05775771358) أو حقين سكراب جدة الموثوقين، فإن مؤسستنا (We Buy Scrap Jeddah 05775771358) توفر لك خدمة شراء شاملة ومباشرة بدون وسطاء. نحن نشتري سكراب الحديد الثقيل والخفيف، حديد التسليح، الشينكو، الهناجر، النحاس الأحمر اللامع، النحاس الأصفر، كيابل الكهرباء، الألمنيوم، الستانلس ستيل، والبطاريات التالفة بأعلى سعر في سوق الخمرة وجدة.'
                : 'Looking for reliable scrap buyers in Jeddah (05775771358)? We Buy Scrap Jeddah 05775771358 offers direct, commission-free purchasing of heavy structural steel, rebar, bright red copper, yellow brass, insulated electrical cables, aluminum profiles, stainless steel kitchen equipment, and lead-acid batteries at the highest daily rates in Jeddah.'}
            </p>
            <ul className="space-y-1.5 pt-2 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {isAr
                    ? 'شراء سكراب نحاس أحمر وأصفر وكيابل كهربائية بميزان إلكتروني دقيق (05775771358)'
                    : 'Buying red copper, brass & electrical cables with digital scales (05775771358)'}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {isAr
                    ? 'شراء سكراب حديد تسليح وهياكل هناجر ومخلفات مشاريع ومصانع بالأطنان (05775771358)'
                    : 'Purchasing rebar, steel beams & factory scrap in bulk tonnage (05775771358)'}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {isAr
                    ? 'شراء سكراب ألمنيوم شبابيك ومطابخ وجنوط سيارات وستانلس ستيل (05775771358)'
                    : 'Buying aluminum windows, kitchens, alloy rims & stainless steel (05775771358)'}
                </span>
              </li>
            </ul>
          </article>

          {/* Article 2: Scrap ACs, Appliances & Demolition */}
          <article className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs">
              <Truck className="w-4 h-4 text-emerald-600" />
              <span>{isAr ? 'فك وتنزيل ونقل مجاني 100% – 05775771358' : '100% Free Dismantling & Hauling – 05775771358'}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
              {isAr
                ? 'شراء مكيفات سكراب جدة 05775771358 ومخلفات هدم المباني والمستودعات'
                : 'Buying Scrap Air Conditioners & Building Demolition in Jeddah 05775771358'}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {isAr
                ? 'نحن متخصصون في شراء مكيفات سكراب جدة (05775771358) بجميع أنواعها: مكيفات سبليت خربانة أو تالفة، مكيفات شباك قديمة، ووحدات التكييف المركزي والكمبروسرات المحروقة من المنازل والفنادق والشقق المفروشة والشركات. يتولى فريقنا الفني فك المكيفات وتنزيلها من الأدوار العليا وتحميلها في سيارات الدينا مجاناً تماماً مع تسليمك المبلغ كاش فوري باليد قبل التحميل.'
                : 'We specialize in buying scrap and faulty air conditioners across Jeddah (05775771358): broken split ACs, old window ACs, central chillers, and burnt compressors from homes, hotels, and commercial buildings. Our technicians handle all unmounting, carrying from upper floors, and Dyna truck transport completely free of charge.'}
            </p>
            <ul className="space-y-1.5 pt-2 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {isAr
                    ? 'شراء مكيفات خربانة وتالفة (سبليت وشباك ومركزي) مع الفك المجاني 05775771358'
                    : 'Buying broken split, window & central ACs with free unmounting 05775771358'}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {isAr
                    ? 'شراء بطاريات السيارات والشاحنات والمولدات التالفة بأعلى تسعير 05775771358'
                    : 'Buying used car, truck & generator lead-acid batteries for cash 05775771358'}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {isAr
                    ? 'عقود رسمية لشراء سكراب هدم العمائر والفلل وتصفية المستودعات والورش 05775771358'
                    : 'Official contracts for building demolition scrap & warehouse liquidation 05775771358'}
                </span>
              </li>
            </ul>
          </article>
        </div>

        {/* Structured Service Summary Table (Boosts Google Featured Snippets) */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden mb-10">
          <div className="bg-slate-900 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-amber-400" />
              <h3 className="font-extrabold text-sm sm:text-base">
                {isAr
                  ? 'جدول خدمات شراء السكراب والمعادن في جدة 05775771358 (تقييم كاش فوري 24/7)'
                  : 'Jeddah Scrap Buying Services & On-Site Weighing Directory – 05775771358'}
              </h3>
            </div>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5"
              dir="ltr"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{DISPLAY_PHONE}</span>
            </a>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-start text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-800 font-extrabold">
                  <th className="py-3.5 px-4 text-start">{isAr ? 'نوع السكراب / المعدن' : 'Scrap Category'}</th>
                  <th className="py-3.5 px-4 text-start">{isAr ? 'التفاصيل والأنواع المطلوبة' : 'Accepted Items'}</th>
                  <th className="py-3.5 px-4 text-start">{isAr ? 'طريقة الوزن والتقييم' : 'Weighing Method'}</th>
                  <th className="py-3.5 px-4 text-start">{isAr ? 'النقل والفك والدفع' : 'Pickup & Payment'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50/80">
                  <td className="py-3 px-4 font-bold text-slate-900">
                    {isAr ? 'سكراب النحاس والكيابل (05775771358)' : 'Copper & Cables Scrap (05775771358)'}
                  </td>
                  <td className="py-3 px-4">
                    {isAr
                      ? 'نحاس أحمر صافي، نحاس أصفر، مواسير تكييف، كيابل وأسلاك كهرباء'
                      : 'Bright red copper, yellow brass, AC pipes, insulated power cables'}
                  </td>
                  <td className="py-3 px-4">
                    {isAr ? 'ميزان إلكتروني ديجيتال بالكيلو' : 'Digital scale per kg on-site'}
                  </td>
                  <td className="py-3 px-4 text-emerald-700 font-semibold">
                    {isAr ? 'كاش فوري + نقل مجاني' : 'Instant Cash + Free Pickup'}
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="py-3 px-4 font-bold text-slate-900">
                    {isAr ? 'سكراب الحديد والهدم (05775771358)' : 'Iron & Demolition Steel (05775771358)'}
                  </td>
                  <td className="py-3 px-4">
                    {isAr
                      ? 'حديد تسليح، جسور، هناجر، شينكو، مخلفات هدم مباني وورش'
                      : 'Rebar, I-beams, steel hangars, roofing sheets, workshop iron'}
                  </td>
                  <td className="py-3 px-4">
                    {isAr ? 'ميزان بسكول معتمد بالطن / الكيلو' : 'Certified Weighbridge (Ton/kg)'}
                  </td>
                  <td className="py-3 px-4 text-emerald-700 font-semibold">
                    {isAr ? 'تريلات ودينا مجاناً + دفع نقدي' : 'Free Trailers/Dyna + Cash'}
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="py-3 px-4 font-bold text-slate-900">
                    {isAr ? 'مكيفات سكراب وخردة (05775771358)' : 'Scrap Air Conditioners (05775771358)'}
                  </td>
                  <td className="py-3 px-4">
                    {isAr
                      ? 'مكيفات سبليت وشباك ومركزي تالفة أو مستعملة وكمبروسرات'
                      : 'Faulty split ACs, window ACs, central chillers & compressors'}
                  </td>
                  <td className="py-3 px-4">
                    {isAr ? 'تقييم فوري بالحبة أو الجملة' : 'Per unit or bulk batch valuation'}
                  </td>
                  <td className="py-3 px-4 text-emerald-700 font-semibold">
                    {isAr ? 'فك وتنزيل مجاني + كاش باليد' : 'Free Dismantling + Spot Cash'}
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="py-3 px-4 font-bold text-slate-900">
                    {isAr ? 'ألمنيوم وبطاريات وستيل (05775771358)' : 'Aluminum, Batteries & Steel (05775771358)'}
                  </td>
                  <td className="py-3 px-4">
                    {isAr
                      ? 'شبابيك ومطابخ ألمنيوم، جنوط، بطاريات سيارات وشاحنات، معدات مطاعم'
                      : 'Aluminum windows/kitchens, rims, lead batteries, restaurant steel'}
                  </td>
                  <td className="py-3 px-4">
                    {isAr ? 'ميزان رقمي معتمد في موقعك' : 'On-site digital weighing'}
                  </td>
                  <td className="py-3 px-4 text-emerald-700 font-semibold">
                    {isAr ? 'تحميل مجاني + سداد فوري' : 'Free Loading + Instant Payout'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Local Neighborhoods & Search Keywords Cloud for Internal Linking & Crawl Depth */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-5 border-b border-slate-100">
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>
                  {isAr
                    ? 'تغطية شاملة لكافة أحياء جدة ومناطقها الصناعية – اتصل 05775771358'
                    : 'Serving All Jeddah Districts & Industrial Zones – Call 05775771358'}
                </span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {isAr
                  ? 'نصل إليك خلال 30 دقيقة عبر الرقم 05775771358 في شمال جدة (الحمدانية، أبحر، المرجان، المحمدية)، وسط جدة (الصفا، المروة، الروضة، البوادي، الفيصلية)، وجنوب وشرق جدة (الخمرة، الصناعية، المحجر، البلد، السامر، الأجواد).'
                  : 'Fast 30-minute dispatch via 05775771358 across North Jeddah (Al-Hamdaniyah, Obhur), Central Jeddah (Al-Safa, Al-Rawdah), and South/East Jeddah (Al-Khumrah, Industrial Area, Al-Samer).'}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent('السلام عليكم، عندي سكراب في جدة وأرغب بمعرفة السعر وطلب دينا')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs transition"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                <span>{isAr ? 'واتساب 05775771358' : 'WhatsApp 05775771358'}</span>
              </a>
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition"
              >
                {isAr ? 'طلب دينا معاينة' : 'Book Pickup'}
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2" aria-label="الكلمات المفتاحية لخدمات شراء السكراب في جدة">
            {(isAr ? seoKeywordsAr : seoKeywordsEn).map((kw, index) => (
              <a
                key={index}
                href="#materials"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-amber-50 text-slate-700 hover:text-amber-900 border border-slate-200 hover:border-amber-300 text-xs font-semibold transition"
              >
                <Sparkles className="w-3 h-3 text-amber-500 shrink-0" />
                <span>{kw}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
