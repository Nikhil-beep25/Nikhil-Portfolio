import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Mail, Layers } from 'lucide-react';
import { FaPython, FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiPostgresql, SiTailwindcss } from 'react-icons/si';

const MotionLink = motion(Link);

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
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[110px] pointer-events-none" />
      
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
            className="text-5xl md:text-7xl font-extrabold font-display leading-[1.1] mb-6 text-text-title tracking-tight cursor-default select-none inline-block origin-left group/title"
            whileHover={{ scale: 1.02, filter: "drop-shadow(0 0 15px rgba(6,182,212,0.25))" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.span
              className="inline-block mr-3"
              initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {t('hero.titleName')}
            </motion.span>
            <motion.span
              className="text-gradient-premium inline-block group-hover/title:brightness-125 transition-all duration-300"
              initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            >
              {t('hero.titleLastName')}
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2 
            className="text-lg md:text-xl font-bold text-text-muted font-sans tracking-wide mb-6 flex flex-wrap justify-center lg:justify-start gap-x-3 divide-x divide-border-dark"
          >
            <motion.span 
              className="text-primary inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            >
              {t('hero.subtitle1')}
            </motion.span>
            <motion.span 
              className="pl-3 text-secondary inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
            >
              {t('hero.subtitle2')}
            </motion.span>
            <motion.span 
              className="pl-3 text-text-muted inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
            >
              {t('hero.subtitle3')}
            </motion.span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-sm md:text-base text-text-muted font-normal leading-relaxed max-w-xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          >
            {t('hero.description')}
          </motion.p>

          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.6, ease: "easeOut" }}
          >
            <MotionLink
              to="/projects"
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-lg shadow-primary/25 active:scale-95 transition-all duration-300 group"
              whileHover={{ y: -3, boxShadow: "0 12px 30px rgba(6,182,212,0.4)" }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {t('hero.viewProjects')}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </MotionLink>

            <MotionLink
              to="/about"
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl glass hover:bg-bg-card-hover text-text-title border border-border-dark hover:border-primary/30 text-sm font-bold active:scale-95 transition-all duration-300"
              whileHover={{ y: -3, boxShadow: "0 12px 30px rgba(6,182,212,0.15)" }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <FileText size={16} className="text-primary" />
              {t('hero.getResume')}
            </MotionLink>

            <MotionLink
              to="/contact"
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-text-muted hover:text-text-title text-sm font-bold transition-all duration-300"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Mail size={16} />
              {t('hero.contact')}
            </MotionLink>
          </motion.div>
        </motion.div>

        {/* Right Side: Professional Profile Card */}
        <motion.div 
          className="lg:col-span-5 flex items-center justify-center relative min-h-[450px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Outer glow background element */}
          <div className="absolute w-72 h-72 rounded-full bg-primary/20 blur-[65px] animate-pulse-slow pointer-events-none" />

          {/* Glassmorphism Frame containing the circular profile card */}
          <motion.div 
            className="relative p-6 rounded-3xl glass border border-white/10 shadow-2xl flex flex-col items-center justify-center max-w-[320px] w-full"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            {/* Soft backdrop blur decoration */}
            <div className="absolute inset-0 bg-bg-card/40 rounded-3xl backdrop-blur-xl -z-10" />

            {/* Profile Image Wrapper */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-1.5 bg-gradient-to-tr from-primary to-secondary shadow-[0_0_35px_rgba(6,182,212,0.25)] overflow-hidden">
              <motion.img 
                src="/images/profile.jpg" 
                alt="Nikhil Bhadauriya" 
                className="w-full h-full rounded-full object-cover border border-white/10"
                whileHover={{ scale: 1.08, rotate: 2 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>

            {/* Tech Name / Short Label */}
            <div className="mt-6 text-center">
              <span className="text-xs font-bold font-mono tracking-widest text-primary-light uppercase bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                SaaS Architect
              </span>
            </div>
          </motion.div>

          {/* Floating tech badges with independent floating speeds */}
          {/* Python */}
          <motion.div 
            className="absolute -top-4 left-6 p-3 bg-bg-card/85 backdrop-blur border border-border-dark hover:border-primary/50 rounded-xl text-yellow-500 shadow-lg cursor-pointer flex items-center justify-center"
            animate={floatAnimation(0)}
            whileHover={{ scale: 1.1 }}
            title="Python"
          >
            <FaPython size={24} />
          </motion.div>

          {/* React */}
          <motion.div 
            className="absolute top-12 -right-4 p-3 bg-bg-card/85 backdrop-blur border border-border-dark hover:border-primary/50 rounded-xl text-blue-400 shadow-lg cursor-pointer flex items-center justify-center"
            animate={floatAnimation(1.2)}
            whileHover={{ scale: 1.1 }}
            title="React"
          >
            <FaReact size={24} />
          </motion.div>

          {/* Node.js */}
          <motion.div 
            className="absolute -bottom-6 left-12 p-3 bg-bg-card/85 backdrop-blur border border-border-dark hover:border-primary/50 rounded-xl text-green-500 shadow-lg cursor-pointer flex items-center justify-center"
            animate={floatAnimation(0.6)}
            whileHover={{ scale: 1.1 }}
            title="Node.js"
          >
            <FaNodeJs size={24} />
          </motion.div>

          {/* PostgreSQL */}
          <motion.div 
            className="absolute bottom-16 -right-6 p-3 bg-bg-card/85 backdrop-blur border border-border-dark hover:border-primary/50 rounded-xl text-blue-500 shadow-lg cursor-pointer flex items-center justify-center"
            animate={floatAnimation(1.8)}
            whileHover={{ scale: 1.1 }}
            title="PostgreSQL"
          >
            <SiPostgresql size={24} />
          </motion.div>

          {/* Docker */}
          <motion.div 
            className="absolute top-1/2 -left-12 -translate-y-1/2 bg-bg-card/85 backdrop-blur border border-border-dark p-2.5 rounded-lg text-text-muted flex items-center gap-1.5 text-xs font-bold cursor-pointer shadow-md hover:border-primary/30"
            animate={floatAnimation(2.4)}
            whileHover={{ scale: 1.05 }}
          >
            <FaDocker className="text-blue-500" size={14} />
            Docker
          </motion.div>

          {/* Tailwind */}
          <motion.div 
            className="absolute bottom-28 -left-8 bg-bg-card/85 backdrop-blur border border-border-dark p-2.5 rounded-lg text-text-muted flex items-center gap-1.5 text-xs font-bold cursor-pointer shadow-md hover:border-primary/30"
            animate={floatAnimation(1.5)}
            whileHover={{ scale: 1.05 }}
          >
            <SiTailwindcss className="text-teal-400" size={14} />
            Tailwind
          </motion.div>

          {/* SaaS */}
          <motion.div 
            className="absolute -top-8 right-16 bg-bg-card/85 backdrop-blur border border-border-dark p-2.5 rounded-lg text-text-muted flex items-center gap-1.5 text-xs font-bold cursor-pointer shadow-md hover:border-primary/30"
            animate={floatAnimation(3.0)}
            whileHover={{ scale: 1.05 }}
          >
            <Layers className="text-primary-light" size={14} />
            SaaS
          </motion.div>
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
