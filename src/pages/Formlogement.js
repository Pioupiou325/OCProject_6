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
    const equipments = [];

    logement.equipments.forEach((element) => {
      equipments.push(<li key={element}>{element}</li>);
    });

    return (
      <div className="formlogement">
        <Banner />
        <Carrousel pics={logement} />
        <div className="titleAndSubtitle">
          <p className="title">{logement.title}</p>
          <p className="subTitle">{logement.location}</p>
        </div>
        <div className="tagAndRating">
          <Tag tags={logement.tags} />
          <Rating className="rating" stars={logement.rating} />
        </div>
        <div className="listCollapse">
          <Collapse
            className="collapseInForm"
            title="Description"
            content={logement.description}
            size="medium"
          />
          <Collapse
            className="collapseInForm"
            title="Équipements"
            content={equipments}
            size="medium"
          />
        </div>
        <div className="containerHost">
          <p className="name">{logement.host.name}</p>
          <img
            className="host"
            src={logement.host.picture}
            alt="propriétaire"
          ></img>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Formlogement;
