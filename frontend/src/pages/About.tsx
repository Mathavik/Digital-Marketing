import React from 'react';
import { CheckCircle, Target, Lightbulb, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <main className="pt-8 w-full overflow-x-hidden">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Who We Are</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            A result-driven digital marketing team focused on helping brands grow online
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* About Paragraph */}
          <div className="mb-16">
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
              We are a result-driven digital marketing team focused on helping brands grow online.
              Our mission is to deliver measurable growth, increase brand visibility, and generate
              consistent revenue for our clients. With years of experience and proven expertise, we
              combine data-driven strategies with creative excellence to transform your digital
              presence.
            </p>
          </div>

          {/* Three Columns Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Our Mission */}
            <div className="rounded-xl shadow-lg p-8 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses of all sizes with cutting-edge digital marketing solutions
                that drive sustainable growth, increase profitability, and establish lasting brand
                authority in their industries.
              </p>
            </div>

            {/* Our Vision */}
            <div className="rounded-xl shadow-lg p-8 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted digital marketing partner, recognized for innovation,
                integrity, and delivering exceptional ROI. We envision a future where every
                business thrives online.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="rounded-xl shadow-lg p-8 bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Why Choose Us</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We combine strategic thinking with technical expertise to create campaigns that
                deliver results. Our team stays ahead of industry trends and adapts to your unique
                business needs.
              </p>
            </div>
          </div>

          {/* Why Choose Us - Detailed */}
          <section className="mb-20 w-full overflow-x-hidden">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Brands Trust Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Data-Driven Strategies',
                  description:
                    'Every decision is backed by comprehensive analytics and market research to ensure maximum impact.',
                },
                {
                  title: 'Transparent Reporting',
                  description:
                    'Regular, detailed reports keep you informed about campaign performance and ROI metrics.',
                },
                {
                  title: 'Proven Growth Results',
                  description:
                    'Our clients have seen an average of 300% ROI with our strategic digital marketing approach.',
                },
                {
                  title: 'Dedicated Expert Team',
                  description:
                    'Work with specialists in SEO, PPC, content marketing, and web development.',
                },
                {
                  title: 'Custom Solutions',
                  description:
                    'We tailor strategies to your unique business goals, industry, and target audience.',
                },
                {
                  title: '24/7 Support',
                  description:
                    'Our team is always available to answer questions and optimize your campaigns.',
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-6 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-300">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Team Stats */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl md:text-5xl font-bold mb-2">10+</p>
                <p className="text-blue-100">Years in Business</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold mb-2">45+</p>
                <p className="text-blue-100">Team Members</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold mb-2">250+</p>
                <p className="text-blue-100">Happy Clients</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold mb-2">500+</p>
                <p className="text-blue-100">Successful Campaigns</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default About;
