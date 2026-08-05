import React, { useState } from 'react';
import { 
  Heart, 
  MapPin, 
  Users, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Minus,
  Droplet,
  Stethoscope,
  ShieldCheck,
  Award,
  HelpCircle
} from 'lucide-react';

export default function BloodCollection() {
 
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Who can donate blood?",
      answer: "Generally, anyone aged 18 to 65 years, weighing at least 50 kg (110 lbs), and in good health can donate blood. A basic medical checkup is done before every donation to ensure eligibility."
    },
    {
      question: "Is blood donation safe?",
      answer: "Yes, blood donation is 100% safe. New, sterile, and single-use disposable equipment is used for each donor, eliminating any risk of infection or disease transmission."
    },
    {
      question: "How often can I donate blood?",
      answer: "Healthy adult males can donate blood every 3 months (up to 4 times a year), while healthy females can donate every 4 months (up to 3 times a year)."
    },
    {
      question: "Do I need to be fasting?",
      answer: "No, you should NOT fast before donating blood. In fact, it is recommended to eat a light, healthy meal and drink plenty of fluids (water or juice) 2–3 hours prior to donation."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">

        <nav className="text-sm sm:text-base text-gray-500 flex items-center space-x-2 font-medium">
          <span className="hover:text-emerald-600 cursor-pointer">Home</span>
          <span>&gt;</span>
          <span className="hover:text-emerald-600 cursor-pointer">Our Work</span>
          <span>&gt;</span>
          <span className="text-emerald-700 font-semibold">Blood Donation Activity</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="inline-block bg-rose-100 text-rose-700 text-sm font-semibold px-4 py-1.5 rounded-full border border-rose-200">
              🩸 Health Support
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Blood Donation <br />
              <span className="text-rose-600">Activity</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              USWA has its own blood donor team "Young Stars" and collection points in different areas of Karachi City in collaboration with Hussaini Blood Bank, to help save lives and serve humanity.
            </p>

            <div className="space-y-4 pt-3">
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start space-x-4">
                <div className="p-3 bg-rose-100 text-rose-600 rounded-xl shrink-0">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">Our Mission</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-normal">
                    To support the community healthcare needs by promoting voluntary blood donation and saving precious lives.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-start space-x-4">
                <div className="p-3 bg-rose-100 text-rose-600 rounded-xl shrink-0">
                  <Droplet className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">In Partnership With</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-normal">
                    Hussaini Blood Bank – Serving humanity through safe blood collection and distribution.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-200 group">
            <img 
              src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=800" 
              alt="Blood Donation Camp" 
              className="w-full h-96 sm:h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm text-center max-w-5xl mx-auto space-y-4">
          <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-2">
            <Droplet className="w-7 h-7" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">About Our Blood Donation Activity</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            USWA organizes regular blood donation camps in different areas of Karachi City with the help of Hussaini Blood Bank. Our dedicated team "Young Stars" works tirelessly to spread awareness, motivate youth, and ensure a safe and smooth donation process. Every drop counts, and together we can make a big difference.
          </p>
        </div>

        <div>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-0.5 bg-emerald-300 w-16 sm:w-32"></div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center">Our Impact So Far</h3>
            <div className="h-0.5 bg-emerald-300 w-16 sm:w-32"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Award className="w-7 h-7 text-rose-500" />, count: "25+", label: "Blood Donation Camps Organized" },
              { icon: <Droplet className="w-7 h-7 text-rose-500" />, count: "1500+", label: "Units of Blood Collected" },
              { icon: <Heart className="w-7 h-7 text-rose-500" />, count: "1000+", label: "Lives Potentially Saved" },
              { icon: <MapPin className="w-7 h-7 text-rose-500" />, count: "15+", label: "Collection Points in Karachi City" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center space-y-3">
                <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center mx-auto">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900">{stat.count}</div>
                <div className="text-sm font-semibold text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-0.5 bg-emerald-300 w-16 sm:w-32"></div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center">Our Blood Donation Camps</h3>
            <div className="h-0.5 bg-emerald-300 w-16 sm:w-32"></div>
          </div>

          <div className="relative">
            <button className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center text-gray-700 hover:text-emerald-600 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Blood Donation Camp", img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400" },
                { title: "Our Dedicated Team (Young Stars)", img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=400" },
                { title: "In Collaboration with Hussaini Blood Bank", img: "https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?auto=format&fit=crop&q=80&w=400" },
                { title: "Serving Humanity, Saving Lives", img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=400" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm text-center pb-4">
                  <img src={item.img} alt={item.title} className="w-full h-52 object-cover" />
                  <p className="text-sm font-bold text-gray-800 mt-3 px-3">{item.title}</p>
                </div>
              ))}
            </div>

            <button className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center text-gray-700 hover:text-emerald-600 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="bg-rose-50/70 border border-rose-200 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Why Blood Donation Matters?</h3>
            <ul className="space-y-3">
              {[
                "It helps in saving accident victims, patients with chronic diseases, and women with complications during childbirth.",
                "One unit of blood can save up to three lives.",
                "It promotes a culture of compassion, unity, and social responsibility."
              ].map((text, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-sm sm:text-base text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="shrink-0">
            <div className="w-32 h-32 bg-white rounded-full p-3 border border-rose-200 shadow-md flex items-center justify-center">
              <Heart className="w-16 h-16 text-rose-500 fill-rose-500" />
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-center space-x-4 mb-10">
            <div className="h-0.5 bg-emerald-300 w-16 sm:w-32"></div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center">Our Blood Donation Process</h3>
            <div className="h-0.5 bg-emerald-300 w-16 sm:w-32"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
            {[
              { step: "Step 1", title: "Registration", icon: <Users className="w-6 h-6 text-rose-500" /> },
              { step: "Step 2", title: "Health Checkup", icon: <Stethoscope className="w-6 h-6 text-rose-500" /> },
              { step: "Step 3", title: "Blood Donation", icon: <Droplet className="w-6 h-6 text-rose-500" /> },
              { step: "Step 4", title: "Safe Collection", icon: <ShieldCheck className="w-6 h-6 text-rose-500" /> },
              { step: "Step 5", title: "Save Lives", icon: <Heart className="w-6 h-6 text-rose-500" /> },
            ].map((proc, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center">
                  {proc.icon}
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{proc.step}</span>
                <span className="text-sm font-bold text-gray-900">{proc.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-0.5 bg-emerald-300 w-16 sm:w-32"></div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center">What Our Donors Say</h3>
            <div className="h-0.5 bg-emerald-300 w-16 sm:w-32"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: "Donating blood is a small act that makes a big difference. Proud to be part of USWA Young Stars.",
                name: "Ali Raza",
                role: "Blood Donor",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
              },
              {
                text: "A very well organized camp by USWA and Hussaini Blood Bank. The staff is very cooperative.",
                name: "Saad Ahmed",
                role: "Blood Donor",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
              },
              {
                text: "I feel happy and satisfied knowing that my blood donation can save someone's life.",
                name: "Imran Khan",
                role: "Blood Donor",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
              }
            ].map((donor, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between space-y-6">
                <p className="text-sm sm:text-base text-gray-600 italic leading-relaxed">"{donor.text}"</p>
                <div className="flex items-center space-x-4 pt-3 border-t border-gray-100">
                  <img src={donor.avatar} alt={donor.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h5 className="text-sm font-bold text-gray-900">{donor.name}</h5>
                    <p className="text-xs text-gray-500 font-medium">{donor.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
         
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
            <div className="flex items-center space-x-3 text-emerald-800">
              <HelpCircle className="w-6 h-6 shrink-0" />
              <h4 className="font-bold text-lg">Frequently Asked Questions</h4>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="rounded-xl border border-gray-100 hover:border-emerald-200 transition-colors overflow-hidden"
                >
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-3.5 text-left text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {openFaq === idx ? (
                      <Minus className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : (
                      <Plus className="w-4 h-4 text-emerald-600 shrink-0" />
                    )}
                  </button>
                  
                  {openFaq === idx && (
                    <div className="px-3.5 pb-3.5 text-xs sm:text-sm text-gray-600 border-t border-gray-50 pt-2 bg-gray-50/50 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-emerald-100/70 border border-emerald-200 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden h-full">
            <div className="space-y-4 max-w-sm z-10">
              <h3 className="text-2xl font-bold text-emerald-950 leading-tight">Be a Lifesaver – Donate Blood Today!</h3>
              <p className="text-sm sm:text-base text-emerald-800 font-medium">
                Join USWA's mission to build a healthier and stronger community.
              </p>
              <button className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md flex items-center space-x-2 transition-all">
                <Heart className="w-4 h-4 fill-white" />
                <span>Donate Now</span>
              </button>
            </div>

            <div className="shrink-0 z-10">
              <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Droplet className="w-14 h-14 text-rose-500 fill-rose-500 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}