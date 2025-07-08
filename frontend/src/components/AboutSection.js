import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-6 bg-gradient-to-br from-sky-100 via-blue-100 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-white overflow-hidden">
      <div className="absolute w-full h-full -z-10">
        <div className="absolute w-96 h-96 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob top-0 left-10" />
        <div className="absolute w-96 h-96 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000 bottom-10 right-10" />
      </div>

      <div className="max-w-4xl mx-auto text-center bg-white/70 dark:bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-lg" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">What is YAnalytica?</h2>
        <p className="text-lg leading-relaxed">
          YAnalytica is a modern analytics platform built for people who work with spreadsheets.
          Whether you're a student, data analyst, business owner, or researcher — you no longer need
          to wrestle with complex tools to understand your data. YAnalytica turns Excel files into
          stunning visual insights using intelligent charting, responsive 2D/3D plotting, and
          AI-powered explanations.
        </p>
        <p className="mt-6 text-lg leading-relaxed">
          With a clean interface, simple upload flow, and rich visualizations, YAnalytica bridges
          the gap between raw numbers and real-world understanding. From academic reports to
          business dashboards, we help you tell your data’s story — clearly, beautifully, and
          effortlessly.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;