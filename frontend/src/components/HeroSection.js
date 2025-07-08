import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/analytics.json';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-sky-100 via-blue-100 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Blurred blobs */}
      <div className="absolute w-full h-full -z-10 overflow-hidden">
        <div className="absolute w-96 h-96 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob top-10 left-10" />
        <div className="absolute w-96 h-96 bg-yellow-400 dark:bg-yellow-600 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000 bottom-20 right-20" />
        <div className="absolute w-96 h-96 bg-green-300 dark:bg-green-700 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000 top-40 right-40" />
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 grid md:grid-cols-2 items-center gap-8 bg-white/50 dark:bg-black/20 backdrop-blur-md p-8 rounded-3xl shadow-xl">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Transform Your Excel Data into Crystal-Clear Insights
          </h1>
          <p className="text-md md:text-lg text-gray-800 dark:text-gray-200 mb-6 leading-relaxed">
            YAnalytica helps you visualize and understand your Excel data using AI-powered summaries, dynamic 2D/3D charts, and a beautifully intuitive platform. Upload your sheet and watch your data come alive — all in seconds.
          </p>
          <div className="flex space-x-4">
            <a href="/login" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Login</a>
            <a href="/register" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition">Register</a>
          </div>
        </div>

        <div className="w-72 md:w-96 mx-auto">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;