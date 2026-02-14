import React from "react";

const WebDetails = () => {
  return (
    <div className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase mb-4">
            WEBSITE DEVELOPMENT
          </h1>
          <p className="text-gray-600 leading-relaxed text-lg">
            Website Development is the process of designing and building 
            high-performance, responsive, and user-friendly websites that 
            represent your brand digitally. A well-developed website improves 
            credibility, user experience, and conversion rates.
          </p>
        </div>

        {/* Key Components Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Key Components of Website Development
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 rounded-2xl shadow-lg border hover:shadow-xl transition">
              <h3 className="font-bold text-xl mb-3">UI / UX Design</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Creating visually appealing layouts and smooth navigation 
                to enhance user experience and engagement.
              </p>
            </div>

            <div className="p-6 rounded-2xl shadow-lg border hover:shadow-xl transition">
              <h3 className="font-bold text-xl mb-3">Frontend & Backend</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Developing responsive frontend interfaces and secure backend 
                systems for optimal performance and functionality.
              </p>
            </div>

            <div className="p-6 rounded-2xl shadow-lg border hover:shadow-xl transition">
              <h3 className="font-bold text-xl mb-3">Performance Optimization</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Improving loading speed, mobile responsiveness, 
                and SEO-friendly structure for better rankings.
              </p>
            </div>

          </div>
        </div>

        {/* Strategy Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Development Strategy & Benefits
          </h2>

          <div className="space-y-6 text-gray-600 leading-relaxed">

            <div>
              <h4 className="font-semibold text-lg text-slate-900">
                Mobile-First Approach
              </h4>
              <p>
                Designing websites optimized for mobile devices ensures 
                better accessibility and user retention.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-slate-900">
                Security & Scalability
              </h4>
              <p>
                Implementing secure coding practices and scalable 
                architecture supports long-term growth.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-slate-900">
                Conversion Focus
              </h4>
              <p>
                Strategic call-to-actions and user journey optimization 
                increase leads and sales.
              </p>
            </div>

          </div>
        </div>

        {/* Closing Section */}
        <div className="mt-16 bg-blue-600 text-white p-10 rounded-3xl">
          <h3 className="text-2xl font-bold mb-4">
            Why Website Development Matters
          </h3>
          <p className="leading-relaxed">
            Your website is the foundation of your digital presence. 
            A professionally developed website builds trust, enhances 
            user engagement, and converts visitors into customers.
          </p>
        </div>

      </div>
    </div>
  );
};

export default WebDetails;
