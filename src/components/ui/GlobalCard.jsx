import React, { useCallback, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/* ------------------------------------------------------------------ */
/* Colour tokens per accent                                            */
/* ------------------------------------------------------------------ */
const accents = {
  emerald: {
    light: {
      ring: 'rgba(16,185,129,0.45)',
      glow: 'rgba(16,185,129,0.08)',
      orbit: 'border-emerald-300/30 group-hover:border-emerald-400/50',
      iconShadow: 'group-hover:shadow-[0_0_28px_rgba(16,185,129,0.25)]',
      nameTint: 'group-hover:text-emerald-600',
      categoryBg: 'bg-emerald-50 text-emerald-600 border-emerald-200/60',
      dot: 'bg-emerald-400',
      shadow: 'hover:shadow-[0_20px_50px_rgba(16,185,129,0.10)]',
    },
    dark: {
      ring: 'rgba(16,185,129,0.50)',
      glow: 'rgba(16,185,129,0.10)',
      orbit: 'border-emerald-500/10 group-hover:border-emerald-400/30',
      iconShadow: 'group-hover:shadow-[0_0_32px_rgba(16,185,129,0.30)]',
      nameTint: 'group-hover:text-emerald-400',
      categoryBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      dot: 'bg-emerald-400',
      shadow: 'hover:shadow-[0_20px_60px_rgba(16,185,129,0.12)]',
    },
  },
};

const GlobalCard = ({
  icon,
  iconUrl,
  name,
  short,
  category,
  theme = 'light',
  index = 0,
  accentColor = 'emerald',
  flatIcon = false,
  className = '',
}) => {
  const isDark = theme === 'dark';
  const a = accents.emerald[isDark ? 'dark' : 'light'];
  const cardRef = useRef(null);
  const isImageIcon = typeof icon === 'string' && /^(data:image|https?:\/\/)/i.test(icon);

  /* ---- spring-physics mouse tracking ---- */
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 300, damping: 35 });
  const sy = useSpring(my, { stiffness: 300, damping: 35 });
  const rotX = useTransform(sy, [0, 1], [4, -4]);
  const rotY = useTransform(sx, [0, 1], [-4, 4]);

  const [cur, setCur] = useState({ x: 0, y: 0 });

  const onMove = useCallback(
    (e) => {
      const r = e.currentTarget.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width);
      my.set((e.clientY - r.top) / r.height);
      setCur({ x: e.clientX - r.left, y: e.clientY - r.top });
    },
    [mx, my],
  );

  const onLeave = useCallback(() => {
    mx.set(0.5);
    my.set(0.5);
  }, [mx, my]);

  /* ---- base theme tokens ---- */
  const base = isDark
    ? {
        card: 'bg-gradient-to-b from-[#0c0a24]/95 to-[#06041a]/95 border-white/[0.06]',
        shadow: 'shadow-[0_2px_24px_rgba(0,0,0,0.55)]',
        name: 'text-white',
        category: 'text-slate-500',
      }
    : {
        card: 'bg-gradient-to-b from-white to-slate-50/70 border-slate-200/70',
        shadow: 'shadow-[0_1px_4px_rgba(15,23,42,0.03),0_8px_24px_rgba(15,23,42,0.05)]',
        name: 'text-slate-900',
        category: 'text-slate-400',
      };

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
        '--cx': `${cur.x}px`,
        '--cy': `${cur.y}px`,
      }}
      className={`group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border p-7 sm:p-8 min-h-[220px] cursor-pointer will-change-transform transition-all duration-300 ease-out ${base.card} ${base.shadow} ${a.shadow} ${className}`}
    >
      {/* ---- Noise grain ---- */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ---- Dark-mode grid ---- */}
      {isDark && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_40%,transparent_100%)] opacity-40 pointer-events-none" />
      )}

      {/* ---- Cursor spotlight ---- */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(320px circle at var(--cx) var(--cy), ${a.glow}, transparent 70%)`,
        }}
      />

      {/* ---- Neon border track ---- */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(200px circle at var(--cx) var(--cy), ${a.ring}, transparent 65%)`,
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
          className={`absolute h-24 w-24 rounded-full border transition-all duration-500 scale-90 group-hover:scale-100 opacity-60 group-hover:opacity-100 ${a.orbit}`}
        />

        {/* Icon container */}
        <motion.div
          whileHover={{ scale: flatIcon ? 1 : 1.1, rotate: flatIcon ? 0 : 3 }}
          transition={{ type: 'spring', stiffness: 350, damping: 18 }}
          className={`relative flex items-center justify-center transition-all duration-300 ${
            flatIcon 
              ? 'h-12 w-12 rounded-none border-0 bg-transparent shadow-none' 
              : `h-16 w-16 rounded-2xl border backdrop-blur-sm ${
                  isDark
                    ? 'bg-slate-900/90 border-white/10 shadow-[0_8px_24px_rgba(15,23,42,0.45)]'
                    : 'bg-white border-slate-200/70 shadow-[0_2px_8px_rgba(0,0,0,0.04)]'
                } ${a.iconShadow}`
          }`}
        >
          {/* Render either a React node icon or an image URL */}
          {iconUrl || isImageIcon ? (
            <img
              src={iconUrl || icon}
              alt={name || 'Service icon'}
              className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110"
              style={isDark ? { filter: 'brightness(0) invert(1)' } : undefined}
            />
          ) : icon ? (
            <div
              className={`transition-all duration-300 ${
                isDark ? 'text-white/90 group-hover:text-white' : 'text-slate-500 group-hover:text-slate-800'
              }`}
            >
              {React.isValidElement(icon)
                ? React.cloneElement(icon, {
                    size: 26,
                    strokeWidth: 1.6,
                  })
                : icon}
            </div>
          ) : (
            /* Fallback placeholder */
            <div
              className={`h-6 w-6 rounded-md ${isDark ? 'bg-white/10' : 'bg-slate-200'}`}
            />
          )}
        </motion.div>

        {/* Floating accent dot */}
        {!flatIcon && (
          <span
            className={`absolute h-1.5 w-1.5 rounded-full top-0 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse ${a.dot}`}
          />
        )}
      </div>

      {/* ================================================================ */}
      {/*  TEXT CONTENT                                                    */}
      {/* ================================================================ */}
      <div className="relative z-10 text-center space-y-2">
        {name && (
          <h3
            className={`text-lg font-bold tracking-tight leading-snug transition-colors duration-300 ${base.name} ${a.nameTint}`}
          >
            {name}
          </h3>
        )}

        {short && (
          <p className="text-sm font-medium leading-6 text-slate-600 transition-colors duration-300 dark:text-slate-300">
            {short}
          </p>
        )}

        {category && (
          <p className={`text-sm leading-6 transition-colors duration-300 ${base.category}`}>
            {category}
          </p>
        )}
      </div>

      {/* ---- Bottom accent line ---- */}
      <div
        className="absolute bottom-0 left-6 right-6 h-px origin-center scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${a.ring.replace(/[\d.]+\)$/, '0.5)')}, transparent)`,
        }}
      />

      {/* ---- Subtle corner shine ---- */}
      <div
        className="absolute -top-12 -right-12 h-24 w-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl pointer-events-none"
        style={{ backgroundColor: a.ring.replace(/[\d.]+\)$/, '0.08)') }}
      />
    </motion.div>
  );
};

export default GlobalCard;