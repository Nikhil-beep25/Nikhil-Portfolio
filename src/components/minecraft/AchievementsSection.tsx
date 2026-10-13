import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA, type Achievement } from '../../data/portfolio';
import { MinecraftItemIcon, MinecraftTorch } from './PixelArt';
import { audioManager } from '../../utils/audioManager';

export default function AchievementsSection() {
  const [unlockedToast, setUnlockedToast] = useState<Achievement | null>(null);

  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (toastTimer.current) clearTimeout(toastTimer.current); }, []);

  const handleUnlock = (ach: Achievement) => {
    audioManager.playAdvancement();
    setUnlockedToast(ach);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => {
      setUnlockedToast(null);
    }, 4500);
  };

  const getAdvancementBorder = (type: string) => {
    switch (type) {
      case 'challenge':
        return 'border-[#9C27B0] bg-[#2E103E]';
      case 'goal':
        return 'border-[#FFCC33] bg-[#3B2C05]';
      default:
        return 'border-stone-500 bg-[#252525]';
    }
  };

  return (
    <section 
      id="achievements" 
      className="world-section relative py-20 md:py-28 px-4 md:px-8 w-full z-10 overflow-hidden"
    >
      {/* ─────────────────────────────────────────────────────────────
          ACHIEVEMENT UNLOCKED BANNER POPUP (Top Right Toast)
          ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {unlockedToast && (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            className="fixed top-6 right-6 z-50 mc-panel-dark p-4 border-4 border-amber-400 shadow-2xl flex items-center gap-4 max-w-sm pointer-events-auto"
          >
            <div className="w-12 h-12 bg-amber-950 border-2 border-amber-400 flex items-center justify-center p-1 shrink-0 animate-bounce">
              <MinecraftItemIcon type={unlockedToast.icon} size={32} />
            </div>
            <div>
              <span className="font-pixel text-[10px] text-amber-300 block mc-text-shadow">
                ACHIEVEMENT UNLOCKED!
              </span>
              <h4 className="font-pixel text-xs text-white mc-text-shadow mt-0.5">
                {unlockedToast.title}
              </h4>
              <span className="font-pixel-sub text-[9px] text-[#55FF55] block">
                {unlockedToast.badge}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="section-heading text-center space-y-3">
          <div className="flex items-center justify-center gap-3">
            <MinecraftTorch size={24} />
            <h2 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-white mc-text-shadow">
              ADVANCEMENTS & TIMELINE
            </h2>
            <MinecraftTorch size={24} />
          </div>
          <p className="font-pixel-sub text-xs sm:text-sm text-stone-300">
            [ VERIFIED CAREER MILESTONES & CERTIFICATIONS ]
          </p>
        </div>

        {/* Advancements Tree Panel */}
        <div className="mc-panel-dark p-6 sm:p-8 border-4 border-stone-700 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b-2 border-stone-700 pb-3">
            <span className="font-pixel text-xs text-amber-300">
              ADVANCEMENT TREE (Explore each milestone)
            </span>
            <span className="font-pixel text-[9px] text-emerald-400">
              {PORTFOLIO_DATA.achievements.length} MILESTONES
            </span>
          </div>

          {/* Cards Grid */}
          <div className="advancement-grid grid gap-5 pt-2">
            {PORTFOLIO_DATA.achievements.map((ach) => (
              <motion.div
                key={ach.id}
                whileHover={{ scale: 1.02, y: -2 }}
                onMouseEnter={() => audioManager.playHover()}
                className={`
                  advancement-card p-5 border-2 rounded-none flex flex-col justify-between transition-all relative overflow-hidden group shadow-lg
                  ${getAdvancementBorder(ach.advancementType)}
                `}
              >
                {/* Top Bar with Icon & Date */}
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-12 h-12 bg-black/60 border-2 border-amber-400/70 p-1 flex items-center justify-center group-hover:border-amber-300">
                      <MinecraftItemIcon type={ach.icon} size={30} />
                    </div>
                    <div className="text-right">
                      <span className="font-pixel text-[8px] text-amber-300 bg-black/50 px-2 py-0.5 border border-amber-500/30 block w-fit ml-auto">
                        {ach.date}
                      </span>
                      <span className="font-pixel-sub text-[9px] text-stone-400 block mt-1">
                        {ach.issuer}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-pixel text-xs sm:text-sm text-white mc-text-shadow leading-snug">
                    {ach.title}
                  </h3>
                  <span className="font-pixel-sub text-[10px] text-emerald-300 block mt-1">
                    {ach.badge}
                  </span>

                  <p className="font-body text-xs text-stone-300 mt-2.5 leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                {/* Skills gained pill tags */}
                <div className="pt-4 border-t border-white/10 mt-4">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {ach.skillsGained.slice(0, 4).map((s) => (
                      <span key={s} className="font-pixel-sub text-[8px] text-stone-300 bg-black/40 px-1.5 py-0.5 border border-white/5">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Unlock Button / Link */}
                  <div className="flex items-center justify-between">
                    <button type="button" className="achievement-unlock font-pixel-sub text-[10px] text-amber-300 hover:text-amber-100" onClick={() => handleUnlock(ach)} aria-label={`Unlock ${ach.title}`}>
                      UNLOCK ACHIEVEMENT ↗
                    </button>
                    {ach.verificationLink && (
                      <a
                        href={ach.verificationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          audioManager.playClick();
                        }}
                        className="font-pixel text-[8px] text-cyan-400 hover:underline"
                      >
                        [VERIFY ↗]
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
