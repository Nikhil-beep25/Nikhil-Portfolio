import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { 
  Briefcase, GraduationCap, Rocket, Calendar, MapPin, 
  CheckCircle2, Building2, Sparkles
} from 'lucide-react';

interface TimelineStep {
  id: string;
  category: 'experience' | 'education' | 'project' | 'milestone';
  step: string;
  title: string;
  role: string;
  location: string;
  desc: string;
  bullets?: string[];
  tech: string[];
  badge?: string;
  highlight?: boolean;
  typeLabel: string;
}

export default function JourneyPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'experience' | 'project' | 'education'>('all');

  const journeySteps: TimelineStep[] = [
    {
      id: "ducat",
      category: "experience",
      step: "Mar 2026 – Aug 2026",
      title: "DUCAT India",
      role: "Apprenticeship — MERN Full Stack Development",
      location: "Remote",
      typeLabel: "Work Experience",
      badge: "⚡ MERN FULL STACK APPRENTICESHIP",
      highlight: true,
      desc: "Completed an intensive engineering apprenticeship focused on modern MERN architecture (MongoDB, Express.js, React.js, Node.js). Built scalable full-stack features, reusable UI libraries, and production authentication pipelines.",
      bullets: [
        "Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js, engineering reusable component libraries, REST APIs, and responsive UI layouts.",
        "Implemented secure JWT authentication flows, form validations, and centralized state management using React hooks and Context API for maintainable architecture.",
        "Conducted end-to-end debugging workflows, performance profiling, and Git-based version control in an agile team environment."
      ],
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Context API", "Git", "REST APIs"]
    },
    {
      id: "so-infotech",
      category: "experience",
      step: "Dec 2025 – Jul 2026",
      title: "S O Infotech (P) Ltd.",
      role: "Full Stack Developer Trainee (Python & GenAI)",
      location: "Noida, Uttar Pradesh, India",
      typeLabel: "Work Experience",
      badge: "🏢 INDUSTRY EXPERIENCE",
      highlight: true,
      desc: "Worked as a Full Stack Developer Trainee in Noida, engineering full-stack web applications and integrating Generative AI backend capabilities into commercial platforms.",
      bullets: [
        "Engineered an E-commerce Website using Python Full Stack architecture integrated with Generative AI capabilities, bridging modern client interfaces with AI-driven services.",
        "Collaborated with senior developers to design RESTful APIs, integrate secure third-party payment gateways, and optimize relational database queries for sub-second page performance.",
        "Participated in cross-functional sprint planning, code reviews, schema migrations, and version-controlled deployments."
      ],
      tech: ["Python", "Generative AI", "RESTful APIs", "Payment Gateways", "PostgreSQL", "SQL Optimization", "Git"]
    },
    {
      id: "carverse",
      category: "project",
      step: "Mid 2026",
      title: "CarVerse — Car Rental Ecosystem",
      role: "Lead Full-Stack Architect & Developer",
      location: "Production Deployment (Vercel & Render)",
      typeLabel: "Production Project",
      badge: "🚗 LIVE PRODUCTION",
      desc: "Architected, developed, and deployed CarVerse, an end-to-end digital car rental management platform featuring live customer booking workflows and fleet analytics.",
      bullets: [
        "Built dynamic vehicle fleet catalog with real-time availability filters, vehicle category search, and comprehensive specification views.",
        "Engineered secure booking flow integrated with Razorpay payment processing, customer profile management, and verified booking history.",
        "Developed an administrative control dashboard with real-time fleet analytics, booking status updates, and user permissions."
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Tailwind CSS", "Razorpay", "JWT"]
    },
    {
      id: "vidyasanchar",
      category: "project",
      step: "Current Focus",
      title: "VidyaSanchar ERP Platform",
      role: "Full-Stack Developer",
      location: "In Active Development",
      typeLabel: "Flagship Project",
      badge: "🔥 ACTIVE PROJECT",
      highlight: true,
      desc: "Developing an institutional portal simulating educational automation with role-based access control, attendance logging, student dashboards, and a fee ledger.",
      bullets: [
        "Designed normalized relational schemas in PostgreSQL using Prisma ORM for attendance logs, student profiles, and fee transactions.",
        "Implemented role-based access control (RBAC) separating administrative powers, teacher grade entries, and student viewing portals.",
        "Integrated dynamic analytics reporting for grade curves, fee collections, and institutional rosters."
      ],
      tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma ORM", "Tailwind CSS"]
    },
    {
      id: "dbrau",
      category: "education",
      step: "2024 – 2027",
      title: "Dr. Bhimrao Ambedkar University (DBRAU)",
      role: "Bachelor of Computer Applications (BCA) — Computer Science",
      location: "Agra, Uttar Pradesh, India",
      typeLabel: "Education",
      badge: "🎓 HIGHER EDUCATION",
      desc: "Pursuing Bachelor of Computer Applications (BCA). Developing rigorous theoretical and practical foundations in core computer science disciplines and software engineering.",
      bullets: [
        "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems (DBMS), Operating Systems, Software Engineering.",
        "Academic focus on algorithmic problem solving, relational schema design, and modern full-stack web applications."
      ],
      tech: ["C / C++", "Python", "Data Structures", "Algorithms", "DBMS", "OOP", "Computer Networks"]
    },
    {
      id: "future",
      category: "milestone",
      step: "Next Phase",
      title: "Future Goals & Cloud Architecture",
      role: "Distributed Systems & Cloud Engineering",
      location: "Continuous Growth",
      typeLabel: "Future Goals",
      badge: "🚀 NEXT HORIZON",
      desc: "Scaling distributed web architectures, exploring microservice topologies, integrating autonomous AI agent pipelines, and contributing to open-source software.",
      bullets: [
        "Architecting production SaaS platforms with high-concurrency microservices.",
        "Integrating autonomous AI agent workflows, vector embeddings, and RAG architectures.",
        "Deploying Docker & Kubernetes container orchestration pipelines."
      ],
      tech: ["Docker", "Kubernetes Basics", "Vector DBs", "Microservices", "CI/CD", "Cloud Architecture"]
    }
  ];

  const filteredSteps = journeySteps.filter(step => {
    if (activeFilter === 'all') return true;
    return step.category === activeFilter;
  });

  return (
    <motion.div 
      className="py-24 relative overflow-hidden bg-bg-darkest min-h-screen text-text-main pt-[128px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background blur orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-3/4 right-10 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-bold text-primary-light uppercase tracking-wider inline-flex items-center gap-1.5">
            <Sparkles size={12} />
            Career & Engineering Journey
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-display text-text-title tracking-tight mt-4">
            Professional Experience & Milestones
          </h1>
          <p className="text-text-muted mt-4 max-w-xl mx-auto text-xs md:text-sm leading-relaxed">
            A comprehensive record of my full-stack apprenticeships, industry training at S O Infotech and DUCAT India, production platforms, and computer applications education.
          </p>
        </div>

        {/* ── Spotlight Experience Quick-Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {/* Card 1: DUCAT India */}
          <motion.div 
            className="p-5 rounded-2xl glass-aurora border border-primary/30 relative overflow-hidden flex flex-col justify-between shadow-lg text-left group hover:border-primary/60 transition-all duration-300"
            whileHover={{ y: -4 }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary-light">
                  <Briefcase size={16} />
                </div>
                <span className="text-[9px] font-mono font-extrabold text-primary-light bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                  Mar – Aug 2026
                </span>
              </div>
              <h3 className="text-sm font-bold text-text-title font-display">DUCAT India</h3>
              <p className="text-[11px] font-bold text-secondary-light font-mono mt-0.5">Apprenticeship — MERN Full Stack</p>
              <p className="text-[11px] text-text-muted mt-2 leading-relaxed">
                Hands-on MERN engineering: MongoDB, Express, React, Node, JWT auth, and Context API state architecture.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-text-muted font-mono">
              <span className="flex items-center gap-1"><MapPin size={11} className="text-primary-light" /> Remote</span>
              <span className="text-emerald-400 font-bold">Completed</span>
            </div>
          </motion.div>

          {/* Card 2: S O Infotech */}
          <motion.div 
            className="p-5 rounded-2xl glass-aurora border border-secondary/30 relative overflow-hidden flex flex-col justify-between shadow-lg text-left group hover:border-secondary/60 transition-all duration-300"
            whileHover={{ y: -4 }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-secondary/15 border border-secondary/30 flex items-center justify-center text-secondary-light">
                  <Building2 size={16} />
                </div>
                <span className="text-[9px] font-mono font-extrabold text-secondary-light bg-secondary/10 px-2 py-0.5 rounded border border-secondary/20">
                  Dec 2025 – Jul 2026
                </span>
              </div>
              <h3 className="text-sm font-bold text-text-title font-display">S O Infotech (P) Ltd.</h3>
              <p className="text-[11px] font-bold text-secondary-light font-mono mt-0.5">Full Stack Developer Trainee (Python)</p>
              <p className="text-[11px] text-text-muted mt-2 leading-relaxed">
                Engineered E-commerce platforms with Python Full Stack architecture, Generative AI features, and payment gateways.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-text-muted font-mono">
              <span className="flex items-center gap-1"><MapPin size={11} className="text-secondary-light" /> Noida, India</span>
              <span className="text-emerald-400 font-bold">Completed</span>
            </div>
          </motion.div>

          {/* Card 3: DBRAU */}
          <motion.div 
            className="p-5 rounded-2xl glass-aurora border border-amber-500/30 relative overflow-hidden flex flex-col justify-between shadow-lg text-left group hover:border-amber-500/60 transition-all duration-300"
            whileHover={{ y: -4 }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <GraduationCap size={16} />
                </div>
                <span className="text-[9px] font-mono font-extrabold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  2024 – 2027
                </span>
              </div>
              <h3 className="text-sm font-bold text-text-title font-display">DBRAU, Agra</h3>
              <p className="text-[11px] font-bold text-amber-400 font-mono mt-0.5">Bachelor of Computer Applications</p>
              <p className="text-[11px] text-text-muted mt-2 leading-relaxed">
                Academic foundation in data structures, algorithms, DBMS, operating systems, and computer applications.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-text-muted font-mono">
              <span className="flex items-center gap-1"><MapPin size={11} className="text-amber-400" /> Agra, India</span>
              <span className="text-primary-light font-bold">In Progress</span>
            </div>
          </motion.div>
        </div>

        {/* ── Category Filter Tabs ── */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {[
            { id: 'all', label: 'All Milestones' },
            { id: 'experience', label: 'Work Experience (DUCAT & S O Infotech)' },
            { id: 'project', label: 'Production Projects' },
            { id: 'education', label: 'Academics & Education' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all duration-300 border cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/40 text-text-title shadow-sm font-extrabold'
                  : 'border-white/5 text-text-muted hover:text-text-title hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Vertical Timeline Section ── */}
        <div className="relative max-w-3xl mx-auto py-4">
          {/* Left aligned vertical roadmap line */}
          <div className="absolute left-[17px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent" />
          
          <div className="space-y-8">
            <AnimatePresence mode="popLayout">
              {filteredSteps.map((step, idx) => {
                const isHighlight = step.highlight;
                const isExp = step.category === 'experience';
                const isEdu = step.category === 'education';

                return (
                  <motion.div 
                    key={step.id} 
                    className="relative flex gap-6 pl-1.5 items-stretch"
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                  >
                    {/* Pulsing indicator node */}
                    <div className="flex flex-col items-center justify-start pt-4 shrink-0 w-8">
                      <div className={`w-4 h-4 rounded-full bg-bg-darkest border-2 ${
                        isExp 
                          ? 'border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.5)]' 
                          : isEdu 
                            ? 'border-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.5)]'
                            : isHighlight 
                              ? 'border-primary shadow-[0_0_12px_rgba(139,92,246,0.6)]' 
                              : 'border-primary/45'
                      } flex items-center justify-center relative z-10`}>
                        <span className={`absolute inset-0 rounded-full ${
                          isExp ? 'bg-emerald-400/20' : isEdu ? 'bg-amber-400/20' : 'bg-primary/20'
                        } ${isHighlight ? 'animate-ping' : 'animate-pulse'}`} />
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          isExp ? 'bg-emerald-400' : isEdu ? 'bg-amber-400' : 'bg-primary-light'
                        }`} />
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <div 
                      className={`w-full p-6 rounded-2xl border transition-all duration-300 text-left ${
                        isHighlight 
                          ? 'bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent border-primary/40 shadow-[0_0_25px_rgba(139,92,246,0.12)]'
                          : 'bg-white/[0.01] border border-white/5 hover:border-primary/25 hover:bg-white/[0.02]'
                      }`}
                    >
                      {/* Top Badges & Meta */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-mono font-extrabold text-primary-light bg-primary/10 border border-primary/25 px-2.5 py-0.5 rounded flex items-center gap-1">
                            <Calendar size={10} />
                            {step.step}
                          </span>
                          <span className={`text-[9px] font-mono font-extrabold px-2 py-0.5 rounded border ${
                            isExp 
                              ? 'text-emerald-400 bg-emerald-400/10 border-emerald-400/25'
                              : isEdu
                                ? 'text-amber-400 bg-amber-400/10 border-amber-400/25'
                                : 'text-secondary-light bg-secondary/10 border-secondary/25'
                          }`}>
                            {step.typeLabel}
                          </span>
                        </div>

                        {step.badge && (
                          <span className="text-[9px] font-mono font-extrabold text-primary bg-primary/10 border border-primary/30 px-2 py-0.5 rounded">
                            {step.badge}
                          </span>
                        )}
                      </div>
                      
                      {/* Company / Title */}
                      <div className="mb-2">
                        <h2 className="text-xl font-bold text-text-title font-display flex items-center gap-2">
                          {isExp && <Briefcase size={18} className="text-primary-light shrink-0" />}
                          {isEdu && <GraduationCap size={18} className="text-amber-400 shrink-0" />}
                          {!isExp && !isEdu && <Rocket size={18} className="text-secondary-light shrink-0" />}
                          {step.title}
                        </h2>
                        
                        {/* Designation / Role */}
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className="text-xs font-bold text-secondary-light font-mono">
                            {step.role}
                          </span>
                          {step.location && (
                            <>
                              <span className="text-text-muted">•</span>
                              <span className="text-[10px] text-text-muted font-mono flex items-center gap-1">
                                <MapPin size={10} />
                                {step.location}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                      
                      {/* Overview description */}
                      {step.desc && (
                        <p className="text-xs text-text-muted leading-relaxed my-3">
                          {step.desc}
                        </p>
                      )}

                      {/* Responsibilities / Key Achievements Bullets */}
                      {step.bullets && step.bullets.length > 0 && (
                        <div className="my-3 space-y-1.5 border-t border-white/5 pt-3">
                          {step.bullets.map((bullet, bIdx) => (
                            <div key={bIdx} className="flex items-start gap-2 text-xs text-text-muted leading-relaxed">
                              <CheckCircle2 size={12} className="text-emerald-400 shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Chips */}
                      {step.tech && step.tech.length > 0 && (
                        <div className="flex flex-wrap gap-1 pt-3 border-t border-white/5">
                          {step.tech.map((t) => (
                            <span 
                              key={t} 
                              className="px-2 py-0.5 rounded bg-white/[0.02] border border-white/5 text-[9px] text-text-muted font-mono font-bold hover:text-text-title hover:border-primary/30 transition-colors"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* GitHub Profile Callout */}
        <div className="border-t border-white/5 pt-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="p-6 rounded-2xl glass-aurora border border-white/5 text-left shadow-sm"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center flex-shrink-0">
                    <FaGithub size={24} className="text-text-title" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-text-title block font-display">@Nikhil-beep25</span>
                    <span className="text-[10px] text-text-muted font-mono block mt-0.5">github.com/Nikhil-beep25</span>
                    <span className="text-[10px] text-emerald-400 font-mono block mt-1 font-bold">View verified repositories, commits, and project architectures on GitHub ↗</span>
                  </div>
                </div>
                <a
                  href="https://github.com/Nikhil-beep25"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all duration-300 flex-shrink-0"
                >
                  <FaGithub size={14} />
                  View GitHub Profile
                </a>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
