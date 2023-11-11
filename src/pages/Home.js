import React from "react";
import Banner from "../components/Banner";
import PhotoBanner from "../components/PhotoBanner";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <header>
        <Banner />
      </header>
      <main>
      <PhotoBanner src="/assets/montagnes_accueil.jpg" alt="montagnes">
        <p>
          Chez vous,{" "}
          <span className="mobileSpace">
            <br></br>
          </span>
          partout et ailleurs
        </p>
      </PhotoBanner>
        <Card />
        </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
