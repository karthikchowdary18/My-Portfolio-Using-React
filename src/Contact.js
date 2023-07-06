import React from 'react';
import "./App.css";
import github from "./github.jpg";
import linkedin from"./ll.jpg";
import mail from "./mail.jpg";

const Contact = () => {
  return (
    <div className="hh">
      <h1 className="color-animation">Contact me</h1>
      <p className="color-animation">For contact and knowing my skills and previous works, you can go through the below sites</p>
      <div className="social-media">
        <div className="icon-container">
          <a href="https://github.com/karthikchowdary18" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github" className="icon" />
            <button className="button">GitHub</button>
          </a>
        </div>
        <div className="icon-container">
          <a href="https://www.linkedin.com/in/karthik-chowdary-9248b9257/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="linkedin" className="icon" />
            <button className="button">LinkedIn</button>
          </a>
        </div>
        <div className="icon-container">
          <a href="mailto:karthikchowdary018@gmail.com">
            <img src={mail} alt="email" className="icon" />
            <button className="button">Mail</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
