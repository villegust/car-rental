import { Link } from "react-router-dom";
// import BgShape from "../images/LandingPage/landingPageImg.png";
import HeroCar from "../images/LandingPage/landingPageImg.png";

function LandingPage() {
  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section id="home" className="landPage-section">
        <div className="container">
          {/* <img className="bg-shape" src={BgShape} alt="bg-shape" /> */}
          <div className="landPage-content">
            <div className="landPage-content__text">
              <h4>Plan your next trip!</h4>
              <h2>
                Drive off with <span>substantial</span> savings on your next
                rental.
              </h2>
              <p>
                Get the car you've always dreamed of. Incredible rates, endless
                miles, versatile pick-up choices, and a whole lot more.
              </p>
              <div className="landPage-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="landPage-content__text__btns__book-ride"
                  to="/"
                >
                  Book Ride
                </Link>
                <Link
                  className="landPage-content__text__btns__learn-more"
                  to="/"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <img
              src={HeroCar}
              alt="car-img"
              className="landPage-content__car-img"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
