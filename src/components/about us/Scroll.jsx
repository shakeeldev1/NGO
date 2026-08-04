import React from 'react';
import { motion } from 'framer-motion';

const ParallaxImpactBanner = () => {
  return (
    <section
      className="relative min-h-[500px] flex items-center justify-center bg-fixed bg-center bg-cover text-white overflow-hidden"
      style={{
        
        backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop')`,
      }}
    >
    
      <div className="absolute inset-0 bg-slate-900/65 backdrop-blur-[2px]" />

     
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        
        <motion.span
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="inline-block text-sm font-semibold tracking-widest text-[#00BC7D] uppercase mb-3 bg-slate-900/40 px-4 py-1.5 rounded-full border border-[#00BC7D]/30"
        >
          Make a Difference Today
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight"
        >
          Together, We Can Transform Lives & Build Stronger Communities
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mt-6 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed"
        >
          Every child educated and every family supported brings us closer to a world of equal opportunity and dignity. Join us in making a lasting impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="#support"
            className="px-8 py-3.5 bg-[#00BC7D] hover:bg-[#00a36c] text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            Support Our Cause
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold rounded-xl backdrop-blur-sm transition-all duration-300"
          >
            Get Involved
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default ParallaxImpactBanner;