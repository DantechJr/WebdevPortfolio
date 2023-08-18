import React from "react";
import "../css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="row p-3 d-flex  justify-content-between mx-auto">
          <div className="col-sm-12 col-md-6" style={{ width: "200px" }}>
            <small>&copy; 2023 Dante.Alcantara.Jr™</small>
          </div>
          <div
            className="col-sm-12 col-md-6 justify-content-end social-icon d-flex"
            style={{ width: "100px" }}
          >
            <li className="ms-3">
              <Link
                className="text-body-secondary"
                to="https://github.com/DantechJr?tab=repositories"
              >
                <i className="bi bi-github" width="24" height="24"></i>
              </Link>
            </li>

            <li className="ms-3">
              <Link
                className="text-body-secondary"
                to="https://www.linkedin.com/in/dante-alcantara-jr-a41bb6253/"
              >
                <i className="bi bi-linkedin" width="24" height="24"></i>
              </Link>
            </li>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
