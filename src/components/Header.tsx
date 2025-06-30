import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      {/* Subtle particle effects in header */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-1 h-1 bg-gradient-primary/60 rounded-full animate-twinkle" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
        <div className="absolute w-1 h-1 bg-gradient-secondary/60 rounded-full animate-twinkle" style={{ top: '60%', right: '15%', animationDelay: '1s' }}></div>
        <div className="absolute w-1 h-1 bg-gradient-primary/60 rounded-full animate-twinkle" style={{ top: '40%', right: '25%', animationDelay: '2s' }}></div>
      </div>
      
      <nav className="container mx-auto px-6 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient-primary animate-pulse">CK</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-gradient-primary transition-colors duration-200 font-medium transform hover:scale-110 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-gradient-primary transition-colors transform hover:scale-110"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-3 pt-4">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-gradient-primary transition-colors duration-200 font-medium text-left transform hover:scale-105 animate-slide-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;