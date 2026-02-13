import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Sparkles, Zap, Home, Briefcase, Info, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { label: 'Home', path: '/', icon: <Home className="w-4 h-4" /> },
    { label: 'Services', path: '/services', icon: <Briefcase className="w-4 h-4" /> },
    { label: 'About', path: '/about', icon: <Info className="w-4 h-4" /> },
    { label: 'Contact', path: '/contact', icon: <Phone className="w-4 h-4" /> },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
          scrolled 
            ? 'bg-gradient-to-r from-slate-900 via-purple-900/90 to-slate-900 backdrop-blur-xl border-b border-white/10 py-3' 
            : 'bg-gradient-to-r from-slate-900 via-purple-900/50 to-slate-900 py-5'
        }`}
      >
        {/* Animated gradient orbs - matching hero */}
        <div className="absolute top-0 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        
        {/* Animated gradient line at bottom - matching hero grid lines */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 via-purple-400/50 to-transparent animate-grid-flow"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center">
            {/* Logo with hero gradient */}
            <Link 
              to="/" 
              className="relative group"
              onClick={() => setActiveLink('/')}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-md opacity-60 animate-pulse-slow"></div>
                  <div className="relative w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent">
                    DigitalGrowth
                  </span>
                  <span className="text-[10px] text-blue-100/60 -mt-1">Marketing Agency</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation - Hero theme */}
            <div className="hidden md:flex items-center gap-3">
              {/* Nav Links with glassmorphism - matching hero */}
              <div className="flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setActiveLink(item.path)}
                    className={`relative px-5 py-2.5 rounded-xl font-medium transition-all duration-300 group ${
                      activeLink === item.path
                        ? 'text-white'
                        : 'text-blue-100 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {item.icon}
                      {item.label}
                    </span>
                    {activeLink === item.path && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl"></div>
                    )}
                    <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                ))}
              </div>

              {/* Get Started Button - Hero gradient */}
              <div className="relative group ml-2">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                <button className="relative px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2">
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </div>
            </div>

            {/* Mobile menu button - Hero theme */}
            <div className="md:hidden">
              <button 
                onClick={toggleMenu} 
                className="relative w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {isOpen ? 
                  <X size={24} className="text-white relative z-10" /> : 
                  <Menu size={24} className="text-white relative z-10" />
                }
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu - Hero theme full screen overlay */}
          <div 
            className={`fixed inset-0 z-[200] bg-gradient-to-br from-slate-900 via-purple-900/95 to-slate-900 backdrop-blur-2xl transition-all duration-500 md:hidden ${
              isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
            }`}
            style={{ top: '80px' }}
          >
            <div className="absolute inset-0 overflow-hidden">
              {/* Animated background orbs - matching hero exactly */}
              <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-blob"></div>
              <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
              
              {/* Grid overlay - matching hero */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`,
                  backgroundSize: '60px 60px'
                }}
              ></div>

              {/* Animated grid lines - matching hero */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-grid-flow"></div>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-grid-flow-reverse"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Mobile Menu Header - Hero badge style */}
              <div className="mb-8 animate-fade-in-up">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                  <Sparkles size={16} className="mr-2 text-yellow-300" />
                  <span className="text-sm font-medium bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent">
                    Navigation Menu
                  </span>
                </div>
              </div>

              {/* Navigation Items - Hero themed cards */}
              <div className="space-y-3">
                {navItems.map((item, index) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => {
                      setActiveLink(item.path);
                      setIsOpen(false);
                    }}
                    className={`group relative flex items-center justify-between w-full px-6 py-4 rounded-2xl transition-all duration-500 animate-slide-right ${
                      activeLink === item.path
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30'
                        : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        activeLink === item.path
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                          : 'bg-white/10 group-hover:bg-white/20'
                      } transition-all duration-300`}>
                        <span className="text-white">{item.icon}</span>
                      </div>
                      <div>
                        <span className={`text-lg font-semibold ${
                          activeLink === item.path
                            ? 'bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent'
                            : 'text-white'
                        }`}>
                          {item.label}
                        </span>
                        <p className="text-sm text-blue-100/70">
                          {item.label === 'Home' && 'Return to homepage'}
                          {item.label === 'Services' && 'Explore our digital solutions'}
                          {item.label === 'About' && 'Learn about our agency'}
                          {item.label === 'Contact' && 'Get in touch with us'}
                        </p>
                      </div>
                    </div>
                    <ChevronRight size={20} className="text-blue-300/70 group-hover:translate-x-1 transition-transform" />
                    
                    {/* Active indicator - hero gradient */}
                    {activeLink === item.path && (
                      <div className="absolute left-0 w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                    )}
                  </Link>
                ))}
              </div>

              {/* Get Started Button - Mobile with hero gradient */}
              <div className="mt-8 animate-slide-up animation-delay-400">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <button className="relative w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3">
                    <span className="relative z-10 flex items-center gap-3">
                      Start Your Journey
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>
                </div>
                
                {/* Contact Info - Hero themed */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-blue-100/70">
                    Need assistance?{' '}
                    <button className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent font-medium hover:from-blue-100 hover:to-purple-100 transition-all duration-300">
                      24/7 Support
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>

      {/* Custom CSS for animations - matching hero exactly */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }

        @keyframes grid-flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-grid-flow {
          animation: grid-flow 8s linear infinite;
        }
        .animate-grid-flow-reverse {
          animation: grid-flow 8s linear infinite reverse;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        @keyframes slide-right {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-right {
          animation: slide-right 0.6s ease-out forwards;
        }

        @keyframes slide-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }

        .opacity-0 {
          opacity: 0;
        }
      `}</style>
    </>
  );
};

export default Navbar;