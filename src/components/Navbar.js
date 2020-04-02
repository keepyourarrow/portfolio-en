import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleToggle = () => {
    setIsClicked(!isClicked);
  };

  return (
    <nav className="navbar navbar-expand-lg ">
      <Link to="/" className="navbar-brand ml-4 mr-5">
        My Portfolio
      </Link>
      <button
        aria-expanded="false"
        className={(isClicked ? "change" : "") + " navbar-toggler"}
        type="button"
        onClick={handleToggle}
      >
        <div className="toggler-btn">
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
        </div>
      </button>

      <ul
        className={
          (isClicked ? "nav-links show-nav" : "nav-links") +
          " navbar-nav mr-auto ml-5 navbar-collapse"
        }
      >
        <li className="nav-item">
          <Link to="/" className="nav-link ml-5 pl-5">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/resume" className="nav-link">
            Resume
          </Link>
        </li>
        <li>
          <a href="/#projects" className="nav-link">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a href="/#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
