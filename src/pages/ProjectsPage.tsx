import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, CheckSquare, BarChart3, 
  ExternalLink, Layers, Server, Database, Zap, Cloud, Search, Globe, Award, CheckCircle2
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import profileAsset from '../assets/profile.jpg';

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
  const [searchQuery, setSearchQuery] = useState('');
  
  // Flagship project tabs
  const [flagshipTab, setFlagshipTab] = useState<'preview' | 'architecture' | 'features' | 'roadmap'>('preview');

  // Filter projects by category and search query
  const filteredProjects = projectsList.filter((project) => {
    if (project.isFlagship) return false; // Flagship is rendered separately on top
    
    const matchesCategory = activeProjectFilter === 'All' || project.categories.includes(activeProjectFilter);
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tech.some(tVal => tVal.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
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
      className="py-24 relative overflow-hidden bg-bg-darkest min-h-screen text-text-main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1450px] mx-auto px-6 relative z-10 space-y-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-bold text-primary-light uppercase tracking-wider">
            Featured Project
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-text-title tracking-tight mt-4">
            Engineering Projects Case Studies
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed">
            Projects I have built from scratch — each with a real codebase, verifiable tech stack, and a GitHub repository.
          </p>
        </div>

        {/* ======================================================== */}
        {/* FLAGSHIP PROJECT SPOTLIGHT ROW                           */}
        {/* ======================================================== */}
        <div className="space-y-10 max-w-6xl mx-auto">
          <div className="text-left border-l-4 border-primary pl-4">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary">Flagship Project Spotlight</span>
            <h3 className="text-2xl md:text-3xl font-bold font-display text-text-title mt-1">{flagship.title}</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Details */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {flagship.tech.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-white/[0.02] border border-white/5 text-text-muted text-[10px] font-bold font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {flagship.desc}
                </p>
              </div>

              {/* Flagship Features list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {flagshipFeatures.map((feat, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/[0.01] border border-white/5 flex gap-3 shadow-sm hover:border-primary/20 transition-all">
                    <div className="p-2 h-fit rounded-lg bg-bg-dark border border-white/5 shrink-0">
                      {feat.icon}
                    </div>
                    <div>
                      <h5 className="text-[11px] font-bold text-text-title mb-1 font-display leading-tight">{feat.title}</h5>
                      <p className="text-[9px] text-text-muted leading-normal">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={flagship.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold shadow-md shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Explore Live Demo
                  <ExternalLink size={12} />
                </a>
                <a
                  href={flagship.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.02] hover:bg-white/5 text-text-title text-xs font-bold border border-white/5 hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <FaGithub size={12} />
                  Code Repository
                </a>
              </div>
            </div>

            {/* Right Interactive panel */}
            <div className="lg:col-span-7">
              {/* Tab Selector */}
              <div className="flex flex-wrap items-center gap-1.5 mb-5 border-b border-white/5 pb-2">
                {[
                  { id: 'preview', label: 'Dashboard UI', icon: <Layers size={12} /> },
                  { id: 'architecture', label: 'System Flow', icon: <Database size={12} /> },
                  { id: 'features', label: 'Challenges Solved', icon: <CheckSquare size={12} /> },
                  { id: 'roadmap', label: 'Development Roadmap', icon: <Cloud size={12} /> },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setFlagshipTab(tab.id as any)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold rounded-lg transition-all border cursor-pointer ${
                      flagshipTab === tab.id 
                        ? 'bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30 text-text-title shadow-sm' 
                        : 'text-text-muted border-transparent hover:text-text-title'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Content box */}
              <div className="glass-aurora rounded-2xl overflow-hidden border border-white/5 min-h-[350px] shadow-2xl shadow-indigo-950/20">
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
                        <div className="w-[20%] border-r border-slate-200/60 pr-3 space-y-2 hidden sm:block">
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
                              className={`px-3 py-1.5 rounded-md text-[9px] font-bold flex items-center gap-2 transition-all ${
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
                        <div className="flex-1 flex flex-col gap-4">
                          <div className="grid grid-cols-3 gap-3">
                            <div className="p-2.5 rounded-xl bg-white border border-slate-100 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                              <span className="text-[8px] font-semibold text-slate-400 uppercase tracking-wider block">Attendance</span>
                              <span className="text-sm font-extrabold text-indigo-600 block mt-0.5">98.4%</span>
                            </div>
                            <div className="p-2.5 rounded-xl bg-white border border-slate-100 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                              <span className="text-[8px] font-semibold text-slate-400 uppercase tracking-wider block">Total Students</span>
                              <span className="text-sm font-extrabold text-slate-800 block mt-0.5">1,240</span>
                            </div>
                            <div className="p-2.5 rounded-xl bg-white border border-slate-100 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                              <span className="text-[8px] font-semibold text-slate-400 uppercase tracking-wider block">Fee Collected</span>
                              <span className="text-sm font-extrabold text-purple-600 block mt-0.5">92.5%</span>
                            </div>
                          </div>

                          <div className="grid grid-cols-12 gap-3 flex-grow">
                            {/* Left: Student registry table */}
                            <div className="col-span-12 lg:col-span-7 p-3 rounded-xl bg-white border border-slate-100 shadow-[0_2px_4px_rgba(0,0,0,0.02)] flex flex-col">
                              <span className="text-[9px] font-extrabold text-slate-700 mb-2">Student Registry</span>
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
                            
                            {/* Right: Monthly Trends analytics widget */}
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
                          <h5 className="text-sm font-bold text-text-title mb-1 flex items-center gap-2 font-display">
                            <Layers size={14} className="text-primary-light" />
                            Multi-Tier Client-Server Architecture
                          </h5>
                          <p className="text-[11px] text-text-muted">
                            Decoupling the frontend user screens from the REST routing modules and PostgreSQL database pool.
                          </p>
                        </div>
                        
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 w-full relative pt-2">
                          <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 flex flex-col items-center w-32 text-center shadow-sm">
                            <Layers className="text-blue-500 mb-2" size={20} />
                            <span className="text-[10px] font-bold text-text-title">React Client</span>
                          </div>

                          <div className="flex flex-col items-center text-text-muted font-mono text-[8px]">
                            <Zap size={12} className="text-primary-light animate-pulse" />
                            <span>──────&gt;</span>
                            <span>HTTPS REST</span>
                          </div>

                          <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 flex flex-col items-center w-32 text-center shadow-sm">
                            <Server className="text-sky-400 mb-2" size={20} />
                            <span className="text-[10px] font-bold text-text-title">Express API</span>
                          </div>

                          <div className="flex flex-col items-center text-text-muted font-mono text-[8px]">
                            <Database size={12} className="text-emerald-500" />
                            <span>──────&gt;</span>
                            <span>Prisma ORM</span>
                          </div>

                          <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 flex flex-col items-center w-32 text-center shadow-sm">
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
                      className="p-6 text-left space-y-6"
                    >
                      <h5 className="text-sm font-bold text-text-title uppercase tracking-widest border-b border-white/5 pb-2">
                        Engineering Resolutions
                      </h5>
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <span className="text-[11px] font-bold text-primary-light block">Concurrency & Read Speeds</span>
                          <p className="text-[11px] text-text-muted leading-relaxed">
                            Optimized student lookups by creating index structures on relational columns.
                          </p>
                          <span className="text-[10px] font-mono font-bold text-emerald-400 block">Relational Indexes</span>
                        </div>
                        
                        <div className="space-y-1 pt-2 border-t border-white/5">
                          <span className="text-[11px] font-bold text-primary-light block">Granular Role Enforcements</span>
                          <p className="text-[11px] text-text-muted leading-relaxed">
                            Implemented robust auth middleware checks via JWT claims on every endpoint.
                          </p>
                          <span className="text-[10px] font-mono font-bold text-emerald-400 block">JWT Middleware</span>
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
                      className="p-6 space-y-5 text-left"
                    >
                      <h5 className="text-sm font-bold text-text-title mb-1.5 flex items-center gap-2">
                        <Cloud size={14} className="text-primary-light" />
                        Next Project Phases
                      </h5>
                      <div className="relative border-l border-white/5 pl-6 space-y-4 text-left">
                        {[
                          { title: "Phase 1: DB Schema & Mock Data", desc: "Normalized fee ledger structures, attendance records, and simulated core tables." },
                          { title: "Phase 2: Express Rest API endpoints", desc: "Exposed JWT routes, transaction endpoints, and student lookups." },
                          { title: "Phase 3: React Dashboards", desc: "Built role-based dashboard screens for Admins, Teachers, and Students." }
                        ].map((item, index) => (
                          <div key={index} className="relative">
                            <span className="absolute -left-[30px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 border border-bg-card" />
                            <h6 className="text-xs font-bold text-text-title leading-tight">{item.title}</h6>
                            <p className="text-[9px] text-text-muted mt-0.5 leading-normal">{item.desc}</p>
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

        {/* ======================================================== */}
        {/* PROJECT GRID WITH SEARCH AND FILTERS                     */}
        {/* ======================================================== */}
        <div className="border-t border-white/5 pt-16 space-y-12">
          
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'All', label: 'All' },
                { id: 'Full Stack', label: 'Full Stack' }
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveProjectFilter(filter.id as any)}
                  className={`px-4.5 py-2 text-xs font-bold rounded-full transition-all duration-300 border cursor-pointer ${
                    activeProjectFilter === filter.id 
                      ? 'bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30 text-text-title shadow-sm font-extrabold'
                      : 'border-white/5 text-text-muted hover:text-text-title hover:bg-white/5'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-80">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-text-muted">
                <Search size={14} />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by technology, name, or keywords..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/5 focus:border-primary/50 outline-none text-xs text-text-title transition-all duration-300 shadow-inner"
              />
            </div>

          </div>

          {/* Grid display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  className="p-6 rounded-[24px] glass-aurora border border-white/5 flex flex-col justify-between shadow-md hover:shadow-[0_20px_40px_rgba(0,0,0,0.45)] hover:shadow-primary/5 hover:border-primary/40 text-left h-full group transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Visual mockup block */}
                  <div className="w-full rounded-xl border border-slate-200/10 bg-slate-50 shadow-lg shadow-black/20 overflow-hidden relative mb-4 select-none">
                    <div className="bg-slate-100 border-b border-slate-200 py-2 px-3 flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block" />
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 inline-block" />
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                      </div>
                      <span className="text-[8px] font-mono text-slate-400 truncate w-[60%] text-center">
                        {project.title.toLowerCase().replace(/\s+/g, '-')}.nikhil.dev
                      </span>
                      <div className="w-3" />
                    </div>
                    
                    {project.title === "Personal Portfolio" ? (
                      <div className="w-full h-[155px] flex flex-col relative overflow-hidden bg-slate-50 text-slate-800" style={{ background: 'linear-gradient(145deg,#eef2ff 0%,#f8faff 40%,#f3f0ff 100%)', fontFamily: 'system-ui,sans-serif' }}>
                        {/* Ambient glow orbs */}
                        <div className="absolute pointer-events-none" style={{ top: -30, left: '5%', width: 120, height: 120, background: 'radial-gradient(circle,rgba(99,102,241,0.13) 0%,transparent 70%)', borderRadius: '50%' }} />
                        <div className="absolute pointer-events-none" style={{ bottom: -30, right: '5%', width: 100, height: 100, background: 'radial-gradient(circle,rgba(139,92,246,0.11) 0%,transparent 70%)', borderRadius: '50%' }} />

                        {/* ── Glass Navbar ── */}
                        <div
                          className="flex items-center justify-between px-3 py-1.5 shrink-0 relative z-10"
                          style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(99,102,241,0.08)', boxShadow: '0 1px 16px rgba(99,102,241,0.05)' }}
                        >
                          {/* Logo */}
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', boxShadow: '0 2px 6px rgba(99,102,241,0.4)' }}>
                              <span style={{ fontSize: 5, fontWeight: 900, color: '#fff' }}>N</span>
                            </div>
                            <span style={{ fontSize: 7.5, fontWeight: 900, color: '#1e1b4b', letterSpacing: '-0.02em' }}>Nikhil<span style={{ color: '#6366f1' }}>.</span><span style={{ color: '#8b5cf6' }}>dev</span></span>
                          </div>
                          {/* Nav links */}
                          <div className="flex items-center gap-2" style={{ fontSize: 6, fontWeight: 700 }}>
                            <span className="px-1 py-0.5 rounded-md" style={{ background: 'rgba(99,102,241,0.08)', color: '#6366f1' }}>Home</span>
                            <span style={{ color: '#64748b' }}>About</span>
                            <span style={{ color: '#64748b' }}>Projects</span>
                          </div>
                          {/* Hire CTA */}
                          <div className="px-2 py-0.5 rounded-full" style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', fontSize: 5.5, fontWeight: 800, color: '#fff', boxShadow: '0 2px 8px rgba(99,102,241,0.40)' }}>Hire</div>
                        </div>

                        {/* ── Hero body ── */}
                        <div className="flex-grow flex items-center justify-between gap-3 px-4 relative z-10 overflow-hidden">
                          {/* Left text column */}
                          <div className="flex flex-col gap-1 min-w-0" style={{ maxWidth: 130 }}>
                            {/* Available badge */}
                            <div className="inline-flex items-center gap-1 w-fit rounded-full px-2 py-0.5" style={{ background: '#f0fdf4', border: '1px solid #86efac', boxShadow: '0 1px 4px rgba(34,197,94,0.12)' }}>
                              <span className="w-1 h-1 rounded-full" style={{ background: '#22c55e', boxShadow: '0 0 4px #22c55e' }} />
                              <span style={{ fontSize: 5.5, fontWeight: 800, color: '#15803d' }}>Active</span>
                            </div>

                            {/* Hero name */}
                            <div style={{ fontSize: 13, fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.03em', background: 'linear-gradient(130deg,#4338ca 0%,#6366f1 35%,#38bdf8 70%,#8b5cf6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                              Nikhil Bhadauriya
                            </div>

                            {/* Subtitle */}
                            <div style={{ fontSize: 6.5, fontWeight: 800, color: '#6366f1', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Full Stack Developer</div>

                            {/* CTA row */}
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <div className="px-2 py-1 rounded-lg" style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', fontSize: 5.5, fontWeight: 800, color: '#fff', boxShadow: '0 2px 8px rgba(99,102,241,0.45)', whiteSpace: 'nowrap' }}>
                                View Work
                              </div>
                            </div>
                          </div>

                          {/* Right: avatar orbit */}
                          <div className="relative flex items-center justify-center shrink-0" style={{ width: 100, height: 100 }}>
                            {/* Outer dashed orbit */}
                            <div className="absolute" style={{ width: 94, height: 94, border: '1.5px dashed rgba(99,102,241,0.18)', borderRadius: '50%' }} />
                            {/* Mid ring */}
                            <div className="absolute" style={{ width: 72, height: 72, border: '1px solid rgba(139,92,246,0.10)', borderRadius: '50%' }} />

                            {/* Profile circle (photo style) */}
                            <div 
                              className="relative z-10 rounded-full overflow-hidden flex items-center justify-center border-2 border-white shadow-[0_0_12px_rgba(99,102,241,0.3),_0_2px_8px_rgba(139,92,246,0.15)] hover:scale-[1.05] hover:shadow-[0_0_18px_rgba(99,102,241,0.5),_0_2px_12px_rgba(139,92,246,0.25)] hover:border-white transition-all duration-300 select-none shrink-0" 
                              style={{ width: 44, height: 44 }}
                            >
                              <img 
                                src={profileAsset} 
                                alt="Nikhil Bhadauriya" 
                                className="w-full h-full object-cover"
                              />
                            </div>

                            {/* Online dot */}
                            <div className="absolute" style={{ bottom: 26, right: 22, width: 7, height: 7, background: '#22c55e', border: '1.5px solid #fff', borderRadius: '50%', boxShadow: '0 0 4px #22c55e' }} />

                            {/* Tech badges on rotating orbit */}
                            <div className="absolute inset-0 animate-orbit pointer-events-none">
                              {[
                                { icon: '⚛', text: 'React', pos: { top: 0, left: '50%', transform: 'translateX(-50%)' }, bg: '#eff6ff', bc: '#bfdbfe', c: '#2563eb' },
                                { icon: '', text: 'TS', pos: { right: -2, top: '50%', transform: 'translateY(-50%)' }, bg: '#eef2ff', bc: '#c7d2fe', c: '#4f46e5' },
                                { icon: '', text: 'Node', pos: { bottom: 0, left: '50%', transform: 'translateX(-50%)' }, bg: '#f0fdf4', bc: '#86efac', c: '#16a34a' },
                                { icon: '', text: 'PG', pos: { left: -2, top: '50%', transform: 'translateY(-50%)' }, bg: '#f0f9ff', bc: '#bae6fd', c: '#0369a1' },
                              ].map(b => (
                                <div
                                  key={b.text}
                                  className="absolute pointer-events-auto"
                                  style={b.pos}
                                >
                                  <div
                                    className="animate-counter-orbit flex items-center gap-0.5 rounded-md"
                                    style={{ background: b.bg, border: `1px solid ${b.bc}`, padding: '2px 5px', fontSize: 6, fontWeight: 800, color: b.c, boxShadow: '0 2px 6px rgba(0,0,0,0.07)', whiteSpace: 'nowrap' }}
                                  >
                                    {b.icon && <span style={{ fontSize: 6 }}>{b.icon}</span>}{b.text}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* ── Bottom tech strip ── */}
                        <div className="flex items-center gap-1.5 px-4 py-1 shrink-0 relative z-10" style={{ background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(99,102,241,0.07)' }}>
                          <span style={{ fontSize: 5.5, fontWeight: 700, color: '#94a3b8' }}>Stack:</span>
                          {[
                            { t: 'React', bg: '#eff6ff', bc: '#bfdbfe', c: '#2563eb' },
                            { t: 'TypeScript', bg: '#eef2ff', bc: '#c7d2fe', c: '#4f46e5' },
                            { t: 'Node.js', bg: '#f0fdf4', bc: '#86efac', c: '#16a34a' },
                            { t: 'Postgres', bg: '#f0f9ff', bc: '#bae6fd', c: '#0369a1' },
                          ].map(sk => (
                            <span key={sk.t} style={{ fontSize: 5.5, fontWeight: 800, color: sk.c, background: sk.bg, border: `1px solid ${sk.bc}`, borderRadius: 3, padding: '0.5px 4px', whiteSpace: 'nowrap' }}>{sk.t}</span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      /* Fallback / original dark-ish preview in case another project is added */
                      <div className="p-6 min-h-[90px] bg-[#070b1e]/90 flex flex-col justify-center items-center relative overflow-hidden">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
                        <span className="text-[10px] font-bold text-text-title font-display relative z-10">{project.title}</span>
                        <span className="text-[8px] text-text-muted block mt-0.5 relative z-10">{project.tagline}</span>
                      </div>
                    )}
                  </div>

                  {/* Text Details */}
                  <div className="space-y-4 flex-grow">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded bg-white/[0.01] border border-white/5 text-text-muted text-[8px] font-bold font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div>
                      <h4 className="text-base font-bold text-text-title font-display group-hover:text-primary-light transition-colors duration-200">
                        {project.title}
                      </h4>
                      <p className="text-[11px] text-text-muted mt-2 leading-relaxed">
                        {project.desc}
                      </p>
                    </div>

                    <div className="space-y-1.5 border-t border-white/5 pt-3">
                      {project.features.slice(0, 2).map((feat, fidx) => (
                        <div key={fidx} className="flex items-center gap-1.5 text-[9px] text-text-muted font-bold font-mono">
                          <CheckCircle2 size={10} className="text-emerald-400" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-5 text-[9px] font-bold font-mono">
                    <div className="flex gap-2">
                      <a href={project.demo} target="_blank" rel="noreferrer" className="text-primary-light hover:text-primary transition-colors flex items-center gap-1">
                        Explore Live Demo
                        <ExternalLink size={10} />
                      </a>
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-text-muted hover:text-text-title transition-colors flex items-center gap-1">
                        Repository
                        <FaGithub size={10} />
                      </a>
                    </div>
                    <span className="text-text-muted">{project.status}</span>
                  </div>

                </motion.div>
              ))}
              
              {filteredProjects.length === 0 && (
                <div className="col-span-full py-16 text-center text-text-muted space-y-2">
                  <Globe className="mx-auto text-text-muted/40" size={36} />
                  <p className="text-sm font-bold text-text-title">No Projects Found</p>
                  <p className="text-xs">Try searching with another term or keyword.</p>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
