import { useState, useEffect } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, ChevronDown, Calendar } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { isDark } = useTheme();
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const roles = [
    'Full Stack Developer',
    'UI/UX Designer', 
    'Problem Solver'
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section 
      id="home" 
      className={`relative min-h-screen flex items-center justify-center pt-20 ${
        isDark ? 'bg-gradient-to-br from-slate-900 to-slate-800' 
               : 'bg-gradient-to-br from-stone-50 to-slate-100'
      }`}
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 ${
          isDark ? 'bg-violet-600' : 'bg-violet-400'
        }`} />
        <div className={`absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 ${
          isDark ? 'bg-violet-600' : 'bg-violet-400'
        }`} />
      </div>

      {/* Main Content */}
      <div className={`container mx-auto px-6 lg:px-8 text-center z-10 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        
        {/* Status Badge */}
        <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border ${
          isDark ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
                 : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700'
        }`}>
          <div className="relative">
            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
            <div className="absolute inset-0 w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
          </div>
          <span className="text-sm font-medium">Available for work</span>
        </div>

        {/* Main Heading */}
        <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          <span className="block mb-2">Hello, I'm</span>
          <span className={`block bg-gradient-to-r ${
            isDark ? 'from-violet-400 to-purple-400' 
                   : 'from-violet-600 to-purple-600'
          } bg-clip-text text-transparent`}>
            Aniket Kumar Jha
          </span>
        </h1>

        {/* Dynamic Role */}
        <div className="h-16 flex items-center justify-center mb-4">
          <p className={`text-xl md:text-2xl font-light ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            <span className="relative overflow-hidden inline-block min-w-[280px]">
              {roles.map((role, index) => (
                <span
                  key={role}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    index === currentRole 
                      ? 'translate-y-0 opacity-100' 
                      : index < currentRole 
                        ? '-translate-y-full opacity-0' 
                        : 'translate-y-full opacity-0'
                  }`}
                >
                  {role}
                </span>
              ))}
            </span>
          </p>
        </div>

        {/* Description */}
        <p className={`max-w-2xl mx-auto text-lg leading-relaxed mb-12 ${
          isDark ? 'text-slate-400' : 'text-slate-600'
        }`}>
          I create beautiful, functional, and user-centered digital experiences. 
          Passionate about clean code, modern design, and solving complex problems 
          with simple, elegant solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a 
            href="#projects"
            className={`group px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center space-x-2 shadow-lg ${
              isDark ? 'bg-violet-600 hover:bg-violet-700 text-white shadow-violet-600/25' 
                     : 'bg-violet-600 hover:bg-violet-700 text-white shadow-violet-600/25'
            }`}
          >
            <span>View My Work</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="https://cal.com/aniketkumarjha" 
            target="_blank"
            rel="noopener noreferrer"
            className={`group px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center space-x-2 shadow-lg ${
              isDark ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/25' 
                     : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/25'
            }`}
          >
            <Calendar className="w-5 h-5" />
            <span>Book Now</span>
          </a>
          
          <a 
            href="/resume.pdf"
            download
            className={`px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center space-x-2 backdrop-blur-sm border ${
              isDark ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' 
                     : 'bg-white/60 border-white/80 text-slate-700 hover:bg-white/80'
            }`}
          >
            <Download className="w-5 h-5" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-16">
          {[
            { icon: Github, href: 'https://github.com', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:jhaaniket2005@gmail.com', label: 'Email' }
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`p-3 rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                isDark ? 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white' 
                       : 'bg-white/40 hover:bg-white/60 text-slate-600 hover:text-slate-900'
              }`}
              title={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center space-y-2">
          <span className={`text-sm ${
            isDark ? 'text-slate-500' : 'text-slate-500'
          }`}>
            Scroll to explore
          </span>
          <a 
            href="#about"
            className={`block transition-all duration-300 hover:scale-110 animate-bounce ${
              isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;