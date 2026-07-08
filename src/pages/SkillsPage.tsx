import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaPython, FaReact, FaNodeJs, FaDocker, FaGithub, FaLinux } from 'react-icons/fa';
import { 
  SiDjango, SiFastapi, SiFlask, SiTypescript, SiNextdotjs, 
  SiTailwindcss, SiExpress, SiPostgresql, SiMysql, SiMongodb, SiPrisma, SiVercel 
} from 'react-icons/si';
import { Terminal, Database, Server, Cpu, Globe, Braces } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
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
      title: "Python Core",
      icon: <Terminal size={20} className="text-yellow-500" />,
      bgColor: "bg-yellow-500/5",
      glowColor: "group-hover:shadow-yellow-500/5",
      skills: [
        { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
        { name: "Django", icon: <SiDjango className="text-[#092E20]" /> },
        { name: "FastAPI", icon: <SiFastapi className="text-[#009688]" /> },
        { name: "Flask", icon: <SiFlask className="text-text-title" /> },
      ]
    },
    {
      title: "Frontend Stack",
      icon: <Globe size={20} className="text-blue-500" />,
      bgColor: "bg-blue-500/5",
      glowColor: "group-hover:shadow-blue-500/5",
      skills: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-text-title" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
      ]
    },
    {
      title: "Backend Development",
      icon: <Server size={20} className="text-green-500" />,
      bgColor: "bg-green-500/5",
      glowColor: "group-hover:shadow-green-500/5",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="text-text-title" /> },
        { name: "REST APIs", icon: <Braces className="text-cyan-400" /> },
      ]
    },
    {
      title: "Databases & ORMs",
      icon: <Database size={20} className="text-[#4169E1]" />,
      bgColor: "bg-blue-600/5",
      glowColor: "group-hover:shadow-blue-600/5",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "Prisma ORM", icon: <SiPrisma className="text-[#2D3748]" /> },
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cpu size={20} className="text-teal-500" />,
      bgColor: "bg-teal-500/5",
      glowColor: "group-hover:shadow-teal-500/5",
      skills: [
        { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
        { name: "GitHub", icon: <FaGithub className="text-text-title" /> },
        { name: "Linux", icon: <FaLinux className="text-[#FCC624]" /> },
        { name: "Vercel / Render", icon: <SiVercel className="text-text-title" /> },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <motion.div 
      className="py-24 relative overflow-hidden bg-bg-darkest"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-primary-light font-display text-sm font-semibold tracking-widest uppercase mb-3">
            {t('skills.badge')}
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-text-title tracking-tight">
            {t('skills.title')}
          </h2>
          <p className="text-text-muted mt-4 max-w-lg mx-auto text-sm md:text-base">
            {t('skills.description')}
          </p>
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group flex flex-col p-6 rounded-2xl glass-card transition-all duration-300 hover:border-cyan-500/25 hover:shadow-[0_0_30px_rgba(6,182,212,0.08),0_0_60px_rgba(6,182,212,0.04)] shadow-sm"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2.5 pb-4 mb-5 border-b border-border-dark">
                <div className={`p-2 rounded-lg ${category.bgColor}`}>
                  {category.icon}
                </div>
                <h4 className="text-sm font-bold text-text-title font-display">
                  {category.title}
                </h4>
              </div>

              {/* Skills List */}
              <div className="flex flex-col gap-3 mt-auto">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    className="flex items-center gap-3 p-2 rounded-xl bg-bg-dark/40 border border-border-dark/30 hover:bg-cyan-500/5 hover:border-cyan-500/20 transition-all duration-200 group/item cursor-default shadow-sm"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-lg flex items-center justify-center transition-transform duration-300 group-hover/item:scale-110">
                      {skill.icon}
                    </span>
                    <span className="text-xs font-bold text-text-muted group-hover/item:text-cyan-400 transition-colors duration-200">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.div>
  );
}
