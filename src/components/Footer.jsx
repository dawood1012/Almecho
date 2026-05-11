import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useAnimations';
import './Footer.css';

const Footer = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <footer className="site-footer" ref={ref}>
      <div className={`container footer-container ${isVisible ? 'visible' : ''}`}>
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">Almecho<span className="footer-dot">.</span></h2>
            <p className="text-secondary">
              We don't give you "Deliverables."<br />We give you "Assets."
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Navigate</h4>
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-col">
              <h4>Protocol</h4>
              <a href="#">Master 9 Audit</a>
              <a href="#">Growth Blueprint</a>
              <a href="#">Cheat Sheet</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-marquee-container">
            <div className="footer-marquee">
              <span>GROWTH ARCHITECTURE • TRUST BYPASS • PAIN MINING • ATTENTION ARBITRAGE • LO-FI CREATIVE • MASTER 9 PROTOCOL •&nbsp;</span>
              <span>GROWTH ARCHITECTURE • TRUST BYPASS • PAIN MINING • ATTENTION ARBITRAGE • LO-FI CREATIVE • MASTER 9 PROTOCOL •&nbsp;</span>
            </div>
          </div>
          <p className="copyright">&copy; {new Date().getFullYear()} Almecho. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
