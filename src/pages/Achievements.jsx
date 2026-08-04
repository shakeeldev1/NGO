import React from 'react';
import HeroSection from '../components/achievements/hero';
import ImpactAndGallery from '../components/achievements/projectcards';
import KeyAchievements from '../components/achievements/keyachievements';
import CallToActionSection from '../components/achievements/calltoaction';



const AchievementsPage = () => {
  return (
    <div>
      <HeroSection />
      <ImpactAndGallery />
      <KeyAchievements />
      <CallToActionSection />
    </div>
  );
};


export default AchievementsPage;