import "bootstrap/dist/css/bootstrap.min.css";
import "./preloader.css"
import React from "react";

function Preloader() {
  return (
    <div className="preloader-container">
      <div className="loader">
        <div className="train"></div>
        <div className="track">
          <span></span>
          <span></span>
          <span></span>
        </div>
        
      </div>
      <h1>WayPay</h1>
    </div>
  );
}

export default Preloader;
