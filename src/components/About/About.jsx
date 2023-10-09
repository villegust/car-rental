import React from "react";

import AboutImg from "../../images/About/About.jpg";
import Divider from "../Divider/Divider";
import Plan from "../Plan";

function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-main">
          <img className="about-main__img" src={AboutImg} alt="About" />

          <div className="about-main__text">
            <h3>About our company</h3>
            <h2>Fire up your engine, and let the adventure begin!</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
              commodi facilis numquam sint nulla! Odio, iste repudiandae. Illo
              voluptatibus ipsum porro similique inventore consequatur rerum
              eligendi incidunt, obcaecati, debitis sequi.
            </p>
          </div>
        </div>
        <Plan />
      </div>
      <Divider />
    </section>
  );
}

export default About;
