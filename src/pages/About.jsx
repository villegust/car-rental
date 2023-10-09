import React from "react";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner/Banner";
import AboutUs from "../components/About/About";
import Plan from "../components/Plan";
import Divider from "../components/Divider/Divider";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <Banner name="About" />
      <AboutUs />
      <Plan />
      <Divider />
      <Footer />
    </>
  );
}

export default About;
