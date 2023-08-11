import React from "react";
import "../css/About.css";
import Gradpic from "../assets/college/gradpic.jpg";
import kodego from "../assets/kodegologo.png";
import tesda from "../assets/tesda.png";
import accessLogo from "../assets/college/accessLogo.png";
import caseCover from "../assets/college/capstoneCaseCover.jpg";
import groupPic from "../assets/college/groupPic.png";
import capstonePassed from "../assets/college/capstonePassed.jpg";

const About = () => {
  return (
    <>
      <div>
        {/* college */}
        <div className="container-fluid college border my-3">
          <div className="row first p-4 m-4" style={{ borderRadius: "10px" }}>
            <div className="col-sm-12  img-fluid col-md-4">
              <img
                src={Gradpic}
                alt="my grad pic"
                className="gradpic"
                style={{ borderRadius: "10px" }}
              />
            </div>

            <div className="col-sm-12 col-md-8">
              <div className="row">
                <div className="col-12">
                  <h1 className="text-center my-3">Access Computer College</h1>
                </div>
                <div className="col-12"></div>
                <section>
                  <p>
                    I am a graduate of the bachelor of science in information
                    technology course at Access Computer College. where I
                    learned a lot of things connected to computer stuff such as
                    computer software, hardware, networks, and cyber security. I
                    also gained skills in photo and video editing and the
                    fundamentals of web development as part of the group that
                    happened to be awarded the best capstone in our 4th year
                    final capstone presentation as one of the developers of our
                    system.
                  </p>
                  <p>
                    <b>summary of a capstone project in college</b> <br />
                    It's an e-commerce website that sells vape juice for
                    e-cigarettes. The idea behind the project was to promote an
                    alternative to traditional tobacco, which we all know is
                    deadly. We are not just promoting alternatives but also
                    spreading awareness of the harmful effects of traditional
                    tobacco. We develop our system using a content management
                    system (CMS) under the WordPress platform. At first, we
                    wanted to create our system from scratch, but we didn't have
                    much time to spare because back then the restrictions were
                    very tight due to COVID-19, which also limited our
                    resources. However, despite all the difficulties, we still
                    managed to finish our system just in time, and the great
                    part is that we defended our capstone project with flying
                    colors and were awarded as the <b>
                      Best Capstone Project
                    </b>{" "}
                    in our batch.
                  </p>
                </section>
              </div>
              {/* college carousel */}
              <div className="col-12 mt-4">
                <div
                  id="carouselExampleCaptions"
                  className="carousel slide mx-auto my-2"
                >
                  <div className="carousel-inner">
                    {/* 1st carousel */}
                    <div className="carousel-item active">
                      <img
                        src={accessLogo}
                        className="d-block mx-auto"
                        alt="..."
                        style={{
                          objectFit: "contain",
                          width: "150px",
                          height: "150px",
                        }}
                      />
                      <div className="carousel-caption d-none d-md-block"></div>
                      <h5 className="text-center">Access Computer College</h5>
                      <p className="text-center">
                        Bachelor of Science in Information Technology
                      </p>
                    </div>
                    {/* 2nd carousel */}
                    <div className="carousel-item">
                      <img
                        src={groupPic}
                        className="d-block mx-auto"
                        alt="..."
                        style={{
                          objectFit: "contain",
                          width: "300px",
                          height: "300px",
                        }}
                      />
                      <div className="carousel-caption d-none d-md-block">
                        {/* <h5>Second slide label</h5>
                      <p>
                        Some representative placeholder content for the second
                        slide.
                      </p> */}
                      </div>
                    </div>
                    {/* 3rd carousel */}
                    <div className="carousel-item">
                      <img
                        src={caseCover}
                        className="d-block w-100"
                        alt="..."
                        style={{
                          objectFit: "contain",
                          width: "300px",
                          height: "300px",
                        }}
                      />
                      <div className="carousel-caption d-none d-md-block">
                        {/* <h5>Third slide label</h5>
                      <p>
                        Some representative placeholder content for the third
                        slide.
                      </p> */}
                      </div>
                    </div>
                    {/* 4th carousel */}
                    <div className="carousel-item">
                      <img
                        src={capstonePassed}
                        className="d-block w-100"
                        alt="..."
                        style={{
                          objectFit: "contain",
                          width: "300px",
                          height: "300px",
                        }}
                      />
                      <div className="carousel-caption d-none d-md-block">
                        {/* <h5>Third slide label</h5>
                      <p>
                        Some representative placeholder content for the third
                        slide.
                      </p> */}
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
              </div>
            </div>
          </div>
        </div>

        {/* Kodego */}
        <div className="container-fluid kodego border my-3">
          <div className="row first p-4 m-4" style={{ borderRadius: "10px" }}>
            <div className="col-sm-12 col-md-4">
              <img
                src={kodego}
                alt="my grad pic"
                className="gradpic"
                style={{ borderRadius: "10px" }}
              />
            </div>

            <div className="col-sm-12 col-md-8">
              <h1 className="text-center my-3">
                Kodego (<cite>Code-go</cite>)
              </h1>
              <section>
                <p>
                  Kodego is a bootcamp platform that offers intensive tech
                  training remotely, such as UX Design, mobile app development,
                  WordPress Development, general virtual assistant, and lastly,
                  full-stack Web Development. I took the course in about 3
                  months. They teach us the fundamentals of web development,
                  which our instructor called the "holy trinity" of web
                  development, and they are
                  <b> Hyper Text Markup Language (HTML)</b>,
                  <b> Cascading Style Sheet (CSS)</b> , and <b>Javascript</b>.
                </p>
                <p>
                  As a Full-stack developer, they teach us how to develop a
                  front-end and back-end system using different tech stacks.
                  After 3 months, we manage to create different mini projects
                  and a capstone project, which is a group project and we must
                  pass it to be able to proceed with the application process.
                  which I did with the help of my amazing group mates!
                </p>
                <p>
                  The bootcamp didn't just teach us how to develop a web app; it
                  also gave us the experience on how to collaborate with a team
                  to finish a project, which is the most important thing we
                  acquired in the bootcamp.
                </p>
              </section>
              {/* kodego carousel */}
              <div className="col-12 mt-4">
                <div
                  id="carouselCaptions2"
                  className="carousel slide mx-auto my-2"
                >
                  <div className="carousel-inner">
                    {/* 1st carousel */}
                    <div className="carousel-item active">
                      <img
                        src={kodego}
                        className="d-block mx-auto"
                        alt="..."
                        style={{
                          objectFit: "contain",
                          width: "150px",
                          height: "150px",
                        }}
                      />
                      <div className="carousel-caption d-none d-md-block"></div>
                      <h5 className="text-center">Kodego Bootcamp</h5>
                      <p className="text-center">Full-stack Web Developer</p>
                    </div>
                    {/* 2nd carousel */}
                    <div className="carousel-item">
                      <img
                        src={kodego}
                        className="d-block mx-auto"
                        alt="..."
                        style={{
                          objectFit: "contain",
                          width: "150px",
                          height: "150px",
                        }}
                      />
                      <div className="carousel-caption d-none d-md-block">
                        {/* <h5>Second slide label</h5>
                      <p>
                        Some representative placeholder content for the second
                        slide.
                      </p> */}
                      </div>
                    </div>
                    {/* 3rd carousel */}
                    <div className="carousel-item">
                      <img
                        src={kodego}
                        className="d-block w-100"
                        alt="..."
                        style={{
                          objectFit: "contain",
                          width: "150px",
                          height: "150px",
                        }}
                      />
                      <div className="carousel-caption d-none d-md-block">
                        {/* <h5>Third slide label</h5>
                      <p>
                        Some representative placeholder content for the third
                        slide.
                      </p> */}
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselCaptions2"
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
                    data-bs-target="#carouselCaptions2"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tesda */}
        <div className="container-fluid tesda border my-3">
          <div className="row first p-4 m-4" style={{ borderRadius: "10px" }}>
            <div className="colsm-12 col-md-4">
              <img
                src={tesda}
                alt="my grad pic"
                className="gradpic"
                style={{ borderRadius: "10px" }}
              />
            </div>

            <div className="col-sm-12 col-md-8">
              <h1 className="text-center my-3">TESDA NCII</h1>
              <section>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident, iure! Magnam quod reiciendis nostrum libero
                  assumenda earum itaque autem, tenetur voluptatum. Officia,
                  laboriosam illo ratione aut aperiam reprehenderit accusantium
                  praesentium?
                </p>
              </section>
              {/* kodego carousel */}
              <div className="col-12 mt-4">
                <div
                  id="carouselCaptions3"
                  className="carousel slide mx-auto my-2"
                >
                  <div className="carousel-inner">
                    {/* 1st carousel */}
                    <div className="carousel-item active">
                      <img
                        src={tesda}
                        className="d-block mx-auto"
                        alt="..."
                        style={{
                          objectFit: "contain",
                          width: "150px",
                          height: "150px",
                        }}
                      />
                      <div className="carousel-caption d-none d-md-block"></div>
                      <h5 className="text-center">Tesda NCII</h5>
                      <p className="text-center">Computer System Servicing</p>
                    </div>
                    {/* 2nd carousel */}
                    <div className="carousel-item">
                      <img
                        src={tesda}
                        className="d-block mx-auto"
                        alt="..."
                        style={{
                          objectFit: "contain",
                          width: "150px",
                          height: "150px",
                        }}
                      />
                      <div className="carousel-caption d-none d-md-block">
                        {/* <h5>Second slide label</h5>
                      <p>
                        Some representative placeholder content for the second
                        slide.
                      </p> */}
                      </div>
                    </div>
                    {/* 3rd carousel */}
                    <div className="carousel-item">
                      <img
                        src={tesda}
                        className="d-block w-100"
                        alt="..."
                        style={{
                          objectFit: "contain",
                          width: "150px",
                          height: "150px",
                        }}
                      />
                      <div className="carousel-caption d-none d-md-block">
                        {/* <h5>Third slide label</h5>
                      <p>
                        Some representative placeholder content for the third
                        slide.
                      </p> */}
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselCaptions3"
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
                    data-bs-target="#carouselCaptions3"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
