import { useState, useEffect, useMemo, useCallback, useId, useRef } from 'react';
import { Compass, UserRound, Box, Pickaxe, Trophy, Clapperboard, Mail, Volume2, VolumeX, Sun, Moon, Grid2X2, X } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { audioManager } from '../../utils/audioManager';
import './hotbar.css';

interface HotbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isNight: boolean;
  onToggleDayNight: () => void;
  xpLevel: number;
  xpProgress: number;
}

interface HotbarSlot {
  id: string;
  label: string;
  shortLabel: string;
  keyNum: number;
  icon: LucideIcon;
  type: 'nav' | 'action';
}

const MOBILE_SECTIONS = ['hero', 'projects', 'skills', 'contact'];

function shortcutsAreBlocked(target: EventTarget | null) {
  if (target instanceof HTMLElement && (
    target.isContentEditable ||
    target.closest('input, textarea, select, [contenteditable="true"], [role="textbox"], [role="combobox"], [role="slider"]')
  )) return true;

  return Array.from(document.querySelectorAll<HTMLElement>(
    'dialog[open], [aria-modal="true"], [data-world-loading], [data-loading-overlay]'
  )).some(element => element.getClientRects().length > 0 && getComputedStyle(element).visibility !== 'hidden');
}

export default function Hotbar({ activeSection, onNavigate, isNight, onToggleDayNight, xpLevel, xpProgress }: HotbarProps) {
  const [soundEnabled, setSoundEnabled] = useState(() => audioManager.getSoundEnabled());
  const [moreOpen, setMoreOpen] = useState(false);
  const panelId = useId();
  const navRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const moreButtonRef = useRef<HTMLButtonElement>(null);

  const slots: HotbarSlot[] = useMemo(() => [
    { id: 'hero', label: 'Home', shortLabel: 'Home', keyNum: 1, icon: Compass, type: 'nav' },
    { id: 'about', label: 'About', shortLabel: 'About', keyNum: 2, icon: UserRound, type: 'nav' },
    { id: 'projects', label: 'Projects', shortLabel: 'Projects', keyNum: 3, icon: Box, type: 'nav' },
    { id: 'skills', label: 'Skills', shortLabel: 'Skills', keyNum: 4, icon: Pickaxe, type: 'nav' },
    { id: 'achievements', label: 'Achievements', shortLabel: 'Awards', keyNum: 5, icon: Trophy, type: 'nav' },
    { id: 'creator', label: 'Creator', shortLabel: 'Creator', keyNum: 6, icon: Clapperboard, type: 'nav' },
    { id: 'contact', label: 'Contact', shortLabel: 'Contact', keyNum: 7, icon: Mail, type: 'nav' },
    { id: 'sound', label: soundEnabled ? 'Turn sound effects off' : 'Turn sound effects on', shortLabel: soundEnabled ? 'SFX on' : 'SFX off', keyNum: 8, icon: soundEnabled ? Volume2 : VolumeX, type: 'action' },
    { id: 'daynight', label: isNight ? 'Switch to day' : 'Switch to night', shortLabel: isNight ? 'Night' : 'Day', keyNum: 9, icon: isNight ? Moon : Sun, type: 'action' },
  ], [soundEnabled, isNight]);

  const handleSlotClick = useCallback((slot: HotbarSlot) => {
    if (slot.type === 'nav') {
      audioManager.playSelect();
      setMoreOpen(false);
      onNavigate(slot.id);
    } else if (slot.id === 'sound') {
      setSoundEnabled(audioManager.toggleSound());
    } else {
      audioManager.playCelestialChime();
      onToggleDayNight();
    }
  }, [onNavigate, onToggleDayNight]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && moreOpen) {
        setMoreOpen(false);
        moreButtonRef.current?.focus();
        return;
      }
      if (event.defaultPrevented || event.repeat || event.isComposing || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || shortcutsAreBlocked(event.target)) return;
      if (!/^[1-9]$/.test(event.key)) return;
      const slot = slots.find(item => item.keyNum === Number(event.key));
      if (slot) {
        event.preventDefault();
        handleSlotClick(slot);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slots, handleSlotClick, moreOpen]);

  useEffect(() => {
    if (!moreOpen) return;
    panelRef.current?.querySelector<HTMLButtonElement>('button')?.focus();
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !navRef.current?.contains(event.target)) setMoreOpen(false);
    };
    document.addEventListener('pointerdown', closeOutside);
    return () => document.removeEventListener('pointerdown', closeOutside);
  }, [moreOpen]);

  const activeLabel = slots.find(slot => slot.id === activeSection)?.label ?? 'Home';
  const moreActive = !MOBILE_SECTIONS.includes(activeSection);
  const progress = Number.isFinite(xpProgress) ? Math.min(100, Math.max(0, xpProgress)) : 0;

  const renderSlot = (slot: HotbarSlot, expanded = false) => {
    const Icon = slot.icon;
    const selected = slot.type === 'nav' && activeSection === slot.id;
    return (
      <button
        key={slot.id}
        type="button"
        className={`world-hotbar__slot${expanded ? ' world-hotbar__slot--expanded' : ''}${slot.type === 'action' ? ' world-hotbar__slot--action' : ''}`}
        data-active={selected || undefined}
        onClick={() => handleSlotClick(slot)}
        onMouseEnter={() => audioManager.playHover()}
        aria-label={slot.label}
        aria-current={selected ? 'location' : undefined}
        aria-pressed={slot.id === 'sound' ? soundEnabled : slot.id === 'daynight' ? isNight : undefined}
        aria-keyshortcuts={String(slot.keyNum)}
        title={`${slot.label} · ${slot.keyNum}`}
      >
        <Icon aria-hidden="true" className="world-hotbar__icon" size={21} strokeWidth={1.65} />
        <span className="world-hotbar__label">{expanded && slot.type === 'nav' ? slot.label : slot.shortLabel}</span>
        <span className="world-hotbar__key" aria-hidden="true">{slot.keyNum}</span>
      </button>
    );
  };

  return (
    <nav ref={navRef} className="world-hotbar" aria-label="World navigation">
      {moreOpen && (
        <div ref={panelRef} id={panelId} className="world-hotbar__more-panel" role="region" aria-label="More destinations and settings">
          <div className="world-hotbar__panel-heading">
            <span>Explore the world</span>
            <button type="button" className="world-hotbar__close" aria-label="Close more navigation" onClick={() => { setMoreOpen(false); moreButtonRef.current?.focus(); }}>
              <X size={18} aria-hidden="true" />
            </button>
          </div>
          <div className="world-hotbar__extra-nav">
            {slots.filter(slot => slot.type === 'nav' && !MOBILE_SECTIONS.includes(slot.id)).map(slot => renderSlot(slot, true))}
          </div>
          <div className="world-hotbar__settings" aria-label="World settings">
            {slots.filter(slot => slot.type === 'action').map(slot => renderSlot(slot, true))}
          </div>
          <p className="world-hotbar__sound-note">Original sound effects · {soundEnabled ? 'enabled' : 'off until you enable them'}</p>
        </div>
      )}
      <div className="world-hotbar__status">
        <span className="world-hotbar__current"><span aria-hidden="true" />{activeLabel}</span>
        <span className="world-hotbar__level" aria-label={`Experience level ${xpLevel}`}>LVL <b>{xpLevel}</b></span>
      </div>
      <div className="world-hotbar__xp" role="progressbar" aria-label="Exploration progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress)}>
        <span style={{ width: `${progress}%` }} />
      </div>
      <div className="world-hotbar__frame world-hotbar__desktop">
        {slots.map(slot => renderSlot(slot))}
      </div>
      <div className="world-hotbar__frame world-hotbar__mobile">
        {slots.filter(slot => MOBILE_SECTIONS.includes(slot.id)).map(slot => renderSlot(slot))}
        <button
          ref={moreButtonRef}
          type="button"
          className="world-hotbar__slot"
          data-active={moreActive || moreOpen || undefined}
          aria-label="More destinations and settings"
          aria-expanded={moreOpen}
          aria-controls={moreOpen ? panelId : undefined}
          onClick={() => { audioManager.playClick(); setMoreOpen(open => !open); }}
        >
          {moreOpen ? <X size={21} className="world-hotbar__icon" aria-hidden="true" /> : <Grid2X2 size={21} className="world-hotbar__icon" aria-hidden="true" />}
          <span className="world-hotbar__label">More</span>
        </button>
      </div>
    </nav>
  );
}
