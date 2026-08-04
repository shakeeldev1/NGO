import React from 'react';
import Herobanner from '../components/about us/Herobanner';
import Impact from '../components/about us/Impact';
import Ourfocus from '../components/about us/Ourfocus';
import Scroll from "../components/about us/Scroll"
import Calltoaction from '../components/about us/Calltoaction';

const AboutPage = () => {
  return (
    <div>
      <Herobanner />
      <Impact />
      <Ourfocus/>
      <Scroll/>
      <Calltoaction/>   
    </div>
  );
};

export default AboutPage;