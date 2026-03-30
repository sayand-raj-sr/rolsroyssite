import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import DetailsSection from './components/DetailsSection';
import TechnicalGrid from './components/TechnicalGrid';
import CollectionShowroom from './components/CollectionShowroom';
import './App.css';

function App() {
  const [isCollectionVisible, setCollectionVisible] = useState(false);

  const toggleCollection = () => {
    setCollectionVisible(true);
    // Scroll to the collection after it is potentially rendered
    setTimeout(() => {
      document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <HeroSection />
        <DetailsSection />
        <TechnicalGrid onExplore={toggleCollection} />
        {isCollectionVisible && <CollectionShowroom isOpen={isCollectionVisible} />}
      </main>
    </div>
  );
}

export default App;
