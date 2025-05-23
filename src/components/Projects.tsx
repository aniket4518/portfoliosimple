import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
  category: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'FarmConnect',
      description: 'A MERN stack web application connecting farmers directly to customers, enabling farmers to sell their produce and customers to buy fresh farm products directly from the source.',
      image: 'https://images.pexels.com/photos/2382665/pexels-photo-2382665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux'],
      demoLink: '#',
      codeLink: '#',
      category: 'web'
    },
    {
      id: 2,
      title: 'MazeGame',
      description: 'An immersive 3D maze game built with Three.js where players must find the exit. The maze dynamically rearranges itself each game, creating a unique experience every time.',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Three.js', 'JavaScript', 'HTML5', 'CSS3'],
      demoLink: '#',
      codeLink: '#',
      category: 'game'
    },
    {
      id: 3,
      title: 'Ecommerce',
      description: 'A fully-featured ecommerce platform with product listings, cart functionality, payment processing, and user authentication.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demoLink: '#',
      codeLink: '#',
      category: 'web'
    },
    {
      id: 4,
      title: 'HotelBook Assistance',
      description: 'An AI-powered hotel booking assistant that automates the booking process using web scraping and automation technologies.',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Python', 'AI', 'Web Scraping', 'Automation'],
      demoLink: '#',
      codeLink: '#',
      category: 'automation'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters = [
    { value: 'all', label: 'All' },
    { value: 'web', label: 'Web Apps' },
    { value: 'game', label: 'Games' },
    { value: 'automation', label: 'Automation' }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-950 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-gray-950 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work showcasing my skills in web development, game design, and automation.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/20'
                  : 'bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-gray-300'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-500/30 group"
            >
              <div className="h-60 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <div className="flex space-x-3">
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800/80 backdrop-blur-sm rounded-full text-gray-300 hover:text-white hover:bg-purple-600/80 transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a 
                      href={project.codeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800/80 backdrop-blur-sm rounded-full text-gray-300 hover:text-white hover:bg-purple-600/80 transition-colors duration-300"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;