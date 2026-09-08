import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, CheckSquare, BarChart3, 
  ExternalLink, Layers, Server, Database, Zap, Cloud, Award, CheckCircle2,
  Sparkles, ArrowUpRight, Code2, Rocket
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// Only verified projects that exist in this repository
const projectsList = [
  {
    title: "VidyaSanchar ERP",
    tagline: "School Management ERP Prototype",
    desc: "VidyaSanchar is a full-stack educational management portal built as an active learning project. It simulates institutional automation with role-based access control, attendance logging, student dashboards, and a fee ledger — built from scratch using React, Node.js, PostgreSQL, and Prisma.",
    tech: ["React", "Node.js", "PostgreSQL", "Prisma ORM", "Express"],
    categories: ["Full Stack"],
    github: "https://github.com/Nikhil-beep25/Nikhil-Portfolio",
    demo: "https://github.com/Nikhil-beep25",
    features: [
      "Role-Based Dashboards",
      "Attendance Tracking",
      "Fee Ledger Prototype",
      "Student Record Management"
    ],
    status: "Prototype Under Active Development",
    isFlagship: true
  },
  {
    title: "CarVerse",
    tagline: "Car Rental Management Platform",
    desc: "A full-stack car rental management system built with the MERN stack. Features vehicle fleet management, dynamic customer booking engine, JWT authentication, role-based admin dashboard, Razorpay payment workflow, and MongoDB Atlas database.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
    categories: ["Full Stack"],
    github: "https://github.com/Nikhil-beep25/CarVerse",
    demo: "https://carverse-india.vercel.app/",
    features: [
      "Fleet & Vehicle Catalog",
      "Online Booking & Rental Engine",
      "Admin Fleet & Booking Dashboard",
      "JWT Auth & Role-Based Access"
    ],
    status: "Production Ready",
    isFlagship: false
  },
  {
    title: "Personal Portfolio",
    tagline: "Full-Stack Developer Portfolio",
    desc: "A developer portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion. Features a dynamic theme customizer with 7 color palettes, dark/light/system modes, glassmorphism design, and a contact form powered by Resend.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    categories: ["Full Stack"],
    github: "https://github.com/Nikhil-beep25/Nikhil-Portfolio",
    demo: "https://github.com/Nikhil-beep25/Nikhil-Portfolio",
    features: [
      "Dynamic Theme Customizer",
      "7-Palette Color System",
      "English Support",
      "Scroll-Aware Navigation"
    ],
    status: "Production Ready",
    isFlagship: false
  }
];

export default function ProjectsPage() {
  const [activeProjectFilter, setActiveProjectFilter] = useState<'All' | 'Full Stack'>('All');
  const [flagshipTab, setFlagshipTab] = useState<'preview' | 'architecture' | 'features' | 'roadmap'>('preview');

  // Filter projects by category
  const filteredProjects = projectsList.filter((project) => {
    if (project.isFlagship) return false; // Flagship is rendered separately on top
    return activeProjectFilter === 'All' || project.categories.includes(activeProjectFilter);
  });

  const flagship = projectsList.find(p => p.isFlagship)!;

  const flagshipFeatures = [
    { icon: <Users size={16} className="text-primary-light" />, title: "Role-Based Dashboards", desc: "Simulated dashboards tailored for School Admins, Teachers, Students, and Parents." },
    { icon: <CheckSquare size={16} className="text-secondary-light" />, title: "Attendance Tracking", desc: "Attendance logging prototype with student records and dashboard visualization." },
    { icon: <Award size={16} className="text-emerald-400" />, title: "Fee Management", desc: "Mock payment log and fee records dashboard with automated PDF receipt generation." },
    { icon: <BarChart3 size={16} className="text-yellow-400" />, title: "Reports & Analytics", desc: "Sample charts representing grade curves, demo attendance trends, and financial sheets." }
  ];

  return (
    <motion.div 
      className="py-6 md:py-10 relative overflow-hidden bg-bg-darkest min-h-screen text-text-main pt-4 md:pt-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Aurora background glowing ambient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10 space-y-10 md:space-y-12">
        
        {/* ── Page Header (JourneyPage Unified System) ── */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.span 
            className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-bold text-primary-light uppercase tracking-wider inline-flex items-center gap-1.5 shadow-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Sparkles size={13} className="text-primary-light" />
            Engineering Case Studies & Codebases
          </motion.span>
          
          <motion.h1 
            className="text-3xl md:text-5xl font-extrabold font-display text-text-title tracking-tight mt-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-pink-500">Projects</span>
          </motion.h1>
          
          <motion.p 
            className="text-text-muted mt-4 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Engineered from scratch with authentic git histories, verified full-stack architectures, relational data modeling, and live production deployments.
          </motion.p>
        </div>

        {/* ── Key Metrics Ribbon (4 Cards - Journey Standard) ── */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div className="p-4 rounded-2xl glass-aurora border border-cyan-500/25 relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />
            <span className="text-xs font-mono font-bold text-cyan-400 block mb-1">Production Live</span>
            <p className="text-2xl md:text-3xl font-extrabold font-display text-text-title">CarVerse</p>
            <p className="text-[11px] text-text-muted mt-1 leading-tight">MERN + Razorpay Fleet Platform</p>
          </div>

          <div className="p-4 rounded-2xl glass-aurora border border-emerald-500/25 relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
            <span className="text-xs font-mono font-bold text-emerald-400 block mb-1">Flagship ERP</span>
            <p className="text-2xl md:text-3xl font-extrabold font-display text-text-title">VidyaSanchar</p>
            <p className="text-[11px] text-text-muted mt-1 leading-tight">PostgreSQL & Prisma Backend</p>
          </div>

          <div className="p-4 rounded-2xl glass-aurora border border-primary/25 relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-full blur-xl pointer-events-none" />
            <span className="text-xs font-mono font-bold text-primary-light block mb-1">Source Code</span>
            <p className="text-2xl md:text-3xl font-extrabold font-display text-text-title">100% Open</p>
            <p className="text-[11px] text-text-muted mt-1 leading-tight">Public Repositories on GitHub</p>
          </div>

          <div className="p-4 rounded-2xl glass-aurora border border-secondary/25 relative overflow-hidden group hover:border-secondary/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/10 rounded-full blur-xl pointer-events-none" />
            <span className="text-xs font-mono font-bold text-secondary-light block mb-1">Architecture</span>
            <p className="text-2xl md:text-3xl font-extrabold font-display text-text-title">Full Stack</p>
            <p className="text-[11px] text-text-muted mt-1 leading-tight">React, Node, Express, DBs</p>
          </div>
        </motion.div>

        {/* ── Flagship Project Spotlight ── */}
        <div className="space-y-6 max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Rocket size={18} className="text-primary-light" />
              <h2 className="text-lg md:text-xl font-bold font-display text-text-title">
                Flagship Project Spotlight — {flagship.title}
              </h2>
            </div>
            <span className="text-[11px] font-mono text-primary-light font-bold bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
              Enterprise Prototype
            </span>
          </div>

          <div className="p-6 md:p-8 rounded-3xl glass-aurora border border-primary/30 relative overflow-hidden text-left shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Details */}
              <div className="lg:col-span-5 space-y-5 text-left">
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {flagship.tech.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-primary-light text-[10px] font-bold font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold font-display text-text-title">{flagship.title}</h3>
                  <span className="text-xs font-mono text-secondary-light font-bold block mt-1">{flagship.tagline}</span>
                  <p className="text-xs text-text-muted mt-3 leading-relaxed">
                    {flagship.desc}
                  </p>
                </div>

                {/* Flagship Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {flagshipFeatures.map((feat, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex gap-2.5 hover:border-primary/25 transition-colors">
                      <div className="p-1.5 h-fit rounded-lg bg-bg-dark border border-white/10 shrink-0">
                        {feat.icon}
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold text-text-title font-display leading-tight">{feat.title}</h4>
                        <p className="text-[9px] text-text-muted mt-0.5 leading-normal">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={flagship.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    <span>Explore Codebase</span>
                    <ExternalLink size={12} />
                  </a>
                  <a
                    href={flagship.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/10 text-text-title text-xs font-bold border border-white/10 hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    <FaGithub size={13} />
                    <span>GitHub Repo</span>
                  </a>
                </div>
              </div>

              {/* Right Interactive panel */}
              <div className="lg:col-span-7">
                {/* Tab Selector matching JourneyPage pills */}
                <div className="flex flex-wrap items-center gap-1.5 mb-4 border-b border-white/5 pb-2">
                  {[
                    { id: 'preview', label: 'Dashboard UI', icon: <Layers size={12} /> },
                    { id: 'architecture', label: 'System Flow', icon: <Database size={12} /> },
                    { id: 'features', label: 'Challenges Solved', icon: <CheckSquare size={12} /> },
                    { id: 'roadmap', label: 'Development Roadmap', icon: <Cloud size={12} /> },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setFlagshipTab(tab.id as any)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold rounded-full transition-all border cursor-pointer ${
                        flagshipTab === tab.id 
                          ? 'bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 border-primary/50 text-text-title shadow-sm font-extrabold' 
                          : 'text-text-muted border-transparent hover:text-text-title hover:bg-white/5'
                      }`}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Content box */}
                <div className="glass-aurora rounded-2xl overflow-hidden border border-white/10 min-h-[350px] shadow-2xl">
                  <AnimatePresence mode="wait">
                    
                    {/* 1. Preview UI */}
                    {flagshipTab === 'preview' && (
                      <motion.div
                        key="preview"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex flex-col justify-between h-full min-h-[350px] bg-[#f8fafc] text-slate-800 select-none"
                      >
                        <div className="flex items-center justify-between bg-slate-100 border-b border-slate-200/80 py-2.5 px-4">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block shadow-sm" />
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block shadow-sm" />
                            <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block shadow-sm" />
                          </div>
                          <span className="text-[9px] bg-white border border-slate-200 rounded px-6 py-0.5 text-slate-400 font-mono truncate w-[45%] text-center shadow-inner">
                            vidyasanchar.erp/dashboard
                          </span>
                          <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 text-[9px] font-mono font-bold uppercase shadow-sm">
                            PROTOTYPE
                          </span>
                        </div>

                        <div className="flex flex-grow bg-[#f8fafc] p-4 gap-4 text-left">
                          {/* Sidebar Mock */}
                          <div className="w-[22%] border-r border-slate-200/60 pr-3 space-y-2 hidden sm:block">
                            <div className="h-6 w-full bg-slate-200/60 rounded-md mb-4 flex items-center px-2">
                              <div className="w-2 h-2 rounded bg-indigo-500 mr-2" />
                              <span className="text-[9px] font-extrabold text-slate-700">VS ERP</span>
                            </div>
                            {[
                              { label: "Overview", active: true },
                              { label: "Students", active: false },
                              { label: "Attendance", active: false },
                              { label: "Fee Sheets", active: false }
                            ].map((item) => (
                              <div 
                                key={item.label} 
                                className={`px-2.5 py-1.5 rounded-md text-[9px] font-bold flex items-center gap-2 transition-all ${
                                  item.active 
                                    ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-indigo-600 border-l-2 border-indigo-500 font-extrabold' 
                                    : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'
                                }`}
                              >
                                <span>{item.label}</span>
                              </div>
                            ))}
                          </div>

                          {/* Main mock area */}
                          <div className="flex-1 flex flex-col gap-3">
                            <div className="grid grid-cols-3 gap-2.5">
                              <div className="p-2.5 rounded-xl bg-white border border-slate-100 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                                <span className="text-[8px] font-semibold text-slate-400 uppercase tracking-wider block">Attendance</span>
                                <span className="text-sm font-extrabold text-indigo-600 block mt-0.5">98.4%</span>
                              </div>
                              <div className="p-2.5 rounded-xl bg-white border border-slate-100 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                                <span className="text-[8px] font-semibold text-slate-400 uppercase tracking-wider block">Students</span>
                                <span className="text-sm font-extrabold text-slate-800 block mt-0.5">1,240</span>
                              </div>
                              <div className="p-2.5 rounded-xl bg-white border border-slate-100 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                                <span className="text-[8px] font-semibold text-slate-400 uppercase tracking-wider block">Fee Collected</span>
                                <span className="text-sm font-extrabold text-purple-600 block mt-0.5">92.5%</span>
                              </div>
                            </div>

                            <div className="grid grid-cols-12 gap-2.5 flex-grow">
                              <div className="col-span-12 lg:col-span-7 p-3 rounded-xl bg-white border border-slate-100 shadow-[0_2px_4px_rgba(0,0,0,0.02)] flex flex-col">
                                <span className="text-[9px] font-extrabold text-slate-700 mb-1.5">Student Registry</span>
                                <div className="flex-grow overflow-hidden">
                                  <table className="w-full text-left border-collapse">
                                    <thead>
                                      <tr className="border-b border-slate-100">
                                        <th className="pb-1 text-[7px] font-extrabold text-slate-400 uppercase">Student</th>
                                        <th className="pb-1 text-[7px] font-extrabold text-slate-400 uppercase">Grade</th>
                                        <th className="pb-1 text-[7px] font-extrabold text-slate-400 uppercase">Attendance</th>
                                        <th className="pb-1 text-[7px] font-extrabold text-slate-400 uppercase">Status</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {[
                                        { name: "Aarav Sharma", grade: "X-A", rate: "98%", status: "Present", color: "text-emerald-600 bg-emerald-50" },
                                        { name: "Neha Patel", grade: "XII-B", rate: "95%", status: "Present", color: "text-emerald-600 bg-emerald-50" },
                                        { name: "Rohan Das", grade: "XI-C", rate: "62%", status: "Absent", color: "text-rose-600 bg-rose-50" }
                                      ].map((row, index) => (
                                        <tr key={index} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50">
                                          <td className="py-1 text-[8px] font-bold text-slate-700">{row.name}</td>
                                          <td className="py-1 text-[8px] text-slate-500 font-mono">{row.grade}</td>
                                          <td className="py-1 text-[8px] text-slate-500 font-mono">{row.rate}</td>
                                          <td className="py-1">
                                            <span className={`px-1.5 py-0.5 rounded-full text-[6px] font-extrabold uppercase ${row.color}`}>
                                              {row.status}
                                            </span>
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              
                              <div className="col-span-12 lg:col-span-5 p-3 rounded-xl bg-white border border-slate-100 shadow-[0_2px_4px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                                <span className="text-[9px] font-extrabold text-slate-700 mb-1">Monthly Trends</span>
                                <div className="flex items-end justify-between h-[55px] pt-2 px-1 flex-grow">
                                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((bar, i) => (
                                    <div key={i} className="flex flex-col items-center gap-1 w-[13%]">
                                      <div className="w-full bg-slate-100 rounded-t-sm h-[40px] flex items-end">
                                        <div 
                                          className="w-full bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-sm shadow-[0_-2px_4px_rgba(99,102,241,0.2)]"
                                          style={{ height: `${[55, 70, 85, 95, 78, 92][i]}%` }}
                                        />
                                      </div>
                                      <span className="text-[6px] font-bold text-slate-400 font-mono">{bar}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* 2. Architecture */}
                    {flagshipTab === 'architecture' && (
                      <motion.div
                        key="architecture"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-6 flex flex-col justify-center items-center h-full min-h-[350px]"
                      >
                        <div className="max-w-xl w-full text-left space-y-6">
                          <div>
                            <h4 className="text-sm font-bold text-text-title mb-1 flex items-center gap-2 font-display">
                              <Layers size={14} className="text-primary-light" />
                              Multi-Tier Client-Server Architecture
                            </h4>
                            <p className="text-[11px] text-text-muted">
                              Decoupling the frontend user screens from the REST routing modules and PostgreSQL database pool.
                            </p>
                          </div>
                          
                          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 w-full relative pt-2">
                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col items-center w-32 text-center shadow-sm">
                              <Layers className="text-blue-500 mb-2" size={20} />
                              <span className="text-[10px] font-bold text-text-title">React Client</span>
                            </div>

                            <div className="flex flex-col items-center text-text-muted font-mono text-[8px]">
                              <Zap size={12} className="text-primary-light animate-pulse" />
                              <span>──────&gt;</span>
                              <span>HTTPS REST</span>
                            </div>

                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col items-center w-32 text-center shadow-sm">
                              <Server className="text-sky-400 mb-2" size={20} />
                              <span className="text-[10px] font-bold text-text-title">Express API</span>
                            </div>

                            <div className="flex flex-col items-center text-text-muted font-mono text-[8px]">
                              <Database size={12} className="text-emerald-500" />
                              <span>──────&gt;</span>
                              <span>Prisma ORM</span>
                            </div>

                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col items-center w-32 text-center shadow-sm">
                              <Database className="text-emerald-500 mb-2" size={20} />
                              <span className="text-[10px] font-bold text-text-title">Postgres DB</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* 3. Challenges */}
                    {flagshipTab === 'features' && (
                      <motion.div
                        key="features"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-6 text-left space-y-5"
                      >
                        <h4 className="text-xs font-mono font-bold text-primary-light uppercase tracking-widest border-b border-white/5 pb-2">
                          Engineering Resolutions
                        </h4>
                        <div className="space-y-4">
                          <div className="space-y-1">
                            <span className="text-xs font-bold text-text-title block">Concurrency & Query Speed Optimization</span>
                            <p className="text-xs text-text-muted leading-relaxed">
                              Optimized student records and financial ledgers by creating compound indexing structures on relational foreign keys.
                            </p>
                            <span className="text-[10px] font-mono font-bold text-emerald-400 block">✓ Normalized Relational Indexes</span>
                          </div>
                          
                          <div className="space-y-1 pt-2 border-t border-white/5">
                            <span className="text-xs font-bold text-text-title block">Granular Role-Based Access Control</span>
                            <p className="text-xs text-text-muted leading-relaxed">
                              Implemented robust authorization middleware checks verifying signed JWT claims across admin, teacher, and student routes.
                            </p>
                            <span className="text-[10px] font-mono font-bold text-emerald-400 block">✓ JWT Auth Middleware</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* 4. Roadmap */}
                    {flagshipTab === 'roadmap' && (
                      <motion.div
                        key="roadmap"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-6 space-y-4 text-left"
                      >
                        <h4 className="text-xs font-mono font-bold text-primary-light uppercase tracking-widest flex items-center gap-1.5 border-b border-white/5 pb-2">
                          <Cloud size={14} className="text-primary-light" />
                          Phased Architecture Progression
                        </h4>
                        <div className="relative border-l border-white/10 pl-6 space-y-4 text-left">
                          {[
                            { title: "Phase 1: DB Schema & Mock Data", desc: "Normalized fee ledger structures, attendance records, and simulated core tables in PostgreSQL." },
                            { title: "Phase 2: Express Rest API endpoints", desc: "Exposed authenticated JWT routes, fee transaction endpoints, and student lookups." },
                            { title: "Phase 3: React Dynamic Dashboards", desc: "Engineered responsive role-based dashboard screens for Admins, Teachers, and Students." }
                          ].map((item, index) => (
                            <div key={index} className="relative">
                              <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-400 border-2 border-bg-darkest shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                              <h5 className="text-xs font-bold text-text-title leading-tight">{item.title}</h5>
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
        </div>

        {/* ── All Other Production & Portfolio Projects ── */}
        <div className="space-y-6 max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Code2 size={18} className="text-secondary-light" />
              <h2 className="text-lg md:text-xl font-bold font-display text-text-title">
                Full-Stack Applications & Public Repositories
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-2">
              {['All', 'Full Stack'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveProjectFilter(cat as any)}
                  className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all border cursor-pointer ${
                    activeProjectFilter === cat
                      ? 'bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 border-primary/50 text-text-title font-extrabold shadow-sm'
                      : 'border-white/5 text-text-muted hover:text-text-title hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  layout
                  className="rounded-3xl glass-aurora border border-white/10 hover:border-primary/50 transition-all duration-300 p-6 flex flex-col justify-between text-left relative overflow-hidden group shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

                  {/* Header & Badges */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-mono font-extrabold text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/25">
                        {project.status}
                      </span>
                      <span className="text-[9px] font-mono font-bold text-text-muted bg-white/[0.04] border border-white/10 px-2 py-0.5 rounded">
                        {project.categories.join(', ')}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-display text-text-title group-hover:text-primary-light transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono font-bold text-secondary-light block mt-0.5">
                      {project.tagline}
                    </span>

                    <p className="text-xs text-text-muted mt-3 leading-relaxed">
                      {project.desc}
                    </p>

                    {/* Features list */}
                    <div className="space-y-1.5 my-4 border-t border-white/5 pt-3">
                      {project.features.map((feat, fidx) => (
                        <div key={fidx} className="flex items-center gap-2 text-xs text-text-muted leading-relaxed">
                          <CheckCircle2 size={12} className="text-primary-light shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack & CTAs */}
                  <div className="pt-4 border-t border-white/5 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-md bg-white/[0.02] border border-white/5 text-[9px] text-text-muted font-mono font-bold">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-1">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all duration-300"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={12} />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/10 text-text-title text-xs font-bold border border-white/10 hover:scale-105 active:scale-95 transition-all duration-300"
                      >
                        <FaGithub size={13} />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* ── GitHub & Professional Profiles CTA (Journey Standard) ── */}
        <div className="border-t border-white/5 pt-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="p-6 md:p-8 rounded-3xl glass-aurora border border-white/10 text-left shadow-xl relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0 shadow-inner">
                    <FaGithub size={28} className="text-text-title" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-text-title font-display">Nikhil Bhadauriya</span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20 font-bold">
                        Active Engineer
                      </span>
                    </div>
                    <span className="text-xs text-text-muted font-mono block mt-0.5">github.com/Nikhil-beep25</span>
                    <span className="text-xs text-secondary-light font-mono block mt-1">
                      Check out my open-source codebases, Git commit history, and technical architecture.
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://github.com/Nikhil-beep25"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    <FaGithub size={15} />
                    <span>View GitHub</span>
                    <ArrowUpRight size={14} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nikhil-bhadauriya"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-primary/40 text-text-title text-xs font-bold transition-all duration-300 hover:scale-105"
                  >
                    <FaLinkedin size={15} className="text-[#0A66C2]" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
