import { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA, type SkillItem } from '../../data/portfolio';
import { MinecraftItemIcon, MinecraftTorch } from './PixelArt';
import { audioManager } from '../../utils/audioManager';

export default function CraftingTableSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  // 3x3 grid slots (up to 9 items placed)
  const [gridSlots, setGridSlots] = useState<(SkillItem | null)[]>(Array(9).fill(null));
  const [craftingResult, setCraftingResult] = useState<any>(null);

  const categories = ['ALL', 'LANGUAGES', 'WEB DEVELOPMENT', 'AI & TOOLS', 'DEVELOPER TOOLS'];

  const filteredSkills = PORTFOLIO_DATA.skills.filter(s => {
    if (selectedCategory === 'ALL') return true;
    return s.category === selectedCategory;
  });

  // Check matching recipes from portfolio data
  const checkRecipe = (currentSlots: (SkillItem | null)[]) => {
    const presentNames = currentSlots.filter(Boolean).map(s => s!.name.toLowerCase());
    if (presentNames.length === 0) {
      setCraftingResult(null);
      return;
    }

    const matched = PORTFOLIO_DATA.craftingRecipes.find(recipe => {
      return recipe.inputs.every(inp => presentNames.some(p => p.includes(inp.toLowerCase())));
    });

    if (matched) {
      audioManager.playAdvancement();
      setCraftingResult(matched.result);
    } else {
      setCraftingResult(null);
    }
  };

  const handleSelectSkill = (skill: SkillItem) => {
    audioManager.playItemPop();
    // Find first empty slot
    const emptyIndex = gridSlots.findIndex(slot => slot === null);
    if (emptyIndex !== -1) {
      const nextSlots = [...gridSlots];
      nextSlots[emptyIndex] = skill;
      setGridSlots(nextSlots);
      checkRecipe(nextSlots);
    }
  };

  const handleRemoveSlot = (index: number) => {
    audioManager.playClick();
    const nextSlots = [...gridSlots];
    nextSlots[index] = null;
    setGridSlots(nextSlots);
    checkRecipe(nextSlots);
  };

  const handleClearGrid = () => {
    audioManager.playClick();
    setGridSlots(Array(9).fill(null));
    setCraftingResult(null);
  };

  const handleAutoCraft = (inputs: string[]) => {
    audioManager.playItemPop();
    const newSlots = Array(9).fill(null);
    inputs.forEach((name, i) => {
      const item = PORTFOLIO_DATA.skills.find(s => s.name.toLowerCase().includes(name.toLowerCase()));
      if (item) newSlots[i] = item;
    });
    setGridSlots(newSlots);
    checkRecipe(newSlots);
  };

  return (
    <section 
      id="skills" 
      className="relative py-20 md:py-28 px-4 md:px-8 w-full z-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3">
            <MinecraftTorch size={24} />
            <h2 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-white mc-text-shadow">
              CRAFTING TABLE & SKILLS
            </h2>
            <MinecraftTorch size={24} />
          </div>
          <p className="font-pixel-sub text-xs sm:text-sm text-stone-300">
            [ COMBINE TECHNOLOGIES TO FORGE SYSTEM CAPABILITIES ]
          </p>
        </div>

        {/* ── Interactive 3x3 Crafting Table Workbench ── */}
        <div className="mc-panel p-6 sm:p-8 shadow-2xl max-w-4xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-stone-400 pb-3">
            <div className="flex items-center gap-2">
              <span className="font-pixel text-xs sm:text-sm text-stone-900">
                3×3 CRAFTING WORKBENCH
              </span>
              <span className="text-[10px] font-pixel-sub text-stone-600">
                (Click ingredients to add)
              </span>
            </div>

            <button
              onClick={handleClearGrid}
              className="mc-button px-3 py-1 text-[10px] font-pixel text-white cursor-pointer"
            >
              [ CLEAR GRID ]
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-center">
            
            {/* 3x3 Grid (9 Slots) */}
            <div className="md:col-span-5 flex justify-center">
              <div className="grid grid-cols-3 gap-2 bg-stone-700 p-3 border-4 border-stone-900 shadow-inner">
                {gridSlots.map((slot, i) => (
                  <div
                    key={i}
                    onClick={() => slot && handleRemoveSlot(i)}
                    className={`
                      mc-slot w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center relative cursor-pointer
                      ${slot ? 'bg-stone-300 hover:bg-red-200' : 'bg-stone-500'}
                    `}
                    title={slot ? `Click to remove ${slot.name}` : 'Empty slot'}
                  >
                    {slot ? (
                      <div className="flex flex-col items-center">
                        <MinecraftItemIcon type={slot.minecraftItem} size={28} />
                        <span className="font-pixel text-[8px] text-stone-900 leading-none mt-1">
                          {slot.name.slice(0, 5)}
                        </span>
                      </div>
                    ) : (
                      <span className="text-stone-400 font-pixel text-[10px] opacity-40">
                        {i + 1}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Crafting Arrow Indicator */}
            <div className="md:col-span-2 flex flex-col items-center justify-center">
              <div className="font-pixel text-2xl text-stone-800 rotate-90 md:rotate-0">
                ➔
              </div>
              <span className="font-pixel-sub text-[9px] text-stone-600 mt-1">
                COMBINE
              </span>
            </div>

            {/* Output Result Slot */}
            <div className="md:col-span-5 flex flex-col items-center justify-center">
              <div className="mc-slot w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center bg-stone-300 border-4 border-stone-900 p-2 shadow-2xl relative">
                {craftingResult ? (
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center text-center space-y-1"
                  >
                    <div className="animate-bounce">
                      <MinecraftItemIcon type={craftingResult.icon} size={40} />
                    </div>
                    <span className="font-pixel text-[10px] text-emerald-800 font-bold block">
                      {craftingResult.title}
                    </span>
                    <span className="font-pixel-sub text-[8px] text-stone-600 block">
                      [CRAFTED]
                    </span>
                  </motion.div>
                ) : (
                  <span className="font-pixel text-[9px] text-stone-500 text-center">
                    NO RECIPE FORGED
                  </span>
                )}

                {/* Crafting particles glow if crafted */}
                {craftingResult && (
                  <div className="absolute inset-0 border-2 border-emerald-400 animate-pulse pointer-events-none" />
                )}
              </div>

              {/* Result explanation box */}
              {craftingResult && (
                <div className="mt-3 mc-panel-dark p-3 text-left w-full">
                  <span className="font-pixel text-[9px] text-amber-300 block">
                    {craftingResult.type}:
                  </span>
                  <p className="font-body text-xs text-stone-200 mt-0.5">
                    {craftingResult.desc}
                  </p>
                </div>
              )}
            </div>

          </div>

          {/* Quick Recipe Shortcuts */}
          <div className="border-t border-stone-400 pt-3">
            <span className="font-pixel text-[9px] text-stone-700 block mb-2">
              TRY POPULAR BLUEPRINTS:
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleAutoCraft(["React", "TypeScript", "PostgreSQL"])}
                className="mc-button px-3 py-1 text-[9px] font-pixel-sub cursor-pointer"
              >
                Recipe: NagrikSetu
              </button>
              <button
                onClick={() => handleAutoCraft(["React", "Node.js", "PostgreSQL"])}
                className="mc-button px-3 py-1 text-[9px] font-pixel-sub cursor-pointer"
              >
                Recipe: VidyaSanchar ERP
              </button>
              <button
                onClick={() => handleAutoCraft(["React", "Node.js", "MongoDB"])}
                className="mc-button px-3 py-1 text-[9px] font-pixel-sub cursor-pointer"
              >
                Recipe: CarVerse
              </button>
              <button
                onClick={() => handleAutoCraft(["Python", "Gemini API"])}
                className="mc-button px-3 py-1 text-[9px] font-pixel-sub cursor-pointer"
              >
                Recipe: GenAI Assistant
              </button>
            </div>
          </div>
        </div>

        {/* ── Category Filter Tabs & Inventory Items ── */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  audioManager.playSelect();
                  setSelectedCategory(cat);
                }}
                className={`
                  mc-button px-4 py-2 text-[10px] sm:text-xs font-pixel-sub cursor-pointer
                  ${selectedCategory === cat ? 'mc-button-green' : 'mc-button'}
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skills Grid as Inventory Items */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSelectSkill(skill)}
                className="mc-slot p-3 bg-stone-300 hover:bg-stone-200 cursor-pointer flex flex-col items-center justify-between h-32 text-center group border-2"
                title={`Click to add ${skill.name} to crafting workbench`}
              >
                <div className="w-10 h-10 bg-stone-700 border-2 border-stone-900 flex items-center justify-center p-1 group-hover:border-emerald-400">
                  <MinecraftItemIcon type={skill.minecraftItem} size={24} />
                </div>

                <div className="mt-1">
                  <h4 className="font-pixel text-[10px] text-stone-900 group-hover:text-emerald-800">
                    {skill.name}
                  </h4>
                  <span className="font-pixel text-[8px] text-stone-600">
                    LVL {skill.level}%
                  </span>
                </div>

                <span className="font-pixel text-[7px] text-stone-500 opacity-60 group-hover:opacity-100">
                  [ADD TO GRID]
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
