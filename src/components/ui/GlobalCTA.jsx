import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const GlobalCTA = ({
  theme = 'light',
  title = 'Join us in empowering',
  highlightText = 'communities today',
  subtitle = 'Support USWA in delivering essential advocacy, education, and healthcare initiatives without discrimination across Pakistan.',
  badgeText = 'Bila Imtiaz Sub Ki Khidmat',
  primaryBtnText = 'Become a Volunteer',
  secondaryBtnText = 'Support Our Work',
  primaryLink = '/contact',
  secondaryLink = '/programs'
}) => {
  const isDark = theme === 'dark';

  // Theme configuration with USWA Emerald palette
  const themeConfig = {
    light: {
      bg: 'bg-slate-50',
      borderColor: 'border-emerald-100',
      glowTop: 'bg-emerald-200',
      glowBottom: 'bg-emerald-100',
      textPrimary: 'text-slate-900',
      textSecondary: 'text-slate-600',
      highlightText: 'text-emerald-600',
      badgeBg: 'bg-emerald-50',
      badgeBorder: 'border-emerald-200',
      badgeText: 'text-emerald-800',
      badgeIcon: 'text-emerald-600',
      secondaryBtnBg: 'bg-slate-900',
      secondaryBtnBorder: 'border-slate-900',
      secondaryBtnText: 'text-white',
      secondaryBtnHover: 'hover:bg-slate-800 hover:text-emerald-300 transition-colors duration-300',
      shadow: 'shadow-[0_18px_45px_-18px_rgba(16,185,129,0.2)]',
    },
    dark: {
      bg: 'bg-slate-900',
      borderColor: 'border-white/10',
      glowTop: 'bg-emerald-500/10',
      glowBottom: 'bg-emerald-500/5',
      textPrimary: 'text-white',
      textSecondary: 'text-slate-300',
      highlightText: 'text-emerald-400',
      badgeBg: 'bg-white/5',
      badgeBorder: 'border-white/10',
      badgeText: 'text-emerald-300',
      badgeIcon: 'text-emerald-400',
      secondaryBtnBg: 'bg-white',
      secondaryBtnBorder: 'border-white',
      secondaryBtnText: 'text-slate-900',
      secondaryBtnHover: 'hover:text-emerald-600 transition-colors duration-300',
      shadow: 'shadow-[0_18px_45px_-18px_rgba(16,185,129,0.25)]',
    }
  };

  const colors = themeConfig[isDark ? 'dark' : 'light'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const actionClass = 'relative inline-flex min-h-[44px] w-full max-w-[220px] items-center justify-center rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 shadow-md focus:outline-none';

  return (
    <section className="relative py-8 md:py-12 overflow-hidden bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`
          relative rounded-3xl p-6 md:p-8 lg:p-10 overflow-hidden border transition-all duration-500
          ${colors.bg} ${colors.borderColor} ${colors.shadow}
          before:absolute before:inset-0 before:bg-gradient-to-br 
          before:from-white/5 before:to-transparent before:opacity-0 
          before:hover:opacity-100 before:transition-opacity before:duration-500
          before:pointer-events-none
        `}>
          {/* Animated background glow elements */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Top left glow */}
            <motion.div 
              animate={{ 
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: [0.42, 0, 0.58, 1] }}
              className={`absolute -top-1/3 -left-1/4 w-96 h-96 rounded-full ${colors.glowTop} blur-[120px]`}
            />
            
            {/* Bottom right glow */}
            <motion.div 
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.15, 1],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: [0.42, 0, 0.58, 1], delay: 1 }}
              className={`absolute -bottom-1/3 -right-1/4 w-96 h-96 rounded-full ${colors.glowBottom} blur-[120px]`}
            />
          </div>

          {/* Main Content Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center"
          >
            {/* Left Content (Spans 2 columns) */}
            <div className="lg:col-span-2 space-y-4 text-center lg:text-left flex flex-col justify-center">
              {/* Badge */}
              <motion.div
                variants={itemVariants}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border transition-all duration-300 ${colors.badgeBg} ${colors.badgeBorder} group hover:scale-[1.02] w-fit mx-auto lg:mx-0`}
              >
                <Sparkles className={`w-4 h-4 ${colors.badgeIcon}`} />
                <span className={`text-xs font-bold uppercase tracking-[0.2em] ${colors.badgeText}`}>
                  {badgeText}
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                variants={itemVariants}
                className={`text-2xl md:text-3xl lg:text-4xl font-light tracking-tight leading-tight ${colors.textPrimary}`}
              >
                {title}{' '}
                <span className={`font-serif italic ${colors.highlightText}`}>
                  {highlightText}
                </span>
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className={`text-sm md:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 ${colors.textSecondary}`}
              >
                {subtitle}
              </motion.p>
            </div>

            {/* Right Action Buttons */}
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
                <span className="absolute inset-0 -translate-x-full bg-white/20 group-hover:translate-x-full transition-transform duration-700 ease-in-out rotate-12"></span>
              </Link>

              {/* Secondary Action Button */}
              <Link
                to={secondaryLink}
                className={`${actionClass} ${colors.secondaryBtnBg} ${colors.secondaryBtnBorder} ${colors.secondaryBtnText} ${colors.secondaryBtnHover} active:scale-95`}
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

export default GlobalCTA;