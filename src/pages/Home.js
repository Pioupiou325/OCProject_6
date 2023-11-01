import React from "react";
import Banner from "../components/Banner";
import PhotoBanner from "../components/PhotoBanner";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <PhotoBanner src="/assets/montagnes_accueil.jpg" alt="montagnes">
        <p>Chez vous comme ailleurs</p>
      </PhotoBanner>      
      <Card />
      <Footer />
    </div>
    
      
    

    
  );
};

export default Home;
