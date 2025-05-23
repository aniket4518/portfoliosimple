import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a 
              href="#home" 
              className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              AKJ
            </a>
          </div>
          
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
          
          <div>
            <p className="text-gray-500 text-sm">
              © {year} Aniket Kumar Jha. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;