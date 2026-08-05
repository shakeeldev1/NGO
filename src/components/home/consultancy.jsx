import React from "react";
import { useNavigate } from "react-router-dom"; // Next.js ke liye: import { useRouter } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  Users,
  ClipboardList,
  LineChart,
  Sparkles,
  ShieldCheck,
  Globe2,
  Award,
  BookOpen,
  Heart,
  Scale,
  CloudSun,
  ShieldAlert,
} from "lucide-react";

export default function Consultancy() {
  const navigate = useNavigate();

  const handleContactNavigation = () => {
    navigate("/contact");
  };

  const services = [
    { 
      title: "Strategic Advisory", 
      desc: "Long-term organizational roadmap and strategic direction.", 
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
      features: ["Vision Alignment", "Risk Assessment", "Growth Strategy"]
    },
    { 
      title: "Institutional Development", 
      desc: "Building resilient organizational structures and governance.", 
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      features: ["Governance", "Structural Audits", "Policy Framing"]
    },
    { 
      title: "Local Government Networking", 
      desc: "Establishing strong multi-level public sector alliances.", 
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80",
      features: ["Public Sector Engagement", "Civic Alliances", "Liaisoning"]
    },
    { 
      title: "Policy & Advocacy Support", 
      desc: "Evidence-based advocacy and policy reform frameworks.", 
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
      features: ["Policy Drafts", "Impact Advocacy", "Reform Studies"]
    },
    { 
      title: "Project Planning & Design", 
      desc: "End-to-end sustainable project architecture and design.", 
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80",
      features: ["Framework Design", "Budget Planning", "Feasibility"]
    },
    { 
      title: "Monitoring & Evaluation", 
      desc: "Data-driven impact measurement and performance assessment.", 
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
      features: ["KPI Tracking", "Field Audits", "Impact Metrics"]
    },
    { 
      title: "Capacity Building", 
      desc: "Empowering teams through targeted skill & training programs.", 
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
      features: ["Staff Training", "Workshops", "Skill Enhancement"]
    },
    { 
      title: "Proposal Development", 
      desc: "High-impact funding proposals and grant drafting.", 
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
      features: ["Grant Writing", "Donor Pitching", "Concept Notes"]
    },
  ];

  const expertise = [
    { name: "Education", icon: BookOpen },
    { name: "Health", icon: Heart },
    { name: "Women Empowerment", icon: Users },
    { name: "Human Rights", icon: Scale },
    { name: "Climate Change", icon: CloudSun },
    { name: "Community Development", icon: Globe2 },
    { name: "Governance", icon: Building2 },
    { name: "Disaster Management", icon: ShieldAlert },
  ];

  const process = [
    { step: "01", title: "Initial Consultation", desc: "Understanding core objectives and defining mission parameters." },
    { step: "02", title: "Needs Assessment", desc: "In-depth research, baseline analysis, and operational audits." },
    { step: "03", title: "Strategy Development", desc: "Designing tailored, actionable solutions and frameworks." },
    { step: "04", title: "Implementation Support", desc: "Hands-on execution guidance and stakeholder engagement." },
    { step: "05", title: "Monitoring & Evaluation", desc: "Real-time tracking, metrics validation, and optimization." },
    { step: "06", title: "Final Reporting", desc: "Comprehensive impact documentation and sustainable handoff." },
  ];

  return (
    <main className="bg-slate-50/50 text-slate-800 antialiased font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-100">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 -mb-12 w-80 h-80 bg-teal-50/60 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-6 pt-18">
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/60 text-emerald-700 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                Consultancy Services
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Strategic <span className="text-emerald-600">Consultancy</span> & Policy Solutions
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-xl">
                We provide strategic advisory, local government networking, institutional development, policy guidance, and sustainable development solutions for NGOs, government institutions, and development partners.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button 
                  onClick={handleContactNavigation}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-2xl flex items-center gap-2.5 transition-all shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 hover:-translate-y-0.5 text-sm cursor-pointer"
                >
                  Request Consultation
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-50 px-4 py-3 rounded-2xl border border-slate-200/80">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Trusted Development Partner
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 pt-18">
              <div className="relative w-full h-[280px] sm:h-[360px] overflow-hidden rounded-3xl shadow-xl shadow-emerald-950/10 border border-slate-100">
                <img
                  src="https://i.pinimg.com/736x/e7/10/0b/e7100bab8384d6d9c7ecc26668fb0215.jpg"
                  alt="Strategic Consultancy Team"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-emerald-600 font-bold text-xs uppercase tracking-wider bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
              Who We Are
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              About Our Consultancy
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg">
              <p>
                Our consultancy services help organizations strengthen governance, improve institutional capacity, develop strategic plans, and build effective partnerships with government and development agencies.
              </p>
              <p>
                We combine field experience with policy knowledge to deliver practical, sustainable, and measurable solutions tailored to complex social and institutional landscapes.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-sm">Proven Impact</h5>
                  <p className="text-xs text-slate-500">Measurable Results</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-sm">Wide Network</h5>
                  <p className="text-xs text-slate-500">Government & NGOs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { title: "Institutional Development", icon: Building2, desc: "Building capacity & governance" },
              { title: "Government Networking", icon: Users, desc: "Fostering strategic alliances" },
              { title: "Strategic Planning", icon: ClipboardList, desc: "Actionable long-term blueprints" },
              { title: "Monitoring & Evaluation", icon: LineChart, desc: "Data driven impact tracking" },
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white transition-colors flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1">{card.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. SERVICES GRID WITH FEATURE TAGS (Learn More button removed) */}
      <section className="bg-slate-100/70 py-24 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-emerald-600 font-bold text-xs uppercase tracking-wider bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
              Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Consultancy Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Comprehensive strategic offerings designed to support institutions at every level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Service Card Image */}
                <div className="h-40 w-full overflow-hidden bg-slate-100 relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm text-emerald-600 flex items-center justify-center shadow-sm">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-bold text-slate-800 text-lg group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Feature Tags Added in Place of Learn More */}
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {item.features.map((feature, fIdx) => (
                      <span 
                        key={fIdx}
                        className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100/60"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. AREAS OF EXPERTISE */}
      <section className="py-24 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-emerald-600 font-bold text-xs uppercase tracking-wider bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
            Sectors
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Areas of Expertise
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Cross-functional knowledge and domain experience across critical development sectors.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {expertise.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-5 flex items-center gap-4 hover:border-emerald-500 hover:bg-emerald-50/30 hover:shadow-sm transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-50 text-slate-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-semibold text-slate-800 text-sm group-hover:text-slate-900">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. CONSULTANCY PROCESS */}
      <section className="bg-emerald-950 text-white py-24 relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest bg-emerald-900/80 px-3.5 py-1.5 rounded-full border border-emerald-800">
              Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Our Consultancy Process
            </h2>
            <p className="text-emerald-200/80 text-sm sm:text-base">
              A structured, outcome-driven methodology ensuring transparency and quality results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="bg-emerald-900/40 border border-emerald-800/60 rounded-2xl p-8 backdrop-blur-md hover:border-emerald-500/50 hover:bg-emerald-900/60 transition-all group relative"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-extrabold text-emerald-400 opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.step}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-emerald-400/50 group-hover:bg-emerald-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-emerald-200/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-24 max-w-5xl mx-auto px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 rounded-3xl p-10 sm:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-emerald-400/10 blur-2xl" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Need Professional Consultancy?
            </h2>

            <p className="text-emerald-100 text-base sm:text-lg leading-relaxed font-normal">
              Let&apos;s work together to strengthen institutions, improve governance, and create sustainable impact.
            </p>

            <div className="pt-2">
              <button 
                onClick={handleContactNavigation}
                className="bg-white text-emerald-950 font-bold px-4 py-2 rounded-2xl hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer"
              >
                Contact Our Team
                <ArrowRight className="w-5 h-5 text-emerald-700" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}