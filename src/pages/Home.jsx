import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import QuoteSection from '../components/QuoteSection';

const Home = () => {
  return (
    <>
      <Hero />
      <div style={{ padding: '2rem 0' }}>
        <About />
        <Services />
        <QuoteSection />
      </div>
    </>
  );
};

export default Home;
