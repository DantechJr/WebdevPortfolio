import React from "react";
import sample from "../assets/sample.jpg";
import Phome from "../assets/portfolio/P1.jpg";
import Pabout from "../assets/portfolio/P2.jpg";
import Pproject from "../assets/portfolio/P3.jpg";
import Pcontact from "../assets/portfolio/P4.jpg";
import kodego from "../assets/kodegologo.png";
import github from "../assets/github.png";
import { Link } from "react-router-dom";
import "../css/Project.css";
import A1 from "../assets/akeesha/akeeshaLogo.png";
import A2 from "../assets/akeesha/akeesha1.jpg";
import A3 from "../assets/akeesha/akeesha2.jpg";
import A4 from "../assets/akeesha/akeesha3.jpg";
import A5 from "../assets/akeesha/akeesha4.jpg";
import A6 from "../assets/akeesha/akeesha5.jpg";
import A7 from "../assets/akeesha/akeesha6.jpg";
import A8 from "../assets/akeesha/akeesha7.jpg";
import A9 from "../assets/akeesha/akeesha8.jpg";
import A10 from "../assets/akeesha/akeesha9.jpg";
import A11 from "../assets/akeesha/akeesha10.jpg";
import A12 from "../assets/akeesha/akeesha11.jpg";
import A13 from "../assets/college/capstoneCaseCover.jpg";
import A14 from "../assets/college/groupPic.png";
import A15 from "../assets/college/capstonePassed.jpg";
import myadmin from "../assets/phpmyadmin.png";
import IL from "../assets/inkless/inklessLogo.png";
import I1 from "../assets/inkless/inkless1.jpg";
import I2 from "../assets/inkless/inkless2.jpg";
import I3 from "../assets/inkless/inkless3.jpg";
import I4 from "../assets/inkless/inkless4.jpg";
import alahas from "../assets/miniProjects/alahas.jpg";
import quote from "../assets/miniProjects/QuoteGen.jpg";
import quiz from "../assets/miniProjects/QuizApp.jpg";
import tictactoe from "../assets/miniProjects/tictactoePic.jpg";
import keyframes from "../assets/miniProjects/Keyframes.jpg";
import nht from "../assets/NHT.jpg";
import kb from "../assets/nht/logo.png";
import kb1 from "../assets/nht/KB1.jpg";
import kb2 from "../assets/nht/KB2.jpg";
import kb3 from "../assets/nht/KB3.jpg";
import kb4 from "../assets/nht/KB4.jpg";

const Project = () => {
  return (
    <>
      <div className=" mainContainer pb-5">
        <div className="row text-center projectBox container-fluid mb-5 mx-auto rounded-0">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1>Project Gallery</h1>
            <p className="lead text-body-secondary">
              A gallery of projects serves as a visual timeline of my
              professional and personal growth. To showcase my achievements from{" "}
              <b>College</b> , <b>Bootcamp</b> and <b>Specialized Training</b> ,
              this page demonstrates a continuous commitment to mastering new
              skills.
            </p>
          </div>
        </div>
        <div className="container-fluid projectBox my-3 mx-2 rounded-5">
          <div className="container row row-cols-1 row-cols-sm-12 row-cols-md-2 row-cols-lg-4 row-gap-3 mx-auto my-5 bg-transparent">
            {/*--------------------------------------- first card my portfolio------------------------------------------------ */}
            <div className="col container bg-transparent rounded-3">
              <div className="card projectCard">
                <iframe
                  src="https://lottie.host/?file=8e2943dd-a32c-4838-b510-aaaf11961a77/K8d6b0oFjs.json"
                  style={{ width: "100%", objectFit: "cover" }}
                ></iframe>

                <div className="card-body">
                  <h5 className="card-title">My Portfolio</h5>
                  <p className="card-text">
                    This is my web development portfolio. You can see some of my
                    personal achievements and development projects.
                  </p>
                  {/* <!-- Button trigger modal --> */}
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Details
                  </button>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-fullscreen modal-lg">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="staticBackdropLabel"
                          >
                            Personal Info
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          {/* modal body card section */}
                          <div className="card mb-3">
                            <div className="row g-0">
                              <div className="col-md-4 my-auto">
                                <img
                                  src={Pcontact}
                                  className="img-fluid rounded-start"
                                  alt="..."
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                  <h5 className="card-title">My Portfolio</h5>
                                  <p className="card-text">
                                    This is my portfolio, where you can see my
                                    education and training background as well as
                                    my developments. I created this portfolio
                                    using ReactJS and Bootstrap. I also used
                                    EmailJs for the contact form so that I could
                                    receive messages from the viewers.
                                  </p>
                                  <br></br>
                                  <b>Technologies used:</b>&nbsp;
                                  <span>
                                    <i className="fa-brands fa-react"></i>
                                    &nbsp;&nbsp;
                                    <i className="fa-brands fa-bootstrap"></i>
                                  </span>
                                  <div className="card-text d-flex flex-wrap justify-content-between  align-items-center py-1 my-1 border-top">
                                    <div className="col-md-8 d-flex align-items-center">
                                      <small className=" mb-md-0 text-body-secondary">
                                        Feel free to check the live demo and
                                        code
                                      </small>
                                    </div>

                                    <ul className="nav col-md-4 justify-content-end mx-auto list-unstyled d-flex">
                                      <li className="ms-3">
                                        <Link
                                          className="text-body-secondary"
                                          to="https://github.com/DantechJr/WebdevPortfolio"
                                        >
                                          <i
                                            className="bi bi-github"
                                            width="30"
                                            height="30"
                                          ></i>
                                        </Link>
                                      </li>
                                      <li className="ms-3">
                                        <Link
                                          className="text-body-secondary"
                                          to="https://webdev-portfolio-omega.vercel.app/"
                                        >
                                          <i
                                            className="bi bi-play-circle"
                                            width="30"
                                            height="30"
                                          ></i>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* modal body carousel starts here */}
                          <div
                            id="carouselExampleCaptions"
                            className="carousel slide"
                            data-bs-ride="carousel"
                          >
                            <div className="carousel-indicators">
                              <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                              ></button>
                              <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                              ></button>
                              <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                              ></button>
                            </div>
                            <div className="carousel-inner">
                              <div
                                className="carousel-item bg-dark active"
                                style={{ borderRadius: "10px" }}
                              >
                                <img
                                  src={Phome}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    height: "200px",
                                    width: "200px",
                                    objectFit: "contain",
                                  }}
                                />
                              </div>
                              <div
                                className="carousel-item bg-dark"
                                style={{ borderRadius: "10px" }}
                              >
                                <img
                                  src={Pabout}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    height: "200px",
                                    width: "200px",
                                    objectFit: "contain",
                                  }}
                                />
                              </div>
                              <div
                                className="carousel-item bg-dark"
                                style={{ borderRadius: "10px" }}
                              >
                                <img
                                  src={Pproject}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    height: "200px",
                                    width: "200px",
                                    objectFit: "contain",
                                  }}
                                />
                              </div>
                            </div>
                            <button
                              className="carousel-control-prev"
                              type="button"
                              data-bs-target="#carouselExampleCaptions"
                              data-bs-slide="prev"
                            >
                              <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                              ></span>
                              <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                              className="carousel-control-next"
                              type="button"
                              data-bs-target="#carouselExampleCaptions"
                              data-bs-slide="next"
                            >
                              <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                              ></span>
                              <span className="visually-hidden">Next</span>
                            </button>
                          </div>
                          {/* modal body carousel ends here */}
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-outline-dark"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*--------------------------------------- 2nd card wordpress project--------------------------------- */}
            <div className="col container bg-transparent rounded-3">
              <div className="card projectCard">
                {/* <img src={kodego} className="card-img-top" alt="..." /> */}
                <iframe
                  className="mt-4"
                  src="https://lottie.host/?file=ed2d0465-6b58-4069-a0eb-53da8356ab75/ukR04csMHY.json"
                  style={{ width: "100%", objectFit: "cover" }}
                ></iframe>
                <div className="card-body">
                  <h5 className="card-title">Wordpress Project</h5>
                  <p className="card-text">
                    This project is the output of my college capstone system
                    together with my classmates.
                  </p>
                  {/* <!-- Button trigger modal --> */}
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop1"
                  >
                    Details
                  </button>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="staticBackdrop1"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdrop1Label"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="staticBackdrop1Label"
                          >
                            Wordpress
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          {/* modal body card section */}
                          <div className="card mb-3">
                            <div className="row g-0">
                              <div className="col-md-4">
                                <img
                                  src={A1}
                                  className="img-fluid rounded-start p-4"
                                  alt="..."
                                  style={{
                                    width: "100%",
                                    objectFit: "contain",
                                  }}
                                />
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                  <h5 className="card-title">Akeesha</h5>
                                  <section className="card-text">
                                    This is my college capstone project; it's a
                                    collaborative project with my college
                                    classmates. It's an e-commerce website that
                                    sells vape juice for e-cigarettes. The idea
                                    behind this system was to create a system
                                    that can help to lessen the harmful effects
                                    of traditional tobacco, and since one of our
                                    members literally owns a business that
                                    manufactures their own vape juice, we
                                    decided to create an unofficial website for
                                    their business, Akeesha E-Liquid Vape
                                    Manufacturing. We developed this website
                                    using the Wordpress platform with the
                                    complete functionality of an e-commerce
                                    system, from the login and registration to
                                    the shop gallery, add-to-cart functions, and
                                    checkout form that sends a demo virtual
                                    receipt to the buyers as a copy of their
                                    purchased items. We also integrated a
                                    chatbot that can help our customers with
                                    everything they need inside our system. We
                                    didn't just pass and completely defend our
                                    capstone project; we were awarded as the
                                    <b> Best Capstone</b> project in our batch.
                                    Thanks to my amazing classmates!
                                  </section>
                                  <br></br>
                                  <b>Technologies used:</b>&nbsp;
                                  <span>
                                    <i className="fa-brands fa-wordpress"></i>
                                  </span>
                                  <div className="card-text d-flex flex-wrap justify-content-between  align-items-center py-1 my-1 border-top">
                                    <div className="col-md-8 d-flex align-items-center">
                                      <small className=" mb-md-0 text-body-secondary">
                                        Feel free to check the live demo and
                                        code <em>(links are not yet ready)</em>
                                      </small>
                                    </div>

                                    <ul className="nav col-md-4 justify-content-end mx-auto list-unstyled d-flex">
                                      <li className="ms-3">
                                        <a
                                          className="text-body-secondary"
                                          href="#"
                                        >
                                          <i
                                            className="bi bi-github"
                                            width="30"
                                            height="30"
                                          ></i>
                                        </a>
                                      </li>
                                      <li className="ms-3">
                                        <a
                                          className="text-body-secondary"
                                          href="#"
                                        >
                                          <i
                                            className="bi bi-play-circle"
                                            width="30"
                                            height="30"
                                          ></i>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* modal body carousel starts here */}
                          <div
                            id="carouselExampleCaptions1"
                            className="carousel slide"
                            data-bs-ride="carousel"
                          >
                            {/* <div className="carousel-indicators">
                              <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions1"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                              ></button>
                              <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions1"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                              ></button>
                              <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions1"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                              ></button>
                            </div> */}
                            <div className="carousel-inner">
                              <div
                                className="carousel-item bg-dark active"
                                style={{ borderRadius: "10px" }}
                              >
                                <img
                                  src={A2}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    height: "200px",
                                    width: "200px",
                                    objectFit: "contain",
                                  }}
                                />
                                {/* <div className="carousel-caption ">
                                  <h5>First slide label</h5>
                                  <p>
                                    Some representative placeholder content for
                                    the first slide.
                                  </p>
                                </div> */}
                              </div>
                              <div
                                className="carousel-item bg-dark"
                                style={{ borderRadius: "10px" }}
                              >
                                <img
                                  src={A3}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    height: "200px",
                                    width: "200px",
                                    objectFit: "contain",
                                  }}
                                />
                                {/* <div className="carousel-caption ">
                                  <h5>Second slide label</h5>
                                  <p>
                                    Some representative placeholder content for
                                    the second slide.
                                  </p>
                                </div> */}
                              </div>
                              <div
                                className="carousel-item bg-dark"
                                style={{ borderRadius: "10px" }}
                              >
                                <img
                                  src={A4}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    height: "200px",
                                    width: "200px",
                                    objectFit: "contain",
                                  }}
                                />
                                {/* <div className="carousel-caption ">
                                  <h5>Third slide label</h5>
                                  <p>
                                    Some representative placeholder content for
                                    the third slide.
                                  </p>
                                </div> */}
                              </div>
                              <div
                                className="carousel-item bg-dark"
                                style={{ borderRadius: "10px" }}
                              >
                                <img
                                  src={A5}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    height: "200px",
                                    width: "200px",
                                    objectFit: "contain",
                                  }}
                                />
                                {/* <div className="carousel-caption ">
                                  <h5>Third slide label</h5>
                                  <p>
                                    Some representative placeholder content for
                                    the third slide.
                                  </p>
                                </div> */}
                              </div>
                              <div
                                className="carousel-item bg-dark"
                                style={{ borderRadius: "10px" }}
                              >
                                <img
                                  src={A6}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    height: "200px",
                                    width: "200px",
                                    objectFit: "contain",
                                  }}
                                />
                                {/* <div className="carousel-caption ">
                                  <h5>Third slide label</h5>
                                  <p>
                                    Some representative placeholder content for
                                    the third slide.
                                  </p>
                                </div> */}
                              </div>
                              <div
                                className="carousel-item bg-dark"
                                style={{ borderRadius: "10px" }}
                              >
                                <img
                                  src={A7}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    height: "200px",
                                    width: "200px",
                                    objectFit: "contain",
                                  }}
                                />
                                {/* <div className="carousel-caption ">
                                  <h5>Third slide label</h5>
                                  <p>
                                    Some representative placeholder content for
                                    the third slide.
                                  </p>
                                </div> */}
                              </div>
                              <div
                                className="carousel-item bg-dark"
                                style={{ borderRadius: "10px" }}
                              >
                                <img
                                  src={A8}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    height: "200px",
                                    width: "200px",
                                    objectFit: "contain",
                                  }}
                                />
                                {/* <div className="carousel-caption ">
                                  <h5>Third slide label</h5>
                                  <p>
                                    Some representative placeholder content for
                                    the third slide.
                                  </p>
                                </div> */}
                              </div>
                              <div
                                className="carousel-item bg-dark"
                                style={{ borderRadius: "10px" }}
                              >
                                <img
                                  src={A9}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    height: "200px",
                                    width: "200px",
                                    objectFit: "contain",
                                  }}
                                />
                                {/* <div className="carousel-caption ">
                                  <h5>Third slide label</h5>
                                  <p>
                                    Some representative placeholder content for
                                    the third slide.
                                  </p>
                                </div> */}
                              </div>
                              <div
                                className="carousel-item bg-dark"
                                style={{ borderRadius: "10px" }}
                              >
                                <img
                                  src={A10}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    height: "200px",
                                    width: "200px",
                                    objectFit: "contain",
                                  }}
                                />
                                {/* <div className="carousel-caption ">
                                  <h5>Third slide label</h5>
                                  <p>
                                    Some representative placeholder content for
                                    the third slide.
                                  </p>
                                </div> */}
                              </div>
                              <div
                                className="carousel-item bg-dark"
                                style={{ borderRadius: "10px" }}
                              >
                                <img
                                  src={A11}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    height: "200px",
                                    width: "200px",
                                    objectFit: "contain",
                                  }}
                                />
                                {/* <div className="carousel-caption ">
                                  <h5>Third slide label</h5>
                                  <p>
                                    Some representative placeholder content for
                                    the third slide.
                                  </p>
                                </div> */}
                              </div>
                              <div
                                className="carousel-item bg-dark"
                                style={{ borderRadius: "10px" }}
                              >
                                <img
                                  src={A12}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    height: "200px",
                                    width: "200px",
                                    objectFit: "contain",
                                  }}
                                />
                                {/* <div className="carousel-caption ">
                                  <h5>Third slide label</h5>
                                  <p>
                                    Some representative placeholder content for
                                    the third slide.
                                  </p>
                                </div> */}
                              </div>
                              <div
                                className="carousel-item bg-dark"
                                style={{ borderRadius: "10px" }}
                              >
                                <img
                                  src={A13}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    height: "200px",
                                    width: "200px",
                                    objectFit: "contain",
                                  }}
                                />
                                {/* <div className="carousel-caption ">
                                  <h5>Third slide label</h5>
                                  <p>
                                    Some representative placeholder content for
                                    the third slide.
                                  </p>
                                </div> */}
                              </div>
                              <div
                                className="carousel-item bg-dark"
                                style={{ borderRadius: "10px" }}
                              >
                                <img
                                  src={A14}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    height: "200px",
                                    width: "200px",
                                    objectFit: "contain",
                                  }}
                                />
                                {/* <div className="carousel-caption ">
                                  <h5>Third slide label</h5>
                                  <p>
                                    Some representative placeholder content for
                                    the third slide.
                                  </p>
                                </div> */}
                              </div>
                              <div
                                className="carousel-item bg-dark"
                                style={{ borderRadius: "10px" }}
                              >
                                <img
                                  src={A15}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    height: "200px",
                                    width: "200px",
                                    objectFit: "contain",
                                  }}
                                />
                                {/* <div className="carousel-caption ">
                                  <h5>Third slide label</h5>
                                  <p>
                                    Some representative placeholder content for
                                    the third slide.
                                  </p>
                                </div> */}
                              </div>
                            </div>
                            <button
                              className="carousel-control-prev"
                              type="button"
                              data-bs-target="#carouselExampleCaptions1"
                              data-bs-slide="prev"
                            >
                              <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                              ></span>
                              <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                              className="carousel-control-next"
                              type="button"
                              data-bs-target="#carouselExampleCaptions1"
                              data-bs-slide="next"
                            >
                              <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                              ></span>
                              <span className="visually-hidden">Next</span>
                            </button>
                          </div>
                          {/* modal body carousel ends here */}
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-outline-dark"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*------------------------------------ 3rd card Near Hire Training------------------------------------- */}
            <div className="col container bg-transparent rounded-3">
              <div className="card projectCard">
                <img
                  src={nht}
                  className="card-img-top mx-auto img-fluid rounded-start"
                  alt="..."
                  style={{ width: "100%", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Nanay's in IT</h5>
                  <p className="card-text">
                    This is my output and experience with Near Hire Training.
                  </p>
                  {/* <!-- Button trigger modal --> */}
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop2"
                  >
                    Details
                  </button>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="staticBackdrop2"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdrop2Label"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="staticBackdrop2Label"
                          >
                            NHT Capstone Project
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          {/* modal body card section */}
                          <div className="card mb-3">
                            <div className="row g-0">
                              <div className="col-md-4">
                                <img
                                  src={kb}
                                  className="img-fluid rounded-start"
                                  alt="..."
                                  style={{
                                    width: "100%",
                                    objectFit: "contain",
                                  }}
                                />
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                  <h5 className="card-title">
                                    Kusina Buddy AI Recipe Generator
                                  </h5>
                                  <section className="card-text">
                                    <p>
                                      Kusina Buddy was created to make everyday
                                      meal planning easier for everyone. We know
                                      how stressful it can be to think about
                                      what to cook, especially when time and
                                      ingredients are limited. That’s why we
                                      built an AI-powered tool that helps you
                                      generate recipes based on what you already
                                      have, plan meals for the week, and stay
                                      organized with built-in tools like a
                                      calculator and notepad.
                                    </p>
                                    <p>
                                      Behind this project is Infinite Loop
                                      Thinkers, a group of NIT Batch 5 learners.
                                      While we come from different skill levels
                                      and backgrounds, we share a common goal:
                                      to learn, grow, and create practical,
                                      user-friendly tech solutions. Through the
                                      program, we gained skills in Python and
                                      web technologies, allowing us to combine
                                      creativity and technology to solve real
                                      problems in simple, meaningful ways.
                                    </p>
                                  </section>
                                  <br></br>
                                  <b>Technologies used:</b>&nbsp;
                                  <span>
                                    <i className="fa-brands fa-react mx-1"></i>
                                  </span>
                                  <span>
                                    <i className="fa-brands fa-laravel mx-1"></i>
                                  </span>
                                  <span>
                                    <i className="fa-brands fa-bootstrap mx-1"></i>
                                  </span>
                                  <span className="mx-1">
                                    <img
                                      src={myadmin}
                                      alt=""
                                      style={{
                                        width: "50px",
                                        objectFit: "contain",
                                      }}
                                    />
                                  </span>
                                  <div className="card-text d-flex flex-wrap justify-content-between  align-items-center py-1 my-1 border-top">
                                    <div className="col-md-8 d-flex align-items-center">
                                      <small className=" mb-md-0 text-body-secondary">
                                        Feel free to check the live demo and
                                        code
                                      </small>
                                    </div>

                                    <ul className="nav col-md-4 justify-content-end mx-auto list-unstyled d-flex">
                                      <li className="ms-3">
                                        <Link
                                          className="text-body-secondary"
                                          to="https://github.com/DantechJr/KusinaBuddy"
                                        >
                                          <i
                                            className="bi bi-github"
                                            width="30"
                                            height="30"
                                          ></i>
                                        </Link>
                                      </li>
                                      <li className="ms-3">
                                        <Link
                                          className="text-body-secondary"
                                          to="https://kusinabuddy.onrender.com/"
                                        >
                                          <i
                                            className="bi bi-play-circle"
                                            width="30"
                                            height="30"
                                          ></i>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* modal body carousel starts here */}
                          <div
                            id="carouselExampleCaptions2"
                            className="carousel slide"
                            data-bs-ride="carousel"
                          >
                            <div className="carousel-inner">
                              <div
                                className="carousel-item bg-dark active"
                                style={{ borderRadius: "10px" }}
                              >
                                <img
                                  src={kb1}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    height: "200px",
                                    width: "100%",
                                    objectFit: "contain",
                                  }}
                                />
                              </div>
                              <div
                                className="carousel-item bg-dark"
                                style={{ borderRadius: "10px" }}
                              >
                                <img
                                  src={kb2}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    height: "200px",
                                    width: "100%",
                                    objectFit: "contain",
                                  }}
                                />
                              </div>
                              <div
                                className="carousel-item bg-dark"
                                style={{ borderRadius: "10px" }}
                              >
                                <img
                                  src={kb3}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    height: "200px",
                                    width: "100%",
                                    objectFit: "contain",
                                  }}
                                />
                              </div>
                              <div
                                className="carousel-item bg-dark"
                                style={{ borderRadius: "10px" }}
                              >
                                <img
                                  src={kb4}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    height: "200px",
                                    width: "100%",
                                    objectFit: "contain",
                                  }}
                                />
                              </div>
                            </div>
                            <button
                              className="carousel-control-prev"
                              type="button"
                              data-bs-target="#carouselExampleCaptions2"
                              data-bs-slide="prev"
                            >
                              <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                              ></span>
                              <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                              className="carousel-control-next"
                              type="button"
                              data-bs-target="#carouselExampleCaptions2"
                              data-bs-slide="next"
                            >
                              <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                              ></span>
                              <span className="visually-hidden">Next</span>
                            </button>
                          </div>
                          {/* modal body carousel ends here */}
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-outline-dark"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*--------------------------------------4th card kodego projects--------------------------------------- */}
            <div className="col container bg-transparent rounded-3">
              <div className="card projectCard">
                <img
                  src={kodego}
                  className="card-img-top mx-auto img-fluid rounded-start"
                  alt="..."
                  style={{ width: "100%", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Kodego Projects</h5>
                  <p className="card-text">
                    Here you can view a compilation of my mini-projects in
                    Kodego. As a full-stack web developer bootcamper.
                  </p>
                  {/* <!-- Button trigger modal --> */}
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop3"
                  >
                    Details
                  </button>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="staticBackdrop3"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdrop3Label"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="staticBackdrop3Label"
                          >
                            Compilation
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          {/* modal body card section */}
                          <div className="card mb-3">
                            <div className="row g-0">
                              <div className="col-md-4 my-auto">
                                <img
                                  src={kodego}
                                  className="img-fluid rounded-start"
                                  alt="..."
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                  <h5 className="card-title">Mini Projects</h5>
                                  <div className="card-text">
                                    <div
                                      className="accordion"
                                      id="accordionExample"
                                    >
                                      {/*-------------------------- accordion 1  mini project 1---------------------------------------*/}
                                      <div className="accordion-item">
                                        <h2 className="accordion-header">
                                          <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="false"
                                            aria-controls="collapseOne"
                                          >
                                            Mini Project 1
                                          </button>
                                        </h2>
                                        <div
                                          id="collapseOne"
                                          className="accordion-collapse collapse"
                                          data-bs-parent="#accordionExample"
                                        >
                                          <div className="accordion-body">
                                            <div className="row">
                                              <div className="col-12">
                                                <p>
                                                  This is my
                                                  <b> Mini Project 1 </b>
                                                  in Kodego Bootcamp. In this
                                                  project, I developed an
                                                  e-commerce website that sells
                                                  jewelry online, and we were
                                                  required to develop a system
                                                  using only HTML, CSS, and
                                                  Bootstrap for layout and to
                                                  make it responsive to
                                                  different screen sizes. No
                                                  functionalities yet; just
                                                  static.
                                                  <span>
                                                    <Link
                                                      className="text-body-secondary"
                                                      to="https://github.com/DantechJr/MiniProject1"
                                                    >
                                                      <i className="fa-brands fa-github fa-bounce mx-3 "></i>
                                                    </Link>
                                                  </span>
                                                  <span>
                                                    <Link
                                                      className="text-body-secondary"
                                                      to="https://dantechjr.github.io/MiniProject1/"
                                                    >
                                                      <i className="fa-regular fa-circle-play fa-bounce mx-3 "></i>
                                                    </Link>
                                                  </span>
                                                </p>
                                              </div>
                                              <div className="col-12 ">
                                                <img
                                                  src={alahas}
                                                  alt=""
                                                  style={{
                                                    objectFit: "contain",
                                                    height: "100%",
                                                    width: "100%",
                                                  }}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/*----------------------------- accordion 2 tictactoe-------------------------------------------*/}
                                      <div className="accordion-item">
                                        <h2 className="accordion-header">
                                          <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                          >
                                            TicTacToe
                                          </button>
                                        </h2>
                                        <div
                                          id="collapseTwo"
                                          className="accordion-collapse collapse"
                                          data-bs-parent="#accordionExample"
                                        >
                                          <div className="accordion-body">
                                            <div className="row">
                                              <div className="col-12">
                                                <b>Tictactoe </b>
                                                is a mini game developed using
                                                HTML, CSS, and Javascript. This
                                                activity in the bootcamp
                                                measures and practices our
                                                capabilities in logic since this
                                                app is more into logic
                                                functionalities.
                                                <span>
                                                  <Link
                                                    className="text-body-secondary"
                                                    to="https://github.com/DantechJr/TicTacToe"
                                                  >
                                                    <i className="fa-brands fa-github fa-bounce mx-3 "></i>
                                                  </Link>
                                                </span>
                                                <span>
                                                  <Link
                                                    className="text-body-secondary"
                                                    to="https://dantechjr.github.io/TicTacToe/"
                                                  >
                                                    <i className="fa-regular fa-circle-play fa-bounce mx-3 "></i>
                                                  </Link>
                                                </span>
                                              </div>
                                              <div className="col-12">
                                                <img
                                                  src={tictactoe}
                                                  alt=""
                                                  style={{
                                                    objectFit: "contain",
                                                    height: "100%",
                                                    width: "100%",
                                                  }}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/*----------------------------- accordion 3 quote generator-------------------------------------*/}
                                      <div className="accordion-item">
                                        <h2 className="accordion-header">
                                          <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                          >
                                            Quote Generator
                                          </button>
                                        </h2>
                                        <div
                                          id="collapseThree"
                                          className="accordion-collapse collapse"
                                          data-bs-parent="#accordionExample"
                                        >
                                          <div className="accordion-body">
                                            <div className="row">
                                              <div className="col-12">
                                                <p>
                                                  <b>Quote Generator </b>
                                                  <span>
                                                    is an activity that
                                                    generates random quotes that
                                                    are being retrieved from an
                                                    external API. It was
                                                    developed using HTML, CSS,
                                                    JavaScript, Bootstrap, and
                                                    ReactJs.
                                                  </span>
                                                  <span>
                                                    <Link
                                                      className="text-body-secondary"
                                                      to="https://github.com/DantechJr/QuoteGenerator"
                                                    >
                                                      <i className="fa-brands fa-github fa-bounce mx-3 "></i>
                                                    </Link>
                                                  </span>
                                                  <span>
                                                    <Link
                                                      className="text-body-secondary"
                                                      to="https://quote-generator-seven-zeta.vercel.app/"
                                                    >
                                                      <i className="fa-regular fa-circle-play fa-bounce mx-3 "></i>
                                                    </Link>
                                                  </span>
                                                </p>
                                              </div>
                                              <div className="col-12">
                                                <img
                                                  src={quote}
                                                  alt=""
                                                  style={{
                                                    objectFit: "contain",
                                                    height: "100%",
                                                    width: "100%",
                                                  }}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/*--------------------------- accordion 4 rock paper scissors------------------------------------*/}
                                      <div className="accordion-item">
                                        <h2 className="accordion-header">
                                          <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapsefour"
                                            aria-expanded="false"
                                            aria-controls="collapsefour"
                                          >
                                            Rock Paper Scissors
                                          </button>
                                        </h2>
                                        <div
                                          id="collapsefour"
                                          className="accordion-collapse collapse"
                                          data-bs-parent="#accordionExample"
                                        >
                                          <div className="accordion-body">
                                            <b>Rock, Paper, Scissors </b>
                                            is a fun minigame to play. whether
                                            you want to play solo with the
                                            computer or play with your friends
                                            in player vs. player mode. This game
                                            was developed using HTML, CSS, and
                                            Javascript since logic and functions
                                            are very much needed in this
                                            project.
                                            <span>
                                              <Link
                                                className="text-body-secondary"
                                                to="#"
                                              >
                                                <i className="fa-brands fa-github fa-bounce mx-3 "></i>
                                              </Link>
                                            </span>
                                            <span>
                                              <Link
                                                className="text-body-secondary"
                                                to="#"
                                              >
                                                <i className="fa-regular fa-circle-play fa-bounce mx-3 "></i>
                                              </Link>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      {/*------------------------------ accordion 5 quiz app--------------------------------------------*/}
                                      <div className="accordion-item">
                                        <h2 className="accordion-header">
                                          <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapsefive"
                                            aria-expanded="false"
                                            aria-controls="collapsefive"
                                          >
                                            Quiz App
                                          </button>
                                        </h2>
                                        <div
                                          id="collapsefive"
                                          className="accordion-collapse collapse"
                                          data-bs-parent="#accordionExample"
                                        >
                                          <div className="accordion-body">
                                            <div className="row">
                                              <div className="col-12">
                                                <b>The Quiz app</b> is a form of
                                                question with multiple answers
                                                to choose from. A green color
                                                will appear if you pick the
                                                right answer and a red color if
                                                it's wrong. There are only 10
                                                questions, and after all is
                                                done, the total score will
                                                display, and you have the option
                                                to try again. This project is
                                                developed using HTML, CSS, and
                                                Javascript.
                                                <span>
                                                  <Link
                                                    className="text-body-secondary"
                                                    to="https://github.com/DantechJr/Quiz-App"
                                                  >
                                                    <i className="fa-brands fa-github fa-bounce mx-3 "></i>
                                                  </Link>
                                                </span>
                                                <span>
                                                  <Link
                                                    className="text-body-secondary"
                                                    to="https://dantechjr.github.io/Quiz-App/"
                                                  >
                                                    <i className="fa-regular fa-circle-play fa-bounce mx-3 "></i>
                                                  </Link>
                                                </span>
                                              </div>
                                              <div className="col">
                                                <img
                                                  src={quiz}
                                                  alt=""
                                                  style={{
                                                    objectFit: "contain",
                                                    height: "100%",
                                                    width: "100%",
                                                  }}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/*-------------------------------- accordion 6 css key frames-------------------------------------*/}
                                      <div className="accordion-item">
                                        <h2 className="accordion-header">
                                          <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapsesix"
                                            aria-expanded="false"
                                            aria-controls="collapsesix"
                                          >
                                            CSS Key Frames
                                          </button>
                                        </h2>
                                        <div
                                          id="collapsesix"
                                          className="accordion-collapse collapse"
                                          data-bs-parent="#accordionExample"
                                        >
                                          <div className="accordion-body">
                                            <div className="row">
                                              <div className="col-12">
                                                The<b> CSS Keyframes </b>
                                                Activity is a challenge wherein
                                                we must duplicate the sample
                                                video Kodego provides. All of
                                                the elements in that video are
                                                moving differently, one after
                                                another. Only HTML and CSS are
                                                used in this activity's
                                                keyframes for the animation of
                                                the elements.
                                                <span>
                                                  <Link
                                                    className="text-body-secondary"
                                                    to="https://github.com/DantechJr/CSS-Keyframes"
                                                  >
                                                    <i className="fa-brands fa-github fa-bounce mx-3 "></i>
                                                  </Link>
                                                </span>
                                                <span>
                                                  <Link
                                                    className="text-body-secondary"
                                                    to="https://dantechjr.github.io/CSS-Keyframes/"
                                                  >
                                                    <i className="fa-regular fa-circle-play fa-bounce mx-3 "></i>
                                                  </Link>
                                                </span>
                                              </div>
                                              <div className="col-12">
                                                <img
                                                  src={keyframes}
                                                  alt=""
                                                  style={{
                                                    objectFit: "contain",
                                                    height: "100%",
                                                    width: "100%",
                                                  }}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/*--------------------------------- accordion 7 Kodego Capstone Project----------------------------------*/}
                                      <div className="accordion-item">
                                        <h2 className="accordion-header">
                                          <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseseven"
                                            aria-expanded="false"
                                            aria-controls="collapseseven"
                                          >
                                            Capstone Project
                                          </button>
                                        </h2>
                                        <div
                                          id="collapseseven"
                                          className="accordion-collapse collapse"
                                          data-bs-parent="#accordionExample"
                                        >
                                          <div className="accordion-body">
                                            <div className="row">
                                              <div className="col-12">
                                                <section>
                                                  <p>
                                                    This represents the
                                                    culmination of my bootcamp
                                                    at Kodego. My fellow
                                                    bootcamper and I use{" "}
                                                    <b>ReactJs</b> for the
                                                    front-end and
                                                    <b> Laravel</b> for the
                                                    back-end to create our
                                                    capstone project, which is
                                                    the server for our system.
                                                    We utilize <b>MySQL </b>
                                                    and
                                                    <b> PHPMyAdmin</b> to store
                                                    user data and fetch
                                                    <b> API's</b> from an
                                                    external internet source to
                                                    show books. Last but not
                                                    least, in order to design,
                                                    layout, and set our system's
                                                    responsiveness so that it
                                                    can be viewed on various
                                                    screen widths, we employ
                                                    <b> Bootstrap</b> .
                                                  </p>
                                                  <p>
                                                    Our project is called{" "}
                                                    <b>Inkless Reads</b>. It is
                                                    an internet store that
                                                    offers electronic books for
                                                    sale. We developed our
                                                    e-book online shop to work
                                                    in tandem with the fact that
                                                    we now live in a world where
                                                    technology rules everything
                                                    and that reading real books
                                                    is increasingly fading into
                                                    history. With the use of
                                                    their preferred technology,
                                                    such as smartphones,
                                                    tablets, or PCs, inkless
                                                    reads aims to inspire
                                                    individuals to read more
                                                    frequently.
                                                  </p>
                                                </section>
                                                <span>
                                                  <Link
                                                    className="text-body-secondary"
                                                    to="https://github.com/Jml-Azares/InklessReads"
                                                  >
                                                    <i className="fa-brands fa-github fa-bounce mx-2 "></i>
                                                  </Link>
                                                </span>
                                                <span>
                                                  <Link
                                                    className="text-body-secondary"
                                                    to="https://inkless-reads.vercel.app/"
                                                  >
                                                    <i className="fa-regular fa-circle-play fa-bounce mx-2 "></i>
                                                  </Link>
                                                </span>
                                              </div>
                                              {/* modal body carousel starts here */}
                                              <div
                                                id="carouselExampleCaptions2"
                                                className="carousel slide"
                                                data-bs-ride="carousel"
                                              >
                                                <div className="carousel-inner">
                                                  <div
                                                    className="carousel-item bg-dark active"
                                                    style={{
                                                      borderRadius: "10px",
                                                    }}
                                                  >
                                                    <img
                                                      src={I1}
                                                      className="d-block w-100"
                                                      alt="..."
                                                      style={{
                                                        height: "200px",
                                                        width: "200px",
                                                        objectFit: "contain",
                                                      }}
                                                    />
                                                  </div>
                                                  <div
                                                    className="carousel-item bg-dark"
                                                    style={{
                                                      borderRadius: "10px",
                                                    }}
                                                  >
                                                    <img
                                                      src={I2}
                                                      className="d-block w-100"
                                                      alt="..."
                                                      style={{
                                                        height: "200px",
                                                        width: "200px",
                                                        objectFit: "contain",
                                                      }}
                                                    />
                                                  </div>
                                                  <div
                                                    className="carousel-item bg-dark"
                                                    style={{
                                                      borderRadius: "10px",
                                                    }}
                                                  >
                                                    <img
                                                      src={I3}
                                                      className="d-block w-100"
                                                      alt="..."
                                                      style={{
                                                        height: "200px",
                                                        width: "200px",
                                                        objectFit: "contain",
                                                      }}
                                                    />
                                                  </div>
                                                  <div
                                                    className="carousel-item bg-dark"
                                                    style={{
                                                      borderRadius: "10px",
                                                    }}
                                                  >
                                                    <img
                                                      src={I4}
                                                      className="d-block w-100"
                                                      alt="..."
                                                      style={{
                                                        height: "200px",
                                                        width: "200px",
                                                        objectFit: "contain",
                                                      }}
                                                    />
                                                  </div>
                                                </div>
                                                <button
                                                  className="carousel-control-prev"
                                                  type="button"
                                                  data-bs-target="#carouselExampleCaptions2"
                                                  data-bs-slide="prev"
                                                >
                                                  <span
                                                    className="carousel-control-prev-icon"
                                                    aria-hidden="true"
                                                  ></span>
                                                  <span className="visually-hidden">
                                                    Previous
                                                  </span>
                                                </button>
                                                <button
                                                  className="carousel-control-next"
                                                  type="button"
                                                  data-bs-target="#carouselExampleCaptions2"
                                                  data-bs-slide="next"
                                                >
                                                  <span
                                                    className="carousel-control-next-icon"
                                                    aria-hidden="true"
                                                  ></span>
                                                  <span className="visually-hidden">
                                                    Next
                                                  </span>
                                                </button>
                                              </div>
                                              {/* modal body carousel ends here */}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <br></br>
                                  <b>Technologies used:</b>&nbsp;
                                  <span>
                                    <i className="fa-brands fa-html5 mx-1"></i>
                                  </span>
                                  <span>
                                    <i className="fa-brands fa-css3-alt mx-1"></i>
                                  </span>
                                  <span>
                                    <i className="fa-brands fa-square-js mx-1"></i>
                                  </span>
                                  <span>
                                    <i className="fa-brands fa-bootstrap mx-1"></i>
                                  </span>
                                  <span>
                                    <i className="fa-brands fa-react mx-1"></i>
                                  </span>
                                  <div className="card-text d-flex flex-wrap justify-content-between  align-items-center py-1 my-1 border-top">
                                    <div className="col-md-8 d-flex align-items-center">
                                      <small className=" mb-md-0 text-body-secondary">
                                        Feel free to check the live demo and
                                        code provided inside the accordion
                                        dropdown.
                                      </small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-outline-dark"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*--------------------------------------------- More Projects Coming Soon------------------------------- */}
            <div className="col container bg-transparent rounded-3">
              <div className="card projectCard">
                <img
                  src={sample}
                  className="card-img-top mx-auto img-fluid rounded-start"
                  alt="..."
                  style={{ width: "100%", objectFit: "cover" }}
                />
                <div className="card-body  bg-transparent">
                  <h5 className="card-title">More Projects Coming Soon</h5>
                  <p className="card-text">
                    I'm continuously working on new projects to showcase my
                    skills and creativity. Stay tuned for more exciting updates!
                  </p>
                  {/* <!-- Button trigger modal --> */}
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop4"
                  >
                    Details
                  </button>
                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="staticBackdrop4"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdrop4Label"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="staticBackdrop4Label"
                          >
                            Compilation
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          {/* modal body card section */}
                          <div className="card mb-3">
                            <div className="row g-0">
                              <div className="col-md-4 my-auto">
                                <img
                                  src={kodego}
                                  className="img-fluid rounded-start"
                                  alt="..."
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                  <h5 className="card-title">Mini Projects</h5>
                                  <div className="card-text">
                                    <div
                                      className="accordion"
                                      id="accordionExample"
                                    >
                                      {/* accordion 1  mini project 1*/}
                                      <div className="accordion-item">
                                        <h2 className="accordion-header">
                                          <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="false"
                                            aria-controls="collapseOne"
                                          >
                                            Mini Project 1
                                          </button>
                                        </h2>
                                        <div
                                          id="collapseOne"
                                          className="accordion-collapse collapse"
                                          data-bs-parent="#accordionExample"
                                        >
                                          <div className="accordion-body">
                                            <div className="row">
                                              <div className="col-12">
                                                <p>
                                                  This is my
                                                  <b> Mini Project 1 </b>
                                                  in Kodego Bootcamp. In this
                                                  project, I developed an
                                                  e-commerce website that sells
                                                  jewelry online, and we were
                                                  required to develop a system
                                                  using only HTML, CSS, and
                                                  Bootstrap for layout and to
                                                  make it responsive to
                                                  different screen sizes. No
                                                  functionalities yet; just
                                                  static.
                                                  <span>
                                                    <Link
                                                      className="text-body-secondary"
                                                      to="https://github.com/DantechJr/MiniProject1"
                                                    >
                                                      <i className="fa-brands fa-github fa-bounce mx-3 "></i>
                                                    </Link>
                                                  </span>
                                                  <span>
                                                    <Link
                                                      className="text-body-secondary"
                                                      to="https://dantechjr.github.io/MiniProject1/"
                                                    >
                                                      <i className="fa-regular fa-circle-play fa-bounce mx-3 "></i>
                                                    </Link>
                                                  </span>
                                                </p>
                                              </div>
                                              <div className="col-12 ">
                                                <img
                                                  src={alahas}
                                                  alt=""
                                                  style={{
                                                    objectFit: "contain",
                                                    height: "100%",
                                                    width: "100%",
                                                  }}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* accordion 2 tictactoe*/}
                                      <div className="accordion-item">
                                        <h2 className="accordion-header">
                                          <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                          >
                                            TicTacToe
                                          </button>
                                        </h2>
                                        <div
                                          id="collapseTwo"
                                          className="accordion-collapse collapse"
                                          data-bs-parent="#accordionExample"
                                        >
                                          <div className="accordion-body">
                                            <div className="row">
                                              <div className="col-12">
                                                <b>Tictactoe </b>
                                                is a mini game developed using
                                                HTML, CSS, and Javascript. This
                                                activity in the bootcamp
                                                measures and practices our
                                                capabilities in logic since this
                                                app is more into logic
                                                functionalities.
                                                <span>
                                                  <Link
                                                    className="text-body-secondary"
                                                    to="https://github.com/DantechJr/TicTacToe"
                                                  >
                                                    <i className="fa-brands fa-github fa-bounce mx-3 "></i>
                                                  </Link>
                                                </span>
                                                <span>
                                                  <Link
                                                    className="text-body-secondary"
                                                    to="https://dantechjr.github.io/TicTacToe/"
                                                  >
                                                    <i className="fa-regular fa-circle-play fa-bounce mx-3 "></i>
                                                  </Link>
                                                </span>
                                              </div>
                                              <div className="col-12">
                                                <img
                                                  src={tictactoe}
                                                  alt=""
                                                  style={{
                                                    objectFit: "contain",
                                                    height: "100%",
                                                    width: "100%",
                                                  }}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* accordion 3 quote generator*/}
                                      <div className="accordion-item">
                                        <h2 className="accordion-header">
                                          <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                          >
                                            Quote Generator
                                          </button>
                                        </h2>
                                        <div
                                          id="collapseThree"
                                          className="accordion-collapse collapse"
                                          data-bs-parent="#accordionExample"
                                        >
                                          <div className="accordion-body">
                                            <div className="row">
                                              <div className="col-12">
                                                <p>
                                                  <b>Quote Generator </b>
                                                  <span>
                                                    is an activity that
                                                    generates random quotes that
                                                    are being retrieved from an
                                                    external API. It was
                                                    developed using HTML, CSS,
                                                    JavaScript, Bootstrap, and
                                                    ReactJs.
                                                  </span>
                                                  <span>
                                                    <Link
                                                      className="text-body-secondary"
                                                      to="https://github.com/DantechJr/QuoteGenerator"
                                                    >
                                                      <i className="fa-brands fa-github fa-bounce mx-3 "></i>
                                                    </Link>
                                                  </span>
                                                  <span>
                                                    <Link
                                                      className="text-body-secondary"
                                                      to="https://quote-generator-seven-zeta.vercel.app/"
                                                    >
                                                      <i className="fa-regular fa-circle-play fa-bounce mx-3 "></i>
                                                    </Link>
                                                  </span>
                                                </p>
                                              </div>
                                              <div className="col-12">
                                                <img
                                                  src={quote}
                                                  alt=""
                                                  style={{
                                                    objectFit: "contain",
                                                    height: "100%",
                                                    width: "100%",
                                                  }}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* accordion 4 rock paper scissors*/}
                                      <div className="accordion-item">
                                        <h2 className="accordion-header">
                                          <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapsefour"
                                            aria-expanded="false"
                                            aria-controls="collapsefour"
                                          >
                                            Rock Paper Scissors
                                          </button>
                                        </h2>
                                        <div
                                          id="collapsefour"
                                          className="accordion-collapse collapse"
                                          data-bs-parent="#accordionExample"
                                        >
                                          <div className="accordion-body">
                                            <b>Rock, Paper, Scissors </b>
                                            is a fun minigame to play. whether
                                            you want to play solo with the
                                            computer or play with your friends
                                            in player vs. player mode. This game
                                            was developed using HTML, CSS, and
                                            Javascript since logic and functions
                                            are very much needed in this
                                            project.
                                            <span>
                                              <Link
                                                className="text-body-secondary"
                                                to="#"
                                              >
                                                <i className="fa-brands fa-github fa-bounce mx-3 "></i>
                                              </Link>
                                            </span>
                                            <span>
                                              <Link
                                                className="text-body-secondary"
                                                to="#"
                                              >
                                                <i className="fa-regular fa-circle-play fa-bounce mx-3 "></i>
                                              </Link>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      {/* accordion 5 quiz app*/}
                                      <div className="accordion-item">
                                        <h2 className="accordion-header">
                                          <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapsefive"
                                            aria-expanded="false"
                                            aria-controls="collapsefive"
                                          >
                                            Quiz App
                                          </button>
                                        </h2>
                                        <div
                                          id="collapsefive"
                                          className="accordion-collapse collapse"
                                          data-bs-parent="#accordionExample"
                                        >
                                          <div className="accordion-body">
                                            <div className="row">
                                              <div className="col-12">
                                                <b>The Quiz app</b> is a form of
                                                question with multiple answers
                                                to choose from. A green color
                                                will appear if you pick the
                                                right answer and a red color if
                                                it's wrong. There are only 10
                                                questions, and after all is
                                                done, the total score will
                                                display, and you have the option
                                                to try again. This project is
                                                developed using HTML, CSS, and
                                                Javascript.
                                                <span>
                                                  <Link
                                                    className="text-body-secondary"
                                                    to="https://github.com/DantechJr/Quiz-App"
                                                  >
                                                    <i className="fa-brands fa-github fa-bounce mx-3 "></i>
                                                  </Link>
                                                </span>
                                                <span>
                                                  <Link
                                                    className="text-body-secondary"
                                                    to="https://dantechjr.github.io/Quiz-App/"
                                                  >
                                                    <i className="fa-regular fa-circle-play fa-bounce mx-3 "></i>
                                                  </Link>
                                                </span>
                                              </div>
                                              <div className="col">
                                                <img
                                                  src={quiz}
                                                  alt=""
                                                  style={{
                                                    objectFit: "contain",
                                                    height: "100%",
                                                    width: "100%",
                                                  }}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* accordion 6 css key frames*/}
                                      <div className="accordion-item">
                                        <h2 className="accordion-header">
                                          <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapsesix"
                                            aria-expanded="false"
                                            aria-controls="collapsesix"
                                          >
                                            CSS Key Frames
                                          </button>
                                        </h2>
                                        <div
                                          id="collapsesix"
                                          className="accordion-collapse collapse"
                                          data-bs-parent="#accordionExample"
                                        >
                                          <div className="accordion-body">
                                            <div className="row">
                                              <div className="col-12">
                                                The<b> CSS Keyframes </b>
                                                Activity is a challenge wherein
                                                we must duplicate the sample
                                                video Kodego provides. All of
                                                the elements in that video are
                                                moving differently, one after
                                                another. Only HTML and CSS are
                                                used in this activity's
                                                keyframes for the animation of
                                                the elements.
                                                <span>
                                                  <Link
                                                    className="text-body-secondary"
                                                    to="https://github.com/DantechJr/CSS-Keyframes"
                                                  >
                                                    <i className="fa-brands fa-github fa-bounce mx-3 "></i>
                                                  </Link>
                                                </span>
                                                <span>
                                                  <Link
                                                    className="text-body-secondary"
                                                    to="https://dantechjr.github.io/CSS-Keyframes/"
                                                  >
                                                    <i className="fa-regular fa-circle-play fa-bounce mx-3 "></i>
                                                  </Link>
                                                </span>
                                              </div>
                                              <div className="col-12">
                                                <img
                                                  src={keyframes}
                                                  alt=""
                                                  style={{
                                                    objectFit: "contain",
                                                    height: "100%",
                                                    width: "100%",
                                                  }}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <br></br>
                                  <b>Technologies used:</b>&nbsp;
                                  <span>
                                    <i className="fa-brands fa-html5 mx-1"></i>
                                  </span>
                                  <span>
                                    <i className="fa-brands fa-css3-alt mx-1"></i>
                                  </span>
                                  <span>
                                    <i className="fa-brands fa-square-js mx-1"></i>
                                  </span>
                                  <span>
                                    <i className="fa-brands fa-bootstrap mx-1"></i>
                                  </span>
                                  <span>
                                    <i className="fa-brands fa-react mx-1"></i>
                                  </span>
                                  <div className="card-text d-flex flex-wrap justify-content-between  align-items-center py-1 my-1 border-top">
                                    <div className="col-md-8 d-flex align-items-center">
                                      <small className=" mb-md-0 text-body-secondary">
                                        Feel free to check the live demo and
                                        code provided inside the accordion
                                        dropdown.
                                      </small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-outline-dark"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default Project;
