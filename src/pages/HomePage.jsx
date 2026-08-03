import React from 'react';
import HomeHero from '../components/home/HomeHero';
import HomeCards from '../components/home/HomeCards';
import HomeFeatures from '../components/home/HomeFeatures';
import HomeCTA from '../components/home/HomeCTA';

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <HomeCards />
      <HomeFeatures />
      <HomeCTA />
    </>
  );
};

export default HomePage;



