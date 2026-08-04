import React, { memo } from 'react';
import { motion } from 'framer-motion';

const GlobalHeading = ({
  subtitle,
  title,
  description,
  centered = true,
  className = '',
  compact = false,
}) => {
  // Gracefully handle multi-word splitting for title highlighting
  const words = title ? title.trim().split(' ') : [];
  const mainTitle = words.length > 1 ? words.slice(0, -1).join(' ') : title;
  const highlightedWord = words.length > 1 ? words[words.length - 1] : '';

  return (
    <div
      className={`${compact ? 'mb-0' : 'mb-12'} ${
        centered ? 'text-center' : 'text-left'
      } ${className}`}
    >
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`inline-block px-4 py-1.5 ${
            compact ? 'mb-2' : 'mb-4'
          } text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-600 bg-emerald-500/10 rounded-full transform-gpu`}
        >
          {subtitle}
        </motion.span>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-3xl md:text-5xl lg:text-6xl font-light text-slate-900 ${
            compact ? 'mb-2' : 'mb-6'
          } leading-tight transform-gpu`}
        >
          {mainTitle}{' '}
          {highlightedWord && (
            <span className="font-serif italic text-emerald-600">
              {highlightedWord}
            </span>
          )}
        </motion.h2>
      )}

      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`max-w-2xl text-slate-600 text-base md:text-lg font-light leading-relaxed ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {description}
        </motion.p>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className={`h-1 w-12 bg-emerald-500 rounded-full origin-left ${
          compact ? 'mt-2' : 'mt-6'
        } ${centered ? 'mx-auto origin-center' : ''} transform-gpu`}
      />
    </div>
  );
};

export default memo(GlobalHeading);