// components/Footer.js
import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink instead of Link

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src="/img/ic_logo.png" alt="Logo" />
      </div>
      <nav>
        <NavLink
          to="/"
          end
          className={({ isActive }) => 'footer-link' + (isActive ? ' active' : '')}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => 'footer-link' + (isActive ? ' active' : '')}
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => 'footer-link' + (isActive ? ' active' : '')}
        >
          Contact Us
        </NavLink>
      </nav>
      <div className="footer-line"></div>
      <div className="footer-text">© 2023 Your Company. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
