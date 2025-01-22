import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    // Adjust camera position to zoom in and center
    const targetPosition = isMobile ? [0, 0, 18] : [0, 0, 20]; // Bring the camera closer
    easing.damp3(state.camera.position, targetPosition, 0.3, delta);

    // Keep the camera focused on the center of the scene
    const lookAtTarget = [0, 0, 0];
    state.camera.lookAt(...lookAtTarget);

  });

  return <group ref={groupRef}>{children}</group>;
};

export default HeroCamera;
