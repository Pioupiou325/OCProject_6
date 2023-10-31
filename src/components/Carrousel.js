import React, { useEffect } from "react";
import { useState } from "react";

const Carrousel = ({ pics }) => {

  const pictures = pics.pictures;
  const [index, updateIndex] = useState(0);
  useEffect(() => {
    <p>{index}</p>;
     
     
  });
  function clicOnNext() {
    if (index < pictures.length - 1) {
      updateIndex(index + 1);
    } else {
      updateIndex(index - (pictures.length - 1));
    }
  }
  function clicOnPrevious() {
    if (index === 0) {
      updateIndex(index + pictures.length - 1);
    } else {
      updateIndex(index - 1);
    }
  }
  if (pictures.length > 1) {
    return (
      <div className="carrousel">
      
        <button className="leftPosition" onClick={clicOnPrevious}>previous</button>
        <button className="rightPosition" onClick={clicOnNext}>next</button>
        <img src={pictures[index]} alt={pics.title}></img>;
        <p>
          {index + 1} / {pictures.length}
        </p>
      </div>
    )
  } else {
    return (
      <div className="carrousel">
        <img src={pictures[index]} alt={pics.title}></img>
        </div>
    )
    
  };
}


export default Carrousel;
