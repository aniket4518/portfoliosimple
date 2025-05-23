import React from 'react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const Skills: React.FC = () => {
  const frontendSkills: Skill[] = [
    { name: 'React', level: 90, color: 'from-blue-500 to-cyan-400' },
    { name: 'Next.js', level: 85, color: 'from-gray-700 to-gray-500' },
    { name: 'TypeScript', level: 80, color: 'from-blue-600 to-blue-400' },
    { name: 'HTML/CSS', level: 90, color: 'from-orange-500 to-red-400' },
    { name: 'Three.js', level: 75, color: 'from-purple-500 to-indigo-400' },
  ];

  const backendSkills: Skill[] = [
    { name: 'Node.js', level: 85, color: 'from-green-500 to-green-400' },
    { name: 'Express', level: 80, color: 'from-gray-600 to-gray-400' },
    { name: 'MongoDB', level: 85, color: 'from-green-600 to-green-500' },
    { name: 'Prisma', level: 75, color: 'from-blue-800 to-indigo-600' },
    { name: 'REST APIs', level: 90, color: 'from-indigo-600 to-blue-500' },
  ];

  const renderSkillBars = (skills: Skill[]) => {
    return skills.map((skill, index) => (
      <div key={index} className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="text-gray-300 font-medium">{skill.name}</span>
          <span className="text-gray-400 text-sm">{skill.level}%</span>
        </div>
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transform origin-left transition-transform duration-1000 ease-out`}
            style={{ 
              width: `${skill.level}%`,
              animation: `progressAnimation 1.5s ease-out forwards ${index * 0.2}s`
            }}
          ></div>
        </div>
      </div>
    ));
  };

  const technologies = [
    'JavaScript', 'React', 'TypeScript', 'Next.js', 'Node.js', 
    'Express', 'MongoDB', 'Prisma', 'Three.js', 'HTML', 'CSS',
    'Redux', 'Git', 'RESTful APIs', 'Tailwind CSS', 'Material UI'
  ];

  return (
    <section id="skills" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/10 to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-8 text-center text-gray-200">Frontend Development</h3>
            {renderSkillBars(frontendSkills)}
          </div>

          <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-8 text-center text-gray-200">Backend Development</h3>
            {renderSkillBars(backendSkills)}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-8 text-center text-gray-200">Technologies I Work With</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 text-gray-300 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;