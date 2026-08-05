import React, { useState } from 'react';
import { 
  FaHeartbeat, 
  FaStethoscope, 
  FaPills, 
  FaMicroscope, 
  FaHandHoldingMedical, 
  FaRegCheckCircle, 
  FaMapMarkerAlt, 
  FaClinicMedical,
  FaPhoneAlt,
  FaProcedures,
  FaUserNurse,
  FaShieldAlt,
  FaArrowRight,
  FaBullseye,
  FaHandHoldingHeart
} from 'react-icons/fa';

// Carefully curated medical & healthcare imagery
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1600&auto=format&fit=crop",
  outreach: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
  services: [
    "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=600&auto=format&fit=crop", // Primary Care
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=600&auto=format&fit=crop", // Diagnostics
    "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=600&auto=format&fit=crop", // Pharmacy
    "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=600&auto=format&fit=crop", // Maternal
  ],
  initiatives: {
    "camps-0": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
    "camps-1": "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop",
    "diagnostics-0": "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop",
    "diagnostics-1": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop",
    "awareness-0": "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&auto=format&fit=crop",
  },
  future: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop"
};

const Healthcare = () => {
  const [activeTab, setActiveTab] = useState('camps');

  const categories = [
    { id: 'camps', label: 'Medical Camps & Campsites', icon: <FaClinicMedical /> },
    { id: 'diagnostics', label: 'Diagnostics & Pharmacy', icon: <FaMicroscope /> },
    { id: 'awareness', label: 'Public Health Education', icon: <FaHandHoldingMedical /> },
  ];

  const initiatives = {
    camps: [
      {
        title: "Kathore Free Medical Camp",
        location: "Village Imam Ali Gaincho, Kathore, Karachi",
        desc: "Organized a full-scale medical camp providing primary consultations, routine health checkups, and initial treatments for rural populations without local healthcare access.",
        badge: "300+ Patients Treated",
        image: IMAGES.initiatives["camps-0"]
      },
      {
        title: "Mobile Outpatient Consultations",
        location: "Kathore Surrounding Katchi Abadis",
        desc: "On-field general medical evaluations tailored for mothers, children, and elderly residents facing severe mobility constraints.",
        badge: "Free Consultation",
        image: IMAGES.initiatives["camps-1"]
      }
    ],
    diagnostics: [
      {
        title: "Free On-Site Diagnostic Screening",
        location: "Kathore Field Lab Unit",
        desc: "Rapid point-of-care laboratory testing including Hepatitis B & C screenings, Blood Sugar level checks, and Blood Grouping tests.",
        badge: "Lab Screening",
        image: IMAGES.initiatives["diagnostics-0"]
      },
      {
        title: "Prescription Medicine Support",
        location: "Community Dispensary Unit",
        desc: "Distribution of doctor-prescribed essential medications and chronic illness treatments free of cost to patients in need.",
        badge: "Free Medicine",
        image: IMAGES.initiatives["diagnostics-1"]
      }
    ],
    awareness: [
      {
        title: "Preventive Disease Workshops",
        location: "Village Imam Ali Gaincho",
        desc: "Community-led health drives educating families on water hygiene, sanitation, and prevention against Malaria, Dengue, and Diarrhea.",
        badge: "Hygiene Drive",
        image: IMAGES.initiatives["awareness-0"]
      }
    ]
  };

  const medicalServices = [
    {
      icon: <FaStethoscope className="w-6 h-6 text-[#23A77B]" />,
      title: "Primary Medical Care",
      desc: "Qualified doctor consultations for acute illnesses, seasonal diseases, and routine health evaluations.",
      image: IMAGES.services[0]
    },
    {
      icon: <FaMicroscope className="w-6 h-6 text-[#23A77B]" />,
      title: "Diagnostic Testing",
      desc: "Free blood profiling, blood sugar monitoring, and Hepatitis B & C screenings conducted on-site.",
      image: IMAGES.services[1]
    },
    {
      icon: <FaPills className="w-6 h-6 text-[#23A77B]" />,
      title: "Free Pharmacy Services",
      desc: "Providing essential daily drugs, antibiotics, and supplements following physician examinations.",
      image: IMAGES.services[2]
    },
    {
      icon: <FaUserNurse className="w-6 h-6 text-[#23A77B]" />,
      title: "Maternal & Child Health",
      desc: "Specialized focus on maternal nutritional support, child growth checks, and wellness advice.",
      image: IMAGES.services[3]
    }
  ];

  const timelineSteps = [
    {
      phase: "Phase 01",
      title: "Community Assessment",
      desc: "Identifying high-priority rural pockets and Katchi Abadis lacking basic outpatient or diagnostic facilities."
    },
    {
      phase: "Phase 02",
      title: "Medical Outreach & Camps",
      desc: "Deploying doctors, field nurses, and equipment to conduct comprehensive free medical camps."
    },
    {
      phase: "Phase 03",
      title: "Testing & Treatment",
      desc: "Running free diagnostic blood tests and handing out necessary prescription medicines."
    },
    {
      phase: "Phase 04",
      title: "Permanent Healthcare Units",
      desc: "Transitioning temporary camps into permanent primary health clinics and MCH centers."
    }
  ];

  const upcomingGoals = [
    {
      number: "01",
      title: "Permanent Rural Clinics",
      desc: "Establishing permanent primary healthcare units to ensure continuous doctor availability in Kathore & remote areas."
    },
    {
      number: "02",
      title: "Expanded Diagnostic Camps",
      desc: "Increasing the frequency of free screening camps for Diabetes, Hepatitis, and Blood disorders across Katchi Abadis."
    },
    {
      number: "03",
      title: "Maternal & Child Health (MCH)",
      desc: "Building dedicated support hubs for pregnant women, neonatal guidance, and essential infant nutrition."
    },
    {
      number: "04",
      title: "Clean Water & Sanitation",
      desc: "Launching targeted preventive campaigns focused on waterborne disease prevention and hygiene kits distribution."
    }
  ];

  return (
    <div className="bg-emerald-50/30 min-h-screen font-sans pb-16">
      
      {/* Main Container */}
      <div className="max-w-7xl mx-auto space-y-14 pt-28 px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric Visual Hero Header */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Hero Banner with Overlay */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden shadow-2xl min-h-[460px] flex flex-col justify-between p-8 sm:p-12 group">
            {/* Background Image */}
            <img 
              src={IMAGES.hero} 
              alt="Healthcare Outreach" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-[#166E51]/85 to-transparent" />

            <div className="space-y-5 max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md text-white text-[15px] font-bold rounded-full uppercase tracking-wider border border-white/20 shadow-sm">
                <FaShieldAlt className="w-3.5 h-3.5 text-emerald-300" />
                <span>Healthcare Sector</span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white drop-shadow-md">
                Vital Healthcare For Vulnerable Communities
              </h1>

              <p className="text-emerald-50/90 text-[15px] sm:text-base leading-relaxed font-light">
                Bringing quality healthcare closer to every community, USWA delivers free medical consultations, diagnostic services, essential medicines, and preventive health education across underserved regions of Sindh.
              </p>
            </div>
            
            {/* Glassmorphism Impact Counters */}
            <div className="pt-6 mt-6 border-t border-white/20 grid grid-cols-3 gap-4 relative z-10 backdrop-blur-sm bg-white/5 rounded-2xl p-4">
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-black text-emerald-400">300+</p>
                <p className="text-[11px] sm:text-xs text-white/90 font-medium">Patients Examined</p>
              </div>
              <div className="space-y-1 border-l border-white/15 pl-4">
                <p className="text-2xl sm:text-3xl font-black text-emerald-400">Free</p>
                <p className="text-[11px] sm:text-xs text-white/90 font-medium">Diagnostic Screening</p>
              </div>
              <div className="space-y-1 border-l border-white/15 pl-4">
                <p className="text-2xl sm:text-3xl font-black text-emerald-400">100%</p>
                <p className="text-[11px] sm:text-xs text-white/90 font-medium">Free Prescriptions</p>
              </div>
            </div>
          </div>

          {/* Emergency / Visual Card */}
          <div className="lg:col-span-4 bg-white border border-emerald-100 rounded-3xl shadow-md overflow-hidden flex flex-col justify-between group">
            <div className="relative h-44 overflow-hidden">
              <img 
                src={IMAGES.outreach} 
                alt="Medical Outreach" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-4 px-3 py-1 bg-[#23A77B] text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow">
                Active Relief
              </span>
            </div>

            <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 mb-2">Medical Outreach Camps</h2>
                <p className="text-[13px] sm:text-sm text-slate-600 leading-relaxed">
                  USWA mobilizes doctors, nurses, and lab teams to areas completely lacking basic outpatient services.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="bg-emerald-50/60 p-3.5 rounded-2xl border border-emerald-100/80 space-y-1">
                  <div className="flex items-center gap-2 text-[#23A77B] font-bold text-xs uppercase tracking-wider">
                    <FaPhoneAlt className="w-3.5 h-3.5" />
                    <span>Need Medical Support?</span>
                  </div>
                  <p className="text-xs text-slate-600">Contact USWA medical outreach desk for camp schedules.</p>
                </div>

                <a 
                  href="/contact" 
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#23A77B] hover:bg-[#1A8360] text-white text-[13px] font-bold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <span>Request a Medical Camp</span>
                  <FaArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Core Medical Services Section */}
        <section className="space-y-6">
          <div className="border-l-4 border-[#23A77B] pl-4">
            <h2 className="text-2xl font-bold text-slate-900">Our Core Medical Services</h2>
            <p className="text-[14px] text-slate-500">Comprehensive healthcare solutions provided during our outreach drives.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {medicalServices.map((service, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#23A77B]/40 transition-all duration-300 overflow-hidden flex flex-col group"
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3 p-2.5 bg-white/90 backdrop-blur-md rounded-xl shadow-md">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-5 flex-grow flex flex-col justify-between space-y-2">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#23A77B] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[15px] text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Healthcare Journey Timeline */}
        <section className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
          <div className="border-l-4 border-[#23A77B] pl-4">
            <h2 className="text-2xl font-bold text-slate-900">Healthcare Delivery Roadmap</h2>
            <p className="text-[14px] text-slate-500">How we structure our health interventions for maximum community impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {timelineSteps.map((step, idx) => (
              <div 
                key={idx} 
                className="relative p-6 bg-slate-50/80 rounded-2xl border border-slate-200/60 hover:border-[#23A77B]/50 transition-all duration-300 hover:bg-white hover:shadow-md group"
              >
                <span className="inline-block px-3 py-1 bg-[#23A77B]/10 text-[#23A77B] text-[11px] font-bold rounded-full mb-3 group-hover:bg-[#23A77B] group-hover:text-white transition-colors">
                  {step.phase}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-[15px] text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tabbed Interactive Section with Images */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Active Healthcare Programs</h2>
              <p className="text-[14px] text-slate-500">Explore our healthcare activities by category.</p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-bold transition-all duration-200 ${
                    activeTab === cat.id
                      ? "bg-[#23A77B] text-white shadow-md scale-105"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Grid with Card Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {initiatives[activeTab].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#23A77B]/40 transition-all duration-300 overflow-hidden flex flex-col sm:flex-row group"
              >
                <div className="sm:w-2/5 relative min-h-[180px] sm:min-h-full overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-900/60 to-transparent" />
                </div>

                <div className="sm:w-3/5 p-6 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <span className="px-2.5 py-0.5 bg-emerald-50 text-[#23A77B] text-[10px] font-extrabold rounded-md uppercase tracking-wider">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#23A77B] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[15px] text-slate-600 leading-relaxed mt-1">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[15px] text-slate-500 font-semibold">
                    <FaMapMarkerAlt className="text-[#23A77B] flex-shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Future Roadmap Section with Background Image */}
        <section className="relative rounded-3xl overflow-hidden shadow-xl text-white">
          <img 
            src={IMAGES.future} 
            alt="Future Roadmap" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-[#166E51]/95 to-slate-900/90" />

          <div className="relative z-10 p-8 sm:p-12 space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/20 pb-6">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-emerald-400 text-[13px] font-bold uppercase tracking-widest">
                  <FaBullseye className="w-4 h-4" />
                  <span>Strategic Vision</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                  Future Healthcare Roadmap
                </h2>
              </div>
              <span className="self-start sm:self-center px-4 py-1.5 bg-white/10 backdrop-blur-md text-emerald-200 text-xs font-bold rounded-full border border-white/20">
                Long-Term Goals
              </span>
            </div>

            {/* Grid of Targets with Glass Effect */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingGoals.map((goal, idx) => (
                <div 
                  key={idx}
                  className="group p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/20 hover:border-emerald-400/50 transition-all duration-300 flex items-start gap-4"
                >
                  <span className="flex-shrink-0 text-lg font-black text-emerald-950 bg-emerald-400 group-hover:scale-110 transition-transform duration-300 w-10 h-10 rounded-xl flex items-center justify-center shadow">
                    {goal.number}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {goal.title}
                    </h3>
                    <p className="text-[15px] text-emerald-50/80 leading-relaxed">
                      {goal.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Action Banner */}
            <div className="bg-gradient-to-r from-emerald-500 to-[#23A77B] rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl text-white hidden sm:block">
                  <FaHandHoldingHeart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold">Partner With USWA Healthcare Initiative</h4>
                  <p className="text-xs text-emerald-50">Help us expand medical coverage to more rural communities across Sindh.</p>
                </div>
              </div>
              <a 
                href="/contact"
                className="flex-shrink-0 px-6 py-2.5 bg-white text-slate-900 hover:bg-emerald-50 text-xs font-bold rounded-xl transition-all duration-200 shadow hover:scale-105"
              >
                Get Involved
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Healthcare;