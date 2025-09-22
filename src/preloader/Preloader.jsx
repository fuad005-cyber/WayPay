import "bootstrap/dist/css/bootstrap.min.css";
import "./preloader.css";
import React from "react";

function Preloader() {
  return (
    <div className="preloader-container d-flex flex-column justify-content-center align-items-center">
      <div className="loader">
        <div className="train"></div>
        <div className="track">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <h1 className="mt-4 text-primary fw-bold display-5 display-md-4 display-lg-3 text-center">WayPay</h1>
    </div>
  );
}

export default Preloader;
