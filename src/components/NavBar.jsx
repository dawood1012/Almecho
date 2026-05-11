import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <Link to="/" className="logo">
            <span className="logo-text">Almecho</span>
            <span className="logo-dot"></span>
          </Link>

          <button 
            className={`hamburger ${isOpen ? 'active' : ''}`} 
            onClick={toggleMenu} 
            aria-label="Toggle Menu"
          >
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </button>
        </div>
      </header>

      {/* Fullscreen Menu Overlay */}
      <div className={`menu-overlay ${isOpen ? 'open' : ''}`}>
        <nav className="menu-nav">
          <div className="menu-links">
            <Link to="/" className={`menu-link ${location.pathname === '/' ? 'active' : ''}`} style={{ animationDelay: '0.1s' }}>
              <span className="menu-link-number">01</span>
              <span className="menu-link-text">Home</span>
              <span className="menu-link-line"></span>
            </Link>
            <Link to="/services" className={`menu-link ${location.pathname === '/services' ? 'active' : ''}`} style={{ animationDelay: '0.2s' }}>
              <span className="menu-link-number">02</span>
              <span className="menu-link-text">Services</span>
              <span className="menu-link-line"></span>
            </Link>
            <Link to="/blog" className={`menu-link ${location.pathname === '/blog' ? 'active' : ''}`} style={{ animationDelay: '0.3s' }}>
              <span className="menu-link-number">03</span>
              <span className="menu-link-text">Blog</span>
              <span className="menu-link-line"></span>
            </Link>
            <Link to="/contact" className={`menu-link ${location.pathname === '/contact' ? 'active' : ''}`} style={{ animationDelay: '0.4s' }}>
              <span className="menu-link-number">04</span>
              <span className="menu-link-text">Contact</span>
              <span className="menu-link-line"></span>
            </Link>
          </div>
          <div className="menu-footer" style={{ animationDelay: '0.5s' }}>
            <p>A Triad Ecosystem, not an agency.</p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
