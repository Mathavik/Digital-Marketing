import React, { useEffect, useRef, useState } from 'react';
import { 
  TrendingUp, Target, Users, Zap, BarChart3, Globe2, 
  ArrowUpRight, Sparkles, Rocket, ChevronRight, Eye,
  MousePointerClick, Search, Smartphone, Award, Shield,
  LineChart, CircleDollarSign, Timer, ArrowRight
} from 'lucide-react';

const CaseStudySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);
  
  const caseStudies = [
    {
      client: "TechGrowth Solutions",
      industry: "B2B SaaS",
      challenge: "Struggling with high CPC and low conversion rates across Google Ads. Monthly spend of $15k generating only 2-3 qualified leads.",
      approach: [
        "AI-powered keyword optimization",
        "Dynamic landing page personalization",
        "Automated A/B testing at scale",
        "Cross-channel retargeting strategy"
      ],
      metrics: {
        traffic: "+385%",
        conversion: "+267%",
        revenue: "$2.1M",
        roi: "412%",
        cpc: "-64%"
      },
      color: "from-blue-500 to-purple-600",
      icon: <Target className="w-6 h-6" />
    },
    {
      client: "FashionHub E-commerce",
      industry: "Retail & Fashion",
      challenge: "Low social media engagement and abandoned cart rate of 78%. Instagram reach dropped 45% after algorithm change.",
      approach: [
        "Influencer partnership program",
        "Shoppable video content strategy",
        "AI product recommendations",
        "SMS & email recovery flows"
      ],
      metrics: {
        traffic: "+542%",
        conversion: "+189%",
        revenue: "$3.4M",
        roi: "356%",
        cpc: "-52%"
      },
      color: "from-purple-600 to-pink-600",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      client: "HealthFirst Clinic",
      industry: "Healthcare",
      challenge: "Local SEO visibility issues. Unable to compete with national chains for 'near me' searches.",
      approach: [
        "Local citation cleanup",
        "Google Business Profile optimization",
        "Patient review generation system",
        "Hyperlocal content strategy"
      ],
      metrics: {
        traffic: "+298%",
        conversion: "+156%",
        revenue: "$890K",
        roi: "534%",
        cpc: "-71%"
      },
      color: "from-blue-500 to-cyan-500",
      icon: <Search className="w-6 h-6" />
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-28 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
      {/* Animated background orbs - matching hero section */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Animated grid overlay - matching hero - FIXED */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        ></div>
        
        {/* Animated grid lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-grid-flow"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-grid-flow-reverse"></div>
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent animate-grid-flow-vertical"></div>
        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent animate-grid-flow-vertical-reverse"></div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-40 right-[15%] w-20 h-20 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 rotate-12 animate-float-rotate">
        <Rocket className="w-8 h-8 text-white/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="absolute bottom-40 left-[10%] w-24 h-24 bg-white/5 backdrop-blur-md rounded-full border border-white/10 animate-float-bounce">
        <Shield className="w-10 h-10 text-white/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with hero theme */}
        <div className="text-center mb-20 animate-fade-in-up">
          {/* Animated badge - matching hero */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-float-gentle">
            <Sparkles size={18} className="mr-2 text-yellow-300" />
            <span className="text-sm font-medium tracking-wide bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent">
              Trusted by 250+ Industry Leaders
            </span>
          </div>

          {/* Main heading with gradient - matching hero */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="inline-block bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent animate-slide-up">
              Data-Backed
            </span>
            <br />
            <span className="inline-block relative mt-2">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-slide-up animation-delay-200">
                Success Stories
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transform scale-x-0 animate-expand-width animation-delay-1000"></div>
            </span>
          </h2>

          {/* Description with hero color palette */}
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-400">
            Real campaigns, real results. See how we transformed 
            <span className="relative mx-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
              <span className="relative z-10 font-semibold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                $15M+ in ad spend
              </span>
            </span>
            into measurable growth for our clients.
          </p>
        </div>

        {/* Animated metrics strip - hero theme */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 animate-fade-in animation-delay-600">
          {[
            { label: 'Total Revenue', value: '$42M+', icon: <BarChart3 className="w-5 h-5" />, gradient: 'from-blue-400 to-purple-400' },
            { label: 'Campaigns Run', value: '1.2K+', icon: <Zap className="w-5 h-5" />, gradient: 'from-purple-400 to-pink-400' },
            { label: 'Avg. ROI', value: '387%', icon: <TrendingUp className="w-5 h-5" />, gradient: 'from-blue-400 to-cyan-400' },
            { label: 'Active Clients', value: '156', icon: <Users className="w-5 h-5" />, gradient: 'from-purple-400 to-blue-400' }
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${800 + index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className={`inline-flex p-2 bg-gradient-to-r ${stat.gradient} rounded-lg text-white mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Tabs - hero theme */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in animation-delay-800">
          {caseStudies.map((study, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-500 overflow-hidden ${
                activeTab === index
                  ? 'text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${study.color} transition-all duration-500 ${
                activeTab === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}></div>
              <div className={`absolute inset-0 bg-white/5 backdrop-blur-sm transition-all duration-500 ${
                activeTab === index ? 'opacity-0' : 'opacity-100 group-hover:bg-white/10'
              }`}></div>
              <span className="relative z-10 flex items-center gap-2">
                {study.icon}
                {study.industry}
              </span>
            </button>
          ))}
        </div>

        {/* Main Case Study Card - hero glassmorphism */}
        <div className="relative animate-scale-in animation-delay-1000">
          {/* Decorative glow elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse-slow animation-delay-2000"></div>
          
          {/* Main card with glassmorphism */}
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
            {/* Gradient border accent */}
            <div className={`absolute inset-0 bg-gradient-to-r ${caseStudies[activeTab].color} opacity-5`}></div>
            
            <div className="relative p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Left Column - Case Details */}
                <div className="space-y-8">
                  {/* Client badge */}
                  <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 animate-slide-right">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${caseStudies[activeTab].color}`}></div>
                    <span className="font-semibold text-white">{caseStudies[activeTab].client}</span>
                    <span className="text-sm text-slate-300 px-2 py-0.5 bg-white/10 rounded-full">
                      {caseStudies[activeTab].industry}
                    </span>
                  </div>

                  {/* Challenge Section */}
                  <div className="group animate-slide-right animation-delay-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-red-500/20 backdrop-blur-sm rounded-lg group-hover:scale-110 transition-transform duration-300 border border-red-500/30">
                        <Target className="w-5 h-5 text-red-300" />
                      </div>
                      <h3 className="text-xl font-bold text-white">The Challenge</h3>
                    </div>
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-full blur-2xl"></div>
                      <p className="text-slate-300 leading-relaxed relative z-10">
                        {caseStudies[activeTab].challenge}
                      </p>
                    </div>
                  </div>

                  {/* Our Approach */}
                  <div className="group animate-slide-right animation-delay-400">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 bg-gradient-to-r ${caseStudies[activeTab].color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Rocket className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Our Strategy</h3>
                    </div>
                    
                    <div className="grid gap-3">
                      {caseStudies[activeTab].approach.map((item, i) => (
                        <div
                          key={i}
                          className="group/item flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 animate-slide-right"
                          style={{ animationDelay: `${600 + i * 100}ms` }}
                        >
                          <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${caseStudies[activeTab].color} flex items-center justify-center text-white text-sm font-bold group-hover/item:scale-110 transition-transform`}>
                            ✓
                          </div>
                          <span className="text-slate-300">{item}</span>
                          <Sparkles className="w-4 h-4 text-yellow-400/70 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Results Dashboard */}
                <div className="space-y-8">
                  {/* Performance header */}
                  <div className="flex items-center justify-between animate-slide-left animation-delay-200">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-500/20 backdrop-blur-sm rounded-lg border border-green-500/30">
                        <TrendingUp className="w-5 h-5 text-green-300" />
                      </div>
                      <h3 className="text-xl font-bold text-white">90-Day Performance</h3>
                    </div>
                    <div className="px-3 py-1 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-full">
                      <span className="text-sm font-semibold text-green-300">+412% ROI</span>
                    </div>
                  </div>

                  {/* Metrics Grid - Hero themed */}
                  <div className="grid grid-cols-2 gap-4 animate-slide-left animation-delay-400">
                    {Object.entries(caseStudies[activeTab].metrics).map(([key, value], i) => (
                      <div
                        key={key}
                        className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 rounded-2xl group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
                        <div className="relative">
                          <p className="text-xs uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1">
                            {key === 'traffic' && <Globe2 className="w-3 h-3" />}
                            {key === 'conversion' && <MousePointerClick className="w-3 h-3" />}
                            {key === 'revenue' && <CircleDollarSign className="w-3 h-3" />}
                            {key === 'roi' && <LineChart className="w-3 h-3" />}
                            {key === 'cpc' && <Timer className="w-3 h-3" />}
                            {key}
                          </p>
                          <p className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${
                            key === 'traffic' ? 'from-blue-400 to-cyan-400' :
                            key === 'conversion' ? 'from-green-400 to-emerald-400' :
                            key === 'revenue' ? 'from-purple-400 to-pink-400' :
                            key === 'roi' ? 'from-yellow-400 to-orange-400' :
                            'from-red-400 to-rose-400'
                          } bg-clip-text text-transparent group-hover:scale-105 transition-transform origin-left`}>
                            {value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Performance Graph - Hero themed */}
                  <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 animate-slide-left animation-delay-600">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.1),_transparent_50%)] rounded-2xl"></div>
                    
                    {/* Graph header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-blue-400" />
                        <span className="text-sm font-medium text-white">Performance Trend</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-xs text-slate-400">Monthly</span>
                        <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full border border-blue-500/30">+67%</span>
                      </div>
                    </div>

                    {/* Animated graph bars */}
                    <div className="flex items-end justify-between h-32 gap-2">
                      {[40, 65, 85, 100, 95, 120, 150, 180, 220, 260, 310, 385].map((height, i) => (
                        <div key={i} className="relative flex-1 group">
                          <div 
                            className="absolute bottom-0 w-full bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg opacity-80 group-hover:opacity-100 transition-all duration-300"
                            style={{ 
                              height: '0%',
                              animation: `graph-rise 1.5s ease-out ${i * 0.1}s forwards`
                            }}
                          >
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <span className="text-xs bg-white/10 backdrop-blur-sm text-white px-2 py-1 rounded-full font-semibold whitespace-nowrap border border-white/20">
                                {height}%
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* X-axis labels */}
                    <div className="flex justify-between mt-4 text-[10px] text-slate-500">
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                      <span>Jun</span>
                      <span>Jul</span>
                      <span>Aug</span>
                      <span>Sep</span>
                      <span>Oct</span>
                      <span>Nov</span>
                      <span>Dec</span>
                    </div>
                  </div>

                  {/* CTA Button - Hero themed */}
                  <div className="flex justify-end animate-slide-left animation-delay-800">
                    <button className="group relative px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25">
                      <span className="relative z-10 flex items-center gap-2">
                        View Full Case Study
                        <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Trust badges - Hero themed */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex flex-wrap items-center justify-between gap-6">
                  <span className="text-sm text-slate-400">Featured in:</span>
                  <div className="flex items-center gap-6 md:gap-10">
                    {['Forbes', 'TechCrunch', 'VentureBeat', 'Mashable'].map((brand, i) => (
                      <div key={i} className="text-slate-500 font-medium text-sm hover:text-white transition-colors duration-300">
                        {brand}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section - Hero themed */}
        <div className="mt-20 text-center animate-fade-in animation-delay-1200">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <Sparkles className="w-5 h-5 text-yellow-300/70 animate-sparkle" />
            <span className="text-slate-300">
              Ready to write your success story? 
              <button className="ml-2 font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 group">
                Let's talk strategy
                <ArrowRight size={16} className="inline ml-1 group-hover:translate-x-1 transition-transform text-purple-400" />
              </button>
            </span>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations - matching hero section */}
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

        @keyframes graph-rise {
          0% { height: 0%; }
          100% { height: var(--height); }
        }

        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1200 { animation-delay: 1.2s; }
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

export default CaseStudySection;