import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          AKJ
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-200 hover:text-white transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <ul className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={toggleMenu}
                  className="text-gray-300 hover:text-white transition-colors duration-300 block py-2 text-lg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-6 mt-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;