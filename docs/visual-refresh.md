# Cinematic portfolio visual refresh

The existing day/night valley artwork, transparent character layer, hotbar, project inventory, and crafting work were present as uncommitted changes when this task began. This change preserves and incorporates them, then refines responsive composition, motion, section materials, accessibility, and loading behavior.

## Design

Cinematic voxel adventure for recruiters and collaborators. Detailed raster landscapes carry the environment; HTML remains selectable, responsive, keyboard accessible, and readable. Forest green, muted stone, warm wood, and lantern amber connect the sections. The hero uses independent landscape and character depth layers. Narrow phones use a five-slot hotbar with the remaining destinations and settings under More.

All personal information, project descriptions, skills, achievements, external destinations, resume, and contact API behavior are retained. `src/data/portfolio.ts` was verified byte-for-byte against its pre-edit SHA-256 hash. No backend files or credentials changed.

## Artwork

Existing assets in `public/world/`: valley-day, valley-night, and character-cliff, with smaller responsive versions. These assets were reused rather than regenerated.

New asset: `woodland-campsite.webp` (1672×941, approximately 270 KB) and `woodland-campsite-small.webp` (960×540, approximately 97 KB). Generated with the built-in image generation tool, then encoded as WebP. The original PNG remains in the generation output directory. No game sound recordings are used; the existing Web Audio synthesizer provides opt-in effects.

Generation prompt:

> Use case: stylized-concept. Asset type: wide cinematic background artwork for an existing Minecraft-inspired developer portfolio. Create a richly detailed voxel woodland crafting campsite at blue-hour dusk, widescreen 16:9. Architectural voxel trees and blocky granite cliffs enclosing a clearing, dense ferns, small wildflowers, moss, block-built timber crafting workbench and aged chest on the left, a restrained glowing campfire on the right, amber hanging lanterns, tiny fireflies, layered mist among distant conifers. Original high quality voxel game cinematic render, realistic global illumination on tiny cubic textures, warm amber practical lighting contrasting forest green and desaturated teal ambient light, finely detailed but serene. Camera eye level broad landscape, usable dark open central clearing where HTML interface will overlay, no characters. Foreground detailed stone path, thick forest depth. Match a premium voxel mountain-valley world with earthy wood, dark forest and golden light. Not a flat pixel illustration, not simple geometric primitives, no UI, no typography, no logos, no watermarks.

## Verification

- `npm run build`: TypeScript and production build pass.
- `npm run lint`: passes.
- `git diff --check`: passes.
- Portfolio data SHA-256 check: unchanged.
- Browser visual checks: 320×740 and 390×844 phones, 1366×768 and 1440×900 desktop/laptop; layout measurements at 768×1024 tablet. No page-level horizontal overflow at measured widths.
- Hotbar touch targets: at least 54×55 CSS pixels at measured phone widths.
- Project inventory: CarVerse detail content, modal containment, Escape close, focus return, and blocking numeric navigation while open. Narrow-phone dialog stays within the viewport.
- Crafting: CarVerse recipe populates three ingredients and produces the configured Fleet Reservation System result.
- Achievements: accessible unlock button produces the achievement toast.
- Hero character: greeting interaction works.
- Mobile More menu: destinations and settings work; day/night toggles correctly; sound remains opt-in and was switched back off after testing.
- Contact: empty submission displays all three validation messages; typing a numeric hotbar key in a form field does not switch the theme. No email was sent.
- First visit: artwork-readiness loader, focused Skip button, and Enter World control verified. Background controls are inert while the entry dialog is shown.
- Reduced motion: MotionConfig and hero CSS disable transform animations/parallax; navigation respects the browser preference. Implementation reviewed; no OS preference was changed during testing.

## Limits

The earlier ChatGPT conversation could not be retrieved. The supplied reference URL points to the live implementation, so a pixel-for-pixel comparison against the previously approved image was not possible.

The production build reports a JavaScript chunk warning (about 711 KB before compression, 209 KB gzip). No Lighthouse executable was available; no Lighthouse or measured Core Web Vitals score is claimed. Fonts still use the project's existing Google Fonts stylesheet. The existing GenAI recipe requires FastAPI, which is absent from the skills inventory; the recipe stays visibly unavailable rather than inventing personal skills. Contact delivery was not exercised because it would send a real message.


## Personal avatar and Three.js world (October 14)

The hero and character profile now feature an original, real-time voxel avatar based on the user-provided portrait: curly black hair, short beard and moustache, medium brown skin, and a black open-collar shirt. This is a stylized likeness, not a facial scan. The original photograph is not included in the public assets or repository.

Seven scene placements share one WebGL canvas: two avatars, a hinged project chest, a crafting bench with a floating diamond, a rotating achievement trophy, an illuminated creator portal, and a campsite fire. Dragging or arrow keys rotates each scene; DOM buttons and Enter/Space activate it. The character follows the pointer and waves. Original synthesized sound remains opt-in. Existing portfolio content and all section tools are preserved.

The detailed valley artwork and pointer/scroll parallax remain behind the 3D hero. Day/night switches scene lighting as well as the landscape. Lite mode retains optimized illustration assets and unmounts WebGL; the setting persists locally. Renderer errors or context loss fall back to the illustration. Context-loss listeners are removed before disposal so intentional teardown cannot disable a newly mounted renderer.

Rendering uses instanced terrain and foliage, shared geometry/materials, 32px original procedural textures, a maximum 1.5 device pixel ratio, and a 30fps ambient animation cap. Offscreen scenes skip their animation updates. The render timer stops while the document is hidden or no scene is visible. Reduced-motion mode renders on interaction and scrolling without ambient animation. No extra dependencies were installed.

Architecture references: [Drei View](https://drei.docs.pmnd.rs/portals/view) and [React Three Fiber performance guidance](https://r3f.docs.pmnd.rs/next/advanced/scaling-performance).

### Avatar illustration

`nikhil-avatar.webp` (1200px wide, approximately 126 KiB) and `nikhil-avatar-small.webp` (600px wide, approximately 37 KiB) are transparent WebP fallbacks. Generated using the supplied portrait, then resized and optimized. Generation brief:

> Create an original high-quality Minecraft-inspired voxel game avatar closely based on the reference portrait: medium brown skin, thick tousled curly black hair, full brows, dark eyes, short beard and moustache, broad nose, and a black open-collar shirt. Charcoal trousers and dark sneakers. Detailed cubic voxels, full body, three-quarter front view facing image left, relaxed greeting. A small grass, stone, moss and flower island with a lantern on the right. Warm sunset rim light, whole person and platform within transparent margins. Landscape 4:3, no text or watermark. Static fallback for an interactive 3D avatar.

### Additional verification

- Fresh browser load successfully creates one canvas and displays the real-time avatar.
- Desktop 1440×900 and mobile 390×844 renders inspected; 320×740 overflow check passes.
- Avatar wave, chest open/close, crafting interaction, and keyboard activation exercised.
- Lite mode removes the canvas; returning to 3D recreates one working canvas and remains active after the old context is disposed.
- Day/night visual check passes; project detail modal and CarVerse crafting recipe still work.
- TypeScript/production build, lint, whitespace check and portfolio-data SHA-256 check pass.
- No captured browser console errors during final checks.
- Reduced-motion, hidden-document pause, and context-loss fallback reviewed in source; no OS preference change or forced GPU loss was performed.

The optional Three.js chunk is about 1,021 KB (273 KB gzip); the existing application chunk remains about 710 KB (210 KB gzip). Vite reports its size warning. The 3D download is deferred until entry and skipped on a fresh Lite-mode load. This is an interactive portfolio with 3D dioramas, not a free-roaming game. No measured frame-rate or Lighthouse score is claimed.
