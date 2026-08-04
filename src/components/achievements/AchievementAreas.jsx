import React from 'react';
import { GraduationCap, HeartPulse, Droplet, Leaf, Venus, Megaphone } from 'lucide-react';

const AchievementAreas = () => {
  const cards = [
    {
      id: 1,
      title: "Education & Literacy",
      icon: <GraduationCap className="w-8 h-8" />,
      colorClass: "text-emerald-700",
      borderColor: "border-emerald-100",
      bulletColor: "bg-emerald-700",
      points: [
        "Community Schools",
        "Books Distribution",
        "Furniture & Stationery",
        "Noorani Qaida Distribution",
        "Scholarships & Support"
      ],
      image: "https://i.pinimg.com/1200x/51/6e/a8/516ea8481c76b19ebb6c45cea6d5c41a.jpg"
    },
    {
      id: 2,
      title: "Health Care",
      icon: <HeartPulse className="w-8 h-8" />,
      colorClass: "text-emerald-700",
      borderColor: "border-emerald-100",
      bulletColor: "bg-emerald-700",
      points: [
        "Free Medical Camps",
        "Mother & Child Health",
        "Vaccination Campaigns",
        "Heat Stroke Camps",
        "Health Awareness"
      ],
      image: "https://i.pinimg.com/1200x/09/6f/f0/096ff01e2596cc3629d9b7bdf6f63335.jpg"
    },
    {
      id: 3,
      title: "Blood Collection",
      icon: <Droplet className="w-8 h-8 fill-current" />,
      colorClass: "text-red-600",
      borderColor: "border-red-100",
      bulletColor: "bg-red-600",
      points: [
        "Blood Donation Drives",
        "Young Stars Blood Team",
        "Blood Bank Partnership",
        "Emergency Blood Support",
        "Thousands of Lives Saved"
      ],
      image: "https://i.pinimg.com/1200x/41/ed/20/41ed2042539999aeca73c32a9544d450.jpg"
    },
    {
      id: 4,
      title: "Environment",
      icon: <Leaf className="w-8 h-8" />,
      colorClass: "text-emerald-700",
      borderColor: "border-emerald-100",
      bulletColor: "bg-emerald-700",
      points: [
        "Tree Plantation Drives",
        "Climate Change Awareness",
        "Earth Day Events",
        "Clean Environment Campaigns"
      ],
      image: "https://i.pinimg.com/736x/7d/72/3b/7d723ba065505aec3d926993b228f7d2.jpg"
    },
    {
      id: 5,
      title: "Women Empowerment",
      icon: <Venus className="w-8 h-8" />,
      colorClass: "text-purple-700",
      borderColor: "border-purple-100",
      bulletColor: "bg-purple-700",
      points: [
        "Vocational Training",
        "Sewing Centers",
        "Women Rights Workshops",
        "Skill Development",
        "Small Business Support"
      ],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQBs2OMXwczrOuua_IunDiuSIsGP6bH6HZeJQXbT_Y5t7Gz7Mfb_4z__k&s=10"
    },
    {
      id: 6,
      title: "Awareness Campaigns",
      icon: <Megaphone className="w-8 h-8" />,
      colorClass: "text-blue-800",
      borderColor: "border-blue-100",
      bulletColor: "bg-blue-800",
      points: [
        "Education Awareness",
        "Health & Hygiene",
        "Women Rights",
        "Human Rights",
        "Climate Change",
        "Anti Drug",
        "Road Safety & More"
      ],
      image: "https://i.pinimg.com/1200x/62/1c/f3/621cf397e8a22f03f724b95cc821af17.jpg"
    }
  ];

  return (
    <section className="bg-white py-10 px-4 max-w-6xl mx-auto">
      
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="hidden sm:flex items-center gap-1">
          <div className="w-8 h-[1px] bg-emerald-700"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-700"></div>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 text-center tracking-wide">
          Our Achievement Areas
        </h2>
        
        <div className="hidden sm:flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-700"></div>
          <div className="w-8 h-[1px] bg-emerald-700"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`flex flex-col justify-between bg-white border ${card.borderColor} rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[380px]`}
          >
           
            <div>
              <div className={`flex justify-center mb-2.5 ${card.colorClass}`}>
                {card.icon}
              </div>

              <h3 className={`text-center font-bold text-base md:text-lg mb-3 ${card.colorClass}`}>
                {card.title}
              </h3>

              <ul className="space-y-1.5 px-1">
                {card.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs font-semibold text-slate-700 leading-snug">
                    <span className={`w-1.5 h-1.5 rounded-sm shrink-0 mt-1 ${card.bulletColor}`} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 w-full h-36 rounded-lg overflow-hidden shadow-inner">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default AchievementAreas;