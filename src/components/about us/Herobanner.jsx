import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HeroBanner() {
  return (
    <section className="relative bg-slate-900 text-white min-h-[100vh] sm:min-h-screen flex items-center justify-center px-4 sm:px-6 py-24 sm:py-32 overflow-hidden">
      
      {/* Background Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.15 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80')` 
        }}
      />
     
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[2px]" />

      {/* Hero Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-4xl mx-auto text-center space-y-6 my-auto"
      >
        
        {/* Subtitle Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center space-x-2 bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wide uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Bila Imtiaz Sub Ki Khidmat</span>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
        >
          Dedicated to <span className="text-emerald-500">Social Justice</span> & Human Rights
        </motion.h1>

        {/* Paragraph */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-slate-300 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          United Social Watch & Advocacy (USWA) works across Pakistan to ensure equal access to basic education, healthcare, and civil rights for all under-served communities.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/mission"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-emerald-600/30 transition-all duration-200 text-sm md:text-base"
          >
            <span>Our Mission</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/get-involved"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 font-medium px-6 py-3 rounded-lg transition-all duration-200 text-sm md:text-base"
          >
            <Heart className="w-4 h-4 text-emerald-400" />
            <span>Get Involved</span>
          </Link>
        </motion.div>

      </motion.div>

      {/* Decorative Bottom Border Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50" />
    </section>
  );
}