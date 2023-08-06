import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import Dog from "../assets/dog.gif";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-transparent">
        <div className="container-fluid">
          <span>
            <img src={Dog} alt="dog hello" className="mx-2" />
          </span>
          <Link className="navbar-brand" to="/">
            <strong> DANTE</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Project">
                  Project
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Contact">
                  Contact
                </Link>
              </li>
              <button
                className="btn btn-outline-dark"
                style={{ width: "150px" }}
              >
                Download CV
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
