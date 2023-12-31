import React from "react";
import { useState } from "react";

const Collapse = ({ title, content }) => {
  const [active, setActive] = useState(false);
  function handleToggle() {
        setActive(!active);
  }
  return (
    <div className="collapse">
      <div className="titleCollapse" onClick={handleToggle}>{title}
        <img className={`crochet ${active && "active "}`}  src="/assets/arrow_high.svg" alt=""></img>
        </div>
      <div className={`content ${active && "active "}`}>{content}</div>
      
    </div>
  );
};
export default Collapse;
