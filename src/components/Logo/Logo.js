import React from "react";
import burguerLogo from "../../assets/images/burger-logo.png";
import "./Logo.css";

const logo = props => (
  <div className="logo" style={{ height: "80%" }}>
    <img src={burguerLogo} alt="burger" />
  </div>
);

export default logo;
