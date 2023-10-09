import React from "react";

import ProfilePic from "../../images/Team/team-img.png";

function Team() {
  return (
    <section className="team-section">
      <div className="container">
        <div className="team-container">
          <div className="team-container__team-box">
            <div className="team-container__team-box__img-div">
              <img src={ProfilePic} alt="Team" />
            </div>
            <div className="team-container__team-box__desc">
              <h2>John Smith</h2>
              <p>Owner</p>
            </div>
          </div>

          <div className="team-container__team-box">
            <div className="team-container__team-box__img-div">
              <img src={ProfilePic} alt="Team" />
            </div>
            <div className="team-container__team-box__desc">
              <h2>Olivia Johnson</h2>
              <p>Seller</p>
            </div>
          </div>

          <div className="team-container__team-box">
            <div className="team-container__team-box__img-div">
              <img src={ProfilePic} alt="Team" />
            </div>
            <div className="team-container__team-box__desc">
              <h2>Daniel Edwards</h2>
              <p>Seller</p>
            </div>
          </div>

          <div className="team-container__team-box">
            <div className="team-container__team-box__img-div">
              <img src={ProfilePic} alt="Team" />
            </div>
            <div className="team-container__team-box__desc">
              <h2>Emma Taylor</h2>
              <p>Seller</p>
            </div>
          </div>

          <div className="team-container__team-box">
            <div className="team-container__team-box__img-div">
              <img src={ProfilePic} alt="Team" />
            </div>
            <div className="team-container__team-box__desc">
              <h2>Alexander Davis</h2>
              <p>Seller</p>
            </div>
          </div>

          <div className="team-container__team-box">
            <div className="team-container__team-box__img-div">
              <img src={ProfilePic} alt="Team" />
            </div>
            <div className="team-container__team-box__desc">
              <h2>Ethan Foster</h2>
              <p>Seller</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
