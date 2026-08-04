import React from 'react';
import GlobalCard from '../ui/GlobalCard';
import GlobalHeading from '../ui/GlobalHeading';
import { GraduationCap, HeartPulse, Scale } from 'lucide-react';

const cardsData = [
  {
    id: 1,
    icon: <GraduationCap />,
    name: 'Education & Literacy',
    short: 'Establishing non-formal schools and providing essential learning materials to students.',
    category: 'Education',
    accentColor: 'emerald',
  },
  {
    id: 2,
    icon: <HeartPulse />,
    name: 'Healthcare & Climate',
    short: 'Mobile health clinics and tree plantation drives for sustainable, healthy communities.',
    category: 'Healthcare',
    accentColor: 'emerald',
  },
  {
    id: 3,
    icon: <Scale />,
    name: 'Social Advocacy',
    short: 'Empowering marginalized groups and promoting human rights across communities.',
    category: 'Advocacy',
    accentColor: 'emerald',
  },
];

const HomeCards = ({ theme = 'light' }) => {
  return (
    <section className={`py-16 md:py-24 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlobalHeading
          subtitle="Our Focus"
          title="Our Core Focus Areas"
          description="Discover how USWA works to create a positive, lasting impact through targeted social development initiatives."
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardsData.map((card, idx) => (
            <GlobalCard
              key={card.id}
              icon={card.icon}
              name={card.name}
              short={card.short}
              category={card.category}
              accentColor={card.accentColor}
              theme={theme}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
