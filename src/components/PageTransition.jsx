import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('fadeOut');
      
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage('fadeIn');
        window.scrollTo(0, 0);
      }, 600); // Matches the curtain transition duration

      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <div className={`page-transition-wrapper ${transitionStage}`}>
      <div className="curtain curtain-top"></div>
      <div className="curtain curtain-bottom"></div>
      <div className="page-content">
        {displayLocation.pathname === location.pathname ? children : null}
      </div>
    </div>
  );
};

export default PageTransition;
