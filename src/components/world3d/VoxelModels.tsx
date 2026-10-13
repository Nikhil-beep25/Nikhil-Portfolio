import { useLayoutEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { random, type Materials } from './materials';
import type { SceneKind } from './SceneFrame';

export type Controls = { rotation: number; lookX: number; lookY: number; action: number; hovered: boolean; reduced: boolean };
type Vec3 = [number, number, number];
type Block = { p: Vec3; s: Vec3; c: string; r?: Vec3 };
export function Cube({ m, material, p=[0,0,0], s=[1,1,1], r=[0,0,0] }: { m: Materials; material: THREE.Material | THREE.Material[]; p?: Vec3; s?: Vec3; r?: Vec3 }) {
  return <mesh geometry={m.cube} material={material} position={p} scale={s} rotation={r} castShadow receiveShadow dispose={null} />;
}
function Blocks({ blocks, m }: { blocks: Block[]; m: Materials }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  useLayoutEffect(()=>{
    if (!ref.current) return;
    const transform = new THREE.Object3D(); const color = new THREE.Color();
    blocks.forEach((b,i)=>{transform.position.set(...b.p);transform.scale.set(...b.s);transform.rotation.set(...(b.r||[0,0,0]));transform.updateMatrix();ref.current!.setMatrixAt(i,transform.matrix);ref.current!.setColorAt(i,color.set(b.c));});
    ref.current.instanceMatrix.needsUpdate = true;
    if(ref.current.instanceColor)ref.current.instanceColor.needsUpdate=true;
    ref.current.computeBoundingSphere();
  },[blocks]);
  return <instancedMesh ref={ref} args={[m.cube,m.terrain,blocks.length]} castShadow receiveShadow dispose={null} />;
}
export function Island({ m, trees = true }: {m:Materials;trees?:boolean}) {
  const blocks=useMemo(()=>{
    const out:Block[]=[];const rng=random(287); const stone=['#6a7166','#788074','#525c56','#8b8a72'];
    for(let x=-5;x<=5;x++)for(let z=-4;z<=4;z++){
      if((x/5.4)**2+(z/4.4)**2>1+rng()*.12)continue;
      const h=.35+Math.max(0,1-Math.hypot(x/5,z/4))*.8+rng()*.28;
      out.push({p:[x*.34,-h/2,z*.34],s:[.35,h,.35],c:stone[Math.floor(rng()*stone.length)]});
      out.push({p:[x*.34,.025,z*.34],s:[.35,.11,.35],c:rng()>.5?'#5c7735':'#6e883d'});
      if(rng()>.8){out.push({p:[x*.34,.12,z*.34],s:[.12,.17,.11],c:'#829b49'});}
      if(rng()>.93){out.push({p:[x*.34,.22,z*.34],s:[.1,.07,.1],c:'#e8d79a'});}
    }
    if(trees)for(const [x,z,h] of [[-1.22,-.85,2.35],[1.2,-.9,1.8]]){
      out.push({p:[x,h*.44,z],s:[.17,h*.9,.17],c:'#5d432b'});
      for(let level=0;level<5;level++){
        const w=(1-level*.17)*.92;
        for(let a=-1;a<=1;a++)for(let b=-1;b<=1;b++){
          if(Math.abs(a)+Math.abs(b)>1 && rng()>.4)continue;
          out.push({p:[x+a*w*.32,h*.43+level*.29,z+b*w*.32],s:[w*.48,.36,w*.48],c:rng()>.5?'#304f2f':'#426b36'});
        }
      }
    }
    return out;
  },[trees]);
  return <Blocks blocks={blocks} m={m}/>;
}
export function Lantern({m,p=[1.15,.35,.7]}:{m:Materials;p?:Vec3}){
  return <group position={p}>
    <Cube m={m} material={m.glow} s={[.22,.3,.22]} />
    <Cube m={m} material={m.iron} p={[0,-.18,0]} s={[.33,.07,.33]} />
    <Cube m={m} material={m.iron} p={[0,.18,0]} s={[.33,.07,.33]} />
    <Cube m={m} material={m.iron} p={[0,.25,0]} s={[.14,.12,.14]} />
    {[-1,1].flatMap(x=>[-1,1].map(z=><Cube key={`${x},${z}`} m={m} material={m.iron} p={[x*.12,0,z*.12]} s={[.035,.36,.035]} />))}
    <pointLight color="#ffc36f" intensity={2.5} distance={4} decay={2} />
  </group>;
}
function Avatar({ m, controls, active }: {m:Materials;controls:React.RefObject<Controls>;active:boolean}) {
  const head=useRef<THREE.Group>(null);const arm=useRef<THREE.Group>(null); const body=useRef<THREE.Group>(null);const until=useRef(0);const last=useRef(0);
  const hair=useMemo(()=>{
    const rng=random(64); const out:Block[]=[];
    for(let x=-3;x<=3;x++)for(let z=-2;z<=2;z++){
      const edge=Math.abs(x)===3;
      const y= .5+(edge?-.1:0)+rng()*.16;
      out.push({p:[x*.145,y,z*.17],s:[.2+rng()*.05,.19+rng()*.1,.23],c:['#211d1c','#292322','#181717'][Math.floor(rng()*3)],r:[rng()*.22,rng()*.6,rng()*.24]});
      if(z===-2||edge)out.push({p:[x*.15,.26,z*.18],s:[.19,.33,.21],c:'#211d1c'});
    }
    // Asymmetric curls at the forehead preserve the portrait's tousled silhouette.
    for(let i=0;i<7;i++)out.push({p:[-.45+i*.14,.42-rng()*.13,.43],s:[.19,.19,.18],c:'#252120',r:[.1,i*.15,.15]});
    return out;
  },[]);
  const faceMaterials=useMemo(()=>[m.skin,m.skin,m.skin,m.skin,m.face,m.skin],[m]);
  useFrame(({clock},dt)=>{
    if(!active||!head.current||!arm.current||!body.current)return;
    const c=controls.current; const time=clock.elapsedTime;
    if(c.action!==last.current){last.current=c.action;until.current=time+2.2;}
    head.current.rotation.y=THREE.MathUtils.damp(head.current.rotation.y,c.lookX*.2,5,dt);
    head.current.rotation.x=THREE.MathUtils.damp(head.current.rotation.x,-c.lookY*.08,5,dt);
    body.current.position.y=c.reduced?0:Math.sin(time*1.5)*.016;
    const wave=time<until.current&&!c.reduced;
    arm.current.rotation.z=THREE.MathUtils.damp(arm.current.rotation.z,c.reduced?(c.action%2?-2.1:-.06):wave?-2.2+Math.sin(time*11)*.3:-.06,9,dt);
  });
  return <group ref={body} position={[0,0,0]}>
    <Cube m={m} material={m.pants} p={[-.25,.73,0]} s={[.43,1.19,.48]} />
    <Cube m={m} material={m.pants} p={[.25,.73,.02]} s={[.43,1.19,.48]} />
    {[-.25,.25].map(x=><group key={x}>
      <Cube m={m} material={m.shoe} p={[x,.16,.12]} s={[.47,.23,.72]} />
      <Cube m={m} material={m.sole} p={[x,.07,.13]} s={[.48,.08,.73]} />
      {[.26,.38].map(z=><Cube key={z} m={m} material={m.sole} p={[x,.29,z]} s={[.27,.024,.045]}/>)}
    </group>)}
    <Cube m={m} material={m.shirt} p={[0,1.94,0]} s={[1.02,1.27,.54]} />
    <Cube m={m} material={m.skin} p={[0,2.66,0]} s={[.36,.3,.35]} />
    {[-1,1].map(side=><group key={side} ref={side===-1?arm:undefined} position={[side*.7,2.44,0]} rotation={[0,0,side*.06]}>
      <Cube m={m} material={m.cloth} p={[0,-.27,0]} s={[.36,.65,.49]} />
      <Cube m={m} material={m.skin} p={[0,-.85,.02]} s={[.29,.58,.37]} />
      <Cube m={m} material={m.skin} p={[0,-1.14,.04]} s={[.31,.25,.39]} />
    </group>)}
    <group ref={head} position={[0,3.18,.02]}>
      <Cube m={m} material={faceMaterials} s={[.94,1.02,.81]} />
      <Cube m={m} material={m.skin} p={[0,-.03,.45]} s={[.15,.22,.12]} />
      <Cube m={m} material={m.hair} p={[0,-.46,.015]} s={[.84,.14,.77]} />
      {[-1,1].map(x=><Cube key={x} m={m} material={m.skin} p={[x*.5,-.05,0]} s={[.13,.28,.23]} />)}
      <Blocks blocks={hair} m={m}/>
    </group>
  </group>;
}
function Chest({m,controls,active}:{m:Materials;controls:React.RefObject<Controls>;active:boolean}){
 const lid=useRef<THREE.Group>(null);
 useFrame((_,dt)=>{if(active&&lid.current)lid.current.rotation.x=THREE.MathUtils.damp(lid.current.rotation.x,controls.current.action%2===1? -1.65:0,controls.current.reduced?1000:7,dt);});
 return <group position={[0,.18,0]}>
  <Cube m={m} material={m.wood} p={[0,.47,0]} s={[1.65,.92,1.1]} />
  {[-.7,.7].map(x=><Cube key={x} m={m} material={m.darkwood} p={[x,.48,.57]} s={[.13,.96,.08]}/>)}
  <Cube m={m} material={m.darkwood} p={[0,.06,0]} s={[1.76,.13,1.2]}/>
  <group ref={lid} position={[0,.92,-.55]}>
   <Cube m={m} material={m.wood} p={[0,.19,.55]} s={[1.74,.38,1.17]}/>
   <Cube m={m} material={m.darkwood} p={[0,.02,.55]} s={[1.8,.08,1.22]}/>
   <Cube m={m} material={m.gold} p={[0,-.03,1.18]} s={[.18,.3,.075]}/>
  </group>
  <Cube m={m} material={m.glow} p={[0,.9,0]} s={[1.2,.04,.75]}/>
 </group>;
}
function Crafting({m,controls,active}:{m:Materials;controls:React.RefObject<Controls>;active:boolean}){
 const gem=useRef<THREE.Mesh>(null);
 useFrame(({clock},dt)=>{if(!active||!gem.current)return;const c=controls.current;gem.current.rotation.y=c.reduced?c.action:clock.elapsedTime*.65+c.action;gem.current.position.y=c.reduced?1.18:1.18+Math.sin(clock.elapsedTime*2)*.07;const scale=c.action%2?1.5:1;gem.current.scale.setScalar(c.reduced?scale:THREE.MathUtils.damp(gem.current.scale.x,scale,7,dt));});
 return <group position={[0,.67,0]}>
  <Cube m={m} material={m.wood} s={[1.25,1.25,1.25]}/>
  {[-.4,0,.4].flatMap(x=>[-.4,0,.4].map(z=><Cube key={`${x}-${z}`} m={m} material={m.darkwood} p={[x,.64,z]} s={[.36,.04,.36]}/>))}
  {[-.5,.5].map(x=><Cube key={x} m={m} material={m.darkwood} p={[x,0,.64]} s={[.12,1.2,.03]}/>)}
  <mesh ref={gem} position={[0,1.18,0]} rotation={[0,0,.25]}><octahedronGeometry args={[.34,0]}/><primitive object={m.gem} attach="material" /></mesh>
 </group>;
}
function Trophy({m,controls,active}:{m:Materials;controls:React.RefObject<Controls>;active:boolean}){
 const trophy=useRef<THREE.Group>(null);
 useFrame((_,dt)=>{if(!active||!trophy.current)return;const c=controls.current;trophy.current.rotation.y=c.reduced?c.action*.5:THREE.MathUtils.damp(trophy.current.rotation.y,c.action*Math.PI*2,3,dt);});
 return <group ref={trophy}>
  <Cube m={m} material={m.obsidian} p={[0,.18,0]} s={[1.15,.3,.85]}/>
  <Cube m={m} material={m.gold} p={[0,.65,0]} s={[.18,.8,.18]}/>
  <Cube m={m} material={m.gold} p={[0,1.1,0]} s={[.85,.45,.6]}/>
  {[-1,1].map(side=><group key={side}>
   <Cube m={m} material={m.gold} p={[side*.53,1.33,0]} s={[.14,.5,.5]}/>
   <Cube m={m} material={m.gold} p={[side*.73,1.3,0]} s={[.34,.1,.15]}/>
   <Cube m={m} material={m.gold} p={[side*.85,1.09,0]} s={[.1,.47,.15]}/>
   <Cube m={m} material={m.gold} p={[side*.65,.89,0]} s={[.42,.1,.15]}/>
  </group>)}
  <Cube m={m} material={m.gem} p={[0,1.75,0]} s={[.33,.33,.33]} r={[.2,.3,.3]} />
 </group>;
}
function Portal({m,controls,active}:{m:Materials;controls:React.RefObject<Controls>;active:boolean}){
 const field=useRef<THREE.Group>(null);
 useFrame(({clock},dt)=>{if(!active||!field.current)return;const c=controls.current;const target=c.action%2?1:.55;field.current.scale.x=c.reduced?target:THREE.MathUtils.damp(field.current.scale.x,target+Math.sin(clock.elapsedTime*2)*.025,6,dt);});
 return <group>
  {[-1,1].flatMap(x=>[.25,.75,1.25,1.75,2.25].map(y=><Cube key={`${x}${y}`} m={m} material={m.obsidian} p={[x*.73,y,0]} s={[.45,.48,.5]}/>))}
  {[0,.5,1].flatMap((_,i)=>[.02,2.48].map(y=><Cube key={`${i}${y}`} m={m} material={m.obsidian} p={[(i-1)*.5,y,0]} s={[.5,.35,.5]}/>))}
  <group ref={field}><Cube m={m} material={m.portal} p={[0,1.23,0]} s={[1.08,2.2,.04]}/>{[-.3,0,.3].map((x,i)=><Cube key={x} m={m} material={m.gem} p={[x,.55+i*.65,.04]} s={[.045,.2,.025]}/>)}</group>
  <pointLight color="#927cde" position={[0,1.2,1]} intensity={3} distance={4}/>
 </group>;
}
function Campfire({m,controls,active}:{m:Materials;controls:React.RefObject<Controls>;active:boolean}){
 const fire=useRef<THREE.Group>(null);
 useFrame(({clock})=>{if(active&&fire.current)fire.current.scale.y=controls.current.reduced?1+(controls.current.action%3)*.1:.95+Math.sin(clock.elapsedTime*7)*.1+(controls.current.action%3)*.1;});
 return <group>
  {[-.26,.26].map(z=><Cube key={z} m={m} material={m.wood} p={[0,.22,z]} s={[1.1,.25,.25]} r={[0,z*.5,0]}/>)}
  <group ref={fire} position={[0,.32,0]}>
   <Cube m={m} material={m.flame} p={[0,.26,0]} s={[.55,.5,.45]} r={[0,.4,0]}/>
   <Cube m={m} material={m.glow} p={[-.08,.6,0]} s={[.3,.4,.3]} r={[0,-.2,0]}/>
   <Cube m={m} material={m.flame} p={[.1,.92,0]} s={[.14,.24,.14]}/>
  </group>
  <pointLight position={[0,.9,0]} color="#ffaa50" intensity={7} distance={5}/>
 </group>;
}
export function VoxelModel({kind,m,controls,active}:{kind:SceneKind;m:Materials;controls:React.RefObject<Controls>;active:boolean}){
 return <>
  <Island m={m} trees={kind==='avatar'||kind==='campfire'}/>
  <Lantern m={m}/>
  {kind==='avatar'?<Avatar m={m} controls={controls} active={active}/>:kind==='chest'?<Chest m={m} controls={controls} active={active}/>:kind==='crafting'?<Crafting m={m} controls={controls} active={active}/>:kind==='achievement'?<Trophy m={m} controls={controls} active={active}/>:kind==='portal'?<Portal m={m} controls={controls} active={active}/>:<Campfire m={m} controls={controls} active={active}/>}
 </>;
}
