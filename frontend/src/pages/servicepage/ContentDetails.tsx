import React from "react";

const ContentDetails = () => {
  return (
    <div className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase mb-4">
            CONTENT MARKETING
          </h1>
          <p className="text-gray-600 leading-relaxed text-lg">
            Content Marketing is a strategic approach focused on creating and 
            distributing valuable, relevant, and consistent content to attract 
            and retain a clearly defined audience. Instead of direct selling, 
            it builds trust and authority that naturally leads to conversions.
          </p>
        </div>

        {/* Key Components Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Key Components of Content Marketing
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 rounded-2xl shadow-lg border hover:shadow-xl transition">
              <h3 className="font-bold text-xl mb-3">Content Strategy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Planning content based on audience needs, search intent, 
                and business goals to ensure long-term growth.
              </p>
            </div>

            <div className="p-6 rounded-2xl shadow-lg border hover:shadow-xl transition">
              <h3 className="font-bold text-xl mb-3">Content Creation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Producing high-quality blogs, videos, infographics, 
                case studies, and social content that educate and engage.
              </p>
            </div>

            <div className="p-6 rounded-2xl shadow-lg border hover:shadow-xl transition">
              <h3 className="font-bold text-xl mb-3">Content Distribution</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sharing content across SEO, social media, email marketing, 
                and paid channels to maximize reach.
              </p>
            </div>

          </div>
        </div>

        {/* Strategy Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Strategy & Performance
          </h2>

          <div className="space-y-6 text-gray-600 leading-relaxed">

            <div>
              <h4 className="font-semibold text-lg text-slate-900">
                SEO Integration
              </h4>
              <p>
                Optimizing content with keywords and search intent 
                ensures organic visibility and traffic growth.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-slate-900">
                Lead Generation
              </h4>
              <p>
                Valuable content nurtures prospects and guides them 
                through the buying journey.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-slate-900">
                Analytics & Optimization
              </h4>
              <p>
                Monitoring engagement, traffic, and conversion metrics 
                helps refine and improve content performance.
              </p>
            </div>

          </div>
        </div>

        {/* Closing Section */}
        <div className="mt-16 bg-blue-600 text-white p-10 rounded-3xl">
          <h3 className="text-2xl font-bold mb-4">
            Why Content Marketing Matters
          </h3>
          <p className="leading-relaxed">
            Content Marketing builds brand authority, strengthens customer 
            relationships, and drives sustainable long-term growth. 
            When done strategically, it becomes the foundation of all 
            successful digital marketing efforts.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ContentDetails;
