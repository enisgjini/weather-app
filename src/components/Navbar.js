import React from "react";
import "../App.css";
import CloudIcon from "../assets/clouds.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="box-of-logo">
        <img src={CloudIcon} alt="" />
      </div>
    </div>
  );
}
