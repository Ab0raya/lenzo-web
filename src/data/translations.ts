export type Language = 'en' | 'ar';
export const APK_DOWNLOAD_URL = 'https://github.com/Ab0raya/lenzo-web/releases/download/lenzo-apk/lenzo.apk';

export interface TranslationStructure {
  nav: {
    features: string;
    metrics: string;
    howItWorks: string;
    download: string;
    support: string;
    downloadBtn: string;
    langBtn: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    stats: {
      precisionLabel: string;
      precisionVal: string;
      speedLabel: string;
      speedVal: string;
      accuracyLabel: string;
      accuracyVal: string;
    };
  };
  simulator: {
    title: string;
    phaseA: string;
    phaseB: string;
    farPd: string;
    nearPd: string;
    fittingHeight: string;
    vertexDistance: string;
    pantoscopicAngle: string;
    wrapAngle: string;
    lensBoxA: string;
    lensBoxB: string;
    dbl: string;
    realignBtn: string;
    exportPdf: string;
    simulatingMsg: string;
  };
  features: {
    sectionTitle: string;
    sectionSubtitle: string;
    dualScanTitle: string;
    dualScanDesc: string;
    metricsSuiteTitle: string;
    metricsSuiteDesc: string;
    pdfReportsTitle: string;
    pdfReportsDesc: string;
    adminNotifTitle: string;
    adminNotifDesc: string;
    bilingualTitle: string;
    bilingualDesc: string;
  };
  metricsShowcase: {
    sectionTitle: string;
    sectionSubtitle: string;
    pdName: string;
    pdDesc: string;
    pdRange: string;
    fhName: string;
    fhDesc: string;
    fhRange: string;
    vdName: string;
    vdDesc: string;
    vdRange: string;
    pantoName: string;
    pantoDesc: string;
    pantoRange: string;
    wrapName: string;
    wrapDesc: string;
    wrapRange: string;
    boxingName: string;
    boxingDesc: string;
    boxingRange: string;
    clinicalImportance: string;
    typicalRange: string;
  };
  howItWorks: {
    sectionTitle: string;
    sectionSubtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
  };
  download: {
    sectionTitle: string;
    sectionSubtitle: string;
    statusBadge: string;
    androidTitle: string;
    androidDesc: string;
    androidBtn: string;
    windowsTitle: string;
    windowsDesc: string;
    windowsBtn: string;
    iosTitle: string;
    iosDesc: string;
    iosBtn: string;
    hardwareSpecsTitle: string;
    hardwareSpecsDesc: string;
    minRam: string;
    minCamera: string;
    osSupport: string;
  };
  modals: {
    downloadTitle: string;
    downloadSubtitle: string;
    adminTitle: string;
    adminSubtitle: string;
    nameLabel: string;
    emailLabel: string;
    clinicLabel: string;
    submitBtn: string;
    cancelBtn: string;
    supportTitle: string;
    supportSubtitle: string;
    messageLabel: string;
    sendBtn: string;
    closeBtn: string;
    successMsg: string;
  };
  footer: {
    slogan: string;
    description: string;
    quickLinks: string;
    legal: string;
    privacy: string;
    terms: string;
    copyright: string;
  };
}

export const translations: Record<Language, TranslationStructure> = {
  en: {
    nav: {
      features: 'Features',
      metrics: 'Optical Metrics',
      howItWorks: 'How It Works',
      download: 'Download APK',
      support: 'Support',
      downloadBtn: 'Download Android App',
      langBtn: 'العربية',
    },
    hero: {
      badge: 'LENZO Optical Engine 2.0 • Android Edition',
      titleStart: 'Precision Optical Measurements',
      titleHighlight: 'in the Palm of Your Hand',
      titleEnd: '',
      subtitle: 'The ultimate Android digital tool for opticians to accurately capture Pupillary Distance, Fitting Heights, Pantoscopic Angles, and Frame Parameters in seconds.',
      primaryCta: 'Download LENZO (Android APK)',
      secondaryCta: 'Request Admin Access',
      stats: {
        precisionLabel: 'Sub-millimeter Precision',
        precisionVal: '0.1 mm',
        speedLabel: 'Scan & Compute Time',
        speedVal: '< 3s',
        accuracyLabel: 'Clinical Lab Accuracy',
        accuracyVal: '99.8%',
      },
    },
    simulator: {
      title: 'Interactive Measurement Simulator',
      phaseA: 'Phase A: Front View Alignment',
      phaseB: 'Phase B: Side View Alignment',
      farPd: 'Far Binocular PD',
      nearPd: 'Near Binocular PD',
      fittingHeight: 'Fitting Height (FH)',
      vertexDistance: 'Vertex Distance (VD)',
      pantoscopicAngle: 'Pantoscopic Angle',
      wrapAngle: 'Panoramic Wrap Angle',
      lensBoxA: 'Lens Width (A)',
      lensBoxB: 'Lens Height (B)',
      dbl: 'Bridge Width (DBL)',
      realignBtn: 'Reset Reference Points',
      exportPdf: 'Generate PDF Report',
      simulatingMsg: 'Drag crosshairs or toggle view phases to inspect real-time optical calculations.',
    },
    features: {
      sectionTitle: 'Next-Generation Optical Features',
      sectionSubtitle: 'Engineered specifically for Android tablet & smartphone deployment in ophthalmic clinics.',
      dualScanTitle: 'Dual-Phase Scanning',
      dualScanDesc: 'High-precision Phase A (Front View) and Phase B (Side View) camera alignment for sub-millimeter anatomical accuracy.',
      metricsSuiteTitle: 'Complete Optical Metric Suite',
      metricsSuiteDesc: 'Automatic calculation of Far/Near PD, Fitting Height, Vertex Distance, Pantoscopic Angle, and Panoramic Wrap Angle.',
      pdfReportsTitle: 'Instant PDF Lab Reports',
      pdfReportsDesc: 'Generate, print, or share professional branded measurement reports with customers and optical labs instantly.',
      adminNotifTitle: 'Live Admin Push Notifications',
      adminNotifDesc: 'Real-time push notifications, updates, and announcements delivered directly to registered optician devices.',
      bilingualTitle: 'Full Bilingual Engine (EN / AR)',
      bilingualDesc: 'Seamless English and Arabic RTL interface toggle tailored for global eye care clinics and middle eastern labs.',
    },
    metricsShowcase: {
      sectionTitle: 'Complete Optical Metrics Showcase',
      sectionSubtitle: 'Click any metric below to explore its clinical calculation, diagram, and target range.',
      pdName: 'Pupillary Distance (PD)',
      pdDesc: 'Measures monocular and binocular distance between pupil centers for perfect optical centering.',
      pdRange: '50.0 mm - 75.0 mm (Adult Average: 63.0 mm)',
      fhName: 'Fitting Height (FH)',
      fhDesc: 'Vertical distance from the bottom of the frame lens edge to pupil center for progressive lenses.',
      fhRange: '14.0 mm - 26.0 mm',
      vdName: 'Vertex Distance (VD)',
      vdDesc: 'Distance between back surface of spectacle lens and anterior surface of cornea.',
      vdRange: '8.0 mm - 16.0 mm (Standard: 12.0 mm)',
      pantoName: 'Pantoscopic Angle',
      pantoDesc: 'Vertical tilt of spectacle lens frame relative to the vertical line of sight.',
      pantoRange: '4° - 12° (Optimum: 8°)',
      wrapName: 'Panoramic Wrap Angle',
      wrapDesc: 'Face-form angle curve of frame front along horizontal orbital plane.',
      wrapRange: '0° - 15° (Standard: 5°)',
      boxingName: 'Lens Boxing System (A, B, DBL)',
      boxingDesc: 'International ISO frame dimension standard: Lens Width (A), Height (B), and Distance Between Lenses (DBL).',
      boxingRange: 'ISO 8624 Standard Format',
      clinicalImportance: 'Clinical Significance',
      typicalRange: 'Typical Reference Range',
    },
    howItWorks: {
      sectionTitle: 'How LENZO Works',
      sectionSubtitle: 'Four simple steps to transform your Android tablet or phone into a precision digital optical pupillometer.',
      step1Title: '1. Register Android Device',
      step1Desc: 'Install LENZO APK, register your clinic hardware, and receive instant admin approval token.',
      step2Title: '2. Dual-Phase Scanning',
      step2Desc: 'Capture Phase A (Front View) and Phase B (Side View) photos of customer wearing frame with target card.',
      step3Title: '3. Precision Point Alignment',
      step3Desc: 'Adjust automated crosshair markers on screen for instant sub-millimeter metric calculations.',
      step4Title: '4. Save & Export PDF',
      step4Desc: 'Save patient measurement log locally or sync to cloud and generate instant lab PDF order.',
    },
    download: {
      sectionTitle: 'Download LENZO for Android',
      sectionSubtitle: 'Exclusively available as a high-performance Android APK build for tablets and smartphones.',
      statusBadge: 'System Status: Android App Store & Direct APK Operational',
      androidTitle: 'Android APK Package (v2.4.1)',
      androidDesc: 'Optimized for Android 8.0+ tablets & smartphones with autofocus camera alignment.',
      androidBtn: 'Download APK Direct (v2.4.1)',
      windowsTitle: 'Android Tablet Optimized',
      windowsDesc: 'Designed for 10-inch+ clinic tablets with touch-screen crosshair controls.',
      windowsBtn: 'Tablet Deployment Guide',
      iosTitle: 'Android Smartphone Ready',
      iosDesc: 'Full portrait and landscape support for mobile opticians on the go.',
      iosBtn: 'Mobile Requirements',
      hardwareSpecsTitle: 'Hardware Recommendations',
      hardwareSpecsDesc: 'For optimal sub-millimeter precision on Android devices, we recommend:',
      minRam: 'Minimum 3GB RAM & Octa-Core CPU',
      minCamera: '12MP Autofocus Camera with Flash',
      osSupport: 'Android 8.0 (Oreo) or Higher',
    },
    modals: {
      downloadTitle: 'Download LENZO Android App',
      downloadSubtitle: 'Download the official APK build directly or scan the QR code using your Android tablet.',
      adminTitle: 'Request Admin Access',
      adminSubtitle: 'Fill in your optical clinic credentials to request instant admin activation.',
      nameLabel: 'Full Name / Practitioner',
      emailLabel: 'Work Email Address',
      clinicLabel: 'Clinic / Optical Store Name',
      submitBtn: 'Submit Request',
      cancelBtn: 'Cancel',
      supportTitle: 'Contact Lab Support',
      supportSubtitle: 'Send a direct message to our optical software engineering team.',
      messageLabel: 'Your Message or Request',
      sendBtn: 'Send Message',
      closeBtn: 'Close',
      successMsg: 'Thank you! Your request has been received. Our team will contact you shortly.',
    },
    footer: {
      slogan: 'LENZO — Precision Vision Technology',
      description: 'The premier digital optical measurement application empowering opticians and eye care professionals on Android.',
      quickLinks: 'Quick Links',
      legal: 'Legal & Compliance',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      copyright: '© 2026 LENZO Technologies Inc. All rights reserved.',
    },
  },
  ar: {
    nav: {
      features: 'المميزات',
      metrics: 'القياسات البصرية',
      howItWorks: 'كيف يعمل',
      download: 'تحميل APK',
      support: 'الدعم الفني',
      downloadBtn: 'تحميل تطبيق الأندرويد',
      langBtn: 'English',
    },
    hero: {
      badge: 'محرك لينزو البصري 2.0 • نسخة الأندرويد',
      titleStart: 'دقة القياسات البصرية الرقمية',
      titleHighlight: 'بين يديك في ثوانٍ',
      titleEnd: '',
      subtitle: 'التطبيق الرقمي المخصص لأجهزة الأندرويد لأخصائيي النظارات وقياس البصر لالتقاط المسافة بين الحدقتين، ارتفاع المركز البصري، والزوايا البصرية.',
      primaryCta: 'تحميل LENZO (ملف APK للأندرويد)',
      secondaryCta: 'طلب صلاحيات المسؤول',
      stats: {
        precisionLabel: 'دقة فائقة أقل من مليمتر',
        precisionVal: '0.1 مم',
        speedLabel: 'سرعة المسح والحساب',
        speedVal: '< 3 ثوان',
        accuracyLabel: 'دقة المختبرات السريرية',
        accuracyVal: '99.8%',
      },
    },
    simulator: {
      title: 'محاكي القياسات البصرية التفاعلي',
      phaseA: 'المرحلة أ: المحاذاة الأمامية',
      phaseB: 'المرحلة ب: المحاذاة الجانبية',
      farPd: 'مسافة الحدقتين للبعيد (PD)',
      nearPd: 'مسافة الحدقتين للقريب (Near PD)',
      fittingHeight: 'ارتفاع المركز البصري (FH)',
      vertexDistance: 'مسافة رأس القرنية (VD)',
      pantoscopicAngle: 'زاوية الميل البصري (Panto)',
      wrapAngle: 'انحناء إطار النظارة (Wrap)',
      lensBoxA: 'عرض العدسة (A)',
      lensBoxB: 'ارتفاع العدسة (B)',
      dbl: 'عرض الجسر (DBL)',
      realignBtn: 'إعادة ضبط نقاط المرجعية',
      exportPdf: 'تصدير تقرير PDF',
      simulatingMsg: 'اسحب مصلبات التوجيه أو بدل مرحلة المحاذاة لمشاهدة الحسابات البصرية المباشرة.',
    },
    features: {
      sectionTitle: 'المميزات البصرية المتقدمة',
      sectionSubtitle: 'صُمم خصيصاً للتثبيت على الأجهزة اللوحية والهواتف بنظام أندرويد في مراكز العيون.',
      dualScanTitle: 'مسح ثنائي المرحلة (Dual-Phase)',
      dualScanDesc: 'محاذاة كاميرا فائقة الدقة للمرحلة (أ) الأمامية والمرحلة (ب) الجانبية لتحقيق أعلى دقة تشريحية.',
      metricsSuiteTitle: 'حزمة القياسات البصرية الكاملة',
      metricsSuiteDesc: 'حساب تلقائي لمسافة الحدقتين للبعيد والقريب، ارتفاع التركيز، مسافة القرنية، وزوايا انحناء الإطار.',
      pdfReportsTitle: 'تقارير PDF طبية فورية',
      pdfReportsDesc: 'إنشاء، طباعة أو مشاركة تقارير قياس احترافية تحمل شعار مركزك مع العملاء والمختبرات مباشرة.',
      adminNotifTitle: 'إشعارات الإدارة الفورية',
      adminNotifDesc: 'تنبيهات فورية، تحديثات، وإعلانات إدارية تصل مباشرة إلى أجهزة أخصائي البصريات.',
      bilingualTitle: 'دعم كامل للغة العربية والإنجليزي',
      bilingualDesc: 'واجهة متكاملة باللغة العربية (RTL) مع دعم كامل للغة الإنجليزية لتناسب كبرى مراكز العيون.',
    },
    metricsShowcase: {
      sectionTitle: 'عرض المعايير والقياسات البصرية',
      sectionSubtitle: 'انقر على أي قياس أدناه لاستكشاف كيفية حسابه، الشرح الطبي، والنطاق القياسي.',
      pdName: 'مسافة بين الحدقتين (PD)',
      pdDesc: 'قياس المسافة الأفقية بين مركزي حدقتي العينين لضمان التطابق التام للمركز البصري للعدسة.',
      pdRange: '50.0 مم - 75.0 مم (المتوسط للبالغين: 63.0 مم)',
      fhName: 'ارتفاع المركز البصري (FH)',
      fhDesc: 'المسافة الرأسية من الحد السفلي لإطار النظارة إلى مركز حدقة العين للعدسات المتدرجة (Progressive).',
      fhRange: '14.0 مم - 26.0 مم',
      vdName: 'مسافة رأس القرنية (VD)',
      vdDesc: 'المسافة الفاصلة بين السطح الخلفي لعدسة النظارة والسطح الأمامي لقرنية العين.',
      vdRange: '8.0 مم - 16.0 مم (القياسي: 12.0 مم)',
      pantoName: 'زاوية الميل الرأسي (Pantoscopic)',
      pantoDesc: 'زاوية ميل إطار النظارة رأسياً بالنسبة لخط النظر العمودي.',
      pantoRange: '4° - 12° (الأمثل: 8°)',
      wrapName: 'زاوية انحناء الإطار (Wrap Angle)',
      wrapDesc: 'درجة انحناء واجهة الإطار الأفقي حول وجه المريض.',
      wrapRange: '0° - 15° (القياسي: 5°)',
      boxingName: 'قياسات إطار النظارة (Boxing A, B, DBL)',
      boxingDesc: 'المعيار الدولي ISO لأبعاد الإطار: عرض العدسة (A)، ارتفاع العدسة (B)، وعرض الجسر (DBL).',
      boxingRange: 'معيار ISO 8624 الدولي',
      clinicalImportance: 'الأهمية الطبية والإكلينيكية',
      typicalRange: 'النطاق المرجعي القياسي',
    },
    howItWorks: {
      sectionTitle: 'كيف يعمل تطبيق LENZO',
      sectionSubtitle: 'أربع خطوات بسيطة لتحويل جهاز الأندرويد اللوحي أو هاتفك الذكي إلى جهاز قياس حدقي رقمي.',
      step1Title: '1. تسجيل جهاز الأندرويد',
      step1Desc: 'قم بتثبيت ملف APK، تسجيل بيانات مركز النظارات، والحصول على رمز التفعيل الفوري من الإدارة.',
      step2Title: '2. الالتقاط ثنائي المرحلة',
      step2Desc: 'التقاط صورة أمامية (المرحلة أ) وصورة جانبية (المرحلة ب) للمريض أثناء ارتداء الإطار مع بطاقة المعايرة.',
      step3Title: '3. محاذاة النقاط المرجعية',
      step3Desc: 'ضبط مصلبات التوجيه على الشاشة للحصول فوراً على كافة الحسابات والقياسات البصرية.',
      step4Title: '4. حفظ وتصدير PDF',
      step4Desc: 'حفظ سجل قياسات المريض محلياً أو سحابياً وتصدير أمر التصنيع مباشرة للمختبر عبر PDF.',
    },
    download: {
      sectionTitle: 'تحميل LENZO للأندرويد',
      sectionSubtitle: 'متوفر حصرياً كملف APK عالي الأداء للأجهزة اللوحية والهواتف الذكية بنظام أندرويد.',
      statusBadge: 'حالة النظام: التثبيت المباشر وملف APK يعمل بكفاءة',
      androidTitle: 'تثبيت ملف APK (v2.4.1)',
      androidDesc: 'مخصص لأجهزة الأندرويد اللوحية والهواتف بنظام أندرويد 8.0+ مع ضبط الكاميرا التلقائي.',
      androidBtn: 'تحميل ملف APK المباشر (v2.4.1)',
      windowsTitle: 'مهيأ للأجهزة اللوحية',
      windowsDesc: 'مصمم خصيصاً للأجهزة اللوحية قياس 10 بوصة مع تحكم لمسي في نقاط القياس.',
      windowsBtn: 'دليل تثبيت اللوحي',
      iosTitle: 'جاهز للهواتف الذكية',
      iosDesc: 'دعم كامل للوضع الأفقي والعمودي لمستخدمي الأندرويد المتنقلين.',
      iosBtn: 'متطلبات الأندرويد',
      hardwareSpecsTitle: 'متطلبات المواصفات الفنية للأندرويد',
      hardwareSpecsDesc: 'للحصول على أفضل دقة قياس أقل من مليمتر، نوصي بالمواصفات التالية:',
      minRam: 'ذاكرة عشوائية 3 جيجابايت مع معالج ثماني النواة',
      minCamera: 'كاميرا بدقة 12 ميجابكسل مع فلاش وضبط تلقائي',
      osSupport: 'أندرويد 8.0 (Oreo) أو أحدث',
    },
    modals: {
      downloadTitle: 'تحميل تطبيق LENZO للأندرويد',
      downloadSubtitle: 'حمل ملف APK المباشر أو امسح رمز الاستجابة السريعة (QR) باستخدام جهاز الأندرويد.',
      adminTitle: 'طلب صلاحيات مسؤول النظام',
      adminSubtitle: 'أدخل بيانات مركز النظارات للحصول على رمز التفعيل والدخول للوحة التحكم.',
      nameLabel: 'الاسم الكامل / الأخصائي',
      emailLabel: 'البريد الإلكتروني للعمل',
      clinicLabel: 'اسم مركز النظارات / العيادة',
      submitBtn: 'إرسال الطلب',
      cancelBtn: 'إلغاء',
      supportTitle: 'التواصل مع الدعم الفني',
      supportSubtitle: 'أرسل رسالة مباشرة إلى فريق مهندسي البرمجيات البصرية.',
      messageLabel: 'نص الرسالة أو الاستفسار',
      sendBtn: 'إرسال الرسالة',
      closeBtn: 'إغلاق',
      successMsg: 'شكراً لك! تم استلام طلبك بنجاح وسيقوم فريقنا بالتواصل معك قريباً.',
    },
    footer: {
      slogan: 'LENZO — تقنيات الرؤية الرقمية الدقيقة للأندرويد',
      description: 'التطبيق الرقمي المتقدم للقياسات البصرية لتمكين أخصائيي البصريات ومراكز العيون على منصة الأندرويد.',
      quickLinks: 'روابط سريعة',
      legal: 'الشروط والسياسات',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      copyright: '© 2026 جميع الحقوق محفوظة لشركة LENZO التقنية.',
    },
  },
};
