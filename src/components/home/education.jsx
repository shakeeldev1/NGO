import React, { useState } from 'react';
import { 
  FaGraduationCap, 
  FaBookOpen, 
  FaChair, 
  FaMosque, 
  FaChalkboardTeacher, 
  FaSchool, 
  FaRegCheckCircle,
  FaArrowRight,
  FaMapMarkerAlt
} from 'react-icons/fa';

// Placeholder images - Replace with your actual image URLs
const heroImage = "https://media.licdn.com/dms/image/v2/D4D12AQGyVhNU7LlIWA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1677481377577?e=2147483647&v=beta&t=y21kW4X40XHAAP8OergEIBrsCNxjwIjJ8t4Hky5gfuw"; // Image related to education in Sindh
const activityImages = {
  1: "https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Image for school opening
  2: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Image for book distribution
  3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT227P8qorD_KOzq6G2cKX5S76oRJh3M6BS-GuFGOgMDNUzw9KcUGBtqeY&s=10", // Image for classroom furniture
  4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFtikPnEAMurSckldIL_1pz2bhOR0zg-qYNkMg-7HOv7UEfwWBHdRyj9k&s=10", // Image for Deeni Taleem/Qaidas
  5: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Image for opening school
  6: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Image for advocacy campaign
};
const roadmapImage = "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Image related to education progress
const upcomingGoalsImage = "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Image related to books and education

const education = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const stats = [
    { label: "Enrolled Students (Imam Ali Gaincho)", value: "150+" },
    { label: "Children Provided Noorani Qaidas", value: "80+" },
    { label: "Key Partner Organization", value: "SEF" },
  ];

  const educationalActivities = [
    {
      id: 1,
      title: "New School Opening at Karachi's Katchi Abadi",
      location: "Village Imam Ali Gaincho, Kathore, Karachi",
      description: "Karachi division has over 50% area in Katchi Abadi lacking primary educational needs. In coordination with the village community, USWA opened a school enrolling over 150 students.",
      icon: <FaSchool className="w-6 h-6 text-[#23A77B]" />
    },
    {
      id: 2,
      title: "Books Distribution Drive",
      location: "Imam Ali Gaincho Community School",
      description: "Distributed course books and study materials to students to encourage regular attendance and support basic literacy.",
      icon: <FaBookOpen className="w-6 h-6 text-[#23A77B]" />
    },
    {
      id: 3,
      title: "Classroom Furniture Arrangement",
      location: "Community Schools",
      description: "Arranged student desks and classroom furniture in coordination with the Sindh Education Foundation (SEF) to improve learning environments.",
      icon: <FaChair className="w-6 h-6 text-[#23A77B]" />
    },
    {
      id: 4,
      title: "Deeni Taleem & Noorani Qaidas Distribution",
      location: "Village Imam Ali Gaincho",
      description: "Distributed Noorani Qaidas to 80+ children for Deeni Taleem and held community awareness meetings with parents regarding religious and basic education.",
      icon: <FaMosque className="w-6 h-6 text-[#23A77B]" />
    },
    {
      id: 5,
      title: "Opening School in Khohra Village",
      location: "Khohra Village, Gambat, District Khairpur Mirs",
      description: "Increased child enrollment in partnership with Right Angle Academy and local coordinators to improve rural literacy.",
      icon: <FaGraduationCap className="w-6 h-6 text-[#23A77B]" />
    },
    {
      id: 6,
      title: "School Enrollment & Advocacy Campaigns",
      location: "Haji Jan Muhammad Hoot Baloch & Surrounding Katchi Abadis",
      description: "Organized advocacy programs to reopen closed schools, address educational issues, and motivate illiterate parents to send non-schooling children to school.",
      icon: <FaChalkboardTeacher className="w-6 h-6 text-[#23A77B]" />
    }
  ];

  const upcomingEducationGoals = [
    "Seminars on encouraging school-going children",
    "Opening of Vocational Training Centers for Girls (15–19 years)",
    "Workshops for educating elders in rural areas",
    "Opening of 'Elders Educate' Schools in rural Sindh",
    "Computer short courses for underprivileged pupils in Gambat Khohra"
  ];

  const timelineSteps = [
    { phase: "Phase 1", title: "Assessment & Advocacy", desc: "Identified Katchi Abadis in Karachi and rural Sindh with zero primary school access." },
    { phase: "Phase 2", title: "Infrastructure & Setup", desc: "Established community schools, provided desks, chairs, and study materials in partnership with SEF." },
    { phase: "Phase 3", title: "Enrollment & Deeni Taleem", desc: "Enrolled 150+ students and distributed Noorani Qaidas to over 80 children." },
    { phase: "Phase 4", title: "Future Expansion", desc: "Scaling up toward vocational centers, computer courses, and elder literacy programs." }
  ];

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      
      {/* Main Container with top padding to clear navbar height */}
      <div className="max-w-7xl mx-auto space-y-12 pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <header className="relative overflow-hidden rounded-3xl shadow-xl">
          <img 
            src={heroImage} 
            alt="Education Initiatives Hero" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 backdrop-blur-sm" />
          <div className="relative z-10 space-y-4 max-w-3xl mx-auto p-8 sm:p-12 text-white text-center">
            <div className="inline-flex items-center justify-center p-3 bg-white/20 backdrop-blur-md rounded-full mb-2">
              <FaGraduationCap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight drop-shadow-sm">
              Education Sector Initiatives
            </h1>
            <p className="text-emerald-50 text-base sm:text-lg leading-relaxed">
              Empowering rural and marginalized communities across Sindh through accessible basic education, school openings, and essential learning resources.
            </p>
          </div>
        </header>

        {/* Stat Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 hover:border-[#23A77B]/40 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center group"
            >
              <div className="p-3 bg-[#23A77B]/10 rounded-full w-fit mx-auto mb-3 group-hover:bg-[#23A77B] transition-colors duration-300">
                <FaGraduationCap className="w-6 h-6 text-[#23A77B] group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-3xl font-extrabold text-[#23A77B] mb-1">{stat.value}</p>
              <p className="text-sm font-medium text-slate-600">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Educational Roadmap Timeline */}
        <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className='flex items-center space-x-6'>
              <img 
              src={roadmapImage} 
              alt="Education Roadmap" 
              className="w-24 h-24 rounded-full object-cover shadow-md" 
              />
              <div className="border-l-4 border-[#23A77B] pl-4">
                <h2 className="text-2xl font-bold text-slate-900">Educational Roadmap</h2>
                <p className="text-slate-500 text-sm">Key milestones in our educational journey.</p>
              </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="relative p-5 bg-slate-50 rounded-xl border border-slate-200/60 hover:border-[#23A77B]/50 transition-colors duration-200">
                <span className="inline-block px-3 py-1 bg-[#23A77B]/10 text-[#23A77B] text-xs font-bold rounded-full mb-3">
                  {step.phase}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-[15px] text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Project Cards */}
        <section className="space-y-6">
          <div className="border-l-4 border-[#23A77B] pl-4">
            <h2 className="text-2xl font-bold text-slate-900">Key Educational Projects</h2>
            <p className="text-slate-500 text-sm">Summary of ongoing and completed field activities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationalActivities.map((activity) => {
              const isExpanded = expandedCard === activity.id;
              return (
                <div 
                  key={activity.id} 
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#23A77B]/50 transition-all duration-300 flex flex-col group overflow-hidden"
                >
                  <img 
                    src={activityImages[activity.id]} 
                    alt={activity.title} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className='p-6 flex flex-col justify-between flex-grow'>
                    <div>
                        <div className="p-3 bg-[#23A77B]/10 rounded-xl w-fit mb-4 group-hover:bg-[#23A77B] transition-colors duration-300">
                          {React.cloneElement(activity.icon, { 
                            className: "w-6 h-6 text-[#23A77B] group-hover:text-white transition-colors duration-300" 
                          })}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#23A77B] transition-colors duration-200">
                          {activity.title}
                        </h3>
                        <p className="text-xs font-semibold text-[#23A77B] mb-3 uppercase tracking-wider flex items-center gap-1.5">
                          <FaMapMarkerAlt className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{activity.location}</span>
                        </p>
                        <p className={`text-slate-600 text-[15px] leading-relaxed ${!isExpanded && "line-clamp-3"}`}>
                          {activity.description}
                        </p>
                      </div>

                      <button
                        onClick={() => toggleExpand(activity.id)}
                        className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#23A77B] hover:text-[#166E51] transition-colors duration-200"
                      >
                        <span>{isExpanded ? "Show Less" : "Read More"}</span>
                        <FaArrowRight className={`w-3 h-3 transition-transform duration-200 ${isExpanded ? "-rotate-90" : "group-hover:translate-x-1"}`} />
                      </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Upcoming Goals Banner */}
        <section className="relative overflow-hidden rounded-3xl p-8 sm:p-10 shadow-lg">
          <img 
            src={upcomingGoalsImage} 
            alt="Upcoming Educational Goals" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#23A77B]/90 to-[#166E51]/95 backdrop-blur-sm" />
          <div className="relative z-10 text-white">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 tracking-tight">
                Upcoming Educational & Literacy Goals
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {upcomingEducationGoals.map((goal, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/20 transition-colors duration-200"
                  >
                    <FaRegCheckCircle className="w-5 h-5 text-emerald-200 mt-0.5 flex-shrink-0" />
                    <span className="text-[15px] font-medium text-emerald-50">{goal}</span>
                  </div>
                ))}
              </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default education;