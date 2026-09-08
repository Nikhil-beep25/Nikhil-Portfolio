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
      step: "2024 – 2027",
      title: "Computer Applications & CS Core",
      subtitle: "BCA — Dr. Bhimrao Ambedkar University, Agra",
      desc: "Pursuing a Bachelor of Computer Applications (BCA). Building deep foundational competence in computer science, data structures, algorithms, object-oriented programming, and relational database systems.",
      tech: ["C / C++", "Python", "JavaScript", "DBMS", "Data Structures", "OOP"]
    },
    {
      step: "Dec 2025 – Jul 2026",
      title: "S O Infotech (P) Ltd.",
      subtitle: "Full Stack Developer Trainee (Python & GenAI) — Noida, India",
      desc: "Engineered an E-commerce Website using Python Full Stack architecture integrated with Generative AI capabilities. Designed RESTful APIs, connected secure payment gateways, and optimized database queries for sub-second page performance in a cross-functional engineering team.",
      badge: "🏢 INDUSTRY EXPERIENCE",
      tech: ["Python", "REST APIs", "Generative AI", "Payment Gateways", "PostgreSQL", "Git"]
    },
    {
      step: "Mar 2026 – Aug 2026",
      title: "DUCAT India",
      subtitle: "Apprenticeship — MERN Full Stack Development",
      desc: "Completed an intensive engineering apprenticeship focused on modern MERN architecture (MongoDB, Express.js, React.js, Node.js). Implemented robust JWT authentication flows, state management with React Context API and hooks, responsive component systems, and production debugging.",
      badge: "⚡ MERN SPECIALIZATION",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Context API"]
    },
    {
      step: "Mid 2026",
      title: "CarVerse — Car Rental Ecosystem",
      subtitle: "Full-Stack Production System",
      desc: "Architected, built, and launched CarVerse, a modern vehicle rental management platform. Integrated fleet catalog filtering, dynamic booking engine with Razorpay, customer accounts, and real-time role-based admin controls.",
      badge: "🚗 LIVE PRODUCTION",
      tech: ["React.js", "Node.js", "Express", "MongoDB Atlas", "Tailwind CSS", "Razorpay"]
    },
    {
      step: "Current Focus",
      title: "VidyaSanchar ERP Platform",
      subtitle: "School Management System Prototype",
      desc: "Developing a full-stack educational portal simulating institutional automation with role-based access control, attendance logging, student dashboards, and a fee ledger.",
      badge: "🔥 ACTIVE PROJECT",
      highlight: true,
      tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma ORM"]
    },
    {
      step: "Next Phase",
      title: "Future Goals & Scale",
      subtitle: "🚀 CLOUD & ARCHITECTURE",
      desc: "Scaling distributed applications, exploring microservice architectures, integrating autonomous AI agents, and deploying production SaaS applications.",
      bullets: [
        "Production SaaS Platforms",
        "Autonomous AI Agent Integrations",
        "Docker Containerization & CI/CD",
        "High-Throughput Distributed Backends"
      ],
      badge: "🚀 NEXT HORIZON",
      tech: ["Docker", "Kubernetes Basics", "Vector DBs", "Cloud Infrastructure"]
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
            Career & Engineering Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-text-title tracking-tight mt-4">
            Professional Development Journey
          </h2>
          <p className="text-text-muted mt-4 max-w-lg mx-auto text-xs md:text-sm leading-relaxed">
            A chronological roadmap detailing my computer applications education, full-stack industry traineeship at S O Infotech, MERN apprenticeship at DUCAT India, and production systems engineering.
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
