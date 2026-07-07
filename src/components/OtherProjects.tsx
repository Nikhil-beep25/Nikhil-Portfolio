import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, Server, Database } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  category: 'python-saas' | 'mern-stack';
  categoryLabel: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  visualGradient: string;
  icon: React.ReactNode;
}

export default function OtherProjects() {
  const [filter, setFilter] = useState<'all' | 'python-saas' | 'mern-stack'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "DocuSynthesizer – AI SaaS Platform",
      category: "python-saas",
      categoryLabel: "Python / AI SaaS",
      description: "A developer-focused API and client interface designed for automated document semantic analysis, dynamic PDF rendering, and AI summarization.",
      tech: ["FastAPI", "Next.js", "PostgreSQL", "OpenAI", "Celery"],
      githubUrl: "https://github.com/nikhilbhadauriya",
      liveUrl: "https://github.com/nikhilbhadauriya",
      visualGradient: "from-amber-600 via-orange-600 to-rose-600",
      icon: <Code2 size={24} className="text-orange-400" />
    },
    {
      id: 2,
      title: "PyMetrics – Performance SaaS Agent",
      category: "python-saas",
      categoryLabel: "Python / DevOps",
      description: "Real-time application monitoring agent for Python web frameworks. Tracks query execution time, memory leaks, and CPU overhead via WebSockets.",
      tech: ["Python", "React", "InfluxDB", "WebSockets", "Docker"],
      githubUrl: "https://github.com/nikhilbhadauriya",
      liveUrl: "https://github.com/nikhilbhadauriya",
      visualGradient: "from-emerald-600 via-teal-600 to-cyan-600",
      icon: <Server size={24} className="text-teal-400" />
    },
    {
      id: 3,
      title: "TaskFlow – Team Workspaces Board",
      category: "mern-stack",
      categoryLabel: "MERN Stack / Full-Stack",
      description: "A collaborative Kanban workspace for engineering teams, featuring drag-and-drop mechanics, real-time board updates, and robust audit logging.",
      tech: ["React", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS"],
      githubUrl: "https://github.com/nikhilbhadauriya",
      liveUrl: "https://github.com/nikhilbhadauriya",
      visualGradient: "from-blue-600 via-indigo-600 to-purple-600",
      icon: <Database size={24} className="text-indigo-400" />
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="py-20 relative overflow-hidden bg-bg-darkest border-t border-white/5">
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h3 className="text-primary-light font-display text-sm font-semibold tracking-widest uppercase mb-3">
              Showcase
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight">
              Other SaaS & Full-Stack Projects
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white/5 border border-white/5 rounded-xl self-start md:self-end">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'python-saas', label: 'Python / SaaS' },
              { id: 'mern-stack', label: 'MERN / Full-Stack' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`relative px-4 py-2 text-xs font-semibold rounded-lg transition-colors duration-200 ${
                  filter === tab.id ? 'text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {filter === tab.id && (
                  <motion.span
                    layoutId="projectActiveTab"
                    className="absolute inset-0 bg-primary/20 border border-primary/30 rounded-lg"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col rounded-2xl border border-white/5 bg-bg-card/30 overflow-hidden hover:border-primary/20 hover:bg-bg-card/60 transition-all duration-300 shadow-md hover:shadow-primary/5"
              >
                {/* Premium gradient header representing project visually */}
                <div className={`h-40 bg-gradient-to-tr ${project.visualGradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] pointer-events-none" />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:10px_10px]" />
                  
                  {/* Category label */}
                  <span className="relative z-10 px-2.5 py-0.5 rounded bg-black/30 border border-white/10 text-white text-[10px] font-bold tracking-wide uppercase self-start">
                    {project.categoryLabel}
                  </span>

                  {/* Icon */}
                  <div className="relative z-10 w-10 h-10 rounded-xl bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/10 shadow-lg">
                    {project.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-lg font-bold text-white font-display mb-2 group-hover:text-primary-light transition-colors duration-200">
                    {project.title}
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mt-auto mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-zinc-400 text-[10px] font-bold border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors duration-200"
                    >
                      <FaGithub size={14} />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
