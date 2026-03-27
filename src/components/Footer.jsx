import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <h3>PRASTHANAM</h3>
          <p>Providing a dignified and peaceful environment for the final rites since 2012.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Jubilee Hills, Road No. 45</p>
          <p>Hyderabad, Telangana 500033</p>
          <p>Email: info@prasthanam.com</p>
          <p>Phone: +91 985 255 5555</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Prasthanam. All rights reserved. | Inspired by Vaikunta Mahaprasthanam</p>
      </div>
    </footer>
  );
};

export default Footer;
