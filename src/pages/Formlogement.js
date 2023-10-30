import React from "react";
import logements from "../datas/logements.json";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Carrousel from "../components/Carrousel";

function Formlogement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);
  
  
  return (
    <div className="formlogement">
      <Banner />
      <Carrousel pics={logement} />
      
      {/* <img src={logement.host.picture} alt="propriétaire"></img> */}
      <Footer />
    </div>
  );
}

export default Formlogement;
