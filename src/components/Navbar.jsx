import React, { useEffect, useRef } from 'react';
import { ShoppingBag, Search, Menu, User } from 'lucide-react';
import gsap from 'gsap';

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.5 }
    );
  }, []);

  return (
    <nav ref={navRef} className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          VOLT<span>.</span>
        </div>
        
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#products">Store</a>
          <a href="#categories">Categories</a>
          <a href="#tech">Tech</a>
        </div>

        <div className="nav-actions">
          <button className="nav-btn"><Search size={20} /></button>
          <button className="nav-btn"><User size={20} /></button>
          <button className="nav-btn cart-btn">
            <ShoppingBag size={20} />
            <span className="cart-count">2</span>
          </button>
          <button className="nav-btn menu-btn"><Menu size={24} /></button>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          backdrop-filter: blur(10px);
          background: rgba(5, 5, 5, 0.7);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2rem;
        }

        .nav-logo {
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          font-size: 1.75rem;
          color: white;
          letter-spacing: 2px;
        }

        .nav-logo span {
          color: var(--accent);
        }

        .nav-links {
          display: flex;
          gap: 3rem;
        }

        .nav-links a {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-links a:hover {
          color: white;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--accent);
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-btn {
          color: white;
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .nav-btn:hover {
          color: var(--accent);
          transform: translateY(-2px);
        }

        .cart-btn {
          position: relative;
        }

        .cart-count {
          position: absolute;
          top: -8px;
          right: -8px;
          background: var(--accent);
          color: black;
          font-size: 0.7rem;
          font-weight: 800;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .menu-btn {
          display: none;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .menu-btn {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
