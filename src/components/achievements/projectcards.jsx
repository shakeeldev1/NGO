import React, { useState, useEffect, useRef } from 'react';

const projectCards = [
  {
    id: "01",
    title: "Vocational Sewing Institutes",
    tag: "Women Empowerment",
    description: "Empowering young women and girls across rural Sindh by establishing fully-equipped, functional sewing centers to foster economic independence.",
    image: "https://images.pexels.com/photos/13159201/pexels-photo-13159201.jpeg",
    locations: ["Kathore Karachi", "Gambat Khairpur", "Gadap Town", "Larkana", "Kotdiji"]
  },
  {
    id: "02",
    title: "New School Openings",
    tag: "Education Access",
    description: "Constructing and activating structured primary classrooms in underserved areas including Karachi's Katchi Abadi and Khohra Village.",
    image: "https://images.pexels.com/photos/12714640/pexels-photo-12714640.jpeg",
    locations: ["Katchi Abadi", "Khohra Village"]
  },
  {
    id: "03",
    title: "Resource & Qaida Distribution",
    tag: "Literacy Support",
    description: "Distributing free academic textbooks, school desks, and Noorani Qaidas for basic literacy and Deeni Taleem programs.",
    image: "https://images.pexels.com/photos/27976845/pexels-photo-27976845.jpeg",
    locations: ["Regional Centers", "Rural Outposts"]
  },
  {
    id: "04",
    title: "Advocacy & Social Workshops",
    tag: "Community Outreach",
    description: "Leading grassroots awareness campaigns focused on reducing out-of-school rates and addressing critical socio-economic barriers.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80", // CHANGED: replaced unreliable gstatic cache thumbnail (expires/403s) with a stable hosted image
    locations: ["Upcountry Sub-Offices"]
  },
  {
    id: "05",
    title: "Upcoming Center Expansion",
    tag: "Future Vision",
    description: "Expanding our operational presence with strategic upcoming center rollouts to serve marginalized regional communities.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    locations: ["Dhabeji District Thatta"]
  }
];

const ImpactAndGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const totalSlides = projectCards.length;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
  };

  return (
    <section className="relative bg-slate-50 text-slate-800 py-12 px-4 overflow-hidden">
      {/* Background Soft Glow Accents (Matching Hero #04251a and #34ae85) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-emerald-50/60 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto z-10">

        {/* --- SECTION 1: KEY STATS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            {
              metric: "06+",
              label: "Sewing Institutes",
              sub: "Vocational Independence",
              icon: (
                <svg className="w-6 h-6 text-[#34ae85]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              )
            },
            {
              metric: "02+",
              label: "New School Openings",
              sub: "Katchi Abadi & Khohra",
              icon: (
                <svg className="w-6 h-6 text-[#34ae85]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              )
            },
            {
              metric: "100%",
              label: "Free Books & Supplies",
              sub: "Zero Student Cost",
              icon: (
                <svg className="w-6 h-6 text-[#34ae85]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              )
            },
            {
              metric: "Active",
              label: "Advocacy Programs",
              sub: "Grassroots Outreach",
              icon: (
                <svg className="w-6 h-6 text-[#34ae85]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c.41 0 .789.21 1.01.557l1.158 1.833m0 0a1.76 1.76 0 013.417-.592l2.147 6.15M11 8.39V12" />
                </svg>
              )
            }
          ].map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-[#34ae85]/40 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                  {stat.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-100/70 text-[#04251a]">
                  Verified
                </span>
              </div>

              <div className="text-4xl lg:text-5xl font-extrabold text-[#04251a] tracking-tight mb-1">
                {stat.metric}
              </div>
              <div className="text-sm font-bold text-slate-800 mb-0.5">
                {stat.label}
              </div>
              <div className="text-xs text-[#34ae85] font-semibold">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* --- SECTION 2: GALLERY TITLE --- */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest bg-emerald-100/80 text-[#04251a] px-3.5 py-1.5 rounded-full border border-emerald-200 inline-block mb-3">
            Field Interventions & Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#04251a] tracking-tight">
            Our Initiatives in Action
          </h2>
          <div className="w-16 h-1 bg-[#34ae85] mx-auto mt-3 rounded-full"></div>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Browse through our operational field centers, educational initiatives, and ongoing community development programs across Sindh.
          </p>
        </div>

        {/* --- SECTION 3: 3D COVERFLOW SWIPER --- */}
        <div 
          className="relative py-6 px-2 sm:px-4 min-h-[560px] flex flex-col items-center justify-center select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative w-full max-w-5xl h-[520px] flex items-center justify-center overflow-hidden">
            {projectCards.map((card, index) => {
              let offset = index - activeIndex;
              if (offset < -Math.floor(totalSlides / 2)) offset += totalSlides;
              if (offset > Math.floor(totalSlides / 2)) offset -= totalSlides;

              const isCurrent = offset === 0;
              const absOffset = Math.abs(offset);
              
              if (absOffset > 2) return null;

              const translateX = offset * 280;
              const scale = isCurrent ? 1 : 0.84 - absOffset * 0.05;
              const opacity = isCurrent ? 1 : 0.65 - absOffset * 0.2;
              const rotateY = offset * -15;
              const zIndex = 20 - absOffset * 5;

              return (
                <div
                  key={card.id}
                  onClick={() => setActiveIndex(index)}
                  style={{
                    transform: `perspective(1000px) translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity: opacity,
                    zIndex: zIndex,
                  }}
                  className={`absolute w-[300px] sm:w-[370px] h-[500px] rounded-2xl overflow-hidden bg-white border flex flex-col justify-between transition-all duration-700 ease-out cursor-pointer group ${
                    isCurrent 
                      ? 'shadow-2xl border-emerald-300 ring-4 ring-[#34ae85]/20' 
                      : 'shadow-md border-slate-200 filter blur-[0.5px]'
                  }`}
                >
                  {/* Card Image Header */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                    
                    <span className="absolute top-4 left-4 bg-[#34ae85] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md shadow">
                      {card.tag}
                    </span>

                    <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#04251a] text-[10px] font-bold font-mono px-2.5 py-1 rounded-md shadow-sm border border-slate-200">
                      {card.id} / {String(totalSlides).padStart(2, '0')} {/* CHANGED: was hardcoded "/ 05", now derives from totalSlides */}
                    </span>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#04251a] tracking-tight group-hover:text-[#34ae85] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 font-normal">
                        {card.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        <svg className="w-3.5 h-3.5 text-[#34ae85]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Active Locations:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {card.locations.map((loc, i) => (
                          <span key={i} className="text-[10px] bg-emerald-50 text-[#04251a] border border-emerald-200 px-2.5 py-0.5 rounded-md font-medium">
                            {loc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Nav Controls */}
          <button 
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 text-slate-700 bg-white border border-slate-200 p-3.5 rounded-full shadow-lg hover:bg-[#34ae85] hover:text-white transition-all focus:outline-none flex items-center justify-center hover:scale-110 active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
          </button>
          
          <button 
            onClick={handleNext}
            aria-label="Next Slide"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 text-slate-700 bg-white border border-slate-200 p-3.5 rounded-full shadow-lg hover:bg-[#34ae85] hover:text-white transition-all focus:outline-none flex items-center justify-center hover:scale-110 active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-4 z-30">
            {projectCards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx 
                    ? 'w-8 bg-[#34ae85]' 
                    : 'w-2.5 bg-slate-300 hover:bg-emerald-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactAndGallery;