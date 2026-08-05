import React, { useState, memo } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  HeartPulse, 
  GraduationCap, 
  ClipboardCheck, 
  Users, 
  Handshake, 
  Megaphone, 
  Heart, 
  Droplet,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import GlobalCard from '../ui/GlobalCard';
import GlobalHeading from '../ui/GlobalHeading';

const ALL_CARDS = [
  {
    id: 'health',
    icon: HeartPulse,
    name: 'Health Care',
    short: 'Setting up mobile dispensaries, medical camps with Indus Hospital, and TCV vaccination drives.',
    category: 'Healthcare',
    accentColor: 'emerald',
    href: '/health',
  },
  {
    id: 'education',
    icon: GraduationCap,
    name: 'Education',
    short: 'Opening community schools in Katchi Abadi, books distribution, and Deeni Taleem classes.',
    category: 'Education',
    accentColor: 'emerald',
    href: '/education',
  },
  {
    id: 'survey',
    icon: ClipboardCheck,
    name: 'Surveys & Monitoring',
    short: 'Conducting community field surveys, UNICEF supportive monitoring, and impact evaluations.',
    category: 'Research',
    accentColor: 'emerald',
    href: '/services/survey',
  },
  {
    id: 'workshops',
    icon: Users,
    name: 'Workshops',
    short: 'Interactive workshops on social issues, basic human rights, and environmental awareness.',
    category: 'Capacity Building',
    accentColor: 'emerald',
    href: '/services/workshops',
  },
  {
    id: 'consultancy',
    icon: Handshake,
    name: 'Consultancy',
    short: 'Providing strategic advisory, local government networking, and institutional development.',
    category: 'Advisory',
    accentColor: 'emerald',
    href: '/consultancy',
  },
  {
    id: 'awareness',
    icon: Megaphone,
    name: 'Awareness Sessions',
    short: 'Grassroots awareness campaigns on out-of-school children, gender rights, and climate change.',
    category: 'Advocacy',
    accentColor: 'emerald',
    href: '/awareness',
  },
  {
    id: 'donations',
    icon: Heart,
    name: 'Donations & Relief',
    short: 'Charity interventions, heatwave relief camps, and essential learning material distributions.',
    category: 'Relief Work',
    accentColor: 'emerald',
    href: '/donations',
  },
  {
    id: 'blood-collection',
    icon: Droplet,
    name: 'Blood Collection',
    short: 'Organizing blood donation drives with Young Stars team in partnership with Hussaini Blood Bank.',
    category: 'Emergency Health',
    accentColor: 'emerald',
    href: '/blood-collection',
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3 }
  },
  exit: { 
    opacity: 0, 
    y: -10,
    transition: { duration: 0.2 }
  }
};

const HomeCards = ({ items = ALL_CARDS }) => {
  const [showAll, setShowAll] = useState(false);

  // Show only first 6 cards by default
  const visibleItems = showAll ? items : items.slice(0, 6);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 md:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <GlobalHeading
          subtitle="Our Focus"
          title="Our Core Focus Areas"
          description="Discover how USWA works to create a positive, lasting impact through targeted social development initiatives."
          centered={true}
        />

        {/* 3 Columns Layout on Large Screens */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="sync">
            {visibleItems.map((card, idx) => {
              const IconComponent = card.icon;

              return (
                <motion.div
                  key={card.id || idx}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  className="h-full transform-gpu will-change-transform"
                >
                  <a
                      href={card.href}
                      className="block h-full transition-transform duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-xl"
                  >
                    <GlobalCard
                      icon={IconComponent ? <IconComponent size={24} /> : null}
                      name={card.name}
                      short={card.short}
                      category={card.category}
                      accentColor={card.accentColor}
                      index={idx}
                    />
                  </a>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
        {items.length > 6 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-emerald-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <span>{showAll ? 'Show Less' : 'Show More'}</span>
              {showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(HomeCards);