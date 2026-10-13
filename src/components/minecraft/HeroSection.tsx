import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../data/portfolio';
import { MinecraftCharacter, MinecraftTorch, MinecraftGrassBlock } from './PixelArt';
import { audioManager } from '../../utils/audioManager';

interface HeroSectionProps {
  onExplore: () => void;
  onViewProjects: () => void;
  isNight: boolean;
}

export default function HeroSection({ onExplore, onViewProjects, isNight }: HeroSectionProps) {
  const [isWaving, setIsWaving] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Gentle parallax offset
      const x = (e.clientX / window.innerWidth - 0.5) * 16;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-12 md:pt-16 pb-28 md:pb-32 select-none"
    >
      {/* ─────────────────────────────────────────────────────────────
          CELESTIAL SYSTEM (Sun / Moon & Stars)
          ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Sun (Day mode square pixel sun) */}
        <motion.div
          animate={{
            opacity: isNight ? 0 : 1,
            y: isNight ? 120 : 0
          }}
          transition={{ duration: 1 }}
          className="absolute top-12 right-12 md:right-28 w-20 h-20 md:w-28 md:h-28 bg-[#FFF59D] border-4 border-[#FFF9C4] shadow-[0_0_60px_#FFF59D] pixelated"
        />

        {/* Moon (Night mode square pixel moon with craters) */}
        <motion.div
          animate={{
            opacity: isNight ? 1 : 0,
            y: isNight ? 0 : -120
          }}
          transition={{ duration: 1 }}
          className="absolute top-12 right-12 md:right-28 w-20 h-20 md:w-28 md:h-28 bg-[#E0E0E0] border-4 border-[#BDBDBD] shadow-[0_0_50px_rgba(255,255,255,0.7)] pixelated"
        >
          <div className="absolute top-3 left-3 w-4 h-5 bg-[#9E9E9E]" />
          <div className="absolute bottom-4 right-4 w-6 h-4 bg-[#9E9E9E]" />
        </motion.div>

        {/* Pixel Night Stars */}
        {isNight && (
          <div className="absolute inset-0 opacity-80">
            {Array.from({ length: 35 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 bg-white pixelated animate-pulse"
                style={{
                  top: `${(i * 17) % 75}%`,
                  left: `${(i * 23) % 95}%`,
                  animationDuration: `${1.5 + (i % 3)}s`
                }}
              />
            ))}
          </div>
        )}

        {/* Moving Pixel Clouds */}
        <div className="absolute top-16 left-0 w-full overflow-hidden opacity-90">
          <div className="animate-cloud-slow flex gap-32">
            <div className="w-48 md:w-72 h-10 md:h-14 bg-white/90 shadow-[0_6px_0_rgba(180,210,240,0.7)] pixelated" />
            <div className="w-64 md:w-96 h-12 md:h-16 bg-white/80 shadow-[0_6px_0_rgba(180,210,240,0.7)] pixelated" />
            <div className="w-56 md:w-80 h-10 md:h-12 bg-white/85 shadow-[0_6px_0_rgba(180,210,240,0.7)] pixelated" />
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          VOXEL MOUNTAIN & FLOATING ISLAND HORIZON
          ───────────────────────────────────────────────────────────── */}
      <div 
        className="absolute bottom-16 md:bottom-20 inset-x-0 h-72 md:h-96 pointer-events-none z-0 flex items-end justify-between transition-transform duration-300"
        style={{
          transform: `translate3d(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.3}px, 0)`
        }}
      >
        {/* Distant Voxel Mountains */}
        <svg viewBox="0 0 1200 400" className="w-full h-full preserve-3d" preserveAspectRatio="none">
          {/* Back Mountain Ridge */}
          <polygon points="0,400 150,180 320,400 500,120 720,400 950,160 1200,400" fill={isNight ? '#141E33' : '#4E7332'} opacity="0.6" />
          {/* Mid Mountain Ridge */}
          <polygon points="0,400 80,240 260,400 420,180 620,400 820,210 1020,400 1200,320 1200,400" fill={isNight ? '#1C2945' : '#3C5C26'} />
        </svg>

        {/* Floating Island (Left) */}
        <div className="absolute -top-12 left-4 md:left-24 animate-float-island">
          <div className="relative">
            {/* Tree on island */}
            <div className="absolute -top-14 left-8 flex flex-col items-center">
              <div className="w-12 h-12 bg-[#33691E] border-2 border-[#1B5E20] pixelated" />
              <div className="w-4 h-6 bg-[#5D4037] pixelated" />
            </div>
            {/* Island Body */}
            <div className="w-28 md:w-40 h-8 bg-[#5B8731] border-t-2 border-[#7EC844] pixelated" />
            <div className="w-24 md:w-36 h-10 bg-[#79543B] border-b-4 border-[#3E2723] mx-auto pixelated" />
            <div className="w-12 md:w-20 h-6 bg-[#583A24] mx-auto pixelated" />
          </div>
        </div>

        {/* Floating Island (Right) */}
        <div className="absolute -top-20 right-6 md:right-28 animate-float-island" style={{ animationDelay: '1.5s' }}>
          <div className="relative">
            <div className="w-24 md:w-36 h-7 bg-[#5B8731] border-t-2 border-[#7EC844] pixelated" />
            <div className="w-20 md:w-30 h-8 bg-[#79543B] border-b-4 border-[#3E2723] mx-auto pixelated" />
            <div className="w-10 md:w-16 h-5 bg-[#583A24] mx-auto pixelated" />
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          HERO MAIN CONTENT & CHARACTER
          ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 w-full flex-grow flex flex-col justify-center items-center text-center">
        
        {/* Torches flanking the title area */}
        <div className="w-full flex justify-between items-center max-w-3xl mb-4 px-2">
          <MinecraftTorch size={26} />
          <div className="flex items-center gap-2 px-3 py-1 bg-black/40 border border-white/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span className="font-pixel-sub text-[10px] md:text-xs text-emerald-300">
              MINECRAFT DEVELOPER PORTFOLIO
            </span>
          </div>
          <MinecraftTorch size={26} />
        </div>

        {/* Intro Salutation */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-pixel text-xs sm:text-sm md:text-base text-amber-300 mc-text-shadow tracking-widest uppercase mb-2"
        >
          HEY, I'M
        </motion.p>

        {/* Big Name Banner */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="space-y-1 mb-4"
        >
          <h1 className="font-pixel text-3xl sm:text-5xl md:text-7xl text-white mc-text-shadow tracking-tight">
            {PORTFOLIO_DATA.personal.firstName.toUpperCase()}
          </h1>
          <h2 className="font-pixel text-2xl sm:text-4xl md:text-6xl text-[#55FF55] mc-text-shadow-green tracking-tight">
            {PORTFOLIO_DATA.personal.lastName.toUpperCase()}
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mc-panel-dark px-4 py-2 border-2 border-white/20 inline-block mb-6 shadow-xl"
        >
          <p className="font-pixel-sub text-xs sm:text-sm md:text-base text-[#4AEDD9] mc-text-shadow-diamond">
            {PORTFOLIO_DATA.personal.tagline}
          </p>
        </motion.div>

        {/* Character & Speech Bubble Split */}
        <div className="relative flex flex-col items-center justify-center mb-8">
          {/* Speech Bubble floating above character */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="animate-speech-bubble mc-panel px-4 py-2.5 max-w-sm mb-3 relative shadow-2xl"
          >
            <p className="font-pixel-sub text-[11px] sm:text-xs text-[#222222] font-bold leading-relaxed">
              "{PORTFOLIO_DATA.personal.bubbleQuote}"
            </p>
            {/* Triangle pointer downward toward character */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-[#555555]" />
          </motion.div>

          {/* Interactive Minecraft Character */}
          <div 
            className="cursor-pointer group relative"
            onClick={() => {
              setIsWaving(true);
              audioManager.playSelect();
              setTimeout(() => setIsWaving(false), 2500);
            }}
            title="Click Steve to wave!"
          >
            <MinecraftCharacter isWaving={isWaving} size={110} />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 font-pixel text-[8px] text-white/70 bg-black/50 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              [ CLICK ME ]
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <button
            onClick={() => {
              audioManager.playClick();
              onExplore();
            }}
            className="mc-button mc-button-green px-6 sm:px-8 py-3 text-xs sm:text-sm font-pixel tracking-wider shadow-xl cursor-pointer"
          >
            [ EXPLORE MY WORLD ]
          </button>

          <button
            onClick={() => {
              audioManager.playClick();
              onViewProjects();
            }}
            className="mc-button mc-button-diamond px-6 sm:px-8 py-3 text-xs sm:text-sm font-pixel tracking-wider shadow-xl cursor-pointer"
          >
            [ VIEW MY PROJECTS ]
          </button>
        </motion.div>

      </div>

      {/* ─────────────────────────────────────────────────────────────
          TERRAIN GROUND LAYER (Grass Block Grid Base)
          ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full h-12 md:h-16 flex overflow-hidden border-t-4 border-[#3D5E1F] shadow-2xl">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="flex-shrink-0 w-12 md:w-16 h-full">
            <MinecraftGrassBlock size={64} className="w-full h-full" />
          </div>
        ))}
      </div>

    </section>
  );
}
