import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree, invalidate } from '@react-three/fiber';
import { View, PerspectiveCamera } from '@react-three/drei';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import * as THREE from 'three';
import { makeMaterials, random, type Materials } from './materials';
import { FloatingRelics } from './FloatingRelics';
import type { EffectLevel } from '../minecraft/EffectsMenu';
import { VoxelModel, type Controls } from './VoxelModels';
import type { SceneKind } from './SceneFrame';

type Slot = { element: HTMLElement; kind: SceneKind; index: number };
function Scene({ slot, night, reduced, m, effects }: { effects:EffectLevel;slot: Slot; night: boolean; reduced: boolean; m: Materials }) {
  const group = useRef<THREE.Group>(null);
  const camera = useRef<THREE.PerspectiveCamera>(null);
  const [active, setActive] = useState(false);
  const controls = useRef<Controls>({rotation:-.24,lookX:0,lookY:0,action:0,hovered:false,reduced});
  const avatar=slot.kind==='avatar';
  const particles=useMemo(()=>{
    const rng=random(120);const positions=new Float32Array(24*3);
    for(let i=0;i<24;i++){positions[i*3]=(rng()-.5)*4.5;positions[i*3+1]=rng()*3.8;positions[i*3+2]=(rng()-.5)*2.8;}
    const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(positions,3));return geometry;
  },[]);
  useEffect(()=>()=>particles.dispose(),[particles]);
  useEffect(()=>{controls.current.reduced=reduced;invalidate();},[reduced,night]);
  useEffect(()=>{
    const el=slot.element;
    const observer=new IntersectionObserver(([entry])=>{setActive(entry.isIntersecting);invalidate();});observer.observe(el);
    let down=false;let lastX=0;
    const pointerDown=(event:PointerEvent)=>{down=true;lastX=event.clientX;};
    const pointerMove=(event:PointerEvent)=>{
      const box=el.getBoundingClientRect();
      controls.current.lookX=(event.clientX-box.left)/box.width*2-1;
      controls.current.lookY=-((event.clientY-box.top)/box.height*2-1);
      if(down){const dx=event.clientX-lastX;controls.current.rotation+=dx*.009;lastX=event.clientX;}
      controls.current.hovered=true;invalidate();
    };
    const pointerUp=()=>{down=false;};
    const leave=()=>{down=false;controls.current.hovered=false;controls.current.lookX=0;controls.current.lookY=0;invalidate();};
    const action=(event:Event)=>{
      const action=(event as CustomEvent<string>).detail;
      if(action==='left')controls.current.rotation-=.4;
      else if(action==='right'||action==='turn')controls.current.rotation+=.6;
      else controls.current.action+=1;
      invalidate();
    };

    el.addEventListener('pointerdown',pointerDown);el.addEventListener('pointermove',pointerMove);el.addEventListener('pointerup',pointerUp);el.addEventListener('pointercancel',pointerUp);el.addEventListener('pointerleave',leave);el.addEventListener('voxel-action',action);
    return()=>{observer.disconnect();el.removeEventListener('pointerdown',pointerDown);el.removeEventListener('pointermove',pointerMove);el.removeEventListener('pointerup',pointerUp);el.removeEventListener('pointercancel',pointerUp);el.removeEventListener('pointerleave',leave);el.removeEventListener('voxel-action',action);};
  },[slot]);
  useFrame(({clock},dt)=>{
    if(!active||!group.current)return;
    const c=controls.current;
    group.current.rotation.y=c.reduced?c.rotation:THREE.MathUtils.damp(group.current.rotation.y,c.rotation+(c.hovered?c.lookX*.08:Math.sin(clock.elapsedTime*.24)*.07),6,dt);
    group.current.position.y=c.reduced?0:Math.sin(clock.elapsedTime*.9)*(effects==='cinematic'?.09:.025);
  });
  useEffect(()=>{camera.current?.lookAt(0,avatar?1.65:.8,0);},[avatar]);
  return <>
    <PerspectiveCamera ref={camera} makeDefault position={avatar?[5,3.8,9]:[4,3.4,6]} fov={avatar?31:34} near={.1} far={50}/>
    <ambientLight intensity={night?.65:1.1}/>
    <hemisphereLight args={[night?'#9cb9e3':'#dfe8ce','#33482a',1.6]}/>
    <directionalLight position={[4,7,4]} color={night?'#b3d2ff':'#ffe0a8'} intensity={night?2.4:3.1} castShadow shadow-mapSize={[512,512]} shadow-camera-left={-4} shadow-camera-right={4} shadow-camera-top={6} shadow-camera-bottom={-2} shadow-bias={-.001}/>
    <directionalLight position={[-3,3,-3]} color="#759c9a" intensity={1}/>
    <group ref={group}><VoxelModel kind={slot.kind} m={m} controls={controls} active={active}/></group>
    {effects==='cinematic' && !reduced && <FloatingRelics m={m} active={active} avatar={avatar}/>}
    <points visible={effects !== 'off'} geometry={particles}><pointsMaterial color={night?'#d0e7a8':'#e4cb92'} size={.028} transparent opacity={.6} depthWrite={false}/></points>
  </>;
}
function ContextHealth({onFailure}:{onFailure:()=>void}) {
  const {gl}=useThree();
  useEffect(()=>{
    const canvas=gl.domElement;
    canvas.addEventListener('webglcontextlost',onFailure);
    // R3F intentionally loses the old context after unmount; it must not fail a new renderer.
    return()=>canvas.removeEventListener('webglcontextlost',onFailure);
  },[gl,onFailure]);
  return null;
}
function ClearFrame({ready}:{ready:()=>void}) {
  const initialized=useRef(false);const {gl,size}=useThree();
  useFrame(()=>{
    gl.setScissorTest(false);gl.setViewport(0,0,size.width,size.height);gl.setClearColor('#000000',0);gl.clear(true,true,true);
    if(!initialized.current){initialized.current=true;ready();}
  },0);
  return null;
}
export default function WorldCanvas({night,onReady,onFailure,effects}:{effects:EffectLevel;night:boolean;onReady:()=>void;onFailure:()=>void}) {
  const [slots]=useState<Slot[]>(()=>Array.from(document.querySelectorAll<HTMLElement>('[data-voxel-scene]')).map((element,index)=>({element,index,kind:element.dataset.voxelScene as SceneKind})));
  const [reduced,setReduced]=useState(()=>matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [visible,setVisible]=useState(!document.hidden);
  const [inView,setInView]=useState(true);
  const materials=useMemo(makeMaterials,[]);
  const {scrollY}=useScroll();useMotionValueEvent(scrollY,'change',()=>invalidate());
  useEffect(()=>{
    const mq=matchMedia('(prefers-reduced-motion: reduce)');const change=()=>setReduced(mq.matches);const visibility=()=>setVisible(!document.hidden);
    mq.addEventListener('change',change);document.addEventListener('visibilitychange',visibility);
    const intersecting=new Set<Element>();
    const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting)intersecting.add(entry.target);else intersecting.delete(entry.target);}setInView(intersecting.size>0);invalidate();});
    slots.forEach(slot=>observer.observe(slot.element));
    const resize=new ResizeObserver(()=>invalidate());slots.forEach(slot=>resize.observe(slot.element));
    return()=>{mq.removeEventListener('change',change);document.removeEventListener('visibilitychange',visibility);resize.disconnect();observer.disconnect();};
  },[slots]);
  useEffect(()=>{
    if(!visible||!inView)return;
    // Cap ambient animation at 30 fps. Reduced-motion mode renders only on interaction/scroll.
    if(reduced || effects === 'off'){invalidate();return;}
    const timer=setInterval(()=>invalidate(),1000/30);return()=>clearInterval(timer);
  },[visible,reduced,inView,effects]);
  useEffect(()=>()=>{materials.dispose();materials.cube.dispose();},[materials]);
  return <div className="world-webgl" aria-hidden="true">
    <Canvas frameloop="demand" dpr={[1,1.5]} shadows={{type:THREE.PCFShadowMap}} gl={{alpha:true,antialias:true,powerPreference:'low-power',failIfMajorPerformanceCaveat:true}}
      fallback={null}>
      <ContextHealth onFailure={onFailure}/>
      <ClearFrame ready={onReady}/>
      {slots.map(slot=><View key={slot.index} index={slot.index+1} track={{current:slot.element}}><Scene slot={slot} night={night} effects={effects} reduced={reduced || effects === 'off'} m={materials}/></View>)}
    </Canvas>
  </div>;
}
