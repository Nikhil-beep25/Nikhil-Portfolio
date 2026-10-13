import { useRef } from 'react';
import { Sparkles, RotateCcw } from 'lucide-react';

export type EffectLevel = 'cinematic' | 'calm' | 'off';

export default function EffectsMenu({ value, onChange, onReplay }: {
  value: EffectLevel; onChange: (value: EffectLevel) => void; onReplay: () => void;
}) {
  const panel = useRef<HTMLDivElement>(null);
  return <div className="effects-menu">
    <button type="button" className="effects-trigger" popoverTarget="world-effects-panel"><Sparkles size={14} aria-hidden="true"/><span>Effects</span></button>
    <div ref={panel} id="world-effects-panel" popover="auto" className="effects-panel">
      <fieldset>
        <legend>WORLD ATMOSPHERE</legend>
        {([
          ['cinematic', 'Cinematic', 'Floating relics, light trails & depth'],
          ['calm', 'Calm', 'Gentle movement, quieter scenery'],
          ['off', 'Off', 'Still scenery, interactive controls'],
        ] as const).map(([level, label, description]) => <label key={level}>
          <input type="radio" name="world-effects" value={level} checked={value === level} onChange={() => onChange(level)}/>
          <span>{label}<small>{description}</small></span>
        </label>)}
      </fieldset>
      <button type="button" onClick={() => { panel.current?.hidePopover(); onReplay(); }}><RotateCcw size={14} aria-hidden="true"/>Replay opening</button>
      <p>Your device’s reduced-motion preference always takes priority.</p>
    </div>
  </div>;
}
