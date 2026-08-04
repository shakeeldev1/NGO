import React from 'react';
import { Link } from 'react-router-dom'; // CHANGED: added for route-based navigation

const CallToActionSection = () => {
  return (
    <section className="w-full mt-20 bg-[#0E815E] text-white py-16 sm:py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      {/* Soft ambient background glows for subtle matte depth */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* CHANGED: added diagonal glossy sheen overlay across the whole section */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute -inset-full top-0 h-[200%] w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Sub-badge */}
        <span className="text-xs font-bold uppercase tracking-widest bg-white/10 text-emerald-100 px-4 py-1.5 rounded-full border border-white/20 mb-6 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]"> {/* CHANGED: added inner glossy highlight */}
          Get Involved
        </span>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight max-w-3xl drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]"> {/* CHANGED: soft glow behind text */}
          <span className="bg-gradient-to-b from-white to-emerald-100 bg-clip-text text-transparent"> {/* CHANGED: subtle gradient text effect */}
            Ready to Partner with Us and Drive Sustainable Impact?
          </span>
        </h2>

        {/* Supporting Text */}
        <p className="text-white/90 text-base sm:text-lg md:text-xl font-light max-w-2xl mb-10 leading-relaxed">
          Reach out to collaborate on our initiatives, support grassroots education, or discover how we are transforming local communities.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Button 1: Contact Us (in-page anchor, kept as <a>) */}
          
           <a href="/contact"
            className="relative overflow-hidden w-full sm:w-auto px-8 py-4 bg-white text-[#0E815E] font-bold rounded-full shadow-lg hover:bg-emerald-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-base text-center group" // CHANGED: added relative/overflow-hidden/group for shine sweep
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none"></span> {/* CHANGED: glossy shine sweep on hover */}
            <span className="relative">Contact Us</span>
          </a>

          {/* Button 2: Know About Us More (route link) */}
          <Link
            to="/about"
            className="relative overflow-hidden w-full sm:w-auto px-8 py-4 bg-transparent text-white font-bold rounded-full border-2 border-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-base text-center group" // CHANGED: <a> -> Link, added relative/overflow-hidden/group for shine sweep
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"></span> {/* CHANGED: glossy shine sweep on hover */}
            <span className="relative">Know About Us More</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;