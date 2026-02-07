document.addEventListener('DOMContentLoaded', () => {
    // Translations Data
    const translations = {
        en: {
            pageTitle: "Lenzo - Advanced Optical Measurements",
            navFeatures: "Features",
            navMeasurements: "Measurements",
            navSolutions: "Solutions",
            navDownload: "Download",
            heroTitle: "Precision Optical Measurements <br><span class=\"text-gradient\">Redefined</span>",
            heroTitleHighlight: "Redefined",
            heroSubtitle: "A medical-grade mobile solution for precise lens fitting parameters. <br>Secure. Automated. Enterprise-ready.",
            btnDownloadAndroid: "Download",
            btnContact: "Contact Us",
            featuresTitle: "Core Capabilities",
            feature1Title: "Automated Scanning",
            feature1Desc: "Instant face detection and parameter extraction using advanced depth sensing and AI.",
            feature2Title: "Secure Authorization",
            feature2Desc: "Enterprise-grade security with device authorization and encrypted data transmission.",
            feature3Title: "Optical Measurement Report",
            feature3Desc: " Download the detailed PDF report containing optical measurement results.",
            measurementsTitle: "Comprehensive Optical Data",
            measurementsSubtitle: "Get a complete set of measurements required for advanced progressive and single vision lens fitting.",
            measPD: "Pupillary Distance (PD)",
            measPDDesc: "Monocular Left & Right PD measurements for precise optical centration.",
            measHeight: "Fitting Heights",
            measHeightDesc: "Vertical height from the pupil center to the bottom of the lens.",
            measNearPD: "Near PD",
            measNearPDDesc: "Pupillary distance calculated for reading / near vision tasks.",
            measVertex: "Vertex Distance",
            measVertexDesc: "Distance between the back surface of the lens and the apex of the cornea.",
            measPanto: "Pantoscopic Angle",
            measPantoDesc: "The angle of inclination of the frame front relative to the face.",
            measWrap: "Wrap Angle",
            measWrapDesc: "Curvature of the frame front, essential for high-base curve lenses.",
            measFrame: "Frame Dimensions",
            measFrameDesc: "A-Box (Width) and B-Box (Height) dimensions of the lens shape.",
            measDBL: "Distance Between Lenses (DBL)",
            measDBLDesc: "Bridge width measurement between the two lenses.",
            businessTitle: "For Lens Manufacturers",
            businessDesc: "Deploy Lenzo as your own branded solution. We offer full white-label capabilities to match your corporate identity.",
            businessFeature1: "✓ Custom Logo & Brand Colors",
            businessFeature2: "✓ API Integration with LMS",
            businessFeature3: "✓ Dedicated Support",
            btnContactSales: "Contact Sales",
            retailTitle: "For Optical Retailers",
            retailDesc: "Modernize your dispensing process. Lenzo turns your iPad or iPhone into a precision measurement tool, impressing patients and reducing errors.",
            retailFeature1Title: "Premium Patient Experience",
            retailFeature1Desc: "Showcase high-tech care with digital measurements.",
            retailFeature2Title: "Reduce Remakes",
            retailFeature2Desc: "Limit human error with automated pupil center detection.",
            ctaTitle: "Ready to Upgrade Your Workflow?",
            ctaSubtitle: "Experience the precision of Lenzo today.",
            footerTagline: "The standard for optical measurement precision.",
            footerProduct: "Product",
            footerWhiteLabel: "White Label",
            footerContact: "Contact",
            copyright: "&copy; 2026 Lenzo Optical Solutions. All rights reserved."
        },
        ar: {
            pageTitle: "Lenzo - قياسات بصرية متقدمة",
            navFeatures: "المميزات",
            navMeasurements: "القياسات",
            navSolutions: "الحلول",
            navDownload: "تحميل",
            heroTitle: "دقة القياسات البصرية <br><span class=\"text-gradient\">بمفهوم جديد</span>",
            heroTitleHighlight: "بمفهوم جديد",
            heroSubtitle: "حل طبي متكامل للهواتف المحمولة لاستخراج معايير العدسات بدقة. <br>آمن. آلي. ومُعد للشركات.",
            btnDownloadAndroid: "تحميل",
            btnContact: "تواصل معنا",
            featuresTitle: "القدرات الأساسية",
            feature1Title: "مسح آلي ذكي",
            feature1Desc: "كشف فوري للوجه واستخراج المعايير باستخدام تقنيات استشعار العمق والذكاء الاصطناعي.",
            feature2Title: "حماية وأمان",
            feature2Desc: "أمان بمستوى المؤسسات مع تفويض الأجهزة وتشفير نقل البيانات.",
            feature3Title: "تقرير القياسات البصرية",
            feature3Desc: "قم بتنزيل تقرير PDF مفصل يحتوي على نتائج القياسات البصرية.",
            measurementsTitle: "بيانات بصرية شاملة",
            measurementsSubtitle: "احصل على مجموعة كاملة من القياسات اللازمة لتركيب العدسات المتقدمة ومتعددة البؤر.",
            measPD: "المسافة بين الحدقتين (PD)",
            measPDDesc: "قياسات PD الأحادية لليمين واليسار لضمان تمركز بصري دقيق.",
            measHeight: "ارتفاع التركيب (Fitting Height)",
            measHeightDesc: "الارتفاع العمودي من مركز الحدقة إلى أسفل العدسة.",
            measNearPD: "PD للقريب",
            measNearPDDesc: "حساب المسافة بين الحدقتين لمهام القراءة والنظر للقريب.",
            measVertex: "مسافة القمة (Vertex Distance)",
            measVertexDesc: "المسافة بين السطح الخلفي للعدسة وقمة القرنية.",
            measPanto: "زاوية البانتوسكوبيك",
            measPantoDesc: "زاوية ميلان واجهة الإطار بالنسبة للوجه.",
            measWrap: "زاوية الالتفاف (Wrap Angle)",
            measWrapDesc: "انحناء واجهة الإطار، ضروري للعدسات ذات القاعدة المنحنية العالية.",
            measFrame: "أبعاد الإطار",
            measFrameDesc: "أبعاد الصندوق A (العرض) و B (الارتفاع) لشكل العدسة.",
            measDBL: "المسافة بين العدستين (DBL)",
            measDBLDesc: "عرض الجسر بين العدستين.",
            businessTitle: "لمصنعي العدسات",
            businessDesc: "انشر تطبيق Lenzo كحل خاص بعلامتك التجارية. نقدم تخصيصًا كاملاً (White-label) ليتناسب مع هويتك.",
            businessFeature1: "✓ شعار وألوان مخصصة",
            businessFeature2: "✓ ربط برمجي (API) مع أنظمة الإدارة",
            businessFeature3: "✓ دعم فني مخصص",
            btnContactSales: "تواصل مع المبيعات",
            retailTitle: "للمتاجر البصرية",
            retailDesc: "حدّث عملية البيع لديك. يحول Lenzo جهاز iPad أو iPhone إلى أداة قياس دقيقة، مما يبهر العملاء ويقلل الأخطاء.",
            retailFeature1Title: "تجربة عملاء مميزة",
            retailFeature1Desc: "اعرض رعاية عالية التقنية مع قياسات رقمية.",
            retailFeature2Title: "تقليل عمليات إعادة التصنيع",
            retailFeature2Desc: "الحد من الأخطاء البشرية باستخدام الكشف الآلي لمركز الحدقة.",
            ctaTitle: "جاهز لتطوير عملك؟",
            ctaSubtitle: "جرب دقة Lenzo اليوم.",
            footerTagline: "المعيار الذهبي لدقة القياسات البصرية.",
            footerProduct: "المنتج",
            footerWhiteLabel: "حلول الشركات",
            footerContact: "اتصل بنا",
            copyright: "&copy; 2026 Lenzo Optical Solutions. جميع الحقوق محفوظة."
        }
    };

    // Language Handling
    const langToggleBtn = document.getElementById('langToggle');
    let currentLang = localStorage.getItem('lenzo_lang') || 'en';

    function updateContent(lang) {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        // Update Text
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (key === 'heroTitle') {
                    // Handle HTML content separately for Hero Title
                    el.innerHTML = translations[lang][key];
                } else {
                    el.innerText = translations[lang][key];
                }
            }
        });

        // Update Button Text
        langToggleBtn.innerText = lang === 'ar' ? 'English' : 'العربية';
    }

    // Initialize
    updateContent(currentLang);

    // Toggle Event
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        localStorage.setItem('lenzo_lang', currentLang);
        updateContent(currentLang);
    });

    // Reveal Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
