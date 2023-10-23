import React from "react";

function Review({ reviews }) {
  return (
    <>
      <section className="review-section">
        <div className="container">
          <div className="review-content">
            <div className="review-content__title">
              <h2>Reviewed by People</h2>
              <p>
                Discover the positive impact we've made on our clients by
                reading through their reviews. Our clients have experienced our
                service and results, and they're eager to share their positive
                experiences with you!
              </p>
            </div>
            <div className="all-reviews">
              {reviews.map((data, index) => {
                return (
                  <div className="all-reviews__box" key={index}>
                    <h2>{data.title}</h2>
                    <p>{data.review}</p>

                    <div className="all-reviews__box__name">
                      <div className="all-reviews__box__name__profile">
                        <img src={data.profileImg} alt="profile" />
                        <span>
                          <h4>{data.name}</h4>
                          <p>{data.homeCountry}</p>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Review;
