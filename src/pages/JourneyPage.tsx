import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub } from 'react-icons/fa';

interface TimelineStep {
  stepKey: string;
  titleKey: string;
  subtitleKey: string;
  descKey: string;
  tech?: string[];
  bulletsKeys?: string[];
  badgeKey?: string;
  highlight?: boolean;
}

export default function JourneyPage() {
  const { t } = useTranslation();

  const journeySteps: TimelineStep[] = [
    {
      stepKey: "journey.step1.step",
      titleKey: "journey.step1.title",
      subtitleKey: "journey.step1.subtitle",
      descKey: "journey.step1.desc",
      tech: ["HTML", "CSS", "JavaScript", "Git", "Problem Solving"]
    },
    {
      stepKey: "journey.step2.step",
      titleKey: "journey.step2.title",
      subtitleKey: "journey.step2.subtitle",
      descKey: "journey.step2.desc",
      tech: ["React", "TypeScript", "Tailwind CSS", "Responsive Design", "Component Architecture"]
    },
    {
      stepKey: "journey.step3.step",
      titleKey: "journey.step3.title",
      subtitleKey: "journey.step3.subtitle",
      descKey: "journey.step3.desc",
      tech: ["Node.js", "Express.js", "REST APIs", "Authentication", "Database Design"]
    },
    {
      stepKey: "journey.step4.step",
      titleKey: "journey.step4.title",
      subtitleKey: "journey.step4.subtitle",
      descKey: "journey.step4.desc",
      tech: ["PostgreSQL", "Prisma ORM", "GitHub", "Deployment", "Docker Basics"]
    },
    {
      stepKey: "journey.step5.step",
      titleKey: "journey.step5.title",
      subtitleKey: "journey.step5.subtitle",
      descKey: "journey.step5.desc",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
      badgeKey: "journey.step5.badge",
      highlight: true
    },
    {
      stepKey: "journey.step6.step",
      titleKey: "journey.step6.title",
      subtitleKey: "journey.step6.subtitle",
      descKey: "journey.step6.desc",
      bulletsKeys: ["journey.step6.bullet1", "journey.step6.bullet2", "journey.step6.bullet3", "journey.step6.bullet4"],
      tech: [],
      badgeKey: "journey.step6.badge"
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
            {t('journey.badgeTitle') || "Full Stack Developer Journey"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-text-title tracking-tight mt-4">
            {t('journey.mainTitle') || "2026 — Full Stack Development Journey"}
          </h2>
          <p className="text-text-muted mt-4 max-w-lg mx-auto text-xs md:text-sm leading-relaxed">
            {t('journey.mainDesc') || "A vertical roadmap showing the progression from web basics, frontend styling, backend systems, database management, and flagship ERP deployment."}
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
                        {t(step.stepKey)}
                      </span>
                      {step.badgeKey && (
                        <span className="text-[9px] font-mono font-extrabold text-emerald-400 bg-emerald-400/10 border border-emerald-400/25 px-2 py-0.5 rounded">
                          {t(step.badgeKey)}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-base font-bold text-text-title font-display mb-1">
                      {t(step.titleKey)}
                    </h3>
                    {step.subtitleKey && !step.badgeKey && (
                      <h4 className="text-[10px] font-bold text-secondary-light font-mono mb-2 uppercase tracking-wide">
                        {t(step.subtitleKey)}
                      </h4>
                    )}
                    
                    {step.descKey && t(step.descKey) !== "" && (
                      <p className="text-xs text-text-muted leading-relaxed mb-3">
                        {t(step.descKey)}
                      </p>
                    )}

                    {/* Display bullets if any */}
                    {step.bulletsKeys && (
                      <ul className="list-disc list-inside text-xs text-text-muted space-y-1 mb-3 pl-1 font-mono">
                        {step.bulletsKeys.map((bKey) => (
                          <li key={bKey}>{t(bKey)}</li>
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
                    <span className="text-[10px] text-emerald-400 font-mono block mt-1 font-bold">{t('journey.githubText')}</span>
                  </div>
                </div>
                <a
                  href="https://github.com/Nikhil-beep25"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all duration-300 flex-shrink-0"
                >
                  <FaGithub size={14} />
                  {t('journey.githubButton')}
                </a>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
