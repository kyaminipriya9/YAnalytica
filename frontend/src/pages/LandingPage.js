// src/pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-300">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Welcome to Excel Analytics Platform</h1>
      <p className="text-lg text-gray-700 mb-8">Upload. Analyze. Visualize.</p>
      <div className="space-x-4">
        <Link to="/login" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Login</Link>
        <Link to="/register" className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-900">Register</Link>
      </div>
    </div>
  );
};

export default LandingPage;
