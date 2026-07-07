import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Server, Database, Cloud } from 'lucide-react';

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const duration = 1.5; // in seconds
      const steps = 30; // steps of animation
      const stepDuration = (duration * 1000) / steps;
      const increment = Math.ceil(end / steps);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  const stats = [
    { label: 'Years Developing', value: 5, suffix: '+' },
    { label: 'Projects Completed', value: 15, suffix: '+' },
    { label: 'Technologies Used', value: 20, suffix: '+' },
    { label: 'GitHub Repositories', value: 30, suffix: '+' },
  ];

  const coreFocus = [
    {
      icon: <Code2 size={24} className="text-purple-400" />,
      title: "Python Development",
      description: "Writing clean, optimized, and testable code in Python. Proficient in frameworks like Django, FastAPI, and Flask for web application backends and automation scripts."
    },
    {
      icon: <Server size={24} className="text-blue-400" />,
      title: "Full-Stack Applications",
      description: "Building end-to-end apps using MERN (MongoDB, Express, React, Node) stack. Integrating state-of-the-art state management and UI designs with Framer Motion."
    },
    {
      icon: <Database size={24} className="text-teal-400" />,
      title: "Backend Architecture",
      description: "Designing structured relational & non-relational database schemas using PostgreSQL, MongoDB, MySQL, and Prisma ORM with optimized query indexing."
    },
    {
      icon: <Cloud size={24} className="text-indigo-400" />,
      title: "Cloud & DevOps",
      description: "Deploying production apps using Docker, Linux, and cloud provider solutions like Vercel, Render, and AWS, maintaining reliable CI/CD pipelines."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-bg-dark border-t border-white/5">
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[90px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h3 
            className="text-primary-light font-display text-sm font-semibold tracking-widest uppercase mb-3"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h3>
          <motion.h2 
            className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Passion For Engineering & SaaS Development
          </motion.h2>
        </div>

        {/* Introduction & Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Intro Description */}
          <motion.div 
            className="lg:col-span-6 text-zinc-300"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-2xl font-bold text-white mb-6 font-display">
              Hi, I'm Nikhil. I build modern digital products.
            </h4>
            <div className="space-y-6 text-base leading-relaxed text-zinc-400">
              <p>
                My journey as a software developer is driven by a deep curiosity to learn how systems work at scale. I specialize in building complete products—starting from robust database design and API structures, all the way to responsive frontend interfaces.
              </p>
              <p>
                As a <strong className="text-white font-semibold">Python Full-Stack Developer</strong> and <strong className="text-white font-semibold">SaaS Builder</strong>, I thrive on writing backend code that is modular and performant. Whether it's crafting high-concurrency APIs in FastAPI, modeling data in PostgreSQL, or optimizing React components, I ensure user experiences are smooth and load in milliseconds.
              </p>
              <p>
                I prioritize clean architecture, automated workflows, and DevOps consistency. Using tools like Docker, Git, and various cloud platforms, I bridge the gap between development environments and stable production deployments.
              </p>
            </div>

            {/* Statistics Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-center">
                  <span className="text-3xl md:text-4xl font-extrabold font-display text-white mb-1">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Core Focus Areas */}
          <motion.div 
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {coreFocus.map((focus, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-bg-card/40 border border-white/5 hover:border-primary/20 hover:bg-bg-card/70 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="p-3 w-fit rounded-xl bg-white/5 mb-5 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                  {focus.icon}
                </div>
                <h5 className="text-lg font-bold text-white mb-2 font-display group-hover:text-primary-light transition-colors duration-300">
                  {focus.title}
                </h5>
                <p className="text-sm text-zinc-400 leading-relaxed mt-auto">
                  {focus.description}
                </p>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
