import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        journey: "Journey",
        contact: "Contact",
        hireMe: "Hire Me",
        getInTouch: "Get In Touch"
      },
      hero: {
        badge: "Available for SaaS & Full-Stack Projects",
        titleName: "Nikhil",
        titleLastName: "Bhadauriya",
        subtitle1: "Python Full Stack Developer",
        subtitle2: "MERN Stack Developer",
        subtitle3: "SaaS Builder",
        description: "I build scalable web applications, APIs, SaaS products, automation systems, and modern digital experiences using Python, React, Node.js, PostgreSQL, and cloud technologies.",
        viewProjects: "View Projects",
        getResume: "Get Resume",
        contact: "Contact"
      },
      about: {
        badge: "About Me",
        title: "Passion For Engineering & SaaS Development",
        introTitle: "Hi, I'm Nikhil. I build modern digital products.",
        p1: "My journey as a software developer is driven by a deep curiosity to learn how systems work at scale. I specialize in building complete products—starting from robust database design and API structures, all the way to responsive frontend interfaces.",
        p2: "As a Python Full-Stack Developer and SaaS Builder, I thrive on writing backend code that is modular and performant. Whether it's crafting high-concurrency APIs in FastAPI, modeling data in PostgreSQL, or optimizing React components, I ensure user experiences are smooth and load in milliseconds.",
        p3: "I prioritize clean architecture, automated workflows, and DevOps consistency. Using tools like Docker, Git, and various cloud platforms, I bridge the gap between development environments and stable production deployments.",
        statYears: "Years Developing",
        statProjects: "Projects Completed",
        statTech: "Technologies Used",
        statRepos: "GitHub Repositories",
        focusPython: "Python Development",
        focusPythonDesc: "Writing clean, optimized, and testable code in Python. Proficient in frameworks like Django, FastAPI, and Flask for web application backends and automation scripts.",
        focusFullStack: "Full-Stack Applications",
        focusFullStackDesc: "Building end-to-end apps using MERN (MongoDB, Express, React, Node) stack. Integrating state-of-the-art state management and UI designs with Framer Motion.",
        focusBackend: "Backend Architecture",
        focusBackendDesc: "Designing structured relational & non-relational database schemas using PostgreSQL, MongoDB, MySQL, and Prisma ORM with optimized query indexing.",
        focusDevOps: "Cloud & DevOps",
        focusDevOpsDesc: "Deploying production apps using Docker, Linux, and cloud provider solutions like Vercel, Render, and AWS, maintaining reliable CI/CD pipelines."
      },
      skills: {
        badge: "My Tech Stack",
        title: "Full-Stack Tooling & Expertise",
        description: "A curated list of languages, frameworks, databases, and deployment platforms I use to build scalable products."
      },
      projects: {
        badge: "Featured Product",
        title: "VidyaSanchar – School ERP",
        tagline: "Complete Institutional Automation",
        description: "VidyaSanchar replaces disjointed paperwork, scattered spreadsheets, and outdated portals with a unified cloud-native environment. Built with clean, type-safe database schemas and real-time state synchronization, it handles all administrative, academic, and financial needs.",
        metricInst: "Active Institutions",
        metricUsers: "Total Active Users",
        metricSpeed: "Page Load Speed",
        metricUptime: "Database Uptime",
        demoRequest: "Request Live Demo",
        repo: "Repository",
        caseStudy: "Case Study",
        tabPreview: "Dashboard Preview",
        tabArchitecture: "Architecture",
        tabChallenges: "Challenges Solved",
        featDashboards: "Role-Based Dashboards",
        featDashboardsDesc: "Distinct dashboards customized for School Admins, Teachers, Students, and Parents.",
        featAttendance: "Attendance Tracking",
        featAttendanceDesc: "RFID/Manual attendance system with real-time push notifications to parents' portals.",
        featFees: "Fee Management",
        featFeesDesc: "Online fee payment gateways integration with automated PDF receipt generation.",
        featReports: "Reports & Analytics",
        featReportsDesc: "Rich charts showing grade curves, school-wide attendance, and financial sheets.",
        archTitle: "System Architecture & Flow",
        archDesc: "An optimized client-server deployment separating client-facing portals from back-end REST controllers.",
        challengeTitle: "Engineering Challenges & Architectural Resolutions",
        challenge1Prob: "Handling high concurrency during morning attendance submissions and grade uploads.",
        challenge1Sol: "Implemented Redis caching layers for quick reads, and optimized database indexing in PostgreSQL. Configured Node/Express backend to cluster processes using PM2.",
        challenge2Prob: "Secure, role-based resource access without leaking sensitive administrative records.",
        challenge2Sol: "Created strict middleware validation checks utilizing JWT claims, and restricted database operations at the Prisma schema level, enforcing fine-grained RBAC (Role-Based Access Control)."
      },
      journey: {
        badge: "Evolution",
        title: "Development Journey",
        description: "A chronological timeline detailing my path from writing the first line of code to launching live web products."
      },
      contact: {
        badge: "Connection",
        title: "Get In Touch",
        description: "Have a project in mind, want to build a SaaS, or looking to hire a full-stack developer? Shoot me a message.",
        discuss: "Let's discuss details",
        discussDesc: "I'm interested in freelance contracts, remote software developer roles, and building micro-SaaS products. Feel free to ping me on socials or use the form.",
        findMe: "Find me on",
        directEmail: "Direct Email",
        formName: "Full Name",
        formEmail: "Email Address",
        formMessage: "Your Message",
        formPlaceholderMessage: "Briefly describe your project details, tech stack, and goals...",
        sending: "Sending Message...",
        send: "Send Message",
        successTitle: "Message Sent Successfully!",
        successDesc: "Thank you for reaching out, Nikhil. I have received your message and will respond to you shortly.",
        sendAnother: "Send another message"
      },
      footer: {
        tagline: "Building premium, scalable full-stack web products and SaaS architectures.",
        crafted: "Crafted with"
      }
    }
  },
  hi: {
    translation: {
      navbar: {
        home: "होम",
        about: "मेरे बारे में",
        skills: "कौशल",
        projects: "प्रोजेक्ट्स",
        journey: "सफर",
        contact: "संपर्क",
        hireMe: "हायर करें",
        getInTouch: "संपर्क करें"
      },
      hero: {
        badge: "SaaS और फुल-स्टैक प्रोजेक्ट्स के लिए उपलब्ध",
        titleName: "निखिल",
        titleLastName: "भदौरिया",
        subtitle1: "पायथन फुल स्टैक डेवलपर",
        subtitle2: "मर्न स्टैक डेवलपर",
        subtitle3: "SaaS बिल्डर",
        description: "मैं पायथन, रिएक्ट, नोड.जेएस, पोस्टग्रेएसक्यूएल और क्लाउड तकनीकों का उपयोग करके स्केलेबल वेब एप्लिकेशन, SaaS उत्पाद, मजबूत एपीआई, ऑटोमेशन सिस्टम और आधुनिक डिजिटल अनुभव बनाता हूं।",
        viewProjects: "प्रोजेक्ट्स देखें",
        getResume: "रिज्यूमे प्राप्त करें",
        contact: "संपर्क"
      },
      about: {
        badge: "मेरे बारे में",
        title: "इंजीनियरिंग और SaaS विकास के लिए जुनून",
        introTitle: "नमस्ते, मैं निखिल हूँ। मैं आधुनिक डिजिटल उत्पाद बनाता हूँ।",
        p1: "एक सॉफ्टवेयर डेवलपर के रूप में मेरा सफर बड़े पैमाने पर सिस्टम कैसे काम करते हैं, यह जानने की गहरी उत्सुकता से प्रेरित है। मैं संपूर्ण उत्पाद बनाने में माहिर हूं—मजबूत डेटाबेस डिज़ाइन और एपीआई संरचनाओं से लेकर रिस्पॉन्सिव फ्रंटएंड इंटरफेस तक।",
        p2: "एक पायथन फुल-स्टैक डेवलपर और SaaS बिल्डर के रूप में, मैं बैकएंड कोड लिखने में सहज महसूस करता हूं जो मॉड्यूलर और प्रदर्शनकारी हो। चाहे वह FastAPI में उच्च-समानता एपीआई तैयार करना हो, पोस्टग्रेएसक्यूएल में डेटा मॉडलिंग करना हो, या रिएक्ट घटकों को अनुकूलित करना हो, मैं यह सुनिश्चित करता हूं कि उपयोगकर्ता के अनुभव सुचारू हों और मिलीसेकंड में लोड हों।",
        p3: "मैं स्वच्छ आर्किटेक्चर, स्वचालित वर्कफ़्लो और डेवऑप्स स्थिरता को प्राथमिकता देता हूं। डॉकर, गिट और विभिन्न क्लाउड प्लेटफॉर्म जैसे टूल का उपयोग करके, मैं विकास परिवेशों और स्थिर उत्पादन डिप्लॉयमेंट के बीच के अंतर को पाटता हूं।",
        statYears: "डेवलपिंग के वर्ष",
        statProjects: "पूरे किए गए प्रोजेक्ट्स",
        statTech: "उपयोग की गई तकनीकें",
        statRepos: "गिटहब रिपॉजिटरी",
        focusPython: "पायथन डेवलपमेंट",
        focusPythonDesc: "पायथन में स्वच्छ, अनुकूलित और परीक्षण योग्य कोड लिखना। वेब एप्लिकेशन बैकएंड और ऑटोमेशन स्क्रिप्ट के लिए Django, FastAPI और Flask जैसे फ्रेमवर्क में कुशल।",
        focusFullStack: "फुल-स्टैक एप्लिकेशन",
        focusFullStackDesc: "MERN (MongoDB, Express, React, Node) स्टैक का उपयोग करके एंड-टू-एंड ऐप्स बनाना। फ्रेमर मोशन के साथ आधुनिक स्टेट मैनेजमेंट और यूआई डिज़ाइन को एकीकृत करना।",
        focusBackend: "बैकएंड आर्किटेक्चर",
        focusBackendDesc: "अनुकूलित क्वेरी इंडेक्सिंग के साथ पोस्टग्रेएसक्यूएल, मोंगोडीबी, माईएसक्यूएल और प्रिज्मा ओआरएम का उपयोग करके संरचित रिलेशनल और नॉन-रिलेशनल डेटाबेस स्कीमा डिजाइन करना।",
        focusDevOps: "क्लाउड और डेवऑप्स",
        focusDevOpsDesc: "डॉक कंटेनर, लिनक्स और वर्सेल, रेंडर और एडब्ल्यूएस जैसे क्लाउड प्रदाता समाधानों का उपयोग करके उत्पादन ऐप्स को तैनात करना, विश्वसनीय सीआई/सीडी पाइपलाइन बनाए रखना।",
      },
      skills: {
        badge: "मेरी टेक स्टैक",
        title: "फुल-स्टैक टूलिंग और विशेषज्ञता",
        description: "स्केलेबल उत्पाद बनाने के लिए मेरे द्वारा उपयोग की जाने वाली भाषाओं, फ्रेमवर्क, डेटाबेस और डिप्लॉयमेंट प्लेटफॉर्म की एक चुनिंदा सूची।"
      },
      projects: {
        badge: "विशेष उत्पाद",
        title: "विद्यासंचार - स्कूल ईआरपी",
        tagline: "पूर्ण संस्थागत स्वचालन",
        description: "विद्यासंचार असंबद्ध कागजी कार्रवाई, बिखरी हुई स्प्रेडशीट और पुराने पोर्टलों को एक एकीकृत क्लाउड-नेटिव वातावरण से बदल देता है। स्वच्छ, टाइप-सेफ डेटाबेस स्कीमा और वास्तविक समय स्टेट सिंक्रोनाइज़ेशन के साथ निर्मित, यह सभी प्रशासनिक, शैक्षणिक और वित्तीय आवश्यकताओं को संभालता है।",
        metricInst: "सक्रिय संस्थान",
        metricUsers: "कुल सक्रिय उपयोगकर्ता",
        metricSpeed: "पेज लोड स्पीड",
        metricUptime: "डेटाबेस अपटाइम",
        demoRequest: "लाइव डेमो का अनुरोध करें",
        repo: "रिपॉजिटरी देखें",
        caseStudy: "केस स्टडी",
        tabPreview: "डैशबोर्ड पूर्वावलोकन",
        tabArchitecture: "आर्किटेक्चर",
        tabChallenges: "हल की गई चुनौतियाँ",
        featDashboards: "भूमिका-आधारित डैशबोर्ड",
        featDashboardsDesc: "स्कूल एडमिन, शिक्षकों, छात्रों और अभिभावकों के लिए अनुकूलित अलग-अलग डैशबोर्ड।",
        featAttendance: "उपस्थिति ट्रैकिंग",
        featAttendanceDesc: "अभिभावकों के पोर्टल पर वास्तविक समय में पुश नोटिफिकेशन के साथ आरएफआईडी/मैनुअल उपस्थिति प्रणाली।",
        featFees: "शुल्क प्रबंधन",
        featFeesDesc: "स्वचालित पीडीएफ रसीद जनरेशन के साथ ऑनलाइन शुल्क भुगतान गेटवे एकीकरण।",
        featReports: "रिपोर्ट और एनालिटिक्स",
        featReportsDesc: "ग्रेड कर्व, स्कूल-व्यापी उपस्थिति और वित्तीय शीट दिखाने वाले समृद्ध चार्ट।",
        archTitle: "सिस्टम आर्किटेक्चर और फ्लो",
        archDesc: "बैक-एंड रेस्ट कंट्रोलर से क्लाइंट-फेसिंग पोर्टल्स को अलग करने वाला एक अनुकूलित क्लाइंट-सर्वर डिप्लॉयमेंट।",
        challengeTitle: "इंजीनियरिंग चुनौतियाँ और आर्किटेक्चरल समाधान",
        challenge1Prob: "सुबह की उपस्थिति सबमिशन और ग्रेड अपलोड के दौरान उच्च समवर्ती (high concurrency) को संभालना।",
        challenge1Sol: "त्वरित पढ़ने के लिए रेडिस कैशिंग लेयर्स लागू की गईं, और पोस्टग्रेएसक्यूएल में डेटाबेस इंडेक्सिंग को अनुकूलित किया गया। पीएम2 का उपयोग करके प्रक्रियाओं को क्लस्टर करने के लिए नोड/एक्सप्रेस बैकएंड को कॉन्फ़िगर किया गया।",
        challenge2Prob: "संवेदनशील प्रशासनिक रिकॉर्ड लीक किए बिना सुरक्षित, भूमिका-आधारित संसाधन पहुंच।",
        challenge2Sol: "JWT दावों का उपयोग करके सख्त मिडलवेयर सत्यापन जांच बनाई गई, और प्रिज्मा स्कीमा स्तर पर डेटाबेस संचालन को प्रतिबंधित किया गया, जिससे बारीक आरबीएसी लागू हुआ।"
      },
      journey: {
        badge: "विकास",
        title: "विकास यात्रा",
        description: "कोड की पहली पंक्ति लिखने से लेकर लाइव वेब उत्पादों को लॉन्च करने तक के मेरे मार्ग का विवरण देने वाली एक कालानुक्रमिक समयरेखा।"
      },
      contact: {
        badge: "कनेक्शन",
        title: "संपर्क करें",
        description: "क्या आपके मन में कोई प्रोजेक्ट है, एक SaaS बनाना चाहते हैं, या एक फुल-स्टैक डेवलपर को नियुक्त करना चाहते हैं? मुझे संदेश भेजें।",
        discuss: "आइए विवरण पर चर्चा करें",
        discussDesc: "मुझे फ्रीलांस अनुबंधों, रिमोट सॉफ्टवेयर डेवलपर भूमिकाओं और माइक्रो-SaaS उत्पादों के निर्माण में रुचि है। बेझिझक मुझे सोशल मीडिया पर पिंग करें या फॉर्म का उपयोग करें।",
        findMe: "मुझे यहाँ खोजें",
        directEmail: "सीधा ईमेल",
        formName: "पूरा नाम",
        formEmail: "ईमेल पता",
        formMessage: "आपका संदेश",
        formPlaceholderMessage: "संक्षेप में अपने प्रोजेक्ट विवरण, टेक स्टैक और लक्ष्यों का वर्णन करें...",
        sending: "संदेश भेजा जा रहा है...",
        send: "संदेश भेजें",
        successTitle: "संदेश सफलतापूर्वक भेजा गया!",
        successDesc: "सम्पर्क करने के लिए धन्यवाद, निखिल। मुझे आपका संदेश मिल गया है और मैं जल्द ही जवाब दूँगा।",
        sendAnother: "एक और संदेश भेजें"
      },
      footer: {
        tagline: "प्रीमियम, स्केलेबल फुल-स्टैक वेब उत्पाद और SaaS आर्किटेक्चर बनाना।",
        crafted: "निर्मित"
      }
    }
  }
};

const savedLang = localStorage.getItem('i18nextLng') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
