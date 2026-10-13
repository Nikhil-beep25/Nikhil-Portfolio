import { useState, useEffect, useMemo, useCallback } from 'react';
import { audioManager } from '../../utils/audioManager';

interface HotbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isNight: boolean;
  onToggleDayNight: () => void;
  xpLevel: number;
  xpProgress: number; // 0 to 100
}

interface HotbarSlot {
  id: string;
  label: string;
  keyNum: number;
  icon: string;
  type: 'nav' | 'action';
}

export default function Hotbar({
  activeSection,
  onNavigate,
  isNight,
  onToggleDayNight,
  xpLevel,
  xpProgress
}: HotbarProps) {
  const [soundEnabled, setSoundEnabled] = useState(() => audioManager.getSoundEnabled());
  const [hoveredSlot, setHoveredSlot] = useState<string | null>(null);

  const slots: HotbarSlot[] = useMemo(() => [
    { id: 'hero', label: 'HOME', keyNum: 1, icon: '🧭', type: 'nav' },
    { id: 'about', label: 'ABOUT', keyNum: 2, icon: '👤', type: 'nav' },
    { id: 'projects', label: 'PROJECTS', keyNum: 3, icon: '📦', type: 'nav' },
    { id: 'skills', label: 'SKILLS', keyNum: 4, icon: '⚒️', type: 'nav' },
    { id: 'achievements', label: 'ADVANCE', keyNum: 5, icon: '🏆', type: 'nav' },
    { id: 'creator', label: 'CONTENT', keyNum: 6, icon: '🎬', type: 'nav' },
    { id: 'contact', label: 'CONTACT', keyNum: 7, icon: '🔥', type: 'nav' },
    { id: 'sound', label: soundEnabled ? 'SFX: ON' : 'SFX: OFF', keyNum: 8, icon: soundEnabled ? '🔊' : '🔇', type: 'action' },
    { id: 'daynight', label: isNight ? 'NIGHT' : 'DAY', keyNum: 9, icon: isNight ? '🌙' : '☀️', type: 'action' },
  ], [soundEnabled, isNight]);

  const handleSlotClick = useCallback((slot: HotbarSlot) => {
    if (slot.type === 'nav') {
      audioManager.playSelect();
      onNavigate(slot.id);
    } else if (slot.id === 'sound') {
      const next = audioManager.toggleSound();
      setSoundEnabled(next);
    } else if (slot.id === 'daynight') {
      audioManager.playCelestialChime();
      onToggleDayNight();
    }
  }, [onNavigate, onToggleDayNight]);

  // Number key shortcuts 1-9
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;
      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= 9) {
        const slot = slots.find(s => s.keyNum === num);
        if (slot) {
          handleSlotClick(slot);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slots, handleSlotClick]);

  return (
    <nav 
      aria-label="Minecraft Hotbar Navigation"
      className="fixed bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-1.5 pointer-events-auto px-2 max-w-full"
    >
      {/* Tooltip on hover */}
      <div className="h-6 flex items-center justify-center pointer-events-none">
        {hoveredSlot && (
          <div className="mc-tooltip text-[10px] md:text-xs tracking-wider animate-fadeIn">
            {slots.find(s => s.id === hoveredSlot)?.label}
            <span className="text-stone-400 ml-1.5 font-mono">[{slots.find(s => s.id === hoveredSlot)?.keyNum}]</span>
          </div>
        )}
      </div>

      {/* Decorative XP Bar directly above hotbar */}
      <div className="w-full max-w-xs md:max-w-md px-1 flex flex-col items-center">
        {/* Level Counter in green above center */}
        <span className="font-pixel text-[11px] md:text-xs text-[#55FF55] -mb-1 select-none z-10 drop-shadow-[0_1px_1px_#000]">
          {xpLevel}
        </span>
        <div className="w-full mc-xp-bar-container h-2 md:h-2.5">
          <div
            className="mc-xp-bar-fill"
            style={{ width: `${Math.min(100, Math.max(0, xpProgress))}%` }}
          />
        </div>
      </div>

      {/* Hotbar 9-slot Container */}
      <div className="mc-panel p-1 md:p-1.5 flex items-center gap-1 shadow-2xl overflow-x-auto max-w-[96vw] border-4">
        {slots.map((slot) => {
          const isActive = slot.type === 'nav' && activeSection === slot.id;
          
          return (
            <button
              key={slot.id}
              onClick={() => handleSlotClick(slot)}
              onMouseEnter={() => {
                setHoveredSlot(slot.id);
                audioManager.playHover();
              }}
              onMouseLeave={() => setHoveredSlot(null)}
              className={`
                mc-slot relative flex flex-col items-center justify-center cursor-pointer transition-all
                w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12
                ${isActive ? 'active mc-hotbar-slot-active bg-stone-300' : ''}
              `}
              title={`${slot.label} (Press ${slot.keyNum})`}
              aria-label={slot.label}
            >
              {/* Slot Item Icon */}
              <span className="text-base sm:text-lg md:text-xl select-none transition-transform hover:scale-110 active:scale-90">
                {slot.icon}
              </span>

              {/* Hotbar Slot Key Number in corner */}
              <span className="absolute bottom-0.5 right-1 font-pixel text-[8px] md:text-[9px] text-stone-900 opacity-60 select-none">
                {slot.keyNum}
              </span>

              {/* Active Selection White Reticle Box */}
              {isActive && (
                <div className="absolute inset-0 border-2 border-white pointer-events-none" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
