import React from "react";
import Banner from "../components/Banner";

const Notfound = () => {
  return <div>
    <Banner />
    <p className='highNumber'>404</p>
    <p className="middleText">Oups! La page que vous demandez n' existe pas</p>
    <p className="littleText">Retourner sur la page d' accueil</p>
  </div>;
};

export default Notfound;
