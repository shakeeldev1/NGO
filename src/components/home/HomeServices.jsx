import React, { useState, useMemo, memo } from 'react';
import { motion } from 'framer-motion';
import GlobalHeading from '../ui/GlobalHeading';
import {
  HeartPulse,
  GraduationCap,
  ClipboardCheck,
  Users,
  Handshake,
  Megaphone,
  Heart,
  Droplet
} from 'lucide-react';

const ServiceCard = memo(({ service, side, activeId, onHover, onLeave }) => {
  const Icon = service.icon;
  const isLeft = side === 'left';
  const accentHex = isLeft ? '#0D9488' : '#065F46';
  const isActive = activeId === service.id;

  return (
    <div
      data-aos={service.aos}
      data-aos-duration="700"
      onMouseEnter={() => onHover(service.id)}
      onMouseLeave={onLeave}
      className={`
        group relative w-full sm:w-full lg:w-[380px] min-h-[140px]
        rounded-xl overflow-hidden p-6 cursor-pointer
        transition-all duration-500 ease-in-out border bg-slate-900
        ${isActive 
          ? 'border-[#065F46] shadow-2xl -translate-y-1 bg-[#065F46]' 
          : 'border-[#065F46]/15 shadow-md hover:-translate-y-1 hover:border-[#065F46]/40 hover:shadow-xl'
        }
      `}
    >
      {/* Background Image (Fades out smoothly when hovered as it animates to center) */}
      <div 
        className={`absolute inset-0 z-0 overflow-hidden transition-opacity duration-500 ease-in-out ${
          isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {!isActive && (
          <>
            <motion.img
              layoutId={`service-bg-${service.id}`}
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            />
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-900/60 transition-opacity duration-300 group-hover:opacity-85" />
          </>
        )}
      </div>

      {/* Accent Indicator Bar */}
      <span
        aria-hidden="true"
        className="absolute top-0 bottom-0 left-0 w-[4px] z-20 transition-all duration-300 group-hover:w-[6px]"
        style={{ backgroundColor: accentHex }}
      />

      {/* Card Text Content */}
      <div className="relative z-10 flex items-start gap-4">
        <div
          className={`
            flex-shrink-0 grid place-items-center w-11 h-11 rounded-full border backdrop-blur-md transition-all duration-500
            ${isActive ? 'bg-white/10 border-white/30 text-white' : 'bg-white/20 border-white/40 text-white'}
          `}
        >
          {Icon && (
            <Icon
              size={19}
              strokeWidth={2}
              className="text-white drop-shadow-sm"
            />
          )}
        </div>

        <div>
          <h3 className="font-['Fraunces',_Georgia,_serif] text-[18px] font-semibold text-white mb-1 tracking-tight drop-shadow-sm">
            {service.title}
          </h3>
          <p className="text-gray-200 text-[13.5px] leading-relaxed drop-shadow-sm">
            {service.desc}
          </p>
        </div>
      </div>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

// Central Medallion receiving background image from card
const Medallion = memo(({ activeService }) => {
  return (
    <div data-aos="zoom-in" className="lg:col-span-4 px-3 flex justify-center my-10 lg:my-0">
      <div className="relative w-[270px] h-[270px] md:w-[310px] md:h-[310px]">
        {/* Decorative Rosette Frame */}
        <svg
          viewBox="0 0 310 310"
          className="absolute inset-0 w-full h-full text-[#0D9488]/70 pointer-events-none z-10"
          aria-hidden="true"
        >
          <circle cx="155" cy="155" r="150" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="1.5 7" />
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i / 16) * 2 * Math.PI;
            const x1 = 155 + 141 * Math.cos(angle);
            const y1 = 155 + 141 * Math.sin(angle);
            const x2 = 155 + 152 * Math.cos(angle);
            const y2 = 155 + 152 * Math.sin(angle);
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.4" />
            );
          })}
        </svg>

        {/* Center Frame Container */}
        <div
          className="absolute inset-[17px] overflow-hidden shadow-2xl ring-4 ring-[#F8FAF8] bg-[#065F46]/10"
          style={{
            clipPath:
              'polygon(29% 2%, 71% 2%, 98% 29%, 98% 71%, 71% 98%, 29% 98%, 2% 71%, 2% 29%)'
          }}
        >
          {activeService && (
            <motion.img
              key={activeService.id}
              layoutId={`service-bg-${activeService.id}`}
              src={activeService.image}
              alt={activeService.title}
              className="w-full h-full object-cover"
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            />
          )}
        </div>

        {/* Dynamic Label Badge (icon + title, subtle animation) */}
        {activeService?.title && (
          <motion.div
            initial={{ y: 8, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-30 bg-gradient-to-r from-[#065F46] to-[#0D9488] text-white text-sm font-semibold px-3 py-2 rounded-full shadow-2xl flex items-center gap-2 border border-white/20 w-56 overflow-hidden justify-center"
          >
            {activeService.icon && (
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-white">
                {React.isValidElement(activeService.icon)
                  ? React.cloneElement(activeService.icon, { size: 14, strokeWidth: 1.6 })
                  : React.createElement(activeService.icon, { size: 14, strokeWidth: 1.6 })}
              </span>
            )}
            <span className="leading-none truncate">{activeService.title}</span>
          </motion.div>
        )}

        {/* Decorative Accent (bottom only) */}
        <span
          aria-hidden="true"
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-[2px] z-20"
          style={{ backgroundColor: '#065F46' }}
        />
      </div>
    </div>
  );
});

Medallion.displayName = 'Medallion';

const HomeServices = () => {
  const leftServices = useMemo(() => [
    {
      id: 'health',
      title: 'Health Care',
      desc: 'Mobile dispensaries, medical camps with Indus Hospital, and TCV vaccination drives.',
      icon: HeartPulse,
      aos: 'fade-right',
      image: 'https://media.istockphoto.com/id/2251185596/photo/businessman-hand-giving-and-showing-a-wooden-blocks-which-symbolizing-medical-protection.webp?a=1&b=1&s=612x612&w=0&k=20&c=M2CyaA2waUg5Ip5Bkkaxkxfb_Cfdk4Z7NtrMInQ3qmA='
    },
    {
      id: 'education',
      title: 'Education',
      desc: 'Community schools in Katchi Abadi, free book distribution, and Deeni Taleem classes.',
      icon: GraduationCap,
      aos: 'fade-right',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'survey',
      title: 'Surveys & Monitoring',
      desc: 'Community field surveys, UNICEF supportive monitoring, and impact evaluations.',
      icon: ClipboardCheck,
      aos: 'fade-right',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80'
    },
    
  ], []);

  const rightServices = useMemo(() => [
    {
      id: 'consultancy',
      title: 'Consultancy',
      desc: 'Strategic advisory, local government networking, and institutional development.',
      icon: Handshake,
      aos: 'fade-left',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'awareness',
      title: 'Awareness Sessions',
      desc: 'Grassroots campaigns on out-of-school children, gender rights, and climate action.',
      icon: Megaphone,
      aos: 'fade-left',
      image: 'https://images.unsplash.com/photo-1608535002897-27b2aa592456?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG5nb3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 'donations',
      title: 'Donations & Relief',
      desc: 'Charity interventions, heatwave relief camps, and essential food distributions.',
      icon: Heart,
      aos: 'fade-left',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80'
    },
    
  ], []);

  // Default active card is set to the last card
  const DEFAULT_ID = rightServices[rightServices.length - 1].id;
  const [activeId, setActiveId] = useState(DEFAULT_ID);

  const allServices = useMemo(() => [...leftServices, ...rightServices], [leftServices, rightServices]);

  const activeService = useMemo(() => {
    return allServices.find((s) => s.id === activeId) || rightServices[rightServices.length - 1];
  }, [allServices, activeId, rightServices]);

  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto mb-16">
        <GlobalHeading
          subtitle="Our Impact"
          title="Core Focus Areas"
          description={
            "Eight programs, one neighborhood. United Social Welfare Association works across health, education, and relief to strengthen Karachi's Katchi Abadi communities."
          }
        />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto">
        <div className="lg:col-span-4 flex flex-col gap-4 items-center lg:items-stretch">
          {leftServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              side="left"
              activeId={activeId}
              onHover={setActiveId}
              onLeave={() => setActiveId(DEFAULT_ID)}
            />
          ))}
        </div>

        <Medallion activeService={activeService} />

        <div className="lg:col-span-4 flex flex-col gap-4 items-center lg:items-stretch">
          {rightServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              side="right"
              activeId={activeId}
              onHover={setActiveId}
              onLeave={() => setActiveId(DEFAULT_ID)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(HomeServices);