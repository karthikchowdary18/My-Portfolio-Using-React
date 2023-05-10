import React from "react";
import "./App.css";
import hire from "./hiir.json";
import Lottie from "lottie-react";

const Hireme = () => {
  return (
    <div>
   <div class="cla"> <Lottie loop={true} animationData={hire}/></div>
    <div class="pa"><p>Hello, I'm N. Karthik Chowdary, a front-end web developer currently pursuing my B.Tech degree in the third year at GMR Institute of Technology. My passion for web development began a few years ago, and since then, I have gained a good understanding of HTML, CSS, and Javascript. In fact, I have utilized these skills to develop 3-5 projects, which have helped me refine my understanding of these technologies.Apart from this, I have also developed 2-3 projects using the popular React framework. With a keen eye for detail, I am always on the lookout for ways to improve the user experience of any website or application that I work on. If you would like to see some examples of my work, please check out my Github profile (https://github.com/karthikchowdary18), where I have uploaded some of my previous projects.

    I am excited about the prospect of working with a dynamic organization that values innovation and creativity. With a passion for learning and a strong work ethic, I am confident that I would be an asset to any team that I join. Thank you for considering my application, and I look forward to hearing from you soon.</p>
    <h1>Thankyou</h1>
</div>
</div>
            
   
  );
};

export default Hireme;
