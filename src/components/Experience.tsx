import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Front-End Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Lead development of customer-facing applications using React and TypeScript. Mentored junior developers and implemented best practices for code quality and performance optimization.',
      achievements: [
        'Improved application performance by 40%',
        'Led a team of 4 developers',
        'Implemented automated testing suite'
      ]
    },
    {
      title: 'Front-End Developer',
      company: 'Digital Innovations Inc.',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: 'Developed responsive web applications and collaborated with UX/UI designers to create intuitive user interfaces. Worked extensively with React, Vue.js, and modern CSS frameworks.',
      achievements: [
        'Built 15+ production applications',
        'Reduced bundle size by 35%',
        'Contributed to design system development'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: '2019 - 2020',
      description: 'Gained hands-on experience in full-stack development, working with both frontend and backend technologies. Participated in agile development processes and code reviews.',
      achievements: [
        'Completed 50+ feature implementations',
        'Maintained 99% uptime for web applications',
        'Learned and applied modern development practices'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orbs */}
        <div className="absolute w-72 h-72 bg-gradient-to-r from-gradient-primary/12 to-gradient-secondary/12 rounded-full blur-3xl animate-float-reverse" style={{ top: '5%', right: '5%', animationDelay: '0s' }}></div>
        <div className="absolute w-56 h-56 bg-gradient-to-r from-gradient-secondary/8 to-gradient-primary/8 rounded-full blur-2xl animate-float-slow" style={{ top: '50%', left: '0%', animationDelay: '2s' }}></div>
        <div className="absolute w-44 h-44 bg-gradient-to-r from-gradient-primary/6 to-gradient-secondary/6 rounded-full blur-xl animate-float-medium" style={{ top: '80%', right: '15%', animationDelay: '1s' }}></div>
        
        {/* Medium particles */}
        <div className="absolute w-10 h-10 bg-gradient-primary rounded-full animate-float-fast shadow-lg shadow-gradient-primary/50" style={{ top: '20%', right: '10%', animationDelay: '0s' }}></div>
        <div className="absolute w-8 h-8 bg-gradient-secondary/80 rounded-full animate-float-medium shadow-lg shadow-gradient-secondary/40" style={{ top: '40%', left: '8%', animationDelay: '1s' }}></div>
        <div className="absolute w-6 h-6 bg-gradient-primary/70 rounded-full animate-float-slow shadow-lg shadow-gradient-primary/30" style={{ top: '70%', left: '5%', animationDelay: '2s' }}></div>
        <div className="absolute w-7 h-7 bg-gradient-secondary/90 rounded-full animate-float-reverse shadow-lg shadow-gradient-secondary/40" style={{ top: '60%', right: '20%', animationDelay: '0.8s' }}></div>
        <div className="absolute w-5 h-5 bg-gradient-primary/60 rounded-full animate-float-fast shadow-lg shadow-gradient-primary/30" style={{ top: '85%', right: '8%', animationDelay: '1.8s' }}></div>
        <div className="absolute w-9 h-9 bg-gradient-secondary/70 rounded-full animate-float-medium shadow-lg shadow-gradient-secondary/40" style={{ top: '15%', left: '12%', animationDelay: '0.5s' }}></div>
        
        {/* Small sparkles */}
        <div className="absolute w-2 h-2 bg-white rounded-full animate-twinkle" style={{ top: '25%', right: '15%', animationDelay: '0s' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-gradient-primary rounded-full animate-twinkle" style={{ top: '45%', right: '25%', animationDelay: '1s' }}></div>
        <div className="absolute w-2 h-2 bg-gradient-secondary rounded-full animate-twinkle" style={{ top: '65%', left: '15%', animationDelay: '1.5s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-twinkle" style={{ top: '35%', left: '3%', animationDelay: '0.5s' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-gradient-primary rounded-full animate-twinkle" style={{ top: '75%', left: '20%', animationDelay: '2s' }}></div>
        <div className="absolute w-2 h-2 bg-gradient-secondary rounded-full animate-twinkle" style={{ top: '55%', right: '5%', animationDelay: '0.7s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-twinkle" style={{ top: '90%', left: '10%', animationDelay: '1.2s' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-gradient-primary rounded-full animate-twinkle" style={{ top: '10%', right: '30%', animationDelay: '0.3s' }}></div>
        
        {/* Geometric shapes */}
        <div className="absolute w-24 h-24 border-2 border-gradient-primary/25 rotate-45 animate-spin-slow" style={{ top: '30%', right: '3%' }}></div>
        <div className="absolute w-18 h-18 border border-gradient-secondary/35 rounded-full animate-pulse" style={{ top: '10%', left: '5%' }}></div>
        <div className="absolute w-16 h-16 border-2 border-gradient-primary/20 rotate-12 animate-float-medium" style={{ top: '80%', left: '15%' }}></div>
        <div className="absolute w-20 h-20 border border-gradient-secondary/30 animate-spin-reverse" style={{ top: '50%', right: '12%' }}></div>
        <div className="absolute w-12 h-12 border-2 border-gradient-primary/40 rounded-lg rotate-45 animate-float-reverse" style={{ top: '70%', right: '25%' }}></div>
        <div className="absolute w-14 h-14 border border-gradient-secondary/25 rounded-full animate-pulse" style={{ top: '25%', left: '25%' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6 scroll-reveal">Work Experience</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed scroll-reveal-delay">
              My professional journey in frontend development and the impact I've made along the way.
            </p>
          </div>

          <div className="relative">
            {/* Animated Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block animate-pulse"></div>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div key={index} className="relative scroll-reveal-stagger" style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Animated Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-primary rounded-full border-4 border-black shadow-lg hidden md:block animate-pulse" style={{ animationDelay: `${index * 0.2 + 0.5}s` }}></div>
                  
                  <div className="md:ml-20 bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2 lg:mb-0 scroll-reveal-right">
                        {experience.title}
                      </h3>
                      <div className="flex items-center text-gray-400 text-sm scroll-reveal-left">
                        <Calendar size={16} className="mr-2 animate-pulse" />
                        {experience.period}
                      </div>
                    </div>
                    
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <h4 className="text-xl font-semibold text-gradient-primary mb-2 lg:mb-0 scroll-reveal-right" style={{ animationDelay: '0.2s' }}>
                        {experience.company}
                      </h4>
                      <div className="flex items-center text-gray-400 scroll-reveal-left" style={{ animationDelay: '0.2s' }}>
                        <MapPin size={16} className="mr-2 animate-pulse" />
                        {experience.location}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed scroll-reveal" style={{ animationDelay: '0.4s' }}>
                      {experience.description}
                    </p>
                    
                    <div>
                      <h5 className="font-semibold text-white mb-3 scroll-reveal" style={{ animationDelay: '0.6s' }}>Key Achievements:</h5>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start scroll-reveal-right" style={{ animationDelay: `${0.8 + achievementIndex * 0.1}s` }}>
                            <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse"></div>
                            <span className="text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;