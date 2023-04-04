import React from 'react';
// import { Link, Route, Routes } from 'react-router-dom';
// import Learn from './Learn';
import './Contact.css'

function Contact() {
  return (
    <section className='contactSection'>
      <h1>Contact Page</h1>
      <hr></hr>
      <p> Email: wmac.webdev@gmail.com </p>
        <p>LinkedIn:</p>
        <p>GitHub:  </p>
      {/* <Link to="learn" role="button" className="btn btn-link">
        Learn More
      </Link>
      <Link to="contact" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Routes>
        <Route path="learn" element={<Learn />} />
      </Routes> */}
    </section>
  );
}

export default Contact;
