import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaDocker, FaGithub, FaLinkedin 
} from 'react-icons/fa';
import { 
  SiTypescript, SiPostgresql, SiPrisma, SiTailwindcss 
} from 'react-icons/si';
import { 
  MapPin, Mail, Sparkles, ArrowUpRight, 
  Briefcase, Code2 
} from 'lucide-react';
import AnimatedRole from '../components/AnimatedRole';

export default function AboutPage() {
  // Typewriter effect
  const typewriterTexts = useMemo(() => [
    "Web App Development",
    "REST API Architectures",
    "Database Schemas & Rules",
    "Full-Stack SaaS Blueprints"
  ], []);
  const [typewriterText, setTypewriterText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const currentFullText = typewriterTexts[textIndex];
      if (!isDeleting) {
        setTypewriterText(currentFullText.slice(0, typewriterText.length + 1));
        setTypingSpeed(60);
        
        if (typewriterText === currentFullText) {
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        setTypewriterText(currentFullText.slice(0, typewriterText.length - 1));
        setTypingSpeed(30);
        
        if (typewriterText === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % typewriterTexts.length);
          setTypingSpeed(400);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typewriterText, isDeleting, textIndex, typingSpeed, typewriterTexts]);

  // Recruiter-friendly developer status cards
  const infoCards = [
    {
      title: "Current Focus",
      desc: "VidyaSanchar ERP",
      icon: "🚀",
      border: "border-primary/25 hover:border-primary/50",
      glow: "bg-primary/10"
    },
    {
      title: "Deep Dive Learning",
      desc: "AI Agents & Vector Search",
      icon: "🌱",
      border: "border-secondary/25 hover:border-secondary/50",
      glow: "bg-secondary/10"
    },
    {
      title: "Recent Activity",
      desc: "React & TypeScript Blueprints",
      icon: "💻",
      border: "border-emerald-500/25 hover:border-emerald-500/50",
      glow: "bg-emerald-500/10"
    },
    {
      title: "Location",
      desc: "Agra, Uttar Pradesh, India",
      icon: "📍",
      border: "border-amber-500/25 hover:border-amber-500/50",
      glow: "bg-amber-500/10"
    }
  ];

  // Floating tech stack around avatar
  const floatingBadges = [
    { name: "React", icon: <FaReact className="text-[#61DAFB]" />, pos: { top: '8%', left: '8%' }, x: [0, 8, -6, 0], y: [0, -12, 10, 0], duration: 6, delay: 0, glow: "rgba(97,218,251,0.25)" },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, pos: { top: '8%', right: '8%' }, x: [0, -10, 8, 0], y: [0, -8, 12, 0], duration: 7, delay: 0.5, glow: "rgba(49,120,198,0.25)" },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, pos: { bottom: '10%', left: '8%' }, x: [0, 6, -8, 0], y: [0, 10, -12, 0], duration: 8, delay: 0.2, glow: "rgba(51,153,51,0.25)" },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" />, pos: { bottom: '10%', right: '8%' }, x: [0, -8, 6, 0], y: [0, 8, -10, 0], duration: 6.5, delay: 1.0, glow: "rgba(65,105,225,0.25)" },
    { name: "Prisma", icon: <SiPrisma className="text-white" />, pos: { top: '48%', left: '-12%' }, x: [0, 10, -8, 0], y: [0, -6, 8, 0], duration: 7.5, delay: 0.8, glow: "rgba(255,255,255,0.15)" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" />, pos: { top: '48%', right: '-12%' }, x: [0, -6, 10, 0], y: [0, 12, -8, 0], duration: 8.5, delay: 1.2, glow: "rgba(56,189,248,0.25)" },
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

      <div className="max-w-[1280px] mx-auto px-6 relative z-10 space-y-16">

        {/* ── Section 1: Hero Split (Profile Copy & Floating Avatar) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Panel: Branding & Profile Copy */}
          <motion.div 
            className="lg:col-span-6 text-left space-y-5 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-fit">
              <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-bold text-primary-light uppercase tracking-wider inline-flex items-center gap-1.5 shadow-sm">
                <Sparkles size={13} className="text-primary-light" />
                Engineering Bio & Foundation
              </span>
            </div>
            
            {/* Page Main Heading */}
            <div className="relative pb-1">
              <motion.h1 
                className="text-3xl md:text-5xl font-extrabold font-display text-text-title tracking-tight mt-1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-pink-500">Me</span>
              </motion.h1>
            </div>

            {/* Subtitle/Role with rotating professional titles and typewriter */}
            <div className="space-y-1.5 text-left pb-1">
              <div className="relative h-[24px] md:h-[30px] overflow-hidden w-full">
                <AnimatedRole className="text-lg md:text-xl absolute left-0 top-0" />
              </div>

              {/* Typing Animation */}
              <p className="text-[10px] md:text-xs font-mono font-bold text-secondary-light tracking-widest uppercase h-5 flex items-center">
                {typewriterText}
                <span className="w-[2px] h-3.5 bg-primary-light ml-1 animate-pulse inline-block" />
              </p>
            </div>
            
            {/* Authentic Copy Block */}
            <div className="space-y-4 text-xs md:text-sm text-text-muted leading-relaxed">
              <p>
                Specializing in modern full-stack TypeScript, scalable React interfaces, event-driven Node.js microservices, Python backend architectures, and normalized relational databases.
              </p>
              <p>
                Whether architecting database schemas for institutional management platforms like <strong className="text-text-title">VidyaSanchar ERP</strong>, delivering the production-grade <strong className="text-text-title">CarVerse</strong> car rental platform, or contributing during my apprenticeships at DUCAT India and S O Infotech, I focus on clean code, type safety, and real-world impact.
              </p>
            </div>

            {/* Quick Contact & Details */}
            <div className="flex flex-wrap gap-3 pt-2 text-xs font-mono text-text-muted">
              <div className="flex items-center gap-2 glass-aurora border border-white/5 px-3.5 py-2 rounded-xl">
                <MapPin size={14} className="text-secondary" />
                <span>Agra & Noida, UP, India</span>
              </div>
              <div className="flex items-center gap-2 glass-aurora border border-white/5 px-3.5 py-2 rounded-xl">
                <Mail size={14} className="text-primary" />
                <a href="mailto:nikhilbhadauriya2500@gmail.com" className="hover:text-text-title transition-colors">
                  nikhilbhadauriya2500@gmail.com
                </a>
              </div>
            </div>

            {/* Action buttons (Resume CTA) */}
            <div className="flex flex-wrap gap-3 pt-3">
              <a
                href="/resume/Nikhil_Bhadauriya_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span>View Resume</span>
                <ArrowUpRight size={14} />
              </a>
              <a
                href="/resume/Nikhil_Bhadauriya_Resume.pdf"
                download="Nikhil_Bhadauriya_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-xl glass-aurora hover:bg-white/5 text-text-title border border-white/10 hover:border-primary/40 text-xs font-bold active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span>Download PDF</span>
              </a>
            </div>

          </motion.div>

          {/* Right Panel: Styled profile with floating badges */}
          <motion.div 
            className="lg:col-span-6 flex justify-center relative min-h-[380px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="relative w-72 h-72 md:w-[380px] md:h-[380px] flex items-center justify-center">
              
              {/* Profile Image Frame */}
              <div className="relative w-52 h-52 md:w-68 md:h-68 rounded-full p-1.5 bg-gradient-to-tr from-primary via-secondary to-pink-500 shadow-[0_0_50px_rgba(139,92,246,0.2)] flex-shrink-0 z-10 overflow-hidden">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-bg-darkest relative bg-bg-dark flex items-center justify-center">
                  <img 
                    src="/images/profile.jpg" 
                    alt="Nikhil Bhadauriya Profile" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238B5CF6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='12' cy='7' r='4'/%3E%3C/svg%3E";
                    }}
                  />
                </div>
              </div>

              {/* Floating Tech Badges */}
              {floatingBadges.map((badge) => (
                <motion.div
                  key={badge.name}
                  className="absolute z-20"
                  style={badge.pos}
                  animate={{
                    x: badge.x,
                    y: badge.y
                  }}
                  transition={{
                    duration: badge.duration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: badge.delay
                  }}
                >
                  <motion.div
                    className="p-2 px-3 rounded-xl glass-aurora border border-white/10 shadow-xl flex items-center gap-1.5 cursor-default hover:border-primary/50 transition-colors"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: `0 0 20px ${badge.glow}`,
                    }}
                  >
                    <span className="text-sm flex items-center justify-center">{badge.icon}</span>
                    <span className="text-[9px] font-bold font-mono text-text-muted">{badge.name}</span>
                  </motion.div>
                </motion.div>
              ))}

            </div>
          </motion.div>
        </div>

        {/* ── Section 2: Developer Status Cards (Journey Glass Aurora) ── */}
        <div className="border-t border-white/5 pt-12 space-y-6 max-w-5xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2 size={18} className="text-primary-light" />
              <h2 className="text-lg md:text-xl font-bold font-display text-text-title">
                Current Technical Focus & Status
              </h2>
            </div>
            <span className="text-[11px] font-mono text-primary-light font-bold bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
              Active Updates
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {infoCards.map((card, idx) => (
              <motion.div
                key={card.title}
                className={`p-5 rounded-2xl glass-aurora border ${card.border} text-left flex flex-col justify-between h-36 relative overflow-hidden group transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div className={`absolute top-0 right-0 w-20 h-20 ${card.glow} rounded-full blur-xl pointer-events-none`} />
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-text-muted font-mono uppercase tracking-wider">
                    {card.title}
                  </span>
                  <span className="text-xl select-none">{card.icon}</span>
                </div>
                <div className="text-sm font-extrabold text-text-title font-display mt-3">
                  {card.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Section 3: Tech Stack Grid ── */}
        <div className="border-t border-white/5 pt-12 space-y-6 max-w-5xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-secondary-light" />
              <h2 className="text-lg md:text-xl font-bold font-display text-text-title">
                Primary Development Tools & Stacks
              </h2>
            </div>
            <span className="text-[11px] font-mono text-secondary-light font-bold bg-secondary/10 px-2.5 py-1 rounded-full border border-secondary/20">
              Core Stacks
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "React", icon: <FaReact className="text-[#61DAFB]" />, desc: "Component architecture & dynamic state" },
              { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, desc: "Type safety, interfaces & schemas" },
              { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, desc: "REST microservices & event loops" },
              { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" />, desc: "Relational modeling & query optimization" },
              { name: "Prisma ORM", icon: <SiPrisma className="text-white" />, desc: "Type-safe database ORM migrations" },
              { name: "Docker", icon: <FaDocker className="text-[#2496ED]" />, desc: "Containerized deployment pipelines" },
              { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" />, desc: "High-contrast utility styling" },
              { name: "Python", icon: <FaPython className="text-[#3776AB]" />, desc: "Backend algorithms & GenAI pipelines" }
            ].map((tech) => (
              <div 
                key={tech.name} 
                className="p-4 rounded-2xl glass-aurora border border-white/5 flex items-center gap-3.5 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 text-left group"
              >
                <span className="text-2xl shrink-0 group-hover:scale-110 transition-transform">{tech.icon}</span>
                <div>
                  <h4 className="text-xs font-bold text-text-title font-display">{tech.name}</h4>
                  <p className="text-[10px] text-text-muted mt-0.5 leading-snug">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Section 4: Experience Timeline (JourneyPage Roadmap Line) ── */}
        <div className="border-t border-white/5 pt-12 space-y-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Briefcase size={18} className="text-emerald-400" />
              <h2 className="text-lg md:text-xl font-bold font-display text-text-title">
                Career Experience & Academic Milestones
              </h2>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 font-bold bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/20">
              Verified Timeline
            </span>
          </div>

          <div className="relative py-4">
            <div className="absolute left-[17px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent" />
            <div className="space-y-6 text-left">
              {[
                { 
                  year: "Mar 2026 – Aug 2026", 
                  title: "DUCAT India — MERN Full Stack Apprenticeship", 
                  role: "Apprenticeship — Full Stack Architecture",
                  desc: "Engineered production MERN stack features, JWT authentication flows, React Context state management, and Git agile workflows.",
                  color: "border-emerald-500/30 text-emerald-400",
                  badge: "⚡ APPRENTICESHIP"
                },
                { 
                  year: "Dec 2025 – Jul 2026", 
                  title: "S O Infotech (P) Ltd. — Full Stack Developer Trainee", 
                  role: "Developer Trainee (Python & GenAI)",
                  desc: "Engineered full-stack platforms with Python, Generative AI capabilities, payment integrations, and PostgreSQL query optimization.",
                  color: "border-primary/30 text-primary-light",
                  badge: "🏢 INDUSTRY EXPERIENCE"
                },
                { 
                  year: "2024 – 2027", 
                  title: "Dr. Bhimrao Ambedkar University (DBRAU), Agra", 
                  role: "Bachelor of Computer Applications (BCA) — Computer Science",
                  desc: "Building strong foundations in algorithms, data structures, relational schemas, operating systems, and computer network protocols.",
                  color: "border-amber-500/30 text-amber-400",
                  badge: "🎓 HIGHER EDUCATION"
                },
                { 
                  year: "2026 – Future", 
                  title: "VidyaSanchar ERP, CarVerse & Advanced AI Systems", 
                  role: "Platform Architecture & Open-Source Engineering",
                  desc: "Architecting enterprise SaaS prototypes and high-concurrency platforms with vector embeddings, autonomous agents, and cloud containerization.",
                  color: "border-purple-500/30 text-purple-400",
                  badge: "🚀 ENGINEERING HORIZONS"
                }
              ].map((step, sidx) => (
                <div key={sidx} className="relative flex gap-6 pl-1.5 items-start">
                  <div className="flex flex-col items-center justify-start pt-3 shrink-0 w-8">
                    <div className="w-4 h-4 rounded-full bg-bg-darkest border-2 border-primary-light shadow-[0_0_12px_rgba(6,182,212,0.5)] flex items-center justify-center relative z-10">
                      <span className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-light" />
                    </div>
                  </div>

                  <div className="w-full p-5 rounded-2xl glass-aurora border border-white/10 hover:border-primary/40 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono font-bold text-primary-light bg-primary/10 border border-primary/25 px-2.5 py-0.5 rounded">
                        {step.year}
                      </span>
                      <span className="text-[9px] font-mono font-extrabold px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-text-muted">
                        {step.badge}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-text-title font-display">{step.title}</h3>
                    <p className="text-xs font-bold font-mono text-secondary-light mt-0.5">{step.role}</p>
                    <p className="text-xs text-text-muted mt-2 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Section 5: GitHub & Professional Profiles CTA Banner (Journey Standard) ── */}
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
