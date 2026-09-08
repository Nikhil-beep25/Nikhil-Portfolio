import { motion } from 'framer-motion';
import { Calendar, ShieldCheck, CheckCircle2, Sparkles, Award, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface Certification {
  id: string;
  title: string;
  instructor: string;
  issuer: string;
  badge: string;
  date: string;
  verificationLink: string;
  desc: string;
  skillsGained: string[];
  border: string;
  glow: string;
  textAccent: string;
}

export default function CertificationsPage() {
  const certifications: Certification[] = [
    {
      id: "udemy",
      title: "The Complete Web Developer Bootcamp",
      instructor: "Dr. Angela Yu",
      issuer: "Udemy Credential",
      badge: "FULL STACK ARCHITECTURE",
      date: "Issued 2025",
      verificationLink: "https://github.com/Nikhil-beep25",
      desc: "Comprehensive engineering curriculum mastering full-stack web development from fundamental frontend layouts to complex backend microservices and databases.",
      skillsGained: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth", "JavaScript ES6+"],
      border: "border-cyan-500/25 hover:border-cyan-500/50",
      glow: "bg-cyan-500/10",
      textAccent: "text-cyan-400"
    },
    {
      id: "fcc",
      title: "JavaScript Algorithms & Data Structures",
      instructor: "freeCodeCamp Core Curriculum",
      issuer: "freeCodeCamp Verified",
      badge: "ALGORITHMS & DATA STRUCTURES",
      date: "Issued 2025",
      verificationLink: "https://github.com/Nikhil-beep25",
      desc: "Rigorous verification in foundational and advanced computer science algorithms, complex data structures, OOP patterns, and functional programming paradigms.",
      skillsGained: ["Algorithms", "Data Structures", "OOP", "Functional Programming", "Recursion", "Big O Complexity"],
      border: "border-emerald-500/25 hover:border-emerald-500/50",
      glow: "bg-emerald-500/10",
      textAccent: "text-emerald-400"
    },
    {
      id: "coursera",
      title: "Python for Everybody Specialization",
      instructor: "University of Michigan",
      issuer: "Coursera Verified",
      badge: "PYTHON & SQL ARCHITECTURE",
      date: "Issued 2025",
      verificationLink: "https://github.com/Nikhil-beep25",
      desc: "In-depth specialization covering Python data structures, web scraping, JSON/XML parsing, REST APIs, and relational SQLite database modeling.",
      skillsGained: ["Python 3", "SQLite Databases", "Web Scraping", "REST APIs", "JSON/XML Parsing", "Data Architecture"],
      border: "border-purple-500/25 hover:border-purple-500/50",
      glow: "bg-purple-500/10",
      textAccent: "text-purple-400"
    },
    {
      id: "db-arch",
      title: "PostgreSQL Database Administration & Schemas",
      instructor: "Advanced Relational Modeling",
      issuer: "Engineering Verification",
      badge: "RELATIONAL DATABASES",
      date: "Issued 2025",
      verificationLink: "https://github.com/Nikhil-beep25",
      desc: "Normalized 3NF relational schema design, query optimization, compound indexing, transaction rollback safety, and Prisma ORM integration.",
      skillsGained: ["PostgreSQL", "Prisma ORM", "Schema Normalization", "Query Indexing", "Transactions", "ACID Compliance"],
      border: "border-amber-500/25 hover:border-amber-500/50",
      glow: "bg-amber-500/10",
      textAccent: "text-amber-400"
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
            Verified Technical Credentials
          </motion.span>
          
          <motion.h1 
            className="text-3xl md:text-5xl font-extrabold font-display text-text-title tracking-tight mt-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-pink-500">Certifications</span>
          </motion.h1>
          
          <motion.p 
            className="text-text-muted mt-4 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Verified software engineering credentials earned through rigorous course completions, algorithmic certifications, and full-stack development curriculum.
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
            <span className="text-xs font-mono font-bold text-cyan-400 block mb-1">Full-Stack Bootcamp</span>
            <p className="text-2xl md:text-3xl font-extrabold font-display text-text-title">Udemy</p>
            <p className="text-[11px] text-text-muted mt-1 leading-tight">Dr. Angela Yu (MERN + SQL)</p>
          </div>

          <div className="p-4 rounded-2xl glass-aurora border border-emerald-500/25 relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
            <span className="text-xs font-mono font-bold text-emerald-400 block mb-1">Algorithms & DSA</span>
            <p className="text-2xl md:text-3xl font-extrabold font-display text-text-title">300+</p>
            <p className="text-[11px] text-text-muted mt-1 leading-tight">freeCodeCamp Core Verified</p>
          </div>

          <div className="p-4 rounded-2xl glass-aurora border border-primary/25 relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-full blur-xl pointer-events-none" />
            <span className="text-xs font-mono font-bold text-primary-light block mb-1">Specialization</span>
            <p className="text-2xl md:text-3xl font-extrabold font-display text-text-title">Python</p>
            <p className="text-[11px] text-text-muted mt-1 leading-tight">University of Michigan</p>
          </div>

          <div className="p-4 rounded-2xl glass-aurora border border-secondary/25 relative overflow-hidden group hover:border-secondary/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/10 rounded-full blur-xl pointer-events-none" />
            <span className="text-xs font-mono font-bold text-secondary-light block mb-1">Practical Delivery</span>
            <p className="text-2xl md:text-3xl font-extrabold font-display text-text-title">100%</p>
            <p className="text-[11px] text-text-muted mt-1 leading-tight">Applied in Live Applications</p>
          </div>
        </motion.div>

        {/* ── Certificate Cards Grid ── */}
        <div className="space-y-6 max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award size={18} className="text-primary-light" />
              <h2 className="text-lg md:text-xl font-bold font-display text-text-title">
                Verified Credentials & Specializations
              </h2>
            </div>
            <span className="text-[11px] font-mono text-primary-light font-bold bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
              Industry Standard
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                className={`p-7 rounded-3xl glass-aurora border ${cert.border} flex flex-col justify-between shadow-xl relative overflow-hidden text-left group transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${cert.glow} rounded-full blur-2xl pointer-events-none`} />

                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`p-2 rounded-xl bg-white/[0.03] border border-white/10 ${cert.textAccent}`}>
                        <ShieldCheck size={18} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-text-title font-display">{cert.issuer}</span>
                        <span className="text-[10px] text-text-muted font-mono block flex items-center gap-1 mt-0.5">
                          <Calendar size={10} /> {cert.date}
                        </span>
                      </div>
                    </div>

                    <span className={`text-[9px] font-mono font-extrabold px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 ${cert.textAccent}`}>
                      {cert.badge}
                    </span>
                  </div>

                  {/* Title & Instructor */}
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-text-title font-display group-hover:text-primary-light transition-colors">
                      {cert.title}
                    </h3>
                    <p className={`text-xs font-mono font-bold ${cert.textAccent} mt-0.5`}>
                      {cert.instructor}
                    </p>
                  </div>

                  <p className="text-xs text-text-muted leading-relaxed mb-4">
                    {cert.desc}
                  </p>

                  {/* Skills tags */}
                  <div className="space-y-1.5 border-t border-white/5 pt-3">
                    <span className="text-[9px] font-mono font-bold text-text-muted uppercase tracking-wider block">
                      Skills & Topics Mastered:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsGained.map((skill) => (
                        <span key={skill} className="px-2 py-0.5 rounded-md bg-white/[0.02] border border-white/5 text-[9px] text-text-muted font-mono font-bold">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 size={12} />
                    Verified Credential
                  </span>
                  <a
                    href={cert.verificationLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-primary-light hover:text-primary transition-colors font-bold text-[11px]"
                  >
                    <span>View Record</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </motion.div>
            ))}
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
