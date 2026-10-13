import SceneFrame from '../world3d/SceneFrame';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../data/portfolio';
import { MinecraftTorch } from './PixelArt';
import { audioManager } from '../../utils/audioManager';

export default function CreatorSpaceSection() {
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'YouTube': return '📺';
      case 'Instagram': return '📸';
      case 'LinkedIn': return '💼';
      default: return '💻';
    }
  };

  return (
    <section 
      id="creator" 
      className="world-section relative py-20 md:py-28 px-4 md:px-8 w-full z-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        
        <SceneFrame kind="portal" />

        {/* Section Header */}
        <div className="section-heading text-center space-y-3">
          <div className="flex items-center justify-center gap-3">
            <MinecraftTorch size={24} />
            <h2 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-white mc-text-shadow">
              CREATOR REALM
            </h2>
            <MinecraftTorch size={24} />
          </div>
          <p className="font-pixel-sub text-xs sm:text-sm text-stone-300">
            [ TECH CONTENT, GUIDES & BROADCASTS ]
          </p>
        </div>

        {/* Creator Channel Hotlinks Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {PORTFOLIO_DATA.socials.slice(0, 4).map((soc) => (
            <motion.a
              key={soc.platform}
              href={soc.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => audioManager.playClick()}
              className="mc-button mc-button-wood p-4 flex flex-col items-center justify-center text-center space-y-1"
            >
              <span className="text-2xl">{getPlatformIcon(soc.platform)}</span>
              <span className="font-pixel text-xs text-white mc-text-shadow">
                {soc.platform}
              </span>
              <span className="font-pixel-sub text-[10px] text-amber-200">
                {soc.handle}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Content Cards Styled as Minecraft Paintings / Screens */}
        <div className="mc-panel p-6 sm:p-8 space-y-6 shadow-2xl">
          <div className="flex items-center justify-between border-b-2 border-stone-400 pb-3">
            <span className="font-pixel text-xs sm:text-sm text-stone-900">
              FEATURED BROADCASTS & FEEDS
            </span>
            <span className="font-pixel text-[9px] text-emerald-800">
              ACTIVE CHANNELS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.creatorContent.map((item) => (
              <div 
                key={item.id}
                className="mc-slot p-5 bg-stone-200 hover:bg-stone-100 flex flex-col justify-between transition-colors border-2 text-left space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-pixel text-[9px] text-stone-900 bg-stone-300 border border-stone-500 px-2 py-0.5">
                      {getPlatformIcon(item.platform)} {item.platform}
                    </span>
                    <span className="font-pixel-sub text-[9px] text-emerald-700 font-bold">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-pixel text-xs text-stone-900 font-bold leading-snug">
                    {item.title}
                  </h3>

                  <p className="font-body text-xs text-stone-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-400 flex items-center justify-between">
                  <span className="font-pixel-sub text-[10px] text-stone-600">
                    Visit Official Stream
                  </span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => audioManager.playClick()}
                    className="mc-button mc-button-green px-3 py-1.5 text-[10px] font-pixel cursor-pointer"
                  >
                    [ WATCH / OPEN ↗ ]
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
