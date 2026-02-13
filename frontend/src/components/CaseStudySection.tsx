import React from 'react';
import { TrendingUp } from 'lucide-react';

const CaseStudySection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Success Story</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from our data-driven approach
          </p>
        </div>

        {/* Case Study Card */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-xl p-8 md:p-12 border border-blue-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Problem & Strategy */}
            <div className="space-y-8">
              {/* Problem */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  The Challenge
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Low website traffic and poor lead generation. The client was struggling to reach their target audience and convert visitors into customers.
                </p>
              </div>

              {/* Strategy */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  Our Strategy
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span>Comprehensive SEO optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span>Targeted Google Ads campaign</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span>Content marketing initiatives</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side - Results */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="text-green-500" />
                Results (3 Months)
              </h3>

              <div className="grid grid-cols-1 gap-6">
                {/* Traffic Growth */}
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <p className="text-gray-600 text-sm mb-2">Website Traffic</p>
                  <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    3X Growth
                  </p>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 h-2 rounded-full" style={{ width: '300%' }}></div>
                  </div>
                </div>

                {/* Lead Increase */}
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <p className="text-gray-600 text-sm mb-2">Lead Generation</p>
                  <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    2X Increase
                  </p>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full" style={{ width: '200%' }}></div>
                  </div>
                </div>

                {/* ROI Growth */}
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <p className="text-gray-600 text-sm mb-2">Return on Investment</p>
                  <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                    +280% ROI
                  </p>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-yellow-600 to-orange-600 h-2 rounded-full" style={{ width: '280%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
