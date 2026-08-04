import React, { useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

/* ------------------------------------------------------------------ */
/* Accent style mappings (Light Theme Only)                           */
/* ------------------------------------------------------------------ */
const ACCENT = {
  ring: 'rgba(16,185,129,0.45)',
  glow: 'rgba(16,185,129,0.08)',
  orbit: 'border-emerald-300/30 group-hover:border-emerald-400/50',
  iconShadow: 'group-hover:shadow-[0_0_28px_rgba(16,185,129,0.25)]',
  nameTint: 'group-hover:text-emerald-600',
  categoryBg: 'bg-emerald-50 text-emerald-600 border-emerald-200/60',
  dot: 'bg-emerald-400',
  shadow: 'hover:shadow-[0_20px_50px_rgba(16,185,129,0.10)]',
};

const GlobalCard = ({
  icon,
  iconUrl,
  name,
  short,
  category,
  index = 0,
  flatIcon = false,
  className = '',
}) => {
  const cardRef = useRef(null);
  const isImageIcon = typeof icon === 'string' && /^(data:image|https?:\/\/)/i.test(icon);

  /* ---- Spring-physics mouse tracking ---- */
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const cx = useMotionValue(0);
  const cy = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 300, damping: 35 });
  const sy = useSpring(my, { stiffness: 300, damping: 35 });
  const rotX = useTransform(sy, [0, 1], [4, -4]);
  const rotY = useTransform(sx, [0, 1], [-4, 4]);

  const onMove = useCallback(
    (e) => {
      const r = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;

      mx.set(x / r.width);
      my.set(y / r.height);
      cx.set(x);
      cy.set(y);
    },
    [mx, my, cx, cy]
  );

  const onLeave = useCallback(() => {
    mx.set(0.5);
    my.set(0.5);
  }, [mx, my]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 22, scale: 0.96 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          delay: index * 0.07,
          duration: 0.55,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      }}
      viewport={{ once: true, margin: '-30px' }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX: rotX,
        rotateY: rotY,
        transformPerspective: 700,
        '--cx': useTransform(cx, (v) => `${v}px`),
        '--cy': useTransform(cy, (v) => `${v}px`),
      }}
      className={`group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border p-7 sm:p-8 min-h-[220px] cursor-pointer will-change-transform transition-all duration-300 ease-out bg-gradient-to-b from-white to-slate-50/70 border-slate-200/70 shadow-[0_1px_4px_rgba(15,23,42,0.03),0_8px_24px_rgba(15,23,42,0.05)] ${ACCENT.shadow} ${className}`}
    >
      {/* ---- Noise grain ---- */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ---- Cursor spotlight ---- */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(320px circle at var(--cx) var(--cy), ${ACCENT.glow}, transparent 70%)`,
        }}
      />

      {/* ---- Neon border track ---- */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(200px circle at var(--cx) var(--cy), ${ACCENT.ring}, transparent 65%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />

      {/* ================================================================ */}
      {/*  ICON STAGE                                                      */}
      {/* ================================================================ */}
      <div className="relative z-10 mb-5 flex items-center justify-center">
        {/* Decorative orbit ring */}
        <div
          className={`absolute h-24 w-24 rounded-full border transition-all duration-500 scale-90 group-hover:scale-100 opacity-60 group-hover:opacity-100 ${ACCENT.orbit}`}
        />

        {/* Icon container */}
        <motion.div
          whileHover={{ scale: flatIcon ? 1 : 1.1, rotate: flatIcon ? 0 : 3 }}
          transition={{ type: 'spring', stiffness: 350, damping: 18 }}
          className={`relative flex items-center justify-center transition-all duration-300 ${
            flatIcon
              ? 'h-12 w-12 rounded-none border-0 bg-transparent shadow-none'
              : `h-16 w-16 rounded-2xl border backdrop-blur-sm bg-white border-slate-200/70 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ${ACCENT.iconShadow}`
          }`}
        >
          {iconUrl || isImageIcon ? (
            <img
              src={iconUrl || icon}
              alt={name || 'Service icon'}
              className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          ) : icon ? (
            <div className="transition-all duration-300 text-slate-500 group-hover:text-slate-800">
              {React.isValidElement(icon)
                ? React.cloneElement(icon, {
                    size: 26,
                    strokeWidth: 1.6,
                  })
                : icon}
            </div>
          ) : (
            /* Fallback placeholder */
            <div className="h-6 w-6 rounded-md bg-slate-200" />
          )}
        </motion.div>

        {/* Floating accent dot */}
        {!flatIcon && (
          <span
            className={`absolute h-1.5 w-1.5 rounded-full top-0 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse ${ACCENT.dot}`}
          />
        )}
      </div>

      {/* ================================================================ */}
      {/*  TEXT CONTENT                                                    */}
      {/* ================================================================ */}
      <div className="relative z-10 text-center space-y-2">
        {name && (
          <h3
            className={`text-lg font-bold tracking-tight leading-snug transition-colors duration-300 text-slate-900 ${ACCENT.nameTint}`}
          >
            {name}
          </h3>
        )}

        {short && (
          <p className="text-sm font-medium leading-6 text-slate-600 transition-colors duration-300">
            {short}
          </p>
        )}

        {category && (
          <p className="text-sm leading-6 transition-colors duration-300 text-slate-400">
            {category}
          </p>
        )}
      </div>

      {/* ---- Bottom accent line ---- */}
      <div
        className="absolute bottom-0 left-6 right-6 h-px origin-center scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(16,185,129,0.5), transparent)`,
        }}
      />

      {/* ---- Subtle corner shine ---- */}
      <div
        className="absolute -top-12 -right-12 h-24 w-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl pointer-events-none"
        style={{ backgroundColor: 'rgba(16,185,129,0.08)' }}
      />

      {/* ---- Arrow CTA ---- */}
      <div className="absolute top-4 right-4 z-10">
        <span
          className="inline-flex items-center justify-center w-6 h-6 text-emerald-600 transition-transform duration-200"
          title="Open details"
          aria-hidden="false"
        >
          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          <span className="sr-only">Opens details page</span>
        </span>
      </div>
    </motion.div>
  );
};

export default GlobalCard;