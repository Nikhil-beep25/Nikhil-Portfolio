import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { 
  Briefcase, GraduationCap, Award, Calendar, MapPin, 
  CheckCircle2, Building2, Sparkles, ArrowUpRight, 
  Rocket, BookOpen, Zap, Layers, ShieldCheck
} from 'lucide-react';

interface TimelineStep {
  id: string;
  category: 'experience' | 'education' | 'certification' | 'milestone';
  step: string;
  title: string;
  role: string;
  location: string;
  issuer?: string;
  typeLabel: string;
  badge?: string;
  highlight?: boolean;
  desc: string;
  bullets?: string[];
  tech: string[];
}

export default function JourneyPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'experience' | 'education' | 'certification' | 'milestone'>('all');

  // Strictly Career, Work Experience, Education, Certifications, and Engineering Horizons (NO PROJECTS)
  const journeySteps: TimelineStep[] = [
    {
      id: "ducat",
      category: "experience",
      step: "Mar 2026 – Aug 2026",
      title: "DUCAT India",
      role: "Apprenticeship — MERN Full Stack Development",
      location: "Remote / Hybrid",
      typeLabel: "Work Experience",
      badge: "⚡ MERN FULL STACK APPRENTICESHIP",
      highlight: true,
      desc: "Completed an intensive engineering apprenticeship focused on modern MERN architecture (MongoDB, Express.js, React.js, Node.js). Engineered reusable component systems, RESTful services, and production-grade state and authentication flows.",
      bullets: [
        "Developed production-ready full-stack applications using MongoDB, Express.js, React.js, and Node.js with responsive, accessible user interfaces.",
        "Implemented secure JWT authentication flows, request validations, and global state management using React hooks and Context API.",
        "Conducted end-to-end debugging workflows, API performance optimization, and collaborative Git version control in an agile team setup."
      ],
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Context API", "RESTful APIs", "Git", "Postman"]
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
      desc: "Engineered full-stack web applications and integrated Generative AI capabilities into commercial platforms while collaborating in an agile team environment.",
      bullets: [
        "Engineered an E-commerce web platform using Python Full Stack architecture integrated with Generative AI features for intelligent user interactions.",
        "Collaborated with senior engineers to design RESTful APIs, integrate secure third-party payment gateways, and optimize PostgreSQL queries for sub-second page performance.",
        "Participated in cross-functional sprint planning, schema migrations, code reviews, and version-controlled Git deployments."
      ],
      tech: ["Python", "Generative AI", "RESTful APIs", "Payment Gateways", "PostgreSQL", "SQL Optimization", "Git", "Backend Architecture"]
    },
    {
      id: "dbrau",
      category: "education",
      step: "2024 – 2027",
      title: "Dr. Bhimrao Ambedkar University (DBRAU)",
      role: "Bachelor of Computer Applications (BCA) — Computer Science",
      location: "Agra, Uttar Pradesh, India",
      typeLabel: "Higher Education",
      badge: "🎓 HIGHER EDUCATION",
      highlight: false,
      desc: "Pursuing Bachelor of Computer Applications (BCA). Building deep theoretical and practical foundations in core computer science, software engineering principles, and algorithm design.",
      bullets: [
        "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (C++/Python), Database Management Systems (DBMS), Operating Systems, and Computer Networks.",
        "Focus on algorithmic problem solving, relational schema normalization, software design patterns, and full-stack web application development."
      ],
      tech: ["C / C++", "Python", "Data Structures", "Algorithms", "DBMS & SQL", "OOP", "Operating Systems", "Computer Networks"]
    },
    {
      id: "cert-udemy",
      category: "certification",
      step: "Issued 2025",
      title: "The Complete Web Developer Bootcamp",
      role: "Full Stack Web Development Certification",
      location: "Udemy Credential",
      issuer: "Udemy — Dr. Angela Yu",
      typeLabel: "Professional Certification",
      badge: "📜 VERIFIED CERTIFICATION",
      highlight: false,
      desc: "Comprehensive engineering curriculum mastering full-stack web development from fundamental frontend layouts to complex backend microservices and databases.",
      bullets: [
        "Mastered frontend UI architecture with React.js, responsive layouts, CSS frameworks, and modern ES6+ JavaScript standards.",
        "Engineered RESTful backends with Node.js and Express, implementing NoSQL MongoDB databases and secure authentication mechanisms."
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JavaScript ES6+", "Deployment"]
    },
    {
      id: "cert-fcc",
      category: "certification",
      step: "Issued 2025",
      title: "JavaScript Algorithms & Data Structures",
      role: "Algorithmic Engineering & Complex Structures",
      location: "freeCodeCamp Credential",
      issuer: "freeCodeCamp",
      typeLabel: "Professional Certification",
      badge: "📜 VERIFIED CERTIFICATION",
      highlight: false,
      desc: "Rigorous verification in foundational and advanced computer science algorithms, complex data structures, and functional programming paradigms.",
      bullets: [
        "Solved 300+ algorithmic challenges including sorting algorithms, tree/graph logic, recursion, dynamic programming, and regex parsing.",
        "Deep mastery of Object-Oriented Programming (OOP), prototypes, lexical scopes, and functional programming paradigms in modern JavaScript."
      ],
      tech: ["JavaScript", "Algorithms", "Data Structures", "OOP", "Functional Programming", "ES6+ Standards"]
    },
    {
      id: "cert-coursera",
      category: "certification",
      step: "Issued 2025",
      title: "Python for Everybody Specialization",
      role: "Python Backend, Data Structures & Web APIs",
      location: "Coursera Credential",
      issuer: "Coursera / University of Michigan",
      typeLabel: "Professional Certification",
      badge: "📜 VERIFIED CERTIFICATION",
      highlight: false,
      desc: "Specialized programmatic series covering Python data structures, networked application programming, Web Scraping, REST APIs, and SQLite database engineering.",
      bullets: [
        "Constructed programs to extract, parse, and process web data using XML, JSON, and RESTful APIs.",
        "Engineered relational database schemas with SQLite and SQL queries for data aggregation, modeling, and automated visualization."
      ],
      tech: ["Python", "Web APIs", "JSON / XML Parsing", "SQLite", "Data Structures", "Network Programming"]
    },
    {
      id: "future",
      category: "milestone",
      step: "Next Phase",
      title: "Distributed Systems & Cloud Architecture",
      role: "Scalable Systems & Autonomous AI Pipelines",
      location: "Continuous Growth",
      typeLabel: "Future Horizons",
      badge: "🚀 NEXT HORIZON",
      highlight: true,
      desc: "Scaling distributed web architectures, exploring microservice topologies, integrating autonomous AI agent pipelines, and contributing to high-impact software systems.",
      bullets: [
        "Architecting production SaaS platforms with high-concurrency microservices and message streaming.",
        "Integrating autonomous AI agent workflows, vector embeddings, and RAG architectures into web platforms.",
        "Deploying Docker containerization, Kubernetes orchestration, and automated CI/CD deployment pipelines."
      ],
      tech: ["Docker", "Kubernetes", "Microservices", "Vector DBs", "AI Agents", "Cloud Architecture", "CI/CD"]
    }
  ];

  const filteredSteps = journeySteps.filter(step => {
    if (activeFilter === 'all') return true;
    return step.category === activeFilter;
  });

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
        
        {/* ── Page Header ── */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.span 
            className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-bold text-primary-light uppercase tracking-wider inline-flex items-center gap-1.5 shadow-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Sparkles size={13} className="text-primary-light" />
            Career Path & Credentials
          </motion.span>
          
          <motion.h1 
            className="text-3xl md:text-5xl font-extrabold font-display text-text-title tracking-tight mt-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-pink-500">Journey</span>
          </motion.h1>
          
          <motion.p 
            className="text-text-muted mt-4 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A dedicated record of my industry full-stack apprenticeships at DUCAT India, developer training at S O Infotech, university computer science studies at DBRAU, and verified software certifications.
          </motion.p>
        </div>

        {/* ── Key Metrics Ribbon (4 Cards) ── */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div className="p-4 rounded-2xl glass-aurora border border-emerald-500/25 relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
            <span className="text-xs font-mono font-bold text-emerald-400 block mb-1">Industry Roles</span>
            <p className="text-2xl md:text-3xl font-extrabold font-display text-text-title">2+</p>
            <p className="text-[11px] text-text-muted mt-1 leading-tight">DUCAT India & S O Infotech</p>
          </div>

          <div className="p-4 rounded-2xl glass-aurora border border-amber-500/25 relative overflow-hidden group hover:border-amber-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />
            <span className="text-xs font-mono font-bold text-amber-400 block mb-1">Academics</span>
            <p className="text-2xl md:text-3xl font-extrabold font-display text-text-title">2024–27</p>
            <p className="text-[11px] text-text-muted mt-1 leading-tight">BCA @ DBRAU Agra</p>
          </div>

          <div className="p-4 rounded-2xl glass-aurora border border-primary/25 relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-full blur-xl pointer-events-none" />
            <span className="text-xs font-mono font-bold text-primary-light block mb-1">Certifications</span>
            <p className="text-2xl md:text-3xl font-extrabold font-display text-text-title">3+</p>
            <p className="text-[11px] text-text-muted mt-1 leading-tight">Udemy, freeCodeCamp, Coursera</p>
          </div>

          <div className="p-4 rounded-2xl glass-aurora border border-secondary/25 relative overflow-hidden group hover:border-secondary/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/10 rounded-full blur-xl pointer-events-none" />
            <span className="text-xs font-mono font-bold text-secondary-light block mb-1">Core Stacks</span>
            <p className="text-2xl md:text-3xl font-extrabold font-display text-text-title">MERN + AI</p>
            <p className="text-[11px] text-text-muted mt-1 leading-tight">Full Stack, Python & GenAI</p>
          </div>
        </motion.div>

        {/* ── Featured Work Experience Spotlight (Dual Hero Split Cards) ── */}
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Briefcase size={18} className="text-emerald-400" />
              <h2 className="text-lg md:text-xl font-bold font-display text-text-title">
                Industry Work Experience Spotlight
              </h2>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 font-bold bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/20">
              Verified Experience
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Spotlight 1: DUCAT India */}
            <motion.div 
              className="p-6 rounded-3xl glass-aurora border border-emerald-500/30 relative overflow-hidden flex flex-col justify-between shadow-xl text-left group hover:border-emerald-400/60 transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-sm">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-text-title font-display">DUCAT India</h3>
                      <span className="text-[10px] text-text-muted font-mono flex items-center gap-1">
                        <MapPin size={10} className="text-emerald-400" /> Remote / Hybrid
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-extrabold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/25">
                    Mar – Aug 2026
                  </span>
                </div>

                <div className="mb-3">
                  <span className="text-xs font-bold text-emerald-300 font-mono block">
                    Apprenticeship — MERN Full Stack Development
                  </span>
                  <p className="text-xs text-text-muted mt-2 leading-relaxed">
                    Intensive engineering apprenticeship focused on modern MERN architecture (MongoDB, Express.js, React.js, Node.js). Built scalable full-stack features, reusable UI libraries, and production authentication pipelines.
                  </p>
                </div>

                <div className="space-y-2 my-4 border-t border-white/5 pt-3">
                  <div className="flex items-start gap-2 text-xs text-text-muted leading-relaxed">
                    <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>Engineered full-stack applications with MongoDB, Express, React, and Node.js.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-text-muted leading-relaxed">
                    <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>Implemented secure JWT authentication, form validations, and React Context API state architecture.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-text-muted leading-relaxed">
                    <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>Conducted debugging workflows, performance profiling, and Git version control in an agile team.</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                {["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Context API", "REST APIs", "Git"].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-300 font-mono font-bold">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Spotlight 2: S O Infotech */}
            <motion.div 
              className="p-6 rounded-3xl glass-aurora border border-primary/30 relative overflow-hidden flex flex-col justify-between shadow-xl text-left group hover:border-primary/60 transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary-light shadow-sm">
                      <Building2 size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-text-title font-display">S O Infotech (P) Ltd.</h3>
                      <span className="text-[10px] text-text-muted font-mono flex items-center gap-1">
                        <MapPin size={10} className="text-primary-light" /> Noida, UP, India
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-extrabold text-primary-light bg-primary/10 px-2.5 py-1 rounded-full border border-primary/25">
                    Dec 2025 – Jul 2026
                  </span>
                </div>

                <div className="mb-3">
                  <span className="text-xs font-bold text-secondary-light font-mono block">
                    Full Stack Developer Trainee (Python & GenAI)
                  </span>
                  <p className="text-xs text-text-muted mt-2 leading-relaxed">
                    Worked on-site in Noida engineering full-stack web applications and integrating Generative AI backend capabilities into commercial platforms with sub-second database performance.
                  </p>
                </div>

                <div className="space-y-2 my-4 border-t border-white/5 pt-3">
                  <div className="flex items-start gap-2 text-xs text-text-muted leading-relaxed">
                    <CheckCircle2 size={13} className="text-primary-light shrink-0 mt-0.5" />
                    <span>Engineered an E-commerce platform with Python Full Stack architecture & Generative AI features.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-text-muted leading-relaxed">
                    <CheckCircle2 size={13} className="text-primary-light shrink-0 mt-0.5" />
                    <span>Designed RESTful APIs, connected secure payment gateways, and optimized PostgreSQL queries.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-text-muted leading-relaxed">
                    <CheckCircle2 size={13} className="text-primary-light shrink-0 mt-0.5" />
                    <span>Participated in agile ceremonies, sprint planning, schema migrations, and Git reviews.</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                {["Python", "Generative AI", "PostgreSQL", "RESTful APIs", "Payment Gateways", "SQL Optimization", "Git"].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-primary/10 border border-primary/20 text-[10px] text-primary-light font-mono font-bold">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Category Filter Tabs ── */}
        <div className="flex items-center justify-center gap-2 flex-wrap max-w-4xl mx-auto">
          {[
            { id: 'all', label: 'All Milestones' },
            { id: 'experience', label: 'Work Experience' },
            { id: 'education', label: 'Higher Education' },
            { id: 'certification', label: 'Certifications' },
            { id: 'milestone', label: 'Future Horizons' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all duration-300 border cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 border-primary/50 text-text-title shadow-sm font-extrabold'
                  : 'border-white/5 text-text-muted hover:text-text-title hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Vertical Timeline Section ── */}
        <div className="relative max-w-3xl mx-auto py-4">
          {/* Vertical roadmap gradient line */}
          <div className="absolute left-[17px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent" />
          
          <div className="space-y-8">
            <AnimatePresence mode="popLayout">
              {filteredSteps.map((step, idx) => {
                const isHighlight = step.highlight;
                const isExp = step.category === 'experience';
                const isEdu = step.category === 'education';
                const isCert = step.category === 'certification';
                const isFuture = step.category === 'milestone';

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
                    {/* Pulsing beacon node */}
                    <div className="flex flex-col items-center justify-start pt-4 shrink-0 w-8">
                      <div className={`w-4 h-4 rounded-full bg-bg-darkest border-2 ${
                        isExp 
                          ? 'border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.5)]' 
                          : isEdu 
                            ? 'border-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.5)]'
                            : isCert
                              ? 'border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.5)]'
                              : 'border-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.5)]'
                      } flex items-center justify-center relative z-10`}>
                        <span className={`absolute inset-0 rounded-full ${
                          isExp ? 'bg-emerald-400/20' : isEdu ? 'bg-amber-400/20' : isCert ? 'bg-cyan-400/20' : 'bg-purple-400/20'
                        } ${isHighlight ? 'animate-ping' : 'animate-pulse'}`} />
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          isExp ? 'bg-emerald-400' : isEdu ? 'bg-amber-400' : isCert ? 'bg-cyan-400' : 'bg-purple-400'
                        }`} />
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <div 
                      className={`w-full p-6 rounded-2xl border transition-all duration-300 text-left ${
                        isExp 
                          ? 'bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent border-emerald-500/30 shadow-[0_0_25px_rgba(16,185,129,0.08)]'
                          : isEdu
                            ? 'bg-gradient-to-br from-amber-500/10 via-transparent to-transparent border-amber-500/30 shadow-[0_0_25px_rgba(245,158,11,0.08)]'
                            : isCert
                              ? 'bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent border-cyan-500/30 shadow-[0_0_25px_rgba(6,182,212,0.08)]'
                              : 'bg-gradient-to-br from-purple-500/10 via-secondary/5 to-transparent border-purple-500/30 shadow-[0_0_25px_rgba(168,85,247,0.08)]'
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
                                : isCert
                                  ? 'text-cyan-400 bg-cyan-400/10 border-cyan-400/25'
                                  : 'text-purple-400 bg-purple-400/10 border-purple-400/25'
                          }`}>
                            {step.typeLabel}
                          </span>
                        </div>

                        {step.badge && (
                          <span className={`text-[9px] font-mono font-extrabold px-2 py-0.5 rounded border ${
                            isExp
                              ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
                              : isEdu
                                ? 'text-amber-400 bg-amber-500/10 border-amber-500/30'
                                : isCert
                                  ? 'text-cyan-300 bg-cyan-500/10 border-cyan-500/30'
                                  : 'text-purple-300 bg-purple-500/10 border-purple-500/30'
                          }`}>
                            {step.badge}
                          </span>
                        )}
                      </div>
                      
                      {/* Title & Role */}
                      <div className="mb-2">
                        <h2 className="text-xl font-bold text-text-title font-display flex items-center gap-2">
                          {isExp && <Briefcase size={18} className="text-emerald-400 shrink-0" />}
                          {isEdu && <GraduationCap size={18} className="text-amber-400 shrink-0" />}
                          {isCert && <Award size={18} className="text-cyan-400 shrink-0" />}
                          {isFuture && <Rocket size={18} className="text-purple-400 shrink-0" />}
                          {step.title}
                        </h2>
                        
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className={`text-xs font-bold font-mono ${
                            isExp ? 'text-emerald-300' : isEdu ? 'text-amber-300' : isCert ? 'text-cyan-300' : 'text-purple-300'
                          }`}>
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

                      {/* Responsibilities / Key Points */}
                      {step.bullets && step.bullets.length > 0 && (
                        <div className="my-3 space-y-1.5 border-t border-white/5 pt-3">
                          {step.bullets.map((bullet, bIdx) => (
                            <div key={bIdx} className="flex items-start gap-2 text-xs text-text-muted leading-relaxed">
                              <CheckCircle2 size={12} className={`shrink-0 mt-0.5 ${
                                isExp ? 'text-emerald-400' : isEdu ? 'text-amber-400' : isCert ? 'text-cyan-400' : 'text-purple-400'
                              }`} />
                              <span>{bullet}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Chips */}
                      {step.tech && step.tech.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
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

        {/* ── Professional Certifications Grid ── */}
        <div className="max-w-5xl mx-auto space-y-6 pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award size={18} className="text-cyan-400" />
              <h2 className="text-lg md:text-xl font-bold font-display text-text-title">
                Verified Credentials & Certifications
              </h2>
            </div>
            <span className="text-[11px] font-mono text-cyan-400 font-bold bg-cyan-400/10 px-2.5 py-1 rounded-full border border-cyan-400/20">
              Industry Standard
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Cert 1 */}
            <div className="p-5 rounded-2xl glass-aurora border border-cyan-500/25 relative overflow-hidden flex flex-col justify-between text-left group hover:border-cyan-400/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <ShieldCheck size={16} />
                  </div>
                  <span className="text-[9px] font-mono font-extrabold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                    Udemy
                  </span>
                </div>
                <h3 className="text-sm font-bold text-text-title font-display">The Complete Web Developer Bootcamp</h3>
                <p className="text-[11px] font-mono text-cyan-300 mt-1">Dr. Angela Yu</p>
                <p className="text-[11px] text-text-muted mt-2 leading-relaxed">
                  Full-stack engineering: React.js, Node.js, Express.js, MongoDB database schemas, and REST APIs.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-text-muted">
                <span>Completed</span>
                <span className="text-cyan-400 font-bold flex items-center gap-1">Full-Stack <Zap size={10} /></span>
              </div>
            </div>

            {/* Cert 2 */}
            <div className="p-5 rounded-2xl glass-aurora border border-cyan-500/25 relative overflow-hidden flex flex-col justify-between text-left group hover:border-cyan-400/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <BookOpen size={16} />
                  </div>
                  <span className="text-[9px] font-mono font-extrabold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                    freeCodeCamp
                  </span>
                </div>
                <h3 className="text-sm font-bold text-text-title font-display">JavaScript Algorithms & Data Structures</h3>
                <p className="text-[11px] font-mono text-cyan-300 mt-1">freeCodeCamp Core Curriculum</p>
                <p className="text-[11px] text-text-muted mt-2 leading-relaxed">
                  300+ algorithm challenges, OOP paradigms, ES6+ standards, and complex data structures.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-text-muted">
                <span>Completed</span>
                <span className="text-cyan-400 font-bold flex items-center gap-1">Algorithms <Layers size={10} /></span>
              </div>
            </div>

            {/* Cert 3 */}
            <div className="p-5 rounded-2xl glass-aurora border border-cyan-500/25 relative overflow-hidden flex flex-col justify-between text-left group hover:border-cyan-400/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Award size={16} />
                  </div>
                  <span className="text-[9px] font-mono font-extrabold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                    Coursera
                  </span>
                </div>
                <h3 className="text-sm font-bold text-text-title font-display">Python for Everybody Specialization</h3>
                <p className="text-[11px] font-mono text-cyan-300 mt-1">University of Michigan</p>
                <p className="text-[11px] text-text-muted mt-2 leading-relaxed">
                  Python data structures, web scraping, JSON/XML parsing, REST APIs, and SQLite databases.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-text-muted">
                <span>Completed</span>
                <span className="text-cyan-400 font-bold flex items-center gap-1">Python & SQL <Zap size={10} /></span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Higher Education Academic Foundation ── */}
        <div className="max-w-5xl mx-auto">
          <div className="p-8 rounded-3xl glass-aurora border border-amber-500/30 relative overflow-hidden text-left shadow-lg">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-sm">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold font-display text-text-title">
                    Dr. Bhimrao Ambedkar University (DBRAU), Agra
                  </h3>
                  <p className="text-xs font-mono text-amber-400 font-bold mt-0.5">
                    Bachelor of Computer Applications (BCA) — Computer Science • 2024 – 2027
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono font-extrabold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30 self-start md:self-center">
                In Progress (Graduating 2027)
              </span>
            </div>

            <p className="text-xs md:text-sm text-text-muted leading-relaxed mb-6">
              Comprehensive undergraduate computer science curriculum emphasizing computer architecture, algorithmic reasoning, relational database design, and software engineering methodologies.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
              {[
                { name: "Data Structures", desc: "Arrays, Trees, Graphs" },
                { name: "Algorithms", desc: "Analysis & Complexity" },
                { name: "DBMS & SQL", desc: "Relational Schemas" },
                { name: "OOP Principles", desc: "C++ & Python" },
                { name: "Operating Systems", desc: "Processes & Memory" },
                { name: "Computer Networks", desc: "Protocols & Sockets" }
              ].map((subject) => (
                <div key={subject.name} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-500/30 transition-colors">
                  <span className="text-xs font-bold text-text-title font-display block">{subject.name}</span>
                  <span className="text-[10px] text-text-muted font-mono block mt-0.5">{subject.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── GitHub & Professional Profiles CTA ── */}
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
                    <span>View GitHub Profile</span>
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
