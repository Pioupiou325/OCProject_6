import React from "react";
import logements from "../datas/logements.json";
import { useParams } from 'react-router-dom';

function Formlogement() {
  const { id } = useParams();
  const logement = logements.find(item => item.id === id);
  return <div>
    <img src={logement.host.picture} alt="propriétaire"></img>
  </div>;
};

export default Formlogement;
