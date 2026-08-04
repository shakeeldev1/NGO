import React from 'react';
import GlobalCTA from '../ui/GlobalCTA';

const HomeCTA = () => {
  return (
    <GlobalCTA 
      theme="light"
      title="Join us in empowering"
      highlightText="communities today"
      subtitle="Support USWA in delivering essential advocacy, education, and healthcare initiatives without discrimination across Pakistan."
      badgeText="Bila Imtiaz Sub Ki Khidmat"
      primaryBtnText="Become a Volunteer"
      secondaryBtnText="Support Our Work"
      primaryLink="/contact"
      secondaryLink="/programs"
    />
  );
};

export default HomeCTA;

