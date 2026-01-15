import React from "react";
import avatar from "../assets/avatar.gif";
import "../css/Hero.css";

const Hero = () => {
  return (
    <>
      <div className="m-5">
        <div className="card hero">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={avatar}
                className="img-fluid rounded-start"
                style={{ height: "100%", objectFit: "contain" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body my-5 fs-5">
                <h4 className="card-title">Information Technology Graduate</h4>
                <p className="card-text">
                  Recent BS Information Technology graduate with hands-on
                  experience building real-world web applications through
                  academic, bootcamp, and capstone projects. Skilled in
                  front-end development and foundational backend technologies,
                  with experience deploying projects using modern tools. Highly
                  trainable, adaptable, and eager to contribute to system
                  development, application support, and continuous learning in a
                  professional IT environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
