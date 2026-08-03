import React from 'react';
import GlobalHero from '../ui/GlobalHero';

// Home-specific hero slide content
const homeHeroData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1920&auto=format&fit=crop",
    subtitle: "Bila Imtiaz Sub Ki Khidmat",
    title: "Empowering Communities Across Pakistan",
    description: "USWA is dedicated to social advocacy, basic education, healthcare access, and human rights empowerment without discrimination.",
    primaryLink: "/programs",
    primaryBtnText: "Explore Programs",
    secondaryLink: "/contact",
    secondaryBtnText: "Get Involved",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1608535002897-27b2aa592456?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG5nb3xlbnwwfHwwfHx8MA%3D%3D",
    subtitle: "Education & Literacy",
    title: "Lighting the Path for Quality Education",
    description: "Establishing non-formal schools and supporting under-resourced students with essential learning materials across Sindh.",
    primaryLink: "/programs",
    primaryBtnText: "Our Initiatives",
    secondaryLink: "/about",
    secondaryBtnText: "Learn More",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1920&auto=format&fit=crop",
    subtitle: "Climate & Health Care",
    title: "Protecting Our Environment & Health",
    description: "Conducting tree plantation drives and mobile health clinics to foster sustainable and healthy communities.",
    primaryLink: "/achievements",
    primaryBtnText: "View Impact",
    secondaryLink: "/contact",
    secondaryBtnText: "Contact Us",
  }
];

const HomeHero = () => {
  return <GlobalHero data={homeHeroData} />;
};

export default HomeHero;
