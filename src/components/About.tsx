import { User, Target, Award, ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { isDark } = useTheme();

  const stats = [
    { number: '20+', label: 'Projects Completed' },
    { number: '2+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Learning Mode' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'I love tackling complex challenges and finding elegant, efficient solutions that make a real impact.'
    },
    {
      icon: User,
      title: 'User-Centric Design',
      description: 'Every project starts with understanding user needs and creating experiences that truly matter.'
    },
    {
      icon: Award,
      title: 'Quality Code',
      description: 'Clean, maintainable, and well-documented code is not just a practice—it\'s a commitment.'
    }
  ];

  return (
    <section id="about" className={`py-20 lg:py-32 ${isDark ? 'bg-gray-950' : 'bg-white'} relative`}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <div className={`w-24 h-1 mx-auto mb-6 ${
            isDark ? 'bg-blue-400' : 'bg-blue-600'
          }`}></div>
          <p className={`max-w-2xl mx-auto text-lg ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Passionate about creating digital solutions that bridge the gap between 
            technology and human needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl lg:text-3xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Full Stack Developer & Creative Thinker
              </h3>
              <div className="space-y-4">
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  I'm a passionate BTech student specializing in full-stack development 
                  with a keen eye for design and user experience. My journey in technology 
                  has been driven by curiosity and a desire to create meaningful digital solutions.
                </p>
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  With expertise in modern web technologies like Next, React, Node.js, and TypeScript, 
                  I focus on building applications that are not only functional but also 
                  intuitive and engaging for users.
                </p>
              </div>
            </div>

            <a
              href="#projects"
              className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 group ${
                isDark 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              <span>View My Projects</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'bg-gray-900/50 border border-gray-800' 
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <div className={`text-3xl lg:text-4xl font-bold mb-2 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {stat.number}
                </div>
                <div className={`text-sm font-medium ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h3 className={`text-2xl lg:text-3xl font-bold text-center mb-12 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            What Drives Me
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 group ${
                  isDark 
                    ? 'bg-gray-900/30 border border-gray-800 hover:border-gray-700' 
                    : 'bg-gray-50/50 border border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className={`inline-flex p-3 rounded-xl mb-6 transition-colors duration-300 ${
                  isDark 
                    ? 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20' 
                    : 'bg-blue-100 text-blue-600 group-hover:bg-blue-200'
                }`}>
                  <value.icon size={24} />
                </div>
                <h4 className={`text-xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {value.title}
                </h4>
                <p className={`leading-relaxed ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;