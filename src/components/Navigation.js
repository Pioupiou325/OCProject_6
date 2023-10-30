import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
     
        
      <ul>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          <li>Accueil</li>
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          <li>A propos</li>
        </NavLink>
      </ul>
    
  );
};

export default Navigation;
