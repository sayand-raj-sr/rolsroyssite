import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Categories from './components/Categories';
import TechnicalSpecs from './components/TechnicalSpecs';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    // Custom cursor movement if needed
    const ctx = gsap.context(() => {
      // Smooth scroll or general entrance animations can go here
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <TechnicalSpecs />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
