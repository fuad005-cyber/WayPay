import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          {/* ЛОГОТИП слева */}
          <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
            <img
              src="/favicon.ico"
              alt="Logo"
              width="40"
              height="40"
              className="d-inline-block align-text-top me-2"
            />
            WayPay
          </Link>

          {/* ГАМБУРГЕР справа */}
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

          {/* МЕНЮ */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav align-items-lg-center me-3">
              <li className="nav-item">
                <a className="nav-link" href="#news">NEWS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">CONTACT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#support">SUPPORT</a>
              </li>
            </ul>

            {/* КНОПКИ LOGIN / SIGNUP */}
            <div className="d-flex gap-2">
              <Link to="/login" className="btn btn-success btn-sm">
                Login
              </Link>
              <Link to="/signup" className="btn btn-primary btn-sm">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
