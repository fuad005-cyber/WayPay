import React, { useState, useEffect } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <nav className="navbar navbar-light shadow-sm">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Логотип */}
          <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
            <img src="/favicon.ico" alt="Logo" width="40" height="40" className="me-2" />
            WayPay
          </Link>

          {/* Гамбургер */}
          <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Самописное мобильное меню */}
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li style={{ '--i': 0 }}><a href="#news" onClick={toggleMenu}>NEWS</a></li>
            <li style={{ '--i': 1 }}><a href="#about" onClick={toggleMenu}>ABOUT</a></li>
            <li style={{ '--i': 2 }}><a href="#contact" onClick={toggleMenu}>CONTACT</a></li>
            <li style={{ '--i': 3 }}><a href="#support" onClick={toggleMenu}>SUPPORT</a></li>
          </ul>
          <div className="mobile-buttons">
            <Link to="/login" className="btn btn-success btn-lg mb-3" onClick={toggleMenu}>Login</Link>
            <Link to="/signup" className="btn btn-primary btn-lg" onClick={toggleMenu}>Signup</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
