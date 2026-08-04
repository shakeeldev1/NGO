import React, { useState, useEffect, useCallback, memo } from 'react';
import { ChevronLeft, ChevronRight, Quote, Check, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GlobalHeading from '../ui/GlobalHeading';

// Static Data Array (Extracted out of render pipeline)
const TESTIMONIALS = [
  {
    id: 1,
    text: "Through USWA's community education drive, my children received school kits and scholarship support. It completely relieved our financial burden and kept them in school.",
    name: "Ahmed Hassan",
    location: "Rural Punjab",
    service: "Education Program",
    status: "Verified Impact",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    text: "The free medical camp organized by USWA gave my elderly mother access to essential diagnostics and doctor consultations we couldn't otherwise afford.",
    name: "Tariq Mahmood",
    location: "District Multan",
    service: "Healthcare Support",
    status: "Verified Impact",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    text: "Completing the skill development and vocational training course helped me start my own small workshop. USWA truly empowers communities from the ground up.",
    name: "Bilal Khan",
    location: "South Punjab",
    service: "Community Support",
    status: "Verified Impact",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=60",
  },
];

// Pre-computed array for star ratings to eliminate render allocation
const STAR_KEYS = [0, 1, 2, 3, 4];

// GPU-Accelerated Slide Variants
const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: '0%',
    opacity: 1,
  },
  exit: (dir) => ({
    x: dir < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

const HomeStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1));
  }, []);

  const handlePrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1));
  }, []);

  const handleThumbnailClick = useCallback((index) => {
    setCurrentIndex((prevIndex) => {
      setDirection(index > prevIndex ? 1 : -1);
      return index;
    });
  }, []);

  // Optimized Autoplay cycle with automatic cleanup
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [handleNext, isPaused]);

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="bg-slate-50 py-12 px-2 sm:px-4 lg:px-6 overflow-hidden relative">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 w-[350px] h-[350px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <GlobalHeading
          subtitle="Community Impact"
          title="Voices of Transformation"
          description="Discover how United Social Watch & Advocacy (USWA) is making a tangible difference in education, healthcare, and community empowerment."
          centered={true}
        />

        {/* Main Testimonial Card */}
        <div
          className="bg-white rounded-2xl shadow-xl mb-6 relative overflow-hidden border border-slate-200/80"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative min-h-[300px] sm:min-h-[260px] flex items-center justify-center overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentTestimonial.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 260, damping: 28 },
                  opacity: { duration: 0.25 },
                }}
                className="w-full py-6 px-4 sm:py-8 sm:px-8 transform-gpu"
              >
                <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-center mx-auto">
                  
                  {/* Left Column: Author Meta */}
                  <div className="lg:col-span-3 flex flex-col items-center text-center lg:items-start lg:text-left lg:flex-row lg:gap-4">
                    <div className="relative mb-3 lg:mb-0 shrink-0">
                      <img
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        className="w-20 h-20 rounded-full object-cover border-2 border-emerald-500 shadow-md"
                        loading="eager"
                      />
                      <div className="absolute bottom-0 right-0 w-7 h-7 bg-emerald-600 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                      </div>
                    </div>

                    <div className="flex flex-col items-center lg:items-start">
                      <h3 className="text-lg font-bold text-slate-900 mb-0.5">
                        {currentTestimonial.name}
                      </h3>
                      <p className="text-emerald-700 text-xs font-semibold mb-0.5">
                        {currentTestimonial.service}
                      </p>
                      <p className="text-slate-400 text-xs mb-2">
                        {currentTestimonial.location}
                      </p>

                      {/* Static Rendered Stars */}
                      <div className="flex gap-1">
                        {STAR_KEYS.map((key) => (
                          <Star
                            key={key}
                            className="w-4 h-4 text-amber-400 fill-amber-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Quote Content */}
                  <div className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                    <div className="w-9 h-9 bg-emerald-600 rounded-lg flex items-center justify-center mb-3 shadow-sm">
                      <Quote className="w-4 h-4 text-white" fill="currentColor" />
                    </div>

                    <blockquote className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4 italic font-light max-w-2xl">
                      "{currentTestimonial.text}"
                    </blockquote>

                    <div className="w-fit inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 uppercase tracking-wider text-[11px] font-semibold px-3 py-1 rounded-full border border-emerald-200/60">
                      <Check className="w-3 h-3 text-emerald-600" strokeWidth={2.5} />
                      {currentTestimonial.status}
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav Buttons */}
          <div className="flex justify-center gap-4 pb-4 pt-2">
            <button
              onClick={handlePrevious}
              className="w-9 h-9 text-slate-500 rounded-full flex items-center justify-center transition-all duration-200 hover:text-emerald-600 hover:bg-slate-100 active:scale-95 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
            </button>
            <button
              onClick={handleNext}
              className="w-9 h-9 text-slate-500 rounded-full flex items-center justify-center transition-all duration-200 hover:text-emerald-600 hover:bg-slate-100 active:scale-95 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Thumbnail Selector */}
        <div className="flex justify-center items-center gap-3 mb-4 flex-wrap mt-6">
          {TESTIMONIALS.map((testimonial, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={testimonial.id}
                onClick={() => handleThumbnailClick(index)}
                className={`flex flex-col items-center p-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white border-2 border-emerald-500 shadow-md scale-105'
                    : 'bg-white/80 border border-slate-200 hover:border-emerald-300 shadow-sm opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mb-1.5"
                  loading="lazy"
                />
                <p className="text-xs font-bold text-slate-900 text-center leading-none">
                  {testimonial.name}
                </p>
                <p className="text-[10px] text-emerald-700 font-medium text-center mt-1 leading-none">
                  {testimonial.service}
                </p>
              </button>
            );
          })}
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center gap-1.5">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? 'bg-emerald-600 w-6'
                  : 'bg-slate-300 hover:bg-slate-400 w-2'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(HomeStories);