import React, { useState } from 'react';
import { useTilt } from '../hooks/useAnimations';
import './FlipCard.css';

const FlipCard = ({ icon: Icon, title, details }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const tiltRef = useTilt({ max: 15, perspective: 1000 });

  return (
    <div 
      className={`flip-card ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
      ref={tiltRef}
    >
      <div className="flip-card-inner">
        {/* Front */}
        <div className="flip-card-front card">
          <div className="card-icon-wrapper">
            {Icon && <Icon size={32} strokeWidth={1.5} />}
          </div>
          <h3 className="card-title">{title}</h3>
          <div className="card-flip-hint">Click to expand</div>
        </div>

        {/* Back */}
        <div className="flip-card-back card">
          <h3 className="card-title-back">{title}</h3>
          <div className="card-details-wrapper">
            {details}
          </div>
          <div className="card-flip-hint">Click to return</div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
