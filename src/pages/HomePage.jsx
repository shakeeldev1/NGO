import React from 'react';
import HomeHero from '../components/home/HomeHero';
import HomeCards from '../components/home/HomeCards';
import HomeFeatures from '../components/home/HomeFeatures';
import HomeStories from '../components/home/HomeStories';
import HomeCTA from '../components/home/HomeCTA';
import HomeServices from '../components/home/HomeServices';

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <HomeCards />
      <HomeFeatures />
      <HomeStories />
      <HomeServices/>
      <HomeCTA />
    </>
  );
};

export default HomePage;




