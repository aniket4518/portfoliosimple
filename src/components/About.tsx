import React from 'react';
import { BookOpen, FileCode, Server, Database, Globe, Layers } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-800">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate BTech student and full-stack developer with expertise in modern web technologies. My journey in tech has equipped me with strong problem-solving abilities and a keen eye for creating intuitive, efficient solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I specialize in building full-stack applications using the MERN stack, Next.js, TypeScript, and Three.js. My goal is to create innovative digital experiences that combine technical excellence with user-centered design.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and continuous learning to stay at the forefront of web development.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-200">Tech Expertise</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-900/30 backdrop-blur-sm p-5 rounded-xl border border-gray-800 transition-all duration-300 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-500/20 p-3 rounded-lg">
                    <FileCode className="text-indigo-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">Frontend</h4>
                    <p className="text-gray-400 text-sm">
                      React, Next.js, TypeScript, Three.js
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/30 backdrop-blur-sm p-5 rounded-xl border border-gray-800 transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/20 p-3 rounded-lg">
                    <Server className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">Backend</h4>
                    <p className="text-gray-400 text-sm">
                      Node.js, Express, REST APIs
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/30 backdrop-blur-sm p-5 rounded-xl border border-gray-800 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-lg">
                    <Database className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">Database</h4>
                    <p className="text-gray-400 text-sm">
                      MongoDB, Prisma, SQL
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/30 backdrop-blur-sm p-5 rounded-xl border border-gray-800 transition-all duration-300 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/10">
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-500/20 p-3 rounded-lg">
                    <Globe className="text-pink-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">Other Skills</h4>
                    <p className="text-gray-400 text-sm">
                      3D Modeling, UI/UX Design
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <a 
                href="#projects" 
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
              >
                <span className="mr-2">Explore my projects</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;