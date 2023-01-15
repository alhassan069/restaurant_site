import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footerBox">
      <div className="iconCont">
        <div className="iconBox">
          <img src="./assets/facebookIcon.png" alt="facebook" />
        </div>
        <div className="iconBox">
          <img src="./assets/instagramIcon.png" alt="instagram" />
        </div>
        <div className="iconBox">
          <img src="./assets/twitterIcon.png" alt="twitter" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
