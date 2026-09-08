import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Code2, Server, Database, Sparkles, Cpu, 
  CheckCircle2, ArrowRight, Layers, ArrowUpRight
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  badge: string;
  desc: string;
  deliverables: string[];
  techStack: string[];
  border: string;
  glow: string;
  accentText: string;
}

export default function ServicesPage() {
  const navigate = useNavigate();

  const services: ServiceItem[] = [
    {
      icon: <Layers size={22} className="text-cyan-400" />,
      title: "Full Stack Web Engineering",
      badge: "CLIENT + SERVER",
      desc: "Architecting high-performance web applications with reactive client interfaces, robust state management, and decoupled REST backend endpoints.",
      deliverables: ["Responsive React Client UI", "State management & Context API", "Role-based route authentication", "Cross-browser testing & CWV"],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express"],
      border: "border-cyan-500/25 hover:border-cyan-500/50",
      glow: "bg-cyan-500/10",
      accentText: "text-cyan-400"
    },
    {
      icon: <Cpu size={22} className="text-purple-400" />,
      title: "SaaS Platform Development",
      badge: "ARCHITECTURE",
      desc: "Designing secure multi-tenant architectures, authorization guards, usage telemetry, rate limiting, and seamless payment workflows.",
      deliverables: ["Multi-tenant route structures", "JWT auth & role isolation", "Payment gateway workflows", "Modular cloud scaling"],
      techStack: ["Node.js", "Python", "PostgreSQL", "Redis", "Docker"],
      border: "border-purple-500/25 hover:border-purple-500/50",
      glow: "bg-purple-500/10",
      accentText: "text-purple-400"
    },
    {
      icon: <Server size={22} className="text-emerald-400" />,
      title: "RESTful API Engineering",
      badge: "BACKEND SERVICES",
      desc: "Engineering high-throughput REST API routes, setting token verification claims, request validations, and automated API documentation.",
      deliverables: ["Express & Python REST routes", "JWT claim verification rules", "Schema validation & sanitizer", "Postman test suites"],
      techStack: ["Express.js", "Node.js", "Python", "JWT", "REST APIs"],
      border: "border-emerald-500/25 hover:border-emerald-500/50",
      glow: "bg-emerald-500/10",
      accentText: "text-emerald-400"
    },
    {
      icon: <Database size={22} className="text-blue-400" />,
      title: "Database Modeling & Indexing",
      badge: "PERSISTENCE",
      desc: "Designing normalized 3NF relational schemas, creating composite indexing strategies, configuring ORMs, and debugging slow queries.",
      deliverables: ["Normalized relational schemas", "Optimized B-tree query indexing", "Prisma ORM migration scripts", "Transactional safety blocks"],
      techStack: ["PostgreSQL", "Prisma ORM", "MongoDB", "SQL Optimization"],
      border: "border-blue-500/25 hover:border-blue-500/50",
      glow: "bg-blue-500/10",
      accentText: "text-blue-400"
    },
    {
      icon: <Sparkles size={22} className="text-pink-400" />,
      title: "Generative AI Integration",
      badge: "INTELLIGENCE",
      desc: "Integrating Gemini and OpenAI LLM models, vector embeddings, chunking strategies, and conversational AI features into production web platforms.",
      deliverables: ["Gemini AI API integration", "Context-aware prompt flows", "Vector embedding pipelines", "Conversational UI components"],
      techStack: ["Gemini API", "Python", "Vector Search", "FastAPI"],
      border: "border-pink-500/25 hover:border-pink-500/50",
      glow: "bg-pink-500/10",
      accentText: "text-pink-400"
    },
    {
      icon: <Code2 size={22} className="text-amber-400" />,
      title: "Performance & Code Optimization",
      badge: "EFFICIENCY",
      desc: "Auditing application load bottlenecks, profiling execution, eliminating unneeded re-renders, and tuning database latency for snappy interactions.",
      deliverables: ["Lighthouse 95+ web audits", "Bundle chunk code splitting", "Query execution plan tuning", "Memory leak profiling"],
      techStack: ["Vite", "Lighthouse", "PostgreSQL", "React Profiler"],
      border: "border-amber-500/25 hover:border-amber-500/50",
      glow: "bg-amber-500/10",
      accentText: "text-amber-400"
    }
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
            Engineering Solutions & Capabilities
          </motion.span>
          
          <motion.h1 
            className="text-3xl md:text-5xl font-extrabold font-display text-text-title tracking-tight mt-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-pink-500">Services</span>
          </motion.h1>
          
          <motion.p 
            className="text-text-muted mt-4 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I deliver robust full-stack software products, decoupled REST microservices, structured relational schemas, and intelligent GenAI integrations.
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
            <span className="text-xs font-mono font-bold text-cyan-400 block mb-1">Client UI</span>
            <p className="text-2xl md:text-3xl font-extrabold font-display text-text-title">React 19</p>
            <p className="text-[11px] text-text-muted mt-1 leading-tight">TypeScript & Modern Layouts</p>
          </div>

          <div className="p-4 rounded-2xl glass-aurora border border-emerald-500/25 relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
            <span className="text-xs font-mono font-bold text-emerald-400 block mb-1">Backend Core</span>
            <p className="text-2xl md:text-3xl font-extrabold font-display text-text-title">Node + Py</p>
            <p className="text-[11px] text-text-muted mt-1 leading-tight">Express REST APIs & Auth</p>
          </div>

          <div className="p-4 rounded-2xl glass-aurora border border-primary/25 relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-full blur-xl pointer-events-none" />
            <span className="text-xs font-mono font-bold text-primary-light block mb-1">Data Storage</span>
            <p className="text-2xl md:text-3xl font-extrabold font-display text-text-title">PostgreSQL</p>
            <p className="text-[11px] text-text-muted mt-1 leading-tight">Prisma ORM & Indexing</p>
          </div>

          <div className="p-4 rounded-2xl glass-aurora border border-secondary/25 relative overflow-hidden group hover:border-secondary/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/10 rounded-full blur-xl pointer-events-none" />
            <span className="text-xs font-mono font-bold text-secondary-light block mb-1">Intelligence</span>
            <p className="text-2xl md:text-3xl font-extrabold font-display text-text-title">GenAI</p>
            <p className="text-[11px] text-text-muted mt-1 leading-tight">Gemini API & Vector Search</p>
          </div>
        </motion.div>

        {/* ── Services Grid ── */}
        <div className="space-y-6 max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2 size={18} className="text-primary-light" />
              <h2 className="text-lg md:text-xl font-bold font-display text-text-title">
                Core Engineering Capabilities
              </h2>
            </div>
            <span className="text-[11px] font-mono text-primary-light font-bold bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
              6 Core Domains
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((serv, idx) => (
              <motion.div
                key={serv.title}
                className={`p-7 rounded-3xl glass-aurora border ${serv.border} flex flex-col justify-between shadow-xl relative overflow-hidden text-left group transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div className={`absolute top-0 right-0 w-28 h-28 ${serv.glow} rounded-full blur-2xl pointer-events-none`} />

                <div>
                  {/* Visual Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 w-fit rounded-2xl bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform">
                      {serv.icon}
                    </div>
                    <span className={`text-[9px] font-mono font-extrabold px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 ${serv.accentText}`}>
                      {serv.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-text-title font-display group-hover:text-primary-light transition-colors">
                    {serv.title}
                  </h3>
                  <p className="text-xs text-text-muted mt-2 leading-relaxed">
                    {serv.desc}
                  </p>

                  {/* Deliverables checklist */}
                  <div className="border-t border-white/5 pt-4 my-4 space-y-2">
                    <span className="text-[9px] font-mono font-bold text-text-muted uppercase tracking-wider block">
                      Key Deliverables:
                    </span>
                    <div className="space-y-1.5">
                      {serv.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-[10px] text-text-muted font-bold font-mono">
                          <CheckCircle2 size={11} className="text-emerald-400 shrink-0" />
                          <span className="truncate">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tech Stack Footer */}
                <div className="border-t border-white/5 pt-4 mt-2 flex flex-wrap gap-1.5">
                  {serv.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded-md bg-white/[0.02] border border-white/5 text-text-muted text-[9px] font-bold font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Consultation CTA Banner ── */}
        <div className="border-t border-white/5 pt-12">
          <motion.div
            className="p-8 md:p-10 rounded-3xl glass-aurora border border-primary/30 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden text-left"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold text-primary-light uppercase tracking-wider bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                Custom Engineering
              </span>
              <h3 className="text-xl font-bold font-display text-text-title">Need a Dedicated Full-Stack Solution?</h3>
              <p className="text-xs text-text-muted max-w-md leading-relaxed">
                Let's collaborate on your backend API architecture, database optimization, or full-stack SaaS platform.
              </p>
            </div>
            <button
              onClick={() => navigate('/contact')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white text-xs font-bold shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 shrink-0 cursor-pointer"
            >
              <span>Get In Touch</span>
              <ArrowRight size={14} />
            </button>
          </motion.div>
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
