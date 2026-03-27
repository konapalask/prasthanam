import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        <div className="about-content animate-up">
          <h2 className="section-title" style={{ textAlign: 'left', marginLeft: '0' }}>About Prasthanam</h2>
          <p>
            Vaikunta Mahaprasthanam is a modern crematorium developed by the Phoenix Foundation in collaboration with the GHMC. 
            Our mission is to provide a clean, peaceful, and dignified environment for the performance of final rites.
          </p>
          <p>
            The facility is designed with ecological sustainability and cultural traditions in mind, featuring landscaped gardens, 
            spiritual art, and state-of-the-art facilities that ensure a seamless and respectful experience for grieving families.
          </p>
          <div className="about-stats">
            <div className="stat">
              <h3>10+</h3>
              <p>Years of Service</p>
            </div>
            <div className="stat">
              <h3>50k+</h3>
              <p>Families Served</p>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>Support</p>
            </div>
          </div>
        </div>
        <div className="about-video">
          <div className="video-placeholder">
            <div className="play-btn"></div>
          </div>
          <p className="video-caption">Watch our documentary on the transformation of the cremation experience.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
