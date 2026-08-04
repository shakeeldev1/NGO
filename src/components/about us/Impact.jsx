import React from 'react';
import { motion } from 'framer-motion';

const AboutImpactSection = () => {
  const stats = [
    { label: 'Children Enrolled', value: '150+' },
    { label: 'Deeni Taleem Students', value: '80+' },
    { label: 'Key Focus Areas', value: 'Education & Health' },
    { label: 'Years Active', value: '2013 - Present' },
  ];

  return (
    /* Reduced overall section padding on mobile (pt-10 pb-6) */
    <section className="pt-10 pb-6 sm:py-16 bg-slate-50 text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        
        {/* Top Info Grid - reduced bottom margin on mobile (mb-8) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center mb-8 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#00BC7D] uppercase">
              Who We Are
            </span>
            <h2 className="mt-1 sm:mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Empowering Communities at the Grassroots Level
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
              Established in 2013, United Social Watch & Advocacy (USWA) works to educate, capacitate, and uplift marginalized communities across Pakistan. We focus on streamlining community development, environmental awareness, and fundamental rights.
            </p>
            <div className="mt-4 sm:mt-6">
              <a
                href="#mission"
                className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#00BC7D] hover:text-[#00a36c] transition-colors group"
              >
                Learn more about our mission 
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1">
                  &rarr;
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="p-5 sm:p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 border-l-4 border-l-[#00BC7D] transition-all duration-300"
          >
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 flex items-center gap-2">
              Our Vision
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
              &ldquo;To develop and empower the rural community at the grass root level, where all human beings are equal, non-discriminated, and enjoy social, political, economic, & cultural rights.&rdquo;
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
  {stats.map((stat, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-[#018257] rounded-xl sm:rounded-2xl py-2.5 px-6 sm:py-6 sm:px-6 text-white text-center shadow-md hover:shadow-2xl hover:bg-[#00a870] transition-all duration-300 cursor-pointer"
    >
      {/* Stat Value: Normal weight on mobile, Extrabold on desktop */}
      <p className="text-xl sm:text-4xl font-normal sm:font-extrabold tracking-normal sm:tracking-tight leading-tight">
        {stat.value}
      </p>

      {/* Stat Label: Normal weight on mobile, Medium on desktop */}
      <p className="mt-0.5 sm:mt-2 text-xs sm:text-sm text-emerald-50 font-normal sm:font-medium leading-snug">
        {stat.label}
      </p>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
};

export default AboutImpactSection;