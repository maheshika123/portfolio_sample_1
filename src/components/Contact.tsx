import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent! Thank you for getting in touch.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orbs */}
        <div className="absolute w-80 h-80 bg-gradient-to-r from-gradient-primary/10 to-gradient-secondary/10 rounded-full blur-3xl animate-float-slow" style={{ top: '0%', left: '5%', animationDelay: '0s' }}></div>
        <div className="absolute w-64 h-64 bg-gradient-to-r from-gradient-secondary/8 to-gradient-primary/8 rounded-full blur-2xl animate-float-reverse" style={{ top: '40%', right: '0%', animationDelay: '2s' }}></div>
        <div className="absolute w-48 h-48 bg-gradient-to-r from-gradient-primary/6 to-gradient-secondary/6 rounded-full blur-xl animate-float-medium" style={{ top: '70%', left: '10%', animationDelay: '1s' }}></div>
        
        {/* Medium particles */}
        <div className="absolute w-12 h-12 bg-gradient-primary rounded-full animate-float-fast shadow-lg shadow-gradient-primary/50" style={{ top: '15%', left: '10%', animationDelay: '0s' }}></div>
        <div className="absolute w-10 h-10 bg-gradient-secondary/80 rounded-full animate-float-medium shadow-lg shadow-gradient-secondary/40" style={{ top: '35%', right: '15%', animationDelay: '1s' }}></div>
        <div className="absolute w-8 h-8 bg-gradient-primary/70 rounded-full animate-float-slow shadow-lg shadow-gradient-primary/30" style={{ top: '60%', left: '8%', animationDelay: '2s' }}></div>
        <div className="absolute w-9 h-9 bg-gradient-secondary/90 rounded-full animate-float-reverse shadow-lg shadow-gradient-secondary/40" style={{ top: '25%', right: '8%', animationDelay: '0.8s' }}></div>
        <div className="absolute w-7 h-7 bg-gradient-primary/60 rounded-full animate-float-fast shadow-lg shadow-gradient-primary/30" style={{ top: '80%', right: '20%', animationDelay: '1.8s' }}></div>
        <div className="absolute w-11 h-11 bg-gradient-secondary/70 rounded-full animate-float-medium shadow-lg shadow-gradient-secondary/40" style={{ top: '50%', left: '5%', animationDelay: '0.5s' }}></div>
        <div className="absolute w-6 h-6 bg-gradient-primary/80 rounded-full animate-float-reverse shadow-lg shadow-gradient-primary/40" style={{ top: '75%', right: '12%', animationDelay: '1.2s' }}></div>
        
        {/* Small sparkles */}
        <div className="absolute w-2 h-2 bg-white rounded-full animate-twinkle" style={{ top: '20%', left: '15%', animationDelay: '0s' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-gradient-primary rounded-full animate-twinkle" style={{ top: '40%', left: '3%', animationDelay: '1s' }}></div>
        <div className="absolute w-2 h-2 bg-gradient-secondary rounded-full animate-twinkle" style={{ top: '65%', right: '25%', animationDelay: '1.5s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-twinkle" style={{ top: '30%', right: '5%', animationDelay: '0.5s' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-gradient-primary rounded-full animate-twinkle" style={{ top: '55%', left: '20%', animationDelay: '2s' }}></div>
        <div className="absolute w-2 h-2 bg-gradient-secondary rounded-full animate-twinkle" style={{ top: '45%', right: '10%', animationDelay: '0.7s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-twinkle" style={{ top: '85%', left: '15%', animationDelay: '1.2s' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-gradient-primary rounded-full animate-twinkle" style={{ top: '10%', right: '20%', animationDelay: '0.3s' }}></div>
        <div className="absolute w-2 h-2 bg-gradient-secondary rounded-full animate-twinkle" style={{ top: '70%', left: '25%', animationDelay: '1.8s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-twinkle" style={{ top: '90%', right: '8%', animationDelay: '0.9s' }}></div>
        
        {/* Geometric shapes */}
        <div className="absolute w-28 h-28 border-2 border-gradient-primary/20 rotate-45 animate-spin-slow" style={{ top: '5%', right: '10%' }}></div>
        <div className="absolute w-20 h-20 border border-gradient-secondary/30 rounded-full animate-pulse" style={{ top: '70%', left: '2%' }}></div>
        <div className="absolute w-24 h-24 border-2 border-gradient-primary/15 rotate-12 animate-float-medium" style={{ top: '40%', left: '0%' }}></div>
        <div className="absolute w-16 h-16 border border-gradient-secondary/40 animate-spin-reverse" style={{ top: '85%', right: '5%' }}></div>
        <div className="absolute w-18 h-18 border-2 border-gradient-primary/25 rounded-lg rotate-45 animate-float-reverse" style={{ top: '60%', right: '30%' }}></div>
        <div className="absolute w-22 h-22 border border-gradient-secondary/20 rounded-full animate-pulse" style={{ top: '20%', left: '25%' }}></div>
        <div className="absolute w-14 h-14 border-2 border-gradient-primary/35 animate-spin-slow" style={{ top: '50%', right: '2%' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6 scroll-reveal">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed scroll-reveal-delay">
              Let's discuss your next project or opportunity. I'm always excited to work on new challenges.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="scroll-reveal-left">
              <h3 className="text-2xl font-bold text-gradient-primary-reverse mb-8">Let's Connect</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center transform hover:scale-105 transition-transform duration-200 scroll-reveal-stagger" style={{ animationDelay: '0.2s' }}>
                  <div className="w-12 h-12 bg-gradient-primary/20 border border-gradient-primary/30 rounded-xl flex items-center justify-center mr-4 animate-pulse">
                    <Mail className="w-6 h-6 text-gradient-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-300">alex.rivera@email.com</p>
                  </div>
                </div>
                
                <div className="flex items-center transform hover:scale-105 transition-transform duration-200 scroll-reveal-stagger" style={{ animationDelay: '0.4s' }}>
                  <div className="w-12 h-12 bg-gradient-primary/20 border border-gradient-primary/30 rounded-xl flex items-center justify-center mr-4 animate-pulse">
                    <Phone className="w-6 h-6 text-gradient-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center transform hover:scale-105 transition-transform duration-200 scroll-reveal-stagger" style={{ animationDelay: '0.6s' }}>
                  <div className="w-12 h-12 bg-gradient-primary/20 border border-gradient-primary/30 rounded-xl flex items-center justify-center mr-4 animate-pulse">
                    <MapPin className="w-6 h-6 text-gradient-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-gray-300">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="scroll-reveal-stagger" style={{ animationDelay: '0.8s' }}>
                <h4 className="font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: 'https://github.com', label: 'GitHub' },
                    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-gray-900 border border-gray-800 hover:bg-gradient-primary hover:border-gradient-primary rounded-xl flex items-center justify-center transition-all duration-200 group transform hover:scale-110 hover:-translate-y-1 scroll-reveal-scale"
                      style={{ animationDelay: `${1 + index * 0.1}s` }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6 text-gray-300 group-hover:text-white animate-pulse" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300 scroll-reveal-right">
              <h3 className="text-2xl font-bold text-gradient-primary-reverse mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="scroll-reveal-stagger" style={{ animationDelay: '0.2s' }}>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-200 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-gradient-primary focus:border-transparent transition-all transform focus:scale-105"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="scroll-reveal-stagger" style={{ animationDelay: '0.3s' }}>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-gradient-primary focus:border-transparent transition-all transform focus:scale-105"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="scroll-reveal-stagger" style={{ animationDelay: '0.4s' }}>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-200 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-gradient-primary focus:border-transparent transition-all transform focus:scale-105"
                    placeholder="Project discussion"
                  />
                </div>
                
                <div className="scroll-reveal-stagger" style={{ animationDelay: '0.5s' }}>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-200 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-gradient-primary focus:border-transparent transition-all resize-none transform focus:scale-105"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-primary hover:bg-gradient-primary-reverse text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 scroll-reveal-stagger"
                  style={{ animationDelay: '0.6s' }}
                >
                  Send Message
                  <Send className="ml-2 animate-bounce-x" size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;