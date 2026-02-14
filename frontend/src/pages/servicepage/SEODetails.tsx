import React from "react";

const SEODetails = () => {
  return (
    <div className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase mb-4">
            SEO (Search Engine Optimization)
          </h1>
          <p className="text-gray-600 leading-relaxed text-lg">
            SEO in digital marketing is the strategic process of enhancing a website 
            to increase its visibility in organic (non-paid) search engine results 
            such as Google or Bing. By optimizing on-page content, technical structure, 
            and building authoritative backlinks, SEO drives higher-quality traffic, 
            improves brand credibility, and enhances user experience.
          </p>
        </div>

        {/* Key Components Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Key Components of SEO
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 rounded-2xl shadow-lg border hover:shadow-xl transition">
              <h3 className="font-bold text-xl mb-3">On-Page SEO</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Optimizing individual web pages including keyword research, 
                content quality, meta tags, headings, and site structure 
                to ensure relevance to user intent and better search rankings.
              </p>
            </div>

            <div className="p-6 rounded-2xl shadow-lg border hover:shadow-xl transition">
              <h3 className="font-bold text-xl mb-3">Technical SEO</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Improving backend performance such as site speed, 
                mobile-friendliness, secure connections, crawling, 
                and indexing so search engines can efficiently 
                access and understand the website.
              </p>
            </div>

            <div className="p-6 rounded-2xl shadow-lg border hover:shadow-xl transition">
              <h3 className="font-bold text-xl mb-3">Off-Page SEO</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Building website authority through external signals, 
                especially acquiring high-quality backlinks from 
                reputable and relevant websites.
              </p>
            </div>

          </div>
        </div>

        {/* Importance Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Importance of SEO in Digital Marketing
          </h2>

          <div className="space-y-6 text-gray-600 leading-relaxed">

            <div>
              <h4 className="font-semibold text-lg text-slate-900">
                Increased Visibility & Traffic
              </h4>
              <p>
                Higher rankings on Search Engine Results Pages (SERPs) 
                lead to more clicks, visitors, and consistent organic growth.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-slate-900">
                Cost-Effectiveness
              </h4>
              <p>
                Unlike paid advertising, organic traffic does not require 
                continuous ad spend, making SEO a sustainable long-term strategy.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-slate-900">
                Credibility & Trust
              </h4>
              <p>
                Websites appearing in top positions are generally trusted 
                more by users, enhancing brand authority and reputation.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-slate-900">
                Strategic Advantage
              </h4>
              <p>
                SEO enables businesses to be discovered at crucial 
                moments in the buying journey, giving them a competitive edge.
              </p>
            </div>

          </div>
        </div>

        {/* Closing Section */}
        <div className="mt-16 bg-blue-600 text-white p-10 rounded-3xl">
          <h3 className="text-2xl font-bold mb-4">
            Why SEO Matters
          </h3>
          <p className="leading-relaxed">
            SEO is widely considered one of the most effective, essential, 
            and high-demand components of any comprehensive digital marketing strategy. 
            It ensures sustainable growth, long-term visibility, and measurable results.
          </p>
        </div>

      </div>
    </div>
  );
};

export default SEODetails;
