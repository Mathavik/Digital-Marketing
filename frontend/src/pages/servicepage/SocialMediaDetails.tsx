import React from "react";

const SocialMediaDetails = () => {
  return (
    <div className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase mb-4">
            SOCIAL MEDIA MARKETING
          </h1>
          <p className="text-gray-600 leading-relaxed text-lg">
            Social media marketing (SMM) is the strategic use of platforms like 
            Facebook, Instagram, LinkedIn, and TikTok to build brand awareness, 
            engage audiences, and drive website traffic. It involves creating 
            tailored, high-quality content and utilizing paid advertising 
            to convert users into loyal customers.
          </p>
        </div>

        {/* Key Components Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Key Aspects of Social Media Marketing
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 rounded-2xl shadow-lg border hover:shadow-xl transition">
              <h3 className="font-bold text-xl mb-3">Core Objectives</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Building brand awareness, driving website traffic, and 
                increasing sales through consistent and strategic content.
              </p>
            </div>

            <div className="p-6 rounded-2xl shadow-lg border hover:shadow-xl transition">
              <h3 className="font-bold text-xl mb-3">Strategy Development</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Identifying target audience, defining brand voice, 
                and creating a structured content calendar.
              </p>
            </div>

            <div className="p-6 rounded-2xl shadow-lg border hover:shadow-xl transition">
              <h3 className="font-bold text-xl mb-3">Content Strategy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Following the 80/20 rule – 80% value-driven content and 
                20% promotional content for better engagement and trust.
              </p>
            </div>

          </div>
        </div>

        {/* Platforms Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Platforms & Targeting
          </h2>

          <div className="space-y-6 text-gray-600 leading-relaxed">

            <div>
              <h4 className="font-semibold text-lg text-slate-900">
                Platform Usage
              </h4>
              <p>
                Facebook, LinkedIn, Twitter, and Pinterest are ideal 
                for targeted advertising. Instagram and TikTok 
                are powerful for visual storytelling and younger audiences.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-slate-900">
                Analytics & ROI
              </h4>
              <p>
                Tracking engagement, follower growth, and conversion rates 
                helps measure performance and optimize campaigns.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-slate-900">
                Organic vs Paid
              </h4>
              <p>
                Combining organic content with paid advertising 
                maximizes reach and ensures sustainable growth.
              </p>
            </div>

          </div>
        </div>

        {/* Closing Section */}
        <div className="mt-16 bg-blue-600 text-white p-10 rounded-3xl">
          <h3 className="text-2xl font-bold mb-4">
            Why Social Media Marketing Matters
          </h3>
          <p className="leading-relaxed">
            Social media enables two-way communication with customers, 
            builds stronger relationships, and provides highly personalized 
            targeting based on demographics and user behavior. 
            Consistency and adapting to platform trends are key to success.
          </p>
        </div>

      </div>
    </div>
  );
};

export default SocialMediaDetails;
