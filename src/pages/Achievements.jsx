import React from 'react';
import HeroSection from '../components/achievements/hero';
import ImpactAndGallery from '../components/achievements/projectcards';
import CallToActionSection from '../components/achievements/calltoaction';
import Gallery from '../components/achievements/Gallery';
import JourneyAndImpact from '../components/achievements/JourneyAndImpact';
import PartnersAndCTA from '../components/achievements/PartnersAndCTA';



const AchievementsPage = () => {
  return (
    <div>
      <HeroSection />
      <ImpactAndGallery />
      <JourneyAndImpact />
      <Gallery />
      <PartnersAndCTA />
      <CallToActionSection />
    </div>
  );
};


export default AchievementsPage;