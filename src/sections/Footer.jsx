import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black py-4 flex flex-col items-center">
      <div className="flex gap-4 mt-2">
        <a
          href="https://github.com/georgeu029"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-white transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/george-ulloa-"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-white transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="mailto:georgeulloa.fl@gmail.com"
          className="text-green-400 hover:text-white transition-colors"
        >
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
