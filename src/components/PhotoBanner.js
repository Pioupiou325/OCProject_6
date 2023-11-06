import React from "react";

const PhotoBanner = ({ src, alt, children=null }) => {
  return (
    <div className="photoBanner">
      <img src={src} alt={alt} />
      <div className="overlay"></div>
      {children}
    </div>
  );
};

export default PhotoBanner;
