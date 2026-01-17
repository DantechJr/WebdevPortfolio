import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import Dog from "../assets/dog.gif";
import Menu from "../assets/menu.png";
import Resume1 from "../assets/Dante(Resume2026).pdf";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg px-3">
        <div className="container-fluid bg-transparent">
          {/* Logo */}
          <Link
            className="navbar-brand d-flex align-items-center bg-transparent"
            to="/"
          >
            <img
              src={Dog}
              alt="dog hello"
              className="rounded-circle"
              style={{ backgroundColor: "rgb(255, 255, 255)" }}
            />
            <strong className="ms-2 bg-transparent">DANTE</strong>
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            <img src={Menu} alt="" style={{ height: "40px", width: "40" }} />
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
                <Link className="nav-link" to="/Certificates">
                  Certificates
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
                  className="btn btn-outline-light"
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
