import React from "react";
import "./App.css";
import abou from"./abot.json";
import Lottie from "lottie-react";

const About=()=>{
    return(
        <div class="h">
            <div><Lottie loop={true} animationData={abou}/></div>
            <div class="hi">
                <h3>About me</h3>
                <p>Hey there, I'm N. Karthik Chowdary, currently studying in my B.Tech 3rd year at GMR Institute of Technology. I have a keen interest in front-end web development and enjoy working with React framework. Over the past few years, I have gained good knowledge in HTML, CSS, and some Javascript, which has helped me create 3-5 projects using these basics. Additionally, I have also developed 2-3 fine projects using the React framework. I am constantly looking to learn new things and improve my skills in web development.
                    you can find all the in my github ,and the link is provided in the contact.
                    <h2>Some of my projects are:</h2>
                    <ol>
                        <li>my portfolio-using HTML and CSS</li>
                        <li>Simple calculator-using React js</li>
                        <li>Notemaking website-using React js</li>
                        <li>React Routings-using React js</li></ol> 
                </p>
            </div>
        </div>
    )
}
export default About;