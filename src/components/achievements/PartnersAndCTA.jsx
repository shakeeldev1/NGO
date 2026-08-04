import React from 'react';
import { User, Heart, Handshake, Users, Phone, Building2, Globe, ShieldCheck } from 'lucide-react';

const PartnersAndCTA = () => {

  const partners = [
    {
      id: 1,
      content: (
        <span className="text-3xl font-black text-[#1C9AD6] tracking-tighter flex items-center gap-1 select-none">
          unicef
          <span className="w-3.5 h-3.5 border-2 border-[#1C9AD6] rounded-full flex items-center justify-center text-[8px] font-bold">
            ✓
          </span>
        </span>
      ),
    },
    {
      id: 2,
      content: (
        <div className="flex flex-col items-center justify-center text-center select-none">
          <div className="w-8 h-8 bg-[#006837] rounded flex items-center justify-center text-amber-400 font-bold text-[11px] mb-1 shadow-sm">
            SEF
          </div>
          <span className="text-[12px] font-bold text-gray-800 leading-tight">
            Sindh Education Foundation
          </span>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="flex items-center justify-center gap-2 px-2 select-none">
          <div className="w-9 h-9 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center text-[9px] shrink-0 border border-amber-400">
            Govt
          </div>
          <span className="text-[12px] font-bold text-gray-800 leading-tight text-left">
            Government<br />of Sindh
          </span>
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="flex items-center justify-center gap-2 px-2 select-none">
          <svg className="w-9 h-10 text-red-600 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
          </svg>
          <span className="text-[12px] font-extrabold text-gray-800 tracking-tighter leading-none text-left">
            HUSSAINI<br />
            <span className="text-[10px] font-bold text-gray-500 tracking-normal">BLOOD BANK</span>
          </span>
        </div>
      ),
    },
    {
      id: 5,
      content: (
        <div className="flex flex-col items-center justify-center text-center select-none">
          <Handshake className="w-7 h-7 text-slate-800 mb-1 stroke-[1.75]" />
          <span className="text-[12px] font-bold text-gray-800 tracking-wide">
            CSR PARTNERS
          </span>
        </div>
      ),
    },
    {
      id: 6,
      content: (
        <div className="flex items-center justify-center gap-2 px-2 select-none">
          <div className="w-8 h-8 border-2 border-[#0284c7] rounded-md flex items-center justify-center text-[#0284c7] shrink-0">
            <Building2 className="w-6 h-6" />
          </div>
          <span className="text-[12px] font-bold text-gray-800 leading-tight text-left">
            Local Hospitals<br />& Clinics
          </span>
        </div>
      ),
    },
    {
      id: 7,
      content: (
        <div className="flex items-center justify-center gap-2 px-2 select-none">
          <Globe className="w-8 h-8 text-emerald-600 shrink-0" />
          <span className="text-[12px] font-extrabold text-gray-800 leading-tight text-left">
            WHO<br />
            <span className="text-[9px] font-semibold text-gray-500">HEALTH ORG</span>
          </span>
        </div>
      ),
    },
    {
      id: 8,
      content: (
        <div className="flex items-center justify-center gap-2 px-2 select-none">
          <ShieldCheck className="w-8 h-8 text-blue-700 shrink-0" />
          <span className="text-[12px] font-bold text-gray-800 leading-tight text-left">
            Saylani<br />Welfare Trust
          </span>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full bg-white font-sans selection:bg-emerald-800 selection:text-white">
      
      <style>{`
        @keyframes flickitySlowScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-flickity-slow {
          display: flex;
          width: max-content;
          /* Speed slow karne k liye duration ko 45 seconds kar diya hai */
          animation: flickitySlowScroll 45s linear infinite;
        }
        .animate-flickity-slow:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[1600px] mx-auto py-12 px-4 md:px-8">
        
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="hidden sm:flex items-center gap-1">
            <div className="w-14 h-[1.5px] bg-[#006837]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#006837]"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 text-center tracking-wide">
            Our Partners & Supporters
          </h2>
          <div className="hidden sm:flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#006837]"></div>
            <div className="w-14 h-[1.5px] bg-[#006837]"></div>
          </div>
        </div>

        <div className="relative w-full overflow-hidden py-2">
        
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <div className="animate-flickity-slow gap-6">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="w-60 h-24 flex items-center justify-center p-4 border border-gray-200/80 rounded-2xl bg-white shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 shrink-0 cursor-pointer"
              >
                {partner.content}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div 
        className="relative bg-[#005c2e] bg-cover bg-right py-24 px-4 overflow-hidden border-t border-emerald-900"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(0, 92, 46, 1) 40%, rgba(0, 92, 46, 0.85) 70%, rgba(0, 92, 46, 0.6) 100%), url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800')` 
        }}
      >
        <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col items-center lg:items-start lg:px-6">
          
          <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-6 text-center lg:text-left tracking-wide w-full">
            Together We Can Build a Better Future
          </h3>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 w-full">
            
            <button className="flex items-center gap-2 px-4 py-2 border border-white/40 hover:border-white rounded-lg text-xs font-semibold text-white bg-transparent hover:bg-white/5 transition-colors duration-150 shadow-sm cursor-pointer">
              <User className="w-4 h-4 fill-current" />
              Become a Volunteer
            </button>

            <button className="flex items-center gap-2 px-4 py-2 border border-white/40 hover:border-white rounded-lg text-xs font-semibold text-white bg-transparent hover:bg-white/5 transition-colors duration-150 shadow-sm cursor-pointer">
              <Heart className="w-3.5 h-3.5 fill-current" />
              Donate Today
            </button>

            <button className="flex items-center gap-2 px-4 py-2 border border-white/40 hover:border-white rounded-lg text-xs font-semibold text-white bg-transparent hover:bg-white/5 transition-colors duration-150 shadow-sm cursor-pointer">
              <Handshake className="w-3.5 h-3.5" />
              Partner With Us
            </button>

            <button className="flex items-center gap-2 px-4 py-2 border border-white/40 hover:border-white rounded-lg text-xs font-semibold text-white bg-transparent hover:bg-white/5 transition-colors duration-150 shadow-sm cursor-pointer">
              <Users className="w-3.5 h-3.5" />
              Sponsor a Child
            </button>

            <button className="flex items-center gap-2 px-4 py-2 border border-white/40 hover:border-white rounded-lg text-xs font-semibold text-white bg-transparent hover:bg-white/5 transition-colors duration-150 shadow-sm cursor-pointer">
              <Phone className="w-3.5 h-3.5 fill-current" />
              Contact Us
            </button>

          </div>
        </div>
      </div>

    </section>
  );
};

export default PartnersAndCTA;

