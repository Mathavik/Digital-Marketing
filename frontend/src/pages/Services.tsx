import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Megaphone, Target, BarChart, Globe } from 'lucide-react';
import SEODetails from './servicepage/SEODetails';
import SocialMediaDetails from './servicepage/SocialMediaDetails';
import GoogleAdsDetails from './servicepage/GoogleAdsDetails';
import ContentDetails from './servicepage/ContentDetails';
import WebDetails from './servicepage/WebDetails';
const Services = () => {
  const [active, setActive] = useState(0);
  const [selectedService, setSelectedService] = useState<number | null>(0);
  const detailsRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (idx: number) => {
    setSelectedService(idx);
    // scroll to details after render
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
  };

  const services = [
    {
      id: 0,
      year: 'SEO',
      title: 'SEO Optimization',
      icon: <Search className="w-5 h-5" />,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
      desc: 'Be where your customers are searching. We optimize for intent and ranking.',
      tags: ['Technical SEO', 'Backlinks']
    },
    {
      id: 1,
      year: 'SOCIAL',
      title: 'Social Media Marketing',
      icon: <Megaphone className="w-5 h-5" />,
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=2000&auto=format&fit=crop',
      desc: 'Building viral communities through creative content and engagement.',
      tags: ['Reels', 'Community Mgmt']
    },
    {
      id: 2,
      year: 'ADS',
      title: 'Google Ads',
      icon: <Target className="w-5 h-5" />,
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2000&auto=format&fit=crop',
      desc: 'Paid campaigns that actually convert. Focus on ROI, not just clicks.',
      tags: ['Google PPC', 'Meta Ads']
    },
    {
      id: 3,
      year: 'CONTENT',
      title: 'Content Marketing',
      icon: <BarChart className="w-5 h-5" />,
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2000&auto=format&fit=crop',
      desc: 'High-impact content that tells your brand story and drives organic traffic.',
      tags: ['Storytelling', 'Blogs']
    },
    {
      id: 4,
      year: 'WEB',
      title: 'Website Development',
      icon: <Globe className="w-5 h-5" />,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop',
      desc: 'High-speed conversion websites built for the global market.',
      tags: ['UI/UX', 'Fullstack']
    }
  ];

  return (
    <div className="w-full">
      {/* --- Main Interactive Service Section --- */}
      <section className="bg-white py-12 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-8 border-b border-gray-100 pb-6">
            <div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">
                Our <span className="text-blue-600">Impact</span>
              </h2>
              <p className="text-gray-400 text-xs font-bold tracking-[0.3em] uppercase mt-2">
                Growth Strategies Since 2015
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <span className="text-[10px] font-bold text-gray-400 uppercase mr-2">Interactive</span>
              {[0, 1, 2].map((i) => (
                <div key={i} className={`h-1 w-3 rounded-full ${i === 1 ? 'bg-blue-600' : 'bg-gray-200'}`} />
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-3 h-[500px] w-full items-stretch">
            {services.map((s, index) => {
              const isActive = active === index;
              return (
                <motion.div
                  key={s.id}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => handleSelect(index)}
                  animate={{flex: isActive ? 4 : 1 }}
                  transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                  className="relative overflow-hidden rounded-[2rem] cursor-pointer group shadow-lg"
                >
                  <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className={`absolute inset-0 bg-black/50 transition-opacity ${isActive ? 'opacity-70' : 'opacity-40'}`} />

                  {!isActive && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="rotate-90 text-white/50 font-black text-3xl uppercase whitespace-nowrap tracking-tighter">{s.year}</span>
                    </motion.div>
                  )}

                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="p-3 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 text-white">{s.icon}</div>
                      {isActive && (
                        <motion.span initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="bg-blue-600 text-white px-3 py-1 rounded-lg font-bold text-[10px] tracking-widest uppercase">
                          {s.year}
                        </motion.span>
                      )}
                    </div>

                    <div className="overflow-hidden">
                      <AnimatePresence>
                        {isActive && (
                          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                            <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-2 leading-none">{s.title}</h3>
                            <p className="text-white/70 text-sm mb-4 max-w-xs font-medium">{s.desc}</p>
                            <div className="flex gap-2">
                              {s.tags.map(t => (
                                <span key={t} className="text-[9px] border border-white/30 text-white/90 px-2 py-1 rounded-md uppercase font-bold backdrop-blur-sm">{t}</span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
    
       {/* DETAILS SECTION START */}
      <div ref={detailsRef}>
        {selectedService === 0 && <SEODetails />}
        {selectedService === 1 && <SocialMediaDetails />}
         {selectedService === 2 && <GoogleAdsDetails />}
        {selectedService === 3 && <ContentDetails />}
        {selectedService === 4 && <WebDetails />} 
      </div>
      {/* DETAILS SECTION END */}

    </div>
    // </div>
  );
};
export default Services;