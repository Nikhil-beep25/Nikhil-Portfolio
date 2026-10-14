import { useContext, useEffect, useRef, useState } from 'react';
import { RotateCcw, Hand, Box } from 'lucide-react';
import { audioManager } from '../../utils/audioManager';
import './world3d.css';

import { WorldSceneContext } from './WorldSceneContext';

export type SceneKind = 'avatar' | 'chest' | 'crafting' | 'achievement' | 'portal' | 'campfire';
const labels: Record<SceneKind, string> = {
  avatar: 'Nikhil’s voxel avatar, with curly black hair, a short beard and a black shirt',
  chest: 'A three-dimensional project chest on a woodland island',
  crafting: 'A three-dimensional crafting table with a floating diamond',
  achievement: 'A gold achievement trophy on a stone pedestal',
  portal: 'A glowing voxel portal into the creator realm',
  campfire: 'A glowing campfire beside a lantern and voxel trees',
};
const actions: Record<SceneKind, string> = { avatar: 'Wave', chest: 'Open chest', crafting: 'Craft', achievement: 'Celebrate', portal: 'Activate portal', campfire: 'Stoke fire' };

export default function SceneFrame({ kind, hero = false }: { kind: SceneKind; hero?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const ready = useContext(WorldSceneContext);
  const [activated, setActivated] = useState(false);
  useEffect(() => { if (!ready) setActivated(false); }, [ready]);
  const act = (action: string) => {
    if (action === 'activate') setActivated(value => !value);
    ref.current?.dispatchEvent(new CustomEvent('voxel-action', { detail: action }));
    if (action === 'turn') audioManager.playSelect();
    else if (kind === 'chest') audioManager.playChestOpen();
    else audioManager.playItemPop();
  };
  return <div className={`world-diorama${hero ? ' world-diorama--hero' : ''}`}>
    <div ref={ref} data-voxel-scene={kind} data-hero={hero || undefined} className="voxel-stage" tabIndex={ready ? 0 : undefined} role="group"
      aria-label={ready ? `${labels[kind]}. Drag to rotate, or use left and right arrow keys. Press Enter to ${actions[kind].toLowerCase()}.` : labels[kind]}
      onKeyDown={event => {
        if (!ready) return;
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); act(event.key === 'ArrowLeft' ? 'left' : 'right'); }
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); act('activate'); }
      }}>
      <img aria-hidden={ready} className="voxel-fallback" srcSet={kind === 'avatar' ? '/world/nikhil-avatar-small.webp 600w, /world/nikhil-avatar.webp 1200w' : undefined} sizes={hero ? '(max-width: 700px) 100vw, (max-aspect-ratio: 1/1) and (max-height: 1100px) min(70vw, 540px), (max-aspect-ratio: 1/1) min(82vw, 850px), 53vw' : '340px'} src={kind === 'avatar' ? '/world/nikhil-avatar.webp' : '/world/woodland-campsite-small.webp'} alt={kind === 'avatar' ? labels.avatar : 'An illustrated woodland campsite'} loading={hero ? 'eager' : 'lazy'} width={kind === 'avatar' ? 1200 : 960} height={kind === 'avatar' ? 890 : 540} />
    </div>
    {ready && <div className="voxel-controls">
      <span><Box size={12} aria-hidden="true" />Drag to explore</span>
      <button type="button" onClick={() => act('turn')} aria-label={`Rotate ${kind === 'avatar' ? 'Nikhil’s avatar' : kind}`}><RotateCcw size={13} aria-hidden="true" />Turn</button>
      <button type="button" onClick={() => act('activate')} aria-pressed={kind === 'chest' || kind === 'portal' ? activated : undefined}><Hand size={13} aria-hidden="true" />{kind === 'chest' && activated ? 'Close chest' : kind === 'portal' && activated ? 'Dim portal' : actions[kind]}</button>
    </div>}
  </div>;
}
