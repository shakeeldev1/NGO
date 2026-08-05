import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router Hook
import {
  Megaphone,
  ArrowLeft,
  BookOpen,
  Users,
  Globe,
  MapPin,
  HeartHandshake,
  Share2,
  Sparkles,
  ArrowRight,
  Shield,
  Layers,
  Award,
  Stethoscope,
  TreePine,
  Droplet,
} from "lucide-react";

export default function Awareness() {
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate(); // Navigation initialize ki gayi

  const campaigns = [
    {
      category: "education",
      title: "Educational Enrollment Drives",
      tag: "Education",
      desc: "Meetings with illiterate parents in Katchi Abadis (e.g., Village Imam Ali Gaincho) to emphasize school enrollment and Deeni Taleem.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
      stats: "150+ Children Enrolled",
    },
    {
      category: "gender",
      title: "Women Empowerment & Gender Rights",
      tag: "Gender",
      desc: "Awareness sessions organized on Women's Day to introduce economic tools, skill centers, and legal rights awareness.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      stats: "5+ Sewing Centers Established",
    },
    {
      category: "climate",
      title: "Environmental Resilience & Earth Day",
      tag: "Climate",
      desc: "Mass tree plantation and climate awareness campaigns held in coordination with district authorities and municipal divisions.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
      stats: "Urban Plantation Drives",
    },
    {
      category: "social",
      title: "Social Inclusion Sessions",
      tag: "Inclusion",
      desc: "Targeted awareness workshops conducted in minority areas (such as Gulberg Town, Karachi) addressing basic rights and civic participation.",
      image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800",
      stats: "Community Capacity Building",
    },
    {
      category: "health",
      title: "Heat Stroke Prevention & Relief Camps",
      tag: "Health & Emergency",
      desc: "Heat stroke awareness and response camps arranged across major Karachi zones in coordination with the Commissioner Karachi.",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800",
      stats: "Citywide Relief Operations",
    },
    {
      category: "health",
      title: "Free Medical Camps & Dispensary Services",
      tag: "Healthcare",
      desc: "Free medical camps arranged with the support of Indus Hospital in Landhi and Korangi slum areas, alongside localized dispensaries.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
      stats: "Indus Hospital Partnership",
    },
  ];

  const filteredCampaigns =
    activeTab === "all"
      ? campaigns
      : campaigns.filter((c) => c.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 pt-28 sm:pt-32 pb-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Navigation Bar / Action Header */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-all bg-white px-4 py-2.5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Programs
          </button>

          <div className="flex items-center gap-2">
            <span className="bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-200/60 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Advocacy & Social Reform
            </span>
            <button className="p-2.5 text-slate-500 hover:text-emerald-700 bg-white border border-slate-200/80 rounded-2xl transition-all shadow-sm hover:shadow">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hero Section Banner */}
        <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-emerald-800/40">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 -mb-10 w-64 h-64 rounded-full bg-teal-400/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 space-y-6 max-w-3xl">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 shadow-inner">
              <Megaphone className="w-7 h-7" />
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Awareness <span className="text-emerald-400">Sessions</span>
            </h1>

            <p className="text-emerald-100/90 text-base sm:text-lg leading-relaxed font-normal">
              Grassroots awareness campaigns on out-of-school children, gender rights, health interventions, and climate change across rural and marginalized urban communities.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-emerald-200/90 border-t border-emerald-800/60">
              <div className="flex items-center gap-2 bg-emerald-900/40 px-3.5 py-2 rounded-xl border border-emerald-800/40">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Sindh, Punjab & KPK</span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-900/40 px-3.5 py-2 rounded-xl border border-emerald-800/40">
                <Users className="w-4 h-4 text-emerald-400" />
                <span>Grassroots Communities</span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-900/40 px-3.5 py-2 rounded-xl border border-emerald-800/40">
                <HeartHandshake className="w-4 h-4 text-emerald-400" />
                <span>USWA Initiative</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Out-of-School Children</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Community mobilization drives in Katchi Abadis and rural villages to motivate illiterate parents, reopen closed schools, and increase child enrollment.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Gender & Basic Rights</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Dedicated Women's Day awareness sessions, legal/human rights capacity building, and social empowerment programs for marginalized women and minority communities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Climate & Environment</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Earth Day campaigns, heat stroke emergency response drives, and urban tree plantation awareness conducted with local municipal bodies.
            </p>
          </div>
        </div>

        {/* Health & Emergency Awareness Camps */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <span className="text-emerald-600 text-xs font-bold uppercase tracking-wider">Health Interventions</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Health & Emergency Awareness Camps</h2>
            </div>
            <Stethoscope className="w-6 h-6 text-emerald-600" />
          </div>

          <p className="text-slate-600 text-sm leading-relaxed">
            USWA conducts critical medical awareness camps and emergency interventions targeting underserved slum populations and urban centers suffering from extreme weather conditions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex flex-col justify-between">
              <div className="space-y-3">
                <img
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800"
                  alt="Heat Stroke Camp"
                  className="w-full h-44 object-cover rounded-xl"
                />
                <h3 className="font-bold text-slate-900 text-base">Heat Stroke Awareness Camps</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Organized across key areas of Karachi in coordination with the Commissioner Karachi to provide relief, first-aid, and heat management awareness during severe heatwaves.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 flex justify-between items-center text-xs font-semibold text-emerald-700">
                <span>Coordination: Commissioner Karachi</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex flex-col justify-between">
              <div className="space-y-3">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
                  alt="Medical Camp"
                  className="w-full h-44 object-cover rounded-xl"
                />
                <h3 className="font-bold text-slate-900 text-base">Free Medical Camps (Landhi & Korangi)</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Arranged in partnership with Indus Hospital to provide healthcare consultations and emergency dispensaries for families in Katchi Abadis lacking medical facilities.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 flex justify-between items-center text-xs font-semibold text-emerald-700">
                <span>Partner: Indus Hospital</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Environmental & Urban Plantation Drives */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <span className="text-emerald-600 text-xs font-bold uppercase tracking-wider">Climate Action</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Environmental & Plantation Drives</h2>
            </div>
            <TreePine className="w-6 h-6 text-emerald-600" />
          </div>

          <p className="text-slate-600 text-sm leading-relaxed">
            In response to rising temperatures and ecological challenges, USWA executes plantation awareness campaigns and Earth Day drives with civil administration support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-3">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
                alt="Urban Plantation"
                className="w-full h-44 object-cover rounded-xl"
              />
              <h3 className="font-bold text-slate-900 text-base">Karachi Urban Plantation Campaign</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Organized with the Chief Secretary Sindh and Commissioner Karachi Division to green roadside areas and create local climate resilience.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-3">
              <img
                src="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&q=80&w=800"
                alt="Earth Day Campaign"
                className="w-full h-44 object-cover rounded-xl"
              />
              <h3 className="font-bold text-slate-900 text-base">Earth Day Awareness with Nomadic Communities</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Special environmental awareness sessions conducted in nomad settlements and marginalized localities across Karachi.
              </p>
            </div>
          </div>
        </div>

        {/* Immunization & Health Mobilization */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <span className="text-emerald-600 text-xs font-bold uppercase tracking-wider">Public Health Outreach</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Immunization & Supportive Monitoring</h2>
            </div>
            <Droplet className="w-6 h-6 text-emerald-600" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <img
                src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80&w=800"
                alt="TCV Mobilization"
                className="w-full h-56 object-cover rounded-2xl"
              />
            </div>
            <div className="lg:col-span-2 space-y-4 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-slate-900">TCV & UNICEF Health Campaign Monitoring</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                USWA active teams lead field-level social mobilization for Typhoid Conjugate Vaccine (TCV) drives and work alongside international UNICEF monitoring staff to evaluate health programs.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100 text-emerald-800 font-medium">
                  • TCV Vaccine Drives
                </div>
                <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100 text-emerald-800 font-medium">
                  • UNICEF Monitoring Support
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Content & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Main Overview */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Program Overview & Impact
                </h2>
                <Award className="w-6 h-6 text-emerald-600" />
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  United Social Watch & Advocacy (USWA) conducts structured awareness sessions to educate and capacitate rural and slum-dwelling communities on their fundamental social, legal, and human rights.
                </p>
                <p>
                  Through direct community mobilization, master trainers, and district coordinators, these sessions target deep-rooted social challenges ranging from educational neglect to environmental threats.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="pt-4">
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Filter Highlights
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pb-2">
                  {[
                    { id: "all", label: "All Campaigns" },
                    { id: "education", label: "Education" },
                    { id: "gender", label: "Gender Rights" },
                    { id: "climate", label: "Climate" },
                    { id: "health", label: "Health & Care" },
                    { id: "social", label: "Inclusion" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`text-xs font-semibold px-3.5 py-2 rounded-xl transition-all ${
                        activeTab === tab.id
                          ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200/80"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Campaign Cards List with Images */}
              <div className="space-y-4 pt-2">
                {filteredCampaigns.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row items-start gap-4 bg-slate-50/80 p-4 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-all"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full sm:w-32 h-24 object-cover rounded-xl shrink-0"
                    />
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <strong className="text-slate-800 font-bold text-sm sm:text-base">
                          {item.title}
                        </strong>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                      <span className="inline-block text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                        {item.stats}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Sidebar Section */}
          <div className="space-y-6 sticky top-28 sm:top-32">
            <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-900 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-center gap-2 border-b border-emerald-800/80 pb-4">
                <Shield className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-emerald-100">
                  Intervention Scope
                </h3>
              </div>

              <div className="space-y-5 text-xs sm:text-sm">
                <div className="bg-emerald-900/40 p-4 rounded-2xl border border-emerald-800/60">
                  <span className="text-[10px] uppercase tracking-wider text-emerald-400 block font-bold mb-1">
                    Target Regions
                  </span>
                  <p className="text-emerald-100/90 font-medium leading-relaxed">
                    Karachi (Gadap, Malir, Korangi, Landhi), Khairpur, Larkana, Dadu, Rajanpur
                  </p>
                </div>

                <div className="bg-emerald-900/40 p-4 rounded-2xl border border-emerald-800/60">
                  <span className="text-[10px] uppercase tracking-wider text-emerald-400 block font-bold mb-1">
                    Target Groups
                  </span>
                  <p className="text-emerald-100/90 font-medium leading-relaxed">
                    Out-of-school children, women, local farmers, and marginalized rural families
                  </p>
                </div>

                <div className="bg-emerald-900/40 p-4 rounded-2xl border border-emerald-800/60">
                  <span className="text-[10px] uppercase tracking-wider text-emerald-400 block font-bold mb-1">
                    Implementation Partner
                  </span>
                  <p className="text-emerald-100/90 font-medium leading-relaxed">
                    United Social Watch & Advocacy (USWA)
                  </p>
                </div>
              </div>

              {/* Updated Support Button */}
              <div className="pt-2">
                <button
                  onClick={() => navigate("/contact")}
                  className="w-full py-4 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-emerald-950/50 hover:shadow-emerald-600/30 text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Support This Campaign</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}