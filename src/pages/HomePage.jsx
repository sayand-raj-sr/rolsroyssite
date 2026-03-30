import React from 'react';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import DetailsSection from '../components/DetailsSection';
import TechnicalGrid from '../components/TechnicalGrid';

const HomePage = () => {
  return (
    <>
      <Sidebar />
      <main className="main-content">
        <HeroSection />
        <DetailsSection />
        <TechnicalGrid />
      </main>
    </>
  );
};

export default HomePage;
