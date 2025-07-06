import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orbs */}
        <div className="absolute w-48 h-48 bg-gradient-to-r from-gradient-primary/15 to-gradient-secondary/15 rounded-full blur-3xl animate-float-slow" style={{ top: '5%', right: '10%', animationDelay: '0s' }}></div>
        <div className="absolute w-36 h-36 bg-gradient-to-r from-gradient-secondary/10 to-gradient-primary/10 rounded-full blur-2xl animate-float-reverse" style={{ top: '60%', left: '5%', animationDelay: '2s' }}></div>
        
        {/* ... (other particle divs remain the same) ... */}

        {/* Geometric shapes */}
        <div className="absolute w-12 h-12 border-2 border-gradient-primary/30 rotate-45 animate-spin-slow" style={{ top: '10%', left: '15%' }}></div>
        <div className="absolute w-8 h-8 border border-gradient-secondary/40 rounded-full animate-pulse" style={{ top: '85%', right: '25%' }}></div>
        <div className="absolute w-10 h-10 border-2 border-gradient-primary/20 rotate-12 animate-float-medium" style={{ top: '45%', left: '3%' }}></div>
        <div className="absolute w-6 h-6 border border-gradient-secondary/50 animate-spin-reverse" style={{ top: '30%', right: '12%' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6 scroll-reveal">About Me</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed scroll-reveal-delay">
              I'm a passionate front-end developer with 4+ years of experience creating 
              innovative web solutions that blend creativity with functionality.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image/Avatar - UPDATED SECTION */}
            <div className="flex justify-center items-center scroll-reveal-left">
              {/* The rotating gradient border container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 p-1 rounded-full bg-gradient-to-r from-gradient-primary to-gradient-secondary animate-spin-slow">
                {/* The inner container that holds the image, creating the border effect */}
                <div className="w-full h-full bg-black rounded-full p-1">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Alex Rivera"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="scroll-reveal-right">
              <h3 className="text-2xl font-bold text-gradient-primary-reverse mb-6">
                Turning Ideas Into Digital Reality
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With a background in Computer Science and a passion for design, I specialize in 
                creating responsive, accessible, and performant web applications. I love working 
                with modern frameworks and staying up-to-date with the latest industry trends.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or hiking in the mountains with my camera.
              </p>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gray-900 rounded-xl border border-gray-800 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 scroll-reveal-scale" style={{ animationDelay: '0.2s' }}>
                  <Code className="w-8 h-8 text-gradient-primary mx-auto mb-3 animate-pulse" />
                  <h4 className="font-semibold text-white mb-2">Clean Code</h4>
                  <p className="text-sm text-gray-400">Writing maintainable, scalable solutions</p>
                </div>
                <div className="text-center p-6 bg-gray-900 rounded-xl border border-gray-800 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 scroll-reveal-scale" style={{ animationDelay: '0.4s' }}>
                  <Palette className="w-8 h-8 text-gradient-primary mx-auto mb-3 animate-pulse" />
                  <h4 className="font-semibold text-white mb-2">UI/UX Focus</h4>
                  <p className="text-sm text-gray-400">Designing beautiful user experiences</p>
                </div>
                <div className="text-center p-6 bg-gray-900 rounded-xl border border-gray-800 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 scroll-reveal-scale" style={{ animationDelay: '0.6s' }}>
                  <Zap className="w-8 h-8 text-gradient-primary mx-auto mb-3 animate-pulse" />
                  <h4 className="font-semibold text-white mb-2">Performance</h4>
                  <p className="text-sm text-gray-400">Optimizing for speed and efficiency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
