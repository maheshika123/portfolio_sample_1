import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-gray-800 text-white py-12 relative overflow-hidden">
      {/* Subtle footer particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-32 h-32 bg-gradient-to-r from-gradient-primary/5 to-gradient-secondary/5 rounded-full blur-xl animate-float-slow" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
        <div className="absolute w-24 h-24 bg-gradient-to-r from-gradient-secondary/3 to-gradient-primary/3 rounded-full blur-lg animate-float-reverse" style={{ top: '60%', right: '15%', animationDelay: '2s' }}></div>
        
        <div className="absolute w-2 h-2 bg-gradient-primary/40 rounded-full animate-twinkle" style={{ top: '30%', left: '20%', animationDelay: '0s' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-gradient-secondary/40 rounded-full animate-twinkle" style={{ top: '70%', left: '15%', animationDelay: '1s' }}></div>
        <div className="absolute w-2 h-2 bg-gradient-primary/40 rounded-full animate-twinkle" style={{ top: '40%', right: '20%', animationDelay: '1.5s' }}></div>
        <div className="absolute w-1 h-1 bg-white/60 rounded-full animate-twinkle" style={{ top: '80%', right: '25%', animationDelay: '0.5s' }}></div>
        
        <div className="absolute w-8 h-8 border border-gradient-primary/10 rotate-45 animate-spin-slow" style={{ top: '15%', right: '10%' }}></div>
        <div className="absolute w-6 h-6 border border-gradient-secondary/15 rounded-full animate-pulse" style={{ top: '85%', left: '25%' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2 animate-fade-in-up">
              <div className="text-3xl font-bold mb-4 text-gradient-primary animate-pulse">Chamindu Kavishka</div>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Creative Front-End Developer passionate about building exceptional 
                digital experiences with modern web technologies.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: 'https://github.com', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-900 border border-gray-800 hover:bg-gradient-primary hover:border-gradient-primary rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110 hover:-translate-y-1 animate-bounce-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="animate-pulse" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-lg font-semibold mb-4 text-gradient-primary-reverse">Quick Links</h3>
              <ul className="space-y-2">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, index) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-300 hover:text-gradient-primary transition-colors duration-200 transform hover:scale-105 animate-slide-right"
                      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-lg font-semibold mb-4 text-gradient-primary-reverse">Get In Touch</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="animate-slide-left" style={{ animationDelay: '0.5s' }}>chamindu@gmail.com</li>
                <li className="animate-slide-left" style={{ animationDelay: '0.6s' }}>+1 (555) 123-4567</li>
                <li className="animate-slide-left" style={{ animationDelay: '0.7s' }}>San Francisco, CA</li>
              </ul>
              <button
                onClick={scrollToTop}
                className="mt-4 text-gradient-primary hover:text-gradient-primary-reverse transition-colors duration-200 font-medium transform hover:scale-105 animate-bounce-in"
                style={{ animationDelay: '0.8s' }}
              >
                Back to Top ↑
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 mb-4 md:mb-0 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              © 2025 Chamindu Kavishka. All rights reserved.
            </p>
            <p className="text-gray-400 flex items-center animate-fade-in" style={{ animationDelay: '1s' }}>
              Made with <Heart size={16} className="mx-1 text-gradient-primary animate-pulse" /> and lots of coffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;