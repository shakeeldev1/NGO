import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Award, 
  MapPin, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  ArrowUpRight, 
  ShieldCheck, 
  Syringe, 
  UserCheck, 
  HeartPulse, 
  Activity, 
  Lightbulb,
  CheckCircle2
} from 'lucide-react';

const workshopMetrics = [
  { label: "Workshops Conducted", value: "120+", icon: GraduationCap },
  { label: "Community Members Trained", value: "15k+", icon: Users },
  { label: "Certified Facilitators", value: "45+", icon: Award },
  { label: "Target Districts Covered", value: "18+", icon: MapPin },
];

const workshopsData = [
  {
    id: "community-hygiene",
    category: "Public Health",
    title: "Community Hygiene & Sanitation",
    duration: "1 Day Workshop",
    audience: "Community leaders & local families",
    badge: "Field Training",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    description: "Interactive sessions on clean water storage, hand hygiene practices, and disease prevention in informal settlements.",
    modules: [
      { icon: HeartPulse, title: "Safe Water Practices", desc: "Boiling, chlorination, and safe storage techniques." },
      { icon: ShieldCheck, title: "Vector Prevention", desc: "Preventing dengue and malaria in domestic environments." }
    ]
  },
  {
    id: "immunization-advocacy",
    category: "Healthcare Mobilization",
    title: "Immunization Advocacy Training",
    duration: "2 Days Course",
    audience: "Field workers & health mobilizers",
    badge: "UNICEF Aligned",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    description: "Training mobilizers to address vaccine hesitancy, resolve household refusals, and track routine immunization drives.",
    modules: [
      { icon: Syringe, title: "Routine Immunization", desc: "Understanding dosage schedules and cold chain tracking." },
      { icon: UserCheck, title: "Refusal Resolution", desc: "Communication strategies for hesitant households." }
    ]
  },
  {
    id: "women-empowerment-co",
    category: "Social Mobilization",
    title: "Women CO Leadership Training",
    duration: "3 Days Workshop",
    audience: "Women Community Organizations (COs)",
    badge: "Leadership Drive",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    description: "Building self-reliance through leadership workshops, micro-livelihood management, and collective problem solving.",
    modules: [
      { icon: Users, title: "Organizational Governance", desc: "Conducting local meetings and record keeping." },
      { icon: Activity, title: "Financial Literacy", desc: "Basic savings management and micro-grant tracking." }
    ]
  },
  {
    id: "youth-education-outreach",
    category: "Education Advocacy",
    title: "Out-of-School Youth Orientation",
    duration: "1 Day Session",
    audience: "Parents, teachers, and local youth",
    badge: "Youth Program",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    description: "Community advocacy sessions focusing on re-enrolling out-of-school children and vocational pathways for youth.",
    modules: [
      { icon: BookOpen, title: "School Enrollment Drives", desc: "Identifying dropouts and facilitating school re-entry." },
      { icon: Lightbulb, title: "Skill Mapping", desc: "Guiding youth toward local vocational programs." }
    ]
  }
];

const processSteps = [
  { 
    num: "01", 
    title: "Needs Assessment", 
    desc: "On-ground field surveys to pinpoint critical knowledge gaps.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80"
  },
  { 
    num: "02", 
    title: "Curriculum Design", 
    desc: "Developing localized, multi-language training materials.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=500&q=80"
  },
  { 
    num: "03", 
    title: "Field Execution", 
    desc: "Interactive, scenario-based workshops led by master trainers.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80"
  },
  { 
    num: "04", 
    title: "Impact Audit", 
    desc: "Post-training evaluations and participant certification.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500&q=80"
  }
];

export default function WorkshopPageWideCatalog() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen w-full overflow-x-hidden">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="pt-8 sm:pt-10 md:pt-12 pb-4 px-4 sm:px-6 mt-10">
        <div className="max-w-7xl mx-auto bg-emerald-950 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-white relative overflow-hidden shadow-xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-[400px] sm:h-[400px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Text Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Empowering Field Forces
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Capacity Building & Community Training
              </h1>
              <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed max-w-2xl">
                Hands-on field education designed to strengthen healthcare delivery, social mobilization, and civic awareness across local communities.
              </p>
              <div className="pt-1">
                <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 active:scale-95">
                  <span>Request Workshop</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Pure Image Container (No text/overlay details) */}
            <div className="lg:col-span-5 h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-emerald-700/50 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop" 
                alt="Community Mobilization Initiative" 
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. IMPACT STATS BANNER ================= */}
      <section className="border-y border-emerald-100 bg-emerald-50/40 py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {workshopMetrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3.5 bg-white p-4 rounded-xl border border-emerald-100 shadow-sm">
                <div className="p-3 rounded-lg bg-emerald-100 text-emerald-700 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono truncate">{item.value}</div>
                  <div className="text-xs text-slate-600 font-medium truncate">{item.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= 3. WORKSHOP CATALOG ================= */}
      <section className="py-10 sm:py-14 px-2 sm:px-4 max-w-7xl mx-auto space-y-6">
        <div className="space-y-1.5 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
            Training Catalog
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Available Workshop Programs
          </h2>
          <p className="text-slate-600 text-sm">
            Tap on any workshop to inspect its modules and target audience.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5 w-full">
          {workshopsData.map((item) => {
            const isOpen = openAccordion === item.id;

            return (
              <div 
                key={item.id} 
                className={`border rounded-xl transition-all duration-200 overflow-hidden w-full ${
                  isOpen 
                    ? "bg-white border-emerald-500 shadow-md ring-1 ring-emerald-500" 
                    : "bg-white border-slate-200 hover:border-emerald-300 shadow-sm"
                }`}
              >
                {/* Header Row */}
                <div 
                  onClick={() => toggleAccordion(item.id)}
                  className="p-4 sm:p-5 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none"
                >
                  <div className="flex items-center gap-4">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover shrink-0 border border-slate-200"
                    />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                          {item.category}
                        </span>
                        <span className="text-xs bg-slate-100 text-slate-700 font-semibold px-2 py-0.5 rounded border border-slate-200">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900">{item.title}</h3>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 text-xs sm:text-sm text-slate-500 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    <span className="flex items-center gap-1.5 shrink-0 font-medium">
                      <Clock className="w-4 h-4 text-emerald-600" /> {item.duration}
                    </span>
                    <div className="p-1.5 rounded-lg bg-slate-100 text-slate-600">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Collapsible Content */}
                {isOpen && (
                  <div className="px-4 pb-5 pt-3 sm:px-5 space-y-4 border-t border-slate-100 bg-slate-50/50">
                   

                    <div className="text-xs sm:text-sm text-slate-600 bg-emerald-50/80 border border-emerald-100 p-3 rounded-lg">
                      Target Audience: <span className="text-slate-900 font-bold">{item.audience}</span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Included Modules
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {item.modules.map((mod, idx) => {
                          const ModIcon = mod.icon;
                          return (
                            <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-200/80 shadow-sm">
                              <div className="p-2 rounded bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                                <ModIcon className="w-4 h-4" />
                              </div>
                              <div>
                                <h5 className="text-xs sm:text-sm font-bold text-slate-900">{mod.title}</h5>
                                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{mod.desc}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= 4. PROCESS STEP TIMELINE ================= */}
   <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
  <div className="max-w-6xl mx-auto space-y-8">
    
    {/* Section Header */}
    <div className="text-center max-w-xl mx-auto space-y-2">
      <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100/60 px-3.5 py-1 rounded-full border border-emerald-200 inline-block">
        Execution Framework
      </span>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
        How We Conduct Workshops
      </h2>
    </div>

    {/* Balanced 4-Column Grid with Filled Content Area */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {processSteps.map((step, idx) => (
        <div 
          key={idx} 
          className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
        >
          {/* Top Image Container */}
          <div>
            <div className="h-44 shrink-0 w-full relative">
              <img 
                src={step.image} 
                alt={step.title} 
                className="w-full h-full object-cover" 
              />
              <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-black px-2.5 py-1 rounded-md font-mono shadow-sm">
                Step {step.num || idx + 1}
              </span>
            </div>

            {/* Content Area */}
            <div className="p-5 space-y-3">
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {step.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>

          {/* Bottom Highlight / Metadata Bar to eliminate empty visual void */}
          <div className="px-5 pb-5 pt-2 border-t border-slate-100 mt-auto flex items-center justify-between text-[11px] font-medium text-slate-500">
            <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
              ● Key Phase
            </span>
            <span className="text-slate-400">Structured Session</span>
          </div>

        </div>
      ))}
    </div>

  </div>
</section>

      {/* ================= 5. FOOTER CTA ================= */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 bg-emerald-950 text-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Partner for Tailored Training Programs</h2>
          <p className="text-emerald-100/80 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            We collaborate with civil society organizations, local government departments, and healthcare networks to deliver customized field workshops.
          </p>
          <div className="pt-2">
            <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md">
              Contact Workshop Coordinator
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}