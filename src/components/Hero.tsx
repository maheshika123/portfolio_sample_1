import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Enhanced Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating orbs with gradient colors */}
        <div className="absolute w-32 h-32 bg-gradient-to-r from-gradient-primary/20 to-gradient-secondary/20 rounded-full blur-xl animate-float-slow" style={{ top: '10%', left: '5%', animationDelay: '0s' }}></div>
        <div className="absolute w-24 h-24 bg-gradient-to-r from-gradient-secondary/15 to-gradient-primary/15 rounded-full blur-lg animate-float-medium" style={{ top: '70%', right: '10%', animationDelay: '2s' }}></div>
        <div className="absolute w-40 h-40 bg-gradient-to-r from-gradient-primary/10 to-gradient-secondary/10 rounded-full blur-2xl animate-float-reverse" style={{ top: '40%', right: '5%', animationDelay: '1s' }}></div>
        
        {/* Medium particles with gradient colors */}
        <div className="absolute w-4 h-4 bg-gradient-primary rounded-full animate-float-fast shadow-lg shadow-gradient-primary/50" style={{ top: '20%', left: '15%', animationDelay: '0.5s' }}></div>
        <div className="absolute w-3 h-3 bg-gradient-secondary rounded-full animate-float-medium shadow-lg shadow-gradient-secondary/50" style={{ top: '60%', left: '20%', animationDelay: '1.5s' }}></div>
        <div className="absolute w-5 h-5 bg-gradient-primary/70 rounded-full animate-float-slow shadow-lg shadow-gradient-primary/30" style={{ top: '80%', left: '10%', animationDelay: '3s' }}></div>
        
        {/* Small sparkles */}
        <div className="absolute w-2 h-2 bg-white rounded-full animate-twinkle" style={{ top: '25%', left: '25%', animationDelay: '0s' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-gradient-primary rounded-full animate-twinkle" style={{ top: '45%', left: '12%', animationDelay: '1s' }}></div>
        <div className="absolute w-2 h-2 bg-gradient-secondary rounded-full animate-twinkle" style={{ top: '65%', left: '8%', animationDelay: '2s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-twinkle" style={{ top: '35%', left: '18%', animationDelay: '0.7s' }}></div>
        
        {/* Right side particles */}
        <div className="absolute w-6 h-6 bg-gradient-primary/60 rounded-full animate-float-medium shadow-lg shadow-gradient-primary/40" style={{ top: '30%', right: '15%', animationDelay: '1.2s' }}></div>
        <div className="absolute w-3 h-3 bg-gradient-secondary/80 rounded-full animate-float-fast shadow-lg shadow-gradient-secondary/40" style={{ top: '55%', right: '20%', animationDelay: '0.8s' }}></div>
        <div className="absolute w-4 h-4 bg-gradient-primary/60 rounded-full animate-float-slow shadow-lg shadow-gradient-primary/30" style={{ top: '75%', right: '12%', animationDelay: '2.2s' }}></div>
        
        {/* Geometric shapes with gradient borders */}
        <div className="absolute w-8 h-8 border-2 border-gradient-primary/40 rotate-45 animate-spin-slow" style={{ top: '15%', right: '25%' }}></div>
        <div className="absolute w-6 h-6 border border-gradient-secondary/40 rounded-full animate-pulse" style={{ top: '85%', left: '30%' }}></div>
        <div className="absolute w-10 h-10 border-2 border-gradient-primary/30 rotate-12 animate-float-reverse" style={{ top: '50%', left: '5%' }}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/50 to-black/90"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content Side */}
          <div className="order-2 lg:order-1 z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-primary mb-4 leading-tight scroll-reveal">
              Chamindu Kavishka
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gradient-primary-reverse mb-6 scroll-reveal-delay">
              Creative Front-End Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg scroll-reveal-delay-2">
              Crafting exceptional digital experiences with modern web technologies.
              Passionate about creating beautiful, functional, and user-centered applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 scroll-reveal-delay-3">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-primary text-white font-semibold rounded-xl hover:bg-gradient-primary-reverse transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              >
                View Projects
                <ArrowRight className="ml-2 animate-bounce-x" size={20} />
              </button>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-gradient-primary hover:border-gradient-secondary hover:text-gradient-primary transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              >
                <Download className="mr-2 animate-pulse" size={20} />
                Download CV
              </button>
            </div>
          </div>

          {/* Animation Side */}
          <div className="order-1 lg:order-2 h-[60vh] lg:h-[80vh] scroll-reveal-scale">
            <Suspense fallback={
              <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center animate-pulse">
                <div className="text-gray-400">Loading 3D Scene...</div>
              </div>
            }>
              <div className="w-full h-full rounded-2xl transform hover:scale-105 transition-transform duration-500">
                <Spline 
                  scene="https://prod.spline.design/L85N3ZL-yOrPC9YC/scene.splinecode"
                  className="w-full h-full rounded-2xl"
                />
              </div>
            </Suspense>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-gradient-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;