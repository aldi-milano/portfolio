import React from 'react';
import About from './components/about/About';
import Achievment from './components/achievment/Achievment';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Works from './components/works/Works';

// STYLE
import './scss/index.scss';

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Works />
      <Experience />
      <Achievment />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
