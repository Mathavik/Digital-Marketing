import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <main className="pt-8 w-full overflow-x-hidden">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Ready to transform your digital presence? Let's start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* FAQ Section */}
      <section className="py-20 bg-white w-full overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'How quickly will I see results?',
                answer:
                  'Results vary by service. SEO typically shows improvements within 3-6 months. PPC campaigns can drive immediate traffic. We provide customized timelines based on your goals.',
              },
              {
                question: 'What is your minimum commitment?',
                answer:
                  'We offer flexible packages starting at 3 months. Most clients see better results with longer-term partnerships as strategies mature.',
              },
              {
                question: 'Do you provide transparent reporting?',
                answer:
                  'Yes! We provide detailed monthly reports showing key metrics, campaign performance, and ROI. You have access to real-time dashboards anytime.',
              },
              {
                question: 'Can you work with my budget?',
                answer:
                  'Absolutely. We create custom packages for all budget sizes. We focus on maximizing ROI regardless of your investment level.',
              },
              {
                question: 'How do you stay updated with algorithm changes?',
                answer:
                  'Our team continuously monitors industry updates and algorithm changes. We adapt strategies accordingly to maintain optimal performance.',
              },
              {
                question: 'What if I am not satisfied with results?',
                answer:
                  'We offer a 30-day satisfaction guarantee. If you are not happy with the service, we will work with you to adjust the strategy or provide a full refund.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-gray-50 border border-gray-200 hover:border-blue-400 transition-colors duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
