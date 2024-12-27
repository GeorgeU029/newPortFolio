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
  const [typedText, setTypedText] = useState('');
  const fullText = `A curious student striving to grow,\nsolve problems, and make an impact one step at a time.`;
  const typingSpeed = 80;

  // Text typing effect
  useEffect(() => {
    if (isLoaded) {
      const delayTimer = setTimeout(() => {
        let index = 0;
        const typingTimer = setInterval(() => {
          if (index <= fullText.length) {
            setTypedText(fullText.slice(0, index));
            index++;
          } else {
            clearInterval(typingTimer); // Stop typing when done
          }
        }, typingSpeed);

        return () => clearInterval(typingTimer); // Cleanup typing timer
      }, 1000); // Delay for 1 second after the computer has loaded

      return () => clearTimeout(delayTimer); // Cleanup delay timer
    }
  }, [isLoaded]);

  // Handle Suspense fallback resolution
  const handleSceneLoaded = () => {
    setIsLoaded(true); // Trigger this when all 3D content is ready
  };

  return (
    <section id="home" className="min-h-screen w-full flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 items-center">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hey my name is George <span className="waving-hand">👋</span>
        </p>
        {isLoaded && (
          <div className="typewriter-wrapper">
            {typedText.split('\n').map((line, index) => (
              <div key={index} className="typewriter-line">
                {line}
                {index === typedText.split('\n').length - 1 && (
                  <span className="typewriter-cursor" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 25]} />
            <HeroCamera isMobile={isMobile}>
              <GamerRoom
                position={[-0.5, -2, 8.5]}
                rotation={[0.2, 0, 0]}
                scale={isMobile ? 0.6 : .8} // Adjust scale for mobile
              />
            </HeroCamera>
            <group>
              <Pacman
                position={isMobile ? [-6, 2, -4] : [-7, 3, -3]} // Adjust position for mobile
                rotation={[0.5, 4, -0.1]}
                scale={isMobile ? 0.4 : 0.5}
              />
            </group>
            <group>
              <SpaceInvader
                position={isMobile ? [6, 2, -4] : [11, 3, -5]} // Adjust position for mobile
                rotation={[0.5, 2.3, -0.1]}
                scale={isMobile ? 0.1 : 0.2} // Slightly reduce size for mobile
              />
            </group>
            <group>
              <MajorasMask
                position={isMobile ? [-6, -2, -4] : [-12, 0, -5]} // Adjust position for mobile
                rotation={[0.5, 0.9, -0.1]}
                scale={isMobile ? 0.02 : 0.03} // Slightly reduce size for mobile
              />
            </group>
            <ambientLight intensity={1} color={'pink'} />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
        {/** Trigger the loading completion */}
        <div style={{ display: 'none' }} ref={handleSceneLoaded} />
      </div>

      {isLoaded && ( // Button will only render when 3D content is loaded
        <div className='absolute bottom-40 left-0 right-0 w-full z-10 c-space'>
          <a href='#about' className='w-fit'>
            <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
          </a>
        </div>
      )}
    </section>
  );
};

export default Hero;
