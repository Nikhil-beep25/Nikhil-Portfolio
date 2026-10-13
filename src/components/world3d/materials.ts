import * as THREE from 'three';

export function random(seed: number) {
  let value = seed;
  return () => { value = (value * 1664525 + 1013904223) >>> 0; return value / 4294967296; };
}
function texture(base: string, seed: number, detail?: (ctx: CanvasRenderingContext2D) => void) {
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = 32;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = base; ctx.fillRect(0, 0, 32, 32);
  const rng = random(seed);
  for (let i = 0; i < 210; i++) {
    ctx.fillStyle = rng() > .5 ? `rgba(255,255,255,${rng() * .09})` : `rgba(0,0,0,${rng() * .12})`;
    ctx.fillRect(Math.floor(rng() * 16) * 2, Math.floor(rng() * 16) * 2, 2, 2);
  }
  detail?.(ctx);
  const map = new THREE.CanvasTexture(canvas);
  map.magFilter = map.minFilter = THREE.NearestFilter;
  map.colorSpace = THREE.SRGBColorSpace;
  return map;
}
export function makeMaterials() {
  const skin = texture('#b47b54', 12);
  const face = texture('#ba825c', 13, ctx => {
    // Custom 32-pixel skin based on the supplied portrait: brows, beard, moustache.
    ctx.fillStyle = '#242021'; ctx.fillRect(0, 0, 32, 5); ctx.fillRect(0, 4, 4, 14); ctx.fillRect(28, 4, 4, 14);
    ctx.fillStyle = '#252021'; ctx.fillRect(5, 10, 9, 2); ctx.fillRect(20, 10, 8, 2);
    ctx.fillStyle = '#ede3cc'; ctx.fillRect(6, 14, 7, 3); ctx.fillRect(21, 14, 6, 3);
    ctx.fillStyle = '#34261c'; ctx.fillRect(9, 14, 3, 3); ctx.fillRect(22, 14, 3, 3);
    ctx.fillStyle = '#d39b74'; ctx.fillRect(14, 14, 4, 7);
    ctx.fillStyle = '#93623e'; ctx.fillRect(12, 21, 8, 2);
    ctx.fillStyle = '#342725'; ctx.fillRect(8, 24, 17, 2); ctx.fillRect(3, 26, 26, 6); ctx.fillRect(1, 22, 4, 6); ctx.fillRect(27, 22, 4, 6);
    ctx.fillStyle = '#ac7559'; ctx.fillRect(11, 26, 11, 2);
    ctx.fillStyle = '#211f1e'; ctx.fillRect(8, 30, 17, 2);
  });
  const shirt = texture('#24262c', 32, ctx => {
    ctx.fillStyle = '#ba825c'; ctx.beginPath(); ctx.moveTo(10,0);ctx.lineTo(22,0);ctx.lineTo(16,9);ctx.fill();
    ctx.fillStyle = '#11161a'; ctx.fillRect(15,9,2,23);
    ctx.fillStyle = '#56565a'; [12,19,26].forEach(y=>ctx.fillRect(16,y,1,1));
  });
  const stone = texture('#ffffff', 47);
  const wood = texture('#765032', 76, ctx => { ctx.fillStyle='#392b2066'; for(let y=6;y<32;y+=8)ctx.fillRect(0,y,32,1); });
  const maps = [skin,face,shirt,stone,wood];
  const mat = (color: string, map?: THREE.Texture, metalness=0, emissive?: string) => new THREE.MeshStandardMaterial({color,...(map ? {map} : {}),roughness:.92,metalness,emissive:emissive || '#000000',emissiveIntensity:emissive ? 1.8 : 0});
  const materials = {
    skin: mat('#ffffff',skin),face:mat('#ffffff',face),shirt:mat('#ffffff',shirt),cloth:mat('#272930',stone),pants:mat('#383b3c',stone),shoe:mat('#202424',stone),sole:mat('#9b9e95',stone),hair:mat('#211d1d',stone),
    terrain:mat('#ffffff',stone),wood:mat('#ffffff',wood),darkwood:mat('#36271c',wood),gold:mat('#d7a44c',undefined,.45),iron:mat('#50575a',undefined,.55),glow:mat('#ffe0a0',undefined,0,'#ffad3c'),gem:mat('#5adcca',undefined,.35,'#1e675d'),obsidian:mat('#252531',stone),portal:mat('#775bc1',undefined,.2,'#7351be'),flame:mat('#ffe979',undefined,0,'#ff731a')
  };
  return { ...materials, cube:new THREE.BoxGeometry(1,1,1), dispose:()=>{Object.values(materials).forEach(m=>m.dispose());maps.forEach(t=>t.dispose());} };
}
export type Materials = ReturnType<typeof makeMaterials>;
