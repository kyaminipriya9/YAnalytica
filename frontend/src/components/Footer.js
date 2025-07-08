import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-center text-gray-700 dark:text-gray-300 py-6 border-t border-gray-200 dark:border-gray-700">
      <p>&copy; {new Date().getFullYear()} YAnalytica. All rights reserved.</p>
    </footer>
  );
};

export default Footer;