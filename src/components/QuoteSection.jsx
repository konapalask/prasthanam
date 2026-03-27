import React from 'react';
import './QuoteSection.css';

const QuoteSection = () => {
  return (
    <section className="quote-section">
      <div className="container quote-container animate-up">
        <div className="quote-icon">"</div>
        <p className="quote-text sanskrit">
          जातस्य हि ध्रुवो मृत्युर्ध्रुवं जन्म मृतस्य च ।<br />
          तस्मादपरिहार्येऽर्थे न त्वं शोचितुमर्हसि ॥
        </p>
        <p className="quote-text english">
          Death is as sure for that which is born, as birth is for that which is dead. 
          Therefore, grieve not for what is inevitable.
        </p>
        <p className="quote-source">— Bhagavad Gita, Chapter 2, Verse 27</p>
      </div>
    </section>
  );
};

export default QuoteSection;
