export type Language = "ar" | "en";

export interface Translations {
  nav: {
    home: string;
    services: string;
    work: string;
    industries: string;
    whyUs: string;
    process: string;
    pricing: string;
    faq: string;
    contact: string;
    ctaButton: string;
    languageToggle: string;
  };
  hero: {
    badge: string;
    headlinePart1: string;
    headlineHighlight: string;
    headlinePart2: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    trustIndicators: {
      customBuilt: string;
      mobileFirst: string;
      directComm: string;
      supportAfter: string;
    };
    workspaceBadge: string;
    visualTags: {
      web: string;
      ai: string;
      automation: string;
    };
  };
  marquee: {
    label: string;
  };
  services: {
    badge: string;
    title: string;
    description: string;
    discussCta: string;
    items: Array<{
      id: string;
      title: string;
      subtitle: string;
      description: string;
      features: string[];
      ctaMessage: string;
    }>;
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    filterAll: string;
    categories: {
      tourism: string;
      restaurants: string;
      fashion: string;
      natural: string;
    };
    conceptNotice: string;
    viewCaseStudy: string;
    buildSimilarCta: string;
    modalLabels: {
      industry: string;
      year: string;
      type: string;
      theChallenge: string;
      ourSolution: string;
      coreFeatures: string;
      technologies: string;
      status: string;
      statusConcept: string;
      statusLive: string;
      close: string;
    };
  };
  industries: {
    badge: string;
    title: string;
    subtitle: string;
    inquireCta: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
      tag: string;
      ctaMessage: string;
    }>;
  };
  whyNexora: {
    badge: string;
    title: string;
    subtitle: string;
    editorFileName: string;
    editorStatus: string;
    points: Array<{
      title: string;
      description: string;
    }>;
  };
  process: {
    badge: string;
    title: string;
    subtitle: string;
    steps: Array<{
      step: string;
      title: string;
      description: string;
      duration: string;
    }>;
  };
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    quoteLabel: string;
    mostPopularLabel: string;
    discussCta: string;
    disclaimer: string;
    packages: Array<{
      id: string;
      name: string;
      badge?: string;
      description: string;
      features: string[];
      highlighted?: boolean;
      ctaMessage: string;
    }>;
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    demoNote: string;
    prev: string;
    next: string;
    items: Array<{
      quote: string;
      author: string;
      role: string;
      company: string;
      industry: string;
    }>;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    contactSupport: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  finalCta: {
    headline: string;
    subheadline: string;
    buttonText: string;
    directCall: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    form: {
      fullName: string;
      fullNamePlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      service: string;
      serviceSelectPlaceholder: string;
      budget: string;
      budgetOptional: string;
      budgetPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submitButton: string;
      notice: string;
      errors: {
        nameRequired: string;
        phoneRequired: string;
        phoneInvalid: string;
        serviceRequired: string;
        messageRequired: string;
      };
      successHint: string;
    };
    info: {
      whatsappTitle: string;
      phoneTitle: string;
      emailTitle: string;
      hoursTitle: string;
      locationTitle: string;
      socialTitle: string;
    };
  };
  floatingWhatsapp: {
    tooltip: string;
    ariaLabel: string;
  };
  footer: {
    tagline: string;
    navigationTitle: string;
    servicesTitle: string;
    contactTitle: string;
    rights: string;
    backToTop: string;
  };
}

export const translations: Record<Language, Translations> = {
  ar: {
    nav: {
      home: "الرئيسية",
      services: "خدماتنا",
      work: "أعمالنا",
      industries: "القطاعات",
      whyUs: "لماذا نيكسورا",
      process: "خطوات العمل",
      pricing: "الباقات",
      faq: "الأسئلة الشائعة",
      contact: "تواصل معنا",
      ctaButton: "ابدأ مشروعك",
      languageToggle: "English",
    },
    hero: {
      badge: "نحوّل الأفكار إلى برمجيات حية",
      headlinePart1: "بنحوّل أفكارك",
      headlineHighlight: "لتأثير رقمي حقيقي",
      headlinePart2: "",
      subheadline:
        "بنصمم ونطوّر مواقع عصرية، وحلول ذكاء اصطناعي، وأنظمة أتمتة ذكية تساعد مشروعك ينمو، ويوصل لعملاء أكتر، وينجز شغلك بكفاءة.",
      primaryCta: "ابدأ مشروعك الآن",
      secondaryCta: "اكتشف أعمالنا",
      trustIndicators: {
        customBuilt: "تصميم وبرمجة مخصصة بالكامل",
        mobileFirst: "تجربة فائقة السرعة على الموبايل",
        directComm: "تواصل مباشر وسريع عبر واتساب",
        supportAfter: "دعم فني ومتابعة مستمرة بعد الإطلاق",
      },
      workspaceBadge: "بيئة عمل متطورة • كود نقي وسريع",
      visualTags: {
        web: "تطوير الويب",
        ai: "الذكاء الاصطناعي",
        automation: "الأتمتة الذكية",
      },
    },
    marquee: {
      label: "أحدث التقنيات التي نعتمد عليها لبناء منتجات سريعة وقابلة للتوسع",
    },
    services: {
      badge: "مجالات خبرتنا",
      title: "خدمات برمجية مصممة لنمو مشروعك",
      description:
        "حلول تقنية متكاملة من الصفر وحتى الإطلاق وما بعده، مبنية بأحدث معايير الأداء وتجربة المستخدم.",
      discussCta: "ناقش هذه الخدمة",
      items: [
        {
          id: "web-development",
          title: "تطوير المواقع والمنصات",
          subtitle: "Web Development",
          description:
            "نبني مواقع سريعة وفائقة الاستجابة تعكس هوية علامتك التجارية باحترافية، وتضمن تحويل الزوار لعملاء دائمين.",
          features: [
            "تصميم واجهات استثنائية (UI/UX)",
            "أداء فائق وسرعة تحميل قياسية",
            "تهيئة كاملة لمحركات البحث (SEO)",
            "متوافقة 100% مع جميع الهواتف الذكية",
          ],
          ctaMessage: "مرحباً، أود الاستفسار عن خدمة تطوير وتصميم المواقع الإلكترونية.",
        },
        {
          id: "ai-solutions",
          title: "حلول الذكاء الاصطناعي",
          subtitle: "AI Solutions",
          description:
            "نبتكر مساعدين أذكياء وحلول معالجة بيانات تعتمد على الذكاء الاصطناعي لدعم العملاء على مدار الساعة وتسهيل روتين العمل.",
          features: [
            "شات بوت ذكي مخصص لنشاطك التجاري",
            "أتمتة الردود على الاستفسارات الفورية",
            "تحليل وتلخيص البيانات المعقدة",
            "ربط نماذج OpenAI والذكاء الاصطناعي التوليدي",
          ],
          ctaMessage: "مرحباً، أود استشارة حول دمج حلول الذكاء الاصطناعي في مشروعي.",
        },
        {
          id: "automation",
          title: "أتمتة العمليات والربط البرمجي",
          subtitle: "Workflow Automation",
          description:
            "نربط أدوات عملك ببعضها ونلغي المهام اليدوية المكررة ليعمل فريقك بأعلى كفاءة ويوفر ساعات العمل كل أسبوع.",
          features: [
            "ربط أنظمة الـ CRM مع قنوات التواصل",
            "أتمتة الفواتير ومتابعة الطلبات",
            "سيناريوهات متقدمة بواسطة Make و n8n",
            "تكامل سلس مع WhatsApp و Google Sheets",
          ],
          ctaMessage: "مرحباً، أود معرفة تفاصيل خدمة أتمتة العمليات وربط الأنظمة.",
        },
        {
          id: "business-growth",
          title: "حلول رقمية لنمو الأعمال",
          subtitle: "Digital Business Growth",
          description:
            "نحلل رحلة عميلك ونبني بوابات رقمية وصفحات هبوط عالية التحويل مصممة خصيصاً لمضاعفة مبيعاتك وعملائك المحتملين.",
          features: [
            "صفحات هبوط موجهة للحملات الإعلانية",
            "مسارات تحويل (Funnels) مجربة",
            "تتبع التحليلات وسلوك المستخدمين",
            "تحسين مستمر لمعدلات التحويل (CRO)",
          ],
          ctaMessage: "مرحباً، أود مناقشة حلول النمو الرقمي وزيادة مبيعات مشروعي.",
        },
      ],
    },
    projects: {
      badge: "معرض الأعمال",
      title: "من أفكار مختلفة لتجارب رقمية مميزة",
      subtitle:
        "نماذج واستعراضات تفاعلية تمثل معاييرنا العالية في التصميم والابتكار عبر مختلف القطاعات.",
      filterAll: "الكل",
      categories: {
        tourism: "السياحة",
        restaurants: "المطاعم",
        fashion: "الأزياء",
        natural: "المنتجات الطبيعية",
      },
      conceptNotice: "تصميم مفاهيمي استعراضي يوضح قدراتنا التقنية والفنية",
      viewCaseStudy: "استكشف دراسة الحالة",
      buildSimilarCta: "عايز موقع مشابه؟ خلينا نتكلم",
      modalLabels: {
        industry: "القطاع",
        year: "السنة",
        type: "نوع العمل",
        theChallenge: "التحدي التجاري",
        ourSolution: "الحل والتنفيذ",
        coreFeatures: "أبرز المزايا والوظائف",
        technologies: "التقنيات المستخدمة",
        status: "حالة المشروع",
        statusConcept: "تصميم مفاهيمي استعراضي (Demonstration)",
        statusLive: "مشروع رسمي وحصري",
        close: "إغلاق",
      },
    },
    industries: {
      badge: "القطاعات التي نخدمها",
      title: "حلول مفصلة لطبيعة مجالك وأهدافك",
      subtitle:
        "نفهم متطلبات كل قطاع ونبني تجارب رقمية تلبي احتياجات العملاء الفعلية في السوق.",
      inquireCta: "استفسر عن هذا القطاع",
      items: [
        {
          id: "tourism",
          title: "شركات السياحة والرحلات",
          description:
            "اعرض وجهاتك وبرامجك السياحية بطريقة تشجّع العملاء على الحجز والاستفسار الفوري عبر واتساب.",
          tag: "Tourism & Travel",
          ctaMessage: "مرحباً، أريد إنشاء موقع أو منصة لشركة سياحة ورحلات.",
        },
        {
          id: "restaurants",
          title: "المطاعم والكافيهات الفاخرة",
          description:
            "خلّي المنيو واضح وتفاعلي، وتجربة العميل سلسة، وحجز الطاولات أو الطلب بنقرة واحدة سريعة.",
          tag: "Hospitality & Dining",
          ctaMessage: "مرحباً، أريد تصميم منيو تفاعلي ونظام حجز واستفسار لمطعم.",
        },
        {
          id: "fashion",
          title: "علامات الأزياء والملابس",
          description:
            "اعرض مجموعاتك وموديلاتك بتصميم عصري ملهم يحاكي كبرى دور الأزياء العالمية ومتوافق مع الموبايل.",
          tag: "Fashion & Lifestyle",
          ctaMessage: "مرحباً، أريد متجر أو صفحة عرض لعلامة أزياء وملابس.",
        },
        {
          id: "any-business",
          title: "أي نشاط تجاري أو خدمي",
          description:
            "أيًّا كان نشاطك، نساعدك تبني حضوراً رقمياً فريداً يناسب أهدافك ويضاعف ثقة عملائك في علامتك التجارية.",
          tag: "Custom Solutions",
          ctaMessage: "مرحباً، لدي نشاط تجاري وأريد حلاً برمجياً مخصصاً لمشروعي.",
        },
      ],
    },
    whyNexora: {
      badge: "لماذا تختار نيكسورا",
      title: "نبني شراكة حقيقية تضمن نجاح مشروعك",
      subtitle:
        "لا نكتفي بكتابة الكود؛ بل نهتم بنمو مشروعك وتجربة عملائك من أول يوم.",
      editorFileName: "nexora-engine.ts",
      editorStatus: "Ready for Production • 0 Errors",
      points: [
        {
          title: "تسليم سريع ومنظم",
          description:
            "نلتزم بخطة زمنية واضحة ومراحل محددة تضمن لك استلام عملك دون أي تأخير غير مبرر.",
        },
        {
          title: "تصميم مخصص 100%",
          description:
            "نبتعد تماماً عن القوالب الجاهزة والمستهلكة؛ كل مشروع يحصل على هوية وتجربة مستخدم فريدة.",
        },
        {
          title: "تطوير موجه للهواتف الذكية",
          description:
            "أكثر من 80% من زوارك يتصفحون عبر الموبايل، لذلك نضمن تجربة سريعة وسلسة خالية من الأخطاء.",
        },
        {
          title: "تهيئة لمحركات البحث (SEO)",
          description:
            "بنية برمجية معيارية تضمن سهولة أرشفة موقعك وظهوره بنتائج متقدمة على محركات البحث.",
        },
        {
          title: "تواصل مستمر وشفاف",
          description:
            "تحديثات دورية وسهولة تواصل مباشرة عبر واتساب والمكالمات الهاتفية طوال مراحل التنفيذ.",
        },
        {
          title: "دعم فني ومتابعة بعد الإطلاق",
          description:
            "نبقى معك بعد نشر الموقع للتأكد من استقرار الأداء ومساعدتك في أي تعديلات متفق عليها.",
        },
      ],
    },
    process: {
      badge: "منهجية العمل",
      title: "٥ خطوات واضحة من الفكرة حتى الواقع",
      subtitle:
        "مسار عمل احترافي يضمن لك راحة البال ومتابعة كل مرحلة حتى الوصول للمنتج النهائي.",
      steps: [
        {
          step: "01",
          title: "نفهم مشروعك",
          description:
            "جلسة استكشافية لفهم رؤيتك، جمهورك المستهدف، وأهدافك التجارية بدقة.",
          duration: "المرحلة الأولى",
        },
        {
          step: "02",
          title: "نصمم التجربة",
          description:
            "بناء الهوية البصرية، واجهات المستخدم، ومخططات الشاشات السلسة والحديثة.",
          duration: "المرحلة الثانية",
        },
        {
          step: "03",
          title: "نطوّر الموقع",
          description:
            "كتابة كود نظيف وسريع بأحدث التقنيات مع ربط الوظائف والأنظمة المطلوبة.",
          duration: "المرحلة الثالثة",
        },
        {
          step: "04",
          title: "نجهّز الإطلاق",
          description:
            "اختبار شامل للأداء والتوافق على كافة الشاشات، وإطلاق الموقع رسمياً.",
          duration: "المرحلة الرابعة",
        },
        {
          step: "05",
          title: "نطوّر ونحسّن",
          description:
            "دعم فني بعد الإطلاق، ومتابعة الأداء، واقتراح تحسينات مستمرة لزيادة فاعلية مشروعك.",
          duration: "مرحلة النمو",
        },
      ],
    },
    pricing: {
      badge: "خطط الاستثمار",
      title: "باقات مرنة تناسب مرحلة نمو مشروعك",
      subtitle:
        "استثمر في حل رقمي قوي ومناسب لاحتياجاتك دون تكاليف مخفية أو تعقيدات.",
      quoteLabel: "تواصل معنا لمعرفة التكلفة",
      mostPopularLabel: "الأكثر طلباً",
      discussCta: "استفسر عن هذه الباقة",
      disclaimer:
        "* النطاقات والميزات المذكورة أدناه هي نماذج توضيحية لنطاق العمل، ويتم تخصيص العرض النهائي بدقة وفقاً لمتطلبات مشروعك.",
      packages: [
        {
          id: "starter",
          name: "باقة الانطلاق",
          badge: "Starter",
          description:
            "مثالية للأفراد والأنشطة الناشئة التي تحتاج حضوراً رقمياً أنيقاً واحترافياً بأعلى سرعة.",
          features: [
            "صفحة هبوط رئيسية متكاملة وفائقة السرعة",
            "تصميم عصري متوافق 100% مع الهواتف",
            "ربط مباشر بزر ونموذج واتساب",
            "تهيئة أساسية لمحركات البحث (SEO)",
            "استضافة سريعة وشهادة أمان SSL",
            "دعم فني لمدة أسبوعين بعد الإطلاق",
          ],
          ctaMessage: "مرحباً، أود معرفة تكلفة وتفاصيل باقة الانطلاق (Starter).",
        },
        {
          id: "business",
          name: "باقة الأعمال",
          badge: "Business",
          description:
            "الخيار الأفضل للشركات والعلامات التجارية التي تحتاج موقعاً متكاملاً متعدد الأقسام ومجهزاً لزيادة المبيعات.",
          features: [
            "موقع متكامل حتى 5 صفحات مخصصة",
            "لوحة تحكم أو نظام إدارة محتوى مرن",
            "معرض أعمال تفاعلي أو كتالوج منتجات",
            "دعم لغتين (عربي وإنجليزي)",
            "ربط تحليلات جوجل وبيكسل الإعلانات",
            "تهيئة متقدمة لمحركات البحث وسرعة خارقة",
            "دعم فني ومتابعة لمدة شهر كامل",
          ],
          highlighted: true,
          ctaMessage: "مرحباً، أود معرفة تكلفة وتفاصيل باقة الأعمال الأكثر طلباً (Business).",
        },
        {
          id: "premium",
          name: "الباقة المتقدمة",
          badge: "Enterprise & Custom",
          description:
            "للأنظمة المخصصة، المتاجر الكبرى، المنصات الرقمية، والربط البرمجي المعقد والذكاء الاصطناعي.",
          features: [
            "تطوير منصة برمجية مخصصة بالكامل",
            "دمج حلول وشات بوت الذكاء الاصطناعي",
            "أتمتة العمليات وربط بوابات الدفع والـ CRM",
            "أداء معماري مخصص ومستويات أمان متقدمة",
            "أنيميشن وتفاعلات واجهة مستخدم خاصة (Custom Motion)",
            "خطة دعم فني وتطوير مستمرة",
          ],
          ctaMessage: "مرحباً، لدي متطلبات خاصة وأود مناقشة الباقة المتقدمة (Premium).",
        },
      ],
    },
    testimonials: {
      badge: "آراء وشركاء النجاح",
      title: "ماذا يقول عملاؤنا عن التجربة",
      subtitle:
        "شهادات ونماذج توضيحية تعكس القيمة الحقيقية التي نحرص على تقديمها لكل شريك عمل.",
      demoNote:
        "ملاحظة: هذه الآراء هي نماذج توضيحية لمعايير الخدمة ورضا العملاء التي نلتزم بها.",
      prev: "السابق",
      next: "التالي",
      items: [
        {
          quote:
            "سرعة الموقع والتصميم الفاخر نقلا علامتنا التجارية لمستوى مختلف تماماً. زادت استفسارات الحجز بشكل ملحوظ خلال أول شهر.",
          author: "أحمد المهدي",
          role: "مدير التسويق",
          company: "Travel Ora Destinations",
          industry: "قطاع السياحة",
        },
        {
          quote:
            "منيو الكتروني سريع وسهل جداً للزبائن عبر مسح الـ QR. تخلصنا من المشاكل القديمة وخدمة العملاء عبر واتساب أصبحت فورية.",
          author: "كريم رضوان",
          role: "الشريك المؤسس",
          company: "La Casa Dining",
          industry: "قطاع الضيافة والمطاعم",
        },
        {
          quote:
            "الاهتمام بالتفاصيل الدقيقة في الهوية البصرية وسرعة استجابة الموقع على الموبايل كانت مبهرة. فريق محترف بحق.",
          author: "سارة النجار",
          role: "المديرة الإبداعية",
          company: "Vanta Apparel",
          industry: "قطاع الأزياء",
        },
      ],
    },
    faq: {
      badge: "الأسئلة المتكررة",
      title: "إجابات واضحة لكل ما يدور في ذهنك",
      subtitle:
        "إذا كان لديك أي سؤال آخر غير موجود هنا، يمكنك دائماً مراسلتنا مباشرة.",
      contactSupport: "لديك استفسار آخر؟ تواصل معنا مباشرة على واتساب",
      items: [
        {
          question: "كم تبلغ تكلفة إنشاء موقع إلكتروني؟",
          answer:
            "تعتمد التكلفة على متطلبات المشروع، عدد الصفحات، والوظائف التفاعلية كربط الأنظمة أو اللغات المتعددة. نقدم دائماً عروض أسعار شفافة ومفصلة تناسب ميزانيتك دون أي مصاريف غير متوقعة.",
        },
        {
          question: "كم يستغرق تطوير المشروع حتى الإطلاق؟",
          answer:
            "تستغرق المواقع وصفحات الهبوط النموذجية ما بين أسبوع إلى أسبوعين، بينما تستغرق المنصات المتعددة والمواقع المتكاملة من 3 إلى 5 أسابيع حسب حجم وتفاصيل المحتوى المتاح.",
        },
        {
          question: "هل سيعمل الموقع بكفاءة على كافة شاشات الهواتف؟",
          answer:
            "نعم بالتأكيد. نعتمد منهجية Mobile-First؛ مما يعني أن الموقع يتم تصميمه واختباره بعناية فائقة ليعمل بسلاسة وسرعة مطلقة على الهواتف والأجهزة اللوحية وأجهزة الكمبيوتر.",
        },
        {
          question: "هل يمكنكم دمج حلول الذكاء الاصطناعي والأتمتة في موقعي؟",
          answer:
            "نعم، هذا أحد أهم مجالات تخصصنا. يمكننا ربط مساعد ذكي يجيب على أسئلة عملائك فوراً، أو أتمتة إرسال البيانات إلى جداول البيانات وقنوات تيليجرام وواتساب تلقائياً.",
        },
        {
          question: "هل تساعدون في حجز النطاق (الدومين) والاستضافة؟",
          answer:
            "بكل تأكيد. نساعدك في اختيار أفضل أسماء النطاقات ونقوم بإعداد الاستضافة السريعة الآمنة وشهادات SSL وضبط كافة إعدادات DNS التقنية نيابة عنك.",
        },
        {
          question: "هل تتوفر تعديلات أثناء العمل وبعد الاستلام؟",
          answer:
            "نعم، كل مرحلة تصميم وبرمجة تتضمن جولات مراجعة للتأكد من مطابقة العمل لتوقعاتك، مع فترة دعم فني وضمان بعد الإطلاق لإصلاح أي ملاحظات.",
        },
        {
          question: "ماذا يحدث بعد إطلاق الموقع رسمياً؟",
          answer:
            "نسلمك كافة الأصول والصلاحيات، ونوفر لك دليلاً أو فيديو توضيحياً لإدارة المحتوى، مع فترة دعم فني مجانية للمتابعة والاطمئنان على سير كل شيء بسلاسة.",
        },
        {
          question: "هل يمكنني طلب حل برمجي مخصص تماماً خارج الباقات المعروضة؟",
          answer:
            "نعم، نحن فريق هندسة برمجية متكامل. يمكننا تصميم وتطوير أي فكرة مبتكرة أو نظام داخلي مخصص وفقاً لدفتر شروطك واحتياجات شركتك.",
        },
      ],
    },
    finalCta: {
      headline: "جاهز تطوّر مشروعك؟ خلينا نبدأ.",
      subheadline:
        "احكيلنا عن فكرتك، وخلينا نساعدك تختار الحل الرقمي المناسب لمشروعك بأعلى كفاءة وأفضل تصميم.",
      buttonText: "ابدأ محادثة واتساب الآن",
      directCall: "أو اتصل بنا مباشرة على:",
    },
    contact: {
      badge: "تواصل معنا",
      title: "فلنبدأ بناء الحل الرقمي المناسب لك",
      subtitle:
        "املأ البيانات أدناه وسنقوم بتجهيز رسالة واتساب منسقة فوراً لتسهيل التواصل المباشر.",
      form: {
        fullName: "الاسم بالكامل",
        fullNamePlaceholder: "مثال: م. أحمد كمال",
        phone: "رقم الهاتف / واتساب",
        phonePlaceholder: "010xxxxxxxx أو مع كود الدولة",
        service: "الخدمة المطلوبة",
        serviceSelectPlaceholder: "اختر الخدمة...",
        budget: "الميزانية التقريبية للمشروع",
        budgetOptional: "(اختياري)",
        budgetPlaceholder: "حدد نطاق الميزانية التقديرية...",
        message: "نبذة عن فكرتك أو استفسارك",
        messagePlaceholder: "احكيلنا باختصار عن مشروعك، وأهم الأهداف والخصائص المطلوبة...",
        submitButton: "إرسال الطلب عبر واتساب",
        notice:
          "ملاحظة: بالضغط على الزر، سيتم فتح محادثة مباشرة مع فريق نيكسورا على واتساب مع تفاصيل طلبك منسقة وجاهزة للإرسال.",
        errors: {
          nameRequired: "يرجى كتابة الاسم بالكامل.",
          phoneRequired: "يرجى كتابة رقم الهاتف أو الواتساب.",
          phoneInvalid: "يرجى كتابة رقم هاتف صحيح.",
          serviceRequired: "يرجى اختيار الخدمة المطلوبة.",
          messageRequired: "يرجى كتابة نبذة مختصرة عن المشروع.",
        },
        successHint: "تم تجهيز الرسالة! يتم الآن تحويلك إلى تطبيق واتساب...",
      },
      info: {
        whatsappTitle: "واتساب مباشر",
        phoneTitle: "اتصال هاتفي",
        emailTitle: "البريد الإلكتروني",
        hoursTitle: "أوقات العمل الرسمية",
        locationTitle: "المقر الرئيسي",
        socialTitle: "حساباتنا على الشبكات الاجتماعية",
      },
    },
    floatingWhatsapp: {
      tooltip: "تواصل معنا على واتساب",
      ariaLabel: "تواصل مع فريق نيكسورا عبر واتساب",
    },
    footer: {
      tagline:
        "شريكك الرقمي لتطوير المواقع العصرية، وتطبيقات الذكاء الاصطناعي، والأتمتة الذكية.",
      navigationTitle: "روابط سريعة",
      servicesTitle: "الخدمات",
      contactTitle: "التواصل",
      rights: "جميع الحقوق محفوظة لشركة نيكسورا لحلول البرمجيات © 2026",
      backToTop: "الرجوع للأعلى",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      work: "Work",
      industries: "Industries",
      whyUs: "Why Nexora",
      process: "Process",
      pricing: "Pricing",
      faq: "FAQ",
      contact: "Contact",
      ctaButton: "Start Your Project",
      languageToggle: "العربية",
    },
    hero: {
      badge: "Ideas → Code → Impact",
      headlinePart1: "We turn ideas into",
      headlineHighlight: "digital impact",
      headlinePart2: "that drives growth.",
      subheadline:
        "We build modern websites, AI solutions, and smart automation systems that help businesses grow, reach more customers, and operate at peak efficiency.",
      primaryCta: "Start Your Project",
      secondaryCta: "Explore Our Work",
      trustIndicators: {
        customBuilt: "Custom-Built Solutions",
        mobileFirst: "Mobile-First Architecture",
        directComm: "Direct WhatsApp Communication",
        supportAfter: "Dedicated Post-Launch Support",
      },
      workspaceBadge: "Cutting-Edge Engineering • Zero Compromise",
      visualTags: {
        web: "Web Development",
        ai: "AI Solutions",
        automation: "Workflow Automation",
      },
    },
    marquee: {
      label: "Modern tech stack engineered for speed, security, and effortless scalability",
    },
    services: {
      badge: "Our Capabilities",
      title: "Software Solutions Engineered for Growth",
      description:
        "Comprehensive end-to-end technology solutions built with world-class standards in performance, design, and user experience.",
      discussCta: "Discuss This Service",
      items: [
        {
          id: "web-development",
          title: "Web Development",
          subtitle: "High-Performance Platforms",
          description:
            "Build fast, responsive websites that make your business look professional and convert visitors into loyal clients.",
          features: [
            "Bespoke UI/UX design crafted from scratch",
            "Blazing-fast load speeds & Core Web Vitals",
            "SEO-conscious architecture & semantic markup",
            "100% responsive on all mobile viewports",
          ],
          ctaMessage: "Hello, I want to discuss a Web Development project with Nexora.",
        },
        {
          id: "ai-solutions",
          title: "AI Solutions",
          subtitle: "Smart Automation & LLMs",
          description:
            "Create useful AI-powered experiences that answer questions, support customers 24/7, and simplify everyday work.",
          features: [
            "Custom AI assistants tailored to your data",
            "Instant 24/7 automated customer inquiries",
            "Intelligent document & data processing",
            "Seamless OpenAI & generative models integration",
          ],
          ctaMessage: "Hello, I want to explore AI Solutions for my business.",
        },
        {
          id: "automation",
          title: "Workflow Automation",
          subtitle: "Systems & API Integration",
          description:
            "Reduce repetitive tasks and connect your tools so your business can operate more efficiently and save hundreds of hours.",
          features: [
            "CRM & lead pipeline automatic sync",
            "Automated billing, invoicing & order alerts",
            "Advanced workflows via n8n & modern APIs",
            "Instant WhatsApp & Google Sheets connections",
          ],
          ctaMessage: "Hello, I am interested in Workflow Automation & Integrations.",
        },
        {
          id: "business-growth",
          title: "Business Growth Solutions",
          subtitle: "Conversion-Driven Systems",
          description:
            "Improve your online presence with digital experiences designed around your customers and measurable revenue goals.",
          features: [
            "High-converting campaign landing pages",
            "Proven user flows & conversion funnels",
            "Deep analytics & visitor behavior insights",
            "Continuous Conversion Rate Optimization (CRO)",
          ],
          ctaMessage: "Hello, I want to discuss Digital Business Growth solutions.",
        },
      ],
    },
    projects: {
      badge: "Selected Work",
      title: "Selected Work. Real Possibilities.",
      subtitle:
        "Interactive case studies demonstrating our uncompromising standards in design, performance, and craftsmanship across key industries.",
      filterAll: "All",
      categories: {
        tourism: "Tourism",
        restaurants: "Restaurants",
        fashion: "Fashion",
        natural: "Natural Products",
      },
      conceptNotice: "Conceptual demonstration showcase illustrating engineering and creative standards",
      viewCaseStudy: "Explore Case Study",
      buildSimilarCta: "Build Something Similar",
      modalLabels: {
        industry: "Industry",
        year: "Year",
        type: "Project Type",
        theChallenge: "The Business Problem",
        ourSolution: "The Proposed Solution",
        coreFeatures: "Key Features & Capabilities",
        technologies: "Technologies Used",
        status: "Project Status",
        statusConcept: "Conceptual Design & Architecture Demonstration",
        statusLive: "Verified Brand Showcase",
        close: "Close",
      },
    },
    industries: {
      badge: "Industries We Serve",
      title: "Tailored Solutions for Your Specific Domain",
      subtitle:
        "We understand domain-specific user behaviors and build digital solutions that solve real business bottlenecks.",
      inquireCta: "Inquire for this Industry",
      items: [
        {
          id: "tourism",
          title: "Tourism & Travel Companies",
          description:
            "Turn destinations and travel experiences into compelling digital journeys that drive inquiries and direct bookings.",
          tag: "Tourism & Travel",
          ctaMessage: "Hello, I want to build a website or platform for a Tourism company.",
        },
        {
          id: "restaurants",
          title: "Restaurants & Luxury Dining",
          description:
            "Make your menu easier to explore and your restaurant easier to contact with seamless QR menus and booking channels.",
          tag: "Hospitality & Dining",
          ctaMessage: "Hello, I want to create a luxury restaurant website & QR menu.",
        },
        {
          id: "fashion",
          title: "Clothing & Footwear Brands",
          description:
            "Showcase your collections through modern, mobile-first shopping experiences that match international fashion standards.",
          tag: "Fashion & Footwear",
          ctaMessage: "Hello, I want to build an ecommerce showcase for a fashion brand.",
        },
        {
          id: "any-business",
          title: "Any Growing Business",
          description:
            "Build a digital presence tailored to your goals and customers, strengthening market trust and driving measurable revenue.",
          tag: "Custom Solutions",
          ctaMessage: "Hello, I have a business and need a custom software solution.",
        },
      ],
    },
    whyNexora: {
      badge: "Why Nexora",
      title: "A Technical Partner Committed to Your Success",
      subtitle:
        "We do not merely write code; we care about user experience, business metrics, and long-term stability from day one.",
      editorFileName: "nexora-engine.ts",
      editorStatus: "Ready for Production • 0 Errors",
      points: [
        {
          title: "Fast, Organized Delivery",
          description:
            "Structured milestones and transparent sprints ensure your product launches on schedule with zero unexpected delays.",
        },
        {
          title: "100% Bespoke Design",
          description:
            "No cookie-cutter templates. Every project receives an original visual identity and custom user experience crafted for you.",
        },
        {
          title: "Mobile-First Development",
          description:
            "Over 80% of your visitors browse on mobile devices. We engineer responsive layouts that feel instantaneous on smartphones.",
        },
        {
          title: "SEO-Conscious Architecture",
          description:
            "Semantic HTML, optimized metadata, and lightning-fast Core Web Vitals to maximize search engine rankings.",
        },
        {
          title: "Direct & Clear Communication",
          description:
            "Continuous progress updates and direct WhatsApp & phone contact throughout every single phase of development.",
        },
        {
          title: "Support After Launch",
          description:
            "We stand behind our code. Enjoy dedicated post-launch warranty and assistance to keep your platform running smoothly.",
        },
      ],
    },
    process: {
      badge: "Our Process",
      title: "5 Clear Steps from Concept to Launch",
      subtitle:
        "A proven engineering roadmap that ensures transparency, velocity, and high-impact results at every stage.",
      steps: [
        {
          step: "01",
          title: "Discover",
          description:
            "Deep-dive discovery session to align on business objectives, user personas, and technical requirements.",
          duration: "Phase 1",
        },
        {
          step: "02",
          title: "Design",
          description:
            "Crafting wireframes, responsive UI designs, motion states, and modern brand design tokens.",
          duration: "Phase 2",
        },
        {
          step: "03",
          title: "Develop",
          description:
            "Writing clean, modular code with modern frameworks, integrating APIs and dynamic systems.",
          duration: "Phase 3",
        },
        {
          step: "04",
          title: "Launch",
          description:
            "Comprehensive cross-device testing, performance audits, domain DNS setup, and production deployment.",
          duration: "Phase 4",
        },
        {
          step: "05",
          title: "Grow",
          description:
            "Post-launch technical support, telemetry analysis, and iterative enhancements to fuel business growth.",
          duration: "Phase 5",
        },
      ],
    },
    pricing: {
      badge: "Investment Options",
      title: "Transparent Packages Tailored to Your Stage",
      subtitle:
        "Invest in high-performance digital assets designed to scale with your business without surprise fees.",
      quoteLabel: "Contact Us for a Quote",
      mostPopularLabel: "Most Popular",
      discussCta: "Inquire for this Package",
      disclaimer:
        "* Package scopes listed below are illustrative baselines. Final investment quotes are tailored precisely to your specific project needs.",
      packages: [
        {
          id: "starter",
          name: "Starter Package",
          badge: "Starter",
          description:
            "Ideal for startups, professionals, and small businesses establishing an impactful digital presence quickly.",
          features: [
            "Complete high-impact landing page experience",
            "100% mobile-first responsive architecture",
            "Direct WhatsApp inquiry & interactive lead form",
            "Core SEO metadata & fast loading speeds",
            "Fast cloud hosting setup & SSL security certificate",
            "2 weeks dedicated post-launch support",
          ],
          ctaMessage: "Hello, I would like to inquire about the Starter Package.",
        },
        {
          id: "business",
          name: "Business Package",
          badge: "Business",
          description:
            "The top choice for expanding companies requiring a complete multi-section web presence designed to convert.",
          features: [
            "Complete web application up to 5 custom sections/pages",
            "Interactive project portfolio or product showcase",
            "Full bilingual support (English & Arabic with RTL)",
            "Integrated Google Analytics & conversion tracking",
            "Advanced SEO & top-tier Core Web Vitals",
            "1 full month dedicated post-launch support & warranty",
          ],
          highlighted: true,
          ctaMessage: "Hello, I would like to inquire about the Business Package (Most Popular).",
        },
        {
          id: "premium",
          name: "Premium / Custom",
          badge: "Enterprise",
          description:
            "For tailored software platforms, high-volume ecommerce, custom AI models, and complex automation workflows.",
          features: [
            "Fully bespoke software architecture & platform logic",
            "Custom AI agent & chatbot integration",
            "Automated background workflows (n8n, CRM, webhooks)",
            "Tailored micro-interactions & fluid 3D visual touches",
            "High-security compliance & scalable cloud backend",
            "Ongoing maintenance & priority engineering support",
          ],
          ctaMessage: "Hello, I would like to discuss custom requirements for the Premium Package.",
        },
      ],
    },
    testimonials: {
      badge: "Client Proof",
      title: "Trusted by Visionary Teams",
      subtitle:
        "Demonstrating the standard of excellence, speed, and design rigor we bring to every collaboration.",
      demoNote:
        "Notice: These entries are illustrative demonstrations of our client experience standards and project benchmarks.",
      prev: "Previous",
      next: "Next",
      items: [
        {
          quote:
            "The website speed and luxury art direction elevated our brand instantly. Direct WhatsApp inquiries surged within the first month of launch.",
          author: "Ahmed El-Mahdy",
          role: "Marketing Director",
          company: "Travel Ora Destinations",
          industry: "Tourism & Travel",
        },
        {
          quote:
            "Our digital menu and reservation flow became effortless for guests scanning QR codes. Nexora made the entire setup seamless.",
          author: "Karim Radwan",
          role: "Co-Founder",
          company: "La Casa Dining",
          industry: "Luxury Hospitality",
        },
        {
          quote:
            "The attention to typography, dark aesthetics, and buttery-smooth mobile navigation gave our clothing drops the high-fashion feel we wanted.",
          author: "Sarah El-Naggar",
          role: "Creative Director",
          company: "Vanta Apparel",
          industry: "Streetwear & Fashion",
        },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Frequently Asked Questions",
      subtitle:
        "Clear answers to common questions about working with Nexora. Feel free to reach out directly anytime.",
      contactSupport: "Have another question? Chat with us directly on WhatsApp",
      items: [
        {
          question: "How much does a website cost?",
          answer:
            "Costs depend on the complexity of your requirements, number of pages, custom features, and third-party integrations. We provide transparent, itemized quotes tailored to your scope with no surprise fees.",
        },
        {
          question: "How long does development take?",
          answer:
            "A standard high-impact landing page typically takes 1 to 2 weeks, while full multi-page platforms and custom solutions generally take 3 to 5 weeks depending on content readiness.",
        },
        {
          question: "Will the website work seamlessly on mobile devices?",
          answer:
            "Yes, without exception. We build with a mobile-first philosophy, ensuring every layout, typography size, and button is tested and optimized across all iOS and Android screen widths.",
        },
        {
          question: "Can you integrate AI and automation systems?",
          answer:
            "Yes, this is one of our core specialties. We can integrate custom AI chat assistants trained on your data, or build automated workflows syncing your leads to WhatsApp, CRMs, and spreadsheets.",
        },
        {
          question: "Can you help with domain names and hosting?",
          answer:
            "Absolutely. We assist you in selecting the right domain, setting up high-performance cloud hosting, configuring SSL certificates, and handling all DNS configurations.",
        },
        {
          question: "Are revisions included during and after development?",
          answer:
            "Yes. Each milestone includes structured feedback loops to ensure alignment. We also provide a post-launch warranty period to handle any requested adjustments or bug fixes.",
        },
        {
          question: "What happens after the website is launched?",
          answer:
            "We hand over full ownership and provide a clear walkthrough for managing content, along with dedicated technical support to monitor performance and stability.",
        },
        {
          question: "Can I request a custom solution beyond the listed packages?",
          answer:
            "Yes. We are full-stack software engineers and can design, architect, and deploy completely custom digital products, internal dashboards, and automated systems tailored to your unique specifications.",
        },
      ],
    },
    finalCta: {
      headline: "Ready to grow your business? Let's build it.",
      subheadline:
        "Tell us what you have in mind. We'll help you explore the right digital solution with award-winning design and clean engineering.",
      buttonText: "Start a Conversation on WhatsApp",
      directCall: "Or call us directly at:",
    },
    contact: {
      badge: "Get in Touch",
      title: "Let's Build Something Impactful Together",
      subtitle:
        "Fill in your details below and we will automatically format a WhatsApp message ready for instant direct communication.",
      form: {
        fullName: "Full Name",
        fullNamePlaceholder: "e.g. Karim Tarek",
        phone: "Phone / WhatsApp",
        phonePlaceholder: "010xxxxxxxx or with country code",
        service: "Selected Service",
        serviceSelectPlaceholder: "Select a service...",
        budget: "Estimated Budget",
        budgetOptional: "(Optional)",
        budgetPlaceholder: "Select approximate budget range...",
        message: "Project Overview",
        messagePlaceholder: "Briefly tell us about your goals, timeline, and what you want to achieve...",
        submitButton: "Send via WhatsApp",
        notice:
          "Note: Clicking this button opens WhatsApp with your project details formatted and ready to send. You simply press Send inside WhatsApp.",
        errors: {
          nameRequired: "Please enter your full name.",
          phoneRequired: "Please enter your phone number.",
          phoneInvalid: "Please enter a valid phone number.",
          serviceRequired: "Please select the service you need.",
          messageRequired: "Please enter a brief description of your project.",
        },
        successHint: "Message formatted! Opening WhatsApp now...",
      },
      info: {
        whatsappTitle: "Direct WhatsApp",
        phoneTitle: "Direct Telephone",
        emailTitle: "Email Inquiry",
        hoursTitle: "Working Hours",
        locationTitle: "Location",
        socialTitle: "Social Channels",
      },
    },
    floatingWhatsapp: {
      tooltip: "Chat with us on WhatsApp",
      ariaLabel: "Chat with Nexora team on WhatsApp",
    },
    footer: {
      tagline:
        "Your technology partner for modern websites, practical AI solutions, and smart workflow automation.",
      navigationTitle: "Quick Links",
      servicesTitle: "Services",
      contactTitle: "Contact",
      rights: "© 2026 Nexora Software Solutions. All rights reserved.",
      backToTop: "Back to Top",
    },
  },
};
