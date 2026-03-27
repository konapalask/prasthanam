import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, img, location }) => {
  return (
    <div className="service-card animate-up">
      <div className="service-img" style={{ backgroundImage: `url(${img})` }}></div>
      <div className="service-content">
        <h3>{title}</h3>
        <p className="service-location">{location}</p>
        <button className="btn btn-outline" style={{ width: '100%', marginTop: '1rem' }}>Get Directions</button>
      </div>
    </div>
  );
};

export default ServiceCard;
