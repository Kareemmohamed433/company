export interface Project {
  id: string;
  slug: string;
  title: string;
  titleAr: string;
  category: "tourism" | "restaurants" | "fashion" | "natural";
  categoryLabelEn: string;
  categoryLabelAr: string;
  industryEn: string;
  industryAr: string;
  year: string;
  isConcept: boolean;
  image: string;
  brandLogo?: string;
  accentColor: string;
  taglineEn: string;
  taglineAr: string;
  descriptionEn: string;
  descriptionAr: string;
  challengeEn: string;
  challengeAr: string;
  solutionEn: string;
  solutionAr: string;
  featuresEn: string[];
  featuresAr: string[];
  technologies: string[];
  whatsappMessageEn: string;
  whatsappMessageAr: string;
}

export const projectsData: Project[] = [
  {
    id: "travel-ora",
    slug: "travel-ora",
    title: "TRAVEL ORA",
    titleAr: "ترافيل أورا للسياحة",
    category: "tourism",
    categoryLabelEn: "Tourism & Travel",
    categoryLabelAr: "السياحة والرحلات",
    industryEn: "Luxury Tourism & Bespoke Journeys",
    industryAr: "السياحة الفاخرة والرحلات الاستكشافية",
    year: "2025",
    isConcept: true,
    image: "/assets/projects/travel-ora.jpg",
    accentColor: "#0D9488",
    taglineEn: "Discover the Art of Refined Travel",
    taglineAr: "استكشف فن السفر الراقي والوجهات الاستثنائية",
    descriptionEn:
      "A high-end editorial travel portal showcasing curated Mediterranean and tropical journeys, with an interactive booking inquiry flow and rich destination photography.",
    descriptionAr:
      "بوابة سياحية راقية تعرض أرقى الوجهات المتوسطية والاستوائية، مع مسار حجز واستفسار تفاعلي وتصوير فوتوغرافي استثنائي للرحلات.",
    challengeEn:
      "High-net-worth travelers require an immersive digital experience reflecting the exclusivity of premium trips, replacing generic tour listing websites with an editorial luxury feel.",
    challengeAr:
      "المسافرون الباحثون عن رحلات فاخرة يحتاجون لتجربة رقمية تعكس حصرية الوجهات، والابتعاد عن قوالب وكالات السفر التقليدية المزدحمة.",
    solutionEn:
      "Engineered an Awwwards-inspired travel platform featuring rich destination cards, clear itinerary breakdowns, fluid mobile interaction, and an instant WhatsApp trip inquiry generator.",
    solutionAr:
      "تصميم منصة سياحية بإلهام تحريري يبرز جمال الوجهات مع بطاقات تفاعلية للبرامج السياحية، واستمارة استفسار فورية تحوّل رغبة العميل لمحادثة واتساب مباشرة.",
    featuresEn: [
      "Curated luxury destination showcases (Amalfi, Santorini, Bora Bora)",
      "Interactive itinerary and package details with transparent highlights",
      "Instant WhatsApp trip booking inquiry engine",
      "Fluid responsive layout optimized for mobile travelers",
    ],
    featuresAr: [
      "عرض تحريري فاخر للوجهات الحصرية (ساحل أمالفي، سانتوريني، بورا بورا)",
      "تفاصيل شاملة للبرامج والرحلات بأسلوب مريح بصرياً",
      "محرك استفسار فوري يربط المسافر بمستشار الرحلة عبر واتساب",
      "تصميم متجاوب بالكامل وتصفح فائق السرعة عبر الهواتف الذكية",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "WhatsApp API"],
    whatsappMessageEn:
      "Hello Nexora, I saw the TRAVEL ORA project and I want to build a similar luxury tourism website.",
    whatsappMessageAr:
      "مرحباً فريق نيكسورا، اطلعت على مشروع ترافيل أورا وأرغب في تطوير موقع سياحي مشابه لمشروعي.",
  },
  {
    id: "la-casa",
    slug: "la-casa",
    title: "LA CASA",
    titleAr: "لاكازا للمأكولات الفاخرة",
    category: "restaurants",
    categoryLabelEn: "Luxury Hospitality",
    categoryLabelAr: "المطاعم والضيافة",
    industryEn: "Fine Dining & Gourmet Gastronomy",
    industryAr: "المطاعم الفاخرة وتجارب الطعام الراقية",
    year: "2025",
    isConcept: true,
    image: "/assets/projects/la-casa.jpg",
    accentColor: "#D97706",
    taglineEn: "An Exceptional Culinary Journey",
    taglineAr: "رحلة طهي استثنائية وأجواء ضيافة ساحرة",
    descriptionEn:
      "A cinematic dark-mode digital experience for a luxury restaurant, featuring an interactive QR digital menu, gourmet photography showcase, and VIP table reservation inquiry.",
    descriptionAr:
      "تجربة رقمية سينمائية بالنمط الداكن لمطعم فاخر، تدمج منيو إلكتروني سريع عبر الـ QR، ومعرض أطباق احترافي، ونموذج حجز طاولات VIP.",
    challengeEn:
      "Traditional PDF menus and clunky booking apps cause high drop-off rates and fail to communicate the restaurant's culinary craft and ambiance.",
    challengeAr:
      "ملفات الـ PDF القديمة للمنيو والتطبيقات المعقدة تجعل تجربة الزبون بطيئة ولا تليق بأجواء المطعم الراقي وفخامة أطباقه.",
    solutionEn:
      "Designed a sleek black-and-gold responsive interface with instant QR code scanning compatibility, categorized dishes with dietary filters, and a direct inquiry conduit for VIP tables.",
    solutionAr:
      "بناء واجهة استثنائية بالأسود والذهب تعمل فوراً بمسح كود الـ QR دون تحميل أي تطبيق، مع تصنيفات واضحة للأطباق وتسهيل طلب الحجز والتواصل عبر واتساب.",
    featuresEn: [
      "Instant-load QR code digital menu for in-venue dining",
      "Interactive dish exhibition with culinary notes and allergen badges",
      "VIP table reservation inquiry modal connected to WhatsApp/Phone",
      "Curated wine and beverage pairing interactive guide",
    ],
    featuresAr: [
      "منيو إلكتروني فائق السرعة متوافق 100% مع مسح كود الـ QR على الطاولة",
      "استعراض تفاعلي للأطباق مع مكونات الشيف والخيارات الخاصة",
      "نظام حجز واستفسار سريع لطاولات الـ VIP مرتبط مباشرة بواتساب",
      "قسم خاص لقائمة المشروبات والحلويات بتصميم بصري ممتع",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "QR Engine"],
    whatsappMessageEn:
      "Hello Nexora, I saw the LA CASA project and I want to build a digital menu & website for my restaurant.",
    whatsappMessageAr:
      "مرحباً فريق نيكسورا، شاهدت مشروع لاكازا وأرغب في تصميم منيو تفاعلي وموقع لمطعمي.",
  },
  {
    id: "vanta",
    slug: "vanta",
    title: "VANTA",
    titleAr: "ڤانتا للملابس العصرية",
    category: "fashion",
    categoryLabelEn: "Streetwear Fashion",
    categoryLabelAr: "أزياء وستريت وير",
    industryEn: "Contemporary Streetwear & Urban Techwear",
    industryAr: "الملابس العصرية وأزياء الشارع الراقية",
    year: "2025",
    isConcept: true,
    image: "/assets/projects/vanta.jpg",
    accentColor: "#FFFFFF",
    taglineEn: "Monochrome Brutalism Meets Urban Craft",
    taglineAr: "طابع عصري جريء يجسد ثقافة أزياء الشارع",
    descriptionEn:
      "A stark monochrome streetwear brand showcase featuring bold brutalist typography, editorial lookbooks, an interactive drop grid, and an interactive shopping bag demonstration.",
    descriptionAr:
      "منصة عرض أزياء عصرية بطابع أبيض وأسود جريء، تعتمد خطوطاً عريضة وتصويراً تحريرياً مميزاً، مع استعراض تفاعلي لأحدث الإصدارات وحقيبة التسوق التجريبية.",
    challengeEn:
      "Streetwear buyers expect high-energy, unconventional aesthetics that feel closer to a modern art editorial than a standard generic online store.",
    challengeAr:
      "جمهور أزياء الستريت وير ينجذب للهويات الجريئة غير التقليدية التي تشبه مجلات الموضة، ويبتعد عن المتاجر الإلكترونية النمطية.",
    solutionEn:
      "Created an editorial ecommerce concept with oversized typography, interactive drop filters, seamless quick-view cards, and an interactive bag slide-out preview (clearly marked demonstration).",
    solutionAr:
      "تنفيذ مفهوم متجر عصري بخطوط بارزة، وقوائم تصفية سريعة للمجموعات، ونافذة معاينة سريعة للقطع، وحقيبة تسوق تفاعلية استعراضية.",
    featuresEn: [
      "Brutalist monochrome layout engineered for fashion drops",
      "Interactive product quick-view modal with size & fit guidelines",
      "Interactive shopping bag drawer demonstration",
      "High-contrast editorial lookbook transitions",
    ],
    featuresAr: [
      "تصميم جريء ومبتكر مخصص لمجموعات وإصدارات الموضة المحدودة",
      "نافذة فحص سريع للمنتجات وتفاصيل المقاسات",
      "حقيبة تسوق تجريبية تفاعلية توضح سهولة مسار الشراء",
      "معرض صور تحريري فائق النقاء وسريع التحميل على الموبايل",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    whatsappMessageEn:
      "Hello Nexora, I saw the VANTA project and I want to create an editorial fashion website for my brand.",
    whatsappMessageAr:
      "مرحباً فريق نيكسورا، اطلعت على مشروع ڤانتا وأرغب في إنشاء موقع ومظهر إلكتروني لعلامة أزياء.",
  },
  {
    id: "aether",
    slug: "aether",
    title: "AETHER / VOID 00",
    titleAr: "إيثر / ڤويد ٠٠ للأحذية",
    category: "fashion",
    categoryLabelEn: "Futuristic Footwear",
    categoryLabelAr: "أحذية مستقبلية",
    industryEn: "Experimental Footwear & Cyber Techwear",
    industryAr: "الأحذية التجريبية والتصاميم المستقبلية",
    year: "2025",
    isConcept: true,
    image: "/assets/projects/aether.jpg",
    accentColor: "#00C8FF",
    taglineEn: "The Protocol of the Unseen",
    taglineAr: "بروتوكول التصميم المستقبلي للأحذية الرياضية",
    descriptionEn:
      "A futuristic footwear campaign landing page with dark minimalism, glowing cyan accents, prototype lookbook, technical material breakdown, and pre-order drop registration.",
    descriptionAr:
      "صفحة إطلاق مستقبلية لحذاء رياضي تجريبي، تعتمد النمط الداكن وإضاءات النيون السايان، مع استعراض المواصفات التقنية للمواد وتسجيل الحجز المسبق.",
    challengeEn:
      "Innovative techwear brands require launch pages that build intense anticipation, convey experimental materials, and collect verified launch notifications.",
    challengeAr:
      "إطلاق المنتجات المستقبلية والمبتكرة يتطلب صفحات هبوط تصنع حماساً كبيراً للجمهور وتبرز الابتكار الهندسي للمواد قبل توفر المنتج بالسوق.",
    solutionEn:
      "Engineered a high-impact launch experience with interactive technical spec panels, multi-angle campaign lookbook, and direct WhatsApp / registration CTA.",
    solutionAr:
      "بناء صفحة إطلاق بحضور بصري قوي، تتضمن لوحات المواصفات الهندسية للمواد، ومعرض صور متعدد الزوايا، ومسار تسجيل سريع عبر واتساب.",
    featuresEn: [
      "Futuristic dark aesthetic with glowing interactive cyan highlights",
      "Detailed technical specification breakdown (adaptive materials, zero-gravity sole)",
      "Multi-angle campaign lookbook viewer",
      "Direct drop registration and pre-order WhatsApp gateway",
    ],
    featuresAr: [
      "مظهر داكن مستقبلي متناغم مع إضاءات السايان التفاعلية",
      "تفصيل هندسي متقدم لمواصفات وتكنولوجيا النعل والخامات",
      "معرض صور متعدد الزوايا يعرض الحذاء على أرض الواقع",
      "زر تسجيل فوري للحجز المسبق وإشعار الإطلاق عبر واتساب",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Canvas Effects", "Framer Motion"],
    whatsappMessageEn:
      "Hello Nexora, I saw the AETHER / VOID 00 project and want to build a high-impact launch landing page.",
    whatsappMessageAr:
      "مرحباً فريق نيكسورا، رأيت مشروع إيثر / ڤويد ٠٠ وأريد بناء صفحة إطلاق استثنائية لمنتجي الجديد.",
  },
  {
    id: "khaam-sinai",
    slug: "khaam-sinai",
    title: "KHAAM SINAI / خام سينا",
    titleAr: "خام سينا — خيرات سيناء الطبيعية",
    category: "natural",
    categoryLabelEn: "Natural Products & Olive Oil",
    categoryLabelAr: "المنتجات الطبيعية وزيت الزيتون",
    industryEn: "Organic Sinai Extra Virgin Olive Oil & Herbs",
    industryAr: "زيت الزيتون البكر الممتاز وأعشاب سيناء النقية",
    year: "2025",
    isConcept: false,
    image: "/assets/projects/khaam-sinai.jpg",
    brandLogo: "/assets/khaam-sinai-clean.png",
    accentColor: "#65A30D",
    taglineEn: "Experience Sinai's Purest Natural Harvest",
    taglineAr: "أصالة سينا الطبيعية — من أشجار سيناء المباركة إلى بيتك",
    descriptionEn:
      "An authentic organic olive oil and natural Sinai herbs brand showcase with warm limestone textures, verified Arabic brand typography, product catalog, and WhatsApp direct ordering.",
    descriptionAr:
      "منصة متكاملة لعلامة خام سينا لزيت الزيتون البكر الممتاز والأعشاب الطبيعية، تحتفي بالهوية العربية الأصيلة مع كتالوج تفاعلي وطلب مباشر عبر واتساب.",
    challengeEn:
      "Natural agricultural and artisan brands struggle to convey true purity and heritage online while making ordering as fast and human as a local market.",
    challengeAr:
      "المنتجات الطبيعية والزراعية الأصيلة تحتاج لهوية بصرية تعكس النقاء والأمانة وتبرز جودة المحصول، مع تسهيل الشراء المباشر للزبائن في مصر والخليج.",
    solutionEn:
      "Implemented a warm olive-and-gold Arabic-first presentation utilizing the authentic 'خام سينا' logo, transparent product sizing cards, origin storytelling, and one-tap WhatsApp ordering.",
    solutionAr:
      "تنفيذ واجهة دافئة بألوان الزيتون والذهب تعتمد الشعار الرسمي الحقيقي (خام سينا)، مع كتالوج منظم للعبوات والأعشاب الطبيعية، وزر طلب مباشر وفوري عبر واتساب.",
    featuresEn: [
      "Features authentic official 'خام سينا' brand logo & Arabic typography",
      "Organized product catalog for Extra Virgin Olive Oil and Sinai herbs",
      "One-tap direct WhatsApp ordering with pre-filled product inquiries",
      "Authentic Sinai terroir storytelling and purity specifications",
    ],
    featuresAr: [
      "تطبيق الشعار الرسمي المعتمد لـ (خام سينا) مع خط عربي أصيل ومتناسق",
      "كتالوج منتجات تفاعلي لزيت الزيتون البكر والأعشاب السيناوية العطرية",
      "طلب فوري ومباشر بنقرة واحدة عبر تطبيق واتساب مع تجهيز اسم المنتج",
      "سرد قصة أرض سيناء وأشجار الزيتون المعمرة ومعايير الجودة الطبيعية",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "WhatsApp Integration"],
    whatsappMessageEn:
      "Hello Nexora, I saw the KHAAM SINAI project and I want to build a bilingual natural products website.",
    whatsappMessageAr:
      "مرحباً فريق نيكسورا، اطلعت على مشروع خام سينا وأرغب في تطوير منصة لعلامة منتجات طبيعية.",
  },
];
