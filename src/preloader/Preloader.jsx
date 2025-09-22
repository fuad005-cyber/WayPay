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
    </div>
  );
}

export default Preloader;
