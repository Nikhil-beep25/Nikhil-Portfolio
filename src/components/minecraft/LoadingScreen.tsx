import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { audioManager } from '../../utils/audioManager';

interface LoadingScreenProps {
  onEnter: () => void;
}

export default function LoadingScreen({ onEnter }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let completed = 0;
    const assets = Array.from(document.querySelectorAll<HTMLImageElement>('#hero img'));
    const finish = () => {
      if (!cancelled) { setProgress(100); setIsReady(true); }
    };
    const timeout = setTimeout(finish, 3000);
    Promise.allSettled(assets.map(image => image.decode().catch(() => {}).then(() => {
      completed += 1;
      if (!cancelled) setProgress(Math.round(completed / Math.max(assets.length, 1) * 100));
    }))).then(finish);
    return () => { cancelled = true; clearTimeout(timeout); };
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
      data-world-loading
      role="dialog"
      aria-modal="true"
      aria-labelledby="loading-title"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center select-none overflow-hidden"
      style={{
        backgroundColor: '#101d18',
        backgroundImage: 'linear-gradient(#071611bb,#071611ee), url(/world/valley-night-small.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Skip button in corner */}
      <button
        autoFocus
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
            <h2 id="loading-title" className="font-pixel text-xl sm:text-2xl md:text-3xl text-white mc-text-shadow tracking-wider">
              {isReady ? "WORLD GENERATED!" : "GENERATING WORLD..."}
            </h2>
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
            {isReady ? "READY TO EXPLORE!" : "Preparing landscape artwork..."}
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
