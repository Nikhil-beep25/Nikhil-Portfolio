import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, CheckSquare, IndianRupee, BarChart3, ShieldAlert, 
  ExternalLink, BookOpen, Layers, Server, Database, ChevronRight, Zap
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function FeaturedProject() {
  const [activeTab, setActiveTab] = useState<'preview' | 'architecture' | 'journey'>('preview');

  const metrics = [
    { label: "Active Institutions", value: "10+", desc: "Schools using the ERP" },
    { label: "Total Active Users", value: "5,000+", desc: "Students, teachers, parents" },
    { label: "Page Load Speed", value: "<150ms", desc: "Highly optimized queries" },
    { label: "Database Uptime", value: "99.9%", desc: "Hosted on AWS RDS" }
  ];

  const features = [
    { 
      icon: <Users size={18} className="text-purple-400" />, 
      title: "Role-Based Dashboards", 
      desc: "Distinct dashboards customized for School Admins, Teachers, Students, and Parents." 
    },
    { 
      icon: <CheckSquare size={18} className="text-emerald-400" />, 
      title: "Attendance Tracking", 
      desc: "RFID/Manual attendance system with real-time push notifications to parents' portals." 
    },
    { 
      icon: <IndianRupee size={18} className="text-sky-400" />, 
      title: "Fee Management", 
      desc: "Online fee payment gateways integration with automated PDF receipt generation." 
    },
    { 
      icon: <BarChart3 size={18} className="text-yellow-400" />, 
      title: "Reports & Analytics", 
      desc: "Rich charts showing grade curves, school-wide attendance, and financial sheets." 
    }
  ];

  const challenges = [
    {
      problem: "Handling high concurrency during morning attendance submissions and grade uploads.",
      solution: "Implemented Redis caching layers for quick reads, and optimized database indexing in PostgreSQL. Configured Node/Express backend to cluster processes using PM2."
    },
    {
      problem: "Secure, role-based resource access without leaking sensitive administrative records.",
      solution: "Created strict middleware validation checks utilizing JWT claims, and restricted database operations at the Prisma schema level, enforcing fine-grained RBAC (Role-Based Access Control)."
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-bg-dark border-t border-white/5">
      <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h3 
            className="text-primary-light font-display text-sm font-semibold tracking-widest uppercase mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Featured Product
          </motion.h3>
          <motion.h2 
            className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            VidyaSanchar – School ERP
          </motion.h2>
          <motion.p
            className="text-zinc-400 mt-4 max-w-2xl mx-auto text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A world-class, production-ready school management enterprise application designed to connect administrators, teachers, students, and parents in real time.
          </motion.p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Product Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex gap-2 mb-4">
                {["React", "Node.js", "PostgreSQL", "Docker"].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 text-xs font-semibold border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
              <h4 className="text-2xl font-bold text-white font-display mb-4">
                Complete Institutional Automation
              </h4>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                VidyaSanchar replaces disjointed paperwork, scattered spreadsheets, and outdated portals with a unified cloud-native environment. Built with clean, type-safe database schemas and real-time state synchronization, it handles all administrative, academic, and financial needs.
              </p>
            </div>

            {/* Features Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex gap-3">
                  <div className="p-2 h-fit rounded-lg bg-white/5">
                    {feat.icon}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white mb-1 font-display">{feat.title}</h5>
                    <p className="text-xs text-zinc-400 leading-normal">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-primary/5 border border-primary/10 flex flex-col">
                  <span className="text-2xl font-extrabold text-primary-light font-display">{metric.value}</span>
                  <span className="text-xs font-bold text-white mb-0.5">{metric.label}</span>
                  <span className="text-[10px] text-zinc-400">{metric.desc}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-white text-xs font-bold shadow-md transition-colors"
              >
                Request Live Demo
                <ExternalLink size={14} />
              </a>
              <a
                href="https://github.com/nikhilbhadauriya"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-bold border border-white/10 transition-colors"
              >
                <FaGithub size={14} />
                Repository
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Panel */}
          <div className="lg:col-span-7">
            {/* Tabs */}
            <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-2.5">
              {[
                { id: 'preview', label: 'Dashboard Preview', icon: <Layers size={14} /> },
                { id: 'architecture', label: 'Architecture', icon: <Database size={14} /> },
                { id: 'journey', label: 'Challenges Solved', icon: <ShieldAlert size={14} /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                    activeTab === tab.id 
                      ? 'bg-primary/20 border border-primary/30 text-white shadow-sm' 
                      : 'text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content panel */}
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10 min-h-[380px] bg-bg-card/30">
              <AnimatePresence mode="wait">
                {activeTab === 'preview' && (
                  <motion.div
                    key="preview"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="p-5 flex flex-col h-full select-none"
                  >
                    {/* Mock Dashboard Layout */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                        <span className="text-[10px] font-bold text-zinc-500 font-mono ml-2 uppercase">VidyaSanchar Hub v1.0</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px] font-bold">Admin Portal</span>
                    </div>

                    <div className="grid grid-cols-12 gap-4">
                      {/* Sidebar Mock */}
                      <div className="col-span-3 border-r border-white/5 pr-3 space-y-2 hidden sm:block">
                        {["Overview", "Students", "Attendance", "Fee Sheets", "Reports"].map((item, idx) => (
                          <div 
                            key={item} 
                            className={`px-3 py-1.5 rounded-md text-[11px] font-semibold flex items-center justify-between ${
                              idx === 0 ? 'bg-primary/10 text-primary-light border border-primary/20' : 'text-zinc-500 hover:text-zinc-300'
                            }`}
                          >
                            {item}
                            {idx === 0 && <ChevronRight size={10} />}
                          </div>
                        ))}
                      </div>

                      {/* Main Dashboard Panel Mock */}
                      <div className="col-span-12 sm:col-span-9 flex flex-col gap-4">
                        {/* Mini statistics cards */}
                        <div className="grid grid-cols-3 gap-3">
                          <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                            <span className="text-[9px] font-semibold text-zinc-500 uppercase tracking-wider block">Attendance</span>
                            <span className="text-sm font-bold text-emerald-400 mt-1 block">96.8%</span>
                          </div>
                          <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                            <span className="text-[9px] font-semibold text-zinc-500 uppercase tracking-wider block">New Admits</span>
                            <span className="text-sm font-bold text-white mt-1 block">+124</span>
                          </div>
                          <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                            <span className="text-[9px] font-semibold text-zinc-500 uppercase tracking-wider block">Defaulters</span>
                            <span className="text-sm font-bold text-red-400 mt-1 block">14</span>
                          </div>
                        </div>

                        {/* Graph mock */}
                        <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-white">Monthly Fee Collections</span>
                            <span className="text-[10px] text-zinc-500">Target: 95%</span>
                          </div>
                          {/* CSS Chart bars */}
                          <div className="flex items-end justify-between h-28 pt-4 px-2">
                            {[
                              { m: 'Jan', h: '45%' }, { m: 'Feb', h: '60%' }, 
                              { m: 'Mar', h: '85%' }, { m: 'Apr', h: '98%' }, 
                              { m: 'May', h: '75%' }, { m: 'Jun', h: '92%' }
                            ].map((bar, i) => (
                              <div key={i} className="flex flex-col items-center gap-1.5 w-1/8">
                                <div className="w-full bg-white/5 rounded-t-sm h-24 flex items-end">
                                  <div 
                                    className="w-full bg-gradient-to-t from-primary to-purple-400 rounded-t-sm transition-all duration-1000"
                                    style={{ height: bar.h }}
                                  />
                                </div>
                                <span className="text-[8px] font-bold text-zinc-500 font-mono">{bar.m}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'architecture' && (
                  <motion.div
                    key="architecture"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="p-6 flex flex-col justify-center items-center h-full min-h-[350px]"
                  >
                    <div className="max-w-xl w-full">
                      <h5 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                        <Layers size={16} className="text-primary-light" />
                        System Architecture & Flow
                      </h5>
                      <p className="text-xs text-zinc-400 mb-6">
                        An optimized client-server deployment separating client-facing portals from back-end REST controllers.
                      </p>
                      
                      {/* Flow Diagram */}
                      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 w-full relative">
                        {/* Client Node */}
                        <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/30 flex flex-col items-center w-36 text-center shadow-md">
                          <Layers className="text-blue-400 mb-2" size={20} />
                          <span className="text-xs font-bold text-white">Client Portal</span>
                          <span className="text-[9px] text-zinc-400 mt-1">React / TS / Vite</span>
                        </div>

                        {/* Arrow 1 */}
                        <div className="flex flex-col items-center text-zinc-600 font-mono text-[9px]">
                          <Zap size={14} className="text-primary-light animate-pulse" />
                          <span className="hidden md:inline">──────&gt;</span>
                          <span className="md:hidden">│</span>
                          <span className="md:hidden">▼</span>
                          <span>HTTPS / REST</span>
                        </div>

                        {/* API Server Node */}
                        <div className="p-4 rounded-xl bg-purple-500/5 border border-primary/30 flex flex-col items-center w-36 text-center shadow-md">
                          <Server className="text-purple-400 mb-2" size={20} />
                          <span className="text-xs font-bold text-white">Express.js API</span>
                          <span className="text-[9px] text-zinc-400 mt-1">Node.js Clustered</span>
                        </div>

                        {/* Arrow 2 */}
                        <div className="flex flex-col items-center text-zinc-600 font-mono text-[9px]">
                          <Database size={14} className="text-emerald-400" />
                          <span className="hidden md:inline">──────&gt;</span>
                          <span className="md:hidden">│</span>
                          <span className="md:hidden">▼</span>
                          <span>Prisma ORM</span>
                        </div>

                        {/* DB Node */}
                        <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/30 flex flex-col items-center w-36 text-center shadow-md">
                          <Database className="text-emerald-400 mb-2" size={20} />
                          <span className="text-xs font-bold text-white">PostgreSQL DB</span>
                          <span className="text-[9px] text-zinc-400 mt-1">Indexed / AWS RDS</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'journey' && (
                  <motion.div
                    key="journey"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="p-6 space-y-6"
                  >
                    <h5 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                      <BookOpen size={16} className="text-primary-light" />
                      Engineering Challenges & Architectural Resolutions
                    </h5>

                    <div className="space-y-4">
                      {challenges.map((c, i) => (
                        <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                          <div className="flex items-start gap-2">
                            <span className="px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 text-[9px] font-bold mt-0.5">CHALLENGE</span>
                            <p className="text-xs font-semibold text-zinc-300">{c.problem}</p>
                          </div>
                          <div className="flex items-start gap-2 pl-1">
                            <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[9px] font-bold mt-0.5">SOLUTION</span>
                            <p className="text-xs text-zinc-400 leading-normal">{c.solution}</p>
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
    </section>
  );
}
