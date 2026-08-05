import React, { useState } from 'react';
import { 
  Users, 
  FileCheck, 
  Activity, 
  CheckCircle2, 
  Syringe, 
  GraduationCap, 
  Stethoscope, 
  Pill, 
  Baby, 
  HeartPulse, 
  Eye, 
  Microscope, 
  ShieldAlert, 
  Cross,
  ArrowRight,
  Sparkles,
  BarChart3,
  Award,
  Globe2,
  X,
  Calendar,
  Building2,
  Check,
  HeartHandshake
} from 'lucide-react';

const impactMetrics = [
  { label: "Surveys Conducted", value: "50+", icon: BarChart3, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Beneficiaries Reached", value: "100k+", icon: Users, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Partner Organizations", value: "12+", icon: Globe2, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Districts Covered", value: "15+", icon: Award, color: "text-emerald-600", bg: "bg-emerald-50" },
];

const focusAreas = [
  // SECTION A: SURVEYS & MONITORING
  {
    id: "katchi-abadi",
    section: "A",
    sectionName: "Surveys & Monitoring",
    title: "Katchi Abadi Field Surveys",
    category: "Community Research",
    badge: "Social Survey",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
    description: "Door-to-door socio-economic mapping across informal settlements and rural areas in Sindh.",
    initiatives: [
      { icon: Users, title: "Demographic Mapping", desc: "Data collection on household income & basic access." },
      { icon: FileCheck, title: "Needs Assessment", desc: "Gaps in sanitation, safe water & infrastructure." }
    ]
  },
  {
    id: "unicef-monitoring",
    section: "A",
    sectionName: "Surveys & Monitoring",
    title: "UNICEF Health Monitoring",
    category: "Health Sector",
    badge: "UNICEF Partner",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    description: "Supportive monitoring & quality supervision for healthcare facilities with UNICEF.",
    initiatives: [
      { icon: Activity, title: "Supportive Supervision", desc: "Monitoring primary health centers & cold chains." },
      { icon: CheckCircle2, title: "Quality Audits", desc: "Evaluating healthcare delivery and compliance." }
    ]
  },
  {
    id: "tcv-vaccination",
    section: "A",
    sectionName: "Surveys & Monitoring",
    title: "TCV Immunization Drives",
    category: "Public Health",
    badge: "Field Supervision",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
    description: "Real-time field tracking during Typhoid Conjugate Vaccine & routine immunization drives.",
    initiatives: [
      { icon: Syringe, title: "Campaign Tracking", desc: "Tracking mobile health teams & micro-plans." },
      { icon: Users, title: "Refusal Resolution", desc: "Mobilization assessments for vaccine hesitancy." }
    ]
  },
  {
    id: "oosc-assessment",
    section: "A",
    sectionName: "Surveys & Monitoring",
    title: "Out-of-School Children",
    category: "Education",
    badge: "Baseline Study",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
    description: "Baseline assessments evaluating school dropouts and out-of-school demographics.",
    initiatives: [
      { icon: GraduationCap, title: "Dropout Analysis", desc: "Identifying economic & social root causes." },
      { icon: FileCheck, title: "Enrollment Tracking", desc: "Mainstreaming children into formal schools." }
    ]
  },

  // SECTION B: HEALTHCARE & RELIEF
  {
    id: "free-medical-camps",
    section: "B",
    sectionName: "Healthcare & Relief",
    title: "Mobile Medical Camps",
    category: "Primary Care",
    badge: "Field Healthcare",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
    description: "Free diagnostic consultations & essential medicine distribution for remote communities.",
    initiatives: [
      { icon: Stethoscope, title: "General OPD", desc: "On-site diagnostic consultations by doctors." },
      { icon: Pill, title: "Free Medicine", desc: "Dispensing essential treatments free of cost." }
    ]
  },
  {
    id: "maternal-child-health",
    section: "B",
    sectionName: "Healthcare & Relief",
    title: "Maternal & Child Health",
    category: "Specialized Care",
    badge: "MCH Welfare",
    image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&w=600&q=80",
    description: "Dedicated prenatal screening, reproductive health care, and child nutrition drives.",
    initiatives: [
      { icon: Baby, title: "Antenatal Screening", desc: "Health checks for mothers to lower mortality rates." },
      { icon: HeartPulse, title: "Child Nutrition", desc: "Malnutrition screenings & dietary supplements." }
    ]
  },
  {
    id: "diagnostic-eye-camps",
    section: "B",
    sectionName: "Healthcare & Relief",
    title: "Eye Care & Vision Camps",
    category: "Specialty Clinics",
    badge: "Vision Care",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
    description: "Free eye examinations, reading glasses distribution, and cataract surgical referrals.",
    initiatives: [
      { icon: Eye, title: "Vision Testing", desc: "Free eye exams & corrective glasses distribution." },
      { icon: Microscope, title: "Cataract Referrals", desc: "Subsidized surgical care with partner hospitals." }
    ]
  },
  {
    id: "disease-awareness-drives",
    section: "B",
    sectionName: "Healthcare & Relief",
    title: "Epidemic Prevention Drives",
    category: "Preventive Care",
    badge: "Health Awareness",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=600&q=80",
    description: "Community education sessions targeting malaria, dengue, waterborne illness prevention.",
    initiatives: [
      { icon: ShieldAlert, title: "Hygiene Workshops", desc: "Hand hygiene & safe water handling guidance." },
      { icon: Cross, title: "Vector Control", desc: "Mosquito net distribution & seasonal campaigns." }
    ]
  }
];

const timelineMilestones = [
  {
    year: "2019",
    title: "Supportive Monitoring Expansion",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80",
    desc: "Partnered on health sector supervision and district-wide field monitoring."
  },
  {
    year: "2020",
    title: "Emergency Relief & Medical Camps",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=500&q=80",
    desc: "Mobilized free diagnostic medical camps and emergency healthcare relief."
  },
  {
    year: "2021",
    title: "Education & Enrollment Surveys",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=500&q=80",
    desc: "Launched field research targeting out-of-school children across Sindh."
  }
];

const complianceBadges = [
  "FBR Tax Registered",
  "Annual Audit Compliant",
  "UNICEF Supportive Partner",
  "District Health Authority Aligned"
];

export default function AboutUsPageComplete() {
  const [activeTab, setActiveTab] = useState("ALL");
  const [selectedProgram, setSelectedProgram] = useState(null);

  const filteredPrograms = focusAreas.filter((item) => {
    if (activeTab === "A") return item.section === "A";
    if (activeTab === "B") return item.section === "B";
    return true;
  });

  return (
    <div className="bg-white text-slate-900 min-h-screen w-full overflow-x-hidden">
      
      {/* ================= 1. HERO SECTION WITH IMAGE ================= */}
      <section className="bg-[#1b775a] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative top-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 shrink-0" /> About United Social Watch & Advocacy
            </div>
            
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Empowering Communities Through Assessment & Relief
            </h1>
            
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl">
              USWA is dedicated to driving sustainable social change across Sindh through field research, health monitoring partnerships, and direct medical assistance.
            </p>
          </div>

          <div className="lg:col-span-5 h-64 sm:h-80 rounded-2xl overflow-hidden border border-emerald-500/20 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80" 
              alt="USWA Community Outreach" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= 2. IMPACT METRICS SECTION ================= */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-slate-50 border-b border-slate-200 mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {impactMetrics.map((metric, idx) => {
              const MetricIcon = metric.icon;
              return (
                <div key={idx} className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-3.5 sm:gap-4">
                  <div className={`p-3 sm:p-3.5 rounded-xl ${metric.bg} ${metric.color} shrink-0`}>
                    <MetricIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 truncate">
                      {metric.value}
                    </div>
                    <div className="text-xs font-semibold text-slate-500 truncate">
                      {metric.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 3. FOCUS AREAS SECTION WITH CARDS & IMAGES ================= */}
      <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6 sm:pb-8">
            <div className="space-y-2 sm:space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                Core Focus Areas
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
                Our Programs & Initiatives
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm max-w-lg">
                Explore our combined research, survey monitoring, and healthcare operational divisions.
              </p>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200 overflow-x-auto w-full md:w-auto">
              <button
                onClick={() => setActiveTab("ALL")}
                className={`flex-1 md:flex-none px-3 sm:px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  activeTab === "ALL" 
                    ? "bg-white text-slate-900 shadow-sm" 
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                All Focus Areas
              </button>
              <button
                onClick={() => setActiveTab("A")}
                className={`flex-1 md:flex-none px-3 sm:px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  activeTab === "A" 
                    ? "bg-emerald-600 text-white shadow-sm" 
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Sec A: Surveys
              </button>
              <button
                onClick={() => setActiveTab("B")}
                className={`flex-1 md:flex-none px-3 sm:px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  activeTab === "B" 
                    ? "bg-teal-600 text-white shadow-sm" 
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Sec B: Healthcare
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredPrograms.map((program) => {
              const isSecA = program.section === "A";

              return (
                <div
                  key={program.id}
                  onClick={() => setSelectedProgram(program)}
                  className="group bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-2xl overflow-hidden transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-3.5">
                    <div className="h-40 w-full overflow-hidden relative bg-slate-100">
                      <img 
                        src={program.image} 
                        alt={program.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm ${
                        isSecA ? "bg-emerald-600 text-white" : "bg-teal-600 text-white"
                      }`}>
                        Section {program.section}
                      </span>
                    </div>

                    <div className="px-5 space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-semibold text-emerald-700">{program.category}</span>
                        <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 truncate">
                          {program.badge}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {program.title}
                      </h3>

                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                        {program.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600 group-hover:text-slate-900">
                    <span>View Directives</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= 4. TIMELINE WITH IMAGES ================= */}
      <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 sm:space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
              Our Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Key Organizational Milestones
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Key achievements and program expansions delivered across target districts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {timelineMilestones.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col">
                <div className="h-36 w-full relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1 text-xs font-bold font-mono text-white bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md">
                    <Calendar className="w-3.5 h-3.5" /> {item.year}
                  </div>
                </div>
                <div className="p-5 space-y-2 flex-1">
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 5. GOVERNANCE & COMPLIANCE ================= */}
      <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
          
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-emerald-600 shrink-0" /> Organizational Compliance
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Registered & Audit-Compliant Organization
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Maintains financial accountability, FBR tax filings, and institutional alignment with national health and education frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 shrink-0 w-full md:w-auto">
            {complianceBadges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{badge}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 6. CALL TO ACTION FOOTER BANNER ================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          <HeartHandshake className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-400 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Partner With USWA for Social Development
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Collaborate on field surveys, health monitoring initiatives, and primary medical outreach programs.
          </p>
          <div className="pt-2">
            <button className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg transition-colors inline-flex items-center justify-center gap-2">
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= MODAL DETAIL OVERLAY (NO IMAGE) ================= */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white border border-slate-200 w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col my-auto">
            
            {/* Modal Header */}
            <div className="p-5 sm:p-6 pb-4 border-b border-slate-100 flex items-start justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded ${
                    selectedProgram.section === "A" ? "bg-emerald-50 text-emerald-700" : "bg-teal-50 text-teal-700"
                  }`}>
                    Section {selectedProgram.section}: {selectedProgram.sectionName}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    {selectedProgram.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{selectedProgram.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProgram(null)}
                className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 space-y-5 overflow-y-auto">
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {selectedProgram.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Initiatives & Directives
                </h4>
                {selectedProgram.initiatives.map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                        <ItemIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-slate-900">{item.title}</h5>
                        <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => setSelectedProgram(null)}
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
              >
                Close Details
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}