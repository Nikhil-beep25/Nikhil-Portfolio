import { Component, useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { makeMaterials } from './materials';
import { Cube, Island, Lantern } from './VoxelModels';

class IntroBoundary extends Component<{children: ReactNode}, {failed: boolean}> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? null : this.props.children; }
}

function Realm({ still }: { still: boolean }) {
  const realm = useRef<THREE.Group>(null);
  const fragments = useRef<THREE.Group>(null);
  const materials = useMemo(makeMaterials, []);
  const target = useMemo(() => new THREE.Vector3(), []);
  const { invalidate, camera, size } = useThree();
  useEffect(() => { camera.position.z = size.width < size.height ? 17 : 10; camera.updateProjectionMatrix(); invalidate(); }, [camera, size.width, size.height, invalidate]);
  useEffect(() => {
    if (still) { invalidate(); return; }
    const timer = setInterval(invalidate, 1000 / 30);
    return () => clearInterval(timer);
  }, [still, invalidate]);
  useEffect(() => () => { materials.dispose(); materials.cube.dispose(); }, [materials]);
  useFrame(({ clock }, dt) => {
    if (!realm.current || !fragments.current) return;
    const t = still ? 0 : clock.elapsedTime;
    realm.current.rotation.y = Math.sin(t * .12) * .12;
    fragments.current.children.forEach((child, i) => {
      const angle = i / 26 * Math.PI * 2;
      const radius = 3.5 + (i % 3) * .4;
      target.set(Math.cos(angle) * radius, Math.sin(angle) * radius * .65, Math.sin(i * 4) * 1.7);
      if (still) child.position.copy(target);
      else child.position.lerp(target, 1 - Math.exp(-dt * 1.8));
      child.rotation.set(t * .12 + i, t * .18 + i, Math.sin(t * .3 + i) * .4);
    });
  });
  return <>
    <ambientLight intensity={1.1}/>
    <directionalLight position={[4,5,6]} color="#ffdda2" intensity={3}/>
    <pointLight position={[-3,1,3]} color="#77e4bd" intensity={35} distance={15}/>
    <group ref={realm}>
      <group position={[-4,-1.9,-1]} rotation={[.2,.7,-.12]} scale={.68}><Island m={materials}/><Lantern m={materials}/></group>
      <group position={[4.4,1.9,-3]} rotation={[.1,-.7,.1]} scale={.5}><Island m={materials}/><Lantern m={materials}/></group>
      <group position={[3,-2.3,-1.5]} rotation={[.2,-.6,.06]} scale={.4}><Island m={materials} trees={false}/></group>
      <group ref={fragments}>
        {Array.from({length:26}, (_, i) => <group key={i} position={[Math.cos(i)*8,Math.sin(i)*6,-5]}>
          <Cube m={materials} material={i%5===0?materials.gem:i%3===0?materials.gold:materials.obsidian} s={[.1+(i%3)*.09,.1+(i%3)*.09,.1+(i%3)*.09]}/>
        </group>)}
      </group>
    </group>
  </>;
}
export default function IntroScene({ still }: { still: boolean }) {
  const [hidden, setHidden] = useState(document.hidden);
  useEffect(() => {
    const update = () => setHidden(document.hidden);
    document.addEventListener('visibilitychange', update);
    return () => document.removeEventListener('visibilitychange', update);
  }, []);
  return <IntroBoundary><Canvas aria-hidden="true" camera={{position:[0,0,10],fov:48}} dpr={[1,1.5]} frameloop="demand" gl={{alpha:true,antialias:true,powerPreference:'low-power'}}><Realm still={still || hidden}/></Canvas></IntroBoundary>;
}
