import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <div className="contact-info">
          <h2 className="section-title" style={{ textAlign: 'left', marginLeft: '0' }}>Get In Touch</h2>
          <p>We are here to support you in your time of need. Please reach out to us for any inquiries or bookings.</p>
          <div className="info-item">
            <div className="icon">📍</div>
            <p>Jubilee Hills, Road No. 45, Hyderabad</p>
          </div>
          <div className="info-item">
            <div className="icon">📞</div>
            <p>+91 985 255 5555</p>
          </div>
          <div className="info-item">
            <div className="icon">✉️</div>
            <p>info@prasthanam.com</p>
          </div>
        </div>
        <form className="contact-form animate-up">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Phone Number" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
