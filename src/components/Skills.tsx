import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Vue.js', level: 82 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'SASS/SCSS', level: 85 }
      ]
    },
    {
      title: 'Backend & Tools',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 75 },
        { name: 'MongoDB', level: 78 },
        { name: 'PostgreSQL', level: 72 },
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 68 }
      ]
    },
    {
      title: 'Design & Others',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 80 },
        { name: 'Three.js', level: 70 },
        { name: 'WebGL', level: 65 },
        { name: 'AWS', level: 72 },
        { name: 'Testing', level: 78 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orbs */}
        <div className="absolute w-56 h-56 bg-gradient-to-r from-gradient-primary/20 to-gradient-secondary/20 rounded-full blur-3xl animate-float-reverse" style={{ top: '0%', left: '0%', animationDelay: '0s' }}></div>
        <div className="absolute w-40 h-40 bg-gradient-to-r from-gradient-secondary/15 to-gradient-primary/15 rounded-full blur-2xl animate-float-slow" style={{ top: '50%', right: '5%', animationDelay: '1.5s' }}></div>
        <div className="absolute w-32 h-32 bg-gradient-to-r from-gradient-primary/10 to-gradient-secondary/10 rounded-full blur-xl animate-float-medium" style={{ top: '80%', left: '10%', animationDelay: '2.5s' }}></div>
        
        {/* Medium particles */}
        <div className="absolute w-8 h-8 bg-gradient-primary rounded-full animate-float-fast shadow-lg shadow-gradient-primary/50" style={{ top: '15%', left: '8%', animationDelay: '0s' }}></div>
        <div className="absolute w-6 h-6 bg-gradient-secondary/80 rounded-full animate-float-medium shadow-lg shadow-gradient-secondary/40" style={{ top: '35%', right: '12%', animationDelay: '1s' }}></div>
        <div className="absolute w-5 h-5 bg-gradient-primary/70 rounded-full animate-float-slow shadow-lg shadow-gradient-primary/30" style={{ top: '65%', left: '15%', animationDelay: '2s' }}></div>
        <div className="absolute w-7 h-7 bg-gradient-secondary/90 rounded-full animate-float-reverse shadow-lg shadow-gradient-secondary/40" style={{ top: '25%', right: '8%', animationDelay: '0.8s' }}></div>
        <div className="absolute w-4 h-4 bg-gradient-primary/60 rounded-full animate-float-fast shadow-lg shadow-gradient-primary/30" style={{ top: '75%', right: '20%', animationDelay: '1.8s' }}></div>
        
        {/* Small sparkles */}
        <div className="absolute w-2 h-2 bg-white rounded-full animate-twinkle" style={{ top: '10%', left: '20%', animationDelay: '0s' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-gradient-primary rounded-full animate-twinkle" style={{ top: '40%', left: '5%', animationDelay: '1s' }}></div>
        <div className="absolute w-2 h-2 bg-gradient-secondary rounded-full animate-twinkle" style={{ top: '60%', right: '15%', animationDelay: '1.5s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-twinkle" style={{ top: '85%', left: '25%', animationDelay: '0.5s' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-gradient-primary rounded-full animate-twinkle" style={{ top: '20%', right: '25%', animationDelay: '2s' }}></div>
        <div className="absolute w-2 h-2 bg-gradient-secondary rounded-full animate-twinkle" style={{ top: '50%', left: '3%', animationDelay: '0.7s' }}></div>
        
        {/* Geometric shapes */}
        <div className="absolute w-16 h-16 border-2 border-gradient-primary/30 rotate-45 animate-spin-slow" style={{ top: '5%', right: '5%' }}></div>
        <div className="absolute w-12 h-12 border border-gradient-secondary/40 rounded-full animate-pulse" style={{ top: '70%', left: '5%' }}></div>
        <div className="absolute w-14 h-14 border-2 border-gradient-primary/20 rotate-12 animate-float-medium" style={{ top: '30%', left: '2%' }}></div>
        <div className="absolute w-10 h-10 border border-gradient-secondary/50 animate-spin-reverse" style={{ top: '55%', right: '3%' }}></div>
        <div className="absolute w-8 h-8 border-2 border-gradient-primary/30 rounded-lg rotate-45 animate-float-reverse" style={{ top: '90%', right: '10%' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6 scroll-reveal">Skills & Expertise</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed scroll-reveal-delay">
              A comprehensive toolkit for building modern web applications with cutting-edge technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 scroll-reveal-stagger"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="text-2xl font-bold text-gradient-primary-reverse mb-6 text-center">{category.title}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="scroll-reveal-right" style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-200">{skill.name}</span>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out animate-progress-bar"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;