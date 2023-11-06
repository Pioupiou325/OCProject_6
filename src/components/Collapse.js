import React from "react";

const Collapse = ({ title, content, size }) => {
 
  function showContent(){
    console.log(content);
  }
  return (
    <div className="collapse">
      <p className="titleCollapse">{title}</p>
      <img className="crochet" onClick={showContent}  src="/assets/arrow_high.svg" alt=""></img>
      <p id="content" className="contentMasked">{content}</p>
    </div>
  );
};
export default Collapse;
