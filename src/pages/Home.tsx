import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Mail, Layers } from 'lucide-react';
import { FaPython, FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiPostgresql, SiTailwindcss } from 'react-icons/si';

export default function Home() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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

  return (
    <motion.div
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[110px] pointer-events-none" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.006)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.006)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

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
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary-light text-xs font-bold mb-6 tracking-wide uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            {t('hero.badge')}
          </motion.div>

          {/* Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold font-display leading-[1.1] mb-6 text-text-title tracking-tight"
          >
            {t('hero.titleName')} <span className="text-gradient-premium">{t('hero.titleLastName')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2 
            variants={itemVariants}
            className="text-lg md:text-xl font-bold text-text-muted font-sans tracking-wide mb-6 flex flex-wrap justify-center lg:justify-start gap-x-3 divide-x divide-border-dark"
          >
            <span className="text-cyan-400">{t('hero.subtitle1')}</span>
            <span className="pl-3 text-violet-400">{t('hero.subtitle2')}</span>
            <span className="pl-3 text-text-muted">{t('hero.subtitle3')}</span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-sm md:text-base text-text-muted font-normal leading-relaxed max-w-xl mb-10"
          >
            {t('hero.description')}
          </motion.p>

          {/* Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link
              to="/projects"
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white text-sm font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-105 active:scale-95 transition-all duration-300 group"
            >
              {t('hero.viewProjects')}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/about"
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl glass hover:bg-bg-card-hover text-text-title border border-border-dark hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] text-sm font-bold hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <FileText size={16} className="text-cyan-400" />
              {t('hero.getResume')}
            </Link>

            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-text-muted hover:text-text-title text-sm font-bold transition-all duration-300"
            >
              <Mail size={16} />
              {t('hero.contact')}
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: Premium Orbital/Stack Graphic */}
        <motion.div 
          className="lg:col-span-5 flex items-center justify-center relative min-h-[400px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          {/* Main Orbital Frame */}
          <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
            
            {/* Center Core */}
            <motion.div 
              className="absolute z-10 w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center text-white shadow-[0_0_50px_rgba(6,182,212,0.3)] border border-white/20"
              animate={{
                boxShadow: ["0 0 40px rgba(6,182,212,0.25)", "0 0 60px rgba(124, 58, 237, 0.35)", "0 0 40px rgba(6,182,212,0.25)"]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="font-display font-black text-4xl">N</span>
            </motion.div>

            {/* Orbit Circle 1 */}
            <div className="absolute w-[240px] h-[240px] md:w-[280px] md:h-[280px] rounded-full border border-border-dark pointer-events-none" />
            <motion.div
              className="absolute w-[240px] h-[240px] md:w-[280px] md:h-[280px]"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            >
              {/* Python Badge */}
              <div 
                className="absolute -top-5 left-1/2 -translate-x-1/2 p-3 bg-bg-card hover:bg-bg-card-hover border border-border-dark hover:border-cyan-500/50 rounded-xl text-yellow-500 shadow-lg cursor-pointer transition-colors duration-300"
                style={{ transform: 'rotate(-360deg)' }}
                title="Python"
              >
                <FaPython size={22} />
              </div>
              
              {/* React Badge */}
              <div 
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 p-3 bg-bg-card hover:bg-bg-card-hover border border-border-dark hover:border-cyan-500/50 rounded-xl text-blue-400 shadow-lg cursor-pointer transition-colors duration-300"
                style={{ transform: 'rotate(-360deg)' }}
                title="React"
              >
                <FaReact size={22} />
              </div>
            </motion.div>

            {/* Orbit Circle 2 */}
            <div className="absolute w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full border border-dashed border-border-dark pointer-events-none" />
            <motion.div
              className="absolute w-[320px] h-[320px] md:w-[380px] md:h-[380px]"
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            >
              {/* Node.js Badge */}
              <div 
                className="absolute top-1/2 -left-5 -translate-y-1/2 p-3 bg-bg-card hover:bg-bg-card-hover border border-border-dark hover:border-cyan-500/50 rounded-xl text-green-500 shadow-lg cursor-pointer transition-colors duration-300"
                title="Node.js"
              >
                <FaNodeJs size={22} />
              </div>
              
              {/* PostgreSQL Badge */}
              <div 
                className="absolute top-1/2 -right-5 -translate-y-1/2 p-3 bg-bg-card hover:bg-bg-card-hover border border-border-dark hover:border-cyan-500/50 rounded-xl text-blue-500 shadow-lg cursor-pointer transition-colors duration-300"
                title="PostgreSQL"
              >
                <SiPostgresql size={22} />
              </div>
            </motion.div>

            {/* Orbit Circle 3 / Floating Outermost Tech Indicators */}
            <motion.div 
              className="absolute top-4 right-4 bg-bg-card hover:bg-bg-card-hover border border-border-dark p-2.5 rounded-lg text-text-muted flex items-center gap-1.5 text-xs font-semibold cursor-pointer shadow-md"
              animate={floatAnimation(0.5)}
            >
              <FaDocker className="text-blue-500" size={13} />
              Docker
            </motion.div>

            <motion.div 
              className="absolute bottom-6 left-6 bg-bg-card hover:bg-bg-card-hover border border-border-dark p-2.5 rounded-lg text-text-muted flex items-center gap-1.5 text-xs font-semibold cursor-pointer shadow-md"
              animate={floatAnimation(1.5)}
            >
              <SiTailwindcss className="text-teal-400" size={13} />
              Tailwind
            </motion.div>

            <motion.div 
              className="absolute top-1/2 -translate-y-12 right-12 bg-bg-card/90 hover:bg-bg-card-hover border border-border-dark p-2.5 rounded-lg text-text-muted flex items-center gap-1.5 text-xs font-semibold cursor-pointer shadow-md"
              animate={floatAnimation(2.2)}
            >
              <Layers className="text-violet-400" size={13} />
              SaaS
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-50">
        <motion.div 
          className="w-5 h-8 border border-text-muted rounded-full flex justify-center p-1.5"
          animate={{
            y: [0, 6, 0]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-1 h-1.5 rounded-full bg-cyan-400" />
        </motion.div>
      </div>
    </motion.div>
  );
}
