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
              <div className="card-body my-5">
                <h5 className="card-title">Junior Web Developer</h5>
                <p className="card-text">
                  I am <strong>Dante Alcantara Jr</strong>, a highly motivated
                  and enthusiastic entry-level web developer with a strong
                  passion for creating interactive and user-friendly websites.
                  Equipped with the fundamentals of web development
                  technologies, including<strong> HTML</strong>,
                  <strong>CSS</strong>, and
                  <strong> JavaScript</strong>. A quick learner with a strong
                  attention to detail and a commitment to producing clean,
                  well-structured code. Seeking an opportunity to contribute to
                  web development projects and grow in a supportive and
                  challenging environment
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
