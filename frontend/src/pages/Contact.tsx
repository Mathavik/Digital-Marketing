import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Zap, 
  TrendingUp, 
  Target,
  ArrowRight,
  Sparkles,
  Shield,
  Globe2,
  Rocket,
  BarChart3,
  Users,
  Star,
  CheckCircle,
  Award,
  Briefcase,
  ChevronRight,
  Quote
} from 'lucide-react';

const Contact: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

      {/* Hero Section */}
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

        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-8 animate-slide-in">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B4A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF6B4A]"></span>
              </span>
              <span className="text-sm font-medium bg-gradient-to-r from-[#FF6B4A] to-[#4A90E2] bg-clip-text text-transparent">
                Let's Grow Your Business
              </span>
              <Sparkles size={16} className="text-[#FF6B4A] animate-sparkle" />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Ready to <span className="bg-gradient-to-r from-[#FF6B4A] via-[#4A90E2] to-[#9B51E0] bg-clip-text text-transparent">Dominate</span> Your Market?
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
              Connect with our digital marketing experts and skyrocket your ROI
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              {[
                { number: '500+', label: 'Happy Clients', color: 'from-[#FF6B4A] to-[#FF8A6A]' },
                { number: '2.5M+', label: 'Leads Generated', color: 'from-[#4A90E2] to-[#6BA5E9]' },
                { number: '350%', label: 'Avg ROI Increase', color: 'from-[#9B51E0] to-[#B572F0]' },
                { number: '24/7', label: 'Support Available', color: 'from-[#FF6B4A] to-[#9B51E0]' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                      {stat.number}
                    </div>
                    <div className="text-slate-300 text-sm">{stat.label}</div>
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FF6B4A] to-[#4A90E2] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="url(#gradient)" fillOpacity="0.3"/>
            <path d="M0 120L60 105C120 90 240 60 360 50C480 40 600 50 720 60C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="#0A0F1E"/>
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="white" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="white" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-2 space-y-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B4A]/20 to-[#4A90E2]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B4A] to-[#FF8A6A] rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                      <p className="text-slate-300 text-sm mb-3">Get a response within 2 hours</p>
                      <a href="mailto:hello@digitalagency.com" className="text-[#FF6B4A] hover:text-[#4A90E2] font-semibold transition-colors">
                        hello@digitalagency.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/20 to-[#9B51E0]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#4A90E2] to-[#6BA5E9] rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                      <p className="text-slate-300 text-sm mb-3">Mon-Fri from 9AM to 6PM</p>
                      <a href="tel:+15551234567" className="text-[#4A90E2] hover:text-[#9B51E0] font-semibold transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#9B51E0]/20 to-[#FF6B4A]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#9B51E0] to-[#B572F0] rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                      <p className="text-slate-300 text-sm mb-3">Come say hello at our office</p>
                      <p className="text-slate-200">
                        123 Marketing Street<br />
                        Digital City, DC 10001
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#FF6B4A] to-[#4A90E2] rounded-2xl p-6 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6" />
                  <h3 className="text-lg font-bold">Lightning Fast Response</h3>
                </div>
                <p className="text-white/80 text-sm">
                  Our team typically responds to all inquiries within 2 hours during business hours. Need urgent help? Call us directly!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B4A]/20 to-[#4A90E2]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full mb-4">
                      <TrendingUp size={16} className="text-[#FF6B4A]" />
                      <span className="text-white text-sm font-semibold">Free Consultation</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                      Let's Start Your Success Story
                    </h2>
                    <p className="text-slate-300">
                      Fill out the form below and our marketing experts will create a custom strategy for your business.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-bold text-white mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl focus:border-[#FF6B4A] focus:ring-4 focus:ring-[#FF6B4A]/20 transition-all outline-none text-white placeholder-slate-400"
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="group">
                        <label className="block text-sm font-bold text-white mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl focus:border-[#4A90E2] focus:ring-4 focus:ring-[#4A90E2]/20 transition-all outline-none text-white placeholder-slate-400"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-bold text-white mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl focus:border-[#9B51E0] focus:ring-4 focus:ring-[#9B51E0]/20 transition-all outline-none text-white placeholder-slate-400"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>

                      <div className="group">
                        <label className="block text-sm font-bold text-white mb-2">
                          Service Interested In *
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl focus:border-[#FF6B4A] focus:ring-4 focus:ring-[#FF6B4A]/20 transition-all outline-none text-white"
                        >
                          <option value="" className="bg-[#1A1F35]">Select a service</option>
                          <option value="seo" className="bg-[#1A1F35]">SEO Optimization</option>
                          <option value="ppc" className="bg-[#1A1F35]">PPC Advertising</option>
                          <option value="social" className="bg-[#1A1F35]">Social Media Marketing</option>
                          <option value="content" className="bg-[#1A1F35]">Content Marketing</option>
                          <option value="email" className="bg-[#1A1F35]">Email Marketing</option>
                          <option value="branding" className="bg-[#1A1F35]">Brand Strategy</option>
                          <option value="analytics" className="bg-[#1A1F35]">Analytics & Tracking</option>
                          <option value="full" className="bg-[#1A1F35]">Full-Service Package</option>
                        </select>
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-bold text-white mb-2">
                        Tell Us About Your Project *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl focus:border-[#4A90E2] focus:ring-4 focus:ring-[#4A90E2]/20 transition-all outline-none text-white placeholder-slate-400 resize-none"
                        placeholder="Describe your goals, challenges, and what you're looking to achieve..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#FF6B4A] via-[#4A90E2] to-[#9B51E0] text-white font-bold py-5 px-8 rounded-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2] to-[#9B51E0] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <span className="relative z-10 flex items-center gap-3">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <span>Get Your Free Strategy Session</span>
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                    </button>

                    <p className="text-center text-sm text-slate-400">
                      🔒 Your information is 100% secure and will never be shared.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full mb-4">
              <MessageSquare size={16} className="text-[#FF6B4A]" />
              <span className="text-white text-sm font-semibold">Got Questions?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Everything you need to know about working with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Target className="w-6 h-6" />,
                gradient: 'from-[#FF6B4A] to-[#FF8A6A]',
                question: 'How quickly will I see results?',
                answer: 'SEO results typically appear within 3-6 months. PPC campaigns drive immediate traffic. We provide realistic timelines and monthly progress reports tailored to your goals.'
              },
              {
                icon: <Clock className="w-6 h-6" />,
                gradient: 'from-[#4A90E2] to-[#6BA5E9]',
                question: 'What is your minimum commitment?',
                answer: 'We offer flexible 3-month starter packages. Most clients achieve optimal results with 6-12 month partnerships as strategies mature and compound over time.'
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                gradient: 'from-[#9B51E0] to-[#B572F0]',
                question: 'Do you provide transparent reporting?',
                answer: 'Absolutely! Detailed monthly reports with key metrics, campaign performance, and ROI analysis. Plus 24/7 access to real-time dashboards showing your growth.'
              },
              {
                icon: <Zap className="w-6 h-6" />,
                gradient: 'from-[#FF6B4A] to-[#9B51E0]',
                question: 'Can you work with my budget?',
                answer: 'Yes! We create custom packages for all investment levels. Our focus is maximizing ROI whether you spend $1,000 or $100,000 per month.'
              },
              {
                icon: <Mail className="w-6 h-6" />,
                gradient: 'from-[#4A90E2] to-[#FF6B4A]',
                question: 'How do you stay updated with changes?',
                answer: 'Our team monitors algorithm updates daily and attends industry conferences. We adapt strategies in real-time to maintain peak performance across all platforms.'
              },
              {
                icon: <Phone className="w-6 h-6" />,
                gradient: 'from-[#9B51E0] to-[#4A90E2]',
                question: 'What if I\'m not satisfied?',
                answer: 'We offer a 30-day satisfaction guarantee. Not happy? We\'ll revise the strategy at no cost or provide a full refund. Your success is our priority.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${faq.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {faq.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#FF6B4A] transition-colors">
                    {faq.question}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "They transformed our digital presence completely. Our traffic increased by 300% in just 6 months.",
                author: "David Miller",
                role: "CEO, TechStart",
                rating: 5
              },
              {
                quote: "The team's data-driven approach and creative execution set them apart. Best ROI we've seen from any agency.",
                author: "Lisa Wong",
                role: "Marketing Director, GrowthCo",
                rating: 5
              },
              {
                quote: "They don't just deliver campaigns; they become true partners in your success. Highly recommended!",
                author: "James Wilson",
                role: "Founder, CreativeLab",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B4A]/20 to-[#4A90E2]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-white/20" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#FF6B4A] text-[#FF6B4A]" />
                    ))}
                  </div>
                  <p className="text-slate-200 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.author}</h4>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to 10X Your Marketing Results?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Join 500+ businesses already crushing their competition with our proven strategies
          </p>

          <a
            href="#"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#FF6B4A] to-[#4A90E2] text-white font-bold py-4 px-8 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Start Your Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2] to-[#9B51E0] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </a>
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
      `}</style>
    </main>
  );
};

export default Contact;