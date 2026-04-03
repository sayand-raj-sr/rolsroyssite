import React, { useState } from 'react';
import { LogIn, Compass, Layers, Shapes, Menu, X } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <button className="mobile-menu-btn" onClick={toggle}>
        {isOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
      </button>

      <nav className={`luxury-sidebar ${isOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-brand">
          <img
            src="https://1000logos.net/wp-content/uploads/2020/03/Rolls-Royce-Logo.png"
            alt="Rolls-Royce"
            className="sidebar-logo"
          />
        </div>

        <div className="sidebar-links">
          <a href="#technical" className="nav-link" onClick={() => setIsOpen(false)}>
            <Layers className="nav-icon" size={20} />
            <span className="nav-text">Performance</span>
          </a>
          <a href="#starlight" className="nav-link" onClick={() => setIsOpen(false)}>
            <Compass className="nav-icon" size={20} />
            <span className="nav-text">Artistry</span>
          </a>
          <a href="#collections" className="nav-link" onClick={() => setIsOpen(false)}>
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
    </>
  );
};

export default Sidebar;
