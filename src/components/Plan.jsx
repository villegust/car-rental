import React from "react";

import icon1 from "../images/Plan/icon1.png";
import icon2 from "../images/Plan/icon2.png";
import icon3 from "../images/Plan/icon3.png";

function Plan() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Plan your next trip now</h3>
              <h2>Quick & easy</h2>
              <div className="plan-container__boxes">
                <div className="plan-container__boxes__infoBox">
                  <img src={icon1} alt="logo1" />
                  <h3>Select your favourite car</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil corrupti temporibus in
                  </p>
                </div>

                <div className="plan-container__boxes__infoBox">
                  <img src={icon2} alt="logo2" />
                  <h3>Contact our operators</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil corrupti temporibus in
                  </p>
                </div>

                <div className="plan-container__boxes__infoBox">
                  <img src={icon3} alt="logo3" />
                  <h3>Let's drive</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil corrupti temporibus in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Plan;
