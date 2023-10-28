import React from "react";
import logements from "../datas/logements.json";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";

function Formlogement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);
  const picture = logement.pictures;
  const pictures_array = [];
  picture.forEach(element => {
    ;
    pictures_array.push(<img key={element.position} src={element} alt="collection"></img>);
    
      });
  return (
    <div>
      <Banner />
      {pictures_array}
      
      <img src={logement.host.picture} alt="propriétaire"></img>
    </div>
  );
}

export default Formlogement;
