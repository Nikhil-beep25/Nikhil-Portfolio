import { useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import { BookOpen, Terminal, Code2, Layers, Briefcase, Cloud, Compass, Globe, Activity, Award, GitPullRequest } from 'lucide-react';

interface Milestone {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

interface Repo {
  name: string;
  desc: string;
  stars: number;
  forks: number;
  language: string;
  langColor: string;
  url: string;
}

export default function JourneyPage() {
  const { t, i18n } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCell, setHoveredCell] = useState<{ count: number; date: string } | null>(null);

  // Track scroll for vertical timeline bar height
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const milestones: Milestone[] = [
    {
      title: i18n.language === 'en' ? "Learning Python & CS Foundations" : "पायथन सीखना और कंप्यूटर विज्ञान की नींव",
      subtitle: i18n.language === 'en' ? "The Programming Spark" : "प्रोग्रामिंग की शुरुआत",
      description: i18n.language === 'en' 
        ? "Began journey by mastering core computer science principles, data structures, and object-oriented programming in Python. Built automation scripts, scrapers, and CLI logic."
        : "पायथन में बुनियादी कंप्यूटर विज्ञान सिद्धांतों, डेटा संरचनाओं और ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग में महारत हासिल करके यात्रा शुरू की। ऑटोमेशन स्क्रिप्ट और सीएलआई लॉजिक बनाए।",
      icon: <Terminal size={18} className="text-yellow-400" />,
      tags: ["Python", "OOP", "CS Basics"]
    },
    {
      title: i18n.language === 'en' ? "Backend Development" : "बैकएंड डेवलपमेंट",
      subtitle: i18n.language === 'en' ? "API Architectures" : "एपीआई आर्किटेक्चर",
      description: i18n.language === 'en' 
        ? "Shifted focus to server-side web systems. Learned database normalization, indexing, and SQL queries. Mastered HTTP protocols, authentication (JWT), and API development using Django, Flask, and Express.js."
        : "सर्वर-साइड वेब सिस्टम पर ध्यान केंद्रित किया। डेटाबेस इंडेक्सिंग और एसक्यूएल क्वेरी सीखीं। Django, Flask और Express.js का उपयोग करके HTTP प्रोटोकॉल, प्रमाणीकरण (JWT) और एपीआई विकास में महारत हासिल की।",
      icon: <Code2 size={18} className="text-secondary" />,
      tags: ["FastAPI", "SQL", "Django", "APIs"]
    },
    {
      title: i18n.language === 'en' ? "Frontend Development" : "फ्रंटएंड डेवलपमेंट",
      subtitle: i18n.language === 'en' ? "Interactive Interfaces" : "इंटरैक्टिव इंटरफेस",
      description: i18n.language === 'en' 
        ? "Ventured into user interface engineering. Mastered semantic HTML, vanilla CSS layouts, modern responsive design, state management in React, and type-safety with TypeScript."
        : "यूजर इंटरफेस इंजीनियरिंग में कदम रखा। सिमेंटिक HTML, आधुनिक रिस्पॉन्सिव डिज़ाइन, रिएक्ट में स्टेट मैनेजमेंट और टाइपस्क्रिप्ट के साथ टाइप-सेफ्टी सीखी।",
      icon: <Globe size={18} className="text-blue-400" />,
      tags: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
      title: i18n.language === 'en' ? "Full-Stack Projects" : "फुल-स्टैक प्रोजेक्ट्स",
      subtitle: i18n.language === 'en' ? "Connecting the Dots" : "कड़ियों को जोड़ना",
      description: i18n.language === 'en' 
        ? "Assembled frontend and backend knowledge. Started designing, developing, and deploying full-stack web applications, integrating authentication, relational databases, and styled components."
        : "फ्रंटएंड और बैकएंड ज्ञान को एक साथ लाया। प्रमाणीकरण, डेटाबेस और स्टाइल वाले घटकों को एकीकृत करते हुए फुल-स्टैक वेब एप्लिकेशन डिजाइन करना और विकसित करना शुरू किया।",
      icon: <Layers size={18} className="text-[#38BDF8]" />,
      tags: ["MERN Stack", "Prisma", "PostgreSQL"]
    },
    {
      title: i18n.language === 'en' ? "VidyaSanchar ERP" : "विद्यासंचार ईआरपी",
      subtitle: i18n.language === 'en' ? "Scaling to Production" : "उत्पादन स्तर पर स्केलिंग",
      description: i18n.language === 'en' 
        ? "Architected and built VidyaSanchar, a comprehensive School ERP application. Implemented role-based authorization, online fee processing, attendance logs, and real-time dashboard analytics."
        : "विद्यासंचार स्कूल ईआरपी एप्लीकेशन का निर्माण किया। भूमिका-आधारित प्रमाणीकरण, ऑनलाइन शुल्क प्रोसेसिंग, उपस्थिति लॉग और वास्तविक समय डैशबोर्ड एनालिटिक्स को लागू किया।",
      icon: <Briefcase size={18} className="text-primary-light" />,
      tags: ["ERP System", "Neon DB", "Render", "Vercel"]
    },
    {
      title: i18n.language === 'en' ? "SaaS Development" : "SaaS डेवलपमेंट",
      subtitle: i18n.language === 'en' ? "Product Thinking" : "उत्पाद की सोच",
      description: i18n.language === 'en' 
        ? "Transitioned to designing scalable Software-as-a-Service platforms. Focused on tenancy databases, usage-based rate limiting, API gateways, and stripe payments."
        : "स्केलेबल सॉफ्टवेयर-एज-ए-सर्विस (SaaS) प्लेटफॉर्म डिजाइन करने की ओर बढ़े। बहु-किरायेदार डेटाबेस (tenancy databases) और एपीआई दर सीमा (rate limiting) पर ध्यान केंद्रित किया।",
      icon: <Compass size={18} className="text-emerald-400" />,
      tags: ["Multi-Tenancy", "SaaS Flow", "APIs"]
    },
    {
      title: i18n.language === 'en' ? "Cloud Deployment" : "क्लाउड डिप्लॉयमेंट",
      subtitle: i18n.language === 'en' ? "DevOps Automation" : "डेवऑप्स ऑटोमेशन",
      description: i18n.language === 'en' 
        ? "Learned containerization using Docker. Set up automated continuous integration pipelines with GitHub Actions, containerizing React and Node environments and deploying to VPS instances."
        : "डॉकर का उपयोग करके कंटेनराइजेशन सीखा। गिटहब एक्शन्स के साथ स्वचालित निरंतर एकीकरण पाइपलाइन (CI/CD) स्थापित की, रिएक्ट और नोड परिवेशों को कंटेनर बनाकर तैनात किया।",
      icon: <Cloud size={18} className="text-cyan-400" />,
      tags: ["Docker", "VPS", "CI/CD", "Nginx"]
    },
    {
      title: i18n.language === 'en' ? "Production Applications" : "प्रोडक्शन एप्लीकेशन्स",
      subtitle: i18n.language === 'en' ? "Continuous Maintenance" : "सतत रखरखाव",
      description: i18n.language === 'en' 
        ? "Managing live production web architectures. Integrating logging layers, real-time error tracking, query performance profiling, and SEO optimizations."
        : "लाइव प्रोडक्शन वेब आर्किटेक्चर का प्रबंधन। लॉगिंग लेयर्स, रीयल-टाइम एरर ट्रैकिंग, क्वेरी परफॉर्मेंस प्रोफाइलिंग और एसईओ अनुकूलन को एकीकृत करना।",
      icon: <BookOpen size={18} className="text-rose-400" />,
      tags: ["Performance", "Sentry", "SEO Checks"]
    }
  ];

  // GitHub Stats
  const githubStats = [
    { label: i18n.language === 'en' ? "Total Contributions" : "कुल योगदान", value: "1,842", icon: <Activity className="text-emerald-400" size={16} /> },
    { label: i18n.language === 'en' ? "Stars Earned" : "अर्जित सितारे", value: "86", icon: <FaStar className="text-yellow-400" size={16} /> },
    { label: i18n.language === 'en' ? "Merged PRs" : "मर्ज की गई पीआर", value: "142", icon: <GitPullRequest className="text-secondary" size={16} /> },
    { label: i18n.language === 'en' ? "Repositories" : "रिपॉजिटरी", value: "32", icon: <Award className="text-sky-400" size={16} /> },
  ];

  const featuredRepos: Repo[] = [
    {
      name: "vidyasanchar-core",
      desc: "Robust full-stack school ERP backend architecture featuring processes for role validation, attendance tracking, and fee transactions.",
      stars: 42,
      forks: 14,
      language: "TypeScript",
      langColor: "bg-blue-500",
      url: "https://github.com/Nikhil-beep25"
    },
    {
      name: "saas-boilerplate-fastapi",
      desc: "Production-ready SaaS template incorporating multi-tenant database separation, Redis task queuing with Celery, and custom Stripe integrations.",
      stars: 28,
      forks: 6,
      language: "Python",
      langColor: "bg-yellow-500",
      url: "https://github.com/Nikhil-beep25"
    }
  ];

  const generateGrid = () => {
    const grid = [];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let day = 0; day < 7; day++) {
      const row = [];
      for (let week = 0; week < 24; week++) {
        let count = 0;
        const rand = Math.random();
        if (day > 0 && day < 6) { 
          if (rand > 0.85) count = Math.floor(Math.random() * 8) + 4;
          else if (rand > 0.3) count = Math.floor(Math.random() * 4) + 1;
        } else { 
          if (rand > 0.8) count = Math.floor(Math.random() * 3) + 1;
        }
        const dateStr = `Week ${week + 1}, ${days[day]}`;
        row.push({ count, date: dateStr });
      }
      grid.push(row);
    }
    return { grid };
  };

  const { grid } = generateGrid();

  const getCellColor = (count: number) => {
    if (count === 0) return 'bg-[#1e293b]/40 border-transparent';
    if (count <= 2) return 'bg-cyan-950/40 border-cyan-900/30';
    if (count <= 4) return 'bg-cyan-800/40 border-cyan-700/30';
    if (count <= 6) return 'bg-cyan-600/40 border-cyan-500/30';
    return 'bg-cyan-400/60 border-cyan-300/40 shadow-[0_0_8px_rgba(6,182,212,0.15)]';
  };

  return (
    <motion.div 
      className="py-24 relative overflow-hidden bg-bg-darkest"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h3 className="text-primary-light font-display text-sm font-semibold tracking-widest uppercase mb-3">
            {t('journey.badge')}
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-text-title tracking-tight">
            {t('journey.title')}
          </h2>
          <p className="text-text-muted mt-4 max-w-lg mx-auto text-sm md:text-base">
            {t('journey.description')}
          </p>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto mb-28">
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-border-dark pointer-events-none -translate-x-1/2" />
          <motion.div 
            className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-cyan-500 via-sky-500 to-cyan-400 -translate-x-1/2 origin-top pointer-events-none"
            style={{ scaleY }}
          />

          <div className="space-y-12">
            {milestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-stretch">
                  
                  {/* Left Side */}
                  <div className="w-full md:w-1/2 flex justify-start md:justify-end md:pr-12 pl-12 md:pl-0">
                    {isEven && (
                      <motion.div 
                        className="glass-card p-6 rounded-2xl w-full text-left"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      >
                        <span className="text-[10px] font-bold text-primary-light uppercase tracking-wider block mb-1">
                          Phase 0{idx + 1} • {milestone.subtitle}
                        </span>
                        <h4 className="text-base font-bold text-text-title font-display mb-3">
                          {milestone.title}
                        </h4>
                        <p className="text-text-muted text-xs leading-relaxed mb-4">
                          {milestone.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {milestone.tags.map(t => (
                            <span key={t} className="px-2 py-0.5 rounded bg-bg-dark border border-border-dark text-text-muted text-[9px] font-bold">
                              {t}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Icon */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 flex items-center justify-center z-10 pointer-events-none">
                    <motion.div 
                      className="w-8 h-8 rounded-lg bg-bg-card border-2 border-border-dark flex items-center justify-center text-text-title shadow-md"
                      whileInView={{ 
                        borderColor: "rgba(6,182,212,0.5)",
                        scale: 1.05
                      }}
                      viewport={{ once: true }}
                    >
                      {milestone.icon}
                    </motion.div>
                  </div>

                  {/* Right Side */}
                  <div className="w-full md:w-1/2 flex justify-start md:pl-12 pl-12 md:pr-0 mt-4 md:mt-0">
                    {!isEven && (
                      <motion.div 
                        className="glass-card p-6 rounded-2xl w-full text-left"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      >
                        <span className="text-[10px] font-bold text-primary-light uppercase tracking-wider block mb-1">
                          Phase 0{idx + 1} • {milestone.subtitle}
                        </span>
                        <h4 className="text-base font-bold text-text-title font-display mb-3">
                          {milestone.title}
                        </h4>
                        <p className="text-text-muted text-xs leading-relaxed mb-4">
                          {milestone.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {milestone.tags.map(t => (
                            <span key={t} className="px-2 py-0.5 rounded bg-bg-dark border border-border-dark text-text-muted text-[9px] font-bold">
                              {t}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* GitHub Showcase Section integrated directly under Journey */}
        <div className="border-t border-border-dark/60 pt-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-primary-light font-display text-sm font-semibold tracking-widest uppercase mb-3">
              {i18n.language === 'en' ? "Open Source Activity" : "ओपन सोर्स गतिविधि"}
            </h3>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-text-title tracking-tight">
              {i18n.language === 'en' ? "Commit History & Public Contributions" : "कमिट इतिहास और सार्वजनिक योगदान"}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Stats and repos */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {githubStats.map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-xl glass-card flex flex-col justify-between shadow-sm hover:border-cyan-500/25">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9px] text-text-muted font-bold uppercase tracking-wider">{stat.label}</span>
                      {stat.icon}
                    </div>
                    <div>
                      <span className="text-xl font-bold text-text-title font-display block">{stat.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h4 className="text-base font-bold text-text-title font-display flex items-center gap-2">
                  <Terminal size={16} className="text-primary-light" />
                  {i18n.language === 'en' ? "Featured Repositories" : "विशेष रुप से प्रदर्शित रिपॉजिटरी"}
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {featuredRepos.map((repo, idx) => (
                    <a 
                      key={idx}
                      href={repo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-5 rounded-2xl border border-border-dark glass-card hover:border-cyan-500/25 hover:bg-bg-card-hover/20 transition-all duration-300 flex flex-col justify-between group h-full shadow-sm"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Terminal size={14} className="text-text-muted group-hover:text-cyan-400 transition-colors" />
                          <span className="text-xs font-bold text-text-title group-hover:text-cyan-400 transition-colors font-mono">{repo.name}</span>
                        </div>
                        <p className="text-[11px] text-text-muted leading-relaxed mb-6">
                          {repo.desc}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-text-muted font-semibold mt-auto pt-3 border-t border-border-dark">
                        <div className="flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${repo.langColor}`} />
                          {repo.language}
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1 hover:text-text-title transition-colors">
                            <FaStar size={11} />
                            {repo.stars}
                          </span>
                          <span className="flex items-center gap-1 hover:text-text-title transition-colors">
                            <FaCodeBranch size={11} />
                            {repo.forks}
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Custom contribution graph */}
            <div className="lg:col-span-5 h-full">
              <div className="p-6 rounded-2xl glass-card flex flex-col justify-between h-full shadow-sm text-left hover:border-cyan-500/25">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-border-dark">
                  <div className="flex items-center gap-2.5">
                    <FaGithub size={18} className="text-text-muted" />
                    <span className="text-xs font-bold text-text-title font-display">github.com/Nikhil-beep25</span>
                  </div>
                  <a 
                    href="https://github.com/Nikhil-beep25"
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-bg-dark text-text-muted hover:text-text-title hover:bg-bg-card border border-border-dark/50 transition-colors"
                  >
                    <FaGithub size={14} />
                  </a>
                </div>

                <div className="mb-4">
                  <p className="text-[11px] text-text-muted leading-relaxed">
                    {i18n.language === 'en'
                      ? "Interactive visual of commits, workflows, and contributions in the past 24 weeks."
                      : "पिछले 24 हफ्तों में कमिट, वर्कफ़्लो और योगदान का इंटरैक्टिव दृश्य।"}
                  </p>
                </div>

                {/* SVG Cell Grid */}
                <div className="relative p-3 rounded-xl bg-bg-dark border border-border-dark flex flex-col gap-1.5 overflow-x-auto">
                  <div className="flex justify-between pl-6 text-[8px] font-bold text-text-muted uppercase tracking-widest font-mono">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>

                  <div className="flex gap-1.5">
                    <div className="flex flex-col justify-between text-[8px] font-bold text-text-muted font-mono pr-1">
                      <span>S</span>
                      <span>M</span>
                      <span>W</span>
                      <span>F</span>
                      <span>S</span>
                    </div>

                    <div className="flex flex-col gap-1 flex-grow">
                      {grid.map((row, rIdx) => (
                        <div key={rIdx} className="flex gap-1">
                          {row.map((cell, cIdx) => (
                            <div
                              key={cIdx}
                              className={`w-3 h-3 rounded-[2px] border ${getCellColor(cell.count)} transition-all duration-150 cursor-pointer hover:scale-110 hover:z-10`}
                              onMouseEnter={() => setHoveredCell({ count: cell.count, date: cell.date })}
                              onMouseLeave={() => setHoveredCell(null)}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="min-h-[20px] flex items-center justify-center mt-2.5">
                    <span className="text-[9px] text-text-muted font-bold font-mono uppercase tracking-wider">
                      {hoveredCell 
                        ? `${hoveredCell.count} commit${hoveredCell.count !== 1 ? 's' : ''} on ${hoveredCell.date}`
                        : (i18n.language === 'en' ? "Hover over cells to see commits" : "कमिट देखने के लिए सेल पर होवर करें")
                      }
                    </span>
                  </div>
                </div>

                {/* Grid Legend */}
                <div className="flex items-center justify-between text-[8px] font-bold text-text-muted uppercase tracking-wider font-mono mt-4 pt-4 border-t border-border-dark">
                  <span>Less</span>
                  <div className="flex gap-1">
                    <span className="w-2.5 h-2.5 rounded-[1px] bg-[#1e293b]/40 border border-transparent" />
                    <span className="w-2.5 h-2.5 rounded-[1px] bg-cyan-950/40 border border-cyan-900/30" />
                    <span className="w-2.5 h-2.5 rounded-[1px] bg-cyan-800/40 border border-cyan-700/30" />
                    <span className="w-2.5 h-2.5 rounded-[1px] bg-cyan-600/40 border border-cyan-500/30" />
                    <span className="w-2.5 h-2.5 rounded-[1px] bg-cyan-400/60 border border-cyan-300/40 shadow-[0_0_8px_rgba(6,182,212,0.15)]" />
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
