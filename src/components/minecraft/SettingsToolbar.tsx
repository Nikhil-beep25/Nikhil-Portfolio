import { useState } from 'react';
import { Volume2, VolumeX, Sun, Moon } from 'lucide-react';
import { audioManager } from '../../utils/audioManager';
import './settings-toolbar.css';

interface SettingsToolbarProps {
  isNight: boolean;
  onToggleDayNight: () => void;
}

export default function SettingsToolbar({ isNight, onToggleDayNight }: SettingsToolbarProps) {
  const [soundEnabled, setSoundEnabled] = useState(() => audioManager.getSoundEnabled());

  const handleToggleSound = () => {
    setSoundEnabled(audioManager.toggleSound());
  };

  const handleToggleDayNight = () => {
    audioManager.playCelestialChime();
    onToggleDayNight();
  };

  return (
    <aside className="world-settings-toolbar" aria-label="World settings">
      <div className="world-settings-toolbar__frame">
        {/* 1. Sound Toggle */}
        <button
          type="button"
          className="world-settings-toolbar__slot"
          onClick={handleToggleSound}
          onMouseEnter={() => audioManager.playHover()}
          aria-label={soundEnabled ? 'Turn sound effects off' : 'Turn sound effects on'}
          aria-pressed={soundEnabled}
          title={soundEnabled ? 'Sound effects: Enabled' : 'Sound effects: Muted'}
        >
          {soundEnabled ? (
            <Volume2 aria-hidden="true" className="world-settings-toolbar__icon" size={20} strokeWidth={1.65} />
          ) : (
            <VolumeX aria-hidden="true" className="world-settings-toolbar__icon" size={20} strokeWidth={1.65} />
          )}
          <span className="world-settings-toolbar__label">{soundEnabled ? 'Sound on' : 'Sound off'}</span>
        </button>

        {/* 2. Day/Night Toggle */}
        <button
          type="button"
          className="world-settings-toolbar__slot"
          onClick={handleToggleDayNight}
          onMouseEnter={() => audioManager.playHover()}
          aria-label={isNight ? 'Switch to day' : 'Switch to night'}
          aria-pressed={isNight}
          title={isNight ? 'Theme: Night' : 'Theme: Day'}
        >
          {isNight ? (
            <Moon aria-hidden="true" className="world-settings-toolbar__icon" size={20} strokeWidth={1.65} />
          ) : (
            <Sun aria-hidden="true" className="world-settings-toolbar__icon" size={20} strokeWidth={1.65} />
          )}
          <span className="world-settings-toolbar__label">{isNight ? 'Night' : 'Day'}</span>
        </button>
      </div>
    </aside>
  );
}
