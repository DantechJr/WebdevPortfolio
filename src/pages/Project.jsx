import React from "react";
import sample from "../assets/sample.jpg";
import kodego from "../assets/kodegologo.png";
import github from "../assets/github.png";
import { Link } from "react-router-dom";
import "../css/Project.css";

const Project = () => {
  return (
    <>
      <div className="container-fluid mainContainer py-5">
        <h1 className="text-center pt-5">Project Gallery</h1>
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-sm-12 row-cols-md-2 row-cols-lg-4 row-gap-3 mx-auto my-5">
            <div className="col ">
              <div className="card">
                <img src={kodego} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Project Name</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
            <div className="col ">
              <div className="card">
                <img src={kodego} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Project Name</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
            <div className="col ">
              <div className="card">
                <img src={kodego} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Project Name</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
            <div className="col ">
              <div className="card">
                <img src={kodego} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Project Name</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
