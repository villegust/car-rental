import React from "react";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner/Banner";
import ContactUs from "../components/Contact/Contact";
import Divider from "../components/Divider/Divider";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <Banner name="Contact" />
      <ContactUs />
      <Divider />
      <Footer />
    </>
  );
}

export default Contact;
