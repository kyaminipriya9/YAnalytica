import React from 'react';

const faqs = [
  {
    q: "Do I need to sign up to use YAnalytica?",
    a: "Yes, you'll need to sign up to save and manage your analysis results securely."
  },
  {
    q: "Is my Excel data safe?",
    a: "Absolutely. We don’t store any file content after analysis unless you explicitly save it."
  },
  {
    q: "What types of charts can I generate?",
    a: "We support bar, pie, scatter, and 3D surface plots — with more on the way!"
  },
  {
    q: "Do I need coding skills?",
    a: "Not at all. YAnalytica is designed for non-coders and professionals alike."
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 px-6 bg-gradient-to-br from-teal-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-900 shadow-sm"
              data-aos="fade-up"
            >
              <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
              <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
