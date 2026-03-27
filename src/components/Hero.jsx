import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section id="home" className="hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImg})` }}>
      <div className="container hero-container">
        <div className="hero-content animate-up">
          <span className="hero-subtitle">Experience Peace & Dignity</span>
          <h1>Vaikunta Mahaprasthanam</h1>
          <p>A serene environment designed to provide a respectful and peaceful final journey for your loved ones.</p>
          <div className="hero-btns">
            <Link to="/booking" className="btn btn-primary">Schedule a Service</Link>
            <Link to="/contact" className="btn btn-outline-white">Contact Us</Link>
          </div>
        </div>
      </div>
      <div className="ticker-container">
        <div className="ticker">
          <p>Contact: For immediate assistance and bookings, call our 24/7 helpline at +91 985 255 5555. | Peaceful and dignified services available across Hyderabad. | Eco-friendly cremation choices for a cleaner future.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
