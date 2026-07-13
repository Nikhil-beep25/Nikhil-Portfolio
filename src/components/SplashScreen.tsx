import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiPrisma, SiTailwindcss } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(0);
  const [loadingMsg, setLoadingMsg] = useState(() => t('loading.msg1'));
  const [isFadingOutCenter, setIsFadingOutCenter] = useState(false);

  // Monitor loading progress and messages (0.4s to 4.2s)
  useEffect(() => {
    const startTime = Date.now() + 400; // Starts at 400ms
    const duration = 3800; // 3.8s total loading time

    let frameId: number;

    const tick = () => {
      const now = Date.now();
      if (now < startTime) {
        setProgress(0);
        frameId = requestAnimationFrame(tick);
        return;
      }

      const elapsed = now - startTime;
      const percent = Math.min(100, (elapsed / duration) * 100);
      setProgress(percent);

      if (percent < 15) {
        setLoadingMsg(t('loading.msg1'));
      } else if (percent < 30) {
        setLoadingMsg(t('loading.msg2'));
      } else if (percent < 45) {
        setLoadingMsg(t('loading.msg3'));
      } else if (percent < 65) {
        setLoadingMsg(t('loading.msg4'));
      } else if (percent < 85) {
        setLoadingMsg(t('loading.msg5'));
      } else if (percent < 100) {
        setLoadingMsg(t('loading.msg6'));
      } else {
        setLoadingMsg(t('loading.msg7'));
      }

      if (percent < 100) {
        frameId = requestAnimationFrame(tick);
      } else {
        // Hold welcome message and zoom center logo before unmounting
        setTimeout(onComplete, 600);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [onComplete]);

  // Transition center element at 2.2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOutCenter(true);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  // Typewriter Subtitle Text (Starts at 2.8s)
  const [typedText, setTypedText] = useState("");
  useEffect(() => {
    const startDelay = 2800;
    const rolesList = ["Python Developer", "Full Stack Developer", "Python Developer"];
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let interval: ReturnType<typeof setInterval>;

    const run = () => {
      const currentRole = rolesList[roleIdx];
      if (!deleting) {
        if (charIdx < currentRole.length) {
          setTypedText(currentRole.slice(0, charIdx + 1));
          charIdx++;
        } else {
          deleting = true;
          clearInterval(interval);
          setTimeout(() => {
            interval = setInterval(run, 40);
          }, 800); // Wait 800ms after typing finishes
        }
      } else {
        if (charIdx > 0) {
          setTypedText(currentRole.slice(0, charIdx - 1));
          charIdx--;
        } else {
          deleting = false;
          roleIdx = (roleIdx + 1) % rolesList.length;
          clearInterval(interval);
          setTimeout(() => {
            interval = setInterval(run, 60);
          }, 400); // Wait 400ms before starting to type next word
        }
      }
    };

    const timeout = setTimeout(() => {
      interval = setInterval(run, 60);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  // Concentric Rings Tech Badges configuration
  const outerBadges = [
    { name: "React", icon: <FaReact className="text-[#61DAFB] text-sm md:text-base" />, delay: 1.0 },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6] text-xs md:text-sm" />, delay: 1.2 },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933] text-sm md:text-base" />, delay: 1.4 },
    { name: "Python", icon: <FaPython className="text-[#3776AB] text-sm md:text-base" />, delay: 1.6 },
  ];

  const innerBadges = [
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1] text-xs md:text-sm" />, delay: 1.1 },
    { name: "Docker", icon: <FaDocker className="text-[#2496ED] text-xs md:text-sm" />, delay: 1.3 },
    { name: "Prisma", icon: <SiPrisma className="text-white text-xs md:text-sm" />, delay: 1.5 },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4] text-xs md:text-sm" />, delay: 1.7 },
  ];

  // Generated particles for background
  const dots = Array.from({ length: 22 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1.5 + Math.random() * 2.5,
    delay: Math.random() * 2,
    duration: 6 + Math.random() * 6,
    color: i % 3 === 0 ? "#38BDF8" : i % 3 === 1 ? "#8B5CF6" : "#EC4899",
  }));

  const nameLetters = Array.from("Nikhil Bhadauriya");

  // Framer Motion reveal variants for staggered name letters
  const nameContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 2.2, // reveal starts at 2.2 seconds
      },
    },
  };

  const nameLetterVariants = {
    hidden: { opacity: 0, y: 15, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.04,
        transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } 
      }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-between py-12 md:py-16 select-none overflow-hidden bg-[#050816]"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(5, 8, 22, 0.8), rgba(11, 17, 32, 0.85), rgba(17, 24, 39, 0.9)),
          linear-gradient(to right, rgba(255, 255, 255, 0.015) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.015) 1px, transparent 1px)
        `,
        backgroundSize: "100%, 35px 35px, 35px 35px",
      }}
    >
      {/* Background Aurora overlay */}
      <div className="absolute inset-0 overflow-hidden opacity-25 pointer-events-none">
        <div className="absolute top-[-30%] left-[-30%] w-[160%] h-[160%] bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.18)_0%,rgba(56,189,248,0.1)_25%,rgba(236,72,153,0.06)_55%,transparent_100%)] animate-aurora-slow pointer-events-none" />
      </div>

      {/* Floating particles */}
      {dots.map((d) => (
        <motion.div
          key={d.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
            backgroundColor: d.color,
            boxShadow: `0 0 10px ${d.color}`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.1, 0.65, 0.1],
          }}
          transition={{
            duration: d.duration,
            repeat: Infinity,
            delay: d.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Top Header Section with skip button */}
      <div className="w-full max-w-[1280px] px-6 flex justify-end items-center relative z-50">
        <motion.button
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 0.8, y: 0 }}
          whileHover={{ opacity: 1, x: 2 }}
          onClick={onComplete}
          className="flex items-center gap-1 text-[10px] md:text-xs font-mono font-bold tracking-widest text-slate-400 hover:text-white px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-md transition-all duration-300 shadow-md shadow-black/20"
        >
          {t('loading.skip')} <span className="text-[10px]">→</span>
        </motion.button>
      </div>

      {/* Central Visual Showcase (Stays fixed height to avoid layout shift) */}
      <div className="relative flex-grow flex items-center justify-center w-full h-[360px] max-h-[50vh] md:max-h-[360px]">
        
        {/* Step 1 & 2 Center Section (Logo & Tech Rings) */}
        <AnimatePresence>
          {!isFadingOutCenter && (
            <motion.div
              key="center-logo-rings"
              initial={{ scale: 1, opacity: 1 }}
              exit={{ 
                scale: 0.5, 
                opacity: 0,
                transition: { duration: 0.45, ease: "easeInOut" } 
              }}
              className="relative flex items-center justify-center w-[300px] h-[300px]"
            >
              {/* Radial gradient background light behind logo */}
              <div className="absolute w-[180px] h-[180px] rounded-full bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-transparent blur-[35px]" />

              {/* NB Logo Badge */}
              <motion.div
                initial={{ scale: 0, opacity: 0, rotate: -5 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1, 
                  rotate: 5,
                  boxShadow: [
                    "0 0 15px rgba(56,189,248,0.35)",
                    "0 0 30px rgba(139,92,246,0.45)",
                    "0 0 15px rgba(236,72,153,0.35)"
                  ]
                }}
                transition={{
                  scale: { duration: 0.6, ease: "easeOut", delay: 0.2 },
                  opacity: { duration: 0.6, ease: "easeOut", delay: 0.2 },
                  rotate: { duration: 0.8, ease: "easeOut", delay: 0.2 },
                  boxShadow: { duration: 3, repeat: Infinity, repeatType: "mirror" }
                }}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-950/85 border border-white/10 flex items-center justify-center select-none z-30 shadow-2xl relative"
              >
                <span className="font-display font-black text-xl md:text-2xl tracking-tighter bg-gradient-to-r from-[#38BDF8] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                  NB
                </span>
              </motion.div>

              {/* Step 2: 3D Outer Ring (Clockwise Rotation) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute w-[260px] h-[260px] rounded-full border border-dashed border-cyan-400/20 flex items-center justify-center z-10"
                style={{
                  perspective: "600px",
                  transformStyle: "preserve-3d",
                }}
              >
                {outerBadges.map((badge, idx) => {
                  const angle = (idx * 360) / 4;
                  const radius = 130; 
                  const x = radius * Math.cos((angle * Math.PI) / 180);
                  const y = radius * Math.sin((angle * Math.PI) / 180);

                  return (
                    <motion.div
                      key={badge.name}
                      custom={badge.delay}
                      variants={badgeVariants}
                      initial="hidden"
                      animate="visible"
                      className="absolute"
                      style={{
                        transform: `translate3d(${x}px, ${y}px, 0px)`,
                      }}
                    >
                      {/* Counter rotation keeps icons upright, Y motion adds floating */}
                      <motion.div
                        animate={{ 
                          rotate: -360,
                          y: [0, -3.5, 0]
                        }}
                        transition={{ 
                          rotate: { duration: 18, repeat: Infinity, ease: "linear" },
                          y: { duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: idx * 0.4 }
                        }}
                        className="flex items-center justify-center p-2 rounded-xl bg-slate-950/70 border border-white/10 backdrop-blur-md shadow-md"
                        style={{
                          boxShadow: "0 0 10px rgba(56,189,248,0.15)",
                        }}
                        title={badge.name}
                      >
                        {badge.icon}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Step 2: 3D Inner Ring (Counter-Clockwise Rotation) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                className="absolute w-[180px] h-[180px] rounded-full border border-dashed border-purple-400/20 flex items-center justify-center z-20"
                style={{
                  perspective: "600px",
                  transformStyle: "preserve-3d",
                }}
              >
                {innerBadges.map((badge, idx) => {
                  const angle = (idx * 360) / 4;
                  const radius = 90; 
                  const x = radius * Math.cos((angle * Math.PI) / 180);
                  const y = radius * Math.sin((angle * Math.PI) / 180);

                  return (
                    <motion.div
                      key={badge.name}
                      custom={badge.delay}
                      variants={badgeVariants}
                      initial="hidden"
                      animate="visible"
                      className="absolute"
                      style={{
                        transform: `translate3d(${x}px, ${y}px, 0px)`,
                      }}
                    >
                      {/* Counter rotation keeps icons upright, Y motion adds floating */}
                      <motion.div
                        animate={{ 
                          rotate: 360,
                          y: [0, 3, 0]
                        }}
                        transition={{ 
                          rotate: { duration: 14, repeat: Infinity, ease: "linear" },
                          y: { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }
                        }}
                        className="flex items-center justify-center p-1.5 rounded-xl bg-slate-950/75 border border-white/10 backdrop-blur-md shadow-md"
                        style={{
                          boxShadow: "0 0 10px rgba(139,92,246,0.15)",
                        }}
                        title={badge.name}
                      >
                        {badge.icon}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 3 & 4: Name Reveal & Typewriter Subtitle */}
        <AnimatePresence>
          {isFadingOutCenter && (
            <motion.div
              key="name-showcase"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                // Gentle zoom loop runs at step 6
                scale: progress >= 100 ? 1.05 : 1,
                transition: { duration: 0.5, ease: "easeOut" }
              }}
              className="absolute flex flex-col items-center justify-center text-center px-4"
            >
              {/* Backlight glow */}
              <div className="absolute w-[240px] h-[240px] rounded-full bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-transparent blur-[45px] pointer-events-none" />

              {/* Name Staggered Reveal */}
              <motion.h1
                variants={nameContainerVariants}
                initial="hidden"
                animate="visible"
                className="font-display font-black tracking-tight leading-none text-center flex flex-wrap justify-center relative z-10"
                style={{
                  fontSize: "clamp(34px, 6.5vw, 54px)",
                }}
              >
                {nameLetters.map((char, index) => (
                  <motion.span
                    key={index}
                    variants={nameLetterVariants}
                    className="inline-block splash-name-shimmer"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Step 4: Subtitle Typewriter animation */}
              <div className="h-[22px] mt-4 flex items-center justify-center relative z-10">
                <span 
                  className="text-xs md:text-sm font-semibold tracking-[0.1em] text-white uppercase text-center"
                  style={{
                    textShadow: "0 0 8px rgba(255, 255, 255, 0.4), 0 0 15px rgba(139, 92, 246, 0.2)"
                  }}
                >
                  {typedText}
                </span>
                {/* Blinking cursor */}
                <span className="animate-typewriter-blink text-xs md:text-sm font-normal text-slate-300 ml-0.5">
                  |
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Loading Progress Section */}
      <div className="w-full max-w-[280px] px-4 flex flex-col items-center gap-2 relative z-50 mb-4">
        <div className="flex justify-between w-full text-[9px] font-mono text-slate-400 font-bold uppercase tracking-wider select-none">
          <span>{loadingMsg}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden relative shadow-inner">
          {/* Filled progress bar */}
          <div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#38BDF8] via-[#8B5CF6] to-[#EC4899] rounded-full transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}

// Framer Motion helper variant for pop-in tech badges
const badgeVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (delay: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 180,
      damping: 14,
      delay: delay
    }
  })
};
