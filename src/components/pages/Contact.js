import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import { Link, Route, Routes } from 'react-router-dom';
// import Learn from './Learn';
import './Contact.css'

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pcpyuwa', 'template_twmvbra', form.current, 'FhlLJ06ZMP2-MuzuI')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <section className='contactSection'>
      <h1>Contact Page</h1>
      <hr></hr>
        <form className='formContainer' ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      
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
