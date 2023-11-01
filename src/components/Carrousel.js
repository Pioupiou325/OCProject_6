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
        <img
          className="leftPosition"
          onClick={clicOnPrevious}
          src="/assets/back.svg"
          alt=""
        ></img>
        <img
          className="rightPosition"
          onClick={clicOnNext}
          src="/assets/forward.svg"
          alt=""
        ></img>
        <img
          className="image_showed"
          src={pictures[index]}
          alt={pics.title}
        ></img>
        <p>
          {index + 1} / {pictures.length}
        </p>
      </div>
    );
  } else {
    return (
      <div className="carrousel">
        <img
          className="image_showed"
          src={pictures[index]}
          alt={pics.title}
        ></img>
      </div>
    );
  }
};

export default Carrousel;
