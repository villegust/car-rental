import { useState } from "react";

function Carbox({ data, carID, setCarType, selectedCar }) {
  const [carLoad, setCarLoad] = useState(true);

  return (
    <>
      {data[carID].map((car, id) => {
        return (
          <div key={id} className="car-box">
            <div className="picked-car">
              <img
                src={car.img}
                alt="Image of chosen car"
                onLoad={() => setCarLoad(false)}
              />
            </div>

            <div className="car-info">
              <div className="car-info__price">
                <span>{car.price} kr</span>/ day rent
              </div>

              <div className="car-info__table">
                <div className="car-info__table__col">
                  <span>Model</span>
                  <span>{car.mark}</span>
                </div>

                <div className="car-info__table__col">
                  <span>Mark</span>
                  <span>{car.model}</span>
                </div>

                <div className="car-info__table__col">
                  <span>Year</span>
                  <span>{car.year}</span>
                </div>
                <div className="car-info__table__col">
                  <span>Doors</span>
                  <span>{car.doors}</span>
                </div>

                <div className="car-info__table__col">
                  <span>AC</span>
                  <span>{car.ac}</span>
                </div>

                <div className="car-info__table__col">
                  <span>Transmission</span>
                  <span>{car.transmission}</span>
                </div>

                <div className="car-info__table__col">
                  <span>Fuel</span>
                  <span>{car.fuel}</span>
                </div>
              </div>
              <a
                className="reserve-btn"
                href="#booking-section"
                onClick={() => setCarType(selectedCar)}
              >
                Reserve
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Carbox;
