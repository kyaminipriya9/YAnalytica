import React from 'react';
import { Sun, Moon } from 'lucide-react';

const DarkToggleFAB = () => {
  const [dark, setDark] = React.useState(false);
  const toggle = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-white shadow-lg rounded-full border border-gray-300 dark:border-gray-700 hover:scale-105 transition"
    >
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default DarkToggleFAB;