import React from 'react';
import ServiceCard from './ServiceCard';
import './Services.css';
import jubileeImg from '../assets/jubilee_hills.png';
import panjaguttaImg from '../assets/panjagutta.png';
import begumpetImg from '../assets/begumpet.png';

const Services = () => {
  const services = [
    { title: 'Jubilee Hills', img: jubileeImg, location: 'Jubilee Hills, Road No. 45' },
    { title: 'Panjagutta', img: panjaguttaImg, location: 'Panjagutta Main Road' },
    { title: 'Begumpet', img: begumpetImg, location: 'Begumpet Airport Area' },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
