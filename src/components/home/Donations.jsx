import React from 'react';
import { 
  Heart, 
  Package, 
  Sun, 
  BookOpen, 
  Users, 
  Droplet,
  Scissors,
  Stethoscope,
  Trees,
  Syringe,
  ShieldCheck,
  Building2
} from 'lucide-react';

export default function DonationsPage() {
 
  const images = {
    hero: "https://i.pinimg.com/1200x/29/ff/a4/29ffa4a634f3a98e162c1750bf0ef2bf.jpg",
    foodDistribution: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80",
    heatwaveCamp: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=600&q=80",
    learningMaterial: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
    medicalCamp: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-700 font-sans">
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-6 space-y-16">

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center h-[100vh]">
          <div className="space-y-4">
            <div className="relative w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-emerald-600">
              <Heart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></span>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider font-serif">
                Our Focus
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                Donations & Relief
              </h1>
            </div>

            <p className="text-base text-emerald-800 font-medium leading-relaxed font-serif">
              Charity interventions, heatwave relief camps, and essential learning material distributions.
            </p>

            <div className="w-12 h-1 bg-emerald-600 rounded-full"></div>

            <p className="text-gray-600 text-sm leading-relaxed max-w-xl font-serif">
              USWA believes in standing with communities during times of need. Through your generous donations and our dedicated relief efforts, we provide immediate support to vulnerable families, distribute essential supplies, and run relief camps during extreme weather conditions.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200">
            <div className="w-full h-[360px] bg-slate-100">
              <img 
                src={images.hero} 
                alt="USWA Relief Activity" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/80">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider font-serif">
              Our Initiatives
            </span>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">What We Do</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200/60 flex flex-col items-center text-center space-y-3 hover:shadow-sm transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-emerald-100/60 flex items-center justify-center text-emerald-600">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Charity Interventions</h3>
              <p className="text-sm text-gray-600 font-serif leading-relaxed">
                Supporting underprivileged families with food, clothing, and essential items.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200/60 flex flex-col items-center text-center space-y-3 hover:shadow-sm transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-emerald-100/60 flex items-center justify-center text-emerald-600">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Heatwave Relief Camps</h3>
              <p className="text-sm text-gray-600 font-serif leading-relaxed">
                Arranging relief camps and providing water, ORS, and medical assistance.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200/60 flex flex-col items-center text-center space-y-3 hover:shadow-sm transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-emerald-100/60 flex items-center justify-center text-emerald-600">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Learning Material Distributions</h3>
              <p className="text-sm text-gray-600 font-serif leading-relaxed">
                Distributing books, stationery, and educational kits to children in need.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200/60 flex flex-col items-center text-center space-y-3 hover:shadow-sm transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-emerald-100/60 flex items-center justify-center text-emerald-600">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Community Support</h3>
              <p className="text-sm text-gray-600 font-serif leading-relaxed">
                Standing with communities in emergencies and helping them rebuild with dignity.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/80">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider font-serif">
              Numbers & Stats
            </span>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Our Impact</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-2xl font-extrabold text-emerald-600">5000+</span>
              <span className="text-xs font-medium text-gray-600 font-serif">Families Supported</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Droplet className="w-5 h-5" />
              </div>
              <span className="text-2xl font-extrabold text-emerald-600">25+</span>
              <span className="text-xs font-medium text-gray-600 font-serif">Heatwave Relief Camps</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-2xl font-extrabold text-emerald-600">10,000+</span>
              <span className="text-xs font-medium text-gray-600 font-serif">Learning Materials Distributed</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Heart className="w-5 h-5" />
              </div>
              <span className="text-2xl font-extrabold text-emerald-600">35+</span>
              <span className="text-xs font-medium text-gray-600 font-serif">Relief & Charity Activities</span>
            </div>
          </div>
        </section>

        <section className="space-y-6 py-4">
          <div className="text-center space-y-1.5">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest font-serif">
              Visual Highlights
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Glimpses of Our Relief Work
            </h2>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer aspect-[4/3] sm:h-64 lg:h-72 w-full bg-slate-100 border border-slate-200">
              <img 
                src={images.foodDistribution} 
                alt="Food & Essential Items Distribution" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 text-center">
                <h3 className="font-bold text-sm md:text-base text-white font-serif transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Food & Essential Items Distribution
                </h3>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer aspect-[4/3] sm:h-64 lg:h-72 w-full bg-slate-100 border border-slate-200">
              <img 
                src={images.heatwaveCamp} 
                alt="Heatwave Relief Camp" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 text-center">
                <h3 className="font-bold text-sm md:text-base text-white font-serif transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Heatwave Relief Camp
                </h3>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer aspect-[4/3] sm:h-64 lg:h-72 w-full bg-slate-100 border border-slate-200">
              <img 
                src={images.learningMaterial} 
                alt="Learning Material Distribution" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 text-center">
                <h3 className="font-bold text-sm md:text-base text-white font-serif transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Learning Material Distribution
                </h3>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer aspect-[4/3] sm:h-64 lg:h-72 w-full bg-slate-100 border border-slate-200">
              <img 
                src={images.medicalCamp} 
                alt="Medical Relief Camp" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 text-center">
                <h3 className="font-bold text-sm md:text-base text-white font-serif transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Medical Relief Camp
                </h3>
              </div>
            </div>

          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <Scissors className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider font-serif">Vocational Training</span>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Women Empowerment & Skill Development</h2>
            </div>
          </div>
          <p className="text-sm text-gray-600 font-serif mb-6 leading-relaxed">
            USWA has successfully set up Sewing & Vocational Skill Institutes for girls and young women across rural Sindh to promote economic independence and sustainable livelihood.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Imam Ali Gaincho, Kathore",
              "Khohra Gambat, Khairpur",
              "Khamiso Goth, Gadap Town",
              "Usman Kalhoro, Larkana",
              "Jani Buriro, Kotdiji",
              "Dhabeji, District Thatta"
            ].map((location, idx) => (
              <div key={idx} className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-center font-semibold text-xs text-gray-700">
                📍 {location}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider font-serif">Grassroots Education</span>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">School Infrastructure & Literacy Drives</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 space-y-2">
              <h3 className="font-bold text-gray-900 text-sm">Furniture & Classrooms Setup</h3>
              <p className="text-xs text-gray-600 font-serif leading-relaxed">
                Partnered with Sindh Education Foundation (SEF) to arrange proper seating, desks, and classroom essentials for remote village schools.
              </p>
            </div>
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 space-y-2">
              <h3 className="font-bold text-gray-900 text-sm">Katchi Abadi Community Schools</h3>
              <p className="text-xs text-gray-600 font-serif leading-relaxed">
                Established schools in underserved areas such as Village Imam Ali Gaincho with over 150+ enrolled students.
              </p>
            </div>
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 space-y-2">
              <h3 className="font-bold text-gray-900 text-sm">Deeni Taleem & Noorani Qaidas</h3>
              <p className="text-xs text-gray-600 font-serif leading-relaxed">
                Distributed 80+ Noorani Qaidas & educational books to young children and engaged local communities to boost youth attendance.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: Community Health & Emergency Care Services */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider font-serif">Healthcare Outreach</span>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Medical Camps & Local Dispensaries</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-slate-200 p-5 rounded-xl space-y-2">
              <h3 className="font-bold text-gray-900 text-sm">Katchi Abadi Emergency Dispensaries</h3>
              <p className="text-xs text-gray-600 font-serif leading-relaxed">
                Set up local dispensary services in distant slum areas of Landhi and Korangi to provide immediate first-aid medical care where hospitals were 10km away.
              </p>
            </div>
            <div className="border border-slate-200 p-5 rounded-xl space-y-2">
              <h3 className="font-bold text-gray-900 text-sm">Indus Hospital Partnership Camps</h3>
              <p className="text-xs text-gray-600 font-serif leading-relaxed">
                Organized free medical & health diagnosis camps in Landhi with the technical support of Indus Hospital experts.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: Youth Blood Donation Drives */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <Droplet className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider font-serif">Life Saving Support</span>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Young Stars Blood Donation Wing</h2>
            </div>
          </div>
          <p className="text-sm text-gray-600 font-serif leading-relaxed mb-4">
            USWA manages a dedicated youth blood donor group called **"Young Stars"**. In collaboration with **Hussaini Blood Bank**, we regularly host blood donation camps across Karachi to save critical emergency patients.
          </p>
        </section>

        {/* SECTION 5: Environmental & Urban Plantation Campaigns */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <Trees className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider font-serif">Climate Action</span>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Urban Tree Plantation Drive</h2>
            </div>
          </div>
          <p className="text-sm text-gray-600 font-serif leading-relaxed">
            In partnership with the Chief Secretary Sindh and Commissioner Karachi Division, USWA volunteers active tree planting initiatives across major metropolitan roads and rural belts to combat heatwaves and environmental degradation.
          </p>
        </section>
        
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <Syringe className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider font-serif">Public Health Campaigns</span>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Immunization & UNICEF M&E Monitoring</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 space-y-2">
              <h3 className="font-bold text-gray-900 text-sm">TCV Typhoid Mobilization Drives</h3>
              <p className="text-xs text-gray-600 font-serif leading-relaxed">
                Conducted door-to-door community field mobilization for the Typhoid Conjugate Vaccine (TCV) drives across rural & urban Sindh.
              </p>
            </div>
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60 space-y-2">
              <h3 className="font-bold text-gray-900 text-sm">UNICEF Supportive Monitoring</h3>
              <p className="text-xs text-gray-600 font-serif leading-relaxed">
                USWA staff collaborated directly with UNICEF foreign teams to monitor, evaluate, and audit public health and child wellness activities.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider font-serif">Trust & Governance</span>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Compliance & Audited Records</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-slate-200 p-4 rounded-xl space-y-2">
              <h4 className="font-bold text-sm text-gray-900">FBR Tax Returns</h4>
              <p className="text-xs text-emerald-700 font-medium font-serif">✅ Up-to-date FBR Tax Return Filing (2013 - 2021 Complete)</p>
            </div>
            <div className="border border-slate-200 p-4 rounded-xl space-y-2">
              <h4 className="font-bold text-sm text-gray-900">Annual Audit Reports</h4>
              <p className="text-xs text-emerald-700 font-medium font-serif">✅ Certified by Syed Hassan & Co. Chartered Accountants</p>
            </div>
          </div>
        </section>

        {/* Section: Bottom Banner CTA */}
        <section className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900">
                Be the Reason Someone Smiles Today
              </h3>
              <p className="text-xs text-gray-500 mt-0.5 font-serif">
                Your donation can bring food to the hungry, water to the thirsty, and hope to those in need.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1 shrink-0">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 font-semibold text-sm shadow-md transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
              <Heart className="w-4 h-4 fill-current" />
              Donate Now
            </button>
            <span className="text-xs text-gray-400 italic font-serif">
              Every act of kindness counts.
            </span>
          </div>
        </section>

      </main>
    </div>
  );
}