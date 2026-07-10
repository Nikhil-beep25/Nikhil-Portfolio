import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code2, Server, Database, Cloud, FileText, Download, Eye } from 'lucide-react';

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

  const stats = [
    { labelKey: 'about.statReposPublished', value: 2 as string | number, isNumeric: true },
    { labelKey: 'about.statPortfolioProjects', value: 1 as string | number, isNumeric: true },
    { labelKey: 'about.statCoreTech', value: 'React, TypeScript, Node.js, Python, PostgreSQL, Prisma' as string | number, isNumeric: false },
    { labelKey: 'about.statOSJourney', value: 'Started 2026' as string | number, isNumeric: false },
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
      icon: <Cloud size={24} className="text-secondary" />,
      titleKey: "about.focusDevOps",
      descKey: "about.focusDevOpsDesc"
    }
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-5 rounded-xl glass-card flex flex-col justify-center shadow-sm hover:border-cyan-500/25">
                  <span className={`font-display text-text-title mb-1.5 text-gradient-premium ${
                    stat.isNumeric ? 'text-3xl md:text-4xl font-extrabold' : 'text-xs sm:text-sm font-semibold'
                  }`}>
                    {stat.isNumeric ? (
                      <Counter value={stat.value as number} />
                    ) : (
                      stat.value as string
                    )}
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
                  ? "My resume outlines my technical experience, full-stack competencies, and operational framework. You can inspect the document directly in a new tab, or download the optimized PDF copy to share with your technical recruiting team."
                  : "मेरा रिज्यूमे मेरे तकनीकी अनुभव, फुल-स्टैक क्षमताओं और परिचालन ढांचे को रेखांकित करता है। आप सीधे एक नए टैब में दस्तावेज़ का निरीक्षण कर सकते हैं, या अपनी तकनीकी भर्ती टीम के साथ साझा करने के लिए पीडीएफ कॉपी डाउनलोड कर सकते हैं।"}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/resume/Nikhil_Bhadauriya_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-md shadow-primary/25 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  <Eye size={14} />
                  {i18n.language === 'en' ? "View Full Resume" : "पूरा रिज्यूमे देखें"}
                </a>

                <a
                  href="/resume/Nikhil_Bhadauriya_Resume.pdf"
                  download="Nikhil_Bhadauriya_Resume.pdf"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass hover:bg-bg-card-hover text-text-title text-xs font-semibold border border-border-dark hover:border-cyan-500/20 hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <Download size={14} />
                  {i18n.language === 'en' ? "Download PDF Resume" : "पीडीएफ रिज्यूमे डाउनलोड करें"}
                </a>
              </div>
            </div>

            {/* Right Resume tilted visual */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.a 
                href="/resume/Nikhil_Bhadauriya_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="relative w-64 h-80 rounded-xl glass-card p-5 shadow-2xl flex flex-col justify-between overflow-hidden cursor-pointer select-none"
                style={{ perspective: 1000 }}
                whileHover={{ 
                  rotateY: -12, 
                  rotateX: 8, 
                  scale: 1.03,
                  borderColor: "rgba(6,182,212,0.4)"
                }}
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
              </motion.a>
            </div>
          </div>
        </div>

      </div>


    </motion.div>
  );
}
