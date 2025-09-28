import { Code2, Database, Palette, Globe, Server, Smartphone } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Skills = () => {
  const { isDark } = useTheme();

  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Building modern, responsive user interfaces',
      skills: [
        { name: 'React', description: 'Component-based UI library' },
        { name: 'Next.js', description: 'Full-stack React framework' },
        { name: 'TypeScript', description: 'Type-safe JavaScript' },
        { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
      ]
    },
    {
      icon: Server,
      title: 'Backend Development', 
      description: 'Creating robust server-side solutions',
      skills: [
        { name: 'Node.js', description: 'JavaScript runtime environment' },
        { name: 'Express.js', description: 'Web application framework' },
        { name: 'REST APIs', description: 'RESTful web services' },
        { name: 'GraphQL', description: 'Query language for APIs' },
      ]
    },
    {
      icon: Database,
      title: 'Database & Cloud',
      description: 'Data management and cloud services',
      skills: [
        { name: 'MongoDB', description: 'NoSQL document database' },
        { name: 'PostgreSQL', description: 'Relational database' },
        { name: 'Firebase', description: 'Backend-as-a-Service' },
        { name: 'AWS', description: 'Cloud computing platform' },
      ]
    },
    {
      icon: Palette,
      title: 'Design & UX',
      description: 'Creating beautiful user experiences',
      skills: [
        { name: 'Figma', description: 'Design and prototyping' },
        { name: 'UI/UX Design', description: 'User interface design' },
        { name: 'Responsive Design', description: 'Multi-device compatibility' },
        { name: 'Accessibility', description: 'Inclusive design principles' },
      ]
    },
    {
      icon: Globe,
      title: 'Tools & Workflow',
      description: 'Development tools and methodologies',
      skills: [
        { name: 'Git & GitHub', description: 'Version control system' },
        { name: 'Docker', description: 'Containerization platform' },
        { name: 'Jest', description: 'Testing framework' },
        { name: 'Webpack', description: 'Module bundler' },
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile & More',
      description: 'Cross-platform development',
      skills: [
        { name: 'React Native', description: 'Mobile app development' },
        { name: 'PWA', description: 'Progressive web apps' },
        { name: 'Three.js', description: '3D graphics library' },
        { name: 'WebSockets', description: 'Real-time communication' },
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className={`py-20 lg:py-32 ${
        isDark ? 'bg-slate-900' : 'bg-stone-50'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Skills & Technologies
          </h2>
          <div className={`w-24 h-1 mx-auto mb-6 ${
            isDark ? 'bg-emerald-400' : 'bg-emerald-600'
          }`}></div>
          <p className={`max-w-2xl mx-auto text-lg ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Technologies and tools I use to bring ideas to life, 
            from concept to deployment.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                isDark 
                  ? 'bg-slate-800/50 border border-slate-700 hover:border-slate-600' 
                  : 'bg-white/80 border border-stone-200 hover:border-stone-300 shadow-lg hover:shadow-xl'
              }`}
            >
              <div className={`inline-flex p-4 rounded-xl mb-6 transition-all duration-300 ${
                isDark 
                  ? 'bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20' 
                  : 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200'
              }`}>
                <category.icon size={32} />
              </div>
              
              <h3 className={`text-xl font-bold mb-3 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {category.title}
              </h3>
              
              <p className={`text-sm mb-6 ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {category.description}
              </p>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={`p-4 rounded-lg transition-all duration-300 ${
                      isDark 
                        ? 'bg-slate-700/30 hover:bg-slate-700/50' 
                        : 'bg-stone-50 hover:bg-stone-100'
                    }`}
                    style={{ 
                      animationDelay: `${categoryIndex * 100 + skillIndex * 50}ms` 
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className={`font-semibold mb-1 ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}>
                          {skill.name}
                        </h4>
                        <p className={`text-sm ${
                          isDark ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: 'Years Experience', value: '2+' },
            { label: 'Projects Built', value: '20+' },
            { label: 'Technologies', value: '15+' },
            { label: 'Happy Clients', value: '100%' }
          ].map((stat) => (
            <div
              key={stat.label}
              className={`text-center p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-slate-800/30 border border-slate-700' 
                  : 'bg-white/60 border border-stone-200'
              }`}
            >
              <div className={`text-3xl font-bold mb-2 ${
                isDark ? 'text-emerald-400' : 'text-emerald-600'
              }`}>
                {stat.value}
              </div>
              <div className={`text-sm ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;