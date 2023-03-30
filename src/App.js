import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Footer from "./components/Footer";
import Logo from "./components/Logo";


function App() {
  return (<>
    <Router basename="React-portfolio">
      <div>
      
        <NavTabs />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
      </div>
    </Router>
    <Logo />
    <Footer /> 
      
      </>

  );
}

export default App;

