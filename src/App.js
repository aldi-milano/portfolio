import React from 'react';
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Works from './components/works/Works';

// STYLE
import './scss/index.scss';

function App() {
  return (
    <div>
      <Hero />
      <About />
      {/* <Works /> */}
    </div>
  );
}

export default App;
