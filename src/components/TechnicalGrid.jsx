import React from 'react';
import { motion } from 'framer-motion';
import './TechnicalGrid.css';

const TechnicalGrid = ({ onExplore }) => {
  return (
    <section id="technical" className="technical-section">
      <motion.div 
        className="technical-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
      >
        <h2 className="section-title">Technical Elegance</h2>
        <p className="section-subtitle">Data-Driven Luxury defined by uncompromising engineering.</p>
      </motion.div>

      <div className="technical-grid">
        {/* Spectre Card */}
        <motion.div 
          className="tech-card spectre-card"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="card-bg"></div>
          <div className="card-content">
            <h3 className="car-name">Spectre</h3>
            <span className="car-type">Ultra-Luxury Electric Super Coupé</span>
          </div>
          
          <div className="card-overlay">
            <div className="specs-container">
              <div className="spec-item">
                <span className="spec-value">102</span>
                <span className="spec-unit">kWh</span>
                <span className="spec-label">Battery Capacity</span>
              </div>
              <div className="spec-divider"></div>
              <div className="spec-item">
                <span className="spec-value">530</span>
                <span className="spec-unit">km</span>
                <span className="spec-label">WLTP Range</span>
              </div>
            </div>
            <button className="discover-btn" onClick={onExplore}>EXPLORE SPECTRE</button>
          </div>
        </motion.div>

        {/* Phantom Card */}
        <motion.div 
          className="tech-card phantom-card"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="card-bg"></div>
          <div className="card-content">
            <h3 className="car-name">Phantom Series II</h3>
            <span className="car-type">The Ultimate Expression of Fine Craftsmanship</span>
          </div>
          
          <div className="card-overlay">
            <div className="specs-container">
              <div className="spec-item">
                <span className="spec-value">6.75L</span>
                <span className="spec-unit">V12</span>
                <span className="spec-label">Engine Configuration</span>
              </div>
              <div className="spec-divider"></div>
              <div className="spec-item">
                <span className="spec-value">900</span>
                <span className="spec-unit">Nm</span>
                <span className="spec-label">Maximum Torque</span>
              </div>
            </div>
            <button className="discover-btn" onClick={onExplore}>EXPLORE PHANTOM</button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="explore-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <button className="main-explore-btn" onClick={onExplore}>
          EXPLORE THE ENTIRE COLLECTION
        </button>
      </motion.div>
    </section>
  );
};

export default TechnicalGrid;
