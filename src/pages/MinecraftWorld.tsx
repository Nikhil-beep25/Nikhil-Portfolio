import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, MotionConfig, useScroll, useMotionValueEvent } from 'framer-motion';
import type { EffectLevel } from '../components/minecraft/EffectsMenu';
import LoadingScreen from '../components/minecraft/LoadingScreen';
import Hotbar from '../components/minecraft/Hotbar';
import HeroSection from '../components/minecraft/HeroSection';
import AboutSection from '../components/minecraft/AboutSection';
import ProjectInventory from '../components/minecraft/ProjectInventory';
import CraftingTableSection from '../components/minecraft/CraftingTableSection';
import AchievementsSection from '../components/minecraft/AchievementsSection';
import CreatorSpaceSection from '../components/minecraft/CreatorSpaceSection';
import ContactCampsiteSection from '../components/minecraft/ContactCampsiteSection';
import FooterSection from '../components/minecraft/FooterSection';
import SEO from '../components/SEO';
import { WorldSceneContext } from '../components/world3d/WorldSceneContext';
import WorldEnhancement from '../components/world3d/WorldEnhancement';
import '../components/minecraft/world-sections.css';
import { audioManager } from '../utils/audioManager';

export default function MinecraftWorld() {
  const [showLoading, setShowLoading] = useState(() => {
    try {
      return sessionStorage.getItem('minecraft-cinematic-entered-v2') !== 'true';
    } catch {
      return true;
    }
  });

  const effects: EffectLevel = 'cinematic';
  const [entrance, setEntrance] = useState(0);
  useEffect(() => { try { localStorage.setItem('portfolio-effects', 'cinematic'); } catch {} }, []);

  const [isNight, setIsNight] = useState(() => {
    try {
      const saved = localStorage.getItem('minecraft-portfolio-night');
      if (saved !== null) return saved === 'true';
      const hour = new Date().getHours();
      return hour < 6 || hour >= 18;
    } catch {
      return false;
    }
  });

  const [world3D, setWorld3D] = useState(() => { try { return localStorage.getItem('portfolio-3d') !== 'off'; } catch { return true; } });
  const [rendererReady, setRendererReady] = useState(false);
  const toggle3D = () => setWorld3D(current => !current);
  useEffect(() => { try { localStorage.setItem('portfolio-3d', world3D ? 'on' : 'off'); } catch {} }, [world3D]);

  const [activeSection, setActiveSection] = useState('hero');
  const [xpLevel, setXpLevel] = useState(25);
  const [xpProgress, setXpProgress] = useState(0);
  const visitedSections = useRef(new Set(['hero']));
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, 'change', value => setXpProgress(Math.round(value * 100)));

  // Sync Day/Night mode class to documentElement
  useEffect(() => {
    const root = document.documentElement;
    if (isNight) {
      root.classList.add('night-mode');
      root.classList.remove('day-mode');
    } else {
      root.classList.add('day-mode');
      root.classList.remove('night-mode');
    }
    try {
      localStorage.setItem('minecraft-portfolio-night', isNight ? 'true' : 'false');
    } catch {}
  }, [isNight]);

  // Award exploration once per section; keep side effects outside React state updaters.
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('main > section[id]');
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const id = entry.target.id;
        setActiveSection(id);
        if (!visitedSections.current.has(id)) {
          visitedSections.current.add(id);
          setXpLevel(level => level + 5);
          audioManager.playItemPop();
        }
      }
    }, { rootMargin: '-25% 0px -60% 0px' });
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    }
  };

  const handleToggleDayNight = () => {
    setIsNight(prev => !prev);
  };

  const handleEnterWorld = () => {
    try {
      sessionStorage.setItem('minecraft-cinematic-entered-v2', 'true');
    } catch {}
    setShowLoading(false);
    setEntrance(value => value + 1);
  };

  const handleMineBlockXP = () => {
    setXpLevel(lvl => lvl + 1);
  };

  return (
    <MotionConfig reducedMotion="user">
    <WorldSceneContext.Provider value={rendererReady && world3D}>
    <div data-effects={effects} data-3d={rendererReady && world3D ? 'ready' : 'fallback'} className={`world-page relative min-h-screen w-full transition-colors duration-700 ${isNight ? 'night-mode' : 'day-mode'}`}>
      {/* SEO Metadata */}
      <SEO 
        title="Nikhil Bhadauriya | Minecraft Interactive Developer Portfolio"
        description="Explore the Minecraft-inspired developer world of Nikhil Bhadauriya. Full-stack Python & MERN developer, SaaS builder, and AI enthusiast."
      />

      {/* Loading Screen */}
      <AnimatePresence onExitComplete={() => { document.getElementById('world-title')?.focus({preventScroll:true}); }}>
        {showLoading && (
          <LoadingScreen effects={effects} world3D={world3D} onEnter={handleEnterWorld} />
        )}
      </AnimatePresence>

      {/* Night mode floating Fireflies */}
      {isNight && (
        <div aria-hidden="true" className="world-fireflies fixed inset-0 pointer-events-none z-20 overflow-hidden">
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-[3px] h-[3px] rounded-full bg-[#d5e8a7] animate-firefly opacity-40"
              style={{
                top: `${(i * 19 + 10) % 90}%`,
                left: `${(i * 31 + 5) % 95}%`,
                animationDelay: `${(i * 0.6) % 4}s`,
                animationDuration: `${3 + (i % 3)}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content Sections */}
      <main inert={showLoading} className="relative z-10 w-full flex flex-col">
        {/* 1. Hero Landscape */}
        <HeroSection
          onExplore={() => handleNavigate('about')}
          onViewProjects={() => handleNavigate('projects')}
          isNight={isNight}
          world3D={world3D}
          onToggle3D={toggle3D}
          effects={effects}
          entrance={entrance}
          onReplay={() => { document.getElementById('hero')?.scrollIntoView({behavior:'instant'}); setShowLoading(true); }}
        />

        {/* 2. Character About Section */}
        <AboutSection />

        {/* 3. Project Chest Inventory */}
        <ProjectInventory />

        {/* 4. Skills Crafting Table */}
        <CraftingTableSection />

        {/* 5. Advancements Timeline */}
        <AchievementsSection />

        {/* 6. Content Creator Space */}
        <CreatorSpaceSection />

        {/* 7. Campsite & Inquiries */}
        <ContactCampsiteSection />

        {/* 8. Bedrock Footer */}
        <FooterSection
          onNavigate={handleNavigate}
          onBlockMine={handleMineBlockXP}
        />
      </main>

      <WorldEnhancement effects={effects} night={isNight} enabled={world3D && !showLoading} onStatus={setRendererReady}/>

      {/* 9. Hotbar Navigation (Fixed Bottom) */}
      <div inert={showLoading}>
      <Hotbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isNight={isNight}
        onToggleDayNight={handleToggleDayNight}
        xpLevel={xpLevel}
        xpProgress={xpProgress}
      />
      </div>
    </div>
    </WorldSceneContext.Provider>
    </MotionConfig>
  );
}
