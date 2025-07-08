import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeatureSection from './components/FeatureSection';
import CTASection from './components/CTASection';
import FAQSection from './components/FAQSection';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';
import DarkToggleFAB from './components/DarkToggleFAB';
import BackToTopButton from './components/BackToTopButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gradient-to-tr from-pink-50 via-violet-100 to-emerald-100 min-h-screen text-gray-900 dark:text-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
    <div className="absolute inset-0 w-full h-full bg-texture-grain opacity-20 dark:opacity-10 pointer-events-none z-0"></div> 
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <CTASection />
      <TestimonialSection />
      <FAQSection />
      <Footer />
      <DarkToggleFAB />
      <BackToTopButton />
    </div>
  );
}

export default App;