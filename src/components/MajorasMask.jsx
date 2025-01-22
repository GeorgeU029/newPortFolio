import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const MajorasMask = (props) => {
  const { nodes, materials } = useGLTF('/models/majoras_mask.glb'); // Ensure path correctness
  const maskRef = useRef();

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
