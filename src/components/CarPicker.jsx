import React from "react";

import { useState } from "react";
import Carbox from "./Carbox";

function CarPicker({ carData, setCarType }) {
  const [active, setActive] = useState(1);
  const [selectedCar, setSelectedCar] = useState("");

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
                <button
                  value={"Audi RS6 Avant"}
                  onClick={(e) => {
                    setActive(1);
                    setSelectedCar(e.target.value);
                  }}
                >
                  Audi RS6 Avant
                </button>
                <button
                  value={"BMW M4 Compentition"}
                  onClick={(e) => {
                    setActive(2);
                    setSelectedCar(e.target.value);
                  }}
                >
                  BMW M4 Compentition
                </button>
                <button
                  value={"Mercedes Benz G63 Wagon"}
                  onClick={(e) => {
                    setActive(3);
                    setSelectedCar(e.target.value);
                  }}
                >
                  Mercedes Benz G63 Wagon
                </button>
                <button
                  value={"Porsche 911 GT3 RS"}
                  onClick={(e) => {
                    setActive(4);
                    setSelectedCar(e.target.value);
                  }}
                >
                  Porsche 911 GT3 RS
                </button>
                <button
                  value={"Aston Martin DB5"}
                  onClick={(e) => {
                    setActive(5);
                    setSelectedCar(e.target.value);
                  }}
                >
                  Aston Martin DB5
                </button>
                <button
                  value={"Lamborghini Urus"}
                  onClick={(e) => {
                    setActive(6);
                    setSelectedCar(e.target.value);
                  }}
                >
                  Lamborghini Urus
                </button>
                <button
                  value={"Koenigsegg Jesko"}
                  onClick={(e) => {
                    setActive(7);
                    setSelectedCar(e.target.value);
                  }}
                >
                  Koenigsegg Jesko
                </button>
                <button
                  value={"Polestar 2"}
                  onClick={(e) => {
                    setActive(8);
                    setSelectedCar(e.target.value);
                  }}
                >
                  Polestar 2
                </button>
              </div>
              {active === 1 && (
                <Carbox
                  data={carData}
                  carID={0}
                  setCarType={setCarType}
                  selectedCar={selectedCar}
                />
              )}
              {active === 2 && (
                <Carbox
                  data={carData}
                  carID={1}
                  setCarType={setCarType}
                  selectedCar={selectedCar}
                />
              )}
              {active === 3 && (
                <Carbox
                  data={carData}
                  carID={2}
                  setCarType={setCarType}
                  selectedCar={selectedCar}
                />
              )}
              {active === 4 && (
                <Carbox
                  data={carData}
                  carID={3}
                  setCarType={setCarType}
                  selectedCar={selectedCar}
                />
              )}
              {active === 5 && (
                <Carbox
                  data={carData}
                  carID={4}
                  setCarType={setCarType}
                  selectedCar={selectedCar}
                />
              )}
              {active === 6 && (
                <Carbox
                  data={carData}
                  carID={5}
                  setCarType={setCarType}
                  selectedCar={selectedCar}
                />
              )}
              {active === 7 && (
                <Carbox
                  data={carData}
                  carID={6}
                  setCarType={setCarType}
                  selectedCar={selectedCar}
                />
              )}
              {active === 8 && (
                <Carbox
                  data={carData}
                  carID={7}
                  setCarType={setCarType}
                  selectedCar={selectedCar}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CarPicker;
