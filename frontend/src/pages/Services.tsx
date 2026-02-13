import React from 'react';
import { Search, Share2, Zap, FileText, Code } from 'lucide-react';

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      icon: <Search className="w-16 h-16 text-blue-600" />,
      title: 'SEO Optimization',
      description:
        'Improve your website ranking on search engines and drive organic traffic that converts.',
      features: [
        'Keyword research & analysis',
        'On-page optimization',
        'Technical SEO',
        'Link building',
        'Monthly reporting',
      ],
    },
    {
      id: 2,
      icon: <Share2 className="w-16 h-16 text-purple-600" />,
      title: 'Social Media Marketing',
      description:
        'Build strong brand presence and engage your audience across social platforms.',
      features: [
        'Content strategy',
        'Social media management',
        'Community engagement',
        'Influencer partnerships',
        'Social analytics',
      ],
    },
    {
      id: 3,
      icon: <Zap className="w-16 h-16 text-blue-600" />,
      title: 'Google Ads',
      description: 'Run targeted paid campaigns that generate high-quality leads and measurable ROI.',
      features: [
        'Campaign setup & management',
        'Bid optimization',
        'A/B testing',
        'Conversion tracking',
        'Performance reporting',
      ],
    },
    {
      id: 4,
      icon: <FileText className="w-16 h-16 text-purple-600" />,
      title: 'Content Marketing',
      description: 'Create strategic content that builds authority and attracts potential customers.',
      features: [
        'Content strategy',
        'Blog writing',
        'Video production',
        'Infographics',
        'Email campaigns',
      ],
    },
    {
      id: 5,
      icon: <Code className="w-16 h-16 text-blue-600" />,
      title: 'Website Development',
      description: 'Design and develop high-performance, conversion-focused websites.',
      features: [
        'Responsive design',
        'Custom development',
        'Performance optimization',
        'SEO-friendly structure',
        'Ongoing support',
      ],
    },
  ];

  return (
    <main className="pt-8">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Comprehensive digital marketing solutions designed to accelerate your business growth
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-100"
              >
                {/* Icon */}
                <div className="mb-6 p-4 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 w-fit">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">{service.description}</p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                  Get Started
                </button>
              </div>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h2>
            <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Every business is unique. We can create a tailored package combining our services to
              meet your specific goals and budget.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 inline-block">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
