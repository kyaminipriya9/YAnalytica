import React from 'react';

const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-100 via-blue-100 to-sky-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to explore your data like never before?</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">Upload your first Excel sheet now and discover instant AI-powered visualizations.</p>
        <a href="/login" className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">Get Started</a>
      </div>
    </section>
  );
};

export default CTASection;
