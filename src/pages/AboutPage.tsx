import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code2, Server, Database, Cloud, FileText, Download, Eye, X, Mail, Phone, MapPin, Award, Briefcase, GraduationCap } from 'lucide-react';

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const duration = 1.5; 
      const steps = 30; 
      const stepDuration = (duration * 1000) / steps;
      const increment = Math.ceil(end / steps);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function AboutPage() {
  const { t, i18n } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  const stats = [
    { labelKey: 'about.statYears', value: 5, suffix: '+' },
    { labelKey: 'about.statProjects', value: 15, suffix: '+' },
    { labelKey: 'about.statTech', value: 20, suffix: '+' },
    { labelKey: 'about.statRepos', value: 30, suffix: '+' },
  ];

  const coreFocus = [
    {
      icon: <Code2 size={24} className="text-cyan-400" />,
      titleKey: "about.focusPython",
      descKey: "about.focusPythonDesc"
    },
    {
      icon: <Server size={24} className="text-sky-400" />,
      titleKey: "about.focusFullStack",
      descKey: "about.focusFullStackDesc"
    },
    {
      icon: <Database size={24} className="text-emerald-400" />,
      titleKey: "about.focusBackend",
      descKey: "about.focusBackendDesc"
    },
    {
      icon: <Cloud size={24} className="text-violet-400" />,
      titleKey: "about.focusDevOps",
      descKey: "about.focusDevOpsDesc"
    }
  ];

  // Real resume work experience details
  const experience = [
    {
      role: "Python Full-Stack Engineer & SaaS Builder",
      company: "Freelance & Independent Projects",
      period: "2023 - Present",
      bullets: [
        "Architected and deployed full-stack school ERP (VidyaSanchar) serving 5,000+ users, utilizing Node.js, Express, PostgreSQL, and React.",
        "Engineered RESTful microservices in FastAPI and Django, decreasing API load times by 35% through query optimization and caching.",
        "Built and launched production SaaS architectures incorporating multi-tenant database isolation (schemas) and Stripe payment layers.",
        "Automated deployment workflows using Docker containers, Nginx reverse proxies, and GitHub Actions pipelines."
      ]
    },
    {
      role: "Backend Web Developer",
      company: "Contract Positions",
      period: "2021 - 2023",
      bullets: [
        "Built responsive CRUD APIs using Flask and Django REST Framework, integrating Postgres and MongoDB databases.",
        "Optimized complex database queries, indexes, and triggers, ensuring 99.9% application uptime.",
        "Collaborated with frontend designers to integrate REST endpoints with modular React-TypeScript client dashboards."
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science / Information Technology",
      institution: "Indian University",
      period: "Completed"
    }
  ];

  const certifications = [
    "Advanced Python Applications & Scripting",
    "Full-Stack Web Development (MERN Ecosystem)",
    "Docker & Container Orchestration Practices"
  ];

  return (
    <motion.div 
      className="py-24 relative overflow-hidden bg-bg-darkest"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-primary-light font-display text-sm font-semibold tracking-widest uppercase mb-3">
            {t('about.badge')}
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-text-title tracking-tight">
            {t('about.title')}
          </h2>
        </div>

        {/* Introduction & Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Left Column: Intro Description */}
          <div className="lg:col-span-6 text-text-muted">
            <h4 className="text-2xl font-bold text-text-title mb-6 font-display">
              {t('about.introTitle')}
            </h4>
            <div className="space-y-6 text-sm md:text-base leading-relaxed text-text-muted">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>

            {/* Statistics Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-xl glass-card flex flex-col justify-center shadow-sm hover:border-cyan-500/25">
                  <span className="text-3xl md:text-4xl font-extrabold font-display text-text-title mb-1 text-gradient-premium">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider">{t(stat.labelKey)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Core Focus Areas */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {coreFocus.map((focus, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl glass-card transition-all duration-300 group flex flex-col h-full shadow-sm hover:border-cyan-500/25"
              >
                <div className="p-3 w-fit rounded-xl bg-bg-dark border border-border-dark mb-5 group-hover:bg-cyan-500/10 group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-all duration-300">
                  {focus.icon}
                </div>
                <h5 className="text-base font-bold text-text-title mb-2 font-display group-hover:text-cyan-400 transition-colors duration-300">
                  {t(focus.titleKey)}
                </h5>
                <p className="text-xs text-text-muted leading-relaxed mt-auto">
                  {t(focus.descKey)}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Resume Box */}
        <div className="max-w-4xl mx-auto border-t border-border-dark/60 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Resume details */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h4 className="text-2xl font-bold text-text-title font-display">
                {i18n.language === 'en' ? "Professional Credentials & CV" : "व्यावसायिक साख और सीवी"}
              </h4>
              <p className="text-text-muted leading-relaxed text-xs md:text-sm">
                {i18n.language === 'en' 
                  ? "My resume outlines my technical experience, full-stack competencies, and operational framework. You can inspect the document inside a custom interactive modal right here in your browser, or download the optimized PDF copy to share with your technical recruiting team."
                  : "मेरा रिज्यूमे मेरे तकनीकी अनुभव, फुल-स्टैक क्षमताओं और परिचालन ढांचे को रेखांकित करता है। आप यहीं अपने ब्राउज़र में एक कस्टम इंटरेक्टिव मॉडल के अंदर दस्तावेज़ का निरीक्षण कर सकते हैं, या अपनी तकनीकी भर्ती टीम के साथ साझा करने के लिए अनुकूलित पीडीएफ कॉपी डाउनलोड कर सकते हैं।"}
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setShowModal(true)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white text-xs font-semibold shadow-md shadow-cyan-500/25 hover:shadow-cyan-400/45 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  <Eye size={14} />
                  {i18n.language === 'en' ? "View Full Resume" : "पूरा रिज्यूमे देखें"}
                </button>

                <a
                  href="/contact"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass hover:bg-bg-card-hover text-text-title text-xs font-semibold border border-border-dark hover:border-cyan-500/20 hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <Download size={14} />
                  {i18n.language === 'en' ? "Download PDF Resume" : "पीडीएफ रिज्यूमे डाउनलोड करें"}
                </a>
              </div>
            </div>

            {/* Right Resume tilted visual */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div 
                className="relative w-64 h-80 rounded-xl glass-card p-5 shadow-2xl flex flex-col justify-between overflow-hidden cursor-pointer select-none"
                style={{ perspective: 1000 }}
                whileHover={{ 
                  rotateY: -12, 
                  rotateX: 8, 
                  scale: 1.03,
                  borderColor: "rgba(6,182,212,0.4)"
                }}
                onClick={() => setShowModal(true)}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="space-y-3.5 text-left">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="w-24 h-3 bg-text-title/80 rounded" />
                      <div className="w-16 h-2 bg-text-muted/60 rounded mt-1.5" />
                    </div>
                    <FileText className="text-cyan-400" size={20} />
                  </div>

                  <div className="border-t border-border-dark pt-3 space-y-2.5">
                    <div className="w-full h-1.5 bg-text-muted/20 rounded" />
                    <div className="w-11/12 h-1.5 bg-text-muted/20 rounded" />
                    <div className="w-10/12 h-1.5 bg-text-muted/20 rounded" />
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <div className="w-14 h-2.5 bg-text-title/60 rounded" />
                    <div className="flex gap-1.5">
                      <div className="w-10 h-1.5 bg-text-muted/20 rounded" />
                      <div className="w-12 h-1.5 bg-text-muted/20 rounded" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-border-dark pt-3 text-left">
                  <div className="w-20 h-2 bg-text-muted/30 rounded" />
                  <span className="text-[8px] font-bold text-cyan-400 uppercase tracking-wider">
                    {i18n.language === 'en' ? "Preview CV" : "पूर्वावलोकन"}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

      </div>

      {/* CV Modal Preview */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-bg-dark border border-border-dark rounded-2xl w-full max-w-4xl max-h-[85vh] overflow-y-auto flex flex-col shadow-2xl relative"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              
              {/* Modal Header */}
              <div className="sticky top-0 bg-bg-dark border-b border-border-dark p-5 flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <FileText className="text-primary" size={18} />
                  <span className="text-xs font-bold text-text-title font-display">Nikhil Bhadauriya — Full CV Preview</span>
                </div>
                <button 
                  onClick={() => setShowModal(false)}
                  className="p-1.5 rounded-lg bg-bg-card hover:bg-bg-card-hover border border-border-dark text-text-muted hover:text-text-title transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* CV Body */}
              <div className="p-8 md:p-12 space-y-10 text-left bg-bg-darkest text-text-main">
                <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end border-b border-border-dark pb-8 gap-4">
                  <div>
                    <h1 className="text-3xl font-extrabold text-text-title tracking-tight font-display mb-1.5">Nikhil Bhadauriya</h1>
                    <h2 className="text-base font-bold text-primary-light font-display">Python Full Stack Developer</h2>
                  </div>
                  <div className="text-xs space-y-1 font-semibold text-text-muted">
                    <div className="flex items-center gap-2"><Mail size={11} /> nikhilbhadauriya2500@gmail.com</div>
                    <div className="flex items-center gap-2"><Phone size={11} /> +91 80773 13959</div>
                    <div className="flex items-center gap-2"><MapPin size={11} /> India</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-black text-text-title uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-border-dark pb-1.5">
                    <Award size={12} className="text-primary-light" /> Professional Summary
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Highly analytical and result-driven Python Full Stack Developer with 5+ years of programming and software building experience. Specialized in architecting robust database schemas, clustered REST APIs, and responsive React frontend systems. Proven record of developing large institutional scale ERP platforms (VidyaSanchar) and building clean, modular SaaS solutions.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xs font-black text-text-title uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-border-dark pb-1.5">
                    <Briefcase size={12} className="text-primary-light" /> Professional Work History
                  </h3>
                  
                  <div className="space-y-6">
                    {experience.map((exp, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-sm font-bold text-text-title font-display">{exp.role}</h4>
                            <span className="text-[11px] text-text-muted font-semibold">{exp.company}</span>
                          </div>
                          <span className="text-[10px] font-bold font-mono text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                            {exp.period}
                          </span>
                        </div>
                        <ul className="list-disc pl-5 text-xs text-text-muted space-y-1.5 leading-relaxed">
                          {exp.bullets.map((bullet, bIdx) => (
                            <li key={bIdx}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-black text-text-title uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-border-dark pb-1.5">
                    <GraduationCap size={12} className="text-primary-light" /> Education
                  </h3>
                  {education.map((edu, idx) => (
                    <div key={idx} className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xs font-bold text-text-title font-display">{edu.degree}</h4>
                        <span className="text-[11px] text-text-muted font-semibold">{edu.institution}</span>
                      </div>
                      <span className="text-xs font-semibold text-text-muted">{edu.period}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-xs font-black text-text-title uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-border-dark pb-1.5">
                    <Award size={12} className="text-primary-light" /> Key Accreditations
                  </h3>
                  <ul className="list-disc pl-5 text-xs text-text-muted space-y-1">
                    {certifications.map((c, idx) => (
                      <li key={idx}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-bg-dark border-t border-border-dark p-4 flex justify-end gap-3 z-10">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg bg-bg-card hover:bg-bg-card-hover border border-border-dark text-text-title text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="mailto:nikhilbhadauriya2500@gmail.com"
                  className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-hover text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  <Mail size={12} />
                  Email Nikhil
                </a>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
