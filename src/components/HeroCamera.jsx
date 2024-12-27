import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    // Adjust camera position to zoom in and center
    const targetPosition = isMobile ? [0, 0, 18] : [0, 0, 20]; // Bring the camera closer
    easing.damp3(state.camera.position, targetPosition, 0.3, delta);

    const lookAtTarget = [0, 0, 0]; // Center the camera focus
    state.camera.lookAt(...lookAtTarget);

    if (!isMobile && groupRef.current) {
      // Add slight rotation interaction for desktop
      easing.damp3(
        groupRef.current.rotation,
        [
          -state.pointer.y / 8, // Slight interaction sensitivity
          state.pointer.x / 10,
          0,
        ],
        0.3, // Smooth interaction
        delta
      );
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

export default HeroCamera;
