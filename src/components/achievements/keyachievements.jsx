import React, { useState } from 'react';
import { 
  Thermometer, 
  HeartPulse, 
  Syringe, 
  TreePine, 
  ShieldAlert, 
  Eye, 
  Droplet, 
  Users, 
  Sparkles, 
  BookOpen, 
  Waves, 
  HeartHandshake 
} from 'lucide-react';

const primaryDark = "#2a8d6b";

// Section 1: 6 Interventions for 3x2 Grid
const healthAndEnvironmentData = [
  {
    id: "heatstroke",
    title: "Heat Stroke Relief Camps",
    category: "Emergency Response",
    badge: "Government Collaboration",
    description: "Established rapid-response heat stroke camps across multiple districts in Karachi in direct coordination with the Commissioner of Karachi.",
    highlights: ["Multi-district deployment", "Hydration & first-aid support", "City-wide volunteer coordination"],
    icon: <Thermometer size={18} className="text-white" />,
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "medical-camps",
    title: "Free Medical Camps & Dispensaries",
    category: "Healthcare Access",
    badge: "Indus Hospital Partner",
    description: "Organized specialized healthcare camps in Landhi and established localized community dispensaries in Kathore Katchi Abadi.",
    highlights: ["Free consultations & medicines", "Indus Hospital partnership", "Slum community outreach"],
    icon: <HeartPulse size={18} className="text-white" />,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "vaccination-me",
    title: "Vaccination & UNICEF Health M&E",
    category: "Public Health",
    badge: "UNICEF Partnership",
    description: "Executed social mobilization for TCV and Measles eradication campaigns, with foreign UNICEF staff monitoring support.",
    highlights: ["Typhoid & Measles mobilization", "Health sector M&E", "Door-to-door awareness"],
    icon: <Syringe size={18} className="text-white" />,
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "plantation",
    title: "Urban Plantation & Climate Action",
    category: "Environment",
    badge: "Chief Secretary Sindh Drive",
    description: "Carried out large-scale tree plantation drives across urban Karachi in active collaboration with the Chief Secretary Sindh.",
    highlights: ["Urban greening in Karachi", "Climate change mitigation", "Civic department alignment"],
    icon: <TreePine size={18} className="text-white" />,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "disaster-relief",
    title: "Flood & Emergency Ration Drives",
    category: "Disaster Relief",
    badge: "Rapid Response",
    description: "Deployed emergency food packages, clean drinking water, and dry rations to remote flood-affected rural families.",
    highlights: ["Emergency food baskets", "Clean water delivery", "Rural crisis support"],
    icon: <ShieldAlert size={18} className="text-white" />,
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "eye-camps",
    title: "Free Eye & Vision Care Camps",
    category: "Specialized Health",
    badge: "Community Wellness",
    description: "Conducted optical health checkups and provided free prescription glasses to underprivileged elderly residents.",
    highlights: ["Free vision screenings", "Glasses distribution", "Surgical referrals"],
    icon: <Eye size={18} className="text-white" />,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
  }
];

// Section 2: 6 Interventions for 3x2 Grid
const communityOutreachData = [
  {
    id: "blood-donation",
    title: "'Young Stars' Blood Donor Network",
    category: "Social Welfare",
    badge: "Hussaini Blood Bank",
    description: "Formed a dedicated voluntary blood donor group and organized community blood collection camps for urgent patient needs.",
    highlights: ["Voluntary donor registry", "Mobile blood drives", "Hussaini Bank partner"],
    icon: <Droplet size={18} className="text-white" />,
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "minority-outreach",
    title: "Minority & Nomad Rights Advocacy",
    category: "Inclusive Outreach",
    badge: "Human Rights",
    description: "Conducted social awareness sessions in Gulberg Town's Christian community and environmental workshops for nomadic tribes.",
    highlights: ["Interfaith dialogue", "Nomadic tribe advocacy", "Grassroots awareness"],
    icon: <Users size={18} className="text-white" />,
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "women-empowerment",
    title: "Women's Rights & Day Events",
    category: "Gender Development",
    badge: "Women Empowerment",
    description: "Organized targeted rights awareness campaigns on International Women's Day across Karachi to promote equity and skills.",
    highlights: ["International Women's Day", "Rights education", "Leadership workshops"],
    icon: <Sparkles size={18} className="text-white" />,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "deeni-literacy",
    title: "Deeni Taleem & Qaida Distribution",
    category: "Community Literacy",
    badge: "Basic Education",
    description: "Distributed 80+ Noorani Qaidas and facilitated open-air classes for rural children lacking formal religious schooling.",
    highlights: ["80+ Qaidas distributed", "Open-air classrooms", "Basic religious literacy"],
    icon: <BookOpen size={18} className="text-white" />,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "clean-water",
    title: "Rural Water Filtration & Pumps",
    category: "Clean Water Access",
    badge: "Infrastructure Support",
    description: "Installed manual handpumps and filtration units in water-scarce rural villages to ensure clean drinking water access.",
    highlights: ["Clean drinking water", "Handpump installation", "Off-grid village focus"],
    icon: <Waves size={18} className="text-white" />,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0XJTVdbILxI-5UW1nAHiTJQn5CaeX2Cjl1-m8Dko8q_osutAslkb6EL5&s=10"
  },
  {
    id: "winter-warmth",
    title: "Winter Relief & Clothing Drives",
    category: "Relief Assistance",
    badge: "Seasonal Aid",
    description: "Distributed warm blankets, winter apparel, and essential food baskets to vulnerable families living in cold conditions.",
    highlights: ["Warm clothing distribution", "Blanket drives", "Seasonal family aid"],
    icon: <HeartHandshake size={18} className="text-white" />,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
  }
];

const AchievementsSection = () => {
  const [activeTab, setActiveTab] = useState('health');

  const currentData = activeTab === 'health' ? healthAndEnvironmentData : communityOutreachData;

  return (
    <div className="py-16 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">

        {/* --- MAIN HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span
            style={{ color: primaryDark }}
            className="text-xs font-bold uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200"
          >
            Verified Impact (2013 – 2021)
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Key Institutional Achievements
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Highlights of our field interventions across health, climate resilience, emergency response, and community advocacy.
          </p>

          {/* Dual Section Selector Buttons */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveTab('health')}
              style={{
                backgroundColor: activeTab === 'health' ? primaryDark : '#ffffff',
                color: activeTab === 'health' ? '#ffffff' : '#475569',
                borderColor: activeTab === 'health' ? primaryDark : '#cbd5e1'
              }}
              className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold border shadow-sm transition-all duration-300 flex items-center gap-2"
            >
              <span>Part 1: Health, Relief & Climate Action</span>
            </button>
            <button
              onClick={() => setActiveTab('community')}
              style={{
                backgroundColor: activeTab === 'community' ? primaryDark : '#ffffff',
                color: activeTab === 'community' ? '#ffffff' : '#475569',
                borderColor: activeTab === 'community' ? primaryDark : '#cbd5e1'
              }}
              className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold border shadow-sm transition-all duration-300 flex items-center gap-2"
            >
              <span>Part 2: Community Outreach & Inclusion</span>
            </button>
          </div>
        </div>

        {/* --- 3-COLUMN GRID (3x2 Layout) --- */}
        <div className="animate-fadeIn">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
            <div>
              <h3 className="text-xl font-bold text-slate-800">
                {activeTab === 'health' 
                  ? "Part 1: Health, Emergency Relief & Environment" 
                  : "Part 2: Community Outreach, Inclusive Advocacy & Social Welfare"}
              </h3>
              <p className="text-xs text-slate-500">
                {activeTab === 'health'
                  ? "Public health camps, epidemic control, heatwave protection, and urban forestry."
                  : "Blood donor drives, minority engagement, women's empowerment, and literacy."}
              </p>
            </div>
            <span className="hidden sm:inline-block text-xs font-semibold text-slate-400">6 Key Interventions</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <span
                    style={{ backgroundColor: primaryDark }}
                    className="absolute top-3 left-3 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded shadow"
                  >
                    {item.badge}
                  </span>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-white">
                    <div className="p-1.5 rounded-lg bg-white/20 backdrop-blur-md">
                      {item.icon}
                    </div>
                    <h4 className="text-base font-bold leading-tight drop-shadow-sm">{item.title}</h4>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">{item.category}</span>
                    <p className="text-slate-600 text-[15px] py-3 mt-2 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Key Deliverables:</div>
                    <div className="flex flex-wrap gap-1">
                      {item.highlights.map((hl, idx) => (
                        <span key={idx} className="bg-slate-100 text-slate-700 text-[12px] font-medium px-2 py-0.5 rounded">
                          • {hl}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AchievementsSection;