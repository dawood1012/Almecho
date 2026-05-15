import React, { useState } from 'react';
import { useTextScramble } from '../hooks/useAnimations';

const ScrambleText = ({ text, className = '', duration = 800 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const scrambled = useTextScramble(text, duration, isHovered);
  
  return (
    <span 
      className={className} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: 'default' }}
    >
      {scrambled}
    </span>
  );
};

export default ScrambleText;
