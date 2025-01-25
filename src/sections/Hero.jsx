import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import GamerRoom from '../components/GamerRoom';
import Pacman from '../components/Packman';
import CanvasLoader from '../components/CanvasLoader';
import { useMediaQuery } from 'react-responsive';
import SpaceInvader from '../components/SpaceInvader';
import MajorasMask from '../components/MajorasMask';
import HeroCamera from '../components/HeroCamera';
import Button from '../components/Button';

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      if (!isLoaded) {
        setIsLoaded(true); // Fallback in case loading takes too long
      }
    }, 15000); // 15-second fallback for loading
    return () => clearTimeout(loadingTimeout);
  }, [isLoaded]);

  const handleSceneLoaded = () => {
    setIsLoaded(true); // Trigger when the scene has finished loading
  };

  return (
    <section id="home" className="min-h-screen w-full flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 items-center">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hey, my name is George <span className="waving-hand">👋</span>
        </p>
        <p className="sm:text-lg text-md text-gray-300 text-center font-generalsans max-w-3xl">
          I'm a curious computer science student with a passion for creating cool projects, solving problems, 
          and bringing creative ideas to life. From game-inspired visuals to functional tools, I'm always 
          learning, growing, and building. Let's create something awesome together!
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 25]} />
            <HeroCamera isMobile={isMobile}>
              <GamerRoom
                position={[0, -2.5, 3.5]}
                rotation={[0.1, 0, 0]}
                scale={isMobile ? 4 : 10}
                onLoad={handleSceneLoaded}
              />
            </HeroCamera>
            <group>
              <Pacman
                position={isMobile ? [-2, 2, -3] : [-6, 3, -2]}
                rotation={[0.5, 4, -0.1]}
                scale={isMobile ? 0.4 : 0.5}
              />
            </group>
            <group>
              <SpaceInvader
                position={isMobile ? [3, 2, -3] : [10, 3, -4]}
                rotation={[0.5, 2.3, -0.1]}
                scale={isMobile ? 0.1 : 0.2}
              />
            </group>
            <group>
              <MajorasMask
                position={isMobile ? [-3, -2, -3] : [-11, 0, -4]}
                rotation={[0.5, 0.9, -0.1]}
                scale={isMobile ? 0.02 : 0.03}
              />
            </group>

            <ambientLight intensity={1} color={'green'} />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
        <div style={{ display: 'none' }} ref={handleSceneLoaded} />
      </div>

      {isLoaded && (
        <div className="absolute bottom-40 left-0 right-0 w-full z-10 c-space">
          <a href="#about" className="w-fit">
            <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
          </a>
        </div>
      )}
    </section>
  );
};

export default Hero;
