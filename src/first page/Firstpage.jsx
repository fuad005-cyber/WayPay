import React from "react";
import { Link } from "react-router-dom";
import "./firstpage.css";

const FirstPage = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          {/* Логотип или название */}
          <Link className="navbar-brand fw-bold" to="/">
            
          </Link>

          {/* Кнопка гамбургер для мобильных */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Меню */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="#news">NEWS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#about">ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#contact">CONTACT</Link>
              </li>
            </ul>

            {/* Кнопки Login / Signup */}
            <div className="d-flex gap-2">
              <Link to="/login" className="btn btn-success">
                Login
              </Link>
              <Link to="/signup" className="btn btn-primary">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default FirstPage;
