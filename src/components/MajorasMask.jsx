import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';

const MajorasMask = (props) => {
  const { nodes, materials } = useGLTF('/models/majoras_mask.glb'); // Ensure path correctness
  const maskRef = useRef();

  // Animate the mask up and down
  useEffect(() => {
    if (maskRef.current) {
      gsap.to(maskRef.current.position, {
        y: "+=0.5", // Move up by 0.5 units
        duration: 2,
        repeat: -1, // Infinite loop
        yoyo: true, // Reverse the animation
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <group {...props} dispose={null} ref={maskRef}>
      <group position={[-1.261, 10.531, -32.08]} rotation={[-0.398, 0, -0.155]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.major_nonDeci_major_nonDeci_0.geometry}
            material={materials.major_nonDeci}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object001_Object001_0.geometry}
            material={materials.Object001}
          />
        </group>
      </group>
    </group>
  );
};

// Preload the GLB file for performance optimization
useGLTF.preload('/models/majoras_mask.glb'); // Ensure path correctness

export default MajorasMask;
