import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const actionClass =
  'relative inline-flex min-h-[44px] w-full max-w-[220px] items-center justify-center rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 shadow-md focus:outline-none';

const GlobalCTA = ({
  title = 'Join us in empowering',
  highlightText = 'communities today',
  subtitle = 'Support USWA in delivering essential advocacy, education, and healthcare initiatives without discrimination across Pakistan.',
  badgeText = 'Bila Imtiaz Sub Ki Khidmat',
  primaryBtnText = 'Become a Volunteer',
  secondaryBtnText = 'Support Our Work',
  primaryLink = '/contact',
  secondaryLink = '/programs',
}) => {
  return (
    <section className="relative py-8 md:py-12 overflow-hidden bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-6 md:p-8 lg:p-10 overflow-hidden border border-emerald-100 bg-slate-50 shadow-[0_18px_45px_-18px_rgba(16,185,129,0.2)] transition-all duration-500 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-500 before:pointer-events-none">
          
          {/* Animated Background Ambient Glow Elements */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-1/3 -left-1/4 w-96 h-96 rounded-full bg-emerald-200 blur-[120px] transform-gpu"
            />
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.15, 1],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-1/3 -right-1/4 w-96 h-96 rounded-full bg-emerald-100 blur-[120px] transform-gpu"
            />
          </div>

          {/* Main Content Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center"
          >
            {/* Left Content Column */}
            <div className="lg:col-span-2 space-y-4 text-center lg:text-left flex flex-col justify-center">
              {/* Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 transition-all duration-300 group hover:scale-[1.02] w-fit mx-auto lg:mx-0"
              >
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
                  {badgeText}
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                variants={itemVariants}
                className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight leading-tight text-slate-900"
              >
                {title}{' '}
                <span className="font-serif italic text-emerald-600">
                  {highlightText}
                </span>
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 text-slate-600"
              >
                {subtitle}
              </motion.p>
            </div>

            {/* Right Action Buttons Column */}
            <motion.div
              variants={itemVariants}
              className="flex w-full flex-col sm:flex-row lg:flex-col gap-3 items-center justify-center self-center"
            >
              {/* Primary Action Button */}
              <Link
                to={primaryLink}
                className={`${actionClass} overflow-hidden bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95 group hover:shadow-[0_12px_24px_-10px_rgba(16,185,129,0.45)]`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {primaryBtnText}
                </span>
                <span className="absolute inset-0 -translate-x-full bg-white/20 group-hover:translate-x-full transition-transform duration-700 ease-in-out rotate-12" />
              </Link>

              {/* Secondary Action Button */}
              <Link
                to={secondaryLink}
                className={`${actionClass} bg-slate-900 border-slate-900 text-white hover:bg-slate-800 hover:text-emerald-300 transition-colors duration-300 active:scale-95`}
              >
                {secondaryBtnText}
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default memo(GlobalCTA);