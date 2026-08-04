import React, { useState, useEffect, useRef } from 'react';
import { Leaf, GraduationCap, HeartPulse, Scale, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import GlobalHeading from '../ui/GlobalHeading';

const HomeFeatures = () => {
  const [activeObjective, setActiveObjective] = useState(0);
  const sectionRef = useRef(null);

  const objectives = [
    {
      id: 1,
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Support for Girls Education',
      description: 'Establishing non-formal literacy schools and providing tuition support for girls in remote regions.',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80',
    },
    {
      id: 2,
      icon: <HeartPulse className="w-6 h-6" />,
      title: 'Free Health Clinics',
      description: 'Running mobile medical camps and distribution drives to offer essential healthcare services.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    },
    {
      id: 3,
      icon: <Scale className="w-6 h-6" />,
      title: 'Social & Human Rights Advocacy',
      description: 'Conducting awareness seminars on human rights, labor laws, and civic duties for local communities.',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80',
    },
    {
      id: 4,
      icon: <Leaf className="w-6 h-6" />,
      title: 'Climate & Environment Action',
      description: 'Organizing tree plantation drives and advocating for environment protection and hygiene.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    },
    {
      id: 5,
      icon: <Users className="w-6 h-6" />,
      title: 'Mobilizing Youth Volunteers',
      description: 'Engaging, training, and empowering youth across Pakistan to become active change makers.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting,
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-progress
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveObjective((prev) => (prev + 1) % objectives.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [objectives.length]);

  return (
    <section ref={sectionRef} className="relative w-full bg-slate-50 py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <GlobalHeading
          subtitle="Why Join Us"
          title="Making a Tangible Difference"
          description="USWA is dedicated to social uplift, child literacy, community healthcare, and legal awareness without any discrimination across Pakistan."
          centered={true}
        />

        {/* Main Interactive Area */}
        <div className="grid lg:grid-cols-12 gap-16 items-start mt-16">
          {/* Left: Navigation Steps */}
          <div className="lg:col-span-5 space-y-4">
            {objectives.map((obj, idx) => (
              <button
                key={obj.id}
                onMouseEnter={() => setActiveObjective(idx)}
                onClick={() => setActiveObjective(idx)}
                className={`w-full text-left group relative p-6 rounded-2xl transition-all duration-300 border ${
                  activeObjective === idx
                    ? 'border-emerald-500 bg-white shadow-lg shadow-emerald-500/10'
                    : 'border-slate-200 bg-slate-50 hover:border-emerald-300 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="flex items-center gap-6">
                  <span className={`text-2xl font-bold transition-colors ${activeObjective === idx ? 'text-emerald-600' : 'text-slate-400'}`}>
                    0{obj.id}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-slate-900 font-bold text-lg mb-1 group-hover:text-emerald-600 transition-colors">
                      {obj.title}
                    </h3>
                    <div className={`h-0.5 bg-emerald-500 transition-all duration-700 ${activeObjective === idx ? 'w-full' : 'w-0'}`} />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Detailed Content Display */}
          <div className="lg:col-span-7 sticky top-24">
            <div className="relative h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-200 bg-slate-900">
              {objectives.map((obj, idx) => (
                <motion.div
                  key={obj.id}
                  initial={false}
                  animate={{
                    opacity: activeObjective === idx ? 1 : 0,
                    scale: activeObjective === idx ? 1 : 1.05,
                    zIndex: activeObjective === idx ? 10 : 0,
                  }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <img src={obj.image} loading="eager" decoding="sync" alt={obj.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="relative z-10 flex items-center justify-center mb-8 pt-12">
                    <div className="w-20 h-20 bg-slate-900/90 rounded-3xl flex items-center justify-center shadow-lg backdrop-blur-md border border-emerald-500/50">
                      <div className="text-emerald-500">{obj.icon}</div>
                    </div>
                  </div>
                  <h3 className="relative z-10 text-3xl lg:text-4xl font-bold tracking-tight text-white mb-6 text-center drop-shadow-lg">
                    {obj.title}
                  </h3>
                  <p className="relative z-10 text-slate-100 text-lg leading-relaxed font-light mb-10 max-w-xl mx-auto text-center drop-shadow-md">
                    {obj.description}
                  </p>
                  <div className="relative z-10 flex items-center justify-center gap-8">
                    <button className="relative inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 cursor-pointer overflow-hidden shadow-lg shadow-emerald-500/20 focus:outline-none px-6 py-2.5 text-[13px] bg-emerald-600 text-white hover:bg-emerald-700 group">
                      <span className="relative z-10 flex items-center gap-2">
                        Explore Our Work
                        <ArrowRight className="w-4 h-4" />
                      </span>
                      <span className="absolute inset-0 -translate-x-full bg-white/30 group-hover:translate-x-full transition-transform duration-700 ease-in-out rotate-12"></span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;