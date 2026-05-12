import React, { useState } from 'react';
import { useTilt } from '../hooks/useAnimations';
import './FlipCard.css';

const FlipCard = ({ title, details, icon: Icon }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const tiltRef = useTilt({ max: 12, perspective: 1200 });

  const handleFlip = (e) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card-container ${isFlipped ? 'flipped' : ''}`} ref={tiltRef}>
      <div className="flip-card-inner">
        {/* Front Side */}
        <div className="flip-card-front">
          <div className="card-icon">
            {Icon && <Icon size={48} strokeWidth={1.5} />}
          </div>
          <h3 className="card-title">{title}</h3>
          <button className="flip-btn" onClick={handleFlip}>
            Click to Flip
          </button>
        </div>

        {/* Back Side */}
        <div className="flip-card-back">
          <div className="back-header">
            <h3 className="back-title">{title}</h3>
            <div className="title-underline"></div>
          </div>
          <div className="back-content">
            {details}
          </div>
          <button className="flip-btn-mini" onClick={handleFlip}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
