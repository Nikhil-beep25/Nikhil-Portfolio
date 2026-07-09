import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Users, CheckSquare, IndianRupee, BarChart3, 
  ExternalLink, Layers, Server, Database, ChevronRight, Zap, Cloud
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function ProjectsPage() {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState<'preview' | 'architecture' | 'features' | 'roadmap'>('preview');

  const metrics = [
    { label: i18n.language === 'en' ? "Project Type" : "प्रोजेक्ट का प्रकार", value: i18n.language === 'en' ? "Prototype" : "प्रोटोटाइप", desc: i18n.language === 'en' ? "Educational simulation" : "शैक्षिक सिमुलेशन" },
    { label: i18n.language === 'en' ? "Development Status" : "विकास की स्थिति", value: i18n.language === 'en' ? "In Progress" : "प्रगति पर है", desc: i18n.language === 'en' ? "Active learning project" : "सक्रिय सीखने का प्रोजेक्ट" }
  ];

  const features = [
    { 
      icon: <Users size={18} className="text-cyan-400" />, 
      title: i18n.language === 'en' ? "User Management" : "उपयोगकर्ता प्रबंधन", 
      desc: i18n.language === 'en' ? "Student & Teacher records and profiles management." : "छात्र और शिक्षक रिकॉर्ड और प्रोफाइल प्रबंधन।" 
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
                { id: 'features', label: i18n.language === 'en' ? 'Features & Tech Stack' : 'विशेषताएं और टेक स्टैक', icon: <CheckSquare size={14} /> },
                { id: 'roadmap', label: i18n.language === 'en' ? 'Project Roadmap' : 'प्रोजेक्ट रोडमैप', icon: <Cloud size={14} /> },
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
                      <div className="flex gap-2">
                        <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-[10px] font-bold">Concept UI</span>
                        <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-700 dark:text-amber-300 text-[10px] font-bold">Prototype Preview</span>
                      </div>
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
                            <span className="text-[9px] font-semibold text-text-muted uppercase tracking-wider block">Demo Attendance</span>
                            <span className="text-sm font-bold text-emerald-500 mt-1 block">96.8%</span>
                          </div>
                          <div className="p-3 rounded-lg bg-bg-dark border border-border-dark">
                            <span className="text-[9px] font-semibold text-text-muted uppercase tracking-wider block">Sample Admits</span>
                            <span className="text-sm font-bold text-text-title mt-1 block">+124</span>
                          </div>
                          <div className="p-3 rounded-lg bg-bg-dark border border-border-dark">
                            <span className="text-[9px] font-semibold text-text-muted uppercase tracking-wider block">Mock Defaulters</span>
                            <span className="text-sm font-bold text-red-500 mt-1 block">14</span>
                          </div>
                        </div>

                        {/* Graph mock */}
                        <div className="p-4 rounded-xl bg-bg-dark border border-border-dark flex flex-col gap-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-text-title">Concept Visualization - Sample Fee Data</span>
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

                {/* 2. Architecture & Design */}
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

                      {/* Security Features */}
                      <div className="mt-8 border-t border-border-dark/60 pt-4">
                        <h6 className="text-xs font-bold text-text-title uppercase tracking-wider mb-3">Security Features</h6>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                          {[
                            i18n.language === 'en' ? "Role Based Access" : "भूमिका आधारित पहुंच",
                            i18n.language === 'en' ? "Secure Authentication" : "सुरक्षित प्रमाणीकरण",
                            i18n.language === 'en' ? "Protected Routes" : "सुरक्षित रूट्स",
                            i18n.language === 'en' ? "Data Validation" : "डेटा सत्यापन"
                          ].map((secFeature) => (
                            <div key={secFeature} className="p-2.5 rounded-lg bg-bg-dark border border-border-dark text-[10px] font-bold text-text-muted">
                              {secFeature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 3. Features & Tech Stack */}
                {activeTab === 'features' && (
                  <motion.div
                    key="features"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="p-6 text-left space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Features Card */}
                      <div className="p-5 rounded-xl bg-bg-dark border border-border-dark flex flex-col h-full shadow-sm">
                        <h5 className="text-xs font-bold text-text-title uppercase tracking-widest border-b border-border-dark/60 pb-2 mb-3">
                          {i18n.language === 'en' ? "Features Implemented" : "लागू की गई विशेषताएं"}
                        </h5>
                        <ul className="list-disc pl-5 text-xs text-text-muted space-y-1.5 leading-relaxed">
                          {[
                            "Student Management",
                            "Teacher Management",
                            "Attendance Management",
                            "Fee Management",
                            "Role-Based Access Control",
                            "Dashboard UI",
                            "Authentication",
                            "Reports Module"
                          ].map(f => <li key={f}>{f}</li>)}
                        </ul>
                      </div>

                      {/* Tech Stack Card */}
                      <div className="p-5 rounded-xl bg-bg-dark border border-border-dark flex flex-col h-full shadow-sm">
                        <h5 className="text-xs font-bold text-text-title uppercase tracking-widest border-b border-border-dark/60 pb-2 mb-3">
                          {i18n.language === 'en' ? "Technology Stack" : "तकनीकी स्टैक"}
                        </h5>
                        <ul className="list-disc pl-5 text-xs text-text-muted space-y-1.5 leading-relaxed">
                          {[
                            "React",
                            "TypeScript",
                            "Tailwind CSS",
                            "Node.js",
                            "Express",
                            "PostgreSQL",
                            "Prisma"
                          ].map(t => <li key={t}>{t}</li>)}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 4. Project Roadmap */}
                {activeTab === 'roadmap' && (
                  <motion.div
                    key="roadmap"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="p-6 space-y-6 text-left"
                  >
                    <div>
                      <h5 className="text-sm font-bold text-text-title mb-1.5 flex items-center gap-2">
                        <Cloud size={16} className="text-primary-light" />
                        {i18n.language === 'en' ? 'Future Project Roadmap' : 'भविष्य का प्रोजेक्ट रोडमैप'}
                      </h5>
                      <p className="text-xs text-text-muted mb-4">
                        {i18n.language === 'en'
                          ? "Upcoming features and development stages planned for VidyaSanchar."
                          : "विद्यासंचार के लिए आगामी विशेषताएं और नियोजित डिप्लॉयमेंट चरण।"}
                      </p>
                    </div>

                    <div className="relative border-l border-border-dark pl-6 space-y-6">
                      {[
                        { title: "Parent Portal", desc: "Separate access dashboard for parent accounts to inspect attendance and grades." },
                        { title: "Notifications", desc: "Email and SMS integrations to send automatic updates to parents/students." },
                        { title: "Timetable Management", desc: "Automated schedule builder and calendar viewer for classes." },
                        { title: "Examination Module", desc: "Simulated grade book sheets and report card generation." },
                        { title: "Deployment Pipeline", desc: "Dockerized setup for easy replication and continuous deployment." }
                      ].map((item, index) => (
                        <div key={index} className="relative">
                          <span className="absolute -left-[30px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 border border-bg-card" />
                          <h6 className="text-xs font-bold text-text-title">{item.title}</h6>
                          <p className="text-[10px] text-text-muted mt-0.5 leading-normal">{item.desc}</p>
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
