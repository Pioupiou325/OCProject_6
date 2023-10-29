import React from "react";

const PhotoBanner = ({ src, alt, children }) => {
  return (
    <div className="photoBanner">
      <img src={src} alt={alt} />
      {children}
    </div>
  );
};

export default PhotoBanner;
