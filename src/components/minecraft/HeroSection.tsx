import { useEffect, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Compass, CodeXml, Box } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolio';
import { audioManager } from '../../utils/audioManager';
import './hero.css';
import SceneFrame from '../world3d/SceneFrame';

interface HeroSectionProps {
  onExplore: () => void;
  onViewProjects: () => void;
  isNight: boolean;
  world3D: boolean;
  onToggle3D: () => void;
}

export default function HeroSection({ onExplore, onViewProjects, isNight, world3D, onToggle3D }: HeroSectionProps) {
  const scene = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: scene, offset: ['start start', 'end start'] });
  const landscapeY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const { personal, socials } = PORTFOLIO_DATA;

  useEffect(() => {
    const element = scene.current;
    if (!element) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointer = window.matchMedia('(pointer: fine)');
    let frame = 0;
    let x = 0;
    let y = 0;
    let inView = true;
    const paint = () => {
      frame = 0;
      if (reduced.matches || !inView) return;
      element.style.setProperty('--look-x', `${x}px`);
      element.style.setProperty('--look-y', `${y}px`);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(paint); };
    const move = (event: PointerEvent) => {
      if (!pointer.matches) return;
      const bounds = element.getBoundingClientRect();
      x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 18;
      y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 10;
      schedule();
    };
    const reset = () => {
      x = 0; y = 0;
      element.style.setProperty('--look-x', '0px');
      element.style.setProperty('--look-y', '0px');
      element.style.setProperty('--scene-scroll', '0px');
    };
    const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; schedule(); });
    observer.observe(element);
    element.addEventListener('pointermove', move, { passive: true });
    element.addEventListener('pointerleave', reset);
    reduced.addEventListener('change', reset);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      element.removeEventListener('pointermove', move);
      element.removeEventListener('pointerleave', reset);
      reduced.removeEventListener('change', reset);
    };
  }, []);

  return (
    <section id="hero" ref={scene} className="hero-world" data-night={isNight} aria-labelledby="world-title">
      <motion.div className="hero-depth" style={{ y: reducedMotion ? 0 : landscapeY }} aria-hidden="true">
      <div className="hero-landscape">
        <img className="hero-day" src="/world/valley-day.webp" srcSet="/world/valley-day-small.webp 960w, /world/valley-day.webp 1672w" sizes="100vw" width="1672" height="940" alt="" fetchPriority={isNight ? 'auto' : 'high'} />
        <img className="hero-night" src="/world/valley-night.webp" srcSet="/world/valley-night-small.webp 960w, /world/valley-night.webp 1672w" sizes="100vw" width="1672" height="940" alt="" fetchPriority={isNight ? 'high' : 'auto'} />
      </div>
      </motion.div>
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="hero-mist" aria-hidden="true" />
      <div className="hero-motes" aria-hidden="true">
        {Array.from({ length: 10 }, (_, index) => <i key={index} style={{ left: `${9 + index * 9}%`, top: `${35 + (index * 13) % 50}%`, animationDelay: `${index * -1.7}s` }} />)}
      </div>
      <header className="world-header">
        <a className="world-brand" href="#hero" aria-label="Nikhil's world, home">
          <span className="world-monogram" aria-hidden="true">N<span>.</span></span>
          <span>NIKHIL'S WORLD<small>A DEVELOPER'S ADVENTURE</small></span>
        </a>
        <div className="world-header-links">
          <button className="world-render-mode" aria-pressed={world3D} onClick={onToggle3D} title="Toggle interactive 3D scenes"><Box size={14}/>{world3D ? '3D world' : 'Lite mode'}</button>
          <span className="world-time"><i />{isNight ? 'Moonlit hours' : 'Golden hours'}</span>
          <a href={socials.find(social => social.platform === 'GitHub')?.url} target="_blank" rel="noreferrer" aria-label="Nikhil on GitHub"><CodeXml size={17} /><span>GitHub</span></a>
          <a href={personal.resumeUrl} target="_blank" rel="noreferrer">Resume <ArrowUpRight size={16} /></a>
        </div>
      </header>
      <div className="hero-copy">
        <p className="hero-eyebrow"><span />HELLO, TRAVELER. I'M</p>
        <h1 id="world-title"><span>{personal.firstName}</span><strong>{personal.lastName}</strong></h1>
        <p className="hero-tagline">{personal.tagline}</p>
        <p className="hero-quote">Exploring ideas. Building impact.<br />One block at a time.</p>
        <div className="hero-actions">
          <button onClick={() => { audioManager.playClick(); onExplore(); }} className="world-button world-button-primary"><Compass size={18} />Explore my world<ArrowDown size={16} /></button>
          <button onClick={() => { audioManager.playChestOpen(); onViewProjects(); }} className="world-button world-button-secondary">View my projects<ArrowUpRight size={17} /></button>
        </div>
        <p className="hero-location">{personal.location}<span>•</span>Always building something.</p>
      </div>
      <SceneFrame kind="avatar" hero />
    </section>
  );
}
