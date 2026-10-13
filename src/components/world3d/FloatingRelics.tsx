import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import type { Group } from 'three';
import { Cube } from './VoxelModels';
import type { Materials } from './materials';

export function FloatingRelics({ m, active, avatar }: { m: Materials; active: boolean; avatar: boolean }) {
  const group = useRef<Group>(null);
  useFrame(({ clock }) => {
    if (!active || !group.current) return;
    group.current.children.forEach((child, i) => {
      child.position.y = (avatar ? 1.1 + i * .45 : .7 + i * .2) + Math.sin(clock.elapsedTime * .6 + i * 2) * .15;
      child.rotation.y = clock.elapsedTime * .2 + i;
      child.rotation.z = Math.sin(clock.elapsedTime * .4 + i) * .15;
    });
  });
  return <group ref={group}>
    {[-1,1,-1,1].map((side,i) => <group key={i} position={[side*(1.5+i*.09),1+i*.5,-.6]}>
      <Cube m={m} material={i%2?m.gold:m.gem} s={[.12,.12,.12]} r={[.4,.3,.2]}/>
      <Cube m={m} material={m.obsidian} p={[0,-.22,0]} s={[.2,.06,.2]}/>
    </group>)}
  </group>;
}
