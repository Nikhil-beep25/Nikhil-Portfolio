import { motion } from 'framer-motion';
import { ArrowRight, FileText, Mail, Layers } from 'lucide-react';
import { FaPython, FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiPostgresql, SiTailwindcss } from 'react-icons/si';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.21, 0.45, 0.32, 0.9] as [number, number, number, number] },
    },
  };

  const floatAnimation = (delay: number) => ({
    y: [0, -12, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const,
      delay: delay,
    },
  });

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-bg-darkest"
    >
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left: Text Content */}
        <motion.div 
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary-light text-xs font-semibold mb-6 tracking-wide uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for SaaS & Full-Stack Projects
          </motion.div>

          {/* Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold font-display leading-[1.1] mb-6 text-white tracking-tight"
          >
            Nikhil <span className="text-gradient-purple">Bhadauriya</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2 
            variants={itemVariants}
            className="text-lg md:text-2xl font-semibold text-zinc-300 font-sans tracking-wide mb-6 flex flex-wrap justify-center lg:justify-start gap-x-3 divide-x divide-zinc-700"
          >
            <span className="text-primary-light">Python Full-Stack</span>
            <span className="pl-3 text-purple-300">MERN Developer</span>
            <span className="pl-3 text-zinc-400">SaaS Builder</span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-zinc-400 font-normal leading-relaxed max-w-xl mb-10"
          >
            I build scalable web applications, SaaS products, robust APIs, automation systems, and modern digital experiences using Python, React, Node.js, PostgreSQL, and cloud technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, 'projects')}
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 group"
            >
              View Projects
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#resume"
              onClick={(e) => handleScrollTo(e, 'resume')}
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 text-base font-semibold transition-all duration-300"
            >
              <FileText size={18} />
              Get Resume
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-zinc-400 hover:text-white text-base font-semibold transition-all duration-300"
            >
              <Mail size={18} />
              Contact
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Premium Orbital/Stack Graphic */}
        <motion.div 
          className="lg:col-span-5 flex items-center justify-center relative min-h-[400px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
        >
          {/* Main Orbital Frame */}
          <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
            
            {/* Center Core */}
            <motion.div 
              className="absolute z-10 w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-purple-500 flex items-center justify-center text-white shadow-[0_0_50px_rgba(124,58,237,0.5)] border border-white/20"
              animate={{
                boxShadow: ["0 0 40px rgba(124,58,237,0.4)", "0 0 60px rgba(124,58,237,0.7)", "0 0 40px rgba(124,58,237,0.4)"]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="font-display font-black text-4xl">NB</span>
            </motion.div>

            {/* Orbit Circle 1 */}
            <div className="absolute w-[240px] h-[240px] md:w-[280px] md:h-[280px] rounded-full border border-white/5 pointer-events-none" />
            <motion.div
              className="absolute w-[240px] h-[240px] md:w-[280px] md:h-[280px]"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            >
              {/* Python Badge */}
              <div 
                className="absolute -top-6 left-1/2 -translate-x-1/2 p-3.5 bg-bg-card hover:bg-zinc-800 border border-white/10 hover:border-primary/50 rounded-xl text-yellow-500 shadow-lg cursor-pointer transition-colors duration-300"
                style={{ transform: 'rotate(-360deg)' }}
                title="Python"
              >
                <FaPython size={24} />
              </div>
              
              {/* React Badge */}
              <div 
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 p-3.5 bg-bg-card hover:bg-zinc-800 border border-white/10 hover:border-primary/50 rounded-xl text-blue-400 shadow-lg cursor-pointer transition-colors duration-300"
                style={{ transform: 'rotate(-360deg)' }}
                title="React"
              >
                <FaReact size={24} />
              </div>
            </motion.div>

            {/* Orbit Circle 2 */}
            <div className="absolute w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full border border-dashed border-white/5 pointer-events-none" />
            <motion.div
              className="absolute w-[320px] h-[320px] md:w-[380px] md:h-[380px]"
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            >
              {/* Node.js Badge */}
              <div 
                className="absolute top-1/2 -left-6 -translate-y-1/2 p-3.5 bg-bg-card hover:bg-zinc-800 border border-white/10 hover:border-primary/50 rounded-xl text-green-500 shadow-lg cursor-pointer transition-colors duration-300"
                title="Node.js"
              >
                <FaNodeJs size={24} />
              </div>
              
              {/* PostgreSQL Badge */}
              <div 
                className="absolute top-1/2 -right-6 -translate-y-1/2 p-3.5 bg-bg-card hover:bg-zinc-800 border border-white/10 hover:border-primary/50 rounded-xl text-blue-500 shadow-lg cursor-pointer transition-colors duration-300"
                title="PostgreSQL"
              >
                <SiPostgresql size={24} />
              </div>
            </motion.div>

            {/* Orbit Circle 3 / Floating Outermost Tech Indicators */}
            <motion.div 
              className="absolute top-4 right-4 bg-bg-card hover:bg-zinc-800 border border-white/10 p-2.5 rounded-lg text-zinc-400 flex items-center gap-1.5 text-xs font-semibold cursor-pointer shadow-md"
              animate={floatAnimation(0.5)}
            >
              <FaDocker className="text-blue-500" size={14} />
              Docker
            </motion.div>

            <motion.div 
              className="absolute bottom-6 left-6 bg-bg-card hover:bg-zinc-800 border border-white/10 p-2.5 rounded-lg text-zinc-400 flex items-center gap-1.5 text-xs font-semibold cursor-pointer shadow-md"
              animate={floatAnimation(1.5)}
            >
              <SiTailwindcss className="text-teal-400" size={14} />
              Tailwind
            </motion.div>

            <motion.div 
              className="absolute top-1/2 -translate-y-12 right-12 bg-bg-card/90 hover:bg-zinc-800 border border-white/10 p-2.5 rounded-lg text-zinc-400 flex items-center gap-1.5 text-xs font-semibold cursor-pointer shadow-md"
              animate={floatAnimation(2.2)}
            >
              <Layers className="text-purple-400" size={14} />
              SaaS
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-55">
        <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Scroll Down</span>
        <motion.div 
          className="w-5 h-8 border border-zinc-500 rounded-full flex justify-center p-1.5"
          animate={{
            y: [0, 6, 0]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-1 h-1.5 rounded-full bg-primary-light" />
        </motion.div>
      </div>
    </section>
  );
}
