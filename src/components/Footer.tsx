import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    { name: 'Email', href: 'mailto:jhaaniket2005@gmail.com', icon: Mail }
  ];

  return (
    <footer className={`relative ${
      isDark ? 'bg-gray-950 border-t border-gray-800' : 'bg-white border-t border-gray-200'
    }`}>
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`absolute -top-6 left-1/2 transform -translate-x-1/2 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
          isDark 
            ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25' 
            : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25'
        }`}
      >
        <ArrowUp size={20} />
      </button>

      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <a 
              href="#home" 
              className={`inline-flex items-center space-x-2 text-2xl font-bold mb-4 transition-colors duration-300 ${
                isDark ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'
              }`}
            >
              <span>Aniket Kumar Jha</span>
              <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`}>.</span>
            </a>
            <p className={`max-w-md text-base leading-relaxed mb-6 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Full Stack Developer passionate about creating innovative digital solutions. 
              Specializing in React, Node.js, and modern web technologies.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    isDark 
                      ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`transition-colors duration-300 hover:underline ${
                      isDark 
                        ? 'text-gray-400 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Get in Touch
            </h3>
            <div className="space-y-3">
              <p className={`${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Available for freelance opportunities
              </p>
              <a
                href="mailto:jhaaniket2005@gmail.com"
                className={`block transition-colors duration-300 hover:underline ${
                  isDark 
                    ? 'text-blue-400 hover:text-blue-300' 
                    : 'text-blue-600 hover:text-blue-700'
                }`}
              >
                jhaaniket2005@gmail.com
              </a>
              <p className={`${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Kolkata, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`mt-12 pt-8 border-t ${
          isDark ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className={`flex items-center space-x-2 text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <span>© {year} Aniket Kumar Jha. Built with</span>
              <Heart size={14} className={`${
                isDark ? 'text-red-400' : 'text-red-500'
              } animate-pulse`} />
              <span>using React & TypeScript</span>
            </div>
            
            <div className={`text-sm ${
              isDark ? 'text-gray-500' : 'text-gray-500'
            }`}>
              <span>Last updated: September 2024</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;