import React from 'react';
import Navi from './components/Navi';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './style.css';




function App() {
  return (
  <body>
    <Navi />
    <Hero/>
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />       
      
  </body>

  );
}

export default App;

