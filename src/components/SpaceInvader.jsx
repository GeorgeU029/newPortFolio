import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';

const SpaceInvader = (props) => {
  const groupRef = useRef(); // Ref for the group to apply animation
  const { nodes } = useGLTF('/models/space_invader.glb'); // Ensure the path is correct

  useEffect(() => {
    if (groupRef.current) {
      // Animate the group position on the y-axis
      gsap.to(groupRef.current.position, {
        y: '+=0.5', // Move up by 0.5 units
        duration: 1.5, // Animation duration
        repeat: -1, // Infinite repeat
        yoyo: true, // Reverse direction after reaching the target
        ease: 'power1.inOut', // Smooth easing
      });
    }
  }, []);

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
