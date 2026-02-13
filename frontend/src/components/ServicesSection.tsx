import React, { useEffect, useRef, useState } from 'react';
import { 
  Search, Share2, Zap, FileText, Code, ArrowRight, 
  Sparkles, TrendingUp, Target, Users, Rocket, 
  BarChart3, Globe2, Smartphone, Brain, Cpu,
  Shield, Eye, MousePointer, PenTool, Camera
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      id: 1,
      icon: <Search className="w-10 h-10" />,
      title: 'SEO & Organic Growth',
      description: 'Dominate search rankings with AI-powered SEO strategies that drive sustainable organic traffic and authority.',
      features: ['Keyword Intelligence', 'Technical SEO', 'Content Optimization', 'Local SEO'],
      gradient: 'from-blue-500 to-cyan-400',
      iconBg: 'from-blue-500/20 to-cyan-500/20',
      stats: '+285% Traffic',
      color: 'blue'
    },
    {
      id: 2,
      icon: <Share2 className="w-10 h-10" />,
      title: 'Social Media Marketing',
      description: 'Build communities that convert. Full-service social strategy from content to paid social campaigns.',
      features: ['Platform Strategy', 'Content Creation', 'Community Management', 'Paid Social'],
      gradient: 'from-purple-500 to-pink-500',
      iconBg: 'from-purple-500/20 to-pink-500/20',
      stats: '3.2x Engagement',
      color: 'purple'
    },
    {
      id: 3,
      icon: <Zap className="w-10 h-10" />,
      title: 'Paid Advertising',
      description: 'High-ROI campaigns across Google, Meta, LinkedIn & more. Smart bidding & creative optimization.',
      features: ['PPC Management', 'Display Ads', 'Retargeting', 'Shopping Ads'],
      gradient: 'from-yellow-500 to-orange-500',
      iconBg: 'from-yellow-500/20 to-orange-500/20',
      stats: '-52% CPC',
      color: 'yellow'
    },
    {
      id: 4,
      icon: <FileText className="w-10 h-10" />,
      title: 'Content Marketing',
      description: 'Strategic content that educates, engages, and converts. From blogs to whitepapers and video.',
      features: ['Content Strategy', 'Copywriting', 'Video Production', 'Interactive Content'],
      gradient: 'from-green-500 to-emerald-500',
      iconBg: 'from-green-500/20 to-emerald-500/20',
      stats: '189% ROI',
      color: 'green'
    },
    {
      id: 5,
      icon: <Code className="w-10 h-10" />,
      title: 'Web Development',
      description: 'Lightning-fast, conversion-optimized websites that deliver exceptional user experiences.',
      features: ['Custom Development', 'UX/UI Design', 'Performance Optimization', 'CMS Integration'],
      gradient: 'from-blue-600 to-purple-600',
      iconBg: 'from-blue-500/20 to-purple-500/20',
      stats: '2.4s Load Time',
      color: 'indigo'
    },
    {
      id: 6,
      icon: <Brain className="w-10 h-10" />,
      title: 'AI Marketing Solutions',
      description: 'Leverage cutting-edge AI for predictive analytics, personalization, and marketing automation.',
      features: ['Predictive Analytics', 'Personalization', 'Chatbots', 'Automation'],
      gradient: 'from-pink-500 to-rose-500',
      iconBg: 'from-pink-500/20 to-rose-500/20',
      stats: '3.5x Efficiency',
      color: 'pink'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-float-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-28 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden"
    >
      {/* Animated background orbs - matching hero */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      
      {/* Animated grid overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      ></div>

      {/* Animated gradient lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-grid-flow"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-grid-flow-reverse"></div>
      <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent animate-grid-flow-vertical"></div>
      <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent animate-grid-flow-vertical-reverse"></div>

      {/* Floating decorative elements */}
      <div className="absolute top-40 right-[10%] w-20 h-20 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 rotate-12 animate-float-rotate">
        <Rocket className="w-8 h-8 text-white/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="absolute bottom-40 left-[5%] w-24 h-24 bg-white/5 backdrop-blur-md rounded-full border border-white/10 animate-float-bounce">
        <Target className="w-10 h-10 text-white/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="absolute top-1/3 right-[15%] w-16 h-16 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 animate-float-spin">
        <Cpu className="w-7 h-7 text-white/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Hero theme */}
        <div className="text-center mb-20 animate-fade-in-up">
          {/* Animated badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-float-gentle">
            <Sparkles size={18} className="mr-2 text-yellow-300" />
            <span className="text-sm font-medium tracking-wide bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent">
              Full-Service Digital Agency
            </span>
          </div>

          {/* Main heading with gradient */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="inline-block bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent animate-slide-up">
              Services That
            </span>
            <br />
            <span className="inline-block relative mt-2">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-slide-up animation-delay-200">
                Drive Results
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transform scale-x-0 animate-expand-width animation-delay-1000"></div>
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-400">
            We combine 
            <span className="relative mx-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
              <span className="relative z-10 font-semibold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                AI-powered technology
              </span>
            </span>
            with human creativity to deliver measurable growth across every channel.
          </p>
        </div>

        {/* Quick Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 animate-fade-in animation-delay-600">
          {[
            { label: 'Projects Delivered', value: '850+', icon: <Rocket className="w-5 h-5" />, gradient: 'from-blue-400 to-purple-400' },
            { label: 'Active Clients', value: '156', icon: <Users className="w-5 h-5" />, gradient: 'from-purple-400 to-pink-400' },
            { label: 'Avg. ROI', value: '387%', icon: <TrendingUp className="w-5 h-5" />, gradient: 'from-blue-400 to-cyan-400' },
            { label: 'Team Experts', value: '42+', icon: <Brain className="w-5 h-5" />, gradient: 'from-purple-400 to-blue-400' }
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${800 + index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center gap-3">
                <div className={`inline-flex p-2 bg-gradient-to-r ${stat.gradient} rounded-lg text-white`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-400">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card group relative animate-scale-in"
              style={{ animationDelay: `${1000 + index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              {/* Main card */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 h-full">
                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.iconBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative p-8 flex flex-col h-full">
                  {/* Icon with animated gradient */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                    <div className={`relative w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      {service.icon}
                    </div>
                    
                    {/* Floating stat badge */}
                    <div className="absolute -top-2 -right-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-float-gentle">
                      {service.stats}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs text-slate-300 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300"
                          style={{ animationDelay: `${i * 50}ms` }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="group/btn relative inline-flex items-center gap-2 text-white font-semibold overflow-hidden w-fit">
                    <span className="relative z-10 flex items-center gap-2">
                      Learn More
                      <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </span>
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left`}></span>
                  </button>

                  {/* Decorative corner accent */}
                  <div className={`absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 rounded-tl-3xl transition-opacity duration-500`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="relative mt-20 group animate-fade-in animation-delay-2000">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Ready to scale your business?
                </h4>
                <p className="text-slate-300 text-lg">
                  Get a customized strategy session with our experts.
                </p>
              </div>
              <button className="group/btn relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Service Guarantee */}
        <div className="mt-16 text-center animate-fade-in animation-delay-2200">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="text-slate-300">
              100% Satisfaction Guarantee · 
              <span className="text-white font-semibold ml-1">14-day risk-free trial</span>
            </span>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
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

        @keyframes grid-flow-vertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-grid-flow-vertical {
          animation: grid-flow-vertical 8s linear infinite;
        }
        .animate-grid-flow-vertical-reverse {
          animation: grid-flow-vertical 8s linear infinite reverse;
        }

        @keyframes slide-right {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-right {
          animation: slide-right 0.6s ease-out forwards;
        }

        @keyframes slide-left {
          0% { opacity: 0; transform: translateX(30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-left {
          animation: slide-left 0.6s ease-out forwards;
        }

        @keyframes slide-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }

        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        @keyframes scale-in {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
        }

        @keyframes expand-width {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .animate-expand-width {
          animation: expand-width 0.8s ease-out forwards;
        }

        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-float-gentle {
          animation: float-gentle 3s ease-in-out infinite;
        }

        @keyframes float-rotate {
          0%, 100% { transform: rotate(12deg) translateY(0px); }
          50% { transform: rotate(20deg) translateY(-20px); }
        }
        .animate-float-rotate {
          animation: float-rotate 6s ease-in-out infinite;
        }

        @keyframes float-bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        .animate-float-bounce {
          animation: float-bounce 5s ease-in-out infinite;
        }

        @keyframes float-spin {
          0% { transform: rotate(0deg) translateY(0px); }
          50% { transform: rotate(180deg) translateY(-15px); }
          100% { transform: rotate(360deg) translateY(0px); }
        }
        .animate-float-spin {
          animation: float-spin 10s linear infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        @keyframes sparkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }

        @keyframes float-in {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-float-in {
          animation: float-in 0.8s ease-out forwards;
        }

        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1200 { animation-delay: 1.2s; }
        .animation-delay-1400 { animation-delay: 1.4s; }
        .animation-delay-1600 { animation-delay: 1.6s; }
        .animation-delay-1800 { animation-delay: 1.8s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-2200 { animation-delay: 2.2s; }
        .animation-delay-2400 { animation-delay: 2.4s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-3000 { animation-delay: 3s; }
        .animation-delay-4000 { animation-delay: 4s; }

        .opacity-0 {
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;