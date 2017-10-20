import React from 'react';

import './index.css';

import defaultImage from './images/n_logo.jpg';

const Track = () => {
  return (
    <div className="Track">
      <div className="Track-photo">
        <img className="Track-image" src={defaultImage} alt="yay" />
      </div>
      <div className="Track-description">
        <span className="Track-title">Monochrome Rainbow</span>
        <span className="Track-username">allen4dev</span>
      </div>
    </div>
  );
};

export default Track;
