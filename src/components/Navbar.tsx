import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon, Home, User, FolderOpen, Code, Sparkles } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useInteraction } from '../contexts/InteractionContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { setCursorVariant, setIsHovering } = useInteraction();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: 'Home', href: '#home', icon: Home },
    { label: 'About', href: '#about', icon: User },
    { label: 'Projects', href: '#projects', icon: FolderOpen },
    { label: 'Skills', href: '#skills', icon: Code },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/aniket4518', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:jhaaniket2005@gmail.com', label: 'Email' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? `glass backdrop-blur-xl ${
              isDark 
                ? 'bg-neutral-900/80 border-white/10' 
                : 'bg-white/80 border-black/10'
            } shadow-2xl py-3`
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          onMouseEnter={() => {
            setCursorVariant('hover');
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setCursorVariant('default');
            setIsHovering(false);
          }}
          className="group relative"
        >
          <div className={`text-2xl font-bold font-display tracking-tight transition-all duration-300 ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}>
            <span className="relative inline-block">
              Aniket<span className="gradient-text">.</span>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-1">
          <ul className="flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onMouseEnter={() => {
                    setCursorVariant('hover');
                    setIsHovering(true);
                  }}
                  onMouseLeave={() => {
                    setCursorVariant('default');
                    setIsHovering(false);
                  }}
                  className={`group relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    isDark 
                      ? 'text-neutral-300 hover:text-white' 
                      : 'text-neutral-700 hover:text-neutral-900'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                    isDark ? 'bg-white/5' : 'bg-black/5'
                  }`}></div>
                </a>
              </li>
            ))}
          </ul>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-3 ml-6">
            {/* Social Links */}
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => {
                    setCursorVariant('hover');
                    setIsHovering(true);
                  }}
                  onMouseLeave={() => {
                    setCursorVariant('default');
                    setIsHovering(false);
                  }}
                  className={`group relative p-2 rounded-xl transition-all duration-300 hover:scale-110 ${
                    isDark 
                      ? 'text-neutral-400 hover:text-white' 
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                  aria-label={social.label}
                >
                  <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                    isDark ? 'bg-white/10' : 'bg-black/10'
                  }`}></div>
                  <Icon size={18} className="relative z-10" />
                </a>
              );
            })}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              onMouseEnter={() => {
                setCursorVariant('hover');
                setIsHovering(true);
              }}
              onMouseLeave={() => {
                setCursorVariant('default');
                setIsHovering(false);
              }}
              className={`group relative p-2 rounded-xl transition-all duration-300 hover:scale-110 ${
                isDark 
                  ? 'text-neutral-300 hover:text-white' 
                  : 'text-neutral-700 hover:text-neutral-900'
              }`}
              aria-label="Toggle theme"
            >
              <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                isDark ? 'bg-white/10' : 'bg-black/10'
              }`}></div>
              <div className="relative z-10">
                {isDark ? 
                  <Sun size={18} className="group-hover:rotate-180 transition-transform duration-500" /> : 
                  <Moon size={18} className="group-hover:-rotate-12 transition-transform duration-500" />
                }
              </div>
            </button>

            {/* CTA Button */}
            <a
              href="#contact"
              onMouseEnter={() => {
                setCursorVariant('hover');
                setIsHovering(true);
              }}
              onMouseLeave={() => {
                setCursorVariant('default');
                setIsHovering(false);
              }}
              className="ml-4 px-6 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center space-x-3 lg:hidden">
          <button
            onClick={toggleTheme}
            onMouseEnter={() => {
              setCursorVariant('hover');
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              setCursorVariant('default');
              setIsHovering(false);
            }}
            className={`group relative p-2 rounded-xl transition-all duration-300 hover:scale-110 ${
              isDark 
                ? 'text-neutral-300 hover:text-white' 
                : 'text-neutral-700 hover:text-neutral-900'
            }`}
            aria-label="Toggle theme"
          >
            <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 ${
              isDark ? 'bg-white/10' : 'bg-black/10'
            }`}></div>
            <div className="relative z-10">
              {isDark ? 
                <Sun size={18} className="group-hover:rotate-180 transition-transform duration-500" /> : 
                <Moon size={18} className="group-hover:-rotate-12 transition-transform duration-500" />
              }
            </div>
          </button>
          
          <button
            onClick={toggleMenu}
            onMouseEnter={() => {
              setCursorVariant('hover');
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              setCursorVariant('default');
              setIsHovering(false);
            }}
            className={`group relative p-2 rounded-xl transition-all duration-300 hover:scale-110 ${
              isDark 
                ? 'text-neutral-300 hover:text-white' 
                : 'text-neutral-700 hover:text-neutral-900'
            }`}
          >
            <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 ${
              isDark ? 'bg-white/10' : 'bg-black/10'
            }`}></div>
            <div className="relative z-10">
              {isOpen ? 
                <X size={20} className="group-hover:rotate-90 transition-transform duration-300" /> : 
                <Menu size={20} className="group-hover:scale-110 transition-transform duration-300" />
              }
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`glass backdrop-blur-xl ${
          isDark ? 'bg-neutral-900/90' : 'bg-white/90'
        } border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}>
          <div className="container mx-auto px-6 py-6">
            <ul className="flex flex-col space-y-2 mb-6">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={toggleMenu}
                      className={`group flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:scale-105 ${
                        isDark 
                          ? 'text-neutral-300 hover:text-white hover:bg-white/5' 
                          : 'text-neutral-700 hover:text-neutral-900 hover:bg-black/5'
                      }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <Icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
            
            {/* Mobile Social Links */}
            <div className={`flex items-center justify-center space-x-4 mb-6 pt-4 border-t ${
              isDark ? 'border-white/10' : 'border-black/10'
            }`}>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                      isDark 
                        ? 'text-neutral-400 hover:text-white' 
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                    aria-label={social.label}
                  >
                    <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                      isDark ? 'bg-white/10' : 'bg-black/10'
                    }`}></div>
                    <Icon size={20} className="relative z-10" />
                  </a>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <a
              href="#contact"
              onClick={toggleMenu}
              className="block w-full text-center px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
