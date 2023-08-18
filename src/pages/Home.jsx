import React from "react";
import Hero from "../components/Hero";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import "../css/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="my-5 Home-page">
        <h1
          className="text-center"
          style={{
            fontFamily: "cursive",
          }}
        >
          Hi there welcome to my Portfolio!
        </h1>
      </div>
      <Hero />
      {/* home about section */}
      <div className="home-about">
        <br />
        <br />
        <br />
        <br />
        <div className="card home-card mx-auto text-center w-50 ">
          <h5 className="card-header">ABOUT</h5>
          <div className="card-body">
            <h5 className="card-title">Education and Trainings</h5>
            <p className="card-text">
              Know more about my education background and trainings
            </p>
            <Link to="/About" className="btn btn-dark">
              Check me out!
            </Link>
          </div>
          <div className="card-footer text-body-secondary">
            <b> Feel free to look around</b>
          </div>
        </div>
      </div>
      {/* home project section */}
      <div className="home-project">
        <br />
        <br />
        <br />
        <br />
        <div className="card home-project-card w-50 mx-auto">
          <h5 className="card-header">Projects</h5>
          <div className="card-body">
            <h5 className="card-title">Different types of development</h5>
            <p className="card-text">
              Check out some of my outputs through out my journey as i step into
              the world of web development
            </p>
            <Link to="/Project" className="btn btn-dark">
              Look here!
            </Link>
          </div>
        </div>
      </div>
      {/* home contact section  */}
      <div className="home-contact">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="card mx-auto home-contact-card w-50">
          <h5 className="card-header">Contact</h5>
          <div className="card-body">
            <h5 className="card-title">Let's have a chat</h5>
            <p className="card-text">
              if you find something that picks your interest don't hesitate to
              use the contact form and leave a message!
            </p>
            <Link to="/Contact" className="btn btn-dark">
              Connect with me!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
