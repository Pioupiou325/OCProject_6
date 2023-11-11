import React from "react";
import Collapse from "../components/Collapse";
import PhotoBanner from "../components/PhotoBanner";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="about">
      <header>
        <Banner />
      </header>
      <main>
      <PhotoBanner src="/assets/montagnes_apropos.jpg" alt="montagnes" />
      <div className="listCollapseAbout">
        <Collapse
          className="collapseInForm"
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes."
          size="medium"
        />
        <Collapse
          className="collapseInForm"
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
            perturbation du voisinage entraînera une exclusion de notre plateforme."
          size="medium"
        />
        <Collapse
          className="collapseInForm"
          title="Service"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
            perturbation du voisinage entraînera une exclusion de notre plateforme."
          size="medium"
        />
        <Collapse
          className="collapseInForm"
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
            correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
            locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
            également des ateliers sur la sécurité domestique pour nos hôtes."
          size="medium"
        />
        </div>
        </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default About;
