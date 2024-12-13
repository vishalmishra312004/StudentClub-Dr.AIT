import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src="./img/about.png" alt="" className="about-img" />
        <img src="./img/play-icon.png" alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>About Clubs</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          a ratione delectus! Asperiores aut obcaecati accusamus alias?
          Voluptatum sed perspiciatis explicabo vero placeat corrupti?
          Aspernatur!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
          neque, autem quam reiciendis eveniet illum sed rem et.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
          maiores explicabo quo, voluptatum error qui odio reprehenderit
          exercitationem eveniet amet, assumenda accusamus tenetur suscipit
          aperiam unde distinctio culpa sunt? Doloremque!
        </p>
       
      </div>
    </div>
  );
};

export default About