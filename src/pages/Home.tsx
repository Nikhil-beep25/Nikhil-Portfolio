import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, FileText, Mail, Layers, Code2, Server, Database, 
  Sparkles, Cpu, Smartphone, Zap, BookOpen, Users, GraduationCap, 
  Calendar, Lock, BarChart3, ArrowUpRight, Download, CheckCircle2, CreditCard 
} from 'lucide-react';
import { FaPython, FaReact, FaNodeJs, FaDocker, FaGithub } from 'react-icons/fa';
import { SiPostgresql, SiTailwindcss, SiTypescript, SiDjango, SiExpress, SiPrisma } from 'react-icons/si';

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

  const whatIDoItems = [
    {
      titleKey: "home.whatIDo.frontend.title",
      descKey: "home.whatIDo.frontend.description",
      icon: <Code2 size={24} className="text-cyan-400" />,
      colorClass: "from-cyan-500/20 to-transparent",
      borderColor: "hover:border-cyan-500/30",
    },
    {
      titleKey: "home.whatIDo.backend.title",
      descKey: "home.whatIDo.backend.description",
      icon: <Server size={24} className="text-sky-400" />,
      colorClass: "from-sky-500/20 to-transparent",
      borderColor: "hover:border-sky-500/30",
    },
    {
      titleKey: "home.whatIDo.database.title",
      descKey: "home.whatIDo.database.description",
      icon: <Database size={24} className="text-emerald-400" />,
      colorClass: "from-emerald-500/20 to-transparent",
      borderColor: "hover:border-emerald-500/30",
    },
    {
      titleKey: "home.whatIDo.fullstack.title",
      descKey: "home.whatIDo.fullstack.description",
      icon: <Layers size={24} className="text-purple-400" />,
      colorClass: "from-purple-500/20 to-transparent",
      borderColor: "hover:border-purple-500/30",
    },
  ];

  const techHighlights = [
    { nameKey: "home.tech.reactTs", icon: <FaReact className="text-[#61DAFB] text-3xl" />, extraIcon: <SiTypescript className="text-[#3178C6] text-xl" /> },
    { nameKey: "home.tech.nodeExpress", icon: <FaNodeJs className="text-[#339933] text-3xl" />, extraIcon: <SiExpress className="text-text-title text-xl" /> },
    { nameKey: "home.tech.pythonDjango", icon: <FaPython className="text-[#3776AB] text-3xl" />, extraIcon: <SiDjango className="text-[#092E20] text-xl" /> },
    { nameKey: "home.tech.postgresPrisma", icon: <SiPostgresql className="text-[#4169E1] text-3xl" />, extraIcon: <SiPrisma className="text-text-title text-xl" /> },
    { nameKey: "home.tech.dockerGit", icon: <FaDocker className="text-[#2496ED] text-3xl" />, extraIcon: <FaGithub className="text-text-title text-xl" /> },
    { nameKey: "home.tech.tailwindCss", icon: <SiTailwindcss className="text-[#38BDF8] text-3xl" /> },
  ];

  const whyMeItems = [
    {
      titleKey: "home.whyMe.cleanArch.title",
      descKey: "home.whyMe.cleanArch.description",
      icon: <Cpu size={24} className="text-cyan-400" />,
      num: "01",
    },
    {
      titleKey: "home.whyMe.responsive.title",
      descKey: "home.whyMe.responsive.description",
      icon: <Smartphone size={24} className="text-sky-400" />,
      num: "02",
    },
    {
      titleKey: "home.whyMe.performance.title",
      descKey: "home.whyMe.performance.description",
      icon: <Zap size={24} className="text-emerald-400" />,
      num: "03",
    },
    {
      titleKey: "home.whyMe.learning.title",
      descKey: "home.whyMe.learning.description",
      icon: <BookOpen size={24} className="text-purple-400" />,
      num: "04",
    },
  ];

  return (
    <motion.div
      className="relative bg-bg-darkest min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.004)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.004)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Background gradients */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[110px] pointer-events-none" />
        
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

          {/* Right Side: Profile Card */}
          <motion.div 
            className="lg:col-span-5 flex items-center justify-center relative min-h-[450px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute w-72 h-72 rounded-full bg-primary/20 blur-[65px] animate-pulse-slow pointer-events-none" />

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
              <div className="absolute inset-0 bg-bg-card/40 rounded-3xl backdrop-blur-xl -z-10" />

              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-1.5 bg-gradient-to-tr from-primary to-secondary shadow-[0_0_35px_rgba(6,182,212,0.25)] overflow-hidden">
                <motion.img 
                  src="/images/profile.jpg" 
                  alt="Nikhil Bhadauriya" 
                  className="w-full h-full rounded-full object-cover border border-white/10"
                  whileHover={{ scale: 1.08, rotate: 2 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>

              <div className="mt-6 text-center">
                <span className="text-xs font-bold font-mono tracking-widest text-primary-light uppercase bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                  Full Stack Developer
                </span>
              </div>
            </motion.div>

            {/* Floating tech badges */}
            <motion.div 
              className="absolute -top-4 left-6 p-3 bg-bg-card/85 backdrop-blur border border-border-dark hover:border-primary/50 rounded-xl text-yellow-500 shadow-lg cursor-pointer flex items-center justify-center"
              animate={floatAnimation(0)}
              whileHover={{ scale: 1.1 }}
              title="Python"
            >
              <FaPython size={24} />
            </motion.div>

            <motion.div 
              className="absolute top-12 -right-4 p-3 bg-bg-card/85 backdrop-blur border border-border-dark hover:border-primary/50 rounded-xl text-blue-400 shadow-lg cursor-pointer flex items-center justify-center"
              animate={floatAnimation(1.2)}
              whileHover={{ scale: 1.1 }}
              title="React"
            >
              <FaReact size={24} />
            </motion.div>

            <motion.div 
              className="absolute -bottom-6 left-12 p-3 bg-bg-card/85 backdrop-blur border border-border-dark hover:border-primary/50 rounded-xl text-green-500 shadow-lg cursor-pointer flex items-center justify-center"
              animate={floatAnimation(0.6)}
              whileHover={{ scale: 1.1 }}
              title="Node.js"
            >
              <FaNodeJs size={24} />
            </motion.div>

            <motion.div 
              className="absolute bottom-16 -right-6 p-3 bg-bg-card/85 backdrop-blur border border-border-dark hover:border-primary/50 rounded-xl text-blue-500 shadow-lg cursor-pointer flex items-center justify-center"
              animate={floatAnimation(1.8)}
              whileHover={{ scale: 1.1 }}
              title="PostgreSQL"
            >
              <SiPostgresql size={24} />
            </motion.div>

            <motion.div 
              className="absolute top-1/2 -left-12 -translate-y-1/2 bg-bg-card/85 backdrop-blur border border-border-dark p-2.5 rounded-lg text-text-muted flex items-center gap-1.5 text-xs font-bold cursor-pointer shadow-md hover:border-primary/30"
              animate={floatAnimation(2.4)}
              whileHover={{ scale: 1.05 }}
            >
              <FaDocker className="text-blue-500" size={14} />
              Docker
            </motion.div>

            <motion.div 
              className="absolute bottom-28 -left-8 bg-bg-card/85 backdrop-blur border border-border-dark p-2.5 rounded-lg text-text-muted flex items-center gap-1.5 text-xs font-bold cursor-pointer shadow-md hover:border-primary/30"
              animate={floatAnimation(1.5)}
              whileHover={{ scale: 1.05 }}
            >
              <SiTailwindcss className="text-teal-400" size={14} />
              Tailwind
            </motion.div>

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
      </section>

      {/* 1. Professional Summary Section */}
      <section className="py-24 relative z-10 border-t border-border-dark bg-bg-dark/20">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[90px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary-light font-display text-xs font-bold tracking-widest uppercase mb-3 bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full">
                {t('home.summary.badge')}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-text-title tracking-tight leading-tight">
                {t('home.summary.title')}
              </h2>
            </motion.div>
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-8 rounded-2xl glass border border-white/5 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <Sparkles size={120} className="text-primary" />
                </div>
                <p className="text-sm md:text-base text-text-muted leading-relaxed cursor-default">
                  {t('home.summary.content')}
                </p>
                <div className="mt-8 flex items-center justify-between border-t border-border-dark/50 pt-6">
                  <div className="flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  </div>
                  <Link 
                    to="/about" 
                    className="flex items-center gap-1.5 text-xs font-bold text-primary-light hover:text-primary transition-colors group"
                  >
                    {t('navbar.about')}
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. What I Do Section */}
      <section className="py-24 relative z-10 border-t border-border-dark">
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-light font-display text-xs font-bold tracking-widest uppercase mb-3 bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full">
              {t('home.whatIDo.badge')}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-text-title tracking-tight mt-4">
              {t('home.whatIDo.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatIDoItems.map((item, idx) => (
              <motion.div
                key={idx}
                className={`p-6 rounded-2xl glass-card border border-border-dark relative overflow-hidden flex flex-col h-full group ${item.borderColor}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className={`absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-b ${item.colorClass} opacity-30 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`} />
                <div className="p-3 bg-bg-darkest/60 border border-border-dark rounded-xl w-fit mb-5 z-10 group-hover:border-primary/30 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-text-title font-display mb-3 group-hover:text-primary-light transition-colors z-10">
                  {t(item.titleKey)}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed z-10 mt-auto">
                  {t(item.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Current Focus Section */}
      <section className="py-24 relative z-10 border-t border-border-dark bg-bg-dark/20">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-sky-500/5 rounded-full blur-[90px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side: Checklist */}
            <motion.div 
              className="lg:col-span-6 flex flex-col items-center lg:items-start"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary-light font-display text-xs font-bold tracking-widest uppercase mb-3 bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full">
                {t('home.focus.badge')}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-text-title tracking-tight leading-tight mb-8 text-center lg:text-left">
                {t('home.focus.title')}
              </h2>
              <div className="flex flex-col gap-4 w-full max-w-lg">
                {["item1", "item2", "item3", "item4", "item5"].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-xl bg-bg-card/45 border border-border-dark hover:border-cyan-500/25 transition-all duration-300 hover:bg-bg-card-hover group cursor-default"
                    whileHover={{ x: 6 }}
                  >
                    <div className="p-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/25 group-hover:bg-cyan-500 group-hover:text-bg-darkest transition-all duration-300">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-sm font-bold text-text-main group-hover:text-cyan-400 transition-colors">
                      {t(`home.focus.${item}`)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side: Developer Terminal */}
            <motion.div 
              className="lg:col-span-6 w-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-full rounded-2xl border border-white/10 bg-black/40 overflow-hidden shadow-2xl font-mono text-[11px] text-green-400/90 leading-relaxed cursor-default">
                {/* Terminal Header */}
                <div className="bg-bg-card border-b border-border-dark py-3 px-5 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <span className="text-text-muted text-[10px] font-bold select-none">nikhil@developer-env:~</span>
                  <div className="w-8" />
                </div>
                {/* Terminal Body */}
                <div className="p-6 flex flex-col gap-2 min-h-[220px] select-none text-left">
                  <div className="flex gap-2 text-text-muted">
                    <span className="text-cyan-400">$</span>
                    <span>npm run dev --project vidyasanchar-erp</span>
                  </div>
                  <div className="text-cyan-400 font-bold">&gt; [vite] hot module replacement active</div>
                  <div className="text-green-400">&gt; [postgres] pool connected to localhost:5432</div>
                  <div className="text-yellow-400">&gt; [redis] session cache initialized successfully</div>
                  <div className="text-blue-400">&gt; [ready] dashboard listening on port 5173</div>
                  <div className="flex items-center gap-1.5 text-text-title mt-4 border-t border-border-dark/50 pt-4">
                    <span className="text-cyan-400">$</span>
                    <span>git status</span>
                  </div>
                  <div className="text-text-muted">On branch main</div>
                  <div className="text-text-muted">Your branch is up to date with 'origin/main'.</div>
                  <div className="text-green-400">Changes to be committed: (none, workspace clean)</div>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-cyan-400">$</span>
                    <span className="w-2 h-4 bg-cyan-400 animate-pulse inline-block" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Technology Highlights Section */}
      <section className="py-24 relative z-10 border-t border-border-dark">
        <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[110px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-light font-display text-xs font-bold tracking-widest uppercase mb-3 bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full">
              {t('home.tech.badge')}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-text-title tracking-tight mt-4">
              {t('home.tech.title')}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techHighlights.map((tech, idx) => (
              <motion.div
                key={idx}
                className="p-6 rounded-2xl glass-card border border-border-dark flex flex-col items-center justify-center text-center group cursor-default relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(6,182,212,0.1), 0 8px 10px -6px rgba(6,182,212,0.1)"
                }}
              >
                <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="relative mb-4 flex items-center justify-center">
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {tech.icon}
                  </div>
                  {tech.extraIcon && (
                    <div className="absolute -bottom-2.5 -right-2.5 p-1 bg-bg-card/90 border border-border-dark rounded-md flex items-center justify-center scale-90 group-hover:scale-100 transition-transform">
                      {tech.extraIcon}
                    </div>
                  )}
                </div>
                <span className="text-xs font-bold text-text-muted group-hover:text-text-title transition-colors z-10 mt-2">
                  {t(tech.nameKey)}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Work With Me Section */}
      <section className="py-24 relative z-10 border-t border-border-dark bg-bg-dark/20">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[90px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-light font-display text-xs font-bold tracking-widest uppercase mb-3 bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full">
              {t('home.whyMe.badge')}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-text-title tracking-tight mt-4">
              {t('home.whyMe.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyMeItems.map((item, idx) => (
              <motion.div
                key={idx}
                className="p-8 rounded-2xl glass-card border border-border-dark relative flex flex-col h-full group hover:border-cyan-500/25"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
              >
                {/* Visual Number Label */}
                <div className="absolute top-4 right-6 text-6xl font-display font-extrabold text-white/5 group-hover:text-primary-light/5 select-none transition-colors duration-300">
                  {item.num}
                </div>
                
                {/* Icon wrapper */}
                <div className="p-3 bg-bg-darkest/60 border border-border-dark rounded-xl w-fit mb-6 z-10 group-hover:border-primary/20 transition-all">
                  {item.icon}
                </div>

                <h3 className="text-base font-bold text-text-title font-display mb-3 z-10 group-hover:text-primary-light transition-colors">
                  {t(item.titleKey)}
                </h3>
                
                <p className="text-xs text-text-muted leading-relaxed z-10 mt-auto select-none">
                  {t(item.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Featured Project Spotlight Section */}
      <section className="py-24 relative z-10 border-t border-border-dark">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-light font-display text-xs font-bold tracking-widest uppercase mb-3 bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full">
              {t('home.spotlight.badge')}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-text-title tracking-tight mt-4">
              {t('home.spotlight.title')}
            </h2>
            <div className="inline-flex items-center gap-2 mt-4 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-xs font-bold font-mono tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
              {t('home.spotlight.tagline')}
            </div>
          </div>
          
          <div className="p-8 md:p-12 rounded-3xl glass border border-white/5 relative overflow-hidden shadow-2xl">
            <div className="absolute -top-[150px] -right-[150px] w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Text Specs */}
              <motion.div 
                className="lg:col-span-6 flex flex-col text-center lg:text-left items-center lg:items-start"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-xs font-mono text-cyan-400 font-bold mb-2 uppercase tracking-widest">
                  Academic & Institutional Automations
                </span>
                <h3 className="text-2xl md:text-4xl font-bold font-display text-text-title mb-5">
                  VidyaSanchar ERP
                </h3>
                <p className="text-sm text-text-muted leading-relaxed mb-8 select-none">
                  {t('projects.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-auto w-full sm:w-auto">
                  <Link 
                    to="/projects" 
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-md active:scale-95 transition-all duration-300 group w-full sm:w-auto"
                  >
                    Explore Project Details
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                  <a 
                    href="https://github.com/Nikhil-beep25/Nikhil-Portfolio" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass hover:bg-bg-card-hover text-text-title border border-border-dark text-sm font-bold active:scale-95 transition-all duration-300 w-full sm:w-auto"
                  >
                    <FaGithub size={14} />
                    {t('projects.repo')}
                  </a>
                </div>
              </motion.div>

              {/* Grid of Key Features */}
              <motion.div 
                className="lg:col-span-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { key: "feature1", icon: <Users size={18} className="text-cyan-400" /> },
                    { key: "feature2", icon: <GraduationCap size={18} className="text-sky-400" /> },
                    { key: "feature3", icon: <Calendar size={18} className="text-emerald-400" /> },
                    { key: "feature4", icon: <CreditCard size={18} className="text-purple-400" /> },
                    { key: "feature5", icon: <Lock size={18} className="text-rose-400" /> },
                    { key: "feature6", icon: <BarChart3 size={18} className="text-yellow-400" /> },
                  ].map((feat, fidx) => (
                    <div 
                      key={fidx}
                      className="p-4 rounded-xl bg-bg-darkest/60 border border-border-dark hover:border-cyan-500/20 transition-all flex items-center gap-3.5 group cursor-default"
                    >
                      <div className="p-2 rounded-lg bg-bg-card border border-border-dark group-hover:bg-cyan-500/10 transition-colors">
                        {feat.icon}
                      </div>
                      <span className="text-xs font-bold text-text-main group-hover:text-cyan-400 transition-colors">
                        {t(`home.spotlight.${feat.key}`)}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Development Journey Timeline Section */}
      <section className="py-24 relative z-10 border-t border-border-dark bg-bg-dark/20">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[90px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-light font-display text-xs font-bold tracking-widest uppercase mb-3 bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full">
              {t('home.journey.badge')}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-text-title tracking-tight mt-4">
              {t('home.journey.title')}
            </h2>
          </div>
          
          <div className="max-w-2xl mx-auto relative pl-6 border-l border-cyan-500/25 py-2">
            {[
              { year: "2026", key: "startedOS" },
              { year: "2026", key: "builtPortfolio" },
              { year: "2026", key: "startedVS" },
              { year: "2026", key: "learningSaaS" }
            ].map((milestone, idx) => (
              <motion.div 
                key={idx}
                className="relative pl-8 pb-10 last:pb-0 text-left"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                {/* Glowing Dot on Left Timeline Bar */}
                <div className="absolute -left-[33px] top-2 w-4 h-4 rounded-full bg-bg-darkest border-2 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.6)] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping absolute" />
                  <div className="w-1 h-1 rounded-full bg-cyan-400" />
                </div>
                
                {/* Card Container */}
                <div className="p-5 rounded-2xl bg-bg-card/40 border border-border-dark hover:border-cyan-500/20 hover:bg-bg-card-hover transition-all duration-300 cursor-default">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-[10px] font-mono font-extrabold text-cyan-400 bg-cyan-500/10 border border-cyan-500/25 px-2 py-0.5 rounded-md">
                      {milestone.year}
                    </span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-text-title font-display">
                    {t(`home.journey.${milestone.key}`)}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Call To Action (CTA) Section */}
      <section className="py-28 relative z-10 border-t border-border-dark overflow-hidden">
        {/* Glow backdrop decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            className="p-10 md:p-16 rounded-3xl glass border border-white/10 text-center relative overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-50 pointer-events-none" />
            
            <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-[1.15] mb-6 text-gradient-premium tracking-tight cursor-default">
              {t('home.cta.title')}
            </h2>
            
            <p className="text-xs md:text-sm text-text-muted leading-relaxed max-w-2xl mx-auto mb-10 select-none">
              {t('home.cta.subtitle')}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <MotionLink
                to="/projects"
                className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-lg shadow-primary/25 active:scale-95 transition-all duration-300 w-full sm:w-auto group"
                whileHover={{ y: -3, boxShadow: "0 12px 30px rgba(6,182,212,0.4)" }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {t('home.cta.viewProjects')}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </MotionLink>

              <MotionLink
                to="/about"
                className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl glass hover:bg-bg-card-hover text-text-title border border-border-dark hover:border-primary/30 text-sm font-bold active:scale-95 transition-all duration-300 w-full sm:w-auto"
                whileHover={{ y: -3, boxShadow: "0 12px 30px rgba(6,182,212,0.15)" }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Download size={16} className="text-primary" />
                {t('home.cta.downloadResume')}
              </MotionLink>

              <MotionLink
                to="/contact"
                className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-text-muted hover:text-text-title text-sm font-bold transition-all duration-300 w-full sm:w-auto"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Mail size={16} className="text-cyan-400" />
                {t('home.cta.contactMe')}
              </MotionLink>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
