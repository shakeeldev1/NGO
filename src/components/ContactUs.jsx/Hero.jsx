import React from "react";
import { Mail, Phone } from "lucide-react";

const Hero = () => {
  const bgImageUrl =
    "https://img.magnific.com/premium-photo/group-environmental-conservation-people-hands-planting-aerial-view_53876-10098.jpg?semt=ais_test_b&w=740&q=80";

  return (
    <section
      className="relative w-full min-h-[430px] bg-cover bg-center bg-no-repeat flex items-start overflow-hidden"
      style={{
        backgroundImage: `url('${bgImageUrl}')`,
      }}
    >
     
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,24,20,0.95)_0%,rgba(2,24,20,0.80)_40%,rgba(2,24,20,0.35)_75%,rgba(2,24,20,0.15)_100%)]" />

    
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-16">
     
        <div className="text-[#00b879] text-[13px] font-bold tracking-[1.5px] mb-4">
          <span className="block w-10 h-[2px] bg-[#00b879] mb-2"></span>
          GET IN TOUCH
        </div>

        <h1 className="text-white text-[38px] md:text-[52px] lg:text-[62px] leading-tight font-semibold tracking-[-1.5px] mb-5">
          We’re Here to
          <br />
          Help & Connect
        </h1>

     
        <p className="text-white/90 text-[17px] leading-8 mb-8">
          Have questions, suggestions, or want to collaborate with us?
          <br />
          We’d love to hear from you.
        </p>

        
        <div className="flex flex-wrap items-center gap-4">
      
          <a
            href="mailto:info@uswa.org.pk"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#00a878] border border-[#00a878] text-white text-sm font-semibold hover:bg-[#008f67] transition"
          >
            <Mail size={17} />
            Email Us
          </a>

        
          <a
            href="tel:+923001234567"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-white/70 text-white text-sm font-semibold hover:bg-white hover:text-black transition"
          >
            <Phone size={17} />
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;