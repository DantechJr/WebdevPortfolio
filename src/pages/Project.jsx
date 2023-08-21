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

const Project = () => {
  return (
    <>
      <div className="container-fluid mainContainer py-3">
        <h1 className="text-center pt-5">Project Gallery</h1>
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-sm-12 row-cols-md-2 row-cols-lg-4 row-gap-3 mx-auto my-5">
            {/* first card my portfolio */}
            <div className="col ">
              <div className="card">
                <iframe src="https://lottie.host/?file=8e2943dd-a32c-4838-b510-aaaf11961a77/K8d6b0oFjs.json"></iframe>

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
                    <div className="modal-dialog modal-dialog-centered modal-lg">
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
                                <div className="carousel-caption d-none d-md-block">
                                  <h5>About me Page</h5>
                                  <p>
                                    You can view my education backgorund and
                                    trainings here.
                                  </p>
                                </div>
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
                                <div className="carousel-caption d-none d-md-block">
                                  <h5>Contact Form Page</h5>
                                  <p>
                                    You can contact with me through this page.
                                  </p>
                                </div>
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
                                <div className="carousel-caption d-none d-md-block">
                                  <h5 className="text-dark">Home page</h5>
                                  <p className="text-dark">
                                    This is the home page of my portfolio
                                  </p>
                                </div>
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

            {/* 2nd card wordpress project */}
            <div className="col ">
              <div className="card">
                {/* <img src={kodego} className="card-img-top" alt="..." /> */}
                <iframe
                  className="mt-4"
                  src="https://lottie.host/?file=ed2d0465-6b58-4069-a0eb-53da8356ab75/ukR04csMHY.json"
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
                                {/* <div className="carousel-caption d-none d-md-block">
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
                                {/* <div className="carousel-caption d-none d-md-block">
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
                                {/* <div className="carousel-caption d-none d-md-block">
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
                                {/* <div className="carousel-caption d-none d-md-block">
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
                                {/* <div className="carousel-caption d-none d-md-block">
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
                                {/* <div className="carousel-caption d-none d-md-block">
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
                                {/* <div className="carousel-caption d-none d-md-block">
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
                                {/* <div className="carousel-caption d-none d-md-block">
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
                                {/* <div className="carousel-caption d-none d-md-block">
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
                                {/* <div className="carousel-caption d-none d-md-block">
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
                                {/* <div className="carousel-caption d-none d-md-block">
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
                                {/* <div className="carousel-caption d-none d-md-block">
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
                                {/* <div className="carousel-caption d-none d-md-block">
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
                                {/* <div className="carousel-caption d-none d-md-block">
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

            {/* 3rd card kodego capstone project */}
            <div className="col ">
              <div className="card">
                <img src={kodego} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Kodego Capstone</h5>
                  <p className="card-text">
                    This is the final output of my experience with the Kodego. A
                    Capstone Project together with my co-bootcampers.
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
                            Project Type
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
                                  src={kodego}
                                  className="img-fluid rounded-start"
                                  alt="..."
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                  <h5 className="card-title">Project Name</h5>
                                  <p className="card-text">
                                    Leron Leron sinta Buko ng papaya Dala-dala'y
                                    buslo Sisidlan ng sinta Pagdating sa dulo'y
                                    Nabali ang sanga Kapos kapalaran Humanap ng
                                    iba
                                  </p>
                                  <br></br>
                                  <b>Technologies used:</b>&nbsp;
                                  <div className="card-text d-flex flex-wrap justify-content-between  align-items-center py-1 my-1 border-top">
                                    <div className="col-md-8 d-flex align-items-center">
                                      <small className=" mb-md-0 text-body-secondary">
                                        Feel free to check the live demo and
                                        code
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
                            id="carouselExampleCaptions2"
                            className="carousel slide"
                            data-bs-ride="carousel"
                          >
                            <div className="carousel-indicators">
                              <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions2"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                              ></button>
                              <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions2"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                              ></button>
                              <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions2"
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
                                  src={kodego}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    height: "200px",
                                    width: "200px",
                                    objectFit: "contain",
                                  }}
                                />
                                <div className="carousel-caption d-none d-md-block">
                                  <h5>First slide label</h5>
                                  <p>
                                    Some representative placeholder content for
                                    the first slide.
                                  </p>
                                </div>
                              </div>
                              <div
                                className="carousel-item bg-dark"
                                style={{ borderRadius: "10px" }}
                              >
                                <img
                                  src={kodego}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    height: "200px",
                                    width: "200px",
                                    objectFit: "contain",
                                  }}
                                />
                                <div className="carousel-caption d-none d-md-block">
                                  <h5>Second slide label</h5>
                                  <p>
                                    Some representative placeholder content for
                                    the second slide.
                                  </p>
                                </div>
                              </div>
                              <div
                                className="carousel-item bg-dark"
                                style={{ borderRadius: "10px" }}
                              >
                                <img
                                  src={kodego}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    height: "200px",
                                    width: "200px",
                                    objectFit: "contain",
                                  }}
                                />
                                <div className="carousel-caption d-none d-md-block">
                                  <h5>Third slide label</h5>
                                  <p>
                                    Some representative placeholder content for
                                    the third slide.
                                  </p>
                                </div>
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

            {/* 4th card kodego mini projects */}
            <div className="col ">
              <div className="card">
                <img src={kodego} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Kodego mini projects</h5>
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
                            Project Type
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
                                  src={kodego}
                                  className="img-fluid rounded-start"
                                  alt="..."
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                  <h5 className="card-title">Project Name</h5>
                                  <p className="card-text">
                                    Leron Leron sinta Buko ng papaya Dala-dala'y
                                    buslo Sisidlan ng sinta Pagdating sa dulo'y
                                    Nabali ang sanga Kapos kapalaran Humanap ng
                                    iba
                                  </p>
                                  <br></br>
                                  <b>Technologies used:</b>&nbsp;
                                  <div className="card-text d-flex flex-wrap justify-content-between  align-items-center py-1 my-1 border-top">
                                    <div className="col-md-8 d-flex align-items-center">
                                      <small className=" mb-md-0 text-body-secondary">
                                        Feel free to check the live demo and
                                        code
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
                            id="carouselExampleCaptions3"
                            className="carousel slide"
                            data-bs-ride="carousel"
                          >
                            <div className="carousel-indicators">
                              <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions3"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                              ></button>
                              <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions3"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                              ></button>
                              <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions3"
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
                                  src={kodego}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    height: "200px",
                                    width: "200px",
                                    objectFit: "contain",
                                  }}
                                />
                                <div className="carousel-caption d-none d-md-block">
                                  <h5>First slide label</h5>
                                  <p>
                                    Some representative placeholder content for
                                    the first slide.
                                  </p>
                                </div>
                              </div>
                              <div
                                className="carousel-item bg-dark"
                                style={{ borderRadius: "10px" }}
                              >
                                <img
                                  src={kodego}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    height: "200px",
                                    width: "200px",
                                    objectFit: "contain",
                                  }}
                                />
                                <div className="carousel-caption d-none d-md-block">
                                  <h5>Second slide label</h5>
                                  <p>
                                    Some representative placeholder content for
                                    the second slide.
                                  </p>
                                </div>
                              </div>
                              <div
                                className="carousel-item bg-dark"
                                style={{ borderRadius: "10px" }}
                              >
                                <img
                                  src={kodego}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    height: "200px",
                                    width: "200px",
                                    objectFit: "contain",
                                  }}
                                />
                                <div className="carousel-caption d-none d-md-block">
                                  <h5>Third slide label</h5>
                                  <p>
                                    Some representative placeholder content for
                                    the third slide.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <button
                              className="carousel-control-prev"
                              type="button"
                              data-bs-target="#carouselExampleCaptions3"
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
                              data-bs-target="#carouselExampleCaptions3"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
