import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import CaseStudySection from '../components/CaseStudySection';

const Home: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <CaseStudySection />
      <ServicesSection />
    </main>
  );
};

export default Home;
