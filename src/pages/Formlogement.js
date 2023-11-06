import React from "react";
import logements from "../datas/logements.json";
import { Navigate, useParams } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Carrousel from "../components/Carrousel";
import Rating from "../components/Rating";
import Tag from "../components/Tag";
import Collapse from "../components/Collapse";

function Formlogement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (logement === undefined) {
    return <Navigate to="/*" />;
  } else {
    return (
      <div className="formlogement">
        <Banner />
        <Carrousel pics={logement} />

        <p className="title">{logement.title}</p>
        <p className="subTitle">{logement.location}</p>

        <Collapse
          className="collapseInForm"
          title="Description"
          content={logement.equipments}
          size="medium"
        />

        <Tag className="tags" tags={logement.tags} />

        <div className="containerHost">
          <p className="name">{logement.host.name}</p>
          <img
            className="host"
            src={logement.host.picture}
            alt="propriétaire"
          ></img>
        </div>
        {/* <Rating className="rating" stars={logement.rating} /> */}
        {/* <Footer /> */}
        {/* minheight100vh */}
      </div>
    );
  }
}
export default Formlogement;
