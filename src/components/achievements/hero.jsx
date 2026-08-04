import React from 'react';
import { motion } from 'framer-motion';

// Hero background image URL
const heroImageUrl = "https://images.pexels.com/photos/11338994/pexels-photo-11338994.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen flex items-center justify-center bg-[#04251a] overflow-hidden pt-28 sm:pt-32 md:pt-20 pb-20 sm:pb-24">
      {/* Full-width Background Image */}
      <img
        src={heroImageUrl}
        alt="NGO Achievement Impact"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dynamic dark-green overlay gradient (#04251a) for crisp text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#04251a]/90 via-[#04251a]/75 to-[#04251a]/95 backdrop-blur-[1px]"></div>

      {}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] sm:h-[60px] md:h-[80px] fill-current text-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C63.42,20.35,123.19,37.37,185.12,47.16C239,55.19,286.1,59.34,321.39,56.44Z"></path>
        </svg>
      </div>

      {}
      <div className="relative z-20 text-center text-white px-4 sm:px-6 md:px-8 max-w-5xl mx-auto flex flex-col items-center">
        {/* Sub-heading / Category Pill */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-widest text-emerald-300 mb-3 sm:mb-4 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full shadow-sm"
        >
          Celebrating 10 Years of Impact
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-[1.15] tracking-tight drop-shadow-md"
        >
          Our Achievements: <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-emerald-300">Building a Brighter Tomorrow</span>
        </motion.h1>

        {/* Supporting Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-sm sm:text-lg md:text-xl font-normal mb-8 sm:mb-10 text-emerald-50/90 max-w-3xl leading-relaxed"
        >
          From empowering women to educating children, explore the tangible difference our work has made across regional communities.
        </motion.p>

        {/* Action Button Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="inline-block"
        >
          <a
            href="#achievements-list"
            className="group inline-flex items-center gap-2 bg-white text-[#34ae85] hover:bg-[#34ae85] hover:text-white border-2 border-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-2xl transition-all duration-300 transform"
          >
            <span>See the Stories</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;