import { useState } from 'react';
import { ExternalLink, Github, Eye, X, Calendar, Users, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
  category: string;
  status: 'completed' | 'in-progress' | 'concept';
  year: string;
  features: string[];
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { isDark } = useTheme();

  const projects: Project[] = [
     {
      id: 1,
      title: 'ScaryDraw',
      description: 'Real-time collaborative whiteboard with 3D drawing capabilities and multi-user synchronization.',
      longDescription: 'CollabDraw 3D is an innovative collaborative drawing platform that combines traditional 2D whiteboard functionality with immersive 3D drawing capabilities. Built with real-time synchronization, multiple users can collaborate simultaneously in both 2D and 3D spaces, making it perfect for creative teams, educators, and remote collaboration.',
      image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'Three.js', 'Socket.io', 'Node.js', 'WebRTC', 'Canvas API', 'TypeScript'],
      demoLink: '#',
      codeLink: 'https://github.com/aniket4518/scarydraw',
      category: 'web',
      status: 'in-progress',
      year: '2025',
      features: ['Real-time collaboration', '3D drawing tools', 'Multi-user sync', 'Cross-platform support', 'Voice chat integration', 'Export to multiple formats']
    },
    {
      id: 2,
      title: 'WebMaker AI',
      description: 'An AI-powered web app generator that creates fully functional applications from natural language prompts.',
      longDescription: 'WebMaker AI is a revolutionary tool that leverages artificial intelligence to transform simple human prompts into complete, functional web applications. Using advanced language models and code generation techniques, it understands user requirements and automatically generates clean, production-ready code with modern frameworks and best practices.',
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['OpenAI API', 'React', 'Node.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Python'],
      demoLink: 'https://webmaker-nine.vercel.app/',
      codeLink: 'https://github.com/aniket4518/webmaker',
      category: 'ai',
      status: 'completed',
      year: '2025',
      features: ['Natural language processing', 'Automated code generation', 'Multiple frameworks support', 'Real-time preview', 'Export to GitHub', 'Best practices enforcement']
    },
    {
      id: 3,
      title: 'FarmConnect',
      description: 'A MERN stack platform connecting farmers directly with customers for fresh produce sales.',
      longDescription: 'FarmConnect is a comprehensive web application that bridges the gap between farmers and consumers. Built with the MERN stack, it features real-time inventory management, secure payment processing, and a sophisticated matching algorithm that connects buyers with nearby farmers.',
      image: 'https://images.pexels.com/photos/2382665/pexels-photo-2382665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux', 'Stripe API'],
      demoLink: 'https://farmconnect-2ifj-nth3dgr9l-aniket-jhas-projects-781a05b8.vercel.app/',
      codeLink: 'https://github.com/aniket4518/farmconnect',
      category: 'web',
      status: 'completed',
      year: '2025',
      features: ['Real-time inventory', 'Payment integration', 'Location-based matching', 'Mobile responsive']
    },
    {
      id: 4,
      title: 'MazeGame 3D',
      description: 'An immersive 3D maze game with dynamic level generation and stunning visuals.',
      longDescription: 'Experience an innovative 3D maze game built with Three.js that pushes the boundaries of web-based gaming. Features procedurally generated mazes, realistic physics, and stunning visual effects that create a unique experience every time you play.',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Three.js', 'WebGL', 'JavaScript', 'GSAP', 'Web Audio API'],
      demoLink: '#',
      codeLink: 'https://github.com/aniket4518/maze-run-game',
      category: 'game',
      status: 'completed',
      year: '2024',
      features: ['Procedural generation', '3D graphics', 'Physics engine', 'Audio integration']
    },
    {
      id: 5,
      title: 'Game-Based Portfolio',
      description: 'An interactive 3D portfolio experience with gamified navigation and immersive storytelling.',
      longDescription: 'A unique portfolio website that transforms the traditional portfolio experience into an interactive game. Built with Three.js and React Three Fiber, this project showcases skills and projects through an engaging 3D environment with custom animations, interactive elements, and smooth transitions that make exploring a portfolio feel like playing a game.',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'Three.js', 'React Three Fiber', 'GSAP', 'WebGL', 'TypeScript', 'Blender'],
      demoLink: 'https://akj-3d.vercel.app/',
      codeLink: 'https://github.com/aniket4518/portfolio',
      category: 'game',
      status: 'completed',
      year: '2025',
      features: ['3D interactive environment', 'Gamified navigation', 'Custom animations', 'Immersive storytelling', 'WebGL graphics', 'Responsive controls']
    },
     
    {
      id: 6,
      title: 'AI Hotel Assistant',
      description: 'Intelligent hotel booking system with AI-powered recommendations and automation.',
      longDescription: 'An advanced AI-powered hotel booking assistant that leverages machine learning to provide personalized recommendations, automate booking processes, and offer 24/7 customer support through natural language processing.',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Python', 'OpenAI API', 'FastAPI', 'React', 'PostgreSQL', 'Docker'],
      demoLink: '#',
      codeLink: 'https://github.com/aniket4518/hotelbookingtrail',
      category: 'ai',
      status: 'concept',
      year: '2025',
      features: ['AI recommendations', 'Natural language processing', 'Automated booking', 'Price prediction']
    },

  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Apps' },
    { value: 'game', label: 'Games' },
    { value: 'ai', label: 'AI & ML' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return isDark ? 'text-green-400 bg-green-400/10' : 'text-green-600 bg-green-100';
      case 'in-progress':
        return isDark ? 'text-yellow-400 bg-yellow-400/10' : 'text-yellow-600 bg-yellow-100';
      case 'concept':
        return isDark ? 'text-purple-400 bg-purple-400/10' : 'text-purple-600 bg-purple-100';
      default:
        return isDark ? 'text-gray-400 bg-gray-400/10' : 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section id="projects" className={`py-20 lg:py-32 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    } relative`}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Projects
          </h2>
          <div className={`w-24 h-1 mx-auto mb-6 ${
            isDark ? 'bg-blue-400' : 'bg-blue-600'
          }`}></div>
          <p className={`max-w-2xl mx-auto text-lg ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Showcasing my latest work in web development, game design, and AI integration.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? isDark 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
                    : 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : isDark 
                    ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className={`group rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
                isDark 
                  ? 'bg-gray-800/50 border border-gray-700 hover:border-gray-600 hover:shadow-xl hover:shadow-blue-500/10' 
                  : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-500/10'
              }`}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                  >
                    <Eye size={20} />
                  </button>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`text-xl font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  <span className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {project.year}
                  </span>
                </div>
                
                <p className={`mb-4 leading-relaxed ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span 
                      key={tech} 
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        isDark 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className={`max-w-4xl max-h-[90vh] w-full rounded-2xl overflow-hidden ${
              isDark ? 'bg-gray-900' : 'bg-white'
            } overflow-y-auto`}>
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors duration-300"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className={`text-3xl font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center space-x-4">
                      <span className={`flex items-center space-x-1 text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <Calendar size={16} />
                        <span>{selectedProject.year}</span>
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedProject.status)}`}>
                        {selectedProject.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={selectedProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full transition-all duration-300 ${
                        isDark 
                          ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                      }`}
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={selectedProject.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full transition-all duration-300 ${
                        isDark 
                          ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                      }`}
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>

                <p className={`text-lg leading-relaxed mb-8 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {selectedProject.longDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className={`text-lg font-semibold mb-4 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      <Zap size={20} className="inline mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature) => (
                        <li key={feature} className={`flex items-center space-x-2 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <div className={`w-2 h-2 rounded-full ${
                            isDark ? 'bg-blue-400' : 'bg-blue-600'
                          }`}></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className={`text-lg font-semibold mb-4 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      <Users size={20} className="inline mr-2" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className={`px-3 py-1 text-sm font-medium rounded-full ${
                            isDark 
                              ? 'bg-gray-800 text-gray-300' 
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;