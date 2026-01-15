import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import Dog from "../assets/dog.gif";
import Resume1 from "../assets/Dante(Resume2026).pdf";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-transparent px-3">
        <div className="container-fluid bg-transparent">
          {/* Logo */}
          <Link
            className="navbar-brand d-flex align-items-center bg-transparent"
            to="/"
          >
            <img
              src={Dog}
              alt="dog hello"
              className="bg-transparent"
              style={{ width: "40px" }}
            />
            <strong className="ms-2 bg-transparent">DANTE</strong>
          </Link>

          {/* Toggler */}
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

          {/* Collapsible Menu */}
          <div
            className="collapse navbar-collapse text-center bg-transparent"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3 bg-transparent">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
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
                <Link className="nav-link" to="/Contact">
                  Contact
                </Link>
              </li>

              <li className="nav-item">
                <a
                  href={Resume1}
                  className="btn btn-outline-dark"
                  download="Resume"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
