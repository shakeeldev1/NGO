import React from 'react';
import { 
  Building2, 
  BookOpen, 
  Heart, 
  Droplet, 
  Venus, 
  Leaf, 
  TrendingUp, 
  Users,
  ChevronRight 
} from 'lucide-react';

const JourneyAndImpact = () => {

  const timelineSteps = [
    { year: "2013", title: "Organization", subtitle: "Established", icon: <Building2 className="w-6 h-6 text-white" /> },
    { year: "2014", title: "Education", subtitle: "Projects", icon: <BookOpen className="w-6 h-6 text-white" /> },
    { year: "2015", title: "Health", subtitle: "Activities", icon: <Heart className="w-6 h-6 text-white" /> },
    { year: "2016", title: "Blood Donation", subtitle: "Campaigns", icon: <Droplet className="w-6 h-6 text-white" /> },
    { year: "2017", title: "Women", subtitle: "Empowerment", icon: <Venus className="w-6 h-6 text-white" /> },
    { year: "2018", title: "Environment", subtitle: "Projects", icon: <Leaf className="w-6 h-6 text-white" /> },
    { year: "2019", title: "Monitoring &", subtitle: "Expansion", icon: <TrendingUp className="w-6 h-6 text-white" /> },
    { year: "2026+", title: "Serving", subtitle: "Communities", icon: <Users className="w-6 h-6 text-white" /> },
  ];

  // Impact Stories Card Data
  const stories = [
    {
      id: 1,
      title: "Community School",
      desc: "150+ children enrolled in our community schools.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400",
    },
    {
      id: 2,
      title: "Blood Donation",
      desc: "Emergency blood provided to hundreds of patients.",
      image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=400",
    },
    {
      id: 3,
      title: "Plantation Drive",
      desc: "Thousands of trees planted for a greener environment.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=400",
    },
    {
      id: 4,
      title: "Women's Training",
      desc: "Skill development centers empowering women.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400",
    },
  ];

  return (
    <section className="bg-white py-12 px-6 max-w-[1400px] mx-auto font-sans">
      <div className="flex flex-col gap-16">
        
        <div className="w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f6836] mb-12 text-center tracking-wide">
            Our Journey
          </h2>
          
          <div className="relative flex flex-wrap md:flex-nowrap justify-between items-center md:items-start gap-8 md:gap-0 w-full px-4">
            
            <div className="hidden md:block absolute top-[28px] left-10 right-10 h-[2px] bg-[#0f6836] z-0" />

            {timelineSteps.map((step, idx) => (
              <React.Fragment key={idx}>
               
                <div className="flex flex-col items-center text-center relative z-10 w-[45%] sm:w-[22%] md:w-auto">
                  
                  <div className="w-14 h-14 rounded-full bg-[#0f6836] flex items-center justify-center shadow-md mb-3 transition-transform hover:scale-110 duration-200">
                    {step.icon}
                  </div>

                  <div className="w-3 h-3 rounded-full bg-[#0f6836] border-2 border-white ring-1 ring-emerald-800/20 mb-2 hidden md:block" />

                  <span className="text-sm font-extrabold text-gray-950 block mb-0.5">{step.year}</span>
                  <span className="text-xs font-bold text-gray-600 block leading-tight max-w-[110px]">
                    {step.title}
                  </span>
                  <span className="text-xs font-bold text-gray-600 block leading-tight max-w-[110px]">
                    {step.subtitle}
                  </span>
                </div>

                {idx < timelineSteps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center relative z-10 mt-4 text-[#0f6836] bg-white rounded-full p-0.5 shadow-sm border border-[#0f6836]/20">
                    <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                )}
              </React.Fragment>
            ))}

          </div>
        </div>

        <div className="w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f6836] mb-8 text-center tracking-wide">
            Our Impact Stories
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stories.map((story) => (
              <div 
                key={story.id} 
                className="flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300"
              >
               
                <div className="h-40 w-full overflow-hidden p-1">
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                
                <div className="p-4 flex flex-col flex-grow text-center">
                  <h3 className="text-base font-bold text-slate-950 mb-2 leading-snug">
                    {story.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-600 leading-relaxed">
                    {story.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default JourneyAndImpact;