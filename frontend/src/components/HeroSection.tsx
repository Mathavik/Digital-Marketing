import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, BarChart3, Shield, Globe2, Rocket, TrendingUp, Target, Users } from 'lucide-react';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0A0F1E] via-[#1A1F35] to-[#0A0F1E] text-white overflow-hidden">
      {/* Animated particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.6 }}
      />

      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#FF6B4A]/20 rounded-full blur-[120px] animate-pulse-orbit"></div>
      <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-[#4A90E2]/20 rounded-full blur-[120px] animate-pulse-orbit animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#9B51E0]/10 rounded-full blur-[150px] animate-pulse-slow"></div>

      {/* Animated grid lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-grid-flow"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-grid-flow-reverse"></div>
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent animate-grid-flow-vertical"></div>
        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent animate-grid-flow-vertical-reverse"></div>
      </div>

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
        <div className="absolute bottom-1/4 right-[20%] w-28 h-28 bg-gradient-to-br from-[#9B51E0]/20 to-[#FF6B4A]/20 backdrop-blur-md rounded-full border border-white/10 animate-float-pulse">
          <Globe2 className="w-12 h-12 text-white/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div className="relative">
            {/* Live indicator */}
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-8 animate-slide-in">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
                LIVE • 127 clients active now
              </span>
              <Sparkles size={16} className="text-yellow-400 animate-sparkle" />
            </div>

            {/* Main heading with animated text reveal */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span className="block animate-text-reveal overflow-hidden">
                <span className="inline-block translate-y-full animate-slide-up-fade animation-delay-200">
                  Turn Clicks Into
                </span>
              </span>
              <span className="block animate-text-reveal overflow-hidden mt-2">
                <span className="inline-block translate-y-full animate-slide-up-fade animation-delay-400 bg-gradient-to-r from-[#FF6B4A] via-[#4A90E2] to-[#9B51E0] bg-clip-text text-transparent">
                  Revenue Engine
                </span>
              </span>
            </h1>

            {/* Animated description */}
            <p className="text-xl text-slate-300 mb-10 leading-relaxed animate-fade-in animation-delay-600">
              <span className="relative inline-block">
                Transform your digital presence with AI-powered marketing 
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#FF6B4A] to-[#4A90E2] scale-x-0 animate-expand-width animation-delay-1000"></span>
              </span>
              {' '}strategies that deliver measurable ROI and sustainable growth.
            </p>

            {/* CTA Buttons with advanced hover effects */}
            <div className="flex flex-col sm:flex-row gap-5 mb-16 animate-fade-in animation-delay-800">
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-[#FF6B4A] to-[#4A90E2] rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B4A]/25"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Your Journey
                  <ArrowRight size={20} className="group-hover:translate-x-1 group-hover:rotate-0 transition-all duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2] to-[#9B51E0] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
              
              <Link
                to="/services"
                className="group relative px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:bg-white/10"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Case Studies
                  <Zap size={20} className="group-hover:scale-125 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Stats with animated counters */}
            <div className="grid grid-cols-3 gap-6 animate-fade-in animation-delay-1000">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B4A]/20 to-[#4A90E2]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FF6B4A] to-[#FF8A6A] bg-clip-text text-transparent mb-1 animate-count-up">
                    250+
                  </div>
                  <p className="text-sm text-slate-400">Enterprise Clients</p>
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FF6B4A] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/20 to-[#9B51E0]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#4A90E2] to-[#6BA5E9] bg-clip-text text-transparent mb-1 animate-count-up">
                    $50M+
                  </div>
                  <p className="text-sm text-slate-400">Revenue Generated</p>
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#4A90E2] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#9B51E0]/20 to-[#FF6B4A]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#9B51E0] to-[#B572F0] bg-clip-text text-transparent mb-1 animate-count-up">
                    98%
                  </div>
                  <p className="text-sm text-slate-400">Client Retention</p>
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#9B51E0] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - 3D Visual Showcase */}
          <div className="hidden lg:block relative">
            <div className="relative w-full h-[600px] perspective-1000">
              {/* Main rotating cube */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] preserve-3d animate-rotate-3d">
                {/* Front face */}
                <div className="absolute w-full h-full bg-gradient-to-br from-[#FF6B4A]/20 to-[#4A90E2]/20 backdrop-blur-md border border-white/20 rounded-2xl -translate-z-[200px] flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl font-bold bg-gradient-to-r from-[#FF6B4A] to-[#4A90E2] bg-clip-text text-transparent mb-4">3.2x</div>
                    <p className="text-white/80">Average ROI</p>
                  </div>
                </div>
                
                {/* Back face */}
                <div className="absolute w-full h-full bg-gradient-to-br from-[#9B51E0]/20 to-[#FF6B4A]/20 backdrop-blur-md border border-white/20 rounded-2xl translate-z-[200px] flex items-center justify-center">
                  <div className="text-center p-8">
                    <Target size={48} className="text-white/60 mx-auto mb-4" />
                    <p className="text-white/80">Precision Targeting</p>
                  </div>
                </div>
                
                {/* Right face */}
                <div className="absolute w-full h-full bg-gradient-to-br from-[#4A90E2]/20 to-[#9B51E0]/20 backdrop-blur-md border border-white/20 rounded-2xl -rotate-y-90 translate-x-[200px] flex items-center justify-center">
                  <div className="text-center p-8">
                    <TrendingUp size={48} className="text-white/60 mx-auto mb-4" />
                    <p className="text-white/80">Growth Analytics</p>
                  </div>
                </div>
                
                {/* Left face */}
                <div className="absolute w-full h-full bg-gradient-to-br from-[#FF6B4A]/20 to-[#9B51E0]/20 backdrop-blur-md border border-white/20 rounded-2xl rotate-y-90 -translate-x-[200px] flex items-center justify-center">
                  <div className="text-center p-8">
                    <Users size={48} className="text-white/60 mx-auto mb-4" />
                    <p className="text-white/80">Audience Insights</p>
                  </div>
                </div>
                
                {/* Top face */}
                <div className="absolute w-full h-full bg-gradient-to-br from-[#9B51E0]/20 to-[#4A90E2]/20 backdrop-blur-md border border-white/20 rounded-2xl rotate-x-90 translate-y-[200px] flex items-center justify-center">
                  <div className="text-center p-8">
                    <Shield size={48} className="text-white/60 mx-auto mb-4" />
                    <p className="text-white/80">Data Security</p>
                  </div>
                </div>
                
                {/* Bottom face */}
                <div className="absolute w-full h-full bg-gradient-to-br from-[#4A90E2]/20 to-[#FF6B4A]/20 backdrop-blur-md border border-white/20 rounded-2xl -rotate-x-90 -translate-y-[200px] flex items-center justify-center">
                  <div className="text-center p-8">
                    <Rocket size={48} className="text-white/60 mx-auto mb-4" />
                    <p className="text-white/80">Fast Scaling</p>
                  </div>
                </div>
              </div>

              {/* Orbiting metrics */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] animate-orbit-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                  <span className="text-sm font-medium">+254% Traffic</span>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                  <span className="text-sm font-medium">189% Conversion</span>
                </div>
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                  <span className="text-sm font-medium">$2.1M Sales</span>
                </div>
                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                  <span className="text-sm font-medium">47% Lower CPA</span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-10 right-10 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 animate-float-gentle">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-yellow-400" />
                  <span className="text-sm">AI Powered</span>
                </div>
              </div>
              
              <div className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 animate-float-gentle animation-delay-2000">
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-blue-400" />
                  <span className="text-sm">Real-time Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

        @keyframes float-pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        .animate-float-pulse {
          animation: float-pulse 4s ease-in-out infinite;
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

        @keyframes expand-width {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .animate-expand-width {
          animation: expand-width 0.8s ease-out forwards;
        }

        @keyframes sparkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }

        @keyframes count-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-count-up {
          animation: count-up 1s ease-out forwards;
        }

        @keyframes rotate-3d {
          0% { transform: translate(-50%, -50%) rotateX(0deg) rotateY(0deg); }
          100% { transform: translate(-50%, -50%) rotateX(360deg) rotateY(360deg); }
        }
        .animate-rotate-3d {
          animation: rotate-3d 20s linear infinite;
        }

        @keyframes orbit-slow {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animate-orbit-slow {
          animation: orbit-slow 25s linear infinite;
        }

        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-gentle {
          animation: float-gentle 3s ease-in-out infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        .-translate-z-\[200px\] {
          transform: translateZ(-200px);
        }

        .translate-z-\[200px\] {
          transform: translateZ(200px);
        }

        .-rotate-y-90 {
          transform: rotateY(-90deg);
        }

        .rotate-y-90 {
          transform: rotateY(90deg);
        }

        .rotate-x-90 {
          transform: rotateX(90deg);
        }

        .-rotate-x-90 {
          transform: rotateX(-90deg);
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
    </section>
  );
};

export default HeroSection;