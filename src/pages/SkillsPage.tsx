import { motion } from 'framer-motion';
import { FaPython, FaReact, FaNodeJs, FaDocker, FaGithub, FaLinkedin } from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiExpress, SiPostgresql, SiPrisma, SiMongodb 
} from 'react-icons/si';
import { 
  Database, Server, Cpu, Globe, Sparkles, AlertCircle, Layers, 
  CheckCircle2, ArrowUpRight, ShieldCheck, Zap
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
}

interface SkillCategory {
  title: string;
  badge: string;
  icon: React.ReactNode;
  skills: Skill[];
  accentBorder: string;
  glowColor: string;
  accentText: string;
}

export default function SkillsPage() {

  const categories: SkillCategory[] = [
    {
      title: "Frontend Stack",
      badge: "CLIENT UI",
      icon: <Globe size={20} className="text-cyan-400" />,
      accentBorder: "border-cyan-500/25 hover:border-cyan-500/50",
      glowColor: "bg-cyan-500/10",
      accentText: "text-cyan-400",
      skills: [
        { name: "React 19", level: 92, icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "TypeScript", level: 88, icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: "Tailwind CSS", level: 95, icon: <SiTailwindcss className="text-[#38BDF8]" /> },
        { name: "Framer Motion", level: 85, icon: <Sparkles className="text-pink-400" /> },
        { name: "Vite", level: 90, icon: <Layers className="text-purple-400" /> },
      ]
    },
    {
      title: "Backend Core",
      badge: "SERVER APIS",
      icon: <Server size={20} className="text-emerald-400" />,
      accentBorder: "border-emerald-500/25 hover:border-emerald-500/50",
      glowColor: "bg-emerald-500/10",
      accentText: "text-emerald-400",
      skills: [
        { name: "Node.js", level: 88, icon: <FaNodeJs className="text-[#339933]" /> },
        { name: "Express.js", level: 90, icon: <SiExpress className="text-white" /> },
        { name: "Python", level: 88, icon: <FaPython className="text-[#3776AB]" /> },
        { name: "RESTful APIs", level: 92, icon: <Zap className="text-yellow-400" /> },
        { name: "JWT Auth", level: 86, icon: <ShieldCheck className="text-emerald-300" /> },
      ]
    },
    {
      title: "Databases & ORMs",
      badge: "PERSISTENCE",
      icon: <Database size={20} className="text-blue-400" />,
      accentBorder: "border-blue-500/25 hover:border-blue-500/50",
      glowColor: "bg-blue-500/10",
      accentText: "text-blue-400",
      skills: [
        { name: "PostgreSQL", level: 88, icon: <SiPostgresql className="text-[#4169E1]" /> },
        { name: "Prisma ORM", level: 90, icon: <SiPrisma className="text-white" /> },
        { name: "MongoDB", level: 86, icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "SQL Indexing", level: 84, icon: <Database className="text-blue-300" /> },
      ]
    },
    {
      title: "DevOps & Cloud",
      badge: "INFRASTRUCTURE",
      icon: <Cpu size={20} className="text-purple-400" />,
      accentBorder: "border-purple-500/25 hover:border-purple-500/50",
      glowColor: "bg-purple-500/10",
      accentText: "text-purple-400",
      skills: [
        { name: "Docker", level: 82, icon: <FaDocker className="text-[#2496ED]" /> },
        { name: "Git", level: 92, icon: <FaGithub className="text-white" /> },
        { name: "GitHub Actions", level: 84, icon: <FaGithub className="text-white" /> },
        { name: "Vercel Deploy", level: 90, icon: <Layers className="text-purple-300" /> },
      ]
    },
    {
      title: "AI Integrations",
      badge: "INTELLIGENCE",
      icon: <Sparkles size={20} className="text-pink-400" />,
      accentBorder: "border-pink-500/25 hover:border-pink-500/50",
      glowColor: "bg-pink-500/10",
      accentText: "text-pink-400",
      skills: [
        { name: "Gemini API", level: 86, icon: <Sparkles className="text-pink-400" /> },
        { name: "Vector Search", level: 80, icon: <Cpu className="text-purple-400" /> },
        { name: "Prompt Flow", level: 85, icon: <Zap className="text-yellow-400" /> },
        { name: "RAG Concepts", level: 82, icon: <Layers className="text-pink-300" /> },
      ]
    }
  ];

  const projectUsage = [
    { tech: "React & TypeScript", project: "VidyaSanchar ERP", usage: "Engineered client dashboards, state management, and role-based route guard structures." },
    { tech: "MERN Architecture", project: "CarVerse Platform", usage: "Integrated vehicle fleet booking, JWT authentication, MongoDB Atlas, and Razorpay workflow." },
    { tech: "PostgreSQL & Prisma", project: "VidyaSanchar ERP", usage: "Modeled normalized transaction ledgers, attendance tables, and created efficient query indexes." },
    { tech: "Docker & Deployment", project: "VidyaSanchar ERP", usage: "Containerized local environment database schemas to ensure seamless test replication." }
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
            Technical Stack & Competencies
          </motion.span>
          
          <motion.h1 
            className="text-3xl md:text-5xl font-extrabold font-display text-text-title tracking-tight mt-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-pink-500">Skills</span>
          </motion.h1>
          
          <motion.p 
            className="text-text-muted mt-4 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A curated inventory of programming languages, client architectures, backend frameworks, relational databases, and containerization tooling applied in production.
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
            <span className="text-xs font-mono font-bold text-cyan-400 block mb-1">Frontend UI</span>
            <p className="text-2xl md:text-3xl font-extrabold font-display text-text-title">React 19</p>
            <p className="text-[11px] text-text-muted mt-1 leading-tight">TypeScript & Tailwind CSS</p>
          </div>

          <div className="p-4 rounded-2xl glass-aurora border border-emerald-500/25 relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
            <span className="text-xs font-mono font-bold text-emerald-400 block mb-1">Backend Core</span>
            <p className="text-2xl md:text-3xl font-extrabold font-display text-text-title">Node + Py</p>
            <p className="text-[11px] text-text-muted mt-1 leading-tight">Express.js, REST & GenAI</p>
          </div>

          <div className="p-4 rounded-2xl glass-aurora border border-primary/25 relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-full blur-xl pointer-events-none" />
            <span className="text-xs font-mono font-bold text-primary-light block mb-1">Persistence</span>
            <p className="text-2xl md:text-3xl font-extrabold font-display text-text-title">SQL + NoSQL</p>
            <p className="text-[11px] text-text-muted mt-1 leading-tight">PostgreSQL, Prisma & MongoDB</p>
          </div>

          <div className="p-4 rounded-2xl glass-aurora border border-secondary/25 relative overflow-hidden group hover:border-secondary/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/10 rounded-full blur-xl pointer-events-none" />
            <span className="text-xs font-mono font-bold text-secondary-light block mb-1">DevOps & Cloud</span>
            <p className="text-2xl md:text-3xl font-extrabold font-display text-text-title">Docker</p>
            <p className="text-[11px] text-text-muted mt-1 leading-tight">Git, GitHub & Vercel</p>
          </div>
        </motion.div>

        {/* ── Dashboard Grid of Categories ── */}
        <div className="space-y-6 max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Layers size={18} className="text-primary-light" />
              <h2 className="text-lg md:text-xl font-bold font-display text-text-title">
                Category-Wise Technology Breakdown
              </h2>
            </div>
            <span className="text-[11px] font-mono text-primary-light font-bold bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
              5 Disciplines
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {categories.map((category, idx) => (
              <motion.div
                key={category.title}
                className={`flex flex-col justify-between p-6 rounded-3xl glass-aurora border ${category.accentBorder} min-h-[440px] text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative overflow-hidden group`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 ${category.glowColor} rounded-full blur-2xl pointer-events-none`} />

                {/* Upper Content Wrapper */}
                <div className="flex flex-col gap-5 w-full">
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-white/[0.03] border border-white/10">
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-text-title font-display">
                          {category.title}
                        </h3>
                        <span className="text-[9px] font-mono text-text-muted">Verified</span>
                      </div>
                    </div>
                  </div>

                  {/* Skills Progress Bars */}
                  <div className="flex flex-col gap-4">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex items-center justify-between text-[11px] font-bold text-text-muted font-mono">
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm shrink-0">{skill.icon}</span>
                            <span className="text-text-main text-[11px]">{skill.name}</span>
                          </div>
                          <span className={`text-[10px] font-mono font-bold ${category.accentText}`}>{skill.level}%</span>
                        </div>
                        {/* Bar container */}
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary via-secondary to-pink-500 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.15 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Badge */}
                <div className="mt-auto pt-4 border-t border-white/5">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full ${category.glowColor} border ${category.accentBorder} text-[9px] font-mono font-bold ${category.accentText} uppercase tracking-wider`}>
                    <CheckCircle2 size={10} />
                    {category.badge}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Real-World Project Integrations ── */}
        <div className="border-t border-white/5 pt-12 space-y-6 max-w-5xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertCircle size={18} className="text-primary-light" />
              <h2 className="text-lg md:text-xl font-bold font-display text-text-title">
                Real-World Production Integrations
              </h2>
            </div>
            <span className="text-[11px] font-mono text-primary-light font-bold bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
              Applied Code
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectUsage.map((item, idx) => (
              <motion.div
                key={idx}
                className="p-5 rounded-2xl glass-aurora border border-white/10 hover:border-primary/40 text-left space-y-3 relative overflow-hidden group transition-all duration-300 shadow-sm"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -3 }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-xl pointer-events-none" />
                <div className="flex justify-between items-center gap-2">
                  <span className="text-xs font-bold text-text-title font-mono bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-lg">
                    {item.tech}
                  </span>
                  <span className="text-[10px] text-primary-light font-mono font-bold bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                    {item.project}
                  </span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  {item.usage}
                </p>
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
