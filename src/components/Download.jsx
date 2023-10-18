import React from "react";

import GooglePlayStore from "../images/Download/googleapp.svg";
import AppleStore from "../images/Download/appstore.svg";

function Download() {
  return (
    <section className="download-section">
      <div className="container">
        <div className="download-text">
          <h2>Download our app for more benefits</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit ipsum
            porro voluptatem ullam temporibus saepe velit nam magni facilis
            officia, omnis assumenda, repudiandae aliquid rerum reiciendis culpa
            similique veniam dolorem!
          </p>
          <div className="download-text__btns">
            <a href="https://play.google.com/store/games?device=windows&pli=1">
              <img src={GooglePlayStore} alt="Google play store download" />
            </a>

            <a href="https://www.apple.com/se/app-store/">
              <img src={AppleStore} alt="Apple store download" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Download;
