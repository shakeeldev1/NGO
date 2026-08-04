import React from 'react';
import HeroSection from '../components/achievements/hero';
import ImpactAndGallery from '../components/achievements/projectcards';
import CallToActionSection from '../components/achievements/calltoaction';



const AchievementsPage = () => {
  return (
    <div>
      <HeroSection />
      <ImpactAndGallery />
      <CallToActionSection />
    </div>
  );
};


export default AchievementsPage;