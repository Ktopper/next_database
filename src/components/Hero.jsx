import React from 'react';
import "../css/hero.css";

const Hero = ({ title, statement, image }) => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="text-container">
        <h1>{title}</h1>
        <p>{statement}</p>
      </div>
    </div>
  );
};

export default Hero;
