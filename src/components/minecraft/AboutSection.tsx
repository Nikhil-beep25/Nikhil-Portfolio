import SceneFrame from '../world3d/SceneFrame';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../data/portfolio';
import { MinecraftTorch, MinecraftHeart } from './PixelArt';
import { audioManager } from '../../utils/audioManager';

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="world-section relative py-20 md:py-28 px-4 md:px-8 w-full z-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="section-heading text-center space-y-3">
          <div className="flex items-center justify-center gap-3">
            <MinecraftTorch size={24} />
            <h2 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-white mc-text-shadow">
              CHARACTER PROFILE
            </h2>
            <MinecraftTorch size={24} />
          </div>
          <p className="font-pixel-sub text-xs sm:text-sm text-stone-300">
            [ STATS, BACKGROUND & ACTIVE QUESTS ]
          </p>

          {/* Player Health Bar (10 Minecraft Hearts) & Level */}
          <div className="flex flex-wrap items-center justify-center gap-1 pt-2">
            <div className="flex items-center gap-1">
              {Array.from({ length: 10 }).map((_, i) => (
                <MinecraftHeart key={i} size={16} />
              ))}
            </div>
            <span className="font-pixel text-[11px] sm:text-xs text-[#55FF55] ml-2 sm:ml-3 mc-text-shadow">
              LVL 100
            </span>
          </div>
        </div>

        {/* 3-Column Character Profile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Wooden Information Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 mc-panel-wood p-6 sm:p-7 space-y-5 text-white shadow-2xl relative"
          >
            {/* Wooden Panel Sign Header */}
            <div className="border-b-2 border-[#4E2E16] pb-3 flex items-center justify-between">
              <span className="font-pixel text-xs text-amber-300 mc-text-shadow">
                OAK SIGNBOARD
              </span>
              <span className="font-pixel-sub text-[10px] text-stone-300 bg-black/40 px-2 py-0.5 border border-white/10">
                ACTIVE
              </span>
            </div>

            {/* Authentic Bio */}
            <div className="space-y-3 font-body text-xs sm:text-sm text-amber-100 leading-relaxed">
              <p>
                {PORTFOLIO_DATA.personal.bioShort}
              </p>
              <p>
                {PORTFOLIO_DATA.personal.bioLong}
              </p>
            </div>

            {/* Vitals / Stats Board */}
            <div className="space-y-2 pt-2 border-t-2 border-[#4E2E16]">
              <div className="flex flex-wrap items-center justify-between gap-1 font-pixel text-[10px] text-amber-200">
                <span className="shrink-0">📍 SPAWN POINT:</span>
                <span className="font-body text-xs text-white text-right min-w-0 break-words">{PORTFOLIO_DATA.personal.location}</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-1 font-pixel text-[10px] text-amber-200">
                <span className="shrink-0">🚀 MAIN QUEST:</span>
                <span className="font-body text-xs text-white text-right min-w-0 break-words">{PORTFOLIO_DATA.personal.currentFocus}</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-1 font-pixel text-[10px] text-amber-200">
                <span className="shrink-0">🌱 LEARNING TREE:</span>
                <span className="font-body text-xs text-white text-right min-w-0 break-words">{PORTFOLIO_DATA.personal.learningFocus}</span>
              </div>
            </div>

            {/* Resume Downloads */}
            <div className="pt-3 flex flex-wrap gap-3">
              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => audioManager.playClick()}
                className="mc-button mc-button-green px-4 py-2 text-[10px] sm:text-xs font-pixel tracking-wider"
              >
                [ VIEW RESUME ]
              </a>
              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                download="Nikhil_Bhadauriya_Resume.pdf"
                onClick={() => audioManager.playClick()}
                className="mc-button mc-button-wood px-4 py-2 text-[10px] sm:text-xs font-pixel tracking-wider"
              >
                [ DOWNLOAD PDF ]
              </a>
            </div>
          </motion.div>

          <div className="profile-avatar-stage"><SceneFrame kind="avatar" /></div>

          {/* Right: Interests Board */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 mc-panel p-6 sm:p-7 space-y-4 text-stone-900 shadow-2xl"
          >
            <div className="border-b-2 border-stone-400 pb-2 flex items-center justify-between">
              <span className="font-pixel text-xs text-stone-800">
                INTERESTS & PASSIONS
              </span>
              <span className="font-pixel text-[9px] text-emerald-700">
                ACTIVE BUFFS
              </span>
            </div>

            {/* Interest item cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
              {PORTFOLIO_DATA.interests.map((interest, idx) => (
                <div
                  key={idx}
                  className="mc-slot p-2.5 sm:p-3 bg-stone-200 hover:bg-stone-100 flex flex-col justify-between transition-colors group cursor-default min-w-0"
                  onMouseEnter={() => audioManager.playHover()}
                >
                  <div className="flex items-start gap-2 mb-1 min-w-0">
                    <span className="text-lg sm:text-xl shrink-0 group-hover:scale-110 transition-transform select-none pt-0.5 leading-none">
                      {interest.icon}
                    </span>
                    <h3
                      className="font-pixel-sub text-[10.5px] sm:text-xs text-stone-900 font-bold leading-tight break-words min-w-0"
                      style={{ overflowWrap: 'anywhere' }}
                    >
                      {interest.title}
                    </h3>
                  </div>
                  <p className="font-body text-[11px] text-stone-600 leading-snug break-words">
                    {interest.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Recruiter Callout */}
            <div className="mc-panel-dark p-3 text-white text-left flex items-center justify-between gap-2 mt-2 min-w-0">
              <div className="min-w-0">
                <span className="font-pixel text-[9px] text-[#FFCC33] block">
                  STATUS REPORT
                </span>
                <span className="font-body text-xs text-stone-300 block leading-snug break-words">
                  Open for Full-Stack Roles, AI Systems & SaaS Collaborations.
                </span>
              </div>
              <span className="text-xl shrink-0">⚔️</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
