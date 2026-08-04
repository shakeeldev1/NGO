import React from 'react';
import { motion } from 'framer-motion';

const FocusAreasSection = () => {
  const areas = [
    {
      step: '01',
      title: 'Quality & Religious Education',
      description:
        'Enrolling children in mainstream schooling alongside Deeni Taleem to nurture both academic and moral growth.',
      icon: (
        <svg className="w-6 h-6 text-[#00BC7D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      step: '02',
      title: 'Health & Medical Relief',
      description:
        'Organizing free medical heat stroke camps, emergency health relief, and community health awareness initiatives.',
      icon: (
        <svg className="w-6 h-6 text-[#00BC7D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      step: '03',
      title: 'Women Empowerment',
      description:
        'Capacitating women in rural areas through skill development, social rights advocacy, and self-reliance programs.',
      icon: (
        <svg className="w-6 h-6 text-[#00BC7D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      step: '04',
      title: 'Environmental Protection',
      description:
        'Promoting green initiatives, climate resilience, and sustainable living practices within vulnerable communities.',
      icon: (
        <svg className="w-6 h-6 text-[#00BC7D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V11.414M15 15l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
    },
    {
      step: '05',
      title: 'Books & Qaida Distribution',
      description:
        'Providing primary learning kits, textbooks, and Qaidas to students in rural regions to lower drop-out rates.',
      icon: (
        <svg className="w-6 h-6 text-[#00BC7D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
    {
      step: '06',
      title: 'School Infrastructure Support',
      description:
        'Equipping rural primary schools with desk setups, furniture arrangements, and improved learning spaces.',
      icon: (
        <svg className="w-6 h-6 text-[#00BC7D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4 0H9" />
        </svg>
      ),
    },
    {
      step: '07',
      title: 'Blood Donation Campaigns',
      description:
        'Organizing routine community blood drives and raising awareness on local emergency health needs.',
      icon: (
        <svg className="w-6 h-6 text-[#00BC7D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.6 15.12a2 2 0 00-1.183.244l-.28.17a2 2 0 00-.538 2.822l.011.015a2 2 0 002.637.525l.28-.17a2 2 0 011.183-.244l2.387.477a6 6 0 003.86-.517l.318-.158a6 6 0 013.86-.517l2.387.477a2 2 0 001.022-.057z" />
        </svg>
      ),
    },
    {
      step: '08',
      title: 'Plantation & Green Drives',
      description:
        'Executing widespread tree plantation initiatives and recording green environmental progress.',
      icon: (
        <svg className="w-6 h-6 text-[#00BC7D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      step: '09',
      title: 'Workshops on Social Issues',
      description:
        'Hosting advocacy seminars and interactive workshops to combat pressing local social challenges.',
      icon: (
        <svg className="w-6 h-6 text-[#00BC7D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      step: '10',
      title: 'Youth Leadership Training',
      description:
        'Empowering young volunteers through tailored development programs and civic engagement workshops.',
      icon: (
        <svg className="w-6 h-6 text-[#00BC7D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457-.312-2.841-.873-4.085" />
        </svg>
      ),
    },
    {
      step: '11',
      title: 'Khairpur District Outreach',
      description:
        'Executing direct regional interventions, local school drives, and basic aid programs in Khairpur.',
      icon: (
        <svg className="w-6 h-6 text-[#00BC7D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      step: '12',
      title: 'Monitoring & Governance',
      description:
        'Maintaining project transparency through strict M&E protocols, FBR compliance, and financial audits.',
      icon: (
        <svg className="w-6 h-6 text-[#00BC7D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  // Fast & snappy staggered animation optimized for mobile touch scrolling
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08, // Slightly faster stagger sequence for smooth scrolling
      },
    },
  };

  // Light upward movement prevents mobile viewport jumping
  const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-12 sm:py-16 bg-[#FBF9F6] text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.3 }}
            className="text-xs font-semibold tracking-wider text-[#00BC7D] uppercase"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900"
          >
            Our Core Interventions & Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed px-2"
          >
            Comprehensive programs focused on education, health relief, and community welfare.
          </motion.p>
        </div>

        {/* 
          Mobile-friendly Grid Container:
          - Uses margin="-50px" so animation activates as soon as cards reach mobile screen.
          - 1 column on mobile (grid-cols-1), 2 on tablet (sm:grid-cols-2), 4 on desktop (lg:grid-cols-4).
        */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {areas.map((area, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4, shadow: '0 15px 20px -5px rgba(0, 0, 0, 0.05)' }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/60 shadow-xs flex flex-col justify-between transition-all duration-300 group min-h-[190px] sm:min-h-[210px]"
            >
              <div>
                <div className="mb-3">
                  {React.cloneElement(area.icon, {
                    className: 'w-6 h-6 sm:w-7 sm:h-7 text-[#00BC7D] group-hover:scale-110 transition-transform duration-300',
                  })}
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 leading-snug group-hover:text-[#00BC7D] transition-colors duration-300">
                  {area.step}. {area.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default FocusAreasSection;