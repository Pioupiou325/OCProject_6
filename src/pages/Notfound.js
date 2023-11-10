import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
const Notfound = () => {
  return (
    <div className="notFound">
      <Banner />
      <p className="highNumber">404</p>
      <p className="middleText">
        Oups! La page que {" "}
        <span className="mobileSpace">
            <br></br>
        </span>
        vous demandez n' existe pas
      </p>
      <NavLink to={`/`}>
        <p className="littleText">Retourner sur la page d' accueil</p>
      </NavLink>

      <Footer />
    </div>
  );
};

export default Notfound;
