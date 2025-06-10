// React aur NavLink (jo routing ke liye hota hai) ko import kar rahe hain
import React from 'react';
import { NavLink } from 'react-router-dom';

// Header naam ka functional component banaya gaya hai
const Header = () => {
  return (
    // Header ke liye container jise top pe fix kiya gaya hai
    <header className="container-fluid px-0 fixed-top">
      
      {/* Bootstrap navbar ka structure use kar rahe hain */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        
        {/* Website ka logo jo home page par le jata hai */}
        <NavLink className="navbar-brand logo" to="/">
          <img src="/img/ic_logo.png" alt="Logo" />
        </NavLink>

        {/* Ye button chhoti screen (mobile) par menu toggle karne ke liye hai */}
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

        {/* Navbar ke links, jo right side me align kiye gaye hain */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            
            {/* Home link */}
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
              >
                Home
              </NavLink>
            </li>

            {/* About Us link */}
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
              >
                About Us
              </NavLink>
            </li>

            {/* Contact Us link */}
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
              >
                Contact Us
              </NavLink>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  );
};

// Header component ko export kar rahe hain taaki use kisi bhi aur file me import kar sakein
export default Header;
