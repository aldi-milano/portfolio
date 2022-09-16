import React from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Works from './components/works/Works';

// STYLE
import './scss/index.scss';

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Works />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
