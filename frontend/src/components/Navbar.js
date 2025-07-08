import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all px-6 py-4 flex items-center justify-between shadow-md ${
        scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center space-x-2">
        <div className="flex items-center justify-center px-2.5 py-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white rounded-md font-extrabold text-lg shadow-md">
          <Sparkles size={18} className="mr-1" />
        </div>
        <span className="text-2xl font-bold text-gray-800 dark:text-white tracking-tight">YAnalytica</span>
      </div>
      <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300">
        <li><a href="#">Login/Register</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;