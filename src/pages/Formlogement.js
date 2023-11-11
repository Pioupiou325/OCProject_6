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
    const name = logement.host.name.split(" ");
    const firstName = name[0];
    const lastName = name[1];
    return (
      <div className="formlogement">
        <header>
          <Banner />
        </header>
        <main>
        <Carrousel pics={logement} />
        <div className="sectionTitleTagsAndHostRating">
          <div className="titleAndTags">
            <div className="titleAndSubtitle">
              <p className="title">{logement.title}</p>
              <p className="subTitle">{logement.location}</p>
              <Tag tags={logement.tags} />
            </div>
          </div>
          <div className="hostAndRating">
            <div className="containerHost">
              <div className="name">
                <p className="firstName">{firstName}</p>
                <p className="lastName">{lastName}</p>
              </div>
              <img
                className="host"
                src={logement.host.picture}
                alt="propriétaire"
              ></img>
            </div>

            <Rating className="rating" stars={logement.rating} />
          </div>
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
          </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
export default Formlogement;
