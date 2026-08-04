import React, { useState, useEffect, useCallback, memo } from 'react';
import { Leaf, GraduationCap, HeartPulse, Scale, Users, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GlobalHeading from '../ui/GlobalHeading';

// Static objectives data extracted outside render scope
const OBJECTIVES = [
  {
    id: 1,
    icon: GraduationCap,
    title: 'Support for Girls Education',
    description: 'Establishing non-formal literacy schools and providing tuition support for girls in remote regions.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80',
  },
  {
    id: 2,
    icon: HeartPulse,
    title: 'Free Health Clinics',
    description: 'Running mobile medical camps and distribution drives to offer essential healthcare services.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
  },
  {
    id: 3,
    icon: Scale,
    title: 'Social & Human Rights Advocacy',
    description: 'Conducting awareness seminars on human rights, labor laws, and civic duties for local communities.',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80',
  },
  {
    id: 4,
    icon: Leaf,
    title: 'Climate & Environment Action',
    description: 'Organizing tree plantation drives and advocating for environment protection and hygiene.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
  },
  {
    id: 5,
    icon: Users,
    title: 'Mobilizing Youth Volunteers',
    description: 'Engaging, training, and empowering youth across Pakistan to become active change makers.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
  },
];

// GPU Transition Variants
const cardVariants = {
  initial: { opacity: 0, scale: 1.03 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] }
  },
  exit: { 
    opacity: 0, 
    scale: 0.98,
    transition: { duration: 0.25, ease: 'easeIn' }
  }
};

const HomeFeatures = () => {
  const [activeObjective, setActiveObjective] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setActiveObjective((prev) => (prev + 1) % OBJECTIVES.length);
  }, []);

  // Optimized autoplay cycle with pause handler
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, 4500);
    return () => clearInterval(interval);
  }, [handleNext, isPaused]);

  const activeObj = OBJECTIVES[activeObjective];
  const IconComponent = activeObj.icon;

  return (
    <section className="relative w-full bg-slate-50 py-6 lg:py-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <GlobalHeading
          subtitle="Why Join Us"
          title="Making a Tangible Difference"
          description="USWA is dedicated to social uplift, child literacy, community healthcare, and legal awareness without any discrimination across Pakistan."
          centered={true}
          compact={true}
        />

        {/* Main Interactive Container */}
        <div 
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left: Interactive Tab Buttons */}
          <div className="lg:col-span-5 space-y-2">
            {OBJECTIVES.map((obj, idx) => {
              const isActive = activeObjective === idx;
              return (
                <button
                  key={obj.id}
                  onMouseEnter={() => setActiveObjective(idx)}
                  onFocus={() => setActiveObjective(idx)}
                  onTouchStart={() => setActiveObjective(idx)}
                  className={`w-full text-left relative p-4 rounded-2xl transition-all duration-200 border cursor-pointer select-none ${
                    isActive
                      ? 'border-emerald-500 bg-white shadow-md shadow-emerald-500/5'
                      : 'border-slate-200/80 bg-white/60 hover:bg-white hover:border-slate-300 opacity-80'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <span className={`text-xl font-bold transition-colors ${isActive ? 'text-emerald-600' : 'text-slate-400'}`}>
                      0{obj.id}
                    </span>
                    <div className="flex-1">
                      <h3 className={`font-bold text-base transition-colors ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                        {obj.title}
                      </h3>
                      {/* Smooth Progress Line */}
                      <div className="h-0.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
                        {isActive && (
                          <motion.div 
                            layoutId="activeBar"
                            className="h-full bg-emerald-500"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Display Card */}
          <div className="lg:col-span-7">
            <div className="relative h-[420px] sm:h-[460px] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={activeObj.id}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute inset-0 w-full h-full flex flex-col justify-between p-8 sm:p-12 text-center"
                >
                  {/* Background Image with Dark Vignette */}
                  <img 
                    src={activeObj.image} 
                    alt={activeObj.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-950/30" />

                  {/* Icon Badge */}
                  <div className="relative z-10 flex justify-center pt-2">
                    <div className="w-16 h-16 bg-slate-900/80 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-md border border-emerald-500/40 text-emerald-400">
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="relative z-10 max-w-lg mx-auto">
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3 drop-shadow-md">
                      {activeObj.title}
                    </h3>
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-light mb-6 drop-shadow">
                      {activeObj.description}
                    </p>

                    <button className="inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 px-6 py-2.5 text-xs sm:text-sm bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-900/30 active:scale-95">
                      <span className="flex items-center gap-2">
                        Explore Our Work
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default memo(HomeFeatures);