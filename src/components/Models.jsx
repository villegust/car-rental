import React from "react";

import Car from "../images/Cars/audi-rs6.jpg";

function Models() {
  return (
    <>
      <section id="model-section" className="model-section">
        <div className="container">
          <div className="model-container">
            <div className="model-container__title">
              <h2>Our Vehicle Models</h2>
              <p>
                Choose from a large pick off luxury cars to take for your next
                trip.
              </p>
            </div>

            <div className="model-container__car-content">
              <div className="car-picker">
                <button>Audi RS6 Avant</button>
                <button>BMW M4 Compentition</button>
                <button>Mercedes Benz G63 Wagon</button>
                <button>Porsche 911 GT3 RS</button>
                <button>Aston Martin DB5</button>
                <button>Lamborgini Urus</button>
                <button>Koenigsegg Jesko</button>
              </div>

              <div className="car-box">
                <div className="picked-car">
                  <img src={Car} alt="Image of chosen car" />
                </div>

                <div className="car-info">
                  <div className="car-info__price">
                    <span>1000 kr</span>/ day rent
                  </div>

                  <div className="car-info__table">
                    <div className="car-info__table__col">
                      <span>Model</span>
                      <span>Audi</span>
                    </div>

                    <div className="car-info__table__col">
                      <span>Mark</span>
                      <span>RS6</span>
                    </div>

                    <div className="car-info__table__col">
                      <span>Year</span>
                      <span>2022</span>
                    </div>
                    <div className="car-info__table__col">
                      <span>Doors</span>
                      <span>4</span>
                    </div>

                    <div className="car-info__table__col">
                      <span>AC</span>
                      <span>Yes</span>
                    </div>

                    <div className="car-info__table__col">
                      <span>Transmission</span>
                      <span>Automatic</span>
                    </div>

                    <div className="car-info__table__col">
                      <span>Fuel</span>
                      <span>Gasoline</span>
                    </div>
                  </div>
                  <a className="reserve-btn" href="#booking-section">
                    Reserve
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Models;
