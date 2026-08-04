import React from 'react';
import { Users, Briefcase, Award, Handshake } from 'lucide-react';

const AchievementsSection = () => {
  const stats = [
    {
      id: 1,
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      value: "15+",
      label: "Years of Service",
    },
    {
      id: 2,
      icon: <Award className="w-6 h-6 text-emerald-600" />,
      value: "100+",
      label: "Projects Completed",
    },
    {
      id: 3,
      icon: <Users className="w-6 h-6 text-emerald-600" />, 
      value: "25,000+",
      label: "Lives Impacted",
    },
    {
      id: 4,
      icon: <Handshake className="w-6 h-6 text-emerald-600" />,
      value: "50+",
      label: "Partner Organizations",
    },
  ];

  return (
    <section className="relative min-h-[100vh] flex items-center bg-cover bg-center py-16 px-6 md:px-12 lg:px-20"
      style={{ 
        
        backgroundImage: `url('https://images.pexels.com/photos/36739282/pexels-photo-36739282.jpeg')` 
      }}
    >
      
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col justify-between h-full gap-12">
        
        <div className="max-w-2xl text-white mt-10">
          <span className="inline-block bg-emerald-600 text-white font-bold tracking-wider text-xs uppercase px-3 py-1.5 rounded mb-4">
            Our Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            Making a Difference <br />
            Since 2013
          </h2>
          <p className="text-lg text-gray-200 font-normal leading-relaxed">
            Empowering communities through education, healthcare, awareness, 
            and sustainable development across Sindh and Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="bg-white/95 backdrop-blur-sm rounded-xl p-5 flex items-center gap-4 shadow-lg transition-transform hover:-translate-y-1 duration-300"
            >
            
              <div className="p-3 bg-emerald-50 rounded-lg shrink-0">
                {stat.icon}
              </div>
              
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm font-medium text-slate-500 leading-tight">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AchievementsSection;