import React from "react";

const Collapse = ({ title, content, size }) => {
  const equipments = [];
  console.log(content);
  content.forEach((element) => {
    equipments.push(<li key={element}>{element}</li>)
  });
  return (

 
    <div className="collapse">
      <p className="titleCollapse">{title}</p>
      <p className="contentMasked">{equipments}</p>
    </div>
  )
}
export default Collapse;
