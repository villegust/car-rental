function Carbox() {
  return (
    <>
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
    </>
  );
}

export default Carbox;
