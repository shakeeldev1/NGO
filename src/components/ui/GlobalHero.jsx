import React, { useState, useCallback, memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Static bullet pagination handler to avoid recreation on re-render
const renderPaginationBullet = (_, className) => `<span class="${className}"></span>`;

const GlobalHero = ({ data = [], height = 'h-screen' }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = useCallback((swiper) => {
    setActiveIndex(swiper.realIndex);
  }, []);

  if (!data || data.length === 0) return null;

  return (
    <main className={`relative w-full bg-slate-900 overflow-hidden ${height}`}>
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1200}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: renderPaginationBullet,
        }}
        onSlideChange={handleSlideChange}
        className="h-full w-full 
          [&_.swiper-pagination]:!bottom-10 
          sm:[&_.swiper-pagination]:!bottom-14 
          [&_.swiper-pagination]:!left-auto
          [&_.swiper-pagination]:!right-8
          sm:[&_.swiper-pagination]:!right-16
          [&_.swiper-pagination]:!w-fit
          [&_.swiper-pagination]:!flex 
          [&_.swiper-pagination]:!items-center 
          [&_.swiper-pagination]:!justify-end
          [&_.swiper-pagination]:!px-0
          [&_.swiper-pagination]:!gap-2
          [&_.swiper-pagination-bullet]:!w-6
          sm:[&_.swiper-pagination-bullet]:!w-8 
          [&_.swiper-pagination-bullet]:!h-1 
          [&_.swiper-pagination-bullet]:!rounded-full 
          [&_.swiper-pagination-bullet]:!bg-white/40 
          [&_.swiper-pagination-bullet]:!opacity-100 
          [&_.swiper-pagination-bullet]:!m-0 
          [&_.swiper-pagination-bullet]:!transition-all 
          [&_.swiper-pagination-bullet]:!duration-500
          [&_.swiper-pagination-bullet-active]:!w-10
          sm:[&_.swiper-pagination-bullet-active]:!w-14 
          [&_.swiper-pagination-bullet-active]:!bg-emerald-500
          [&_.swiper-pagination-bullet-active]:!shadow-md"
      >
        {data.map((slide, index) => {
          const isActive = activeIndex === index;

          return (
            <SwiperSlide key={slide.id || index} className="relative overflow-hidden">
              {/* Background Image Zoom Animation (GPU Hardware Accelerated) */}
              <motion.div
                initial={{ scale: 1.15 }}
                animate={{ scale: isActive ? 1 : 1.15 }}
                transition={{ duration: 6, ease: 'easeOut' }}
                className="absolute inset-0 z-0 transform-gpu will-change-transform"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />

              {/* Backdrop Overlay for Text Readability */}
              <div className="absolute inset-0 z-1 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-transparent" />

              <div className="relative z-10 h-full flex items-center px-6 sm:px-12 md:px-20 lg:px-32">
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      className="max-w-3xl w-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* Subtitle Accent Bar */}
                      {slide.subtitle && (
                        <motion.div
                          className="mb-3 sm:mb-4 flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <motion.div
                            className="h-1 bg-emerald-500 rounded-full w-8 origin-left transform-gpu"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                          />
                          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
                            {slide.subtitle}
                          </p>
                        </motion.div>
                      )}

                      {/* Title with Word Staggering */}
                      {slide.title && (
                        <motion.h1
                          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 leading-tight text-white tracking-tight"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          {slide.title.split(' ').map((word, i) => (
                            <motion.span
                              key={`${word}-${i}`}
                              className="inline-block mr-2 sm:mr-3 transform-gpu"
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: 0.25 + i * 0.08,
                                ease: [0.16, 1, 0.3, 1],
                              }}
                            >
                              {word}
                            </motion.span>
                          ))}
                        </motion.h1>
                      )}

                      {/* Description Paragraph */}
                      {slide.description && (
                        <motion.p
                          className="text-sm sm:text-base md:text-lg mb-8 max-w-xl text-slate-200 leading-relaxed font-normal"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          {slide.description}
                        </motion.p>
                      )}

                      {/* Action Buttons */}
                      <motion.div
                        className="flex flex-wrap justify-start gap-4 items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        {/* Primary Button */}
                        {slide.primaryBtnText && (
                          <Link
                            to={slide.primaryLink || '#'}
                            className="relative inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 cursor-pointer overflow-hidden shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400 px-6 py-3 text-sm md:text-base bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95 group"
                          >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                              {slide.primaryBtnText}
                            </span>
                            <span className="absolute inset-0 -translate-x-full bg-white/20 group-hover:translate-x-full transition-transform duration-700 ease-in-out rotate-12" />
                          </Link>
                        )}

                        {/* Secondary Button */}
                        {slide.secondaryBtnText && (
                          <Link
                            to={slide.secondaryLink || '#'}
                            className="px-6 py-3 text-sm md:text-base font-semibold rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
                          >
                            {slide.secondaryBtnText}
                          </Link>
                        )}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </main>
  );
};

export default memo(GlobalHero);