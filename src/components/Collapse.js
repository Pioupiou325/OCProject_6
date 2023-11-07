import React from "react";
import { useState } from "react";

const Collapse = ({ title, content }) => {
  const [active, setActive] = useState(false);
  function handleToggle() {
    console.log("ok");
    setActive(!active);
  }
  return (
    <div className="collapse">
      <div className="titleCollapse">{title}
        <img className="crochet" onClick={handleToggle} src="/assets/arrow_high.svg" alt=""></img>
        </div>
      <div className={`content ${active && "active "}`}>{content}</div>
    </div>
  );
};
export default Collapse;
