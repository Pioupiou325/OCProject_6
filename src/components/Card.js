import React from "react";
import logements from "../datas/logements.json";
import { NavLink } from "react-router-dom";
function Card() {
  const list_logements = logements.map((logement) => logement);

  return (
    <div className="card">
      <ul>
        {list_logements.map((logement) => (
          <NavLink key={logement.id} to={`/formlogement/${logement.id}`}>
            <li>
              <div className="logement">
                <img src={logement.cover} alt={`${logement.title}`} />
                <div className="overlay"></div>
                <p>{logement.title}</p>
              </div>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default Card;
