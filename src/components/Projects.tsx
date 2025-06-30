import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Vue.js', 'Firebase', 'Vuetify', 'WebSocket'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'A modern weather application with interactive maps and beautiful data visualizations.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Chart.js', 'API Integration', 'CSS'],
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orbs */}
        <div className="absolute w-64 h-64 bg-gradient-to-r from-gradient-primary/15 to-gradient-secondary/15 rounded-full blur-3xl animate-float-slow" style={{ top: '10%', left: '5%', animationDelay: '0s' }}></div>
        <div className="absolute w-48 h-48 bg-gradient-to-r from-gradient-secondary/10 to-gradient-primary/10 rounded-full blur-2xl animate-float-reverse" style={{ top: '60%', right: '10%', animationDelay: '2s' }}></div>
        <div className="absolute w-40 h-40 bg-gradient-to-r from-gradient-primary/8 to-gradient-secondary/8 rounded-full blur-xl animate-float-medium" style={{ top: '30%', right: '5%', animationDelay: '1s' }}></div>
        
        {/* Medium particles */}
        <div className="absolute w-8 h-8 bg-gradient-primary rounded-full animate-float-fast shadow-lg shadow-gradient-primary/50" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
        <div className="absolute w-6 h-6 bg-gradient-secondary/80 rounded-full animate-float-medium shadow-lg shadow-gradient-secondary/40" style={{ top: '45%', left: '8%', animationDelay: '1s' }}></div>
        <div className="absolute w-7 h-7 bg-gradient-primary/70 rounded-full animate-float-slow shadow-lg shadow-gradient-primary/30" style={{ top: '75%', left: '12%', animationDelay: '2s' }}></div>
        <div className="absolute w-5 h-5 bg-gradient-secondary/90 rounded-full animate-float-reverse shadow-lg shadow-gradient-secondary/40" style={{ top: '25%', right: '15%', animationDelay: '0.8s' }}></div>
        <div className="absolute w-6 h-6 bg-gradient-primary/60 rounded-full animate-float-fast shadow-lg shadow-gradient-primary/30" style={{ top: '65%', right: '8%', animationDelay: '1.8s' }}></div>
        <div className="absolute w-4 h-4 bg-gradient-secondary/80 rounded-full animate-float-medium shadow-lg shadow-gradient-secondary/40" style={{ top: '85%', right: '20%', animationDelay: '0.5s' }}></div>
        
        {/* Small sparkles */}
        <div className="absolute w-2 h-2 bg-white rounded-full animate-twinkle" style={{ top: '15%', left: '15%', animationDelay: '0s' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-gradient-primary rounded-full animate-twinkle" style={{ top: '35%', left: '5%', animationDelay: '1s' }}></div>
        <div className="absolute w-2 h-2 bg-gradient-secondary rounded-full animate-twinkle" style={{ top: '55%', left: '3%', animationDelay: '1.5s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-twinkle" style={{ top: '80%', left: '18%', animationDelay: '0.5s' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-gradient-primary rounded-full animate-twinkle" style={{ top: '30%', right: '25%', animationDelay: '2s' }}></div>
        <div className="absolute w-2 h-2 bg-gradient-secondary rounded-full animate-twinkle" style={{ top: '50%', right: '30%', animationDelay: '0.7s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-twinkle" style={{ top: '70%', right: '12%', animationDelay: '1.2s' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-gradient-primary rounded-full animate-twinkle" style={{ top: '90%', right: '25%', animationDelay: '0.3s' }}></div>
        
        {/* Geometric shapes */}
        <div className="absolute w-20 h-20 border-2 border-gradient-primary/20 rotate-45 animate-spin-slow" style={{ top: '5%', right: '5%' }}></div>
        <div className="absolute w-16 h-16 border border-gradient-secondary/30 rounded-full animate-pulse" style={{ top: '40%', left: '2%' }}></div>
        <div className="absolute w-12 h-12 border-2 border-gradient-primary/25 rotate-12 animate-float-medium" style={{ top: '70%', left: '5%' }}></div>
        <div className="absolute w-14 h-14 border border-gradient-secondary/40 animate-spin-reverse" style={{ top: '60%', right: '3%' }}></div>
        <div className="absolute w-10 h-10 border-2 border-gradient-primary/35 rounded-lg rotate-45 animate-float-reverse" style={{ top: '85%', right: '15%' }}></div>
        <div className="absolute w-18 h-18 border border-gradient-secondary/20 rounded-full animate-pulse" style={{ top: '10%', left: '25%' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6 scroll-reveal">Featured Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed scroll-reveal-delay">
              A showcase of my recent work, demonstrating various technologies and design approaches.
            </p>
          </div>

          {/* Horizontal Line */}
          <div className="w-full h-px bg-gradient-primary mb-12 scroll-reveal-delay-2"></div>

          {/* Single Row of 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-900 border border-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105 hover:-translate-y-2 scroll-reveal-stagger"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-gradient-primary rounded-full animate-ping"></div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-800 text-gray-200 text-xs font-medium rounded-full border border-gray-700 hover:border-gradient-primary hover:text-gradient-primary transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        className="inline-flex items-center text-gray-300 hover:text-gradient-primary transition-colors text-sm font-medium transform hover:scale-110"
                      >
                        <Github size={16} className="mr-1" />
                        Code
                      </a>
                      <a
                        href={project.live}
                        className="inline-flex items-center text-gray-300 hover:text-gradient-primary transition-colors text-sm font-medium transform hover:scale-110"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Live
                      </a>
                    </div>
                    <ArrowRight 
                      size={18} 
                      className="text-gray-500 group-hover:text-gradient-primary group-hover:translate-x-1 transition-all" 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;