import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaPython, FaReact, FaNodeJs, FaDocker, FaGithub } from 'react-icons/fa';
import { 
  SiDjango, SiTypescript, SiTailwindcss, SiExpress, SiPostgresql, SiPrisma 
} from 'react-icons/si';
import { Database, Server, Cpu, Globe, Sparkles, AlertCircle, Layers } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  bgColor: string;
  glowColor: string;
}

export default function SkillsPage() {
  const { t } = useTranslation();

  const categories: SkillCategory[] = [
    {
      title: t('skills.frontend'),
      icon: <Globe size={20} className="text-blue-500" />,
      bgColor: "bg-blue-500/5",
      glowColor: "group-hover:border-blue-500/20",
      skills: [
        { name: "React", level: 92, icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "TypeScript", level: 85, icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: "Tailwind CSS", level: 95, icon: <SiTailwindcss className="text-[#38BDF8]" /> },
        { name: "Framer Motion", level: 82, icon: <Sparkles className="text-indigo-400" /> },
        { name: "Vite", level: 88, icon: <Layers className="text-purple-400" /> },
      ]
    },
    {
      title: t('skills.backend'),
      icon: <Server size={20} className="text-green-500" />,
      bgColor: "bg-green-500/5",
      glowColor: "group-hover:border-green-500/20",
      skills: [
        { name: "Node.js", level: 86, icon: <FaNodeJs className="text-[#339933]" /> },
        { name: "Express", level: 90, icon: <SiExpress className="text-white" /> },
        { name: "Python", level: 90, icon: <FaPython className="text-[#3776AB]" /> },
        { name: "Django", level: 82, icon: <SiDjango className="text-[#092E20]" /> },
      ]
    },
    {
      title: t('skills.database'),
      icon: <Database size={20} className="text-[#4169E1]" />,
      bgColor: "bg-blue-600/5",
      glowColor: "group-hover:border-blue-600/20",
      skills: [
        { name: "PostgreSQL", level: 88, icon: <SiPostgresql className="text-[#4169E1]" /> },
        { name: "Prisma ORM", level: 90, icon: <SiPrisma className="text-white" /> },
      ]
    },
    {
      title: t('skills.devops'),
      icon: <Cpu size={20} className="text-teal-500" />,
      bgColor: "bg-teal-500/5",
      glowColor: "group-hover:border-teal-500/20",
      skills: [
        { name: "Docker", level: 82, icon: <FaDocker className="text-[#2496ED]" /> },
        { name: "Git", level: 92, icon: <FaGithub className="text-white" /> },
        { name: "GitHub", level: 90, icon: <FaGithub className="text-white" /> },
      ]
    },
    {
      title: t('skills.ai'),
      icon: <Sparkles size={20} className="text-emerald-400" />,
      bgColor: "bg-emerald-500/5",
      glowColor: "group-hover:border-emerald-500/20",
      skills: [
        { name: "Gemini API", level: 85, icon: <Sparkles className="text-emerald-400" /> },
        { name: "Vector Search", level: 80, icon: <Cpu className="text-emerald-500" /> },
      ]
    }
  ];

  const projectUsage = [
    { tech: "React & TypeScript", project: "VidyaSanchar ERP", usageKey: "skills.usage.reactTs" },
    { tech: "React & Tailwind CSS", project: "Personal Portfolio", usageKey: "skills.usage.reactTailwind" },
    { tech: "PostgreSQL & Prisma", project: "VidyaSanchar ERP", usageKey: "skills.usage.postgresPrisma" },
    { tech: "Docker Containerization", project: "VidyaSanchar ERP", usageKey: "skills.usage.docker" }
  ];

  return (
    <motion.div 
      className="py-24 relative overflow-hidden bg-bg-darkest min-h-screen text-text-main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1450px] mx-auto px-6 relative z-10 space-y-24">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-bold text-primary-light uppercase tracking-wider">
            {t('skills.badge')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-text-title tracking-tight mt-4">
            {t('skills.title')}
          </h2>
          <p className="text-text-muted mt-4 max-w-lg mx-auto text-xs md:text-sm leading-relaxed">
            {t('skills.description')}
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              className="group flex flex-col justify-between p-6 rounded-2xl glass-aurora border border-white/5 h-[500px] min-h-[500px] text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-primary/40"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              {/* Upper Content Wrapper */}
              <div className="flex flex-col gap-6 w-full">
                {/* Category Header */}
                <div className="flex items-center gap-2.5 pb-4 border-b border-white/5">
                  <div className={`p-2 rounded-lg bg-white/[0.02] border border-white/5 text-primary-light`}>
                    {category.icon}
                  </div>
                  <h4 className="text-xs font-bold text-text-title font-display uppercase tracking-wider">
                    {category.title}
                  </h4>
                </div>

                {/* Skills Progress Bars - Starts at same vertical offset */}
                <div className="flex flex-col gap-4.5">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] font-bold text-text-muted font-mono">
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm shrink-0">{skill.icon}</span>
                          <span>{skill.name}</span>
                        </div>
                        <span className="text-[10px] text-primary-light">{skill.level}%</span>
                      </div>
                      {/* Bar container */}
                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
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

              {/* Footer Badge - Pushed to bottom */}
              <div className="mt-auto pt-4 border-t border-white/5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-[9px] font-mono font-bold text-primary-light uppercase tracking-wider">
                  ✓ {t('skills.verifiedStack')}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real Project Usage */}
        <div className="border-t border-white/5 pt-16">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center max-w-xl mx-auto">
              <h3 className="text-xl font-bold font-display text-text-title flex items-center justify-center gap-2">
                <AlertCircle className="text-primary-light" size={20} />
                {t('skills.realWorldTitle')}
              </h3>
              <p className="text-xs text-text-muted mt-2">
                {t('skills.realWorldSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectUsage.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-5.5 rounded-2xl glass-aurora border border-white/5 text-left space-y-3 hover:border-primary/20 shadow-sm"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-text-title font-mono bg-white/[0.02] border border-white/5 px-2.5 py-0.5 rounded">
                      {item.tech}
                    </span>
                    <span className="text-[10px] text-primary-light font-mono font-bold">{item.project}</span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {t(item.usageKey)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
