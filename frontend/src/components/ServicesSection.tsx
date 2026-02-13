import React from 'react';
import { Search, Share2, Zap, FileText, Code, ArrowRight } from 'lucide-react';

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      icon: <Search className="w-12 h-12 text-blue-600" />,
      title: 'SEO',
      description: 'Improve your website ranking on search engines and drive organic traffic that converts.',
    },
    {
      id: 2,
      icon: <Share2 className="w-12 h-12 text-purple-600" />,
      title: 'Social Media Marketing',
      description: 'Build strong brand presence and engage your audience across social platforms.',
    },
    {
      id: 3,
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: 'Google Ads',
      description: 'Run targeted paid campaigns that generate high-quality leads and measurable ROI.',
    },
    {
      id: 4,
      icon: <FileText className="w-12 h-12 text-purple-600" />,
      title: 'Content Marketing',
      description: 'Create strategic content that builds authority and attracts potential customers.',
    },
    {
      id: 5,
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: 'Website Development',
      description: 'Design and develop high-performance, conversion-focused websites.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Icon Container */}
              <div className="mb-6 p-4 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 w-fit group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              {/* Learn More Button */}
              <button className="flex items-center gap-2 text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-300 group/btn">
                Learn More
                <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
