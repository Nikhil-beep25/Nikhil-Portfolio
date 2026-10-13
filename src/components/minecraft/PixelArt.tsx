import React from 'react';

// Crisp Pixel Art Assets rendered as SVGs with crisp-edges / pixelated styling

// 1. Minecraft Torch with animated flame
export const MinecraftTorch: React.FC<{ size?: number; className?: string }> = ({ size = 28, className = "" }) => (
  <div className={`relative inline-flex flex-col items-center ${className}`} style={{ width: size, height: size * 1.5 }}>
    {/* Flame glow */}
    <div className="absolute -top-2 w-6 h-6 rounded-full bg-amber-400/30 blur-sm animate-pulse pointer-events-none" />
    {/* Pixel Flame */}
    <svg viewBox="0 0 8 8" className="w-full h-[40%] animate-torch-flicker pixelated" shapeRendering="crispEdges">
      <rect x="3" y="1" width="2" height="2" fill="#FFE066" />
      <rect x="2" y="2" width="4" height="3" fill="#FF9900" />
      <rect x="3" y="3" width="2" height="2" fill="#FF5500" />
      <rect x="3" y="4" width="2" height="2" fill="#CC2200" />
    </svg>
    {/* Torch Stick */}
    <svg viewBox="0 0 6 12" className="w-[60%] h-[60%] pixelated" shapeRendering="crispEdges">
      {/* Charred Head */}
      <rect x="1" y="0" width="4" height="2" fill="#3D2817" />
      <rect x="2" y="0" width="2" height="1" fill="#1C110A" />
      {/* Wood Shaft */}
      <rect x="1" y="2" width="4" height="8" fill="#8B5A2B" />
      <rect x="1" y="2" width="1" height="8" fill="#B3783E" />
      <rect x="4" y="2" width="1" height="8" fill="#5C3818" />
      <rect x="2" y="10" width="2" height="2" fill="#5C3818" />
    </svg>
  </div>
);

// 2. Minecraft Red Heart (Health)
export const MinecraftHeart: React.FC<{ size?: number; empty?: boolean }> = ({ size = 20, empty = false }) => (
  <svg viewBox="0 0 9 9" style={{ width: size, height: size }} className="pixelated drop-shadow-sm inline-block" shapeRendering="crispEdges">
    {/* Black Border */}
    <path d="M2,0 h2 v1 h1 v-1 h2 v1 h1 v2 h-1 v1 h-1 v1 h-1 v1 h-1 v1 h-1 v-1 h-1 v-1 h-1 v-1 h-1 v-2 h1 v-1 h1 z" fill="#000000" />
    {!empty ? (
      <>
        {/* Heart Red Body */}
        <rect x="2" y="1" width="2" height="3" fill="#E01111" />
        <rect x="5" y="1" width="2" height="3" fill="#E01111" />
        <rect x="1" y="2" width="7" height="2" fill="#E01111" />
        <rect x="2" y="4" width="5" height="1" fill="#E01111" />
        <rect x="3" y="5" width="3" height="1" fill="#E01111" />
        <rect x="4" y="6" width="1" height="1" fill="#E01111" />
        {/* Highlight Specular */}
        <rect x="2" y="1" width="1" height="1" fill="#FFFFFF" />
        <rect x="2" y="2" width="1" height="1" fill="#FF8888" />
        {/* Dark Red Shadow */}
        <rect x="6" y="3" width="1" height="1" fill="#990000" />
        <rect x="5" y="4" width="1" height="1" fill="#990000" />
        <rect x="4" y="5" width="1" height="1" fill="#990000" />
      </>
    ) : (
      /* Empty heart gray inside */
      <path d="M2,1 h2 v1 h1 v-1 h2 v2 h-1 v1 h-1 v1 h-1 v1 h-1 v-1 h-1 v-1 h-1 v-2 z" fill="#3A3A3A" />
    )}
  </svg>
);

// 3. Minecraft Grass / Dirt Block (Front Isometric or Flat)
export const MinecraftGrassBlock: React.FC<{ size?: number; className?: string }> = ({ size = 32, className = "" }) => (
  <svg viewBox="0 0 16 16" style={{ width: size, height: size }} className={`pixelated drop-shadow ${className}`} shapeRendering="crispEdges">
    {/* Dirt Background */}
    <rect width="16" height="16" fill="#866043" />
    <rect x="2" y="7" width="2" height="2" fill="#573D26" />
    <rect x="6" y="10" width="2" height="2" fill="#573D26" />
    <rect x="11" y="8" width="2" height="2" fill="#573D26" />
    <rect x="1" y="12" width="2" height="2" fill="#573D26" />
    <rect x="12" y="13" width="2" height="2" fill="#573D26" />
    <rect x="8" y="13" width="2" height="2" fill="#9C724F" />
    <rect x="4" y="8" width="2" height="2" fill="#9C724F" />

    {/* Grass Top Layer with jagged hanging edges */}
    <rect x="0" y="0" width="16" height="4" fill="#5B8731" />
    <rect x="0" y="4" width="2" height="2" fill="#5B8731" />
    <rect x="3" y="4" width="2" height="3" fill="#5B8731" />
    <rect x="7" y="4" width="3" height="2" fill="#5B8731" />
    <rect x="12" y="4" width="2" height="3" fill="#5B8731" />
    <rect x="15" y="4" width="1" height="2" fill="#5B8731" />

    {/* Grass Highlights & Shadows */}
    <rect x="0" y="0" width="16" height="1" fill="#75A63F" />
    <rect x="3" y="1" width="3" height="1" fill="#75A63F" />
    <rect x="9" y="1" width="4" height="1" fill="#75A63F" />
    <rect x="0" y="3" width="16" height="1" fill="#3D5E1F" opacity="0.6" />
  </svg>
);

// 4. Interactive Minecraft Breakable Block
export const MinecraftBreakableBlock: React.FC<{
  type?: 'grass' | 'stone' | 'diamond' | 'gold' | 'wood';
  size?: number;
  cracks?: number; // 0 (none) to 4 (broken)
  onClick?: () => void;
  className?: string;
}> = ({ type = 'grass', size = 48, cracks = 0, onClick, className = "" }) => {
  const getFill = () => {
    switch (type) {
      case 'stone': return '#777777';
      case 'diamond': return '#4AEDD9';
      case 'gold': return '#FFCC33';
      case 'wood': return '#6B442B';
      default: return '#5B8731';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`relative inline-block cursor-pointer active:scale-95 transition-transform p-0 border-0 bg-transparent ${className}`}
      style={{ width: size, height: size }}
      title="Click to mine block!"
    >
      {type === 'grass' ? (
        <MinecraftGrassBlock size={size} />
      ) : (
        <svg viewBox="0 0 16 16" className="w-full h-full pixelated" shapeRendering="crispEdges">
          <rect width="16" height="16" fill={getFill()} />
          {/* Border bevel */}
          <rect x="0" y="0" width="16" height="2" fill="white" opacity="0.3" />
          <rect x="0" y="0" width="2" height="16" fill="white" opacity="0.3" />
          <rect x="0" y="14" width="16" height="2" fill="black" opacity="0.3" />
          <rect x="14" y="0" width="2" height="16" fill="black" opacity="0.3" />
          {/* Speckles */}
          <rect x="4" y="4" width="2" height="2" fill="white" opacity="0.4" />
          <rect x="10" y="9" width="2" height="2" fill="black" opacity="0.25" />
        </svg>
      )}

      {/* Cracking overlay if damaged */}
      {cracks > 0 && (
        <svg viewBox="0 0 16 16" className="absolute inset-0 w-full h-full pixelated pointer-events-none" shapeRendering="crispEdges">
          {cracks >= 1 && (
            <path d="M4,4 L7,8 L9,6 L12,11" stroke="#000000" strokeWidth="1" fill="none" opacity="0.6" />
          )}
          {cracks >= 2 && (
            <path d="M2,11 L6,8 L10,13 M8,3 L7,8 L13,7" stroke="#000000" strokeWidth="1.2" fill="none" opacity="0.75" />
          )}
          {cracks >= 3 && (
            <path d="M1,2 L6,5 L5,11 L14,14 M12,2 L8,7 L13,10" stroke="#000000" strokeWidth="1.5" fill="none" opacity="0.9" />
          )}
        </svg>
      )}
    </button>
  );
};

// 5. Minecraft Character Avatar (Steve / Tech Builder Skin)
export const MinecraftCharacter: React.FC<{
  isWaving?: boolean;
  size?: number;
  className?: string;
}> = ({ isWaving = false, size = 160, className = "" }) => {
  return (
    <div 
      className={`relative inline-block select-none ${className}`}
      style={{ width: size, height: size * 1.5 }}
    >
      <svg 
        viewBox="0 0 32 48" 
        className="w-full h-full pixelated drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]"
        shapeRendering="crispEdges"
      >
        {/* Head (8x8 pixels positioned at top center 12..20, y: 4..12) */}
        {/* Hair Top & Back */}
        <rect x="12" y="4" width="8" height="3" fill="#3B2211" />
        <rect x="12" y="7" width="2" height="5" fill="#3B2211" />
        <rect x="18" y="7" width="2" height="5" fill="#3B2211" />
        {/* Face Skin */}
        <rect x="14" y="7" width="4" height="5" fill="#DDB282" />
        {/* Eyes (Pixel Blue & White) */}
        <rect x="14" y="9" width="1" height="1" fill="#FFFFFF" />
        <rect x="15" y="9" width="1" height="1" fill="#3355AA" />
        <rect x="16" y="9" width="1" height="1" fill="#3355AA" />
        <rect x="17" y="9" width="1" height="1" fill="#FFFFFF" />
        {/* Nose / Mouth */}
        <rect x="15" y="10" width="2" height="1" fill="#BB8D62" />
        <rect x="15" y="11" width="2" height="1" fill="#6B3319" />

        {/* Torso / Cyan Developer Shirt (8w x 12h, x: 12..20, y: 12..24) */}
        <rect x="12" y="12" width="8" height="12" fill="#00AAAA" />
        {/* Shirt Neck V-Cut */}
        <rect x="15" y="12" width="2" height="2" fill="#DDB282" />
        {/* Shirt Shadow / Belt line */}
        <rect x="12" y="22" width="8" height="2" fill="#008888" />

        {/* Left Arm (x: 8..12, y: 12..24) */}
        <rect x="8" y="12" width="4" height="4" fill="#00AAAA" />
        <rect x="8" y="16" width="4" height="8" fill="#DDB282" />

        {/* Right Arm (Waving or Resting) */}
        {isWaving ? (
          /* Raised Arm waving */
          <g className="origin-[20px_12px] animate-[wiggle_1.2s_ease-in-out_infinite]">
            <rect x="20" y="6" width="4" height="4" fill="#00AAAA" />
            <rect x="20" y="2" width="4" height="4" fill="#DDB282" />
            {/* Hand with pixel wave gesture */}
            <rect x="20" y="0" width="4" height="2" fill="#DDB282" />
          </g>
        ) : (
          /* Normal Resting Arm */
          <g>
            <rect x="20" y="12" width="4" height="4" fill="#00AAAA" />
            <rect x="20" y="16" width="4" height="8" fill="#DDB282" />
          </g>
        )}

        {/* Blue Pants / Legs (x: 12..20, y: 24..38) */}
        <rect x="12" y="24" width="4" height="14" fill="#1C3879" />
        <rect x="16" y="24" width="4" height="14" fill="#182E63" />
        {/* Center Leg Split Line */}
        <rect x="15.5" y="24" width="1" height="14" fill="#0F1E42" />

        {/* Shoes (Gray Boots x: 12..20, y: 38..42) */}
        <rect x="12" y="38" width="4" height="4" fill="#505050" />
        <rect x="16" y="38" width="4" height="4" fill="#3A3A3A" />
      </svg>
    </div>
  );
};

// 6. Minecraft Campfire Component
export const MinecraftCampfire: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = "" }) => (
  <div className={`relative inline-flex flex-col items-center ${className}`} style={{ width: size, height: size }}>
    {/* Floating Ember Particles */}
    <div className="absolute -top-6 w-1.5 h-1.5 bg-amber-400 rounded-sm animate-ping opacity-75" />
    <div className="absolute -top-3 left-4 w-1 h-1 bg-orange-500 rounded-sm animate-bounce opacity-80" />
    
    {/* Campfire Flame */}
    <svg viewBox="0 0 16 16" className="w-[75%] h-[75%] animate-torch-flicker pixelated" shapeRendering="crispEdges">
      {/* Outer Glow / Flame */}
      <rect x="6" y="2" width="4" height="4" fill="#FFE57F" />
      <rect x="5" y="4" width="6" height="5" fill="#FF9800" />
      <rect x="4" y="6" width="8" height="6" fill="#F44336" />
      <rect x="6" y="7" width="4" height="4" fill="#FFE082" />
      <rect x="7" y="5" width="2" height="3" fill="#FFFFFF" />
      <rect x="3" y="9" width="10" height="4" fill="#D32F2F" />
    </svg>

    {/* Wood Logs & Stone Ring Base */}
    <svg viewBox="0 0 16 6" className="w-full h-[25%] pixelated" shapeRendering="crispEdges">
      {/* Wooden Logs crisscross */}
      <rect x="2" y="0" width="12" height="2" fill="#5D4037" />
      <rect x="1" y="2" width="14" height="2" fill="#3E2723" />
      {/* Ash & Stone rim */}
      <rect x="0" y="4" width="16" height="2" fill="#757575" />
      <rect x="3" y="4" width="10" height="1" fill="#424242" />
    </svg>
  </div>
);

// 7. Minecraft Item Icons
export const MinecraftItemIcon: React.FC<{
  type: string;
  size?: number;
  className?: string;
}> = ({ type, size = 32, className = "" }) => {
  const norm = type.toLowerCase().replace(/\s+/g, '_');

  return (
    <div 
      className={`inline-flex items-center justify-center shrink-0 ${className}`} 
      style={{ width: size, height: size }}
    >
      {norm === 'diamond_sword' || norm === 'sword' ? (
        <svg viewBox="0 0 16 16" className="w-full h-full pixelated" shapeRendering="crispEdges">
          {/* Blade */}
          <rect x="11" y="1" width="3" height="3" fill="#4AEDD9" />
          <rect x="9" y="3" width="3" height="3" fill="#4AEDD9" />
          <rect x="7" y="5" width="3" height="3" fill="#4AEDD9" />
          <rect x="5" y="7" width="3" height="3" fill="#4AEDD9" />
          <rect x="11" y="2" width="2" height="1" fill="#A8FFF5" />
          <rect x="9" y="4" width="2" height="1" fill="#A8FFF5" />
          {/* Guard */}
          <rect x="4" y="9" width="3" height="2" fill="#2E7D32" />
          <rect x="3" y="10" width="2" height="3" fill="#2E7D32" />
          <rect x="6" y="8" width="2" height="2" fill="#1B5E20" />
          {/* Handle */}
          <rect x="2" y="11" width="3" height="3" fill="#5D4037" />
          {/* Pommel */}
          <rect x="1" y="13" width="2" height="2" fill="#3E2723" />
        </svg>
      ) : norm === 'golden_apple' || norm === 'apple' ? (
        <svg viewBox="0 0 16 16" className="w-full h-full pixelated" shapeRendering="crispEdges">
          {/* Stem */}
          <rect x="7" y="1" width="2" height="2" fill="#5D4037" />
          <rect x="8" y="2" width="2" height="1" fill="#388E3C" />
          {/* Golden Body */}
          <rect x="4" y="3" width="8" height="2" fill="#FFD700" />
          <rect x="3" y="5" width="10" height="7" fill="#FFC107" />
          <rect x="4" y="12" width="8" height="2" fill="#FFA000" />
          {/* Shimmer */}
          <rect x="5" y="5" width="2" height="2" fill="#FFF9C4" />
          <rect x="4" y="7" width="1" height="2" fill="#FFF9C4" />
        </svg>
      ) : norm === 'enchanted_book' || norm === 'book' ? (
        <svg viewBox="0 0 16 16" className="w-full h-full pixelated" shapeRendering="crispEdges">
          {/* Cover */}
          <rect x="3" y="2" width="10" height="12" fill="#9C27B0" />
          <rect x="2" y="3" width="1" height="10" fill="#7B1FA2" />
          {/* Corner gold straps */}
          <rect x="3" y="2" width="3" height="1" fill="#FFD54F" />
          <rect x="3" y="3" width="1" height="2" fill="#FFD54F" />
          <rect x="10" y="13" width="3" height="1" fill="#FFD54F" />
          {/* Ribbon */}
          <rect x="7" y="5" width="2" height="8" fill="#F44336" />
          {/* Pages */}
          <rect x="4" y="4" width="8" height="8" fill="#EDE7F6" />
        </svg>
      ) : norm === 'beacon' ? (
        <svg viewBox="0 0 16 16" className="w-full h-full pixelated" shapeRendering="crispEdges">
          {/* Glass frame */}
          <rect x="2" y="2" width="12" height="12" fill="#E0F7FA" opacity="0.6" />
          <rect x="1" y="1" width="14" height="1" fill="#00BCD4" />
          <rect x="1" y="14" width="14" height="1" fill="#00838F" />
          {/* Obsidian base */}
          <rect x="2" y="12" width="12" height="3" fill="#1E162B" />
          {/* Nether star center glow */}
          <rect x="6" y="5" width="4" height="5" fill="#00E5FF" />
          <rect x="7" y="6" width="2" height="3" fill="#FFFFFF" />
        </svg>
      ) : norm === 'minecart' ? (
        <svg viewBox="0 0 16 16" className="w-full h-full pixelated" shapeRendering="crispEdges">
          {/* Cart body */}
          <rect x="2" y="5" width="12" height="6" fill="#9E9E9E" />
          <rect x="3" y="6" width="10" height="4" fill="#424242" />
          <rect x="1" y="5" width="1" height="6" fill="#757575" />
          <rect x="14" y="5" width="1" height="6" fill="#616161" />
          {/* Wheels */}
          <rect x="3" y="11" width="3" height="2" fill="#212121" />
          <rect x="10" y="11" width="3" height="2" fill="#212121" />
        </svg>
      ) : norm === 'crafting_table' ? (
        <svg viewBox="0 0 16 16" className="w-full h-full pixelated" shapeRendering="crispEdges">
          {/* Top table wood */}
          <rect x="1" y="1" width="14" height="4" fill="#8D6E63" />
          {/* 3x3 Grid on top */}
          <rect x="3" y="2" width="3" height="2" fill="#D7CCC8" />
          <rect x="7" y="2" width="2" height="2" fill="#D7CCC8" />
          <rect x="10" y="2" width="3" height="2" fill="#D7CCC8" />
          {/* Sides wood planks */}
          <rect x="1" y="5" width="14" height="10" fill="#6D4C41" />
          {/* Front tools decoration */}
          <rect x="4" y="7" width="2" height="5" fill="#4E342E" />
          <rect x="9" y="8" width="3" height="4" fill="#3E2723" />
        </svg>
      ) : norm === 'totem_of_undying' || norm === 'totem' ? (
        <svg viewBox="0 0 16 16" className="w-full h-full pixelated" shapeRendering="crispEdges">
          {/* Golden head */}
          <rect x="5" y="1" width="6" height="5" fill="#FFD54F" />
          {/* Green eyes */}
          <rect x="6" y="2" width="1" height="1" fill="#00E676" />
          <rect x="9" y="2" width="1" height="1" fill="#00E676" />
          {/* Wings */}
          <rect x="2" y="5" width="12" height="3" fill="#FFC107" />
          {/* Body */}
          <rect x="6" y="8" width="4" height="7" fill="#FFB300" />
        </svg>
      ) : (
        /* Default item emerald / redstone fallback */
        <svg viewBox="0 0 16 16" className="w-full h-full pixelated" shapeRendering="crispEdges">
          <rect x="4" y="2" width="8" height="12" fill="#55FF55" />
          <rect x="2" y="4" width="12" height="8" fill="#55FF55" />
          <rect x="5" y="3" width="2" height="2" fill="#CCFFCC" />
          <rect x="9" y="11" width="2" height="2" fill="#009900" />
        </svg>
      )}
    </div>
  );
};
