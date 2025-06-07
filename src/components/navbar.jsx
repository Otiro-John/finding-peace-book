import React, { useState } from 'react';
import './navbar.css';

const navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="logo">Finding Peace</a>

        <button className="nav-toggle" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <ul className={`nav-links ${open ? 'show-nav' : ''}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#preview">Preview</a></li>
          <li><a href="#subscribe">Newsletter</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
