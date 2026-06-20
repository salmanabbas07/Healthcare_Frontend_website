import React, { useState } from 'react'
import "./navbar.modules.css";
import { IoCallOutline } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbarBox">
      <div className="mainNav">
        <div className="logoBox">
          <img src="../images/final-logo.png" alt="Medix Logo" />
          <h1 className="logoText">MEDIX</h1>
        </div>

        {/* Menu */}
        <div className={`navItem ${open ? "navActive" : ""}`}>
          <Link to="/" className="navLink"></Link>
          <Link to="/home" className="navLink"><h4>HOME</h4></Link>
          <Link to="/about" className="navLink"><h4>ABOUT</h4></Link>
          <Link to="/facilities" className="navLink"><h4>FACILITIES</h4></Link>
          <Link to="/contacts" className="navLink"><h4>CONTACTS</h4></Link>
        </div>

        {/* Toggle Button */}
        <div className="menuIcon" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <div className="contactBar">
        <div className="contactInfo">
          <IoCallOutline className="callIcon" />
          <p className="callNum">+91 97345 67890</p>
          <i className="fa-regular fa-envelope mailIcon"></i>
          <p className="emailText">medixhospital@gmail.com</p>
        </div>

        <div className="socialIcons">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fab fa-instagram-square"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>
    </nav>
  )
}

