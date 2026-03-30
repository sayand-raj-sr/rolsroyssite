import React from 'react';
import { LogIn, Compass, Layers, Shapes } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <nav className="luxury-sidebar">
      <div className="sidebar-brand">
        <img
          src="https://1000logos.net/wp-content/uploads/2020/03/Rolls-Royce-Logo.png"
          alt="Rolls-Royce"
          className="sidebar-logo"
        />
      </div>

      <div className="sidebar-links">
        <a href="#technical" className="nav-link">
          <Layers className="nav-icon" size={20} />
          <span className="nav-text">Performance</span>
        </a>
        <a href="#starlight" className="nav-link">
          <Compass className="nav-icon" size={20} />
          <span className="nav-text">Artistry</span>
        </a>
        <a href="#collections" className="nav-link">
          <Shapes className="nav-icon" size={20} />
          <span className="nav-text">Collections</span>
        </a>
      </div>

      <div className="sidebar-footer">
        <button className="whispers-login">
          <LogIn className="login-icon" size={18} />
          <span className="login-text">Whispers App</span>
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
