import React  from 'react';
import "./App.css";
import github from "./github.jpg";
import linkedin from"./ll.jpg";
import mail from "./mail.jpg";

const Contact= ()=> {
    return (   
      <div class ="hh">      
     <h1 class="color-animation">contact me</h1>
  <p class="color-animation">For contact and knowing my skills and previous works you can go through the below sites</p>
   <div className="social-media">   
  <div className="icon-container">
    <img src={github} alt="github" className="icon" />
    <a href="https://github.com/karthikchowdary18">
      <button className="button">GitHub</button>
    </a>
  </div>
  <div className="icon-container">
    <img src={linkedin} alt="linkedin" className="icon" />
    <a href="https://www.linkedin.com/in/karthik-chowdary-9248b9257/">
      <button className="button">linkedin</button>
    </a>
  </div>
  <div className="icon-container">
    <img src={mail} alt="email" className="icon" />
    <a href="mailto:karthikchowdary018@gmail.com">
      <button className="button">Mail</button>
    </a>
  </div>
</div>
</div>  
    )
  }
export default Contact;