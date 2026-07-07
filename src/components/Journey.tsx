import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { BookOpen, Terminal, Code2, Layers, Briefcase, Cloud, Compass, Globe } from 'lucide-react';

interface Milestone {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll for vertical timeline bar height
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const milestones: Milestone[] = [
    {
      title: "Learning Python & CS Foundations",
      subtitle: "The Programming Spark",
      description: "Began journey by mastering core computer science principles, data structures, and object-oriented programming in Python. Built automation scripts, scrapers, and CLI logic.",
      icon: <Terminal size={18} className="text-yellow-400" />,
      tags: ["Python", "OOP", "Data Structures", "Algorithms"]
    },
    {
      title: "Backend Development",
      subtitle: "API Architectures",
      description: "Shifted focus to server-side web systems. Learned database normalization, indexing, and SQL queries. Mastered HTTP protocols, authentication (JWT), and API development using Django, Flask, and Express.js.",
      icon: <Code2 size={18} className="text-purple-400" />,
      tags: ["REST APIs", "SQL", "PostgreSQL", "Django", "Flask"]
    },
    {
      title: "Frontend Development",
      subtitle: "Interactive Interfaces",
      description: "Ventured into user interface engineering. Mastered semantic HTML, vanilla CSS layouts, modern responsive design, state management in React, and type-safety with TypeScript.",
      icon: <Globe size={18} className="text-blue-400" />,
      tags: ["React", "TypeScript", "Tailwind CSS", "State Management"]
    },
    {
      title: "Full-Stack Projects",
      subtitle: "Connecting the Dots",
      description: "Assembled frontend and backend knowledge. Started designing, developing, and deploying full-stack web applications, integrating authentication, relational databases, and styled components.",
      icon: <Layers size={18} className="text-[#38BDF8]" />,
      tags: ["MERN Stack", "Prisma", "JSON Web Tokens", "PostgreSQL"]
    },
    {
      title: "VidyaSanchar ERP",
      subtitle: "Scaling to Production",
      description: "Architected and built VidyaSanchar, a comprehensive School ERP application. Implemented role-based authorization, online fee processing, attendance logs, and real-time dashboard analytics.",
      icon: <Briefcase size={18} className="text-indigo-400" />,
      tags: ["Enterprise App", "Role-Based Access", "Express.js", "Vite"]
    },
    {
      title: "SaaS Development",
      subtitle: "Product Thinking & Monetization",
      description: "Transitioned from building custom apps to designing scalable Software-as-a-Service platforms. Focused on tenancy databases, usage-based rate limiting, API gateways, and stripe payments.",
      icon: <Compass size={18} className="text-emerald-400" />,
      tags: ["Multi-Tenancy", "API Rate Limiting", "SaaS Patterns", "AI Integrations"]
    },
    {
      title: "Cloud & DevOps",
      subtitle: "Deployment Automation",
      description: "Learned containerization using Docker. Set up automated continuous integration pipelines with GitHub Actions, containerizing React and Node environments and deploying to VPS instances.",
      icon: <Cloud size={18} className="text-cyan-400" />,
      tags: ["Docker", "VPS Hosting", "CI/CD Pipelines", "Nginx"]
    },
    {
      title: "Production Applications",
      subtitle: "Continuous Improvement & Monitoring",
      description: "Managing live production web architectures. Integrating logging layers, real-time error tracking (Sentry), query performance profiling, and SEO optimizations.",
      icon: <BookOpen size={18} className="text-rose-400" />,
      tags: ["Performance Profiling", "Lighthouse", "SEO", "SaaS Maintenance"]
    }
  ];

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-bg-dark border-t border-white/5">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h3 
            className="text-primary-light font-display text-sm font-semibold tracking-widest uppercase mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Evolution
          </motion.h3>
          <motion.h2 
            className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Development Journey
          </motion.h2>
          <motion.p
            className="text-zinc-400 mt-4 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A chronological timeline detailing my path from writing the first line of code to launching live web products.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          
          {/* Vertical central bar */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-white/5 -translate-x-1/2 pointer-events-none" />
          
          {/* Animated scrolling path */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-primary-light -translate-x-1/2 origin-top pointer-events-none"
            style={{ scaleY }}
          />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {milestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-stretch">
                  
                  {/* Left Side (Desktop spacer or item) */}
                  <div className="w-full md:w-1/2 flex justify-start md:justify-end md:pr-12 pl-12 md:pl-0">
                    {isEven && (
                      <motion.div 
                        className="glass-card p-6 rounded-2xl w-full text-left"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      >
                        <span className="text-[10px] font-bold text-primary-light uppercase tracking-wider block mb-1">
                          Phase 0{idx + 1} • {milestone.subtitle}
                        </span>
                        <h4 className="text-lg font-bold text-white font-display mb-3">
                          {milestone.title}
                        </h4>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                          {milestone.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {milestone.tags.map(t => (
                            <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-zinc-400 text-[9px] font-bold">
                              {t}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Central Node Indicator */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 flex items-center justify-center z-10 pointer-events-none">
                    <motion.div 
                      className="w-8 h-8 rounded-lg bg-bg-card border-2 border-white/10 flex items-center justify-center text-white shadow-md transition-colors group-hover:border-primary"
                      whileInView={{ 
                        borderColor: "rgba(124,58,237,0.5)",
                        scale: 1.05
                      }}
                      viewport={{ once: true }}
                    >
                      {milestone.icon}
                    </motion.div>
                  </div>

                  {/* Right Side (Desktop spacer or item) */}
                  <div className="w-full md:w-1/2 flex justify-start md:pl-12 pl-12 md:pr-0 mt-4 md:mt-0">
                    {!isEven && (
                      <motion.div 
                        className="glass-card p-6 rounded-2xl w-full text-left"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      >
                        <span className="text-[10px] font-bold text-primary-light uppercase tracking-wider block mb-1">
                          Phase 0{idx + 1} • {milestone.subtitle}
                        </span>
                        <h4 className="text-lg font-bold text-white font-display mb-3">
                          {milestone.title}
                        </h4>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                          {milestone.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {milestone.tags.map(t => (
                            <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-zinc-400 text-[9px] font-bold">
                              {t}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
