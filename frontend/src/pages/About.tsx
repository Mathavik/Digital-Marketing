import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Lightbulb, 
  Users, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Globe2,
  Rocket,
  TrendingUp,
  Award,
  Heart,
  Star,
  Clock,
  Coffee,
  Trophy,
  BarChart3,
  Briefcase,
  Cpu,
  Cloud,
  Lock,
  Unlock,
  Play,
  Pause,
  ChevronRight,
  Quote,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Facebook
} from 'lucide-react';

const About: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [counters, setCounters] = useState({
    years: 0,
    clients: 0,
    projects: 0,
    revenue: 0
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; radius: number; speedX: number; speedY: number; color: string }[] = [];
    
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Counter animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('stats-section');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          // Animate counters
          const duration = 2000;
          const steps = 60;
          const interval = duration / steps;
          
          const targets = {
            years: 10,
            clients: 250,
            projects: 500,
            revenue: 50
          };

          let currentStep = 0;
          
          const timer = setInterval(() => {
            currentStep++;
            setCounters({
              years: Math.min(Math.floor((targets.years / steps) * currentStep), targets.years),
              clients: Math.min(Math.floor((targets.clients / steps) * currentStep), targets.clients),
              projects: Math.min(Math.floor((targets.projects / steps) * currentStep), targets.projects),
              revenue: Math.min(Math.floor((targets.revenue / steps) * currentStep), targets.revenue)
            });
            
            if (currentStep >= steps) {
              clearInterval(timer);
            }
          }, interval);

          return () => clearInterval(timer);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Data-Driven',
      description: 'Every decision is backed by comprehensive analytics and market research.',
      color: 'from-[#FF6B4A] to-[#FF8A6A]'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We stay ahead of trends to give our clients a competitive edge.',
      color: 'from-[#4A90E2] to-[#6BA5E9]'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships.',
      color: 'from-[#9B51E0] to-[#B572F0]'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Transparency',
      description: 'Clear reporting, honest communication, and ethical practices.',
      color: 'from-[#FF6B4A] to-[#9B51E0]'
    }
  ];

  const timeline = [
    {
      year: '2015',
      title: 'The Beginning',
      description: 'Founded with a vision to transform digital marketing through data and creativity.',
      icon: <Rocket className="w-6 h-6" />
    },
    {
      year: '2017',
      title: 'First Milestone',
      description: 'Reached 100+ happy clients and expanded our team to 15 experts.',
      icon: <Trophy className="w-6 h-6" />
    },
    {
      year: '2019',
      title: 'Global Expansion',
      description: 'Opened offices in 3 countries and started serving international clients.',
      icon: <Globe2 className="w-6 h-6" />
    },
    {
      year: '2021',
      title: 'AI Integration',
      description: 'Launched AI-powered analytics platform for real-time campaign optimization.',
      icon: <Cpu className="w-6 h-6" />
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Named Top Digital Marketing Agency by multiple industry publications.',
      icon: <Award className="w-6 h-6" />
    },
    {
      year: '2024',
      title: 'Today & Beyond',
      description: '500+ projects delivered, 45+ team members, and counting.',
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: '15+ years in digital marketing. Previously led campaigns for Fortune 500 companies.',
      image: 'https://images.unsplash.com/photo-1494790108777-286d9e5a5a0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Michael Chen',
      role: 'Head of Strategy',
      bio: 'Data-driven marketing strategist with expertise in growth hacking and analytics.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Creative Director',
      bio: 'Award-winning creative leader who has worked with top global brands.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    }
  ];

  const testimonials = [
    {
      quote: "They transformed our digital presence completely. Our traffic increased by 300% in just 6 months.",
      author: "David Miller",
      role: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5
    },
    {
      quote: "The team's data-driven approach and creative execution set them apart. Best ROI we've seen from any agency.",
      author: "Lisa Wong",
      role: "Marketing Director, GrowthCo",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5
    },
    {
      quote: "They don't just deliver campaigns; they become true partners in your success. Highly recommended!",
      author: "James Wilson",
      role: "Founder, CreativeLab",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5
    }
  ];

  return (
    <main className="relative w-full overflow-x-hidden bg-gradient-to-b from-[#0A0F1E] to-[#1A1F35]">
      {/* Animated particle canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ opacity: 0.4 }}
      />

      {/* Animated gradient orbs */}
      <div className="fixed top-20 left-10 w-[500px] h-[500px] bg-[#FF6B4A]/20 rounded-full blur-[120px] animate-pulse-orbit"></div>
      <div className="fixed bottom-20 right-10 w-[600px] h-[600px] bg-[#4A90E2]/20 rounded-full blur-[120px] animate-pulse-orbit animation-delay-2000"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#9B51E0]/10 rounded-full blur-[150px] animate-pulse-slow"></div>

      {/* Animated grid lines */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-grid-flow"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-grid-flow-reverse"></div>
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent animate-grid-flow-vertical"></div>
        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent animate-grid-flow-vertical-reverse"></div>
      </div>

      {/* Page Header with Parallax */}
      <section className="relative py-32 overflow-hidden">
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-40 right-[15%] w-20 h-20 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 rotate-12 animate-float-rotate">
            <Rocket className="w-8 h-8 text-white/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="absolute bottom-40 left-[10%] w-24 h-24 bg-white/5 backdrop-blur-md rounded-full border border-white/10 animate-float-bounce">
            <Shield className="w-10 h-10 text-white/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="absolute top-1/3 left-[15%] w-16 h-16 bg-gradient-to-br from-[#FF6B4A]/20 to-[#4A90E2]/20 backdrop-blur-md rounded-lg border border-white/10 animate-float-spin">
            <BarChart3 className="w-7 h-7 text-white/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Live indicator */}
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-8 animate-slide-in">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
                DigitalGrowth • Trusted by 250+ businesses
              </span>
              <Sparkles size={16} className="text-yellow-400 animate-sparkle" />
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block animate-text-reveal overflow-hidden">
                <span className="inline-block translate-y-full animate-slide-up-fade animation-delay-200">
                  DigitalGrowth
                </span>
              </span>
              <span className="block animate-text-reveal overflow-hidden mt-2">
                <span className="inline-block translate-y-full animate-slide-up-fade animation-delay-400 bg-gradient-to-r from-[#FF6B4A] via-[#4A90E2] to-[#9B51E0] bg-clip-text text-transparent">
                  Marketing Agency
                </span>
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-600">
              We're not just a digital marketing agency – we're your growth partners. 
              Combining data-driven strategies with creative excellence to transform 
              businesses and build lasting brand authority.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section with Counters */}
      <section id="stats-section" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Clock className="w-6 h-6" />, value: counters.years, label: 'Years in Business', suffix: '+' },
              { icon: <Users className="w-6 h-6" />, value: counters.clients, label: 'Happy Clients', suffix: '+' },
              { icon: <Briefcase className="w-6 h-6" />, value: counters.projects, label: 'Projects Delivered', suffix: '+' },
              { icon: <TrendingUp className="w-6 h-6" />, value: counters.revenue, label: 'Revenue Generated', prefix: '$', suffix: 'M+' }
            ].map((stat, index) => (
              <div
                key={index}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 0.1 + 0.8}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B4A]/20 to-[#4A90E2]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 text-center">
                  <div className="text-[#FF6B4A] mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FF6B4A] to-[#4A90E2] bg-clip-text text-transparent mb-1">
                    {stat.prefix}{stat.value}{stat.suffix}
                  </div>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FF6B4A] to-[#4A90E2] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Core
              <span className="bg-gradient-to-r from-[#FF6B4A] to-[#4A90E2] bg-clip-text text-transparent"> Values</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${value.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{value.description}</p>
                  
                  {/* Animated corner accent */}
                  <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden">
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-[#FF6B4A]/20 to-transparent transform rotate-45 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Timeline - FIXED ALIGNMENT */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our
              <span className="bg-gradient-to-r from-[#4A90E2] to-[#9B51E0] bg-clip-text text-transparent"> Journey</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              From startup to industry leaders
            </p>
          </div>

          {/* Timeline Container - FIXED */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#FF6B4A] via-[#4A90E2] to-[#9B51E0] hidden md:block"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot - visible on both mobile and desktop */}
                  <div className="absolute left-4 md:left-1/2 top-6 md:top-1/2 w-4 h-4 bg-gradient-to-r from-[#FF6B4A] to-[#4A90E2] rounded-full transform -translate-x-1/2 md:-translate-y-1/2 z-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B4A] to-[#4A90E2] rounded-full animate-ping opacity-75"></div>
                  </div>

                  {/* Content - Left or Right */}
                  <div className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  } pl-12 md:pl-0`}>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B4A]/20 to-[#4A90E2]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#FF6B4A] to-[#4A90E2] flex items-center justify-center">
                            {item.icon}
                          </div>
                          <div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-[#FF6B4A] to-[#4A90E2] bg-clip-text text-transparent">
                              {item.year}
                            </span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Empty div for spacing on alternating sides */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Detailed */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Brands
              <span className="bg-gradient-to-r from-[#9B51E0] to-[#FF6B4A] bg-clip-text text-transparent"> Trust Us</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              The difference that sets us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Data-Driven Strategies',
                description: 'Every decision is backed by comprehensive analytics and market research to ensure maximum impact.',
                icon: <BarChart3 className="w-6 h-6" />,
                color: 'from-[#FF6B4A] to-[#FF8A6A]'
              },
              {
                title: 'Transparent Reporting',
                description: 'Regular, detailed reports keep you informed about campaign performance and ROI metrics.',
                icon: <Shield className="w-6 h-6" />,
                color: 'from-[#4A90E2] to-[#6BA5E9]'
              },
              {
                title: 'Proven Growth Results',
                description: 'Our clients have seen an average of 300% ROI with our strategic digital marketing approach.',
                icon: <TrendingUp className="w-6 h-6" />,
                color: 'from-[#9B51E0] to-[#B572F0]'
              },
              {
                title: 'Dedicated Expert Team',
                description: 'Work with specialists in SEO, PPC, content marketing, and web development.',
                icon: <Users className="w-6 h-6" />,
                color: 'from-[#FF6B4A] to-[#9B51E0]'
              },
              {
                title: 'Custom Solutions',
                description: 'We tailor strategies to your unique business goals, industry, and target audience.',
                icon: <Target className="w-6 h-6" />,
                color: 'from-[#4A90E2] to-[#FF6B4A]'
              },
              {
                title: '24/7 Support',
                description: 'Our team is always available to answer questions and optimize your campaigns.',
                icon: <Clock className="w-6 h-6" />,
                color: 'from-[#9B51E0] to-[#4A90E2]'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 flex gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-300 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet the
              <span className="bg-gradient-to-r from-[#FF6B4A] to-[#4A90E2] bg-clip-text text-transparent"> Team</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              The experts behind your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B4A]/20 to-[#4A90E2]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] to-transparent"></div>
                    
                    {/* Social links */}
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      <a href={member.social.twitter} className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                        <Twitter size={16} className="text-white" />
                      </a>
                      <a href={member.social.linkedin} className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                        <Linkedin size={16} className="text-white" />
                      </a>
                      <a href={member.social.github} className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                        <Github size={16} className="text-white" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-[#FF6B4A] text-sm mb-3">{member.role}</p>
                    <p className="text-slate-300 text-sm">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Client
              <span className="bg-gradient-to-r from-[#4A90E2] to-[#9B51E0] bg-clip-text text-transparent"> Stories</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              What our partners say about working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B4A]/20 to-[#4A90E2]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                  {/* Quote icon */}
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-white/20" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-slate-200 mb-6 italic">"{testimonial.quote}"</p>
                  
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-white">{testimonial.author}</h4>
                      <p className="text-sm text-slate-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B4A]/20 to-[#4A90E2]/20">
          <div className="absolute inset-0 backdrop-blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="bg-gradient-to-r from-[#FF6B4A] to-[#4A90E2] bg-clip-text text-transparent"> Digital Presence?</span>
          </h2>
          
          <p className="text-xl text-slate-200 mb-10">
            Join 250+ businesses that have achieved remarkable growth with our data-driven strategies.
          </p>
          
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FF6B4A] to-[#4A90E2] rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B4A]/25"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Journey
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2] to-[#9B51E0] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Link>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes pulse-orbit {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.2); opacity: 0.3; }
        }
        .animate-pulse-orbit {
          animation: pulse-orbit 8s ease-in-out infinite;
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

        @keyframes slide-in {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.8s ease-out forwards;
        }

        @keyframes slide-up-fade {
          0% { opacity: 0; transform: translateY(100%); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up-fade {
          animation: slide-up-fade 0.8s ease-out forwards;
        }

        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }

        @keyframes sparkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animate-text-reveal {
          animation: none;
        }
      `}</style>
    </main>
  );
};

export default About;