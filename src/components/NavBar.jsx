import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMagneticButton } from '../hooks/useAnimations';
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const logoRef = useMagneticButton();
  const hamburgerRef = useMagneticButton();

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
          <Link to="/" className="logo" ref={logoRef}>
            <span className="logo-text">Almecho</span>
            <span className="logo-dot"></span>
          </Link>

          <div className="hamburger-wrapper" ref={hamburgerRef}>
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
        </div>
      </header>

      {/* Fullscreen Menu Overlay */}
      <div className={`menu-overlay ${isOpen ? 'open' : ''}`}>
        <nav className="menu-nav">
          <div className="menu-links">
            {[
              { path: '/', label: 'Home', num: '01' },
              { path: '/services', label: 'Services', num: '02' },
              { path: '/blog', label: 'Blog', num: '03', disabled: true },
              { path: '/contact', label: 'Contact', num: '04' }
            ].map((link, i) => (
              <Link 
                key={link.path}
                to={link.disabled ? '#' : link.path} 
                className={`menu-link ${location.pathname === link.path ? 'active' : ''} ${link.disabled ? 'disabled' : ''}`} 
                style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
                onClick={(e) => {
                  if (link.disabled) {
                    e.preventDefault();
                  }
                }}
              >
                <span className="menu-link-number">{link.num}</span>
                <span className="menu-link-text">{link.label}</span>
                <span className="menu-link-line"></span>
              </Link>
            ))}
          </div>
          <div className="menu-footer">
            <p>A Triad Ecosystem, not an agency.</p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
