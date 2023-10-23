import React from "react";

import { REVIEW_DATA } from "../components/Data/Data";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner/Banner";
import Review from "../components/Review/Review";
import Divider from "../components/Divider/Divider";
import Footer from "../components/Footer";

function Reviews() {
  return (
    <>
      <Navbar />
      <Banner name="Reviews" />
      <Review reviews={REVIEW_DATA} />
      <Divider />
      <Footer />
    </>
  );
}

export default Reviews;
