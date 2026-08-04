import React from 'react';
import { BookOpen, BriefcaseMedical, Droplet, TreePine, Venus, Users, TrendingUp, Megaphone } from 'lucide-react';

const ImpactNumbersSection = () => {
  const impacts = [
    {
      id: 1,
      icon: <BookOpen className="w-10 h-10 text-emerald-700" />,
      value: "50+",
      label: "Education Programs",
    },
    {
      id: 2,
      icon: <BriefcaseMedical className="w-10 h-10 text-emerald-700" />,
      value: "30+",
      label: "Health Camps",
    },
    {
      id: 3,
      icon: <Droplet className="w-10 h-10 text-red-600 fill-red-600" />, 
      value: "1000+",
      label: "Blood Donations",
    },
    {
      id: 4,
      icon: <TreePine className="w-10 h-10 text-emerald-700" />,
      value: "20,000+",
      label: "Trees Planted",
    },
    {
      id: 5,
      icon: <Venus className="w-10 h-10 text-emerald-700" />,
      value: "5000+",
      label: "Women Empowered",
    },
    {
      id: 6,
      icon: <Users className="w-10 h-10 text-emerald-700" />,
      value: "25,000+",
      label: "People Reached",
    },
    {
      id: 7,
      icon: <TrendingUp className="w-10 h-10 text-emerald-700" />,
      value: "200+",
      label: "Surveys Conducted",
    },
    {
      id: 8,
      icon: <Megaphone className="w-10 h-10 text-emerald-700" />,
      value: "500+",
      label: "Awareness Sessions",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 max-w-7xl mx-auto">
      
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="hidden sm:flex items-center gap-1">
          <div className="w-12 h-[1px] bg-emerald-700"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-700"></div>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 text-center tracking-wide">
          Our Impact in Numbers
        </h2>
        
        <div className="hidden sm:flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-700"></div>
          <div className="w-12 h-[1px] bg-emerald-700"></div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {impacts.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center text-center p-5 bg-white border border-gray-100 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow duration-300 min-h-[160px]"
          >

            <div className="mb-4 flex items-center justify-center h-12">
              {item.icon}
            </div>

            <span className="text-xl font-extrabold text-slate-800 tracking-tight mb-1">
              {item.value}
            </span>

            <span className="text-xs font-semibold text-slate-500 leading-tight px-1">
              {item.label}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ImpactNumbersSection;