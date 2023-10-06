import React from "react";

import { Link } from "react-router-dom";

function Banner({ name }) {
  return (
    <section className="banner">
      <div className="banner__overlay"></div>
      <div className="container">
        <div className="banner__text">
          <div className="hero-pages__text">
            <h3>{name}</h3>
            <p>
              <Link to="/">Home</Link> / {name}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
