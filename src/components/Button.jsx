import React from 'react';

const Button = ({ name, isBeam = false, containerClass = '' }) => {
  return (
    <button
      className={`btn relative px-6 py-2 border-2 border-green-500 text-green-500 bg-black font-mono text-center uppercase tracking-wide hover:bg-green-500 hover:text-black transition duration-300 ${containerClass}`}
    >
      {isBeam && (
        <span className="relative flex h-3 w-3 mr-2">
          <span className="absolute inline-block h-3 w-3 rounded-full bg-green-500 opacity-75 animate-ping" />
          <span className="relative inline-block h-3 w-3 rounded-full bg-green-500" />
        </span>
      )}
      <span className="relative z-10">{name}</span>
    </button>
  );
};

export default Button;
