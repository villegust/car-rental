import { useState } from "react";
import Carbox from "./Carbox";

function CarPicker({ carData }) {
  const [active, setActive] = useState(1);

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
                <button onClick={() => setActive(1)}>Audi RS6 Avant</button>
                <button onClick={() => setActive(2)}>
                  BMW M4 Compentition
                </button>
                <button onClick={() => setActive(3)}>
                  Mercedes Benz G63 Wagon
                </button>
                <button onClick={() => setActive(4)}>Porsche 911 GT3 RS</button>
                <button onClick={() => setActive(5)}>Aston Martin DB5</button>
                <button onClick={() => setActive(6)}>Lamborghini Urus</button>
                <button onClick={() => setActive(7)}>Koenigsegg Jesko</button>
              </div>
              {active === 1 && <Carbox data={carData} carID={0} />}
              {active === 2 && <Carbox data={carData} carID={1} />}
              {active === 3 && <Carbox data={carData} carID={2} />}
              {active === 4 && <Carbox data={carData} carID={3} />}
              {active === 5 && <Carbox data={carData} carID={4} />}
              {active === 6 && <Carbox data={carData} carID={5} />}
              {active === 7 && <Carbox data={carData} carID={6} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CarPicker;
