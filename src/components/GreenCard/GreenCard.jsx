// src/components/GreenCard.jsx
import React from 'react';
import './GreenCard.scss';

const GreenCard = ({ }) => {
  return (
    <div className="green-card">
      <div className="svg-container">
        <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="460px"
  height="300px"  // slightly taller to fit text better
  viewBox="0 0 460 300"
>
  <image
    x="0"
    y="0"
    width="460"
    height="250"
    xlinkHref="data:img/png;base64,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"
  />
  <text
    x="50%"
    y="270" // position below image area
    fill="white"
    fontSize="20"
    fontWeight="400"
    fontFamily="Saira"
    textAnchor="middle"
  >
    <tspan x="50%" dy="0">Guaranteed fast, lasting results that reveal your true potential.</tspan>
    <tspan x="50%" dy="1.2em">Trust in the Aktiva process and we will show you true results!</tspan>
  </text>
</svg>

        
      </div>
     
    </div>
  );
};

export default GreenCard;
