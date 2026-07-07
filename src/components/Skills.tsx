import { motion } from 'framer-motion';
import { FaPython, FaReact, FaNodeJs, FaDocker, FaGithub, FaLinux } from 'react-icons/fa';
import { 
  SiDjango, SiFastapi, SiFlask, SiTypescript, SiNextdotjs, 
  SiTailwindcss, SiExpress, SiPostgresql, SiMysql, SiMongodb, SiPrisma, SiVercel 
} from 'react-icons/si';
import { Terminal, Database, Server, Cpu, Globe, Braces } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level?: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: string;
  bgColor: string;
  glowColor: string;
}

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      title: "Python Core",
      icon: <Terminal size={20} className="text-yellow-500" />,
      color: "border-yellow-500/20 text-yellow-400",
      bgColor: "bg-yellow-500/5",
      glowColor: "group-hover:shadow-yellow-500/10",
      skills: [
        { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
        { name: "Django", icon: <SiDjango className="text-[#092E20]" /> },
        { name: "FastAPI", icon: <SiFastapi className="text-[#009688]" /> },
        { name: "Flask", icon: <SiFlask className="text-white" /> },
      ]
    },
    {
      title: "Frontend Stack",
      icon: <Globe size={20} className="text-blue-500" />,
      color: "border-blue-500/20 text-blue-400",
      bgColor: "bg-blue-500/5",
      glowColor: "group-hover:shadow-blue-500/10",
      skills: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
      ]
    },
    {
      title: "Backend Development",
      icon: <Server size={20} className="text-green-500" />,
      color: "border-green-500/20 text-green-400",
      bgColor: "bg-green-500/5",
      glowColor: "group-hover:shadow-green-500/10",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="text-white" /> },
        { name: "REST APIs", icon: <Braces className="text-purple-400" /> },
      ]
    },
    {
      title: "Databases & ORMs",
      icon: <Database size={20} className="text-[#4169E1]" />,
      color: "border-blue-600/20 text-blue-400",
      bgColor: "bg-blue-600/5",
      glowColor: "group-hover:shadow-blue-600/10",
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
      color: "border-teal-500/20 text-teal-400",
      bgColor: "bg-teal-500/5",
      glowColor: "group-hover:shadow-teal-500/10",
      skills: [
        { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
        { name: "Linux", icon: <FaLinux className="text-[#FCC624]" /> },
        { name: "Vercel / Render", icon: <SiVercel className="text-white" /> },
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
    <section id="skills" className="py-24 relative overflow-hidden bg-bg-darkest border-t border-white/5">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-primary/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h3 
            className="text-primary-light font-display text-sm font-semibold tracking-widest uppercase mb-3"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Tech Stack
          </motion.h3>
          <motion.h2 
            className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Full-Stack Tooling & Expertise
          </motion.h2>
          <motion.p
            className="text-zinc-400 mt-4 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A curated list of languages, frameworks, databases, and deployment platforms I use to build scalable products.
          </motion.p>
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
              className={`group flex flex-col p-6 rounded-2xl bg-bg-card/40 border border-white/5 hover:bg-bg-card/85 transition-all duration-300 hover:border-primary/20 ${category.glowColor} hover:shadow-lg`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-2.5 pb-4 mb-5 border-b border-white/5">
                <div className={`p-2 rounded-lg ${category.bgColor}`}>
                  {category.icon}
                </div>
                <h4 className="text-base font-bold text-white font-display">
                  {category.title}
                </h4>
              </div>

              {/* Skills List */}
              <div className="flex flex-col gap-3.5 mt-auto">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    className="flex items-center gap-3 p-2 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-200 group/item cursor-default"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-xl flex items-center justify-center transition-transform duration-300 group-hover/item:scale-110">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-semibold text-zinc-300 group-hover/item:text-white transition-colors duration-200">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
