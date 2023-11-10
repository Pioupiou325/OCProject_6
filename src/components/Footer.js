import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logtext">
        <img src="/assets/logoFooter.svg" alt="logo Kasa" />

        <p>
          © 2020 Kasa. All{" "}
          <span className="mobileSpace">
            <br></br>
          </span>
          rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
