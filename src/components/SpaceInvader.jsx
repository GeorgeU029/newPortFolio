import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const SpaceInvader = (props) => {
  const groupRef = useRef(); // Ref for the group

  const { nodes } = useGLTF('/models/space_invader.glb'); // Ensure the path is correct

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['poly-1-0'].geometry}
            material={new THREE.MeshStandardMaterial({ color: '#C71585' })} // Dark pink
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['poly-3-0'].geometry}
            material={new THREE.MeshStandardMaterial({ color: '#C71585' })} // Dark pink
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['poly-4-0'].geometry}
            material={new THREE.MeshStandardMaterial({ color: '#C71585' })} // Dark pink
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['poly-5-0'].geometry}
            material={new THREE.MeshStandardMaterial({ color: '#C71585' })} // Dark pink
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['poly-6-0'].geometry}
            material={new THREE.MeshStandardMaterial({ color: '#C71585' })} // Dark pink
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['poly-7-0'].geometry}
            material={new THREE.MeshStandardMaterial({ color: '#C71585' })} // Dark pink
          />
        </group>
      </group>
    </group>
  );
};

// Preload the GLB file for performance optimization
useGLTF.preload('/models/space_invader.glb'); // Ensure the path is correct

export default SpaceInvader;
