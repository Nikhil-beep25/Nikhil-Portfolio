import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

interface TimelineStep {
  step: string;
  title: string;
  subtitle: string;
  desc: string;
  tech?: string[];
  bullets?: string[];
  badge?: string;
  highlight?: boolean;
}

export default function JourneyPage() {
  const journeySteps: TimelineStep[] = [
    {
      step: "STEP 1",
      title: "Computer Science Fundamentals",
      subtitle: "Fundamentals & Basics",
      desc: "Started learning web development fundamentals and computer science basics.",
      tech: ["HTML", "CSS", "JavaScript", "Git", "Problem Solving"]
    },
    {
      step: "STEP 2",
      title: "Frontend Development",
      subtitle: "UI Engineering",
      desc: "Focused on modern frontend development and UI engineering.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Responsive Design", "Component Architecture"]
    },
    {
      step: "STEP 3",
      title: "Backend Development",
      subtitle: "Server & REST APIs",
      desc: "Expanded into backend development and server-side architecture.",
      tech: ["Node.js", "Express.js", "REST APIs", "Authentication", "Database Design"]
    },
    {
      step: "STEP 4",
      title: "Database & DevOps",
      subtitle: "Infrastructure & Scaling",
      desc: "Built scalable applications with proper database structures.",
      tech: ["PostgreSQL", "Prisma ORM", "GitHub", "Deployment", "Docker Basics"]
    },
    {
      step: "STEP 5",
      title: "VidyaSanchar ERP",
      subtitle: "🔥 CURRENT PROJECT",
      desc: "Building a full-stack school ERP with authentication, student management, attendance, fee management, and PostgreSQL integration.",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
      badge: "🔥 CURRENT PROJECT",
      highlight: true
    },
    {
      step: "STEP 6",
      title: "Future Goals",
      subtitle: "🚀 NEXT PHASE",
      desc: "",
      bullets: ["SaaS Products", "AI Integrations", "Open Source Contributions", "Production Scale Applications"],
      tech: [],
      badge: "🚀 NEXT PHASE"
    }
  ];

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

      <div className="max-w-[1280px] mx-auto px-6 relative z-10 space-y-24">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-bold text-primary-light uppercase tracking-wider">
            Full Stack Developer Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-text-title tracking-tight mt-4">
            2026 — Full Stack Development Journey
          </h2>
          <p className="text-text-muted mt-4 max-w-lg mx-auto text-xs md:text-sm leading-relaxed">
            A vertical roadmap showing the progression from web basics, frontend styling, backend systems, database management, and flagship ERP deployment.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-3xl mx-auto py-8">
          {/* Left aligned vertical roadmap line */}
          <div className="absolute left-[17px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent" />
          
          <div className="space-y-6">
            {journeySteps.map((step, idx) => {
              const isHighlight = step.highlight;
              return (
                <div key={idx} className="relative flex gap-6 pl-1.5 items-stretch">
                  
                  {/* Pulsing indicator node */}
                  <div className="flex flex-col items-center justify-center shrink-0 w-8">
                    <div className={`w-3.5 h-3.5 rounded-full bg-bg-darkest border-2 ${isHighlight ? 'border-primary shadow-[0_0_12px_rgba(139,92,246,0.6)]' : 'border-primary/45'} flex items-center justify-center relative z-10`}>
                      <span className={`absolute inset-0 rounded-full bg-primary/20 ${isHighlight ? 'animate-ping' : 'animate-pulse'}`} />
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-light" />
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <motion.div 
                    className={`w-full p-5 rounded-2xl border transition-all duration-300 text-left ${
                      isHighlight 
                        ? 'bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent border-primary/40 shadow-[0_0_20px_rgba(139,92,246,0.1)]'
                        : 'bg-white/[0.01] border border-white/5 hover:border-primary/20 hover:bg-white/[0.02]'
                    }`}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                  >
                     <div className="flex flex-wrap items-center gap-2.5 mb-2">
                      <span className="text-[9px] font-mono font-extrabold text-primary bg-primary/10 border border-primary/25 px-2 py-0.5 rounded">
                        {step.step}
                      </span>
                      {step.badge && (
                        <span className="text-[9px] font-mono font-extrabold text-emerald-400 bg-emerald-400/10 border border-emerald-400/25 px-2 py-0.5 rounded">
                          {step.badge}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-base font-bold text-text-title font-display mb-1">
                      {step.title}
                    </h3>
                    {step.subtitle && !step.badge && (
                      <h4 className="text-[10px] font-bold text-secondary-light font-mono mb-2 uppercase tracking-wide">
                        {step.subtitle}
                      </h4>
                    )}
                    
                    {step.desc && step.desc !== "" && (
                      <p className="text-xs text-text-muted leading-relaxed mb-3">
                        {step.desc}
                      </p>
                    )}

                    {/* Display bullets if any */}
                    {step.bullets && (
                      <ul className="list-disc list-inside text-xs text-text-muted space-y-1 mb-3 pl-1 font-mono">
                        {step.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}

                    {step.tech && step.tech.length > 0 && (
                      <div className="flex flex-wrap gap-1 pt-1">
                        {step.tech.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded bg-white/[0.02] border border-white/5 text-[9px] text-text-muted font-mono font-bold">{t}</span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* GitHub Profile Link */}
        <div className="border-t border-white/5 pt-16">
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
                    <span className="text-[10px] text-emerald-400 font-mono block mt-1 font-bold">View real repositories and contributions on GitHub ↗</span>
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
