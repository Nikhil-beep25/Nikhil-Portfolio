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
        statReposPublished: "Repositories Published",
        statPortfolioProjects: "Portfolio Projects",
        statCoreTech: "Core Technologies",
        statOSJourney: "Open Source Journey",
        focusPython: "Python Development",
        focusPythonDesc: "Writing clean, optimized, and testable code in Python. Proficient in frameworks like Django, FastAPI, and Flask for web application backends and automation scripts.",
        focusFullStack: "Full-Stack Applications",
        focusFullStackDesc: "Building end-to-end apps using MERN (MongoDB, Express, React, Node) stack. Integrating state-of-the-art state management and UI designs with Framer Motion.",
        focusBackend: "Backend Architecture",
        focusBackendDesc: "Designing structured relational & non-relational database schemas using PostgreSQL, MongoDB, MySQL, and Prisma ORM with optimized query indexing.",
        focusDevOps: "Cloud & DevOps",
        focusDevOpsDesc: "Deploying production apps using Docker, Linux, and cloud provider solutions like Vercel, Render, and AWS, maintaining reliable CI/CD pipelines.",
        storyBadge: "My Story",
        storyTitle: "Personal Story & Learning Journey",
        storyContent: "I started my coding journey out of a fascination with how web platforms process and render complex information. Over time, this curiosity grew into a structured learning path focused on the MERN stack and Python backend architectures. I spent months building school ERP systems and local database prototypes, learning the nuances of query optimization, API security, and state management.",
        goalsBadge: "Focus & Goals",
        goalsTitle: "Current Goals & Technical Focus",
        goalsContent: "Currently, I am deeply focused on mastering relational database scaling, containerized microservice deployments, and integrating LLM-based API workflows into SaaS structures. I aim to write highly-optimized code that loads fast and handles workloads efficiently.",
        eduBadge: "Education",
        eduTitle: "Academic Foundation",
        eduContent: "Pursuing self-directed full-stack development studies, computer science principles, and practical backend engineering methodologies."
      },
      skills: {
        badge: "My Tech Stack",
        title: "Full-Stack Tooling & Expertise",
        description: "A curated list of languages, frameworks, databases, and deployment platforms I use to build scalable products."
      },
      projects: {
        badge: "Featured Project",
        title: "VidyaSanchar – School ERP",
        tagline: "School Management ERP Prototype",
        description: "VidyaSanchar is a full-stack educational management portal built as an in-development learning project. Designed to simulate institutional automation, it features role-based access control, mock attendance logs, student dashboards, and a simulated fee ledger.",
        demoRequest: "View Repository",
        repo: "Repository",
        caseStudy: "Technical Details",
        tabPreview: "Prototype Preview",
        tabArchitecture: "Architecture Overview",
        tabChallenges: "Challenges Solved",
        featDashboards: "Role-Based Dashboards",
        featDashboardsDesc: "Simulated dashboards tailored for School Admins, Teachers, Students, and Parents.",
        featAttendance: "Attendance Tracking",
        featAttendanceDesc: "Attendance logging prototype with student records and dashboard visualization.",
        featFees: "Fee Management",
        featFeesDesc: "Mock payment log and fee records dashboard with automated PDF receipt generation.",
        featReports: "Reports & Analytics",
        featReportsDesc: "Sample charts representing grade curves, demo attendance trends, and financial sheets.",
        archTitle: "System Architecture & Design",
        archDesc: "A multi-tier client-server structure separating the React client from the Node.js REST API layer and PostgreSQL DB.",
        challengeTitle: "Engineering Challenges & Resolutions",
        challenge1Prob: "Simulating efficient read-write operations during bulk student attendance logs.",
        challenge1Sol: "Designed optimized query indexes in PostgreSQL and structured the Express API to handle bulk updates transactionally.",
        challenge2Prob: "Enforcing secure role-based routes for admins, teachers, and student roles.",
        challenge2Sol: "Created route-guard middleware utilizing JWT claims and restricted resource endpoints based on user roles."
      },
      journey: {
        badge: "Evolution",
        title: "Development Journey",
        description: "A chronological timeline detailing my path from writing the first line of code to launching live web products.",
        milestoneERP: "VidyaSanchar ERP — First Full-Stack Application",
        milestoneERPSub: "Full-Stack Learning Project • React + Node.js + PostgreSQL",
        milestoneERPDesc: "Designed and built a full-stack school management system from scratch. Implemented role-based access control, attendance tracking, and a fee ledger — my deepest dive into building a real multi-layer application.",
        milestoneWeb: "Deep Dive into React & TypeScript",
        milestoneWebSub: "Frontend Engineering • Component Architecture",
        milestoneWebDesc: "Committed to mastering React with TypeScript, focusing on typed component design, state management patterns, and building production-quality UI with Tailwind CSS.",
        milestoneCS: "CS Fundamentals & Self-Directed Study",
        milestoneCSSub: "Algorithms • Data Structures • SQL",
        milestoneCSDesc: "Started structured learning of computer science fundamentals — data structures, Big O complexity, algorithms, OOP design patterns, and normalized relational database design with PostgreSQL."
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
      home: {
        summary: {
          badge: "Professional Summary",
          title: "Building Modern Digital Experiences",
          content: "I am Nikhil Bhadauriya, a Full Stack Developer specializing in React, TypeScript, Node.js, Python, PostgreSQL, and modern web technologies. I enjoy building scalable applications, intuitive user interfaces, and robust backend systems that solve real-world problems."
        },
        whatIDo: {
          badge: "Services",
          title: "What I Do",
          frontend: {
            title: "Frontend Development",
            description: "Building responsive, accessible, and modern interfaces using React and TypeScript."
          },
          backend: {
            title: "Backend Development",
            description: "Designing APIs, authentication systems, and scalable server architectures."
          },
          database: {
            title: "Database Design",
            description: "Creating efficient PostgreSQL schemas and optimized data models."
          },
          fullstack: {
            title: "Full Stack Solutions",
            description: "Delivering complete end-to-end web applications from idea to deployment."
          }
        },
        focus: {
          badge: "Current Focus",
          title: "Currently Building",
          item1: "VidyaSanchar ERP System",
          item2: "Advanced React Applications",
          item3: "Python Backend Services",
          item4: "SaaS Architecture Learning",
          item5: "Cloud Deployment & DevOps"
        },
        tech: {
          badge: "Skills Stack",
          title: "Technology Highlights",
          reactTs: "React & TypeScript",
          nodeExpress: "Node.js & Express",
          pythonDjango: "Python & Django",
          postgresPrisma: "PostgreSQL & Prisma",
          dockerGit: "Docker & Git",
          tailwindCss: "Tailwind CSS"
        },
        whyMe: {
          badge: "Value Proposition",
          title: "Why Work With Me",
          cleanArch: {
            title: "Clean Architecture",
            description: "Writing modular, structured, and easy-to-scale codebases following modern best practices."
          },
          responsive: {
            title: "Responsive Design",
            description: "Crafting fluid, mobile-first layouts that work beautifully across all screen shapes and sizes."
          },
          performance: {
            title: "Performance Focused",
            description: "Optimizing bundle size, rendering pathways, and SQL queries to hit sub-second load times."
          },
          learning: {
            title: "Continuous Learning",
            description: "Always updating my toolbelt with state-of-the-art frameworks, deployment models, and design standards."
          }
        },
        spotlight: {
          badge: "Project Spotlight",
          title: "Featured Project Spotlight",
          tagline: "Prototype Under Active Development",
          feature1: "Student Management",
          feature2: "Teacher Management",
          feature3: "Attendance Tracking",
          feature4: "Fee Management",
          feature5: "Role-Based Access",
          feature6: "Reports & Analytics"
        },
        journey: {
          badge: "Evolution",
          title: "Development Journey",
          startedOS: "Started Open Source Journey",
          builtPortfolio: "Built Personal Portfolio",
          startedVS: "Started VidyaSanchar ERP",
          learningSaaS: "Learning SaaS Architecture"
        },
        certifications: {
          badge: "Credentials",
          title: "Professional Certifications",
          verify: "Verify Certificate",
          python: "Advanced Python Development",
          fullstack: "MERN Full Stack Engineering",
          database: "PostgreSQL Database Administration",
        },
        github: {
          badge: "Activity",
          title: "GitHub Contribution Graph",
          commits: "Contributions in 2026",
          stars: "Starred Repositories",
          tech: "Dominant Technology Stack",
        },
        cta: {
          title: "Let's Build Something Amazing Together",
          subtitle: "Looking for a full-stack developer or micro-SaaS builder? Feel free to reach out, download my resume, or check my complete code repository.",
          viewProjects: "View Projects",
          downloadResume: "Download Resume",
          contactMe: "Contact Me"
        }
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
        statReposPublished: "प्रकाशित रिपॉजिटरी",
        statPortfolioProjects: "पोर्टफोलियो प्रोजेक्ट्स",
        statCoreTech: "मुख्य तकनीकें",
        statOSJourney: "ओपन सोर्स सफर",
        focusPython: "पायथन डेवलपमेंट",
        focusPythonDesc: "पायथन में स्वच्छ, अनुकूलित और परीक्षण योग्य कोड लिखना। वेब एप्लिकेशन बैकएंड और ऑटोमेशन स्क्रिप्ट के लिए Django, FastAPI और Flask जैसे फ्रेमवर्क में कुशल।",
        focusFullStack: "फुल-स्टैक एप्लिकेशन",
        focusFullStackDesc: "MERN (MongoDB, Express, React, Node) स्टैक का उपयोग करके एंड-टू-एंड ऐप्स बनाना। फ्रेमर मोशन के साथ आधुनिक स्टेट मैनेजमेंट और यूआई डिज़ाइन को एकीकृत करना।",
        focusBackend: "बैकएंड आर्किटेक्चर",
        focusBackendDesc: "अनुकूलित क्वेरी इंडेक्सिंग के साथ पोस्टग्रेएसक्यूएल, मोंगोडीबी, माईएसक्यूएल और प्रिज्मा ओआरएम का उपयोग करके संरचित रिलेशनल और नॉन-रिलेशनल डेटाबेस स्कीमा डिजाइन करना।",
        focusDevOps: "क्लाउड और डेवऑप्स",
        focusDevOpsDesc: "डॉक कंटेनर, लिनक्स और वर्सेल, रेंडर और एडब्ल्यूएस जैसे क्लाउड प्रदाता समाधानों का उपयोग करके उत्पादन ऐप्स को तैनात करना, विश्वसनीय सीआई/सीडी पाइपलाइन बनाए रखना।",
        storyBadge: "मेरी कहानी",
        storyTitle: "व्यक्तिगत कहानी और सीखने की यात्रा",
        storyContent: "मैंने जटिल सूचनाओं को संसाधित और प्रस्तुत करने वाले वेब प्लेटफ़ॉर्म को समझने की जिज्ञासा से अपनी कोडिंग यात्रा शुरू की। समय के साथ, यह जिज्ञासा MERN स्टैक और पायथन बैकएंड आर्किटेक्चर पर केंद्रित एक संरचित सीखने के मार्ग में बदल गई। मैंने क्वेरी ऑप्टिमाइज़ेशन, एपीआई सुरक्षा और स्टेट मैनेजमेंट सीखकर स्कूल ईआरपी सिस्टम और डेटाबेस प्रोटोटाइप बनाने में समय लगाया।",
        goalsBadge: "लक्ष्य और फोकस",
        goalsTitle: "वर्तमान लक्ष्य और तकनीकी फोकस",
        goalsContent: "वर्तमान में, मेरा पूरा ध्यान रिलेशनल डेटाबेस स्केलिंग, कंटेनराइज्ड माइक्रोसर्विसेज और SaaS आर्किटेक्चर में LLM-आधारित वर्कफ़्लोज़ को एकीकृत करने पर है। मेरा लक्ष्य अत्यधिक अनुकूलित कोड लिखना है जो तेज़ लोड हो।",
        eduBadge: "शिक्षा",
        eduTitle: "अकादमिक आधार",
        eduContent: "स्व-निर्देशित फुल-स्टैक डेवलपमेंट स्टडीज, कंप्यूटर विज्ञान के सिद्धांत और व्यावहारिक बैकएंड इंजीनियरिंग का अध्ययन कर रहा हूँ।"
      },
      skills: {
        badge: "मेरी टेक स्टैक",
        title: "फुल-स्टैक टूलिंग और विशेषज्ञता",
        description: "स्केलेबल उत्पाद बनाने के लिए मेरे द्वारा उपयोग की जाने वाली भाषाओं, फ्रेमवर्क, डेटाबेस और डिप्लॉयमेंट प्लेटफॉर्म की एक चुनिंदा सूची।"
      },
      projects: {
        badge: "विशेष प्रोजेक्ट",
        title: "विद्यासंचार - स्कूल ईआरपी",
        tagline: "स्कूल प्रबंधन ईआरपी प्रोटोटाइप",
        description: "विद्यासंचार एक फुल-स्टैक शैक्षिक प्रबंधन पोर्टल है जिसे विकास के अंतर्गत सीखने के प्रोजेक्ट के रूप में बनाया गया है। यह संस्थागत स्वचालन का अनुकरण करने के लिए डिज़ाइन किया गया है, जिसमें भूमिका-आधारित पहुँच नियंत्रण, मॉक उपस्थिति शीट, छात्र डैशबोर्ड और एक सिम्युलेटेड शुल्क बही शामिल है।",
        demoRequest: "रिपॉजिटरी देखें",
        repo: "रिपॉजिटरी देखें",
        caseStudy: "तकनीकी विवरण",
        tabPreview: "प्रोटोटाइप पूर्वावलोकन",
        tabArchitecture: "आर्किटेक्चर विवरण",
        tabChallenges: "हल की गई चुनौतियाँ",
        featDashboards: "भूमिका-आधारित डैशबोर्ड",
        featDashboardsDesc: "स्कूल एडमिन, शिक्षकों, छात्रों और अभिभावकों के लिए अनुकूलित सिम्युलेटेड डैशबोर्ड।",
        featAttendance: "उपस्थिति ट्रैकिंग",
        featAttendanceDesc: "छात्र रिकॉर्ड और डैशबोर्ड विज़ुअलाइज़ेशन के साथ उपस्थिति लॉगिंग प्रोटोटाइप।",
        featFees: "शुल्क प्रबंधन",
        featFeesDesc: "स्वचालित पीडीएफ रसीद जनरेशन के साथ मॉक भुगतान लॉग और शुल्क रिकॉर्ड डैशबोर्ड।",
        featReports: "रिपोर्ट और एनालिटिक्स",
        featReportsDesc: "ग्रेड कर्व, स्कूल-व्यापी उपस्थिति और वित्तीय शीट दिखाने वाले सैंपल चार्ट।",
        archTitle: "सिस्टम आर्किटेक्चर और डिज़ाइन",
        archDesc: "रिएक्ट क्लाइंट को एक्सप्रेस एपीआई और पोस्टग्रेएसक्यूएल डेटाबेस से अलग करने वाली एक बहु-स्तरीय क्लाइंट-सर्वर संरचना।",
        challengeTitle: "इंजीनियरिंग चुनौतियाँ और समाधान",
        challenge1Prob: "बल्क छात्र उपस्थिति लॉग के दौरान कुशल रीड-राइट संचालन का अनुकरण करना।",
        challenge1Sol: "पोस्टग्रेएसक्यूएल में अनुकूलित क्वेरी इंडेक्स डिज़ाइन किया गया और बल्क अपडेट को व्यवस्थित रूप से संभालने के लिए एक्सप्रेस एपीआई को संरचित किया गया।",
        challenge2Prob: "एडमिन, शिक्षकों और छात्रों के लिए सुरक्षित भूमिका-आधारित रूट लागू करना।",
        challenge2Sol: "JWT दावों का उपयोग करके रूट-गार्ड मिडलवेयर बनाया गया और उपयोगकर्ता भूमिकाओं के आधार पर संसाधन समापन बिंदुओं को प्रतिबंधित किया गया।"
      },
      journey: {
        badge: "विकास",
        title: "विकास यात्रा",
        description: "कोड की पहली पंक्ति लिखने से लेकर लाइव वेब उत्पादों को लॉन्च करने तक के मेरे मार्ग का विवरण देने वाली एक कालानुक्रमिक समयरेखा।",
        milestoneERP: "विद्यासंचार ERP — पहला फुल-स्टैक एप्लिकेशन",
        milestoneERPSub: "फुल-स्टैक लर्निंग प्रोजेक्ट • React + Node.js + PostgreSQL",
        milestoneERPDesc: "स्क्रैच से एक फुल-स्टैक स्कूल प्रबंधन सिस्टम डिज़ाइन और बनाया। भूमिका-आधारित पहुँच नियंत्रण, उपस्थिति ट्रैकिंग और शुल्क बही लागू की — एक वास्तविक बहु-स्तरीय एप्लिकेशन बनाने में मेरा सबसे गहरा अनुभव।",
        milestoneWeb: "React और TypeScript में गहरी खोज",
        milestoneWebSub: "फ्रंटएंड इंजीनियरिंग • कम्पोनेंट आर्किटेक्चर",
        milestoneWebDesc: "TypeScript के साथ React में महारत हासिल करने के लिए प्रतिबद्ध, टाइप्ड कम्पोनेंट डिज़ाइन, स्टेट मैनेजमेंट पैटर्न और Tailwind CSS के साथ प्रोडक्शन-क्वालिटी UI बनाने पर ध्यान केंद्रित किया।",
        milestoneCS: "CS मूल बातें और स्व-निर्देशित अध्ययन",
        milestoneCSSub: "एल्गोरिदम • डेटा संरचनाएं • SQL",
        milestoneCSDesc: "कंप्यूटर साइंस की मूल बातें — डेटा संरचनाएं, Big O जटिलता, एल्गोरिदम, OOP डिज़ाइन पैटर्न और PostgreSQL के साथ नॉर्मलाइज़्ड रिलेशनल डेटाबेस डिज़ाइन का संरचित अध्ययन शुरू किया।"
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
      home: {
        summary: {
          badge: "प्रोफेशनल सारांश",
          title: "आधुनिक डिजिटल अनुभव बनाना",
          content: "मैं निखिल भदौरिया हूँ, एक फुल स्टैक डेवलपर जो रिएक्ट, टाइपस्क्रिप्ट, नोड.जेएस, पायथन, पोस्टग्रेएसक्यूएल और आधुनिक वेब तकनीकों में माहिर है। मुझे स्केलेबल एप्लिकेशन, सहज यूजर इंटरफेस और मजबूत बैकएंड सिस्टम बनाना पसंद है जो वास्तविक दुनिया की समस्याओं को हल करते हैं।"
        },
        whatIDo: {
          badge: "सेवाएं",
          title: "मैं क्या करता हूँ",
          frontend: {
            title: "फ्रंटएंड डेवलपमेंट",
            description: "रिएक्ट और टाइपस्क्रिप्ट का उपयोग करके रिस्पॉन्सिव, सुलभ और आधुनिक इंटरफेस बनाना।"
          },
          backend: {
            title: "बैकएंड डेवलपमेंट",
            description: "एपीआई, प्रमाणीकरण सिस्टम और स्केलेबल सर्वर आर्किटेक्चर डिजाइन करना।"
          },
          database: {
            title: "डेटाबेस डिज़ाइन",
            description: "कुशल पोस्टग्रेएसक्यूएल स्कीमा और अनुकूलित डेटा मॉडल बनाना।"
          },
          fullstack: {
            title: "फुल स्टैक समाधान",
            description: "विचार से लेकर परिनियोजन तक संपूर्ण एंड-तू-एंड वेब एप्लिकेशन वितरित करना।"
          }
        },
        focus: {
          badge: "वर्तमान फोकस",
          title: "अभी बना रहा हूँ",
          item1: "विद्यासंचार ईआरपी सिस्टम",
          item2: "उन्नत रिएक्ट एप्लिकेशन",
          item3: "पायथन बैकएंड सेवाएं",
          item4: "SaaS आर्किटेक्चर सीखना",
          item5: "क्लाउड परिनियोजन और देवऑप्स"
        },
        tech: {
          badge: "कौशल स्टैक",
          title: "तकनीकी हाइलाइट्स",
          reactTs: "React और TypeScript",
          nodeExpress: "Node.js और Express",
          pythonDjango: "Python और Django",
          postgresPrisma: "PostgreSQL और Prisma",
          dockerGit: "Docker और Git",
          tailwindCss: "Tailwind CSS"
        },
        whyMe: {
          badge: "मूल्य प्रस्ताव",
          title: "मेरे साथ काम क्यों करें",
          cleanArch: {
            title: "स्वच्छ आर्किटेक्चर",
            description: "आधुनिक सर्वोत्तम प्रथाओं का पालन करते हुए मॉड्यूलर, संरचित और स्केलेबल कोडबेस लिखना।"
          },
          responsive: {
            title: "उत्तरदायी डिज़ाइन",
            description: "सभी डिवाइस आकारों में त्रुटिहीन काम करने वाले सुंदर मोबाइल-फर्स्ट लेआउट तैयार करना।"
          },
          performance: {
            title: "प्रदर्शन केंद्रित",
            description: "गति बढ़ाने के लिए बंडल आकार, रेंडरिंग पथ और एसक्यूएल प्रश्नों का अनुकूलन करना।"
          },
          learning: {
            title: "निरंतर सीखना",
            description: "हमेशा नई तकनीकों, फ्रेमवर्क और आधुनिक उद्योग मानकों को अपने कौशल में शामिल करना।"
          }
        },
        spotlight: {
          badge: "परियोजना स्पॉटलाइट",
          title: "फीचर्ड प्रोजेक्ट स्पॉटलाइट",
          tagline: "सक्रिय विकास के तहत प्रोटोटाइप",
          feature1: "छात्र प्रबंधन",
          feature2: "शिक्षक प्रबंधन",
          feature3: "उपस्थिति ट्रैकिंग",
          feature4: "शुल्क प्रबंधन",
          feature5: "भूमिका-आधारित पहुँच",
          feature6: "रिपोर्ट और एनालिटिक्स"
        },
        journey: {
          badge: "सफर",
          title: "विकास यात्रा",
          startedOS: "ओपन सोर्स सफर शुरू किया",
          builtPortfolio: "व्यक्तिगत पोर्टफोलियो बनाया",
          startedVS: "विद्यासंचार ईआरपी शुरू किया",
          learningSaaS: "SaaS आर्किटेक्चर सीखना शुरू किया"
        },
        certifications: {
          badge: "प्रमाण पत्र",
          title: "पेशेवर प्रमाणपत्र",
          verify: "प्रमाणपत्र सत्यापित करें",
          python: "उन्नत पायथन विकास",
          fullstack: "MERN फुल स्टैक इंजीनियरिंग",
          database: "PostgreSQL डेटाबेस प्रशासन",
        },
        github: {
          badge: "गतिविधि",
          title: "गिटहब योगदान ग्राफ़",
          commits: "2026 में योगदान",
          stars: "तारांकित रिपॉजिटरी",
          tech: "मुख्य प्रौद्योगिकी स्टैक",
        },
        cta: {
          title: "आइए मिलकर कुछ अद्भुत बनाएं",
          subtitle: "क्या आप एक फुल-स्टैक डेवलपर या माइक्रो-SaaS बिल्डर की तलाश में हैं? मुझसे बेझिझक संपर्क करें, मेरा रिज्यूमे डाउनलोड करें, या मेरे पूर्ण कोड रिपॉजिटरी की जांच करें।",
          viewProjects: "प्रोजेक्ट्स देखें",
          downloadResume: "रिज्यूमे डाउनलोड करें",
          contactMe: "मुझसे संपर्क करें"
        }
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
