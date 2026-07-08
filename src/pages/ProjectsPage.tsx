import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Users, CheckSquare, IndianRupee, BarChart3, ShieldAlert, 
  ExternalLink, BookOpen, Layers, Server, Database, ChevronRight, Zap, Cloud
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function ProjectsPage() {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState<'preview' | 'architecture' | 'deployment' | 'journey'>('preview');

  const metrics = [
    { label: t('projects.metricInst'), value: "10+", desc: "Schools active" },
    { label: t('projects.metricUsers'), value: "5,000+", desc: "Students/teachers/parents" },
    { label: t('projects.metricSpeed'), value: "<150ms", desc: "Optimized queries" },
    { label: t('projects.metricUptime'), value: "99.9%", desc: "Hosted on Neon RDS" }
  ];

  const features = [
    { 
      icon: <Users size={18} className="text-cyan-400" />, 
      title: t('projects.featDashboards'), 
      desc: t('projects.featDashboardsDesc') 
    },
    { 
      icon: <CheckSquare size={18} className="text-emerald-400" />, 
      title: t('projects.featAttendance'), 
      desc: t('projects.featAttendanceDesc') 
    },
    { 
      icon: <IndianRupee size={18} className="text-sky-400" />, 
      title: t('projects.featFees'), 
      desc: t('projects.featFeesDesc') 
    },
    { 
      icon: <BarChart3 size={18} className="text-yellow-400" />, 
      title: t('projects.featReports'), 
      desc: t('projects.featReportsDesc') 
    }
  ];

  const challenges = [
    {
      problem: t('projects.challenge1Prob'),
      solution: t('projects.challenge1Sol')
    },
    {
      problem: t('projects.challenge2Prob'),
      solution: t('projects.challenge2Sol')
    }
  ];

  const deploymentSteps = [
    {
      platform: "Vercel",
      role: i18n.language === 'en' ? "Frontend Client Hosting" : "फ्रंटएंड क्लाइंट होस्टिंग",
      desc: i18n.language === 'en' 
        ? "Hosts the React & TypeScript SPA. Auto-builds from main branch and distributes assets via Edge CDN for sub-100ms loading speeds."
        : "रिएक्ट और टाइपस्क्रिप्ट एसपीए होस्ट करता है। मुख्य शाखा से ऑटो-बिल्ड और 100ms से कम समय में लोड होने के लिए एज सीडीएन द्वारा वितरित किया जाता है।",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
    },
    {
      platform: "Render",
      role: i18n.language === 'en' ? "Backend Web Service" : "बैकएंड वेब सर्विस",
      desc: i18n.language === 'en'
        ? "Deploys the clustered Express.js REST API inside Docker containers. Configured auto-scaling triggers behind an HTTPS reverse proxy."
        : "डॉक कंटेनरों के अंदर क्लस्टर्ड एक्सप्रेस.जेएस रेस्ट एपीआई तैनात करता है। एक सुरक्षित एचटीटीपीएस रिवर्स प्रॉक्सी के साथ ऑटो-स्केलिंग ट्रिगर्स कॉन्फ़िगर किए गए हैं।",
      badgeColor: "bg-sky-500/10 text-sky-400 border border-sky-500/20"
    },
    {
      platform: "Neon Database",
      role: i18n.language === 'en' ? "Serverless PostgreSQL" : "सर्वरलेस पोस्टग्रेएसक्यूएल",
      desc: i18n.language === 'en'
        ? "Neon Serverless PostgreSQL database. Utilizes connection pooling, query indexing, and instant schema branching for reliable production data storage."
        : "नियॉन सर्वरलेस पोस्टग्रेएसक्यूएल डेटाबेस। विश्वसनीय डेटा स्टोरेज के लिए कनेक्शन पूलिंग, क्वेरी इंडेक्सिंग और स्कीमा ब्रांचिंग का उपयोग करता है।",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
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
      <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-primary-light font-display text-sm font-semibold tracking-widest uppercase mb-3">
            {t('projects.badge')}
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-text-title tracking-tight">
            {t('projects.title')}
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto text-sm md:text-base">
            {t('projects.tagline')}
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Product Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex gap-2 mb-4">
                {["React", "Node.js", "PostgreSQL", "Prisma"].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-md glass-card text-text-muted text-xs font-semibold hover:border-cyan-500/25">
                    {tech}
                  </span>
                ))}
              </div>
              <h4 className="text-2xl font-bold text-text-title font-display mb-4">
                {t('projects.tagline')}
              </h4>
              <p className="text-text-muted leading-relaxed text-xs md:text-sm">
                {t('projects.description')}
              </p>
            </div>

            {/* Features Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat, idx) => (
                <div key={idx} className="p-4 rounded-xl glass-card flex gap-3 shadow-sm hover:border-cyan-500/25">
                  <div className="p-2 h-fit rounded-lg bg-bg-dark border border-border-dark/60">
                    {feat.icon}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-text-title mb-1 font-display">{feat.title}</h5>
                    <p className="text-[10px] text-text-muted leading-normal">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, idx) => (
                <div key={idx} className="p-4 rounded-xl glass-card border border-cyan-500/10 flex flex-col shadow-sm hover:border-cyan-500/25 hover:shadow-[0_0_15px_rgba(6,182,212,0.05)]">
                  <span className="text-2xl font-extrabold text-cyan-400 font-display">{metric.value}</span>
                  <span className="text-[10px] font-bold text-text-title mb-0.5">{metric.label}</span>
                  <span className="text-[9px] text-text-muted">{metric.desc}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Nikhil-beep25"
                target="_blank"
                rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-white text-xs font-bold shadow-md shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                {t('projects.demoRequest')}
                <ExternalLink size={14} />
              </a>
              <a
                href="https://github.com/Nikhil-beep25"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg glass hover:bg-bg-card-hover text-text-title text-xs font-bold border border-border-dark hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <FaGithub size={14} />
                {t('projects.repo')}
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Panel */}
          <div className="lg:col-span-7">
            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-2 mb-6 border-b border-border-dark pb-2.5">
              {[
                { id: 'preview', label: t('projects.tabPreview'), icon: <Layers size={14} /> },
                { id: 'architecture', label: t('projects.tabArchitecture'), icon: <Database size={14} /> },
                { id: 'deployment', label: i18n.language === 'en' ? 'Deployment' : 'डिप्लॉयमेंट', icon: <Cloud size={14} /> },
                { id: 'journey', label: t('projects.tabChallenges'), icon: <ShieldAlert size={14} /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all border cursor-pointer ${
                    activeTab === tab.id 
                      ? 'bg-primary border-primary/20 text-white shadow-md shadow-primary/15' 
                      : 'text-text-muted hover:text-text-title hover:bg-primary/10 hover:border-primary/20 border-transparent'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content panel */}
            <div className="glass-card rounded-2xl overflow-hidden border border-border-dark min-h-[380px]">
              <AnimatePresence mode="wait">
                
                {/* 1. Dashboard Preview */}
                {activeTab === 'preview' && (
                  <motion.div
                    key="preview"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="p-5 flex flex-col h-full select-none"
                  >
                    <div className="flex items-center justify-between border-b border-border-dark pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                        <span className="text-[10px] font-bold text-text-muted font-mono ml-2 uppercase">VidyaSanchar Hub v1.0</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-[10px] font-bold">Admin Portal</span>
                    </div>

                    <div className="grid grid-cols-12 gap-4 text-left">
                      {/* Sidebar Mock */}
                      <div className="col-span-3 border-r border-border-dark pr-3 space-y-2 hidden sm:block">
                        {["Overview", "Students", "Attendance", "Fee Sheets", "Reports"].map((item, idx) => (
                          <div 
                            key={item} 
                            className={`px-3 py-1.5 rounded-md text-[11px] font-semibold flex items-center justify-between ${
                              idx === 0 ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'text-text-muted hover:text-text-title'
                            }`}
                          >
                            {item}
                            {idx === 0 && <ChevronRight size={10} />}
                          </div>
                        ))}
                      </div>

                      {/* Main Panel Mock */}
                      <div className="col-span-12 sm:col-span-9 flex flex-col gap-4">
                        <div className="grid grid-cols-3 gap-3">
                          <div className="p-3 rounded-lg bg-bg-dark border border-border-dark">
                            <span className="text-[9px] font-semibold text-text-muted uppercase tracking-wider block">Attendance</span>
                            <span className="text-sm font-bold text-emerald-500 mt-1 block">96.8%</span>
                          </div>
                          <div className="p-3 rounded-lg bg-bg-dark border border-border-dark">
                            <span className="text-[9px] font-semibold text-text-muted uppercase tracking-wider block">New Admits</span>
                            <span className="text-sm font-bold text-text-title mt-1 block">+124</span>
                          </div>
                          <div className="p-3 rounded-lg bg-bg-dark border border-border-dark">
                            <span className="text-[9px] font-semibold text-text-muted uppercase tracking-wider block">Defaulters</span>
                            <span className="text-sm font-bold text-red-500 mt-1 block">14</span>
                          </div>
                        </div>

                        {/* Graph mock */}
                        <div className="p-4 rounded-xl bg-bg-dark border border-border-dark flex flex-col gap-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-text-title">Monthly Fee Collections</span>
                            <span className="text-[10px] text-text-muted">Target: 95%</span>
                          </div>
                          <div className="flex items-end justify-between h-28 pt-4 px-2">
                            {[
                              { m: 'Jan', h: '45%' }, { m: 'Feb', h: '60%' }, 
                              { m: 'Mar', h: '85%' }, { m: 'Apr', h: '98%' }, 
                              { m: 'May', h: '75%' }, { m: 'Jun', h: '92%' }
                            ].map((bar, i) => (
                              <div key={i} className="flex flex-col items-center gap-1.5 w-1/8">
                                <div className="w-full bg-border-dark rounded-t-sm h-24 flex items-end">
                                  <div 
                                    className="w-full bg-gradient-to-t from-primary to-secondary rounded-t-sm"
                                    style={{ height: bar.h }}
                                  />
                                </div>
                                <span className="text-[8px] font-bold text-text-muted font-mono">{bar.m}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 2. Architecture Diagram */}
                {activeTab === 'architecture' && (
                  <motion.div
                    key="architecture"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="p-6 flex flex-col justify-center items-center h-full min-h-[350px]"
                  >
                    <div className="max-w-xl w-full text-left">
                      <h5 className="text-sm font-bold text-text-title mb-2 flex items-center gap-2">
                        <Layers size={16} className="text-primary-light" />
                        {t('projects.archTitle')}
                      </h5>
                      <p className="text-xs text-text-muted mb-6">
                        {t('projects.archDesc')}
                      </p>
                      
                      {/* Flow Diagram */}
                      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 w-full relative">
                        <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20 flex flex-col items-center w-36 text-center shadow-sm bg-bg-card">
                          <Layers className="text-blue-500 mb-2" size={20} />
                          <span className="text-xs font-bold text-text-title">Client Frontend</span>
                          <span className="text-[9px] text-text-muted mt-1">React / TS / Tailwind</span>
                        </div>

                        <div className="flex flex-col items-center text-text-muted font-mono text-[9px]">
                          <Zap size={14} className="text-primary-light animate-pulse" />
                          <span className="hidden md:inline">──────&gt;</span>
                          <span className="md:hidden">▼</span>
                          <span>HTTPS REST</span>
                        </div>

                         <div className="p-4 rounded-xl bg-sky-500/5 border border-sky-500/20 flex flex-col items-center w-36 text-center shadow-sm bg-bg-card">
                          <Server className="text-sky-400 mb-2" size={20} />
                          <span className="text-xs font-bold text-text-title">Express API</span>
                          <span className="text-[9px] text-text-muted mt-1">Node.js clustered</span>
                        </div>

                        <div className="flex flex-col items-center text-text-muted font-mono text-[9px]">
                          <Database size={14} className="text-emerald-500" />
                          <span className="hidden md:inline">──────&gt;</span>
                          <span className="md:hidden">▼</span>
                          <span>Prisma ORM</span>
                        </div>

                        <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex flex-col items-center w-36 text-center shadow-sm bg-bg-card">
                          <Database className="text-emerald-500 mb-2" size={20} />
                          <span className="text-xs font-bold text-text-title">PostgreSQL DB</span>
                          <span className="text-[9px] text-text-muted mt-1">Neon Serverless</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 3. Deployment Flow */}
                {activeTab === 'deployment' && (
                  <motion.div
                    key="deployment"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="p-6 text-left space-y-6"
                  >
                    <div>
                      <h5 className="text-sm font-bold text-text-title mb-1.5 flex items-center gap-2">
                        <Cloud size={16} className="text-primary-light" />
                        {i18n.language === 'en' ? 'Deployment Architecture' : 'डिप्लॉयमेंट आर्किटेक्चर'}
                      </h5>
                      <p className="text-xs text-text-muted">
                        {i18n.language === 'en'
                          ? "VidyaSanchar is deployed in a fully automated CI/CD pipeline across three optimized cloud platforms."
                          : "विद्यासंचार तीन अनुकूलित क्लाउड प्लेटफॉर्म पर पूरी तरह से स्वचालित सीआई/सीडी पाइपलाइन में तैनात है।"}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {deploymentSteps.map((d, i) => (
                        <div key={i} className="p-4 rounded-xl glass-card flex flex-col h-full justify-between shadow-sm hover:border-cyan-500/25">
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-sm font-extrabold text-text-title font-display">{d.platform}</span>
                              <span className={`px-2 py-0.5 rounded text-[8px] font-bold ${d.badgeColor}`}>
                                {d.role}
                              </span>
                            </div>
                            <p className="text-xs text-text-muted leading-relaxed">
                              {d.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* 4. Challenges Solved */}
                {activeTab === 'journey' && (
                  <motion.div
                    key="journey"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="p-6 space-y-6 text-left"
                  >
                    <h5 className="text-sm font-bold text-text-title mb-2 flex items-center gap-2">
                      <BookOpen size={16} className="text-primary-light" />
                      {t('projects.challengeTitle')}
                    </h5>

                    <div className="space-y-4">
                      {challenges.map((c, i) => (
                        <div key={i} className="p-4 rounded-xl bg-bg-dark border border-border-dark space-y-2">
                          <div className="flex items-start gap-2">
                            <span className="px-1.5 py-0.5 rounded bg-red-500/25 text-red-500 text-[8px] font-bold mt-0.5">CHALLENGE</span>
                            <p className="text-xs font-bold text-text-title">{c.problem}</p>
                          </div>
                          <div className="flex items-start gap-2 pl-1">
                            <span className="px-1.5 py-0.5 rounded bg-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-[8px] font-bold mt-0.5">SOLUTION</span>
                            <p className="text-xs text-text-muted leading-normal">{c.solution}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
