import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../data/portfolio';
import { MinecraftBreakableBlock, MinecraftTorch } from './PixelArt';
import { audioManager } from '../../utils/audioManager';

interface FooterSectionProps {
  onNavigate: (sectionId: string) => void;
  onBlockMine: () => void;
}

export default function FooterSection({ onNavigate, onBlockMine }: FooterSectionProps) {
  const [cracks, setCracks] = useState(0);
  const [easterEggRevealed, setEasterEggRevealed] = useState(false);

  const handleMineDiamond = () => {
    audioManager.playBlockBreak();
    onBlockMine();

    if (cracks < 3) {
      setCracks(c => c + 1);
    } else {
      // Broken! Reveal secret Easter egg!
      audioManager.playAdvancement();
      setCracks(0);
      setEasterEggRevealed(true);
    }
  };

  return (
    <footer className="relative bg-[#1A1A1A] border-t-4 border-[#373737] pt-16 pb-24 md:pb-28 text-white select-none z-10 overflow-hidden">
      
      {/* Easter Egg Modal Popup */}
      <AnimatePresence>
        {easterEggRevealed && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="mc-panel-dark max-w-md w-full p-6 border-4 border-cyan-400 shadow-2xl text-center space-y-4"
            >
              <span className="text-4xl animate-bounce inline-block">💎</span>
              <h3 className="font-pixel text-base text-cyan-300 mc-text-shadow">
                SECRET EASTER EGG UNLOCKED!
              </h3>
              <p className="font-body text-xs text-stone-200">
                You mined the hidden bedrock diamond!
                <br />
                <strong className="text-[#55FF55] block mt-2">
                  "The best code is built one block at a time, with patience and clean architecture."
                </strong>
                — Nikhil Bhadauriya
              </p>
              <button
                onClick={() => setEasterEggRevealed(false)}
                className="mc-button mc-button-diamond px-6 py-2 text-xs font-pixel cursor-pointer"
              >
                [ CLAIM DIAMOND 🏆 ]
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-6 space-y-12">
        
        {/* Top: Diamond Block Interactive Mining Zone */}
        <div className="mc-panel-dark p-6 border-2 border-stone-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <MinecraftBreakableBlock
              type="diamond"
              size={52}
              cracks={cracks}
              onClick={handleMineDiamond}
            />
            <div>
              <span className="font-pixel text-[11px] text-cyan-300 block">
                INTERACTIVE DIAMOND ORE
              </span>
              <span className="font-body text-xs text-stone-400">
                Click {4 - cracks} more times to mine the secret Easter Egg!
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <MinecraftTorch size={20} />
            <span className="font-pixel text-[10px] text-amber-300">
              MINING LEVEL: MAX
            </span>
            <MinecraftTorch size={20} />
          </div>
        </div>

        {/* Middle: 3 Columns (About, Socials, Navigation) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
          
          {/* Column 1: Info */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="font-pixel text-sm text-white mc-text-shadow">
              NIKHIL BHADAURIYA
            </h4>
            <span className="font-pixel-sub text-xs text-[#55FF55] block">
              {PORTFOLIO_DATA.personal.tagline}
            </span>
            <p className="font-body text-xs text-stone-400 leading-relaxed max-w-sm">
              An immersive developer world combining Minecraft aesthetic, clean software engineering, and verified full-stack codebases.
            </p>
          </div>

          {/* Column 2: Hotbar Fast Links */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="font-pixel text-xs text-amber-300">
              WORLD WAYPOINTS
            </h5>
            <div className="grid grid-cols-2 gap-2 font-pixel-sub text-[10px] text-stone-300">
              {[
                { id: 'hero', label: 'HOME' },
                { id: 'about', label: 'ABOUT' },
                { id: 'projects', label: 'PROJECTS' },
                { id: 'skills', label: 'SKILLS' },
                { id: 'achievements', label: 'ADVANCEMENTS' },
                { id: 'contact', label: 'CONTACT' },
              ].map(w => (
                <button
                  key={w.id}
                  onClick={() => {
                    audioManager.playSelect();
                    onNavigate(w.id);
                  }}
                  className="hover:text-amber-200 text-left transition-colors cursor-pointer"
                >
                  ➔ {w.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Social Blocks */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="font-pixel text-xs text-amber-300">
              SOCIAL INVENTORY
            </h5>
            <div className="flex flex-wrap gap-2">
              {PORTFOLIO_DATA.socials.map((soc) => (
                <a
                  key={soc.platform}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => audioManager.playClick()}
                  className="mc-button px-3 py-1.5 text-[9px] font-pixel cursor-pointer"
                >
                  {soc.platform} ↗
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom: Bedrock Disclaimer */}
        <div className="border-t border-stone-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-stone-500 font-pixel-sub text-[10px] gap-4">
          <p>
            © {new Date().getFullYear()} Nikhil Bhadauriya. Built with React, TypeScript & Web Audio.
          </p>
          <p>
            Minecraft inspired theme • Exploring Ideas, One Block at a Time.
          </p>
        </div>

      </div>
    </footer>
  );
}
