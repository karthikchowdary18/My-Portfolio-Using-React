import React from 'react';
import Reactlogo from './result.png';
import Reactlog from './bg.jpg';

const Home= ()=> {
  return (
    <div class ="kaa1">
    <h1>I'm Karthik Chowdary <span>Nunna</span></h1>
    <p> This is my basic portfolio website to show all my abilites and skills
      <br/>Details and work experience in web development
    </p>
    <a href ="https://www.linkedin.com/in/karthik-chowdary-9248b9257/" target="new">My Linkedin </a>
    <div class ="kaa3">

      <img src={Reactlog} alt="kk"class="vaa"/>
      
      <img src={Reactlogo} alt="kk2"class="vaa2"/>
    
    </div>

</div>
  )
}

export default Home

