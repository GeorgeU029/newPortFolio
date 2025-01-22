import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls, Html } from '@react-three/drei';
import DemoGameBoy from '../components/DemoGameBoy';
import { myProjects } from '../constants';

// Optimized CanvasLoader with timeout
const CanvasLoader = () => {
  const [hasTimedOut, setHasTimedOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasTimedOut(true), 15000); // 15 seconds timeout
    return () => clearTimeout(timer);
  }, []);

  if (hasTimedOut) {
    return (
      <Html center>
        <p style={{ color: 'red' }}>Failed to load. Please refresh the page.</p>
      </Html>
    );
  }

  return (
    <Html center>
      <p style={{ color: 'white' }}>Loading...</p>
    </Html>
  );
};

// Lazy-load the DemoGameBoy 3D model
const LazyDemoGameBoy = React.lazy(() => import('../components/DemoGameBoy'));

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const projectCount = myProjects.length;
  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section id="work" className="c-space my-20">
      <p className="text-3xl font-mono text-green-400 text-center mb-8">
        My Work
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        {/* Left Section */}
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0 w-full h-96">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-5 my-5">
            <p className="text-2xl font-mono font-semibold text-green-400 animatedTest">
              {currentProject.title}
            </p>
            <p className="font-mono text-white animatedText">
              {currentProject.desc}
            </p>
            <p className="font-mono text-white animatedText">
              {currentProject.subdesc}
            </p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              className="flex items-center gap-2 cursor-pointer text-white hover:text-green-400 transition-colors"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p className="font-mono">Check Live Site</p>
              <img
                src="/assets/arrow-up.png"
                className="w-3 h-3"
                alt="arrow"
              />
            </a>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation('previous')}
            >
              <img
                src="/assets/left-arrow.png"
                alt="left arrow"
                className="w-4 h-4"
              />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation('next')}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2.5} position={[0, -3, -5]} rotation={[0, 0, 1, 0]}>
                  <LazyDemoGameBoy imgTexture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls
              maxPolarAngle={Math.PI / 2}
              enableZoom={false}
              enableDamping={true}
              dampingFactor={0.1}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
