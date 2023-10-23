import React from "react";
import Navigation from "../components/Navigation";

const Notfound = () => {
  return <div>
    <Navigation />
    <p className='highNumber'>404</p>
    <p className="middleText">Oups! La page que vous demandez n' existe pas</p>
    <p className="littleText">Retourner sur la page d' accueil</p>
  </div>;
};

export default Notfound;
