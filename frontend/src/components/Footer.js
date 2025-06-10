// React ko import kar rahe hain
import React from 'react';

// react-router-dom se NavLink component import kar rahe hain (ye navigation ke liye use hota hai)
import { NavLink } from 'react-router-dom'; // Use NavLink instead of Link

// Footer naam ka functional component define kar rahe hain
const Footer = () => {
  return (
    // footer HTML structure return kar rahe hain
    <footer>
      
      {/* Footer ke andar logo image show kar rahe hain */}
      <div className="footer-logo">
        <img src="/img/ic_logo.png" alt="Logo" />
      </div>

      {/* Footer ke navigation links banaye ja rahe hain */}
      <nav>
        {/* Home page ka link. isActive ka matlab hai: kya ye current active page hai? */}
        <NavLink
          to="/"
          end
          className={({ isActive }) => 'footer-link' + (isActive ? ' active' : '')}
        >
          Home
        </NavLink>

        {/* About Us page ka link */}
        <NavLink
          to="/about"
          className={({ isActive }) => 'footer-link' + (isActive ? ' active' : '')}
        >
          About Us
        </NavLink>

        {/* Contact Us page ka link */}
        <NavLink
          to="/contact"
          className={({ isActive }) => 'footer-link' + (isActive ? ' active' : '')}
        >
          Contact Us
        </NavLink>
      </nav>

      {/* Ek line show karne ke liye (styling purpose ke liye) */}
      <div className="footer-line"></div>

      {/* Footer me copyright text */}
      <div className="footer-text">© 2023 Your Company. All rights reserved.</div>
    </footer>
  );
};

// Footer component ko export kar rahe hain taaki isse dusri files me use kiya ja sake
export default Footer;
