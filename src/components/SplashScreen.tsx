import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiPrisma, SiTailwindcss } from 'react-icons/si';

const ROLES = [
  "Full Stack Developer",
  "Python Backend Developer",
  "React & TypeScript Developer",
  "Building Modern Digital Experiences"
];

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const [loadingMsg, setLoadingMsg] = useState("Initializing Portfolio...");

  // Clock mechanism for smooth 3.5s intro sequence (60 FPS)
  // 2.5s loading progress + 1.0s welcome card hold
  useEffect(() => {
    const startTime = Date.now();
    const duration = 2500; // 2.5s loading phase
    let frameId: number;

    const tick = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);

      // Cycle loading messages based on progress percentage
      if (pct < 20) {
        setLoadingMsg("Initializing Portfolio...");
      } else if (pct < 40) {
        setLoadingMsg("Loading Components...");
      } else if (pct < 60) {
        setLoadingMsg("Loading Projects...");
      } else if (pct < 80) {
        setLoadingMsg("Preparing Experience...");
      } else {
        setLoadingMsg("Almost Ready...");
      }

      if (elapsed < duration) {
        frameId = requestAnimationFrame(tick);
      } else {
        // Loading phase completes, hold Welcome screen for 1 second (1000ms)
        setTimeout(onComplete, 1000);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [onComplete]);

  // Step 3 — Role Typewriter Animation Loop
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Only type out roles during the active stage (progress between 32% and 100%)
    if (progress < 32 || progress >= 100) return;

    let timer: ReturnType<typeof setTimeout>;
    const currentText = ROLES[roleIndex];

    if (!isDeleting) {
      if (typedRole.length < currentText.length) {
        timer = setTimeout(() => {
          setTypedRole(currentText.slice(0, typedRole.length + 1));
        }, 40); // Snappy, clean typing speed
      } else {
        // Pause at end of text
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1200);
      }
    } else {
      if (typedRole.length > 0) {
        timer = setTimeout(() => {
          setTypedRole(currentText.slice(0, typedRole.length - 1));
        }, 20); // Faster delete speed
      } else {
        // Switch roles
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [typedRole, isDeleting, roleIndex, progress]);

  // Step 4 — Tech Showcase configuration (non-overlapping outer layout)
  const techBadges = [
    { name: "React", icon: <FaReact className="text-[#61DAFB] text-sm" />, top: '15%', left: '10%' },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6] text-xs" />, top: '18%', right: '12%' },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933] text-sm" />, top: '70%', left: '12%' },
    { name: "Python", icon: <FaPython className="text-[#3776AB] text-sm" />, top: '68%', right: '14%' },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1] text-xs" />, top: '10%', left: '30%' },
    { name: "Prisma", icon: <SiPrisma className="text-[#2D3748] text-xs" />, top: '8%', right: '28%' },
    { name: "Docker", icon: <FaDocker className="text-[#2496ED] text-xs" />, top: '82%', left: '32%' },
    { name: "Git", icon: <FaGitAlt className="text-[#F05032] text-xs" />, top: '80%', right: '30%' },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4] text-xs" />, top: '45%', left: '6%' },
  ];

  // Floating background light particles
  const [particles] = useState(() => 
    Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 3 + Math.random() * 5,
      delay: Math.random() * 2,
      duration: 6 + Math.random() * 8,
      color: i % 3 === 0 
        ? "rgba(59, 130, 246, 0.3)" // soft blue glow
        : i % 3 === 1 
          ? "rgba(168, 85, 247, 0.3)" // soft purple glow
          : "rgba(6, 182, 212, 0.3)", // soft cyan glow
    }))
  );

  // Aurora Glows Configuration
  const auroraGlows = [
    { color: "rgba(59, 130, 246, 0.18)", width: "50vw", height: "50vw", top: "-10%", left: "-10%", xRange: [0, 30, 0], yRange: [0, 20, 0] },
    { color: "rgba(168, 85, 247, 0.18)", width: "55vw", height: "55vw", bottom: "-10%", right: "-10%", xRange: [0, -30, 0], yRange: [0, -20, 0] },
    { color: "rgba(6, 182, 212, 0.15)", width: "45vw", height: "45vw", top: "25%", left: "15%", xRange: [0, 20, 0], yRange: [0, -30, 0] },
  ];

  // Characters for name reveal staggered animation
  const nameLetters = Array.from("Nikhil Bhadauriya");

  // Solid block progress calculations (e.g. 15 total blocks)
  const getBlockProgress = () => {
    const totalBlocks = 15;
    const filledCount = Math.floor(progress / (100 / totalBlocks));
    const filled = "█".repeat(filledCount);
    const empty = "░".repeat(totalBlocks - filledCount);
    return `${filled}${empty}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.05,
        filter: "blur(12px)",
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
      }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-between py-12 md:py-16 select-none overflow-hidden bg-white"
    >
      {/* Moving Aurora pastel background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {auroraGlows.map((glow, idx) => (
          <motion.div
            key={idx}
            className="absolute rounded-full pointer-events-none filter blur-[80px] sm:blur-[100px] md:blur-[140px]"
            style={{
              backgroundColor: glow.color,
              width: glow.width,
              height: glow.height,
              top: glow.top,
              left: glow.left,
              right: glow.right,
              bottom: glow.bottom,
            }}
            animate={{
              x: glow.xRange,
              y: glow.yRange,
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 12 + idx * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full pointer-events-none filter blur-[0.5px]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 10px ${p.color}`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 16 - 8, 0],
            opacity: [0.1, 0.7, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Top skip button */}
      <div className="w-full max-w-[1280px] px-6 flex justify-end items-center relative z-50">
        <motion.button
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 0.8, y: 0 }}
          whileHover={{ opacity: 1, scale: 1.05 }}
          onClick={onComplete}
          className="flex items-center gap-1.5 text-[10px] md:text-xs font-mono font-bold tracking-widest px-4 py-2 rounded-full transition-all duration-300 shadow-sm text-slate-500 hover:text-slate-900 bg-white/40 border border-slate-200/50 backdrop-blur-md hover:bg-white/70 hover:border-slate-300 cursor-pointer"
        >
          SKIP <span>→</span>
        </motion.button>
      </div>

      {/* Central visual workspace */}
      <div className="relative flex-grow flex items-center justify-center w-full h-[360px] max-h-[50vh] md:max-h-[360px] z-20">
        <AnimatePresence mode="wait">
          {progress < 32 ? (
            /* STEP 1: Brand Reveal (elapsed < 0.8s) */
            <motion.div
              key="brand-reveal"
              initial={{ scale: 0.7, opacity: 0, filter: "blur(4px)" }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                y: [-4, 4, -4],
                filter: "blur(0px)"
              }}
              exit={{ scale: 0.85, opacity: 0, filter: "blur(4px)" }}
              transition={{ 
                scale: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                filter: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative flex flex-col items-center justify-center"
            >
              {/* Logo container glow backdrop */}
              <div className="absolute w-36 h-36 rounded-full bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-xl opacity-75 animate-pulse" />
              
              {/* Premium glass circle containing personal logo "NB" */}
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center select-none shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-white/40 bg-white/40 backdrop-blur-xl relative z-10">
                <span className="font-display font-black text-3xl md:text-4xl tracking-tighter bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  NB
                </span>
              </div>
            </motion.div>
          ) : progress < 100 ? (
            /* STEP 2, 3 & 4: Name Reveal, Role Animation, and Tech Showcase (0.8s to 2.5s) */
            <motion.div
              key="main-showcase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative w-full h-full flex flex-col items-center justify-center"
            >
              {/* STEP 4: Floating Tech Showcase Badges */}
              {techBadges.map((badge, idx) => (
                <motion.div
                  key={badge.name}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 0.85,
                    y: idx % 2 === 0 ? [-6, 6, -6] : [6, -6, 6],
                    x: idx % 3 === 0 ? [-3, 3, -3] : [3, -3, 3],
                    rotate: idx % 2 === 0 ? [-2.5, 2.5, -2.5] : [2.5, -2.5, 2.5]
                  }}
                  transition={{
                    scale: { type: "spring", stiffness: 120, damping: 14, delay: idx * 0.04 },
                    opacity: { duration: 0.4, delay: idx * 0.04 },
                    y: { duration: 3.5 + idx * 0.2, repeat: Infinity, ease: "easeInOut" },
                    x: { duration: 4.0 + idx * 0.1, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 4.5 + idx * 0.15, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute px-3 py-2 rounded-2xl flex items-center gap-2 border border-slate-200/50 bg-white/40 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.015)] select-none hover:opacity-100 hover:scale-105 hover:bg-white/60 hover:border-slate-300 transition-all duration-300"
                  style={{
                    top: badge.top,
                    left: badge.left,
                    right: badge.right,
                  }}
                >
                  {badge.icon}
                  <span className="text-[10px] font-bold font-mono tracking-wider text-slate-700">{badge.name}</span>
                </motion.div>
              ))}

              {/* Central Text Card */}
              <div className="flex flex-col items-center justify-center text-center px-4 max-w-xl z-20 relative">
                {/* Backlight glow */}
                <div className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-2xl opacity-60 pointer-events-none" />

                {/* STEP 2: Name Reveal with Staggered Characters */}
                <h1 className="font-display font-black tracking-tight leading-none text-center flex flex-wrap justify-center relative z-10 text-4xl sm:text-5xl md:text-6xl">
                  {nameLetters.map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.55,
                        delay: index * 0.02,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </h1>

                {/* STEP 3: Role Typewriter Loop */}
                <div className="h-6 mt-4 flex items-center justify-center relative z-10">
                  <span className="text-xs sm:text-sm font-bold tracking-[0.12em] uppercase text-center text-slate-600">
                    {typedRole || "\u00A0"}
                  </span>
                  <span className="animate-typewriter-blink text-xs sm:text-sm font-light ml-0.5 text-slate-400">
                    |
                  </span>
                </div>
              </div>
            </motion.div>
          ) : (
            /* STEP 6: Welcome Screen (elapsed 2.5s to 3.5s) */
            <motion.div
              key="welcome-screen"
              initial={{ opacity: 0, scale: 0.95, filter: "blur(6px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(12px)" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center text-center px-6 z-20"
            >
              <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-blue-500/15 via-purple-500/20 to-cyan-500/15 blur-3xl opacity-75 pointer-events-none" />

              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="text-[10px] font-mono font-extrabold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full border border-blue-500/10 text-blue-600 bg-blue-500/5 shadow-sm"
              >
                Welcome
              </motion.span>

              <motion.h2 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="text-4xl md:text-6xl font-black font-display tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent leading-none"
              >
                Nikhil Bhadauriya
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="text-sm sm:text-base font-semibold tracking-wider mt-4 text-slate-600"
              >
                Let's Build Something Amazing
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Loading Progress (Progress 0% to 100%) */}
      <div className="w-full max-w-[320px] px-6 flex flex-col items-center gap-2.5 relative z-50 mb-4 h-[40px]">
        <AnimatePresence>
          {progress < 100 && (
            <motion.div
              key="progress-bar-container"
              exit={{ opacity: 0, y: 10, transition: { duration: 0.3 } }}
              className="w-full flex flex-col items-center gap-2"
            >
              <div className="flex justify-between w-full text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                <span>{loadingMsg}</span>
                <span className="text-slate-800 tracking-normal font-medium">
                  {getBlockProgress()} {Math.round(progress)}%
                </span>
              </div>
              <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden relative shadow-inner">
                <div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full transition-all duration-75 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
