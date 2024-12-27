import React, { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('Georgeulloa.fl@gmail.com');
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-16 bg-black text-white" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
 {/* First Grid Item - Hi, I'm George */}
 <div className="col-span-1 xl:row-span-3 p-6 border border-green-500 rounded-lg bg-black">
  <div className="relative w-full h-[240px] overflow-hidden rounded-lg flex items-center justify-center mt-2">
    <img
      src="/assets/picOfMe.png"
      alt="George"
      className="w-[80%] h-[90%] object-cover rounded-lg"
    />
  </div>
  <div className="mt-3">
    <p className="text-2xl font-mono text-green-400">Hi, I'm George</p>
    <p className="text-sm font-mono text-white mt-2 leading-relaxed">
      A curious student striving to grow, solve problems, and make an impact one step at a time.
    </p>
  </div>
</div>





{/* Second Grid Item - Tech Stack */}
<div className="col-span-1 xl:row-span-3 p-6 border border-green-500 rounded-lg bg-black">
  <div className="mt-4">
    <p className="text-2xl font-mono text-green-400 text-center mb-6">
      Tech Stack
    </p>
    <div className="grid grid-cols-2 gap-6 justify-items-center">
      {/* Python */}
      <div className="flex flex-col items-center">
        <img
          src="/assets/python.svg"
          alt="Python"
          className="w-16 h-16 object-contain"
        />
        <p className="mt-4 text-sm font-mono text-green-400 text-center">Python</p>
      </div>
      {/* React */}
      <div className="flex flex-col items-center">
        <img
          src="/assets/react.svg"
          alt="React"
          className="w-16 h-16 object-contain"
        />
        <p className="mt-4 text-sm font-mono text-green-400 text-center">React</p>
      </div>
      {/* JavaScript */}
      <div className="flex flex-col items-center">
        <img
          src="/assets/javascript-logo.webp"
          alt="JavaScript"
          className="w-16 h-16 object-contain"
        />
        <p className="mt-4 text-sm font-mono text-green-400 text-center">
          JavaScript
        </p>
      </div>
      {/* Java */}
      <div className="flex flex-col items-center">
        <img
          src="/assets/javalogo.png"
          alt="Java"
          className="w-16 h-16 object-contain"
        />
        <p className="mt-4 text-sm font-mono text-green-400 text-center">Java</p>
      </div>
    </div>
  </div>
</div>

        {/* Third Grid Item - Looking for an Internship */}
        <div className="col-span-1 xl:row-span-3 p-6 border border-green-500 rounded-lg bg-black">
          <div className="rounded-lg w-full h-[180px] flex justify-center items-center">
            <Globe
              height={180}
              width={180}
              backgroundColor="rgba(0,0,0,0)"
              backgroundImageOpacity={0.5}
              showAtmosphere
              showGraticules
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              labelsData={[
                {
                  lat: 25.793449,
                  lng: -80.139198,
                  text: "I'm Here",
                  color: 'white',
                  size: 20,
                },
              ]}
            />
          </div>
          <div className="mt-4">
            <p className="text-2xl font-mono text-green-400">Looking for an Internship</p>
            <p className="text-sm font-mono text-white mt-2 leading-relaxed text-center">
              Open to opportunities across the United States, with flexibility to relocate or work remotely. Currently based in Miami.
            </p>
            <div className="mt-4 flex justify-center">
            <a href="#contact" className="w-full">
              <Button name="Contact Me" isBeam containerClass="w-full" />
              </a>
            </div>
          </div>
        </div>

        {/* Fourth Grid Item - Passion for Coding */}
{/* Fourth Grid Item - Passion for Coding */}
<div className="xl:col-span-2 xl:row-span-3 p-6 border border-green-500 rounded-lg bg-black mt-6">
  <div className="relative w-full h-[200px] overflow-hidden rounded-lg">
    <img
      src="/assets/grid3.png"
      alt="grid-3"
      className="w-full h-full object-cover opacity-80 mix-blend-screen"
    />
  </div>
  <div className="mt-6">
    <p className="text-2xl font-mono text-green-400">My Passion for Coding</p>
    <p className="text-sm font-mono text-white mt-2 leading-relaxed">
      I love creating, problem-solving, and bringing ideas to life through code.
    </p>
  </div>
</div>



        {/* Fifth Grid Item - Contact Me */}
        <div className="col-span-1 xl:row-span-3 p-8 border border-green-500 rounded-lg bg-black flex flex-col justify-between">
          <div className="flex justify-center items-center mb-4 mt-6">
            <img
              src="/assets/ContactMe (1).png"
              alt="grid-4"
              className="w-[80%] h-[200px] object-cover rounded-lg"
            />
          </div>
          <div className="text-center mt-4">
            <p className="text-lg font-mono text-green-400">Contact Me</p>
            <div
              className="flex items-center justify-center space-x-2 cursor-pointer mt-4"
              onClick={handleCopy}
            >
              <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy icon" />
              <p className="text-sm font-mono text-white">Georgeulloa.fl@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
