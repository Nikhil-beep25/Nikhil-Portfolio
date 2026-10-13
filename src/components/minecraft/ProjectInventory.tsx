import SceneFrame from '../world3d/SceneFrame';
import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA, type Project } from '../../data/portfolio';
import { MinecraftItemIcon, MinecraftTorch } from './PixelArt';
import { audioManager } from '../../utils/audioManager';

export default function ProjectInventory() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const handleCloseProject = useCallback(() => {
    audioManager.playChestClose();
    setSelectedProject(null);
  }, []);

  useEffect(() => {
    if (!selectedProject || !dialogRef.current) return;

    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    const backgroundElements = Array.from(document.body.children)
      .filter((element): element is HTMLElement => element instanceof HTMLElement && element !== dialog)
      .map(element => ({ element, inert: element.inert }));

    document.body.style.overflow = 'hidden';
    backgroundElements.forEach(({ element }) => { element.inert = true; });

    const getFocusableElements = () => Array.from(dialog.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )).filter(element => element.getClientRects().length > 0);

    const focusFirstControl = () => (getFocusableElements()[0] || dialog).focus({ preventScroll: true });
    focusFirstControl();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        handleCloseProject();
      } else if (/^[1-9]$/.test(e.key)) {
        // Global hotbar shortcuts must not navigate the background while inspecting a project.
        e.stopPropagation();
      } else if (e.key === 'Tab') {
        const controls = getFocusableElements();
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (!first || !last) {
          e.preventDefault();
          dialog.focus();
        } else if (e.shiftKey && (document.activeElement === first || document.activeElement === dialog)) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    const containFocus = (event: FocusEvent) => {
      if (event.target instanceof Node && !dialog.contains(event.target)) focusFirstControl();
    };

    document.addEventListener('keydown', handleKeyDown, true);
    document.addEventListener('focusin', containFocus);
    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
      document.removeEventListener('focusin', containFocus);
      document.body.style.overflow = previousOverflow;
      backgroundElements.forEach(({ element, inert }) => { element.inert = inert; });
      if (triggerRef.current?.isConnected) triggerRef.current.focus({ preventScroll: true });
    };
  }, [selectedProject, handleCloseProject]);

  const handleOpenProject = (project: Project, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    audioManager.playChestOpen();
    setSelectedProject(project);
  };

  const getRarityBadge = (rarity?: string) => {
    switch (rarity) {
      case 'legendary':
        return { label: 'LEGENDARY', border: 'border-amber-400', color: 'text-amber-400' };
      case 'epic':
        return { label: 'EPIC', border: 'border-purple-400', color: 'text-purple-400' };
      case 'rare':
        return { label: 'RARE', border: 'border-cyan-400', color: 'text-cyan-400' };
      default:
        return { label: 'COMMON', border: 'border-stone-400', color: 'text-stone-300' };
    }
  };

  return (
    <section 
      id="projects" 
      className="world-section relative py-20 md:py-28 px-4 md:px-8 w-full z-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        
        <SceneFrame kind="chest" />

        {/* Section Header */}
        <div className="section-heading text-center space-y-3">
          <div className="flex items-center justify-center gap-3">
            <MinecraftTorch size={24} />
            <h2 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-white mc-text-shadow">
              PROJECT INVENTORY
            </h2>
            <MinecraftTorch size={24} />
          </div>
          <p className="font-pixel-sub text-xs sm:text-sm text-stone-300">
            [ COLLECTED ARTIFACTS & FULL-STACK CODEBASES ]
          </p>
        </div>

        {/* ── Featured Flagship Spotlight (NagrikSetu) ── */}
        {(() => {
          const flagship = PORTFOLIO_DATA.projects.find(p => p.isFlagship) || PORTFOLIO_DATA.projects[0];
          const badge = getRarityBadge(flagship.rarity);

          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mc-panel-dark p-6 sm:p-8 border-4 border-amber-400/50 shadow-2xl relative overflow-hidden text-left"
            >
              <div className="absolute top-3 right-4 flex items-center gap-2">
                <span className={`font-pixel text-[9px] ${badge.color} border ${badge.border} bg-black/60 px-2 py-0.5`}>
                  ⭐ FEATURED ARTIFACT
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Icon & Title */}
                <div className="lg:col-span-4 flex flex-col items-start gap-3">
                  <div className="mc-slot w-20 h-20 flex items-center justify-center bg-stone-800 border-4 border-amber-400/40 p-2 shadow-inner">
                    <MinecraftItemIcon type={flagship.icon} size={48} />
                  </div>
                  <div>
                    <h3 className="font-pixel text-xl sm:text-2xl text-white mc-text-shadow">
                      {flagship.title}
                    </h3>
                    <p className="font-pixel-sub text-xs text-amber-300 mt-1">
                      {flagship.tagline}
                    </p>
                  </div>
                </div>

                {/* Right: Description & Action */}
                <div className="lg:col-span-8 space-y-4">
                  <p className="font-body text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {flagship.desc}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2">
                    {flagship.tech.map((t) => (
                      <span key={t} className="mc-slot px-2.5 py-1 text-[10px] font-pixel-sub text-cyan-300 bg-stone-900">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-1">
                    <button
                      type="button"
                      aria-haspopup="dialog"
                      aria-label={`Inspect ${flagship.title}`}
                      onClick={event => handleOpenProject(flagship, event.currentTarget)}
                      className="mc-button mc-button-green px-5 py-2.5 text-xs font-pixel tracking-wider cursor-pointer"
                    >
                      [ OPEN CHEST 📦 ]
                    </button>
                    <a
                      href={flagship.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => audioManager.playClick()}
                      className="mc-button mc-button-wood px-5 py-2.5 text-xs font-pixel tracking-wider"
                    >
                      [ GITHUB REPO ↗ ]
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })()}

        {/* ── Main Minecraft Chest Inventory Grid ── */}
        <div className="mc-panel p-6 sm:p-8 space-y-4 shadow-2xl">
          <div className="flex items-center justify-between border-b-2 border-stone-500 pb-2">
            <span className="font-pixel text-xs sm:text-sm text-stone-900 flex items-center gap-2">
              <span>CHEST INVENTORY</span>
              <span className="text-[10px] font-pixel-sub text-stone-600">(Click any item to inspect)</span>
            </span>
            <span className="font-pixel text-[10px] text-emerald-800">
              {PORTFOLIO_DATA.projects.length} / 27 SLOTS
            </span>
          </div>

          {/* Project Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {PORTFOLIO_DATA.projects.map((project) => {
              const badge = getRarityBadge(project.rarity);

              return (
                <motion.button
                  key={project.id}
                  type="button"
                  aria-haspopup="dialog"
                  aria-label={`Inspect ${project.title}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={event => handleOpenProject(project, event.currentTarget)}
                  onMouseEnter={() => audioManager.playHover()}
                  className="mc-slot p-4 bg-stone-300 hover:bg-stone-200 cursor-pointer flex flex-col justify-between h-48 border-2 transition-all group"
                >
                  {/* Top Bar with Icon & Rarity */}
                  <span className="flex items-start justify-between">
                    <span className="w-12 h-12 bg-stone-700 border-2 border-stone-900 flex items-center justify-center p-1 group-hover:border-amber-400 transition-colors">
                      <MinecraftItemIcon type={project.icon} size={32} />
                    </span>
                    <span className={`font-pixel text-[8px] ${badge.color} bg-black/60 px-1.5 py-0.5 border border-stone-700`}>
                      {badge.label}
                    </span>
                  </span>

                  {/* Project Info */}
                  <span className="mt-2 text-left">
                    <span className="block font-pixel text-xs text-stone-900 group-hover:text-amber-800 transition-colors">
                      {project.title}
                    </span>
                    <span className="font-body text-[11px] text-stone-600 line-clamp-2 mt-1 leading-snug">
                      {project.tagline}
                    </span>
                  </span>

                  {/* Bottom Tech summary */}
                  <span className="flex items-center justify-between pt-2 border-t border-stone-400 mt-2">
                    <span className="font-pixel-sub text-[9px] text-stone-700">
                      {project.tech.slice(0, 2).join(', ')}
                    </span>
                    <span className="font-pixel text-[8px] text-emerald-700 group-hover:translate-x-1 transition-transform">
                      [VIEW]
                    </span>
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

      </div>

      {/* ─────────────────────────────────────────────────────────────
          ACCESSIBLE CHEST DETAIL MODAL
          ───────────────────────────────────────────────────────────── */}
      {createPortal(<AnimatePresence>
        {selectedProject && (
          <div 
            ref={dialogRef}
            tabIndex={-1}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="mc-panel-dark max-w-xl w-full max-h-[calc(100dvh-1.5rem)] overflow-y-auto overscroll-contain p-5 sm:p-7 border-4 border-amber-400 shadow-2xl relative text-left space-y-5"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={handleCloseProject}
                className="absolute top-4 right-4 mc-button px-2.5 py-1 text-xs font-pixel text-white cursor-pointer"
                aria-label="Close chest"
              >
                [X]
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4 border-b-2 border-stone-700 pb-4 pr-10">
                <div className="w-14 h-14 bg-stone-800 border-2 border-amber-400 p-2 flex items-center justify-center shrink-0">
                  <MinecraftItemIcon type={selectedProject.icon} size={40} />
                </div>
                <div>
                  <h3 id="modal-project-title" className="font-pixel text-lg sm:text-xl text-white mc-text-shadow">
                    {selectedProject.title}
                  </h3>
                  <p className="font-pixel-sub text-xs text-amber-300 mt-0.5">
                    {selectedProject.tagline}
                  </p>
                </div>
              </div>

              {/* Long Description */}
              <div className="space-y-3 font-body text-xs sm:text-sm text-stone-200 leading-relaxed">
                <p>{selectedProject.longDesc || selectedProject.desc}</p>
              </div>

              {/* Key Features List */}
              <div className="space-y-2">
                <span className="font-pixel text-[10px] text-[#55FF55] block">
                  ENCHANTMENTS & FEATURES:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {selectedProject.features.map((feat, i) => (
                    <li key={i} className="font-body text-xs text-stone-300 flex items-center gap-2">
                      <span className="text-amber-400">❖</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Recipe */}
              <div className="space-y-2">
                <span className="font-pixel text-[10px] text-[#4AEDD9] block">
                  CRAFTING INGREDIENTS:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="mc-slot px-2.5 py-1 text-[10px] font-pixel-sub text-white bg-stone-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Action Links */}
              <div className="flex flex-wrap gap-3 pt-3 border-t-2 border-stone-700">
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => audioManager.playClick()}
                    className="mc-button mc-button-green px-5 py-2.5 text-xs font-pixel tracking-wider"
                  >
                    [ LIVE DEMO ↗ ]
                  </a>
                )}
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => audioManager.playClick()}
                  className="mc-button mc-button-wood px-5 py-2.5 text-xs font-pixel tracking-wider"
                >
                  [ VIEW CODE ON GITHUB ]
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>, document.body)}

    </section>
  );
}
