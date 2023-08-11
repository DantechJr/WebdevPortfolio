import React from "react";
import "../css/Footer.css";

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
              <a
                className="text-body-secondary"
                href="https://github.com/DantechJr?tab=repositories"
              >
                <i className="bi bi-github" width="24" height="24"></i>
              </a>
            </li>

            <li className="ms-3">
              <a
                className="text-body-secondary"
                href="https://www.linkedin.com/in/dante-alcantara-jr-a41bb6253/"
              >
                <i className="bi bi-linkedin" width="24" height="24"></i>
              </a>
            </li>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
