import React from 'react';
import { BarChart3, Brain, CloudUpload, SearchCheck } from 'lucide-react';

const features = [
  {
    icon: <BarChart3 size={32} className="text-blue-500" />,
    title: "Dynamic Visuals",
    desc: "Generate 2D and 3D charts that bring your Excel data to life."
  },
  {
    icon: <Brain size={32} className="text-purple-500" />,
    title: "AI Insights",
    desc: "Get automatic summaries and recommendations using AI."
  },
  {
    icon: <CloudUpload size={32} className="text-green-500" />,
    title: "Easy Upload",
    desc: "Upload your Excel files securely in seconds."
  },
  {
    icon: <SearchCheck size={32} className="text-yellow-500" />,
    title: "Pattern Detection",
    desc: "Detect trends and anomalies with a single click."
  },
];

const FeatureSection = () => {
  return (
    <section id = "features" className="py-20 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-md shadow-md hover:shadow-lg transition-all"
              data-aos="fade-up"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;