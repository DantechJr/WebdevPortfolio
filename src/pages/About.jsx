import React from "react";
import "../css/About.css";
import Gradpic from "../assets/college/gradpic.jpg";
import kodego from "../assets/kodegologo.png";
import kodegoPic1 from "../assets/kodego/kodegoPic1.png";
import kodegoPic2 from "../assets/kodego/kodegoPic2.png";
import tesda from "../assets/tesda.png";
import tesdaPic from "../assets/tesda/tesdaPic1.jpg";
import tesdaPic2 from "../assets/tesda/tesdaPic2.jpg";
import accessLogo from "../assets/college/accessLogo.png";
import caseCover from "../assets/college/capstoneCaseCover.jpg";
import groupPic from "../assets/college/groupPic.png";
import capstonePassed from "../assets/college/capstonePassed.jpg";
import capstoneCD from "../assets/college/capstoneCD.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div>
        <div className="text-center">
          <iframe
            src="https://lottie.host/?file=5d816f53-4664-4683-b029-ba9335182f17/ZKr0zHSOAP.json"
            className="w-25"
          ></iframe>
          <span>
            <iframe
              src="https://lottie.host/?file=297ecf35-dc71-43a6-bde6-7993196a50eb/EsqoguHChC.json"
              className="w-25"
            ></iframe>
          </span>
        </div>
        {/* college */}
        <div className="container-fluid college border mb-3">
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
                    I am a graduate of the
                    <b> bachelor of science in information technology </b>
                    course at Access Computer College. where I learned a lot of
                    things connected to computer stuff, such as computer
                    software, hardware, networks, and cyber security. I I also
                    learned photo and video editing skills. and the fundamentals
                    of web development, where I became a part of the group that
                    is awarded the best capstone in our 4th year final capstone
                    presentation as one of the developers of our system.
                  </p>
                  <p>
                    <b>Summary of a capstone project in college</b> <br />
                    It's an e-commerce website that sells vape juice for
                    e-cigarettes. The idea behind the project was to promote an
                    alternative to traditional tobacco, which we all know is
                    deadly. We are not just promoting alternatives but also
                    spreading awareness of the harmful effects of traditional
                    tobacco. We develop our system using a content management
                    system. (CMS) under the <b> WordPress </b>platform. At
                    first, we wanted to create our system from scratch, but we
                    didn't have much time to spare because back then the
                    restrictions were very tight due to COVID-19, which also
                    limited our resources. However, despite all the
                    difficulties, we still managed to finish our system just in
                    time, and the great part is that we defended our capstone
                    project with flying colors, and were named the{" "}
                    <b> Best Capstone Project</b> in our batch.
                  </p>
                </section>
              </div>
              {/* college carousel */}
              <div className="col-12 mt-4">
                <div
                  id="carouselExampleCaptions"
                  className="carousel slide mx-auto my-2"
                  data-bs-ride="carousel"
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
                      <Link target="_blank" to="groupPic.png">
                        <img
                          src={groupPic}
                          className="d-block mx-auto w-100"
                          alt="..."
                          style={{
                            objectFit: "contain",

                            height: "300px",
                          }}
                        />
                      </Link>

                      <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                    {/* 3rd carousel */}
                    <div className="carousel-item">
                      <img
                        src={caseCover}
                        className="d-block w-100"
                        alt="..."
                        style={{
                          objectFit: "contain",

                          height: "300px",
                        }}
                      />
                      <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                    {/* 4th carousel */}
                    <div className="carousel-item">
                      <img
                        src={capstonePassed}
                        className="d-block w-100"
                        alt="..."
                        style={{
                          objectFit: "contain",

                          height: "300px",
                        }}
                      />
                      <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                    {/* 5th carousel */}
                    <div className="carousel-item">
                      <img
                        src={capstoneCD}
                        className="d-block w-100"
                        alt="..."
                        style={{
                          objectFit: "contain",
                          height: "300px",
                        }}
                      />
                      <div className="carousel-caption d-none d-md-block"></div>
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
                KodeGo (<cite>Code-Go</cite>)
              </h1>
              <section>
                <p>
                  A platform called Kodego offers intense computer bootcamps.
                  online instruction in UX design and mobile app development
                  general virtual assistant, WordPress development, and finally,
                  The course I took was full-stack web development for around
                  three months. We learn the foundations of web development from
                  them. which our teacher referred to as the "holy trinity" of
                  the web development, and they are
                  <b> Hypertext Markup Language </b>
                  (HTML), <b> Javascript</b> and <b> Cascading Style Sheets </b>
                  (CSS).
                </p>
                <p>
                  As a full-stack developer, they teach us how to develop a
                  front-end and back-end systems using different tech stacks.
                  After 3 months, we managed to create different mini-projects.
                  and a capstone project, a team project that we must complete,
                  To continue with the application procedure, you must pass the
                  test. which I accomplished with the aid of my incredible
                  groupmates!
                </p>
                <p>
                  The bootcamp didn't just teach us how to develop a web app; it
                  also gave us the experience of how to
                  <b> collaborate with a team </b>
                  to finish a project efficiently and on time, which is the most
                  important thing we acquired in the bootcamp.
                </p>
              </section>
              {/* kodego carousel */}
              <div className="col-12 mt-4">
                <div
                  id="carouselCaptions2"
                  className="carousel slide mx-auto my-2"
                  data-bs-ride="carousel"
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
                        src={kodegoPic1}
                        className="d-block mx-auto w-100"
                        alt="..."
                        style={{
                          objectFit: "contain",
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
                        src={kodegoPic2}
                        className="d-block w-100"
                        alt="..."
                        style={{
                          objectFit: "contain",
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
        <div className="container-fluid tesda border mt-3">
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
                  <b> Computer Systems Servicing NC II </b>is one of the
                  courses. offered by the Technical Education and Skills
                  Development Authority (TESDA). To be able to acquire the
                  certificate, one must possess the skills and knowledge
                  necessary to install and configure computers, set up computer
                  networks and servers, and maintain and repair computer systems
                  and networks.
                </p>
                <p>
                  Computer servicing is the process of maintaining and repairing
                  computers and computer peripherals. It can involve anything.
                  from malware removal and software updates to hardware repairs
                  and troubleshooting.
                </p>
                <p>
                  The examination lasted for almost four hours. and it took
                  place on one of our school's Pasay City campuses. A qualified
                  professional instructor from TESDA led the evaluation.
                  Fortunately, I was able to <b> pass </b> the test for computer
                  system servicing. Sadly, several takers failed to do so. Even
                  though it was first terrifying, it ended up being a{" "}
                  <b> wonderful experience and a rewarding accomplishment</b>{" "}
                  for me.
                </p>
              </section>
              {/* tesda carousel */}
              <div className="col-12 mt-4">
                <div
                  id="carouselCaptions3"
                  className="carousel slide mx-auto my-2"
                  data-bs-ride="carousel"
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
                        src={tesdaPic}
                        className="d-block mx-auto w-100"
                        alt="..."
                        style={{
                          objectFit: "contain",
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
                        src={tesdaPic2}
                        className="d-block w-100"
                        alt="..."
                        style={{
                          objectFit: "contain",
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
      <br />
      <br />
    </>
  );
};

export default About;
