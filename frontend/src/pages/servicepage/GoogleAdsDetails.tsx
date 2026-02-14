import React from "react";

const GoogleAdsDetails = () => {
  return (
    <div className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase mb-4">
            GOOGLE ADS (PPC ADVERTISING)
          </h1>
          <p className="text-gray-600 leading-relaxed text-lg">
            Google Ads is a powerful pay-per-click (PPC) advertising platform 
            that helps businesses appear at the top of search results instantly. 
            It allows brands to target high-intent users actively searching 
            for products or services, ensuring faster visibility and measurable ROI.
          </p>
        </div>

        {/* Key Components Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Key Components of Google Ads
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 rounded-2xl shadow-lg border hover:shadow-xl transition">
              <h3 className="font-bold text-xl mb-3">Search Campaigns</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Text-based ads that appear on top of Google search results 
                when users search for specific keywords.
              </p>
            </div>

            <div className="p-6 rounded-2xl shadow-lg border hover:shadow-xl transition">
              <h3 className="font-bold text-xl mb-3">Display & YouTube Ads</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Visual banner and video ads that increase brand awareness 
                across websites and YouTube.
              </p>
            </div>

            <div className="p-6 rounded-2xl shadow-lg border hover:shadow-xl transition">
              <h3 className="font-bold text-xl mb-3">Conversion Tracking</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Advanced tracking setup to measure leads, sales, and ROI 
                for data-driven optimization.
              </p>
            </div>

          </div>
        </div>

        {/* Strategy Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Strategy & Optimization
          </h2>

          <div className="space-y-6 text-gray-600 leading-relaxed">

            <div>
              <h4 className="font-semibold text-lg text-slate-900">
                Keyword Targeting
              </h4>
              <p>
                Selecting high-intent keywords ensures ads are shown 
                to users ready to take action.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-slate-900">
                Smart Bidding
              </h4>
              <p>
                Automated bidding strategies optimize cost-per-click 
                and maximize conversions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-slate-900">
                A/B Testing
              </h4>
              <p>
                Continuous testing of ad copies, landing pages, and 
                creatives improves performance over time.
              </p>
            </div>

          </div>
        </div>

        {/* Closing Section */}
        <div className="mt-16 bg-blue-600 text-white p-10 rounded-3xl">
          <h3 className="text-2xl font-bold mb-4">
            Why Google Ads Matters
          </h3>
          <p className="leading-relaxed">
            Google Ads delivers instant visibility, precise audience targeting, 
            and measurable results. When managed strategically, it becomes 
            a powerful growth engine for lead generation and revenue scaling.
          </p>
        </div>

      </div>
    </div>
  );
};

export default GoogleAdsDetails;
