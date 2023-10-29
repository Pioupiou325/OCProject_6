import React from "react";
import PhotoBanner from "../components/PhotoBanner";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Banner />
      <PhotoBanner src="/assets/montagnes_apropos.jpg" alt="montagnes" />
      <Footer />
    </div>
  );
};

export default About;
