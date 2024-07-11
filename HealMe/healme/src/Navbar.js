import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="menu-icon"></span>
      </div>
      <div className="content">
        <section id="home">
          <h1>Home</h1>
          <p>Welcome to our website.</p>
        </section>
        <section id="about">
          <h1>About</h1>
          <p>About us section.</p>
        </section>
        <section id="services">
          <h1>Services</h1>
          <p>Our services.</p>
        </section>
        <section id="contact">
          <h1>Contact</h1>
          <p>Contact us section.</p>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
