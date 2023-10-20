import React from "react";

import { useState } from "react";
import Carbox from "./Carbox";

const CarPicker = ({ carData, setCarType }) => {
  const [active, setActive] = useState(1);
  const [selectedCar, setSelectedCar] = useState("");
  const carBoxes = [];

  for (let i = 0; i < 8; i++) {
    if (active === i + 1) {
      carBoxes.push(
        <Carbox
          key={i}
          data={carData}
          carID={i}
          setCarType={setCarType}
          selectedCar={selectedCar}
        />
      );
    }
  }

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
                {carData.map((data, index) => {
                  for (let i = 0; i < data.length; i++)
                    return (
                      <button
                        key={index}
                        value={data[i].fullName}
                        onClick={(e) => {
                          setActive(data[i].id);
                          setSelectedCar(e.target.value);
                        }}
                      >
                        {data[i].fullName}
                      </button>
                    );
                })}
              </div>

              {carBoxes}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarPicker;
