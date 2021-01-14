import React from 'react';
import './Header.css';
import {Link, useLocation} from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <a href="/" className="header__logo">Thrivetalk</a>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/home"
                  className={`header__nav-link ${location.pathname === "/home" ? "header__nav-link_active" : ""}`}>Home</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/about"
                  className={`header__nav-link ${location.pathname === "/about" ? "header__nav-link_active" : ""}`}>About</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/services"
                  className={`header__nav-link ${location.pathname === "/services" ? "header__nav-link_active" : ""}`}>Services</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/blog"
                  className={`header__nav-link ${location.pathname === "/blog" ? "header__nav-link_active" : ""}`}>Blog</Link>
          </li>
        </ul>
      </nav>
      <button className="header__button header__button_type_nav header__button_position_top">CONTACT US</button>
      <a href="/" className="header__logo header__logo_position_title">Thrivetalk</a>
      <h1 className="header__title">HELPING YOU THRIVE IN ALL AREAS OF LIFE</h1>
      <p className="header__text">Our highly talented therapists can help you with a range of issues including
        relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.
      </p>
      <div className="header__button-container">
        <button className="header__button header__button_type_title header__button_position_left">WHO AM I</button>
        <button className="header__button header__button_type_title header__button_position_right">WHAT DO I DO</button>
      </div>
    </header>
  );
}

export default Header;
