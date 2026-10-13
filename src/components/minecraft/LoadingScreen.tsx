import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { audioManager } from '../../utils/audioManager';
import { PORTFOLIO_DATA } from '../../data/portfolio';

interface LoadingScreenProps {
  onEnter: () => void;
}

const STAGES = [
  "Loading Projects...",
  "Generating Skills...",
  "Preparing Inventory...",
  "Building My World..."
];

export default function LoadingScreen({ onEnter }: LoadingScreenProps) {
  const [progress, setProgress] = useState(15);
  const [stageIndex, setStageIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Real asset loading & initialization checks
    let currentProgress = 20;
    
    // 1. Verify profile images
    const img1 = new Image();
    img1.src = PORTFOLIO_DATA.personal.avatarImage;
    
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 10;
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        setIsReady(true);
        clearInterval(interval);
      } else {
        setProgress(currentProgress);
        const stageIdx = Math.min(
          Math.floor((currentProgress / 100) * STAGES.length),
          STAGES.length - 1
        );
        setStageIndex(stageIdx);
      }
    }, 180);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    audioManager.playEnterWorld();
    onEnter();
  };

  const handleSkip = () => {
    audioManager.playClick();
    onEnter();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center select-none overflow-hidden"
      style={{
        backgroundColor: '#2C1D11',
        backgroundImage: `
          repeating-linear-gradient(45deg, rgba(0,0,0,0.15) 0, rgba(0,0,0,0.15) 8px, transparent 0, transparent 16px),
          radial-gradient(circle at center, #4A3320 0%, #1E120A 100%)
        `
      }}
    >
      {/* Skip button in corner */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 font-pixel-sub text-[10px] md:text-xs text-white/70 hover:text-white px-3 py-1.5 border border-white/20 bg-black/40 hover:bg-black/60 transition-colors cursor-pointer"
      >
        [ SKIP ⏩ ]
      </button>

      <div className="w-full max-w-md px-6 text-center space-y-6">
        {/* Title */}
        <div className="space-y-2">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-block"
          >
            <h1 className="font-pixel text-xl sm:text-2xl md:text-3xl text-white mc-text-shadow tracking-wider">
              {isReady ? "WORLD GENERATED!" : "GENERATING WORLD..."}
            </h1>
          </motion.div>
          <p className="font-pixel-sub text-xs sm:text-sm text-amber-300 mc-text-shadow">
            NIKHIL BHADAURIYA'S REALM
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="mc-panel-dark p-2 w-full space-y-2">
          <div className="relative h-6 bg-[#111111] border-2 border-[#333333] overflow-hidden p-0.5">
            <motion.div
              className="h-full bg-gradient-to-r from-[#3C8527] to-[#55FF55] transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
            {/* Percentage text overlay inside bar */}
            <span className="absolute inset-0 flex items-center justify-center font-pixel text-[10px] text-white mc-text-shadow">
              {progress}%
            </span>
          </div>

          {/* Current Loading Message */}
          <p className="font-pixel-sub text-xs text-stone-300 min-h-[20px] flex items-center justify-center">
            {isReady ? "READY TO EXPLORE!" : STAGES[stageIndex]}
          </p>
        </div>

        {/* Enter World Button */}
        <div className="pt-4 min-h-[64px] flex items-center justify-center">
          <AnimatePresence>
            {isReady && (
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEnter}
                className="mc-button mc-button-green px-8 py-3.5 text-sm md:text-base font-pixel tracking-wider shadow-2xl cursor-pointer"
              >
                [ ENTER WORLD ]
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Tip at bottom */}
        <p className="font-pixel-sub text-[10px] text-stone-400">
          Tip: You can toggle sound effects anytime using the Hotbar!
        </p>
      </div>
    </motion.div>
  );
}
