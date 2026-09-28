(() => {
  const phone = '+923067972833';
  const phoneDisplay = '+92 306 7972833';
  const email = 'Halaelectric@gmail.com';
  const whatsapp = 'https://wa.me/966593426539';
  const icon = (name) => {
    const paths = {
      commercial: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 7h2m4 0h2M8 11h2m4 0h2M8 15h2m4 0h2M10 21v-3h4v3"/>',
      home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1V10Z"/>',
      install: '<path d="M12 3v18M3 12h18M6 6l12 12m0-12L6 18"/>',
      wiring: '<path d="M4 4h5v5H4zM15 15h5v5h-5zM9 6h5a2 2 0 0 1 2 2v7M9 6v5a2 2 0 0 0 2 2h5"/>',
      maintenance: '<path d="M14 6a5 5 0 0 0-6.7 6.7L3 17l4 4 4.3-4.3A5 5 0 0 0 18 10l-3 3-4-4 3-3Z"/>',
      troubleshoot: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5M8 10h5m-2.5-2.5v5"/>',
      panel: '<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h6m-6 4h2m2 0h2m-6 4h2m2 0h2"/>',
      lighting: '<path d="M9 18h6m-5 3h4m-4-6a6 6 0 1 1 4 0v3h-4v-3Z"/>',
      emergency: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m13 7-4 6h3l-1 4 4-6h-3l1-4Z"/>',
      inspection: '<path d="m9 12 2 2 4-4"/><circle cx="12" cy="12" r="9"/>',
    };
    return `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${paths[name] || paths.install}</svg>`;
  };

  const labels = {
    en: {
      home: 'Home', services: 'Services', commercial: 'Commercial', residential: 'Residential',
      about: 'About', faq: 'FAQ', contact: 'Contact', call: 'Call Now', whatsapp: 'WhatsApp Us',
      breadcrumbs: 'Breadcrumb', servicesHub: 'Services', dammam: 'Dammam, Saudi Arabia',
      localLabel: '24/7 ELECTRICAL SERVICES · DAMMAM', available: 'Available 24/7',
      related: 'Related Services', whatWeProvide: 'What We Provide', commonNeeds: 'Common Needs',
      process: 'How We Work', faqTitle: 'Frequently Asked Questions',
      contactTitle: 'Need electrical support in Dammam?', contactText: 'Call or message Halaelectric to discuss your electrical service needs.',
      learnMore: 'Learn More', explore: 'Explore Services', request: 'Request Service',
      commercialDescription: 'Commercial electrical solutions for businesses and commercial environments.',
      residentialDescription: 'Electrical services for homes and residential properties in Dammam.',
      installationDescription: 'Electrical installation and wiring solutions for properties and new projects.',
      emergencyDescription: '24/7 electrical assistance for urgent electrical problems in Dammam.',
      hubTitle: 'Professional Electrical Services for Homes & Businesses.',
      hubDescription: 'Halaelectric provides commercial and residential electrical services in Dammam, including installation, wiring, maintenance, troubleshooting, lighting and emergency electrical repairs.',
      categories: 'SERVICE CATEGORIES',
      allServices: 'Electrical Services in Dammam',
      allServicesText: 'Explore the main types of electrical services offered by Halaelectric.',
      installTitle: 'Electrical Installation & Wiring.',
      installText: 'Installation and wiring support for homes, commercial spaces and new electrical projects in Dammam.',
      installServices: 'Installation & Wiring',
      maintainTitle: 'Electrical Problems Need the Right Diagnosis.',
      maintainText: 'Maintenance, inspection and troubleshooting services to help identify and address electrical issues.',
      maintainServices: 'Maintenance & Troubleshooting',
      emergencyTitle: 'Electrical Emergency? Halaelectric Is Available 24/7.',
      emergencyText: 'Contact Halaelectric for short circuits, breaker problems, electrical faults, urgent troubleshooting and emergency electrical repairs.',
      howTitle: 'A Clear Process from Contact to Completion.',
      faqIntro: 'Answers to common questions about Halaelectric services.',
      viewFaq: 'View All FAQs',
      commercialPageTitle: 'Commercial Electrical Services in Dammam.',
      commercialPageDescription: 'Professional electrical installation, wiring, maintenance, inspection and troubleshooting services for commercial environments in Dammam.',
      commercialValueTitle: 'Electrical Infrastructure Built Around Your Business.',
      commercialValueText: 'Reliable electrical systems benefit from proper installation, regular maintenance, inspection, organized work and considered troubleshooting when a fault appears.',
      residentialPageTitle: 'Residential Electrical Services in Dammam.',
      residentialPageDescription: 'Professional electrical services for homes in Dammam, from wiring and lighting to breaker problems, short circuits and electrical repairs.',
      residentialTrustTitle: 'Reliable Electrical Support for Your Home.',
      residentialTrustText: 'Discuss your electrical needs with Halaelectric. We provide residential electrical work in Dammam, communicate clearly about the requirement, and are available 24/7.',
      valueOne: 'Reliable electrical systems', valueTwo: 'Proper installation', valueThree: 'Maintenance & inspection',
      valueFour: 'Troubleshooting', valueFive: 'Organized electrical work', valueSix: 'Clear communication',
      processContact: 'Contact', processContactText: 'Contact Halaelectric by phone or WhatsApp.',
      processUnderstand: 'Understand the Requirement', processUnderstandText: 'Share the electrical service you need.',
      processAssess: 'Assess the Electrical Work', processAssessText: 'Discuss the issue or scope of work.',
      processPlan: 'Plan the Solution', processPlanText: 'Determine the appropriate electrical solution.',
      processExecute: 'Execute the Work', processExecuteText: 'Carry out the required electrical work.',
      processComplete: 'Complete the Service', processCompleteText: 'Complete the service and review the work.',
      emergencyLink: 'Emergency Electrical Services',
      footerText: 'Professional commercial and residential electrical services in Dammam.',
      footerServices: 'SERVICES', footerCompany: 'COMPANY', footerContact: 'CONTACT',
      rights: 'All rights reserved.',
      cardInstall: 'Electrical Installation', cardWiring: 'Electrical Wiring',
      cardMaintenance: 'Electrical Maintenance', cardTroubleshooting: 'Electrical Troubleshooting',
      cardPanels: 'Electrical Panel Services', cardBreakers: 'Circuit Breaker Services',
      cardShort: 'Short Circuit Repair', cardLighting: 'Electrical Lighting',
      cardInspection: 'Electrical Inspection', cardEmergency: 'Emergency Electrical Repairs',
      catCommercial: 'COMMERCIAL', catResidential: 'RESIDENTIAL',
      catInstallation: 'INSTALLATION & WIRING', catEmergency: 'EMERGENCY',
      commercialGridTitle: 'Commercial Electrical Services',
      residentialGridTitle: 'Residential Electrical Services',
      learnCommercial: 'Explore Commercial Services',
      learnResidential: 'Explore Residential Services',
      learnInstall: 'Explore Installation Services',
      emergencyHelp: 'Emergency Electrical Help',
      requestCommercial: 'Request Commercial Service',
      requestResidential: 'Request Residential Service',
      processShort: 'CONTACT', faqEmergencyQ: 'Do you provide 24/7 emergency electrical services in Dammam?',
      faqEmergencyA: 'Yes. Halaelectric is available 24/7 for urgent electrical needs in Dammam. Contact us by phone or WhatsApp.',
      faqCommercialQ: 'Do you provide commercial electrical services?',
      faqCommercialA: 'Yes. Halaelectric provides commercial electrical installation, wiring, maintenance, inspection and troubleshooting in Dammam.',
      faqResidentialQ: 'Do you provide residential electrical services?',
      faqResidentialA: 'Yes. Halaelectric provides electrical services for homes in Dammam, including wiring, lighting, repairs and maintenance.',
      faqWiringQ: 'Can I contact you about electrical wiring or installation?',
      faqWiringA: 'Yes. Contact Halaelectric to discuss wiring or installation needs for a home or commercial property.',
      faqContactQ: 'How can I request a service?',
      faqContactA: 'Call Halaelectric or message us on WhatsApp at +966 59 342 6539.',
      individualIntro: 'Halaelectric provides this electrical service for residential and commercial customers in Dammam. Contact us to discuss the property, issue or work required.',
      problem: 'Service needs may include:', benefit1: 'Service for residential and commercial properties in Dammam.',
      benefit2: 'Five years of hands-on electrical experience.', benefit3: 'Available 24/7 for urgent electrical needs.',
      use1: 'New installation or planned electrical work', use2: 'Maintenance or inspection request',
      use3: 'Electrical fault that needs troubleshooting', use4: 'Urgent electrical repair request',
      faqServiceQ: 'How do I arrange this service?',
      faqServiceA: 'Call or message Halaelectric, describe the property and electrical work needed, and discuss the next steps.',
      schemaService: 'Electrical service', category: 'Category', relatedText: 'You may also need:',
      whyHalaelectric: 'WHY HALAELECTRIC', benefitsTitle: 'Professional service in Dammam.',
      individualTitleSuffix: ' in Dammam.', individualIntroTitle: 'for homes and businesses.',
      serviceCardCommercial: 'Commercial electrical service', serviceCardResidential: 'Residential electrical service',
      metaCommercial: 'Commercial Electrician in Dammam | Halaelectric',
      metaResidential: 'Residential Electrician in Dammam | Halaelectric',
    },
    ar: {
      home: 'الرئيسية', services: 'الخدمات', commercial: 'تجاري', residential: 'سكني',
      about: 'من نحن', faq: 'الأسئلة الشائعة', contact: 'تواصل', call: 'اتصل الآن', whatsapp: 'تواصل عبر واتساب',
      breadcrumbs: 'مسار التنقل', servicesHub: 'الخدمات', dammam: 'الدمام، المملكة العربية السعودية',
      localLabel: 'خدمات كهربائية على مدار الساعة · الدمام', available: 'متاحون 24/7',
      related: 'خدمات ذات صلة', whatWeProvide: 'ما نقدمه', commonNeeds: 'احتياجات شائعة',
      process: 'آلية العمل', faqTitle: 'الأسئلة الشائعة',
      contactTitle: 'هل تحتاج إلى دعم كهربائي في الدمام؟', contactText: 'اتصل أو راسل هلاإلكتريك لمناقشة احتياجاتك من الخدمات الكهربائية.',
      learnMore: 'اعرف المزيد', explore: 'استكشف الخدمات', request: 'اطلب الخدمة',
      commercialDescription: 'حلول كهربائية للأعمال والبيئات التجارية.',
      residentialDescription: 'خدمات كهربائية للمنازل والعقارات السكنية في الدمام.',
      installationDescription: 'حلول التركيبات والتوصيلات الكهربائية للعقارات والمشاريع الجديدة.',
      emergencyDescription: 'مساعدة كهربائية على مدار الساعة للمشكلات العاجلة في الدمام.',
      hubTitle: 'خدمات كهربائية احترافية للمنازل والأعمال.',
      hubDescription: 'تقدم هلاإلكتريك خدمات كهربائية تجارية وسكنية في الدمام، تشمل التركيبات والتوصيلات والصيانة وتشخيص الأعطال والإضاءة والإصلاحات الطارئة.',
      categories: 'فئات الخدمات',
      allServices: 'خدمات كهربائية في الدمام',
      allServicesText: 'استكشف أنواع الخدمات الكهربائية التي تقدمها هلاإلكتريك.',
      installTitle: 'التركيبات والتوصيلات الكهربائية.',
      installText: 'دعم التركيبات والتوصيلات للمنازل والمساحات التجارية والمشاريع الكهربائية الجديدة في الدمام.',
      installServices: 'التركيبات والتوصيلات',
      maintainTitle: 'المشكلات الكهربائية تحتاج إلى تشخيص مناسب.',
      maintainText: 'خدمات الصيانة والفحص وتشخيص الأعطال للمساعدة في تحديد المشكلات الكهربائية ومعالجتها.',
      maintainServices: 'الصيانة وتشخيص الأعطال',
      emergencyTitle: 'حالة طوارئ كهربائية؟ هلاإلكتريك متاحة 24/7.',
      emergencyText: 'تواصل مع هلاإلكتريك بشأن القصر الكهربائي ومشكلات القواطع والأعطال والتشخيص العاجل والإصلاحات الطارئة.',
      howTitle: 'خطوات واضحة من التواصل إلى إنجاز الخدمة.',
      faqIntro: 'إجابات عن الأسئلة الشائعة حول خدمات هلاإلكتريك.',
      viewFaq: 'عرض كل الأسئلة الشائعة',
      commercialPageTitle: 'خدمات كهربائية تجارية في الدمام.',
      commercialPageDescription: 'خدمات احترافية للتركيب والتوصيلات والصيانة والفحص وتشخيص الأعطال في البيئات التجارية بالدمام.',
      commercialValueTitle: 'بنية كهربائية تدعم أعمالك.',
      commercialValueText: 'تستفيد الأنظمة الكهربائية الموثوقة من التركيب المناسب والصيانة والفحص والعمل المنظم وتشخيص الأعطال عند ظهورها.',
      residentialPageTitle: 'خدمات كهربائية سكنية في الدمام.',
      residentialPageDescription: 'خدمات كهربائية احترافية للمنازل في الدمام، من التوصيلات والإضاءة إلى مشكلات القواطع والدوائر القصيرة والإصلاحات.',
      residentialTrustTitle: 'دعم كهربائي موثوق لمنزلك.',
      residentialTrustText: 'ناقش احتياجاتك الكهربائية مع هلاإلكتريك. نقدم أعمالاً كهربائية سكنية في الدمام، ونتواصل بوضوح بشأن المطلوب، ونوفر إمكانية التواصل على مدار الساعة.',
      valueOne: 'أنظمة كهربائية موثوقة', valueTwo: 'تركيب مناسب', valueThree: 'صيانة وفحص',
      valueFour: 'تشخيص الأعطال', valueFive: 'أعمال كهربائية منظمة', valueSix: 'تواصل واضح',
      processContact: 'تواصل', processContactText: 'تواصل مع هلاإلكتريك عبر الهاتف أو واتساب.',
      processUnderstand: 'فهم المتطلبات', processUnderstandText: 'شاركنا الخدمة الكهربائية التي تحتاجها.',
      processAssess: 'تقييم العمل الكهربائي', processAssessText: 'ناقش المشكلة أو نطاق العمل.',
      processPlan: 'تخطيط الحل', processPlanText: 'تحديد الحل الكهربائي المناسب.',
      processExecute: 'تنفيذ العمل', processExecuteText: 'تنفيذ الأعمال الكهربائية المطلوبة.',
      processComplete: 'إنجاز الخدمة', processCompleteText: 'إنجاز الخدمة ومراجعة العمل.',
      emergencyLink: 'خدمات كهربائية طارئة',
      footerText: 'خدمات كهربائية احترافية للمنازل والمشاريع التجارية في الدمام.',
      footerServices: 'الخدمات', footerCompany: 'الشركة', footerContact: 'تواصل',
      rights: 'جميع الحقوق محفوظة.',
      cardInstall: 'تركيبات كهربائية', cardWiring: 'توصيلات كهربائية',
      cardMaintenance: 'صيانة كهربائية', cardTroubleshooting: 'تشخيص الأعطال الكهربائية',
      cardPanels: 'خدمات اللوحات الكهربائية', cardBreakers: 'خدمات قواطع الدائرة',
      cardShort: 'إصلاح القصر الكهربائي', cardLighting: 'الإضاءة الكهربائية',
      cardInspection: 'الفحص الكهربائي', cardEmergency: 'إصلاحات كهربائية طارئة',
      catCommercial: 'تجاري', catResidential: 'سكني',
      catInstallation: 'التركيبات والتوصيلات', catEmergency: 'الطوارئ',
      commercialGridTitle: 'خدمات كهربائية تجارية',
      residentialGridTitle: 'خدمات كهربائية سكنية',
      learnCommercial: 'استكشف الخدمات التجارية',
      learnResidential: 'استكشف الخدمات السكنية',
      learnInstall: 'استكشف خدمات التركيبات',
      emergencyHelp: 'مساعدة كهربائية طارئة',
      requestCommercial: 'اطلب خدمة تجارية',
      requestResidential: 'اطلب خدمة سكنية',
      processShort: 'تواصل', faqEmergencyQ: 'هل تقدمون خدمات طوارئ كهربائية على مدار الساعة في الدمام؟',
      faqEmergencyA: 'نعم. هلاإلكتريك متاحة على مدار الساعة للاحتياجات الكهربائية العاجلة في الدمام. تواصل معنا هاتفياً أو عبر واتساب.',
      faqCommercialQ: 'هل تقدمون خدمات كهربائية تجارية؟',
      faqCommercialA: 'نعم. تقدم هلاإلكتريك خدمات التركيب والتوصيلات والصيانة والفحص وتشخيص الأعطال للمشاريع التجارية في الدمام.',
      faqResidentialQ: 'هل تقدمون خدمات كهربائية سكنية؟',
      faqResidentialA: 'نعم. تقدم هلاإلكتريك خدمات كهربائية للمنازل في الدمام، تشمل التوصيلات والإضاءة والإصلاحات والصيانة.',
      faqWiringQ: 'هل يمكنني التواصل بشأن التوصيلات أو التركيبات الكهربائية؟',
      faqWiringA: 'نعم. تواصل مع هلاإلكتريك لمناقشة احتياجات التوصيلات أو التركيبات لمنزلك أو عقارك التجاري.',
      faqContactQ: 'كيف يمكنني طلب الخدمة؟',
      faqContactA: 'اتصل بهلاإلكتريك أو راسلنا عبر واتساب على الرقم +966 59 342 6539.',
      individualIntro: 'تقدم هلاإلكتريك هذه الخدمة الكهربائية للعملاء السكنيين والتجاريين في الدمام. تواصل معنا لمناقشة العقار أو المشكلة أو العمل المطلوب.',
      problem: 'قد تشمل احتياجات الخدمة:', benefit1: 'خدمة للعقارات السكنية والتجارية في الدمام.',
      benefit2: 'خمس سنوات من الخبرة العملية في المجال الكهربائي.', benefit3: 'متاحون على مدار الساعة للاحتياجات العاجلة.',
      use1: 'تركيب جديد أو عمل كهربائي مخطط', use2: 'طلب صيانة أو فحص',
      use3: 'عطل كهربائي يحتاج إلى تشخيص', use4: 'طلب إصلاح كهربائي عاجل',
      faqServiceQ: 'كيف أرتب للحصول على هذه الخدمة؟',
      faqServiceA: 'اتصل أو راسل هلاإلكتريك، واشرح نوع العقار والعمل الكهربائي المطلوب لمناقشة الخطوات التالية.',
      schemaService: 'خدمة كهربائية', category: 'الفئة', relatedText: 'قد تحتاج أيضاً إلى:',
      whyHalaelectric: 'لماذا هلاإلكتريك', benefitsTitle: 'خدمة احترافية في الدمام.',
      individualTitleSuffix: ' في الدمام.', individualIntroTitle: 'للمنازل والأعمال.',
      serviceCardCommercial: 'خدمة كهربائية تجارية', serviceCardResidential: 'خدمة كهربائية سكنية',
      metaCommercial: 'كهربائي تجاري في الدمام | هلاإلكتريك',
      metaResidential: 'كهربائي سكني في الدمام | هلاإلكتريك',
    },
  };

  const services = {
    'electrical-installation-dammam': {
      title: 'Electrical Installation', ar: 'تركيبات كهربائية', category: 'Installation & Wiring', categoryAr: 'التركيبات والتوصيلات', icon: 'install',
      description: 'Electrical installation for residential and commercial properties and new electrical projects in Dammam.',
      descriptionAr: 'تركيبات كهربائية للعقارات السكنية والتجارية والمشاريع الجديدة في الدمام.',
      benefit: 'Installation support for new electrical work and existing properties.',
      related: ['electrical-wiring-dammam', 'electrical-panel-services-dammam', 'electrical-lighting-dammam'],
      faqs: [['What electrical installation work can I discuss?', 'Contact Halaelectric to discuss installation for a home, commercial property or new electrical project.']],
    },
    'electrical-wiring-dammam': {
      title: 'Electrical Wiring', ar: 'توصيلات كهربائية', category: 'Installation & Wiring', categoryAr: 'التركيبات والتوصيلات', icon: 'wiring',
      description: 'Electrical wiring installation, repair and troubleshooting for homes and commercial properties in Dammam.',
      descriptionAr: 'تركيب وإصلاح وتشخيص التوصيلات الكهربائية للمنازل والعقارات التجارية في الدمام.',
      benefit: 'Wiring service for residential and commercial electrical requirements.',
      related: ['electrical-installation-dammam', 'electrical-maintenance-dammam', 'electrical-troubleshooting-dammam'],
      faqs: [['Do you provide home and commercial wiring?', 'Yes. Halaelectric provides electrical wiring services for residential and commercial properties in Dammam.']],
    },
    'electrical-maintenance-dammam': {
      title: 'Electrical Maintenance', ar: 'صيانة كهربائية', category: 'Maintenance & Troubleshooting', categoryAr: 'الصيانة وتشخيص الأعطال', icon: 'maintenance',
      description: 'Electrical maintenance support for residential and commercial electrical systems in Dammam.',
      descriptionAr: 'دعم صيانة الأنظمة الكهربائية السكنية والتجارية في الدمام.',
      benefit: 'Maintenance service to help address electrical system requirements.',
      related: ['electrical-inspection-dammam', 'electrical-troubleshooting-dammam', 'electrical-panel-services-dammam'],
      faqs: [['Can I ask about electrical system maintenance?', 'Yes. Contact Halaelectric and describe the property and maintenance you need.']],
    },
    'electrical-troubleshooting-dammam': {
      title: 'Electrical Troubleshooting', ar: 'تشخيص الأعطال الكهربائية', category: 'Maintenance & Troubleshooting', categoryAr: 'الصيانة وتشخيص الأعطال', icon: 'troubleshoot',
      description: 'Electrical fault finding and troubleshooting for homes and commercial properties in Dammam.',
      descriptionAr: 'تشخيص الأعطال الكهربائية للمنازل والعقارات التجارية في الدمام.',
      benefit: 'Diagnostic support to help identify electrical issues and discuss next steps.',
      related: ['circuit-breaker-electrician-dammam', 'short-circuit-repair-dammam', 'electrical-maintenance-dammam'],
      faqs: [['What should I share when reporting an electrical fault?', 'Describe the issue, when it occurs and the type of property when you contact Halaelectric.']],
    },
    'electrical-panel-services-dammam': {
      title: 'Electrical Panel Services', ar: 'خدمات اللوحات الكهربائية', category: 'Commercial & Residential', categoryAr: 'تجاري وسكني', icon: 'panel',
      description: 'Electrical panel service, maintenance and inspection for properties in Dammam.',
      descriptionAr: 'خدمة وصيانة وفحص اللوحات الكهربائية للعقارات في الدمام.',
      benefit: 'Panel service for residential and commercial electrical systems.',
      related: ['circuit-breaker-electrician-dammam', 'electrical-inspection-dammam', 'electrical-maintenance-dammam'],
      faqs: [['Do you provide electrical panel services?', 'Yes. Contact Halaelectric to discuss electrical panel service for your property.']],
    },
    'circuit-breaker-electrician-dammam': {
      title: 'Circuit Breaker Services', ar: 'خدمات قواطع الدائرة', category: 'Maintenance & Troubleshooting', categoryAr: 'الصيانة وتشخيص الأعطال', icon: 'panel',
      description: 'Circuit breaker service and troubleshooting for electrical systems in Dammam.',
      descriptionAr: 'خدمة قواطع الدائرة وتشخيص أعطال الأنظمة الكهربائية في الدمام.',
      benefit: 'Support for circuit breaker problems and related electrical troubleshooting.',
      related: ['electrical-panel-services-dammam', 'electrical-troubleshooting-dammam', 'short-circuit-repair-dammam'],
      faqs: [['Can you help with a circuit breaker problem?', 'Yes. Contact Halaelectric to discuss circuit breaker service or troubleshooting in Dammam.']],
    },
    'short-circuit-repair-dammam': {
      title: 'Short Circuit Repair', ar: 'إصلاح القصر الكهربائي', category: 'Emergency & Repairs', categoryAr: 'الطوارئ والإصلاحات', icon: 'emergency',
      description: 'Short circuit repair and electrical troubleshooting for urgent faults in Dammam.',
      descriptionAr: 'إصلاح القصر الكهربائي وتشخيص الأعطال العاجلة في الدمام.',
      benefit: 'Contact Halaelectric for short circuit faults and urgent electrical repair needs.',
      related: ['emergency-electrician-dammam', 'electrical-troubleshooting-dammam', 'circuit-breaker-electrician-dammam'],
      faqs: [['Is short circuit repair available as an emergency service?', 'Halaelectric is available 24/7 for urgent electrical needs. Call or WhatsApp to discuss the fault.']],
    },
    'electrical-lighting-dammam': {
      title: 'Electrical Lighting Services', ar: 'خدمات الإضاءة الكهربائية', category: 'Installation & Wiring', categoryAr: 'التركيبات والتوصيلات', icon: 'lighting',
      description: 'Lighting installation and repair for indoor and outdoor residential and commercial spaces in Dammam.',
      descriptionAr: 'تركيب وإصلاح الإضاءة للمساحات السكنية والتجارية الداخلية والخارجية في الدمام.',
      benefit: 'Lighting installation and repair for homes and commercial properties.',
      related: ['electrical-installation-dammam', 'electrical-wiring-dammam', 'electrical-maintenance-dammam'],
      faqs: [['Do you install and repair indoor and outdoor lighting?', 'Yes. Halaelectric provides lighting installation and repair for indoor and outdoor spaces.']],
    },
    'electrical-inspection-dammam': {
      title: 'Electrical Inspection', ar: 'الفحص الكهربائي', category: 'Maintenance & Troubleshooting', categoryAr: 'الصيانة وتشخيص الأعطال', icon: 'inspection',
      description: 'Electrical inspection services to assess electrical systems at residential and commercial properties in Dammam.',
      descriptionAr: 'خدمات فحص الأنظمة الكهربائية في العقارات السكنية والتجارية في الدمام.',
      benefit: 'Inspection service to discuss the condition and requirements of an electrical system.',
      related: ['electrical-maintenance-dammam', 'electrical-panel-services-dammam', 'electrical-troubleshooting-dammam'],
      faqs: [['What can I ask about during an electrical inspection?', 'Contact Halaelectric to describe the property and the electrical system or concern you would like inspected.']],
    },
    'emergency-electrician-dammam': {
      title: 'Emergency Electrical Services', ar: 'خدمات كهربائية طارئة', category: 'Emergency & Repairs', categoryAr: 'الطوارئ والإصلاحات', icon: 'emergency',
      description: '24/7 contact for urgent electrical faults, short circuits, breaker problems and emergency electrical repairs in Dammam.',
      descriptionAr: 'تواصل على مدار الساعة للأعطال والدوائر القصيرة ومشكلات القواطع والإصلاحات الكهربائية الطارئة في الدمام.',
      benefit: 'Halaelectric is available 24/7 for urgent electrical needs in Dammam.',
      related: ['short-circuit-repair-dammam', 'circuit-breaker-electrician-dammam', 'electrical-troubleshooting-dammam'],
      faqs: [['How do I contact Halaelectric for urgent electrical help?', 'Call +92 306 7972833 or send a WhatsApp message to discuss the urgent fault.']],
    },
  };

  const commercialCards = [
    ['Commercial Electrical Installation', 'Electrical installation work for commercial environments and new projects.', 'commercial', 'electrical-installation-dammam'],
    ['Commercial Electrical Wiring', 'Electrical wiring service for commercial properties in Dammam.', 'wiring', 'electrical-wiring-dammam'],
    ['Commercial Electrical Maintenance', 'Maintenance support for commercial electrical systems.', 'maintenance', 'electrical-maintenance-dammam'],
    ['Electrical Panel Services', 'Panel service and maintenance for commercial electrical systems.', 'panel', 'electrical-panel-services-dammam'],
    ['Electrical Inspection', 'Inspection services for commercial electrical systems.', 'inspection', 'electrical-inspection-dammam'],
    ['Commercial Electrical Troubleshooting', 'Fault finding and troubleshooting for commercial electrical issues.', 'troubleshoot', 'electrical-troubleshooting-dammam'],
    ['Commercial Lighting', 'Lighting installation and repair for commercial spaces.', 'lighting', 'electrical-lighting-dammam'],
    ['Commercial Electrical Projects', 'Electrical installation support for new commercial projects.', 'install', 'electrical-installation-dammam'],
  ];
  Object.entries(services).forEach(([path, item]) => {
    const localized = {
      name: { en: item.title, ar: item.ar },
      shortDescription: { en: item.description, ar: item.descriptionAr },
      category: { en: item.category, ar: item.categoryAr },
      heroTitle: { en: `${item.title} in Dammam`, ar: `${item.ar} في الدمام` },
      heroDescription: { en: item.description, ar: item.descriptionAr },
      benefits: {
        en: [item.benefit, labels.en.benefit2, labels.en.benefit3],
        ar: [labels.ar.benefit1, labels.ar.benefit2, labels.ar.benefit3],
      },
      relatedServices: item.related,
      faq: {
        en: item.faqs,
        ar: [[labels.ar.faqServiceQ, labels.ar.faqServiceA]],
      },
      cta: {
        en: { label: labels.en.request, phone, whatsapp },
        ar: { label: labels.ar.request, phone, whatsapp },
      },
      seo: {
        title: `${item.title} in Dammam | Halaelectric`,
        description: item.description,
      },
      content: {
        en: { introduction: item.description, benefit: item.benefit },
        ar: { introduction: item.descriptionAr, benefit: labels.ar.benefit1 },
      },
    };
    Object.assign(item, { slug: path, ...localized });
  });
  const residentialCards = [
    ['Home Electrical Wiring', 'Wiring installation, repair and troubleshooting for homes.', 'wiring', 'electrical-wiring-dammam'],
    ['Electrical Repairs', 'Repair support for common residential electrical faults.', 'maintenance', 'electrical-troubleshooting-dammam'],
    ['Lighting Services', 'Lighting installation and repair inside and outside the home.', 'lighting', 'electrical-lighting-dammam'],
    ['Switch & Socket Services', 'Installation and repair for switches and electrical sockets.', 'install', 'electrical-installation-dammam'],
    ['Circuit Breaker Services', 'Service and troubleshooting for circuit breaker problems.', 'panel', 'circuit-breaker-electrician-dammam'],
    ['Short Circuit Repair', 'Support for short circuit faults and urgent electrical issues.', 'emergency', 'short-circuit-repair-dammam'],
    ['Electrical Troubleshooting', 'Fault finding to identify residential electrical problems.', 'troubleshoot', 'electrical-troubleshooting-dammam'],
    ['Emergency Electrical Repairs', '24/7 contact for urgent electrical repairs in Dammam.', 'emergency', 'emergency-electrician-dammam'],
  ];
  const installationLinks = [
    ['Electrical Installation', 'Electrical installation services for new work and existing properties.', 'install', 'electrical-installation-dammam'],
    ['Electrical Wiring', 'Wiring installation and repair for commercial and residential properties.', 'wiring', 'electrical-wiring-dammam'],
    ['New Electrical Projects', 'Electrical installation support for new projects.', 'commercial', 'electrical-installation-dammam'],
    ['Lighting Installation', 'Installation and repair for indoor and outdoor lighting.', 'lighting', 'electrical-lighting-dammam'],
    ['Switch & Socket Installation', 'Switch and socket installation or repair.', 'install', 'electrical-installation-dammam'],
    ['Electrical Panel Services', 'Panel service and installation support.', 'panel', 'electrical-panel-services-dammam'],
  ];
  const maintenanceLinks = [
    ['Electrical Maintenance', 'Maintenance support for electrical systems.', 'maintenance', 'electrical-maintenance-dammam'],
    ['Electrical Troubleshooting', 'Fault finding for electrical issues.', 'troubleshoot', 'electrical-troubleshooting-dammam'],
    ['Electrical Fault Finding', 'Diagnostic support to identify electrical faults.', 'troubleshoot', 'electrical-troubleshooting-dammam'],
    ['Circuit Breakers', 'Circuit breaker services and troubleshooting.', 'panel', 'circuit-breaker-electrician-dammam'],
    ['Electrical Panels', 'Panel inspection and maintenance services.', 'panel', 'electrical-panel-services-dammam'],
    ['Short Circuits', 'Short circuit repair and troubleshooting.', 'emergency', 'short-circuit-repair-dammam'],
    ['Electrical Inspection', 'Inspection services for electrical systems.', 'inspection', 'electrical-inspection-dammam'],
  ];
  const workflows = [
    ['Contact', 'Contact Halaelectric by phone or WhatsApp.'],
    ['Understand the Requirement', 'Share the electrical service you need.'],
    ['Assess the Electrical Work', 'Discuss the issue or scope of work.'],
    ['Plan the Solution', 'Determine the appropriate electrical solution.'],
    ['Execute the Work', 'Carry out the required electrical work.'],
    ['Complete the Service', 'Complete the service and review the work.'],
  ];
  const arabicWorkflows = [
    ['تواصل', 'تواصل مع هلاإلكتريك عبر الهاتف أو واتساب.'],
    ['فهم المتطلبات', 'شاركنا الخدمة الكهربائية التي تحتاجها.'],
    ['تقييم العمل الكهربائي', 'ناقش المشكلة أو نطاق العمل.'],
    ['تخطيط الحل', 'تحديد الحل الكهربائي المناسب.'],
    ['تنفيذ العمل', 'تنفيذ الأعمال الكهربائية المطلوبة.'],
    ['إنجاز الخدمة', 'إنجاز الخدمة ومراجعة العمل.'],
  ];
  const emergencyContent = {
    en: {
      eyebrow: '24/7 EMERGENCY ELECTRICAL SERVICES · DAMMAM',
      title: '24/7 Emergency Electrician in Dammam',
      description: 'Fast professional electrical assistance for urgent faults, short circuits, breaker problems, power issues and other emergency electrical needs in Dammam.',
      years: 'Years Experience',
      availability: 'Availability',
      capability: 'Commercial + Residential',
      problemsTitle: 'Emergency Electrical Problems We Handle',
      problemsIntro: 'Contact Halaelectric about urgent electrical faults in your home or commercial property.',
      problems: [
        ['Electrical Faults', 'Electrical faults that need professional troubleshooting.', 'troubleshoot', 'electrical-troubleshooting-dammam'],
        ['Short Circuit Problems', 'Short circuit faults and related electrical issues.', 'emergency', 'short-circuit-repair-dammam'],
        ['Circuit Breaker Issues', 'Circuit breaker problems and repeated trips.', 'panel', 'circuit-breaker-electrician-dammam'],
        ['Electrical Wiring Problems', 'Wiring faults and urgent wiring concerns.', 'wiring', 'electrical-wiring-dammam'],
        ['Power-Related Electrical Faults', 'Sudden electrical faults affecting power at a property.', 'install', 'electrical-troubleshooting-dammam'],
        ['Electrical Panel Problems', 'Electrical panel faults that need inspection or service.', 'panel', 'electrical-panel-services-dammam'],
        ['Urgent Lighting Problems', 'Urgent faults involving indoor or outdoor lighting.', 'lighting', 'electrical-lighting-dammam'],
        ['Switch & Socket Problems', 'Urgent issues with electrical switches and sockets.', 'install', 'electrical-installation-dammam'],
      ],
      responseTitle: 'Professional Help When You Need It',
      responseIntro: 'A clear first step for urgent electrical service in Dammam.',
      responseSteps: [
        ['Contact', 'Call or WhatsApp and explain the electrical problem.'],
        ['Assess', 'We understand the issue and identify the appropriate service requirement.'],
        ['Resolve', 'The required electrical repair, troubleshooting, or service work is carried out.'],
      ],
      emergencyCheckTitle: 'Is It an Electrical Emergency?',
      emergencyCheckIntro: 'These situations may require urgent professional attention. If you are unsure, contact Halaelectric to discuss the issue.',
      warningSigns: [
        'Burning smell from electrical equipment',
        'Sparks',
        'Repeated breaker trips',
        'Sudden electrical faults',
        'Damaged wiring',
        'Serious short-circuit symptoms',
        'Electrical panel problems',
        'Dangerous electrical conditions',
      ],
      safetyTitle: 'Put distance between yourself and immediate danger.',
      safetyText: 'If you notice smoke, fire, exposed live electrical components, or another immediate danger, move away from the area and contact the appropriate emergency services.',
      commercialTitle: 'Commercial Emergency Electrical Services',
      commercialText: 'Emergency electrical support for shops, offices and commercial spaces in Dammam.',
      commercialScenarios: ['Electrical faults', 'Wiring problems', 'Breaker issues', 'Lighting problems', 'Urgent electrical maintenance needs'],
      residentialTitle: 'Residential Emergency Electrical Services',
      residentialText: 'Emergency electrical support for homes in Dammam.',
      residentialScenarios: ['Home electrical faults', 'Wiring problems', 'Breaker issues', 'Short circuits', 'Lighting problems', 'Switch and socket issues'],
      exploreCommercial: 'Explore Commercial Services',
      exploreResidential: 'Explore Residential Services',
      whyTitle: 'Why Choose Halaelectric?',
      whyPoints: [
        ['5 Years of Experience', 'Five years of hands-on electrical experience.'],
        ['24/7 Availability', 'Available around the clock for urgent electrical needs.'],
        ['Commercial & Residential Capability', 'Electrical services for commercial and residential requirements.'],
        ['Professional Electrical Service', 'Professional support for installations, repairs and troubleshooting.'],
        ['Dammam-Focused Service', 'Serving customers in Dammam, Saudi Arabia.'],
        ['English & Arabic Communication', 'Communication available in English and Arabic.'],
      ],
      relatedTitle: 'Related Electrical Services',
      related: [
        'electrical-installation-dammam', 'electrical-wiring-dammam', 'electrical-maintenance-dammam',
        'electrical-troubleshooting-dammam', 'electrical-panel-services-dammam',
        'circuit-breaker-electrician-dammam', 'short-circuit-repair-dammam',
        'electrical-lighting-dammam', 'electrical-inspection-dammam',
      ],
      faqTitle: 'Emergency Electrical Service FAQs',
      faqs: [
        ['Do you provide 24/7 emergency electrical services in Dammam?', 'Yes. Halaelectric is available 24/7 for emergency electrical needs in Dammam. Call or WhatsApp to discuss the issue.'],
        ['What types of electrical problems can require emergency assistance?', 'Urgent faults may include short circuits, breaker problems, wiring faults, electrical panel issues and other electrical problems that need prompt attention.'],
        ['Do you handle residential electrical emergencies?', 'Yes. Halaelectric provides residential electrical services in Dammam, including urgent repairs and troubleshooting.'],
        ['Do you provide commercial emergency electrical services?', 'Yes. Contact Halaelectric about urgent electrical faults in shops, offices and other commercial spaces.'],
        ['Can I contact Halaelectric through WhatsApp?', 'Yes. Message Halaelectric on WhatsApp at +966 59 342 6539.'],
        ['What should I do if I notice sparks or a burning smell?', 'Move away from immediate danger. If there is smoke, fire, exposed live electrical components or another immediate danger, contact the appropriate emergency services.'],
        ['Do you provide electrical troubleshooting in Dammam?', 'Yes. Halaelectric provides electrical fault finding and troubleshooting for residential and commercial properties in Dammam.'],
      ],
      ctaTitle: 'Need Emergency Electrical Assistance?',
      ctaText: 'For urgent electrical problems in Dammam, contact Halaelectric through phone or WhatsApp.',
      alt: 'Electrician inspecting electrical equipment in a professional setting',
    },
    ar: {
      eyebrow: 'خدمات كهربائية طارئة على مدار الساعة · الدمام',
      title: 'كهربائي طوارئ على مدار الساعة في الدمام',
      description: 'مساعدة كهربائية احترافية للأعطال العاجلة والدوائر القصيرة ومشكلات القواطع وانقطاع التيار وغيرها من الاحتياجات الكهربائية الطارئة في الدمام.',
      years: 'سنوات من الخبرة',
      availability: 'متاحون على مدار الساعة',
      capability: 'تجاري وسكني',
      problemsTitle: 'المشكلات الكهربائية الطارئة التي نتعامل معها',
      problemsIntro: 'تواصل مع هلاإلكتريك بشأن الأعطال الكهربائية العاجلة في منزلك أو عقارك التجاري.',
      problems: [
        ['أعطال كهربائية', 'أعطال كهربائية تحتاج إلى تشخيص احترافي.', 'troubleshoot', 'electrical-troubleshooting-dammam'],
        ['مشكلات القصر الكهربائي', 'أعطال القصر الكهربائي والمشكلات المرتبطة بها.', 'emergency', 'short-circuit-repair-dammam'],
        ['مشكلات قواطع الدائرة', 'مشكلات القواطع والفصل المتكرر.', 'panel', 'circuit-breaker-electrician-dammam'],
        ['مشكلات التوصيلات الكهربائية', 'أعطال التوصيلات والمشكلات العاجلة المرتبطة بها.', 'wiring', 'electrical-wiring-dammam'],
        ['أعطال كهربائية مرتبطة بالطاقة', 'أعطال كهربائية مفاجئة تؤثر على الطاقة في العقار.', 'install', 'electrical-troubleshooting-dammam'],
        ['مشكلات اللوحات الكهربائية', 'أعطال اللوحات الكهربائية التي تحتاج إلى فحص أو خدمة.', 'panel', 'electrical-panel-services-dammam'],
        ['مشكلات الإضاءة العاجلة', 'أعطال عاجلة في الإضاءة الداخلية أو الخارجية.', 'lighting', 'electrical-lighting-dammam'],
        ['مشكلات المفاتيح والمقابس', 'مشكلات عاجلة في المفاتيح والمقابس الكهربائية.', 'install', 'electrical-installation-dammam'],
      ],
      responseTitle: 'مساعدة احترافية عند الحاجة',
      responseIntro: 'خطوات واضحة لطلب خدمة كهربائية عاجلة في الدمام.',
      responseSteps: [
        ['تواصل', 'اتصل أو راسلنا عبر واتساب واشرح المشكلة الكهربائية.'],
        ['تقييم', 'نفهم المشكلة ونحدد الخدمة المناسبة المطلوبة.'],
        ['معالجة', 'يتم تنفيذ الإصلاح أو تشخيص الأعطال أو العمل الكهربائي المطلوب.'],
      ],
      emergencyCheckTitle: 'هل هذه حالة طوارئ كهربائية؟',
      emergencyCheckIntro: 'قد تتطلب هذه الحالات عناية احترافية عاجلة. إذا لم تكن متأكداً، تواصل مع هلاإلكتريك لمناقشة المشكلة.',
      warningSigns: [
        'رائحة احتراق من المعدات الكهربائية',
        'شرر كهربائي',
        'فصل القاطع بشكل متكرر',
        'أعطال كهربائية مفاجئة',
        'توصيلات كهربائية تالفة',
        'علامات خطيرة على قصر كهربائي',
        'مشكلات في اللوحة الكهربائية',
        'ظروف كهربائية خطرة',
      ],
      safetyTitle: 'ابتعد عن أي خطر مباشر.',
      safetyText: 'إذا لاحظت دخاناً أو حريقاً أو مكونات كهربائية حية مكشوفة أو أي خطر مباشر آخر، ابتعد عن المكان واتصل بخدمات الطوارئ المختصة.',
      commercialTitle: 'خدمات طوارئ كهربائية تجارية',
      commercialText: 'دعم كهربائي طارئ للمحلات والمكاتب والمساحات التجارية في الدمام.',
      commercialScenarios: ['أعطال كهربائية', 'مشكلات التوصيلات', 'مشكلات القواطع', 'مشكلات الإضاءة', 'احتياجات صيانة كهربائية عاجلة'],
      residentialTitle: 'خدمات طوارئ كهربائية سكنية',
      residentialText: 'دعم كهربائي طارئ للمنازل في الدمام.',
      residentialScenarios: ['أعطال كهربائية منزلية', 'مشكلات التوصيلات', 'مشكلات القواطع', 'دوائر قصيرة', 'مشكلات الإضاءة', 'مشكلات المفاتيح والمقابس'],
      exploreCommercial: 'استكشف الخدمات التجارية',
      exploreResidential: 'استكشف الخدمات السكنية',
      whyTitle: 'لماذا تختار هلاإلكتريك؟',
      whyPoints: [
        ['خبرة 5 سنوات', 'خمس سنوات من الخبرة العملية في المجال الكهربائي.'],
        ['متاحون 24/7', 'متاحون على مدار الساعة للاحتياجات الكهربائية العاجلة.'],
        ['خدمات تجارية وسكنية', 'خدمات كهربائية للاحتياجات التجارية والسكنية.'],
        ['خدمة كهربائية احترافية', 'دعم احترافي للتركيبات والإصلاحات وتشخيص الأعطال.'],
        ['تركيز على الدمام', 'خدمة العملاء في الدمام، المملكة العربية السعودية.'],
        ['التواصل بالعربية والإنجليزية', 'التواصل متاح بالعربية والإنجليزية.'],
      ],
      relatedTitle: 'خدمات كهربائية ذات صلة',
      related: [
        'electrical-installation-dammam', 'electrical-wiring-dammam', 'electrical-maintenance-dammam',
        'electrical-troubleshooting-dammam', 'electrical-panel-services-dammam',
        'circuit-breaker-electrician-dammam', 'short-circuit-repair-dammam',
        'electrical-lighting-dammam', 'electrical-inspection-dammam',
      ],
      faqTitle: 'الأسئلة الشائعة حول خدمات الطوارئ',
      faqs: [
        ['هل تقدمون خدمات كهربائية طارئة على مدار الساعة في الدمام؟', 'نعم. هلاإلكتريك متاحة على مدار الساعة للاحتياجات الكهربائية الطارئة في الدمام. اتصل أو راسلنا عبر واتساب لمناقشة المشكلة.'],
        ['ما المشكلات الكهربائية التي قد تتطلب مساعدة طارئة؟', 'قد تشمل الأعطال العاجلة القصر الكهربائي ومشكلات القواطع والتوصيلات واللوحات الكهربائية وغيرها من المشكلات التي تحتاج إلى عناية سريعة.'],
        ['هل تتعاملون مع الطوارئ الكهربائية السكنية؟', 'نعم. تقدم هلاإلكتريك خدمات كهربائية سكنية في الدمام، تشمل الإصلاحات العاجلة وتشخيص الأعطال.'],
        ['هل تقدمون خدمات طوارئ كهربائية تجارية؟', 'نعم. تواصل مع هلاإلكتريك بشأن الأعطال الكهربائية العاجلة في المحلات والمكاتب والمساحات التجارية.'],
        ['هل يمكنني التواصل مع هلاإلكتريك عبر واتساب؟', 'نعم. راسل هلاإلكتريك عبر واتساب على الرقم +966 59 342 6539.'],
        ['ماذا أفعل إذا لاحظت شرراً أو رائحة احتراق؟', 'ابتعد عن الخطر المباشر. إذا كان هناك دخان أو حريق أو مكونات كهربائية حية مكشوفة أو خطر مباشر آخر، فاتصل بخدمات الطوارئ المختصة.'],
        ['هل تقدمون خدمة تشخيص الأعطال الكهربائية في الدمام؟', 'نعم. تقدم هلاإلكتريك خدمات تحديد الأعطال وتشخيصها للعقارات السكنية والتجارية في الدمام.'],
      ],
      ctaTitle: 'هل تحتاج إلى مساعدة كهربائية طارئة؟',
      ctaText: 'للمشكلات الكهربائية العاجلة في الدمام، تواصل مع هلاإلكتريك هاتفياً أو عبر واتساب.',
      alt: 'فني كهرباء يفحص معدات كهربائية في موقع عمل احترافي',
    },
  };
  const routeSegments = decodeURIComponent(location.pathname).split('/').filter(Boolean);
  if (routeSegments[routeSegments.length - 1] === 'index.html') routeSegments.pop();
  const slug = routeSegments[routeSegments.length - 1] || 'services';
  const lang = { value: 'en' };
  const t = (key) => labels[lang.value][key] || labels.en[key] || key;
  const href = (path) => `../${path}/`;
  const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const slugLink = (target, text) => `<a class="service-promo-link" href="${href(target)}">${text}<span aria-hidden="true">↗</span></a>`;
  const serviceCard = (item, index, translatedTitle, translatedDescription) => {
    const [title, description, symbol, target] = item;
    return `<a class="service-promo-card reveal" href="${href(target)}"><span class="service-promo-icon">${icon(symbol)}</span><span class="service-promo-count">${String(index + 1).padStart(2, '0')}</span><h3>${escape(translatedTitle || title)}</h3><p>${escape(translatedDescription || description)}</p><span class="service-promo-link">${t('learnMore')}<span aria-hidden="true">↗</span></span></a>`;
  };
  const localizedService = (item) => ({
    title: lang.value === 'ar' ? item.ar : item.title,
    category: item.category[lang.value],
    description: lang.value === 'ar' ? item.descriptionAr : item.description,
    benefit: lang.value === 'ar' ? item.benefitAr || labels.ar.benefit1 : item.benefit,
  });
  const pageTitle = () => {
    if (slug === 'services') return lang.value === 'ar' ? 'الخدمات الكهربائية في الدمام | هلاإلكتريك' : 'Electrical Services in Dammam | Halaelectric';
    if (slug === 'commercial-electrician-dammam') return t('metaCommercial');
    if (slug === 'residential-electrician-dammam') return t('metaResidential');
    if (slug === 'emergency-electrician-dammam') return lang.value === 'ar' ? 'كهربائي طوارئ على مدار الساعة في الدمام | هلاإلكتريك' : '24/7 Emergency Electrician in Dammam | Halaelectric';
    const item = services[slug];
    if (!item) return 'Electrical Services in Dammam | Halaelectric';
    return lang.value === 'ar' ? `${item.heroTitle.ar} | هلاإلكتريك` : item.seo.title;
  };
  const description = () => {
    if (slug === 'services') return lang.value === 'ar' ? labels.ar.hubDescription : labels.en.hubDescription;
    if (slug === 'commercial-electrician-dammam') return t('commercialPageDescription');
    if (slug === 'residential-electrician-dammam') return t('residentialPageDescription');
    if (slug === 'emergency-electrician-dammam') return emergencyContent[lang.value].description;
    const item = services[slug];
    return item ? localizedService(item).description : labels.en.hubDescription;
  };
  const cardList = (cards) => `<div class="service-promo-grid">${cards.map((item, i) => serviceCard(item, i)).join('')}</div>`;
  const processSection = (isCommercial = false) => {
    const steps = lang.value === 'ar' ? arabicWorkflows : workflows;
    return `<section class="page-process service-page-section"><div class="service-page-container"><div class="service-page-heading"><p class="eyebrow">${t('process')}</p><h2>${isCommercial ? (lang.value === 'ar' ? 'خطوات العمل التجاري.' : 'A Practical Commercial Service Process.') : t('howTitle')}</h2></div><ol class="service-timeline">${steps.map((step, i) => `<li class="reveal"><span>${String(i + 1).padStart(2, '0')}</span><div><h3>${escape(step[0])}</h3><p>${escape(step[1])}</p></div></li>`).join('')}</ol></div></section>`;
  };
  const faqSection = () => {
    const faqData = [
      [t('faqEmergencyQ'), t('faqEmergencyA')],
      [t('faqCommercialQ'), t('faqCommercialA')],
      [t('faqResidentialQ'), t('faqResidentialA')],
      [t('faqWiringQ'), t('faqWiringA')],
      [t('faqContactQ'), t('faqContactA')],
    ];
    const custom = services[slug]
      ? services[slug].faq[lang.value]
      : null;
    const data = custom ? [...custom, ...faqData.slice(0, 3)] : faqData;
    return `<section class="service-page-section page-faq"><div class="service-page-container"><div class="service-page-heading"><p class="eyebrow">${t('faqTitle')}</p><h2>${t('faqIntro')}</h2></div><div class="service-faq-list">${data.map(([q, a], i) => `<article class="faq-item"><h3><button class="faq-question" aria-expanded="false" aria-controls="service-faq-${i}" id="service-faq-q-${i}"><span>${escape(q)}</span><span class="faq-plus" aria-hidden="true"></span></button></h3><div class="faq-answer" id="service-faq-${i}" role="region" aria-labelledby="service-faq-q-${i}" hidden><p>${escape(a)}</p></div></article>`).join('')}</div><a class="faq-all-link" href="../index.html#faq">${t('viewFaq')} <span aria-hidden="true">↗</span></a></div></section>`;
  };
  const ctaSection = (headline = t('contactTitle'), copy = t('contactText')) => `<section class="service-page-cta"><div class="service-page-container service-page-cta-inner"><div><p class="eyebrow">${t('available')}</p><h2>${escape(headline)}</h2><p>${escape(copy)}</p></div><div class="service-page-cta-actions"><a class="button button-primary button-large" href="tel:${phone}">${t('call')}</a><a class="button button-light-outline button-large" href="${whatsapp}" target="_blank" rel="noopener noreferrer">${t('whatsapp')}</a></div></div></section>`;
  const serviceHeader = () => `<header class="site-header service-site-header"><div class="container header-inner"><a class="brand" href="../index.html" aria-label="Halaelectric home"><span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 40 40" fill="none"><path d="M11 29V11h5v7h8v-7h5v18h-5v-7h-8v7h-5Z"/><path d="M7 20H4m32 0h-3M20 7V4m0 32v-3"/></svg></span><span class="brand-copy"><strong>HALAELECTRIC</strong><small>${t('dammam')}</small></span></a><button class="menu-toggle" type="button" aria-label="${lang.value === 'ar' ? 'فتح القائمة' : 'Open navigation'}" aria-controls="service-navigation" aria-expanded="false"><span></span><span></span></button><nav class="primary-navigation" id="service-navigation" aria-label="Main navigation"><a href="../index.html">${t('home')}</a><a href="../services/">${t('services')}</a><a href="../commercial-electrician-dammam/">${t('commercial')}</a><a href="../residential-electrician-dammam/">${t('residential')}</a><a class="mobile-nav-link" href="../emergency-electrician-dammam/">${t('emergencyLink')}</a><a href="../index.html#about">${t('about')}</a><a href="../index.html#projects">${lang.value === 'ar' ? 'الأعمال' : 'Projects'}</a><a href="../index.html#faq">${t('faq')}</a><a href="../index.html#contact">${t('contact')}</a><div class="mobile-nav-actions"><a class="button button-outline" href="tel:${phone}">${t('call')}</a><a class="button button-primary" href="${whatsapp}">${t('whatsapp')}</a><div class="mobile-menu-language" aria-label="${lang.value === 'ar' ? 'اللغة' : 'Language'}"><button type="button" data-service-lang="en" aria-pressed="${lang.value === 'en'}">EN</button><span>|</span><button type="button" data-service-lang="ar" aria-pressed="${lang.value === 'ar'}">العربية</button></div></div></nav><div class="header-actions"><a class="header-whatsapp" href="${whatsapp}" target="_blank" rel="noopener noreferrer">${t('whatsapp')}</a><a class="button button-primary header-call" href="tel:${phone}">${t('call')}</a><div class="language-switch" aria-label="Language"><button type="button" data-service-lang="en" aria-pressed="${lang.value === 'en'}">EN</button><span>|</span><button type="button" data-service-lang="ar" aria-pressed="${lang.value === 'ar'}">العربية</button></div></div></div></header>`;
  const serviceFooter = () => `<footer class="service-site-footer"><div class="service-page-container footer-grid"><div class="footer-brand-column"><a class="brand" href="../index.html"><span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 40 40" fill="none"><path d="M11 29V11h5v7h8v-7h5v18h-5v-7h-8v7h-5Z"/></svg></span><span class="brand-copy"><strong>HALAELECTRIC</strong><small>${t('dammam')}</small></span></a><p>${t('footerText')}</p></div><div class="footer-column"><h2>${t('footerServices')}</h2><a href="../services/">${t('services')}</a><a href="../commercial-electrician-dammam/">${t('commercial')}</a><a href="../residential-electrician-dammam/">${t('residential')}</a><a href="../electrical-installation-dammam/">${t('cardInstall')}</a><a href="../electrical-wiring-dammam/">${t('cardWiring')}</a><a href="../emergency-electrician-dammam/">${t('emergencyLink')}</a></div><div class="footer-column"><h2>${t('footerCompany')}</h2><a href="../index.html#about">${t('about')}</a><a href="../index.html#projects">${lang.value === 'ar' ? 'الأعمال' : 'Projects'}</a><a href="../index.html#faq">${t('faq')}</a><a href="../index.html#contact">${t('contact')}</a></div><div class="footer-column footer-contact"><h2>${t('footerContact')}</h2><span>${t('dammam')}</span><span>${t('available')}</span><a href="tel:${phone}">${phoneDisplay}</a><a href="${whatsapp}" target="_blank" rel="noopener noreferrer">${t('whatsapp')}</a><a href="mailto:${email}">${email}</a></div></div><div class="service-page-container footer-bottom"><p>© ${new Date().getFullYear()} Halaelectric. ${t('rights')}</p><div class="footer-language"><button type="button" data-service-lang="en" aria-pressed="${lang.value === 'en'}">EN</button><span>|</span><button type="button" data-service-lang="ar" aria-pressed="${lang.value === 'ar'}">العربية</button></div></div></footer><div class="mobile-cta"><a href="tel:${phone}"><span>↗</span>${t('call')}</a><a href="${whatsapp}" target="_blank" rel="noopener noreferrer"><span>↗</span>${t('whatsapp')}</a></div>`;
  const breadcrumb = (current) => slug === 'services'
    ? `<nav class="service-breadcrumb" aria-label="${t('breadcrumbs')}"><a href="../index.html">${t('home')}</a><span>/</span><span aria-current="page">${escape(current)}</span></nav>`
    : `<nav class="service-breadcrumb" aria-label="${t('breadcrumbs')}"><a href="../index.html">${t('home')}</a><span>/</span><a href="../services/">${t('servicesHub')}</a><span>/</span><span aria-current="page">${escape(current)}</span></nav>`;
  const categoryCard = (slugName, title, copy, symbol, link, cta) => `<article class="service-category-card reveal"><span class="service-promo-icon">${icon(symbol)}</span><span class="service-category-label">${title}</span><h3>${copy}</h3>${slugLink(link, cta)}</article>`;
  const renderHub = () => {
    const title = t('hubTitle');
    const categories = `<div class="service-category-grid">${categoryCard('', t('catCommercial'), t('commercialDescription'), 'commercial', 'commercial-electrician-dammam', t('learnCommercial'))}${categoryCard('', t('catResidential'), t('residentialDescription'), 'home', 'residential-electrician-dammam', t('learnResidential'))}${categoryCard('', t('catInstallation'), t('installationDescription'), 'wiring', 'electrical-installation-dammam', t('learnInstall'))}${categoryCard('', t('catEmergency'), t('emergencyDescription'), 'emergency', 'emergency-electrician-dammam', t('emergencyHelp'))}</div>`;
    const installItems = installationLinks.map(([name, copy, symbol, target]) => [name, copy, symbol, target]);
    const maintainItems = maintenanceLinks.map(([name, copy, symbol, target]) => [name, copy, symbol, target]);
    const installLocalized = lang.value === 'ar'
      ? ['التركيبات الكهربائية','التوصيلات الكهربائية','مشاريع كهربائية جديدة','تركيب الإضاءة','تركيب المفاتيح والمقابس','خدمات اللوحات الكهربائية']
      : [];
    const installDescriptions = lang.value === 'ar'
      ? ['تركيبات كهربائية للأعمال الجديدة والعقارات القائمة.','تركيب وإصلاح التوصيلات للعقارات السكنية والتجارية.','دعم التركيبات الكهربائية للمشاريع الجديدة.','تركيب وإصلاح الإضاءة الداخلية والخارجية.','تركيب أو إصلاح المفاتيح والمقابس.','خدمات تركيب وصيانة اللوحات الكهربائية.']
      : [];
    const maintainLocalized = lang.value === 'ar'
      ? ['الصيانة الكهربائية','تشخيص الأعطال الكهربائية','تحديد الأعطال الكهربائية','قواطع الدائرة','اللوحات الكهربائية','الدوائر القصيرة','الفحص الكهربائي']
      : [];
    const maintainDescriptions = lang.value === 'ar'
      ? ['صيانة الأنظمة الكهربائية للعقارات.','تشخيص الأعطال في الأنظمة الكهربائية.','دعم تحديد الأعطال الكهربائية.','خدمات قواطع الدائرة وتشخيصها.','فحص وصيانة اللوحات الكهربائية.','إصلاح القصر الكهربائي وتشخيصه.','فحص الأنظمة الكهربائية السكنية والتجارية.']
      : [];
    const gridWithTitles = (items, names, descriptions, introKey) => `<div class="service-page-heading compact"><div><p class="eyebrow">${t(introKey)}</p><h2>${introKey === 'installServices' ? t('installTitle') : t('maintainTitle')}</h2></div><p>${introKey === 'installServices' ? t('installText') : t('maintainText')}</p></div><div class="service-promo-grid">${items.map((item, i) => serviceCard(item, i, names[i], descriptions[i])).join('')}</div>`;
    const directorySection = (name, title, intro, items, localizedTitles, localizedDescriptions, buttonKey, route) => `<section class="service-page-section ${name === 'residential' ? 'service-muted-section' : ''}"><div class="service-page-container"><div class="service-page-heading compact"><div><p class="eyebrow">${t(name)}</p><h2>${title}</h2></div><p>${intro}</p></div><div class="service-promo-grid">${items.map((item, i) => serviceCard(item, i, localizedTitles?.[i], localizedDescriptions?.[i])).join('')}</div><a class="button button-outline directory-link" href="${href(route)}">${buttonKey}<span aria-hidden="true">↗</span></a></div></section>`;
    const commercialTitles = lang.value === 'ar'
      ? ['تركيبات كهربائية تجارية','توصيلات كهربائية تجارية','صيانة كهربائية تجارية','خدمات اللوحات الكهربائية','الفحص الكهربائي','تشخيص أعطال كهربائية تجارية','إضاءة تجارية','مشاريع كهربائية تجارية']
      : null;
    const commercialDescriptions = lang.value === 'ar'
      ? ['تركيبات كهربائية للبيئات التجارية والمشاريع الجديدة.','خدمة التوصيلات الكهربائية للعقارات التجارية.','دعم صيانة الأنظمة الكهربائية التجارية.','خدمة وصيانة اللوحات الكهربائية التجارية.','خدمات فحص الأنظمة الكهربائية التجارية.','تشخيص الأعطال الكهربائية في البيئات التجارية.','تركيب وإصلاح الإضاءة للمساحات التجارية.','دعم التركيبات الكهربائية للمشاريع الجديدة.']
      : null;
    const residentialTitles = lang.value === 'ar'
      ? ['توصيلات كهربائية منزلية','إصلاحات كهربائية','خدمات الإضاءة','خدمات المفاتيح والمقابس','خدمات قواطع الدائرة','إصلاح القصر الكهربائي','تشخيص الأعطال الكهربائية','إصلاحات كهربائية طارئة']
      : null;
    const residentialDescriptions = lang.value === 'ar'
      ? ['تركيب وإصلاح وتشخيص التوصيلات الكهربائية للمنازل.','دعم إصلاح الأعطال الكهربائية السكنية.','تركيب وإصلاح الإضاءة داخل المنزل وخارجه.','تركيب وإصلاح المفاتيح والمقابس الكهربائية.','خدمات وتشخيص مشكلات قواطع الدائرة.','دعم إصلاح القصر الكهربائي والأعطال العاجلة.','تشخيص الأعطال الكهربائية المنزلية.','تواصل على مدار الساعة للإصلاحات العاجلة.']
      : null;
    const commercialItems = commercialCards.map(([name, text, symbol, target]) => [name, text, symbol, target]);
    const residentialItems = residentialCards.map(([name, text, symbol, target]) => [name, text, symbol, target]);
    return `<section class="service-page-hero"><div class="service-page-container">${breadcrumb(t('servicesHub'))}<div class="service-hero-layout"><div><p class="eyebrow"><span class="live-dot"></span>${t('localLabel')}</p><h1>${title}</h1><p class="service-hero-description">${t('hubDescription')}</p><div class="hero-actions"><a class="button button-primary button-large" href="tel:${phone}">${t('call')}<span aria-hidden="true">↗</span></a><a class="button button-outline button-large" href="${whatsapp}" target="_blank" rel="noopener noreferrer">${t('whatsapp')}<span aria-hidden="true">↗</span></a></div></div><div class="service-hero-art"><div class="service-art-mark">${icon('commercial')}</div><span>${t('available')}</span><strong>${t('dammam')}</strong><i>HALAELECTRIC / ELECTRICAL SERVICES</i></div></div></div></section><section class="service-page-section service-category-section"><div class="service-page-container"><div class="service-page-heading"><p class="eyebrow">${t('categories')}</p><h2>${t('allServices')}</h2><p>${t('allServicesText')}</p></div>${categories}</div></section>${directorySection('commercial', t('commercialGridTitle'), t('commercialPageDescription'), commercialItems, commercialTitles, commercialDescriptions, t('learnCommercial'), 'commercial-electrician-dammam')}${directorySection('residential', t('residentialGridTitle'), t('residentialPageDescription'), residentialItems, residentialTitles, residentialDescriptions, t('learnResidential'), 'residential-electrician-dammam')}<section class="service-page-section"><div class="service-page-container">${gridWithTitles(installItems, installLocalized, installDescriptions, 'installServices')}</div></section><section class="service-page-section service-muted-section"><div class="service-page-container">${gridWithTitles(maintainItems, maintainLocalized, maintainDescriptions, 'maintainServices')}</div></section>${hubEmergency()}${processSection()}${faqSection()}${ctaSection()}`;
  };
  const hubEmergency = () => `<section class="service-emergency-band"><div class="service-page-container"><div><p class="eyebrow">${t('catEmergency')}</p><h2>${t('emergencyTitle')}</h2><p>${t('emergencyText')}</p></div><div class="service-page-cta-actions"><a class="button button-primary" href="tel:${phone}">${t('call')}</a><a class="button button-light-outline" href="${href('emergency-electrician-dammam')}">${t('emergencyHelp')} ↗</a></div></div></section>`;
  const renderCategory = (kind) => {
    const commercial = kind === 'commercial';
    const cards = commercial ? commercialCards : residentialCards;
    const title = commercial ? t('commercialPageTitle') : t('residentialPageTitle');
    const descriptionText = commercial ? t('commercialPageDescription') : t('residentialPageDescription');
    const gridTitle = commercial ? t('commercialGridTitle') : t('residentialGridTitle');
    const localizedTitles = commercial
      ? ['تركيبات كهربائية تجارية','توصيلات كهربائية تجارية','صيانة كهربائية تجارية','خدمات اللوحات الكهربائية','الفحص الكهربائي','تشخيص أعطال كهربائية تجارية','إضاءة تجارية','مشاريع كهربائية تجارية']
      : ['توصيلات كهربائية منزلية','إصلاحات كهربائية','خدمات الإضاءة','خدمات المفاتيح والمقابس','خدمات قواطع الدائرة','إصلاح القصر الكهربائي','تشخيص الأعطال الكهربائية','إصلاحات كهربائية طارئة'];
    const localizedDescriptions = commercial
      ? ['تركيبات كهربائية للبيئات التجارية والمشاريع الجديدة.','خدمة التوصيلات الكهربائية للعقارات التجارية في الدمام.','دعم صيانة الأنظمة الكهربائية التجارية.','خدمة وصيانة اللوحات الكهربائية التجارية.','خدمات فحص الأنظمة الكهربائية التجارية.','تشخيص الأعطال الكهربائية في البيئات التجارية.','تركيب وإصلاح الإضاءة للمساحات التجارية.','دعم التركيبات الكهربائية للمشاريع التجارية الجديدة.']
      : ['تركيب وإصلاح وتشخيص التوصيلات الكهربائية للمنازل.','دعم إصلاح الأعطال الكهربائية السكنية.','تركيب وإصلاح الإضاءة داخل المنزل وخارجه.','تركيب وإصلاح المفاتيح والمقابس الكهربائية.','خدمات وتشخيص مشكلات قواطع الدائرة.','دعم إصلاح القصر الكهربائي والأعطال العاجلة.','تشخيص الأعطال الكهربائية المنزلية.','تواصل على مدار الساعة للإصلاحات الكهربائية العاجلة.'];
    const items = cards.map(([name, text, symbol, target], i) => [name, text, symbol, target]);
    return `<section class="service-page-hero"><div class="service-page-container">${breadcrumb(commercial ? t('commercial') : t('residential'))}<div class="service-hero-layout"><div><p class="eyebrow"><span class="live-dot"></span>${t('localLabel')}</p><h1>${title}</h1><p class="service-hero-description">${descriptionText}</p><div class="hero-actions"><a class="button button-primary button-large" href="tel:${phone}">${commercial ? t('requestCommercial') : t('requestResidential')}</a><a class="button button-outline button-large" href="${whatsapp}" target="_blank" rel="noopener noreferrer">${t('whatsapp')}</a></div></div><div class="service-hero-art ${commercial ? 'commercial-art' : 'residential-art'}"><div class="service-art-mark">${icon(commercial ? 'commercial' : 'home')}</div><span>${commercial ? t('catCommercial') : t('catResidential')}</span><strong>${t('dammam')}</strong><i>HALAELECTRIC / 24—7</i></div></div></div></section><section class="service-page-section service-category-section"><div class="service-page-container"><div class="service-page-heading"><p class="eyebrow">${gridTitle}</p><h2>${gridTitle}</h2><p>${descriptionText}</p></div><div class="service-promo-grid">${items.map((item, i) => serviceCard(item, i, lang.value === 'ar' ? localizedTitles[i] : null, lang.value === 'ar' ? localizedDescriptions[i] : null)).join('')}</div></div></section>${commercial ? commercialValue() : residentialTrust()}${processSection(commercial)}${faqSection()}${ctaSection(commercial ? t('commercialPageTitle') : t('residentialPageTitle'), descriptionText)}`;
  };
  const commercialValue = () => `<section class="service-value-section"><div class="service-page-container service-value-layout"><div><p class="eyebrow">${t('commercial')}</p><h2>${t('commercialValueTitle')}</h2><p>${t('commercialValueText')}</p></div><div class="service-value-grid">${['valueOne','valueTwo','valueThree','valueFour','valueFive','valueSix'].map((key, i) => `<div><span>${String(i + 1).padStart(2, '0')}</span><strong>${t(key)}</strong></div>`).join('')}</div></div></section>`;
  const residentialTrust = () => `<section class="service-value-section"><div class="service-page-container service-value-layout"><div><p class="eyebrow">${t('residential')}</p><h2>${t('residentialTrustTitle')}</h2><p>${t('residentialTrustText')}</p></div><div class="service-value-grid">${['valueSix','valueTwo','whyExpertise','whyAvailability','whyDammam','serviceWiring'].map((key, i) => `<div><span>${String(i + 1).padStart(2, '0')}</span><strong>${labels[lang.value][key] || labels.en[key] || key}</strong></div>`).join('')}</div></div></section>`;
  const renderIndividual = (service) => {
    const item = localizedService(service);
    const relatedCards = service.related.map((relatedSlug) => {
      const related = services[relatedSlug];
      return [related.title, related.description, related.icon, relatedSlug];
    });
    const benefits = lang.value === 'ar'
      ? [t('benefit1'), t('benefit2'), t('benefit3')]
      : [service.benefit, t('benefit2'), t('benefit3')];
    const categoryLabel = lang.value === 'ar' ? item.category : item.category.toUpperCase();
    return `<section class="service-page-hero individual-hero"><div class="service-page-container">${breadcrumb(item.title)}<div class="individual-hero-content"><div><p class="eyebrow"><span class="live-dot"></span>${t('localLabel')}</p><p class="service-category-kicker">${categoryLabel}</p><h1>${escape(service.heroTitle[lang.value])}.</h1><p class="service-hero-description">${escape(item.description)}</p><div class="hero-actions"><a class="button button-primary button-large" href="tel:${phone}">${t('request')}<span aria-hidden="true">↗</span></a><a class="button button-outline button-large" href="${whatsapp}" target="_blank" rel="noopener noreferrer">${t('whatsapp')}<span aria-hidden="true">↗</span></a></div></div><div class="individual-icon-panel">${icon(service.icon)}<span>${t('available')}</span><strong>${t('dammam')}</strong></div></div></div></section><section class="service-page-section"><div class="service-page-container service-intro-layout"><div><p class="eyebrow">${t('whatWeProvide')}</p><h2>${escape(item.title)} ${t('individualIntroTitle')}</h2></div><div><p>${escape(item.description)} ${t('individualIntro')}</p><p>${escape(item.benefit)}</p></div></div></section><section class="service-value-section"><div class="service-page-container service-value-layout"><div><p class="eyebrow">${t('commonNeeds')}</p><h2>${t('problem')} ${escape(item.title.toLowerCase())}.</h2></div><div class="service-value-grid">${[t('use1'),t('use2'),t('use3'),t('use4')].map((line, i) => `<div><span>${String(i + 1).padStart(2, '0')}</span><strong>${escape(line)}</strong></div>`).join('')}</div></div></section><section class="service-page-section"><div class="service-page-container"><div class="service-page-heading"><p class="eyebrow">${t('whyHalaelectric')}</p><h2>${t('benefitsTitle')}</h2></div><div class="service-benefit-grid">${benefits.map((line, i) => `<article><span>0${i + 1}</span><p>${escape(line)}</p></article>`).join('')}</div></div></section>${processSection()}<section class="service-page-section related-services"><div class="service-page-container"><div class="service-page-heading"><p class="eyebrow">${t('related')}</p><h2>${t('relatedText')}</h2></div><div class="service-promo-grid">${relatedCards.map((card, i) => serviceCard(card, i, lang.value === 'ar' ? services[service.related[i]].ar : null, lang.value === 'ar' ? services[service.related[i]].descriptionAr : null)).join('')}</div></div></section>${faqSection()}${ctaSection(t('contactTitle'), t('contactText'))}`;
  };
  const renderEmergency = () => {
    const content = emergencyContent[lang.value];
    const problemCards = content.problems.map((problem) => {
      const [title, copy, symbol, target] = problem;
      return [title, copy, symbol, target];
    });
    const relatedCards = content.related.map((relatedSlug) => {
      const service = services[relatedSlug];
      return [service.title, service.description, service.icon, relatedSlug];
    });
    const scenarios = (items) => `<ul class="emergency-scenario-list">${items.map((item) => `<li>${escape(item)}</li>`).join('')}</ul>`;
    return `<section class="service-page-hero emergency-hero"><div class="service-page-container">${breadcrumb(content.title)}<div class="emergency-hero-layout"><div><p class="eyebrow"><span class="live-dot"></span>${escape(content.eyebrow)}</p><h1>${escape(content.title)}</h1><p class="service-hero-description">${escape(content.description)}</p><div class="emergency-proof-points"><span><strong>5</strong> ${escape(content.years)}</span><span><strong>24/7</strong> ${escape(content.availability)}</span><span><strong>✓</strong> ${escape(content.capability)}</span></div><div class="hero-actions"><a class="button button-primary button-large" href="tel:${phone}">${t('call')}<span aria-hidden="true">↗</span></a><a class="button button-outline button-large" href="${whatsapp}" target="_blank" rel="noopener noreferrer">${t('whatsapp')}<span aria-hidden="true">↗</span></a></div></div><div class="emergency-hero-art" role="img" aria-label="${escape(content.alt)}"><span class="emergency-art-symbol" aria-hidden="true">${icon('emergency')}</span><span class="emergency-art-label">${escape(content.availability)}</span><strong>HALAELECTRIC</strong><small>${t('dammam')}</small></div></div></div></section><section class="service-page-section emergency-problems"><div class="service-page-container"><div class="service-page-heading"><p class="eyebrow">${t('emergencyLink')}</p><h2>${escape(content.problemsTitle)}</h2><p>${escape(content.problemsIntro)}</p></div><div class="service-promo-grid">${problemCards.map((card, i) => serviceCard(card, i)).join('')}</div></div></section><section class="service-value-section emergency-process"><div class="service-page-container"><div class="service-page-heading"><p class="eyebrow">${t('process')}</p><h2>${escape(content.responseTitle)}</h2><p>${escape(content.responseIntro)}</p></div><ol class="emergency-steps">${content.responseSteps.map(([title, copy], i) => `<li><span>${String(i + 1).padStart(2, '0')}</span><h3>${escape(title)}</h3><p>${escape(copy)}</p></li>`).join('')}</ol></div></section><section class="service-page-section emergency-safety"><div class="service-page-container emergency-safety-layout"><div><p class="eyebrow">${t('emergencyLink')}</p><h2>${escape(content.emergencyCheckTitle)}</h2><p>${escape(content.emergencyCheckIntro)}</p><ul class="emergency-warning-list">${content.warningSigns.map((sign) => `<li>${escape(sign)}</li>`).join('')}</ul></div><aside class="emergency-safety-note"><span aria-hidden="true">!</span><h3>${escape(content.safetyTitle)}</h3><p>${escape(content.safetyText)}</p></aside></div></section><section class="service-page-section emergency-audience"><div class="service-page-container emergency-audience-grid"><article><p class="eyebrow">${t('commercial')}</p><h2>${escape(content.commercialTitle)}</h2><p>${escape(content.commercialText)}</p>${scenarios(content.commercialScenarios)}<a class="button button-outline" href="../commercial-electrician-dammam/">${escape(content.exploreCommercial)} <span aria-hidden="true">↗</span></a></article><article><p class="eyebrow">${t('residential')}</p><h2>${escape(content.residentialTitle)}</h2><p>${escape(content.residentialText)}</p>${scenarios(content.residentialScenarios)}<a class="button button-outline" href="../residential-electrician-dammam/">${escape(content.exploreResidential)} <span aria-hidden="true">↗</span></a></article></div></section><section class="service-value-section emergency-trust"><div class="service-page-container"><div class="service-page-heading"><p class="eyebrow">${t('whyHalaelectric')}</p><h2>${escape(content.whyTitle)}</h2></div><div class="service-benefit-grid">${content.whyPoints.map(([title, copy], i) => `<article><span>${String(i + 1).padStart(2, '0')}</span><h3>${escape(title)}</h3><p>${escape(copy)}</p></article>`).join('')}</div></div></section><section class="service-page-section related-services emergency-related"><div class="service-page-container"><div class="service-page-heading"><p class="eyebrow">${t('related')}</p><h2>${escape(content.relatedTitle)}</h2></div><div class="service-promo-grid">${relatedCards.map((card, i) => serviceCard(card, i, lang.value === 'ar' ? services[content.related[i]].ar : null, lang.value === 'ar' ? services[content.related[i]].descriptionAr : null)).join('')}</div></div></section><section class="service-page-section page-faq"><div class="service-page-container"><div class="service-page-heading"><p class="eyebrow">${t('faqTitle')}</p><h2>${escape(content.faqTitle)}</h2></div><div class="service-faq-list">${content.faqs.map(([question, answer], i) => `<article class="faq-item"><h3><button class="faq-question" aria-expanded="false" aria-controls="service-faq-${i}" id="service-faq-q-${i}"><span>${escape(question)}</span><span class="faq-plus" aria-hidden="true"></span></button></h3><div class="faq-answer" id="service-faq-${i}" role="region" aria-labelledby="service-faq-q-${i}" hidden><p>${escape(answer)}</p></div></article>`).join('')}</div></div></section>${ctaSection(content.ctaTitle, content.ctaText)}`;
  };
  const render = () => {
    document.documentElement.lang = lang.value;
    document.documentElement.dir = lang.value === 'ar' ? 'rtl' : 'ltr';
    const meta = document.querySelector('meta[name="description"]');
    const title = pageTitle();
    document.title = title;
    if (meta) meta.content = description();
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = location.href.split('#')[0];
    const descriptionTag = document.querySelector('meta[name="description"]');
    const ensureMeta = (selector, create, property, value) => {
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(create, property);
        document.head.append(meta);
      }
      meta.content = value;
    };
    ensureMeta('meta[property="og:title"]', 'property', 'og:title', title);
    ensureMeta('meta[property="og:description"]', 'property', 'og:description', descriptionTag?.content || description());
    const page = slug === 'services' ? renderHub()
      : slug === 'commercial-electrician-dammam' ? renderCategory('commercial')
        : slug === 'residential-electrician-dammam' ? renderCategory('residential')
          : slug === 'emergency-electrician-dammam' ? renderEmergency()
          : services[slug] ? renderIndividual(services[slug])
            : `<section class="service-page-hero"><div class="service-page-container"><h1>${t('allServices')}</h1><p>${t('allServicesText')}</p>${slugLink('services', t('explore'))}</div></section>`;
    document.getElementById('service-page-root').innerHTML = `${serviceHeader()}<main id="main">${page}</main>${serviceFooter()}`;
    document.querySelectorAll('[data-service-lang]').forEach((button) => {
      button.addEventListener('click', () => {
        lang.value = button.dataset.serviceLang;
        render();
      });
    });
    const menu = document.querySelector('.service-site-header .menu-toggle');
    const nav = document.querySelector('#service-navigation');
    menu?.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? (lang.value === 'ar' ? 'إغلاق القائمة' : 'Close navigation') : (lang.value === 'ar' ? 'فتح القائمة' : 'Open navigation'));
      nav?.classList.toggle('is-open', open);
    });
    nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('is-open')));
    document.querySelectorAll('.faq-question').forEach((button) => {
      button.addEventListener('click', () => {
        const open = button.getAttribute('aria-expanded') !== 'true';
        const answer = document.getElementById(button.getAttribute('aria-controls'));
        button.setAttribute('aria-expanded', String(open));
        if (!answer) return;
        answer.hidden = !open;
        answer.classList.toggle('is-open', open);
      });
    });
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const observer = new IntersectionObserver((entries, instance) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          instance.unobserve(entry.target);
        }
      }), { threshold: 0.12 });
      document.querySelectorAll('.service-page-root .reveal, #service-page-root .reveal').forEach((element) => observer.observe(element));
    } else {
      document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
    }
    updateStructuredData();
  };
  const updateStructuredData = () => {
    const item = services[slug];
    const emergency = slug === 'emergency-electrician-dammam' ? emergencyContent[lang.value] : null;
    const title = emergency ? emergency.title : item ? localizedService(item).title : t('services');
    const schema = {
      '@context': 'https://schema.org',
      '@type': item ? 'Service' : 'Electrician',
      name: item ? title : `Halaelectric ${t('services')}`,
      description: description(),
      provider: {
        '@type': 'Electrician',
        name: 'Halaelectric',
        telephone: phone,
        email,
        address: { '@type': 'PostalAddress', addressLocality: 'Dammam', addressCountry: 'SA' },
        areaServed: { '@type': 'City', name: 'Dammam' },
        availableLanguage: ['English', 'Arabic'],
      },
      areaServed: { '@type': 'City', name: 'Dammam' },
      serviceType: item ? title : undefined,
    };
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: t('home'), item: new URL('../index.html', location.href).href },
        { '@type': 'ListItem', position: 2, name: t('servicesHub'), item: new URL('../services/index.html', location.href).href },
        ...(slug === 'services' ? [] : [{ '@type': 'ListItem', position: 3, name: emergency ? title : item ? title : t(slug.startsWith('commercial') ? 'commercial' : 'residential'), item: location.href.split('#')[0] }]),
      ],
    };
    let element = document.getElementById('service-structured-data');
    if (!element) {
      element = document.createElement('script');
      element.id = 'service-structured-data';
      element.type = 'application/ld+json';
      document.head.append(element);
    }
    const emergencyFaqSchema = emergency ? {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: emergency.faqs.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    } : null;
    element.textContent = JSON.stringify([schema, breadcrumbSchema, ...(emergencyFaqSchema ? [emergencyFaqSchema] : [])]);
  };

  document.body.classList.add('js-ready');
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    const menu = document.querySelector('.service-site-header .menu-toggle');
    menu?.setAttribute('aria-expanded', 'false');
    menu?.setAttribute('aria-label', lang.value === 'ar' ? 'فتح القائمة' : 'Open navigation');
    document.querySelector('#service-navigation')?.classList.remove('is-open');
  });
  window.addEventListener('scroll', () => {
    document.querySelector('.service-site-header')?.classList.toggle('is-scrolled', window.scrollY > 12);
  }, { passive: true });
  render();
})();
