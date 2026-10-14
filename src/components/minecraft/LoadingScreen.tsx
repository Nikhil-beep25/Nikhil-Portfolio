import { lazy, Suspense, useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Volume2, VolumeX } from 'lucide-react';
import { audioManager } from '../../utils/audioManager';
import { PORTFOLIO_DATA } from '../../data/portfolio';
import type { EffectLevel } from './EffectsMenu';
import './cinematic.css';
const IntroScene = lazy(() => import('../world3d/IntroScene'));

export default function LoadingScreen({ onEnter, effects, world3D, isNight = false }: {
  onEnter: () => void; effects: EffectLevel; world3D: boolean; isNight?: boolean;
}) {
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const reduced = useReducedMotion();
  const still = !!reduced || effects === 'off';
  const dialog = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let cancelled = false;
    let completed = 0;
    const assets = Array.from(document.querySelectorAll<HTMLImageElement>('#hero img'));
    const finish = () => { if (!cancelled) { setProgress(100); setReady(true); } };
    const timeout = setTimeout(finish, 3000);
    Promise.allSettled(assets.map(image => image.decode().catch(() => {}).then(() => {
      completed += 1;
      if (!cancelled) setProgress(Math.round(completed / Math.max(assets.length, 1) * 100));
    }))).then(finish);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { cancelled = true; clearTimeout(timeout); document.body.style.overflow = overflow; };
  }, []);
  const enter = () => { audioManager.playEnterWorld(); onEnter(); };
  return <motion.div ref={dialog} data-world-loading data-night={isNight} data-still={still} role="dialog" aria-modal="true" aria-labelledby="loading-title"
    initial={{opacity:1}} exit={{opacity:0,scale:still?1:1.08}} transition={{duration:still?.1:.65}} className={`realm-opening ${isNight ? 'night-mode' : 'day-mode'}`}
    onKeyDown={event => {
      if (event.key === 'Escape') { event.preventDefault(); onEnter(); }
      if (event.key !== 'Tab') return;
      const buttons = dialog.current?.querySelectorAll<HTMLButtonElement>('button:not(:disabled)');
      if (!buttons?.length) return;
      const first = buttons[0], last = buttons[buttons.length-1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }}>
    <div className="opening-backdrop" aria-hidden="true"/>
    {world3D && <div className="opening-world"><Suspense fallback={null}><IntroScene still={still || effects === 'calm'}/></Suspense></div>}
    <div className="opening-top"><span>N. / THE DEVELOPER REALM</span><button autoFocus onClick={onEnter}>Skip intro <ArrowUpRight size={15}/></button></div>
    <div className="opening-content">
      <p className="opening-kicker">A WORLD BUILT ONE BLOCK AT A TIME</p>
      <h2 id="loading-title" className="opening-name" aria-label={`${PORTFOLIO_DATA.personal.firstName} ${PORTFOLIO_DATA.personal.lastName}`}>
        {[PORTFOLIO_DATA.personal.firstName, PORTFOLIO_DATA.personal.lastName].map((word, row) => <span className="name-row" key={word} aria-hidden="true">
          {Array.from(word).map((letter, i) => <span className="name-letter" key={i} style={{animationDelay:`${.12+i*.045+row*.25}s`}}>{letter}</span>)}
        </span>)}
      </h2>
      <p className="opening-description">Ideas become systems.<br/>Blocks become worlds.</p>
      <div className="opening-loading" role="progressbar" aria-label="Preparing world artwork" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}><span style={{width:`${progress}%`}}/></div>
      <p className="opening-status" role="status">{ready ? 'YOUR NEXT ADVENTURE IS READY' : `FORMING YOUR WORLD · ${progress}%`}</p>
      <button className="opening-enter" onClick={enter} disabled={!ready}>Enter my world <ArrowUpRight size={19}/></button>
    </div>
    <div className="opening-bottom"><span>CODE. CREATE. EXPLORE.</span><span>{audioManager.getSoundEnabled() ? <Volume2 size={13}/> : <VolumeX size={13}/>}{audioManager.getSoundEnabled() ? 'Sound enabled' : 'Sound is optional'}</span></div>
  </motion.div>;
}
